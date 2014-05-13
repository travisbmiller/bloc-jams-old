var updateCollectionView = function() {
  
  var buildAlbumOverlay = function(albumURL) {
    var template =
      '<div class="collection-album-image-overlay">'
    + '  <div class="collection-overlay-content">'
    + '    <a class="collection-overlay-button" href="' + albumURL + '">'
    + '      <i class="fa fa-play"></i>'
    + '    </a>'
    + '    &nbsp;'
    + '    <a class="collection-overlay-button">'
    + '      <i class="fa fa-plus"></i>'
    + '    </a>'
    + '  </div>'
    + '</div>'
    ;
    return $(template); // Generate the DOM element with jQuery
  };


  var buildAlbum = function() {
    var albumTemplate = 
      '<div class="col-md-2 thumbs">'
    + '  <div class="collection-album-image-container">'
    + '    <img src="/images/album-placeholder.png">'
    + '      <div class="caption">'       
    + '        <p class="album-name">Album Name</p>'
    + '        <p class="artist-name">Artist Name</p>'
    + '        <p class="song">X Song</p>'
    + '      </div>'
    + '  </div>'
    + '</div>'
    ;
    return $(albumTemplate);
  };


  for (var i = 0; i < 33; i++) {
    $(".row.album-thumbnails").append(buildAlbum)
  }



  var onHover = function(event) {
    $(this).append(buildAlbumOverlay("/album"));
  }

  var offHover = function(event) {
    $(this).find('.collection-album-image-overlay').remove();
  }

  $('.thumbs').find('.collection-album-image-container').hover(onHover,offHover);
};

if (document.URL.match(/\/collection/)) {
  // Wait until the HTML is fully processed.
  $(document).ready(function() {

  updateCollectionView()    
    
  });
}
