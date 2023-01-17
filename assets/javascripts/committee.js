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
        'first_name': 'Kwan-Liu',
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

function Mobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

window.onload = function() {
    console.log(steer[0]['affiliation'].split(';'));
    console.log(steer[0]['mobile-affiliation'].split(';'));
}