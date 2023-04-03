window.addEventListener('load', function() {
    var objs = document.getElementsByTagName('paper');
    
    for(var obj of objs) {
        var inHtml = ``;

        var types = obj.classList[1];
        var id = obj.classList[2];
        var tag = obj.classList[3];

        if(obj.classList[4] != undefined) {
            tag += ' ' + obj.classList[4];
        }

        var paper_content = paper_data[types].find(e => e.id == id);
        
        inHtml += `
            <span class='title'>[${tag}] ${paper_content['title']}</span>
        `;

        inHtml += `<ul>`;
        for(var author of paper_content['author']) {
            inHtml += `
                    <li class='author'>${author['name']} (${author['institution']})</li>
            `;
        }
        inHtml += `</ul>`;

        obj.innerHTML = inHtml;
    }
});
