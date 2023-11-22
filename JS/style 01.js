window.onload = function displayrandomImage() {
    var randomImages = [
        "Multimedia/01.png",
        "Multimedia/02.png",
        "Multimedia/03.png",
        "Multimedia/04.png",
        "Multimedia/06.png",
        "Multimedia/07.png",
        "Multimedia/08.png",
        "Multimedia/09.png",
        "Multimedia/10.png",
        "Multimedia/11.png",

    ];
    var num = Math.floor(Math.random() * randomImages.length);
    document.getElementById("randomImage").src = randomImages[num];
}