$( document ).ready(function() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/ambiance");
    editor.getSession().setMode("ace/mode/html");


        $('#editor').keyup(function(){
        $('#output').html(editor.getValue());
    });

});