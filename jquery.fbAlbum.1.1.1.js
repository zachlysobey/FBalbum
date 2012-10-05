
/*  
    1.1.1   - fixed title escaping bug
    1.1     - added options {limitThumbs, thumbSize, fullSize}
    1.02    - moved 'title' attribute from <img> to <a> 
            - added alt attribute to <img> 
    1.01    - added 'rel' option for <a> tags 
*/

(function($) {
    'use strict';
    $.fn.fbAlbum = function(options) {
        var $this = this;
        var settings = {
            'albumID': '10150302289698306',
            'limit': 100,
            'limitThumbs': false,
            'ulClass': 'album',
            'rel': 'group',
            'callback': '',
            'title': true,
            'thumbSize': 0,
            'fullSize': 0
        };

        if (options) {
            $.extend(settings, options);
        }

        var graph = "https://graph.facebook.com/" + settings.albumID + "/photos?limit=" + settings.limit + "&callback=?";

        $.getJSON(graph, function(data) {
            var albumItem = [],
                val2;
            for (var key in data) {
                for (var key2 in data[key]) {
                    val2 = data[key][key2];
                    if (typeof(val2.source) != "undefined") {
                        var imgHTML = '',
                            liClass = 'class="fbThumb"',
                            liHTML, thumbImg = settings.thumbSize === 0 ? val2.picture : val2.images[9 - settings.thumbSize]['source'],
                            fullImg = settings.fullSize === 0 ? val2.source : val2.images[9 - settings.fullSize]['source'],
                            title, href = 'href="' + fullImg + '" ',
                            rel = 'rel="' + settings.rel + '" ';
                        if (settings.title && val2.name) {
                            title = val2.name.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>').replace(/"/g, '"').replace(/'/g, ''');
                            title = 'title="' + title + '" ';
                        } else {
                            title = "";
                        }
                        if (settings.limitThumbs && key2 >= settings.limitThumbs) {
                            imgHTML = '';
                            liClass = 'class="noThumb"';
                        } else {
                            imgHTML = '<img src="' + thumbImg + '" alt="facebook album thumbnail" />';
                        }
                        liHTML = '<li ' + liClass + '><a class="imageLink" ' + rel + href + title + '>' + imgHTML + '</a></li>';
                        albumItem.push(liHTML);
                    };
                };
            };
            $('<ul />', {
                'class': settings.ulClass,
                html: albumItem.join('')
            }).appendTo($this);
            if (settings.callback) {
                settings.callback()
            };
        });
        return this;
    };
})(jQuery); 