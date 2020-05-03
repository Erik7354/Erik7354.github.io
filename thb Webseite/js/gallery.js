/////////////////////////////
// JS - Gallerie Generator //
/////////////////////////////

// Setting the Header for the gallery; headline img and <hr>
var gallery = [
    '<div>',
        '<h2>Gallerie</h2>',
        '<div class="row">',
            '<div class="col s12">',
                '<img class="materialboxed" id="headlinerImg" style="width: 100%;" src="../img/gallery/headliner.jpg">',
            '</div>',
            '<div class="col s12">',
                '<hr id="headlineTrenner">',
            '</div>',
            '<div id="imgMatrix">\n</div>'
];
// Adding the Header to the website
document.getElementById('imageContainer').innerHTML += gallery.join("\n");

// for Schleife für Max 21 Bilder / 7 Reihen
for (let i = 1; i < 21; i++) {
    // Bild Tag mit Dateipfad wird zusammengesetzt
    var img = '<img src="../img/gallery/' + String(i) + '.jpg" class="matrixImg" alt="" id="matrixImg' + String(i) + '">';
    
    // Bild wird in Column gepackt und zu einem String verarbeitet
    img = [
        '<div class="col s12 m4">',
        img,
        '</div>'
    ].join("\n");

    // Bild wird hinzugefügt
    document.getElementById('imgMatrix').innerHTML += img;
    
    // löscht das Bild auf der Webseite falls es nicht gefunden wurde; Error Message und Element bleibt
    document.getElementById("matrixImg" + String(i)).onerror = function(){
        //document.getElementById("matrixImg" + String(i)).parentElement.style.visibility = "hidden";
        var element = document.getElementById("matrixImg" + String(i));
        element.parentNode.removeChild(element);
    }

    // added nach drei Bildern (einer Zeile) einen <hr> Tag
    if (i%3 == 0) {
    document.getElementById('imgMatrix').innerHTML += '<div class="col s12"><hr class="matrixImgTrenner"></div>';
    }

}

// Schließende Div Tags für die Row und das overall Div
document.getElementById('imageContainer').innerHTML += "\n</div>\n</div>";