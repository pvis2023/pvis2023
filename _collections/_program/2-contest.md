---
layout: page
title: 'Visual Data Storytelling Contest Shortlist'
permalink: '/program/contest/'
date: 2022-03-15
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

2022 IEEE PacificVis Visual Data Storytelling Contest accepts video, data comic or infographic that uses visualization to communicate a narrative, a message or a series of insights. This year we received 10 submissions, which were reviewed by [7 judges]({{ site.baseurl }}/cfp/story/#jury), and ultimately 4 works were shortlisted. The winners will be announced during PacificVis 2022.

<!-- To view all shortlisted entries, please visit the Storytelling Contest Showcase on Vimeo. -->

<script src="https://unpkg.com/vue@3"></script>

{% assign accepted = site.data.accepted %}
{% assign video_embedding = site.data.storytelling %}

# Visual Data Storytelling Contest

**Color coding**: Winner: <span class="fa fa-star awarded" /><span class="fa fa-star awarded" /><span class="fa fa-star awarded" /> / Honorable mention: <span class="fa fa-star awarded" /><span class="fa fa-star awarded" />


{% assign id = 1 %}

{% for paper in accepted["Visual Data Storytelling Contest"] %}
## {{ id }}. <span class="contest-title">{{ paper["Title"] }}</span>
{%- if paper["award"] == "best" %} <span class="fa fa-star awarded" /><span class="fa fa-star awarded" /><span class="fa fa-star awarded" />{% endif %}
{%- if paper["award"] == "honorable" %} <span class="fa fa-star awarded" /><span class="fa fa-star awarded" />{% endif %}

{{ video_embedding[id] }}

{% for author in paper["authors"] -%}
<span class="paper-author">{{ author }}</span><br/>
{% endfor %}

**Abstract**: {{ paper["Abstract.1"] }}

{% assign id = id | plus: 1 %}
{% endfor %}

<!-- script type="text/javascript" src="{{ site.baseurl }}/assets/javascripts/accepted.js"></script -->
