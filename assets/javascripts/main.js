var menuData = {
    'Home': {
        'link': "/pvis2023/",
        'sub':undefined
    },
    'Contribute': {
        'link': '/pvis2023/pages/cfp',
        'sub': {
            'Full Paper':'/pvis2023/pages/cfps/cfp_full',
            'Visualization Notes':'/pvis2023/pages/cfps/cfp_notes',
            'Posters':'/pvis2023/pages/cfps/cfp_posters',
            'Storytelling Contest':'/pvis2023/pages/cfps/cfp_story',
            'Workshop':'/pvis2023/pages/cfps/cfp_meet',
        }
    },
    'Program': {
        'link': '/pvis2023/pages/program',
        'sub': {
            'Keynotes': '/pvis2023/pages/programs/keynotes',
            'Sessions': '/pvis2023/pages/programs/sessions',
            'Awards': '/pvis2023/pages/programs/awards'
        }
    },
    'Registration': {
        'link': '/pvis2023/pages/registration',
        'sub': undefined
    },
    'Committees': {
        'link':'/pvis2023/pages/committees',
        'sub':undefined
    },
    'Travel & Venue': {
        'link': '/pvis2023/pages/venue',
        'sub': {
            'Travel Information': '/pvis2023/pages/venue#travel',
            'Venue': '/pvis2023/pages/venue#venue',
            'Visa': '/pvis2023/pages/venue#visa'
        }
    },
    'Sponsor': {
        'link': '/pvis2023/pages/sponsor',
        'sub':undefined
    },
    'Contact': {
        'link': '/pvis2023/pages/contact',
        'sub': undefined
    }
}

window.addEventListener('load', function() {
    createMenu();
    createCalendarIcon();
    generateCopyright();
});

function createMenu() {
    var menuElem = document.getElementsByClassName('title-area')[0];

    inHtml = `
        <a href="/pvis2023/">
            <img class = "image-intro-top" src="/pvis2023/assets/images/intro-image/intro.jpg" alt="PacificVis 2023" width="100%">
        </a>
        <nav>
            <ul class="menu">
    `;

    for(var menu in menuData) {
        var sub = menuData[menu];

        inHtml += `<li id="mainmenu"><a href="${sub['link']}">${menu}</a>`

        if(sub['sub'] === undefined) {
            inHtml += `</li>`;
            continue;
        }

        inHtml += `<ul>`;
        for(var subMenu in sub['sub']) {
            var link = sub['sub'][subMenu];

            inHtml += `<li><a href="${link}">${subMenu}</a></li>`;
        }
        inHtml += `</ul></li>`;
    }

    inHtml += `</ul></nav>`;

    menuElem.innerHTML = inHtml;
}

function createCalendarIcon() {
    var elems = document.getElementsByClassName('icon-calendar');

    for(var i=0;i<elems.length;i++) {
        var elem = elems[i];

        var htmls = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="379 72 16 16">
                <g><g>
                    <path fill="none" d="M380.8,86.7h12.3v-8.8h-12.3V86.7z M389.5,78.8h1.7v1.4h-1.7V78.8z M389.5,81.3h1.7v1.4h-1.7V81.3z M389.5,83.8h1.7v1.4h-1.7V83.8z M386.1,78.8h1.7v1.4h-1.7V78.8z M386.1,81.3h1.7v1.4h-1.7V81.3z M386.1,83.8h1.7v1.4h-1.7V83.8z M382.8,78.8h1.7v1.4h-1.7V78.8z M382.8,81.3h1.7v1.4h-1.7V81.3z M382.8,83.8h1.7v1.4h-1.7V83.8z"></path>
                    <polygon fill="none" points="384.7 75.1 383.4 75.1 383.4 74.3 380.8 74.3 380.8 76.6 393.2 76.6 393.2 74.3 390.6 74.3 390.6 75.1 389.3 75.1 389.3 74.3 384.7 74.3"></polygon>
                    <rect x="382.8" y="78.8" width="1.7" height="1.4"></rect>
                    <rect x="386.1" y="78.8" width="1.7" height="1.4"></rect>
                    <rect x="389.5" y="78.8" width="1.7" height="1.4"></rect>
                    <rect x="382.8" y="81.3" width="1.7" height="1.4"></rect>
                    <rect x="386.1" y="81.3" width="1.7" height="1.4"></rect>
                    <rect x="389.5" y="81.3" width="1.7" height="1.4"></rect>
                    <rect x="382.8" y="83.8" width="1.7" height="1.4"></rect>
                    <rect x="386.1" y="83.8" width="1.7" height="1.4"></rect>
                    <rect x="389.5" y="83.8" width="1.7" height="1.4"></rect>
                    <path d="M383.4,72v1.1h-3.8V88h14.9V73.1h-3.8V72h-1.3v1.1h-4.7V72H383.4z M393.2,86.7h-12.3v-8.8h12.3L393.2,86.7L393.2,86.7z M389.3,74.3v0.8h1.3v-0.8h2.5v2.3h-12.3v-2.3h2.5v0.8h1.3v-0.8H389.3z"></path>
                </g></g>
            </svg>
        `;

        elem.innerHTML = htmls;
    }
}

function createArrowIcon() {
    var elems = document.getElementsByClassName('icon--arrow-right');

    for(var i=0;i<elems.length;i++) {
        var elem = elems[i];

        var htmls = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="50.4 -114.8 16 16">
                <path d="M63.1-107.7l-6.7-6.7c-.2-.3-.6-.4-.9-.4-.4 0-.7.1-.9.4l-.8.8c-.3.3-.4.6-.4.9 0 .4.1.7.4.9l5 5-5 5c-.3.3-.4.6-.4.9 0 .4.1.7.4.9l.8.8c.3.3.6.4.9.4.4 0 .7-.1.9-.4l6.7-6.7c.3-.3.4-.6.4-.9 0-.4-.2-.7-.4-.9z"></path>
            </svg>
        `;

        elem.innerHTML = htmls;
    }
}

function generateCopyright() {
    var parent = document.getElementsByClassName('site-footer')[0];
    var elem = parent.getElementsByClassName('inner')[0];

    var htmls = `
        <div class="copyright">
            <img class="sponsor" src="/pvis2023/assets/images/sponsor/IEEE.png">
            <img class="sponsor" src="/pvis2023/assets/images/sponsor/VGTC.png">
            <img class="sponsor" src="/pvis2023/assets/images/sponsor/CS.png">
            <br>
            <img class="sponsor" src="/pvis2023/assets/images/sponsor/BK21.png">

            <br>
            <p>© 2023 Welcome to the 16th IEEE Pacific Visualization Symposium.</p>
        </div>
    `;

    elem.innerHTML += htmls;
}

function Mobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
