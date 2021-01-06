document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseenter', function() {
        this.firstElementChild.classList.add('section-hover')
    }, false)
    section.addEventListener('mouseleave', function() {
        this.firstElementChild.classList.remove('section-hover')
    }, false)
})

AOS.init()

function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Click to copy my email";
}

// Galerias de Video/Imagem
var slideIndex = 1;
var videoIndex = 1;
showSlides(slideIndex);
showVideos(videoIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function plusVideos(n) {
    showVideos(videoIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function currentVideo(n) {
    showVideos(videoIndex = n);
}

WebFontConfig = {
    google: { families: ['Open+Sans::latin'] }
};
(function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showVideos(n) {
    var i;
    var videos = document.getElementsByClassName("myVideos");
    var dots = document.getElementsByClassName("dotVideo");
    if (n > videos.length) { videoIndex = 1 }
    if (n < 1) { videoIndex = videos.length }
    for (i = 0; i < videos.length; i++) {
        videos[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    videos[videoIndex - 1].style.display = "block";
    dots[videoIndex - 1].className += " active";
}