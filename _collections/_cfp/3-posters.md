---
title: 'CFP - Posters'
permalink: 'cfp/posters/'
date: 2022-02-10
---

PacificVis 2022 is soliciting high quality poster proposals. The PacificVis 2022 poster program is welcoming all areas of visualization research such as information visualization, scientific visualization, and visual analytics science and technology. As we would like the authors to demonstrate novel and applicable ideas in all aspects of visualization, posters on work in progress and on practical applications are welcome.

An interactive poster session will be held to allow plenty of opportunities for one-on-one dialogue and small group discussion in a casual setting. Extended abstracts of the accepted posters will be included in the electronic conference proceedings, which will be available as a USB memory stick distributed to conference attendants.

{% assign data = site.data.publicity %}

# Important Dates

*Deadlines was updated on February 10, 2022.*

{% assign dates = data['Important Dates'] %}

|                         | Dates          |
| ------------------------|----------------|
{%- for date in dates %}
  {%- if date['Event Type'] == "poster" %}
| {{ date.Event }} | {{ date.Date }} |
  {%- endif %}
{%- endfor %}

All deadlines are due at 9:00 pm Pacific Time (PDT/PST).


# Submission

Submissions should be made electronically in the Adobe PDF format by the deadline through the new [Precision Conference System](https://new.precisionconference.com/user/login?society=vgtc) at the Poster track of PacificVis 2022 (VGTC). Poster abstracts should take up to 2 pages, including figures and tables. It should use two-column, single-space and 9-point font. Other format rules follow the formatting guidelines. Manuscripts must be written in English. The posters will be peer-reviewed by the poster co-chairs in a one-stage, single-blind process. The review will be based on the level of contribution, validity of the results, originality, and clarity of presentation. We will evaluate primarily the poster abstracts, but we also take into account supplemental materials such as videos and images if provided. The template can be downloaded at [http://junctionpublishing.org/vgtc/Track/pacvis.html](http://junctionpublishing.org/vgtc/Track/pacvis.html).

<!--
# Poster Presentation
-->

{% assign role = "Posters Chairs" %}
{% include chairs.md %}

# Contact

Email: `pvis_posters@pvis.org`
