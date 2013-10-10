#FBalbum

##Why I made this plugin

One day, I tried to find a simple solution to use images from a facebook photo album for a website I was working on.  I couldn’t find anything that was free wasn’t dependent on a CMS like WordPress or Joomla.  I couldn’t find it, so I made it. I posted my code to the forums I was searching on where other people like myself were looking for a solution, and it caught on! Now its apparently being used across the world. Very exciting.

*note*: this code does not work for personal “profile” page albums – only public fan-pages, business pages, etc…

Some quick demos I put together: I still haven’t added any styles or anything, but it should be good to get ya started. I’ll be improving on these Demos soon.

__Basic Usage:__

    $('#FBalbum').fbAlbum({
      'albumID':'10150302289698306'
    });

__The Default Settings:__

    {
      'albumID' : '10150302289698306',
      'limit' : 100, // limit on number of linked photos in album
      'limitThumbs' : false, // set to number to limit number of thumbnails displayed
      'ulClass' : 'album',
      'rel' : 'group',
      'callback' : '',
      'title' : true,
      'thumbSize' : 0, // use sizes 1 - 9 to change from default size
      'fullSize' : 0 // use sizes 1 - 9 to change from default size
    };

##Live Demos & Examples

coming soon as I port stuff over to GitHub
