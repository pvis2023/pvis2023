var menuData = {
    'home»': "/pvis2023/",
    'contribute»':'/pvis2023/pages/cfp',
    'committees»':'/pvis2023/pages/committees',
    'venue & travel»':'/pvis2023/pages/venue',
    'sponsor»':'/pvis2023/pages/sponsor',
    'contact»':'/pvis2023/pages/contact'
}

window.onload = function() {
    var menu = document.getElementsByClassName('menu')[0];

    inHtml = ``;

    for(var menu in menuData) {
        var link = menuData[menu];

        inHtml += `
            <a href="${link}">${menu}</a>
        `;
    }
}