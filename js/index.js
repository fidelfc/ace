console.log( "ready!" );
var output = document.getElementById('output');
var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/html");
var contento;


function code(){
    var contento = editor.getValue(); 
    output.innerHTML = contento;
}