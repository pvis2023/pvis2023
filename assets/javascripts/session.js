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
        var award = paper_content['award'];
        
        if(award == undefined) {
            inHtml += `
                <span class='title'>[${tag}] ${paper_content['title']}</span>
            `;
        }
        else {
            if(award == 'full_best') {
                inHtml += `
                    <span class='title'><span style="color:#FFD700;">[Best Paper]</span>[${tag}] ${paper_content['title']}&nbsp;&nbsp;<span class="fa fa-star awarded"></span><span class="fa fa-star awarded"></span><span class="fa fa-star awarded"></span></span>
                `;
            }
            else if(award == 'full_honor') {
                inHtml += `
                    <span class='title'><span style="color:#FFD700;">[Paper Honorable Mention]</span>[${tag}] ${paper_content['title']}&nbsp;&nbsp;<span class="fa fa-star awarded"></span><span class="fa fa-star awarded"></span></span>
                `;
            }
            else if(award == 'note_best') {
                inHtml += `
                    <span class='title'><span style="color:green;">[Best Visualization Notes]</span>[${tag}] ${paper_content['title']}&nbsp;&nbsp;<span class="fa fa-star awarded" style="color:green;"></span><span class="fa fa-star awarded" style="color:green;"></span><span class="fa fa-star awarded" style="color:green;"></span></span>
                `;
            }
            else if(award == 'note_honor') {
                inHtml += `
                    <span class='title'><span style="color:green;">[Visualization Notes Honorable Mention]</span>[${tag}] ${paper_content['title']}&nbsp;&nbsp;<span class="fa fa-star awarded" style="color:green;"></span><span class="fa fa-star awarded" style="color:green;"></span></span>
                `;
            }
        }

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