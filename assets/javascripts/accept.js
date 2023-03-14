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
            
            for(var author of paper_content['author']) {
                inHtml += `
                    <ul>
                        <li class='author'>${author['name']} (${author['institution']})</li>
                    </ul>
                `;
            }
            inHtml += `</paper><br>`;                
        }

        obj.innerHTML = inHtml;
    }
});
