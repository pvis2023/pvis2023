var program_data = [
    {
        'header': 'Keynotes',
        'link': '/pvis2023/pages/programs/keynotes',
        'date_link': '2023-02-20',
        'date_text': 'February 20, 2023',
        'content': `
            <p> 
                Introducing the keynotes program at PacificVis 2023.
            </p>
        `
    },
    {
        'header': 'Accepted Papers',
        'link': '/pvis2023/pages/programs/accept',
        'date_link': '2023-02-28',
        'date_text': 'February 28, 2023',
        'content': `
            <p> 
                Introducing accepted papers for PacificVis 2023.
            </p>
        `
    },
    {
        'header': 'Awards',
        'link': '/pvis2023/pages/programs/awards',
        'date_link': '2023-01-31',
        'date_text': 'January 31, 2023',
        'content': `
            <p> 
                Introducing paper awards for PacificVis 2023.
            </p>
        `
    }
];

window.addEventListener('load', function() {
    generate_program_content();
    createArrowIcon();
});

function generate_program_content() {
    var elem = document.getElementsByClassName('entries-grid')[0];

    var htmls = ``;
    for(var data of program_data) {
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