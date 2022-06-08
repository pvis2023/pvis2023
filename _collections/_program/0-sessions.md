---
layout: page
title: 'Program'
permalink: '/program/sessions/'
collection: program
date: 2022-03-21
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<span class="attention">Program has changed.</span>  Sessions 2 and 5 were swapped and time slots of other sessions were slightly shifted.  (2022-04-08)

PacificVis 2022 hosts two keynotes, eight technical sessions, visual data storytelling contest, and social events.

{% include timetable.md %}

---

**Color coding**:

- Best paper: <span class="fa fa-star awarded"><span class="fa fa-star awarded" /><span class="fa fa-star awarded" /></span> <span class="type type-paper">paper</span>
- Honorable mention: <span class="fa fa-star awarded"><span class="fa fa-star awarded" /></span> <span class="type type-paper">paper</span>

- Best note: <span class="fa fa-star awarded"><span class="fa fa-star awarded" /><span class="fa fa-star awarded" /></span> <span class="type type-note">note</span>
- Honorable mention: <span class="fa fa-star awarded"><span class="fa fa-star awarded" /></span> <span class="type type-note">note</span>

A few no-show poster presentations are indicated by <span style="text-decoration: line-through;">line-through</span>.

# Day 1 - April 11

## 9:00-10:40 [Visualization Meets AI]({{site.baseurl}}/program/visxai/): Session 1 {#visxai1}
### AI for VIS Representation and Prediction

**Chair**: Junpeng Wang

Opening and Invited Talk by Hanqi Guo on "[Intelligent Visualization for Science]({{site.baseurl}}/program/visxai/#hanqi_guo)"

<paper data-paper_id="visxai-4033"></paper>

<paper data-paper_id="visxai-6403"></paper>

## 11:10-12:50 [Visualization Meets AI]({{site.baseurl}}/program/visxai/): Session 2 {#visxai2}
### Design and Evaluation of VIS-Assisted AI

**Chair**: Takanori Fujiwara

Invited Talk by Yong Wang on "[Visualization Meets AI: Automated Visualization Design and Evaluation]({{site.baseurl}}/program/visxai/#yong_wang)"

<paper data-paper_id="visxai-9591"></paper>

<paper data-paper_id="visxai-5160"></paper>

---
## 14:30-15:00 PacificVIS Opening {#opening}

## 15:00-15:30 Keynote 1 Q/A session {#keynote1}

Daniel Weiskopf on "[Multidimensional Visualization]({{ site.baseurl }}/program/keynotes/#danielweiskopf)"

**Chair**: Steffen Frey

<p class="notice">The keynote q/a starts with a brief explanation by Dr. Weiskopf followed by questions/answers.   Keynote talks will appear a few days before the opening on the conference YouTube channel.  You can discuss with Dr. Weiskopf realtime on Zoom or drop your messages on the `#keynote1` channel of the conference Discord a head of this session.</p>

{% assign accepted = site.data.accepted %}
{% assign index = accepted.index %}

{% assign session_id = 0 %}
{% include tech_session.md %}

**doi:** [10.1109/TVCG.2021.3101418](https://doi.org/10.1109/TVCG.2021.3101418)

---
# Day 2 - April 12

{% assign session_id = 1 %}
{% include tech_session.md %}

{% assign session_id = 2 %}
{% include tech_session.md %}

{% assign session_id = 3 %}
{% include tech_session.md %}

{% assign session_id = 4 %}
{% include tech_session.md %}

---
# Day 3 - April 13

## 10:00-11:00 Visual Data Storytelling Contest {#contest}

{% assign session_id = 5 %}
{% include tech_session.md %}

## 14:00-14:30 Keynote 2 {#keynote2}

Wei Chen on "[When Visualization Meets Privacy]({{ site.baseurl }}/program/keynotes/#weichen)"

**Chair**: Nan Cao

<p class="notice">The keynote q/a starts with a brief explanation by Dr. Chen followed by questions/answers.  Keynote talks will appear a few days before the opening on the conference YouTube channel.  You can discuss with Dr. Chen realtime on Zoom or drop your messages on the `#keynote1` channel of the conference Discord a head of this session.</p>

## 14:50-16:20 Posters {#posters}

Posters will take place in a Gather.Town room.

{% assign posters = accepted["Posters"] | sort: "Paper ID" %}
{% for poster in posters %}
{% assign id = poster["Paper ID"] %}
<paper data-paper_id="{{id}}"></paper>
{% endfor %}

## 16:30-17:30 Virtual Banquet {#banquet}

Virtual banquet will take place on a Gather.Town room.

---
# Day 4 - April 14

{% assign session_id = 6 %}
{% include tech_session.md %}

{% assign session_id = 7 %}
{% include tech_session.md %}

## 12:40-13:00 Closing {#closing}

<script src="https://unpkg.com/vue@3"></script>
<script type="text/javascript" src="/pvis2022/assets/javascripts/accepted.json.js"></script>
<script type="text/javascript" src="/pvis2022/assets/javascripts/preview.json.js"></script>
<script type="text/javascript" src="/pvis2022/assets/javascripts/accepted.js"></script>
