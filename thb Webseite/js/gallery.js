var title = "Constructing HTML Elements";

var gallery = [
    '<div>',
        '<h2>Gallerie</h2>',
        '<div class="row">',
            '<div class="col s12">',
                '<img class="materialboxed" id="headlinerImg" style="width: 100%;" src="../img/gallery/headliner.jpg">',
            '</div>',
            '<div class="col s12">',
                '<hr>',
            '</div>',
            '<div id="imgMatrix">\n</div>'
];
// html: '<div ...>\n<h1 ...>Constructing HTML Elements<h1>\n</div>'

/*var imgElement = [
    '<div class="s6 m4>',
        '<img src="">',
    '</div>'
]*/

document.getElementById('imageContainer').innerHTML += gallery.join("\n");
try{
    for (let i = 1; i < 21; i++) {

        var img = '<img src="../img/gallery/' + String(i) + '.jpg" class="matrixImg" alt="" id="matrixImg' + String(i) + '">';
    
        img = [
            '<div class="col s6 m4">',
            img,
            '</div>'
        ].join("\n");

        document.getElementById('imgMatrix').innerHTML += img;
        
        document.getElementById("matrixImg" + String(i)).onerror = function(){
            //document.getElementById("matrixImg" + String(i)).parentElement.style.visibility = "hidden";
            var element = document.getElementById("matrixImg" + String(i));
            element.parentNode.removeChild(element);
        }

    }
}
finally{

}


document.getElementById('imageContainer').innerHTML += "\n</div>\n</div>";