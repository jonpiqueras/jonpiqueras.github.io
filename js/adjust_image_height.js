
document.addEventListener('DOMContentLoaded', function() {
    function adjustUniformImageSize() {
        // Get all the .paper-content elements in the research section
        var contents = document.querySelectorAll('#research .paper-content');
        var images = document.querySelectorAll('#research .research-image');
        
        // Find the smallest image size among all the images associated with .paper-content
        var minImageSize = Infinity;
        contents.forEach(function(content, index) {
            var associatedImage = images[index];
            var aspectRatio = associatedImage.naturalWidth / associatedImage.naturalHeight;
            var currentImageHeight = content.clientHeight * aspectRatio;
            if (currentImageHeight < minImageSize) {
                minImageSize = currentImageHeight;
            }
        });

        // Set the size of all images in the research section to this smallest image size
        images.forEach(function(image) {
            var aspectRatio = image.naturalWidth / image.naturalHeight;
            var height = minImageSize / aspectRatio;
            image.style.height = height + 'px';
            image.style.width = minImageSize + 'px';
        });
    }
    
    // Adjust image sizes when the page loads
    adjustUniformImageSize();

    // Adjust image sizes every time the window is resized
    window.addEventListener('resize', adjustUniformImageSize);
});
