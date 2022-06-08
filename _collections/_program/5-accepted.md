---
layout: page
title: 'Accepted Papers / Notes / Posters'
permalink: '/program/accepted/'
date: 2022-03-17
---

[Full Papers](#papers) / [Visualization Notes](#notes) / [Posters](#posters)

---

{% assign accepted = site.data.accepted %}

# Full Papers {#papers}

<!-- https://stackoverflow.com/questions/64010560/passing-props-to-vue-root-instance-via-attributes-on-element-the-app-is-mounted -->

{% for paper in accepted["Full Papers"] %}
{% assign id = paper["Paper ID"] %}
<paper data-paper_id="{{id}}"></paper>
{% endfor %}

---

# Visualization Notes {#notes}

{% for paper in accepted["Visualization Notes"] %}
{% assign id = paper["Paper ID"] %}
<paper data-paper_id="{{id}}"></paper>
{% endfor %}

---

# Posters {#posters}

{% assign posters = accepted["Posters"] | sort: "Paper ID" %}
{% for poster in posters %}
{% assign id = poster["Paper ID"] %}
<paper data-paper_id="{{id}}"></paper>
{% endfor %}

<script src="https://unpkg.com/vue@3"></script>
<script type="text/javascript" src="/pvis2022/assets/javascripts/accepted.json.js"></script>
<script type="text/javascript" src="/pvis2022/assets/javascripts/preview.json.js"></script>
<script type="text/javascript" src="/pvis2022/assets/javascripts/accepted.js"></script>
