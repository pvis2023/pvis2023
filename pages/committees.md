---
title: 'Conference Committees'
permalink: '/committees/'
date: 2022-03-15
---

{% assign data = site.data.publicity %}

{% assign role = "" %}
{% for member in data.Organization %}
  {% if role != member.Role %}
    {% assign role = member.Role %}
<p class="oc-role">{{ member.Role }}</p>
  {% endif %}

<div style="display: inline-block; width: 32%; text-align: center;">
  {% if member.Photo == "yes" %}
<img src="{{site.url}}/{{site.baseurl}}/assets/images/oc/{{ member.First | replace: " ", "_" }}_{{ member.Given }}.jpg"
     class="circle" width="150" height="150" /><br />
  {% else %}
<img src="assets/images/oc/nobody.jpg" width="100" height="100" /><br />
  {% endif %}
<strong>{{ member.First }} {{ member.Given }}</strong><br/>
{{ member.Affiliation }}
</div>

{% endfor %}

## Program Committee Members

{% assign role = "Papers PC members" %}
{% include pc_members.md %}

## Visualization Notes Committee Members

{% assign role = "Notes PC members" %}
{% include pc_members.md %}
