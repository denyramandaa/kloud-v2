(function () {
    $(document).ready(function() {
        var gal = $('#jsGallery').jsGallery({
            showAlbums: true,
            connectAlbums: true
        });

        var gal = $('#jsGallery').jsGallery();
        
        $('.showGal').each(function(idx) {
            $(this).click(() => {
                gal.jsGallery('show', $(this).data('album-name'), parseInt($(this).data('album-idx')));
            })
        });
    });
}(jQuery));