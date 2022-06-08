{% assign members = data.PC | where: "Role", role %}

|                    |                    |
|--------------------|--------------------|
{% for member in members -%}
|{{ member.First }} {{ member.Given }} | {{ member.Affiliation }} |
{% endfor %}
