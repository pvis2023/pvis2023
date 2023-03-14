window.addEventListener('load', function() {
    for(var id in paper_data) {
        var obj = document.getElementsByClassName(id)[0];
        var inHtml = ``;

        var content = paper_data[id];

        for(var paper_content of content) {
            inHtml += `
                <paper class="accept">
                    <span class='title'>(${paper_content['id']}) ${paper_content['title']}</span>
            `;
            
            inHtml += `<ul>`;
            for(var author of paper_content['author']) {
                inHtml += `
                        <li class='author'>${author['name']} (${author['institution']})</li>
                `;
            }
            inHtml += `</ul></paper><br>`;                
        }

        obj.innerHTML = inHtml;
    }
});
