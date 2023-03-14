window.addEventListener('load', function() {
    var objs = document.getElementsByTagName('paper');
    
    for(var obj of objs) {
        var inHtml = ``;

        var types = obj.classList[1];
        var id = obj.classList[2];
        var tag = obj.classList[3];

        var data = paper_data[types].find(e => e.id == id);
        console.log(data);
    }
});
