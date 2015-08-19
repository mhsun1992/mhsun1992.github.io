---
title: MengHua Sun
layout: home
---

{% for post in site.posts %}
<h3><a href="{{ post.url }}">{{ post.title }}<span class="octicon octicon-link">{{ post.date | date_to_string }}</span></a></h3>
    <p>{{ post.excerpt }}</p>
{% endfor %}

