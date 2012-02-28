hide = function() {
    if (document.getElementById('gbg1')) {
        document.getElementById("gbgs1").style.display = 'none';
    }

    if (frames['canvas_iframe']) {
        if (frames['canvas_frame'].contentWindow.document.getElementById('gbg1')) {
            frames['canvas_frame'].contentWindow.document.getElementById('gbg1').style.display = 'none';
        }
    }
}

setTimeout(hide, 100);
