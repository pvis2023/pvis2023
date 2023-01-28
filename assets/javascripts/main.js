var menuData = {
    'home': {
        'link': "/pvis2023/",
        'sub':undefined
    },
    'contribute': {
        'link': '/pvis2023/pages/cfp',
        'sub': {
            'Full Paper':'/pvis2023/pages/cfps/cfp_full',
            'Notes':'/pvis2023/pages/cfps/cfp_notes',
            'Posters':'/pvis2023/pages/cfps/cfp_posters',
            'Contest':'/pvis2023/pages/cfps/cfp_story',
            'Meets':'/pvis2023/pages/cfps/cfp_meet',
        }
    },
    'committees': {
        'link':'/pvis2023/pages/committees',
        'sub':undefined
    },
    'travel & venue': {
        'link': '/pvis2023/pages/venue',
        'sub': {
            'Travel': '/pvis2023/pages/venue',
            'Venue': '/pvis2023/pages/venue',
            'Visa': '/pvis2023/pages/venue'
        }
    },
    'sponsor': {
        'link': '/pvis2023/pages/sponsor',
        'sub':undefined
    },
    'contact': {
        'link': '/pvis2023/pages/contact',
        'sub': undefined
    }
}

window.onload = function() {
    var menuElem = document.getElementsByClassName('menu')[0];

    inHtml = ``;

    for(var menu in menuData) {
        var sub = menuData[menu];

        inHtml += `<li><a href="${sub['link']}">${menu}</a>`

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

    console.log(inHtml);

    menuElem.innerHTML = inHtml;
}