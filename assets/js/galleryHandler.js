(function () {
    $(document).ready(function() {
        var gal = $('#jsGallery').jsGallery({
            showAlbums: true,
            connectAlbums: true
        });

        var gal = $('#jsGallery').jsGallery();

        $('#showGal').click(function(){
            gal.jsGallery('show', '', 4);
        });
        
        $('.showGal').each(function(idx) {
            $(this).click(() => {
                gal.jsGallery('show', $(this).data('album-name'), idx);
            })
        });
    });
}(jQuery));