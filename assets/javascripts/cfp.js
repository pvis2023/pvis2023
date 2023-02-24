var cfp_data = [
    {
        'header': 'CFP - Full Papers',
        'link': '/pvis2023/pages/cfps/cfp_full',
        'date_link': '2022-07-20',
        'date_text': 'July 20, 2022',
        'content': `
            <p> PacificVis is a unified visualization symposium, welcoming all areas of visualization research 
                such as information visualization, scientific visualization, graph and network visualization, 
                visual analytics, and visualization applications in domains such as (but not limited to) 
                biological sciences, education, machine learning, physical sciences, security, and social science. 
                Authors are invited to submit original and unpublished research and application papers in all areas of 
                visualization.
                <a href="http://pvis2023.github.io/pvis2023">PacificVis 2023</a> 
                will be held in Seoul, Korea on April 18-21, 2023.
                We encourage papers in any new, novel, and exciting research area that pertains to visualization.
            </p>
        `
    },
    {
        'header': 'CFP - Visualization Notes',
        'link': '/pvis2023/pages/cfps/cfp_notes',
        'date_link': '2022-10-11',
        'date_text': 'October 11, 2022',
        'content': `
            <p> PacificVis 2023 features a short paper track, called “Visualization Notes”. The purpose of this track is to 
                encourage young researchers to present their work and discuss with participants including present senior researchers. 
                The submissions can be late-breaking results or work in progress, while they should be novel enough to attract interest 
                from the visualization community. PacificVis 2023 will be held in Seoul, Korea on April 18-21, 2023. 
            </p>
        `
    },
    {
        'header': 'CFP - Posters',
        'link': '/pvis2023/pages/cfps/cfp_posters',
        'date_link': '2022-12-22',
        'date_text': 'December 22, 2022',
        'content': `
            <p> 
                The PacificVis 2023 Poster Program welcomes all areas of visualization research, 
                including information visualization, scientific visualization, and visual analytics 
                science and technology. As we would like the authors to demonstrate novel and applicable
                ideas in all aspects of visualization, posters on work in progress and practical applications 
                are welcome.
            </p>
        `
    },
    {
        'header': 'Call for Visual Data Storytelling Contest Entries',
        'link': '/pvis2023/pages/cfps/cfp_story',
        'date_link': '2022-10-22',
        'date_text': 'October 22, 2022',
        'content': `
            <p> 
                A "Visual Data Storytelling Contest 2023" opened its <a href="https://visstory.github.io/"> own website.
            </p>
        `
    },
    {
        'header': 'CFP - Visualization Meets AI 2023',
        'link': '/pvis2023/pages/cfps/cfp_meet',
        'date_link': '2022-10-11',
        'date_text': 'October 11, 2022',
        'content': `
            <p> 
                A co-located workshop "Visualization Meets AI 2023" opened its <a href="https://vismeetsai.github.io/"> own website. </a> 
            </p>
        `
    },
];

window.addEventListener('load', function() {
    generate_cfp_content();
    createArrowIcon();
});

function generate_cfp_content() {
    var elem = document.getElementsByClassName('entries-grid')[0];

    var htmls = ``;
    for(var data of cfp_data) {
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