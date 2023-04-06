var venue_data = [
    {
        'header': 'Reception',
        'link': '/pvis2023/pages/venues/reception',
        'date_link': '2023-04-04',
        'date_text': 'April 04, 2023',
        'content': `
            <p> 
                Introducing the reception information of PacificVis 2023.
            </p>
        `
    },
    {
        'header': 'Banquet',
        'link': '/pvis2023/pages/venues/banquet',
        'date_link': '2023-04-04',
        'date_text': 'April 04, 2023',
        'content': `
            <p> 
                Introducing the banquet information of PacificVis 2023.
            </p>
        `
    }
];

window.addEventListener('load', function() {
    generate_venue_content();
    createArrowIcon();
});

function generate_venue_content() {
    var elem = document.getElementsByClassName('entries-grid')[0];

    var htmls = ``;
    for(var data of venue_data) {
        htmls += `
        <article class="entry">
            <header class="entry-header">
                <h3 class="entry-title">
                    <a href="${data['link']}" rel="bookmark">${data['header']}</a>
                </h3>
            </header>
            <footer class="entry-meta">
                <ul>
                    <li>
                        <span class="icon icon-calendar"></span>
                        <time class="entry-time" datetime="${data['date_link']}T00:00:00+00:00">${data['date_text']}</time>
                    </li>
                </ul>
            </footer>
            <div class="entry-excerpt">
                ${data['content']}
                <p>
                    <a href="${data['link']}" class="more-link">
                        Read More
                        <span class="icon icon--arrow-right"></span>
                    </a>
                </p>
            </div>
        </article>
        `;
    }

    elem.innerHTML = htmls;
}
