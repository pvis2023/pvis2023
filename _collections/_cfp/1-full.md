---
title: 'CFP - Full Papers'
permalink: '/cfp/full/'
date: 2021-12-16
---

PacificVis is a unified visualization symposium, welcoming all areas of visualization research such as information visualization, scientific visualization, graph and network visualization, visual analytics, and visualization applications in domains such as (but not limited to) biological sciences, education, machine learning, physical sciences, security, and social science. Authors are invited to submit original and unpublished research and application papers in all areas of visualization. [PacificVis 2022](http://pvis.org/) will be held in Tsukuba, Japan on April 11-14, 2022. We encourage papers in any new, novel, and exciting research area that pertains to visualization.


All submitted papers will go through a two-stage review process to guarantee the publication of high-quality papers. All accepted papers will be presented orally at the conference and will also be published by IEEE and included in [the IEEE Digital Library](https://www.computer.org/csdl/home). Selected papers will be published directly in [IEEE Transactions on Visualization and Computer Graphics (TVCG)](https://conferences.computer.org/vr-tvcg/2020/content/TVCG/about.html).

{% assign data = site.data.publicity %}


# Important Dates

{% assign dates = data['Important Dates'] %}

|                         | Dates          |
| ------------------------|----------------|
{%- for date in dates %}
  {%- if date['Event Type'] == "full" %}
| {{ date.Event }} | {{ date.Date }} |
  {%- endif %}
{%- endfor %}

<!--
| Abstract due            | Oct. 15, 2021  |
| Full paper due          | Oct. 22,  2021 |
| 1st cycle notification  | Dec. 17,  2021 |
| Revision due            | Jan. 14, 2022  |
| 2nd cycle notification  | Feb. 11, 2022  |
| Camera ready paper due  | Feb. 18, 2022  |
-->

All deadlines are due at 9:00 pm Pacific Time (PDT/PST).


# Paper Types and Topics

Suggested paper types and the corresponding topics include, but are not limited to:

### Technique Paper
novel algorithms, visual encoding methods, and/or interaction techniques for data analysis, exploration, or communication. All sub-areas of data visualization and visual analytics are welcomed, including high-dimensional, time-series, spatial, geographic, text, hierarchical, and network data. Techniques may be specialized for specific devices or form-factors (e.g., mobile or wall-scale visualization).  More topics in this category include but not limited to:


Visualization Techniques for a Broad Range of Data Types
: - High-dimensional Data, Dimensionality Reduction, and Data Compression
- Graphs and Networks
- Text and Documents
- Multi-field, Multi-modal, Multi-resolution, and Multivariate Data
- Causality and Uncertainty Data
- Time Series, Time-varying, Streaming, and Flow Data
- Scalar, Vector, and Tensor Fields
- Regular and Unstructured Grids
- Point-based Data
- Large-scale Data


Visual Encoding and Rendering Techniques
: - Volume Modeling and Rendering
- Extraction of Surfaces
- Topology-based and Geometry-based Techniques
- Glyph-based Techniques
- Integrating Spatial and Non-spatial Data Visualization


Interaction Techniques for Supporting Data Analysis and Exploration
:   - Icon- and Glyph-based Visualization
    - Focus + Context Techniques
    - Animation
    - Zooming and Navigation
    - Brushing + Linking
    - Coordinated Multiple Views
    - View-dependent Visualization
    - Data Labeling, Editing, and Annotation
    - Collaborative, Co-located, and Distributed Visualization
    - Manipulation and Deformation
    - Visual Data Mining and Visual Knowledge Discovery

Hardware, Display, and Interaction Technologies for Visualization
:   - Large and High-resolution Displays
    - Stereo Displays
    - Mobile and Ubiquitous Environments
    - Immersive and Virtual Environments
    - Multimodal Input (Touch, Haptics, Voice, etc.)
    - Hardware Acceleration
    - GPUs and Multi-core Architectures
    - CPU and GPU Clusters
    - Distributed Systems, Grid, and Cloud Environments
    - Volume Graphics Hardware


### Systems Paper
new software frameworks, languages, or tools for visualization; systems for large-scale visualization; integrated graphical systems for visual analysis or interactive machine learning; collaborative and web-scale visualization systems. More topics in this category include but not limited to:

- System Taxonomies and Design Patterns
- Methodologies, Discussions, and Frameworks
- Visual Analysis Systems, and Visualization Toolkits
- Visual Data Warehousing, Database Visualization, and Visual Data Mining Systems
- Collaborative and Distributed Visualization Systems


### Applications & Design Studies Paper
novel use of visualization to address problems in an application domain, including accounts of innovative system design, deployment and impact. We welcome diverse application areas, including the physical sciences, life sciences, social sciences, engineering, arts, sports, and humanities. More topics in this category include but not limited to:

- Statistical Graphics and Mathematics
- Financial, Security, and Business Visualization
- Physical Sciences and Engineering
- Earth, Space, and Environmental Sciences
- Geographic, Geospatial, and Terrain Visualization
- Molecular, Biomedical, Bioinformatics, and Medical Visualization
- Software Visualization
- Social and Information Sciences
- Education and Everyday Visualization
- Multimedia (Image/Video/Music) Visualization

### Evaluation & Empirical Research Paper
Comparative evaluation of competing visualization approaches; controlled experiments to inform visualization best practices; longitudinal and qualitative studies to understand user needs, visualization adoption, and use. More topics in this category include but not limited to:

- Evaluations of All Types: Qualitative, Quantitative, Laboratory, Field, and Usability Studies
- Metrics and Benchmarks
- Use of Eye Tracking and Other Biometric Measures

### Theory Paper
models of visual encoding, interaction, and/or analysis tasks; implications from theories of perception, cognition, design, and/or aesthetics; methods for automated design or visualization recommendation. More topics in this category include but not limited to:

- Visual Design and Aesthetics
- Illustrative Visualization
- Cognition and Perception Issues
- User Studies on Visualization Readability and User Interaction
- Presentation, Dissemination, and Storytelling
- Design Studies, Case Studies, and Focus Groups
- Task and Requirements Analysis

For a wider range of paper types, please see "[Broadening Intellectual Diversity in Visualization Research Papers](https://doi.org/10.1109/MCG.2019.2914844)" by B. Lee et al. 


## Submission

Papers are to be submitted online through [the new Precision Conference System](https://new.precisionconference.com/user/login?society=vgtc) at the PacificVis 2022 Papers track.


Original, unpublished papers of up to ten (10) pages (two-column, single-spaced, 9 point font, including figures, tables, and references) are invited. Manuscripts must be written in English and follow [the formatting guidelines](https://pacificvis.github.io/). It is recommended (but not mandatory) to submit an anonymized version of your manuscript for double-blind review - in this case, please remove all author and affiliation information from submissions and supplemental files as well as substitute your paper’s ID number for the author name. Papers should be submitted electronically in Adobe PDF format. Please provide supplemental videos in QuickTime MPEG-4 or DivX version 5, and use TIFF, JPEG, or PNG for supplemental images.

{% assign role = "Papers Chairs" %}
{% include chairs.md %}

## PC Members

{% assign role = "Papers PC members" %}
{% include pc_members.md %}

## Contact

Email: `pvis_papers@pvis.org`
