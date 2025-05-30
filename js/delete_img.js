var deleteButtons = document.querySelectorAll('.delete-btn');

function deleteImage(event) {
    event.preventDefault();
    var buttonId = this.id;
    var imageId = buttonId.replace('delete-btn', 'image');
    var image = document.getElementById(imageId);

    if (image) {
        var imageContainer = image.closest('.image-container');
        if (imageContainer) {
            imageContainer.parentNode.removeChild(imageContainer);
        }
    }
}

for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteImage);
}
