var general = [
    {
        'first_name': 'Yun',
        'last_name': 'Jang',
        'affiliation': 'Sejong University',
        'mobile-affiliation': 'Sejong University',
        'country': 'South Korea',
        'mobile-country': 'South Korea'
    }
];

var paper = [
    {
        'first_name': 'Timo',
        'last_name': 'Ropinski',
        'affiliation': 'Ulm University',
        'mobile-affiliation': 'Ulm University',
        'country': 'Germany',
        'mobile-country': 'Germany'
    },
    {
        'first_name': 'Jaegul',
        'last_name': 'Choo',
        'affiliation': 'KAIST',
        'mobile-affiliation': 'KAIST',
        'country': 'South Korea',
        'mobile-country': 'South Korea'
    },
    {
        'first_name': 'Yifan',
        'last_name': 'Hu',
        'affiliation': 'Yahoo Research',
        'mobile-affiliation': 'Yahoo Research',
        'country': 'USA',
        'mobile-country': 'USA'
    }
];

var note = [
    {
        'first_name': 'Steffen',
        'last_name': 'Frey',
        'affiliation': 'University of Groningen',
        'mobile-affiliation': 'University of;Groningen',
        'country': 'Netherlands',
        'mobile-country': 'Netherlands'
    },
    {
        'first_name': 'Sungahn',
        'last_name': 'Ko',
        'affiliation': 'UNIST',
        'mobile-affiliation': 'UNIST',
        'country': 'South Korea,Ulsan',
        'mobile-country': 'South Korea;Ulsan'
    },
    {
        'first_name': 'Quang Vinh',
        'last_name': 'Nguyen',
        'affiliation': 'Western Sydney University',
        'mobile-affiliation': 'Western Sydney;University',
        'country': 'Australia',
        'mobile-country': 'Australia'
    }
];

var poster = [
    {
        'first_name': 'Christy Jie',
        'last_name': 'Liang',
        'affiliation': 'University of Technology',
        'mobile-affiliation': 'University of;Technology',
        'country': 'Australia',
        'mobile-country': 'Australia'
    },
    {
        'first_name': 'Hanqi',
        'last_name': 'Guo',
        'affiliation': 'Ohio State University',
        'mobile-affiliation': 'Ohio State;University',
        'country': 'USA',
        'mobile-country': 'USA'
    },
    {
        'first_name': 'Qianwen',
        'last_name': 'Wang',
        'affiliation': 'Harvard University',
        'mobile-affiliation': 'Harvard;University',
        'country': 'USA',
        'mobile-country': 'USA'
    }
];

var contest = [
    {
        'first_name': 'Nam Wook',
        'last_name': 'Kim',
        'affiliation': 'Boston College',
        'mobile-affiliation': 'Boston College',
        'country': 'USA',
        'mobile-country': 'USA'
    },
    {
        'first_name': 'John',
        'last_name': 'Thompson',
        'affiliation': 'MSR',
        'mobile-affiliation': 'MSR',
        'country': 'USA',
        'mobile-country': 'USA'
    }
];

var steer = [
    {
        'first_name': 'Wei',
        'last_name': 'Chen',
        'affiliation': 'Zhejiang University',
        'mobile-affiliation': 'Zhejiang;University',
        'country': 'China',
        'mobile-country': 'China'
    },
    {
        'first_name': 'Issei',
        'last_name': 'Fujishiro',
        'affiliation': 'Keio University',
        'mobile-affiliation': 'Keio;University',
        'country': 'Japan',
        'mobile-country': 'Japan'
    },
    {
        'first_name': 'Seokhee',
        'last_name': 'Hong',
        'affiliation': 'University of Sydney',
        'mobile-affiliation': 'University of;Sydney',
        'country': 'Australia',
        'mobile-country': 'Australia'
    },
    {
        'first_name': 'Koji',
        'last_name': 'Koyamada',
        'affiliation': 'Kyoto University',
        'mobile-affiliation': 'Kyoto;University',
        'country': 'Japan',
        'mobile-country': 'Japan'
    },
    {
        'first_name': 'Kwan Liu',
        'last_name': 'Ma',
        'affiliation': 'University of California',
        'mobile-affiliation': 'University of;California',
        'country': 'USA',
        'mobile-country': 'USA'
    },
    {
        'first_name': 'Jinwook',
        'last_name': 'Seo',
        'affiliation': 'Seoul National University',
        'mobile-affiliation': 'Seoul National;University',
        'country': 'South Korea',
        'mobile-country': 'South Korea'
    }
];

var publication = [
    {
        'first_name': 'Isaac',
        'last_name': 'Cho',
        'affiliation': 'Utah State university',
        'mobile-affiliation': 'Utah State university',
        'country': 'USA',
        'mobile-country': 'USA'
    }
];

var financial = [
    {
        'first_name': 'Hyunjoo',
        'last_name': 'Song',
        'affiliation': 'Soongsil University',
        'mobile-affiliation': 'Soongsil University',
        'country': 'South Korea',
        'mobile-country': 'South Korea'
    }
];

var sponsor = [
    {
        'first_name': 'Jaemin',
        'last_name': 'Jo',
        'affiliation': 'Sungkyunkwan University',
        'mobile-affiliation':'Sungkyunkwan;University',
        'country':'South Korea',
        'mobile-country':'South Korea'
    }
]

window.addEventListener('load', function() {
    doDescription('general', general);
    doDescription('paper', paper);
    doDescription('note', note);
    doDescription('poster', poster);
    doDescription('contest', contest);
    doDescription('steer', steer);
    doDescription('publication', publication);
    doDescription('financial', financial);
    doDescription('sponsor', sponsor);
});

function doDescription(key, dict) {
    var desc = ``;

    for(var i=0;i<dict.length;i++) {
        var data = dict[i];

        desc += `
            <div style="display: inline-block; width: 32%; text-align: center;">
            <img src="https://pvis2023.github.io//pvis2023/assets/images/oc/${data['first_name']}_${data['last_name']}.jpg" class="circle" width="150" height="150"><br>
        `;

        if(Mobile()) {
            var aff = data['mobile-affiliation'].split(';');
            var cnt = data['mobile-country'].split(';');

            desc += `
                <strong> ${data['first_name']} <br> ${data['last_name']} </strong><br>
            `;

            if(aff.length >= 2) {
                desc += `
                    ${aff[0]} <br> ${aff[1]} <br>
                `;
            }
            else {
                desc += `
                    ${aff[0]} <br>
                `;
            }

            if(cnt.length >= 2) {
                desc += `
                    ${cnt[0]} <br> ${cnt[1]}
                `;
            }
            else {
                desc += `
                    ${cnt[0]}
                `;
            }
        }
        else {
            desc += `
                <strong> ${data['first_name']} ${data['last_name']} </strong><br>
                ${data['affiliation']}<br>${data['country']}
            `;
        }

        desc += `</div>`;

        if(i==2) desc += '<br>'
    }

    document.getElementsByClassName(key)[0].innerHTML = desc;
}
