// fbalbumJS2.js by zach@lysobey.com
(function ($) {
    $.fn.fbAlbum = function (options) {
        var $targetElement = this,
            graph = "https://graph.facebook.com/",
            settings = {
                'albumID' : '10150302289698306',
                'limit' : 100,
                'limitThumbs' : false,
                'ulClass' : 'album',
                'rel' : 'group',
                'callback' : '',
                'title' : true,
                'thumbSize' : 0,
                'fullSize' : 0,
                'caption' : false,
                'callback' : function () {}
            };
        if (options) {
            $.extend(settings, options);
        }
        graph += settings.albumID + "/photos?fields=name,picture,images,source&limit=" + settings.limit + "&callback=?";
        $.getJSON(graph, function (json) {
            var albumItem = [],
                currentIndex = 0,
                $ul = $('<ul>');
            $.each(json.data, function () {
                if (typeof this.picture !== "undefined") {
                    var thumbImg = settings.thumbSize === 0 ? this.picture : this.images[9 - settings.thumbSize].source,
                        fullImg = settings.fullSize === 0 ? this.source : this.images[9 - settings.fullSize].source,
                        title = (settings.title && this.name) ? this.name : '',
                        $noThumb = (settings.limitThumbs && (currentIndex += 1) >= settings.limitThumbs),
                        $img = $noThumb ? null : $('<img>').attr({
                            'src': thumbImg,
                            'alt': title
                        }),
                        $caption = (!settings.caption || title === '') ? null : $('<p>').addClass('caption').text(title),
                        $a = $('<a>').attr({
                            'class': 'imageLink',
                            'rel': settings.rel,
                            'title': title,
                            'href': fullImg
                        }),
                        $li = $('<li>').attr({
                            'class': $noThumb ? 'noThumb' : 'fbThumb'
                        });
                    $ul.append($li.append($a.append($img, $caption))).addClass(settings.ulClass);
                }
            });
            $targetElement.append($ul);
            settings.callback();
        });
        return $targetElement;
    };
}(jQuery));
