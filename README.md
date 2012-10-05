### Basic Usage:

``` javascript
$('#FBalbum').fbAlbum({
  'albumID':'10150302289698306'
});
```

### The Default Settings:

``` javascript
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
```