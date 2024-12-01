function upDate(previewPic) {
    console.log("Hovered over or focused on:", previewPic);
    console.log("Image Source:", previewPic.src);
    console.log("Alt Text:", previewPic.alt);

    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
    document.getElementById('image').innerHTML = previewPic.alt;
}

function unDo() {
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

function initializeTabFocus() {
    console.log("Page loaded, initializing tab focus for accessibility.");
    const images = document.querySelectorAll('.image-container img');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Tabindex set for image:", images[i].alt);
    }
}