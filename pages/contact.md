---
title: 'Contact'
permalink: '/contact/'
date: 2021-10-27
---

{% assign contacts = site.data.publicity['Contacts'] %}

Contact | Email
--- | ---
{%- for contact in contacts %}
  {%- if contact.show == "yes" and contact.email != "" %}
{{ contact.name }} | {{ contact.email }}
  {%- endif %}
{%- endfor %}

{% include icon-facebook.html username=site.facebook_username label='Facebook' %}

{% include icon-twitter.html username=site.twitter_username label='Twitter' %}

<a href="{{ site.feed.path | default: 'feed.xml' | relative_url }}" title="Atom Feed">
<span class="icon icon--rss">{% include icon-rss.svg %}</span>
<span class="label">{{ site.data.theme.t.subscribe | default: 'Subscribe' }}</span>
