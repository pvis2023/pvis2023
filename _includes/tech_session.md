{% assign tech_session = site.data.sessions[session_id] %}

<h2 id="session{{session_id | plus: 1}}">{{session_period[session_id]}} JST (UTC+9) - Session {{session_id | plus: 1}}:<br/>
{{tech_session["session"]}}</h2>

<strong>Chair</strong>: {{tech_session["chair"]}}<br/>
<strong>Format</strong>: 20 min for a paper; 10 min for a note.  Each presentation starts with pre-recorded video streaming followed by a live Q/A.

{% for paper_id in tech_session["talks"] %}
<paper data-paper_id="{{paper_id}}"></paper>
{% endfor %}
