{% assign host = site.url | split: "://" %}
{% assign host = host[1] | split: ":" %}
{% if host[0] == "localhost" %} {% assign hide = false %}
{% else %} {% assign hide = true %}
{% endif %}

