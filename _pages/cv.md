---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D in Bioinformatics, University of Chinese Academy of Sciences, 2027 (expected)
* M.S. in Biology, Hebei University, 2023
* B.S. in Agronomy, Shihezi University, 2020

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
