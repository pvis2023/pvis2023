const talks = {
  "index": {
    "10.1109/TVCG.2021.3101418": {
      "authors": [
        "Gleb Tkachev (Universitat Stuttgart)",
        "Steffen Frey (University of Groningen)",
        "Thomas Ertl (Universitaet Stuttgart)"
      ],
      "Paper ID": "10.1109/TVCG.2021.3101418",
      "Title": "S4: Self-Supervised learning of Spatiotemporal Similarity",
      "Abstract": "We introduce an ML-driven approach that enables interactive example-based queries for similar behavior in ensembles of spatiotemporal scientific data. This addresses an important use case in the visual exploration of simulation and experimental data, where data is often large, unlabeled and has no meaningful similarity measures available. We exploit the fact that nearby locations often exhibit similar behavior and train a Siamese Neural Network in a self-supervised fashion, learning an expressive latent space for spatiotemporal behavior. This space can be used to find similar behavior with just a few user-provided examples. We evaluate this approach on several ensemble datasets and compare with multiple existing methods, showing both qualitative and quantitative results.",
      "type": "TVCG talk"
    },
    "paper-1158": {
      "authors": [
        "Tobias Rapp (Karlsruhe Institute of Technology)",
        "Christoph Peters (Karlsruhe Institute of Technology)",
        "Carsten Dachsbacher (Karlsruhe Institute of Technology)"
      ],
      "Paper ID": "paper-1158",
      "Title": "Image-based Visualization of Large Volumetric Data Using Moments",
      "type": "PPaper",
      "Abstract": "We present a novel image-based representation to interactively visualize large and arbitrarily structured volumetric data. This image-based representation is created from a fixed view and models the scalar densities along each viewing ray. Then, any transfer\nfunction can be applied and changed interactively to visualize the data. In detail, we transform the density in each pixel to the Fourier basis and store Fourier coefficients of a bounded signal, i.e. bounded trigonometric moments. To keep this image-based representation compact, we adaptively determine the number of moments in each pixel and present a novel coding and quantization strategy. Additionally, we perform spatial and temporal interpolation of our image representation and discuss the visualization of introduced uncertainties. Moreover, we use our representation to add single scattering illumination. Lastly, we achieve accurate results even with changes in the view configuration. We evaluate our approach on two large volume datasets and a time-dependent SPH dataset.",
      "award": "honorable"
    },
    "paper-2382": {
      "authors": [
        "Jiacheng Yu (Peking University)",
        "Yifan Hu (Yahoo Research)",
        "Xiaoru Yuan (Peking University)"
      ],
      "Paper ID": "paper-2382",
      "Title": "UNICON: A UNIform CONstraint Based Graph Layout Framework",
      "type": "Paper",
      "Abstract": "We propose UNICON, a UNIform CONstraint based graph layout framework that supports both soft and hard constraints. We extend the stress model to accommodate soft constraints by incorporating them in the objective functions, optimized by stochastic gradient descent. For hard constraints, such as inequalities or equalities in the layout space, we utilize a gradient projection method to satisfy them. A visualization prototype system is implemented based on this framework for the user to interactively add or remove constraints to generate the desired layouts. We demonstrate the efficiency, quality, and flexibility of the framework and the system on a number of datasets with a wide range of user-defined constraints.",
      "award": false
    },
    "paper-4701": {
      "authors": [
        "Alexander Vieth (Delft University of Technology )",
        "Anna Vilanova (Eindhoven University of Technology)",
        "Boudewijn Lelieveldt (Leiden University Medical Center)",
        "Elmar Eisemann (Delft University of Technology)",
        "Thomas H\u00f6llt (TU Delft)"
      ],
      "Paper ID": "paper-4701",
      "Title": "Incorporating Texture Information into Dimensionality Reduction for High-Dimensional Images",
      "type": "Paper",
      "Abstract": "High-dimensional imaging is becoming increasingly relevant in many fields from astronomy and cultural heritage to systems biology.\nVisual exploration of such high-dimensional data is commonly facilitated by dimensionality reduction.\nHowever, common dimensionality reduction methods do not include spatial information present in images, such as local texture features, into the construction of low-dimensional embeddings.\nConsequently, exploration of such data is typically split into a step focusing on the attribute space followed by a step focusing on spatial information, or vice versa.\nIn this paper, we present a method for incorporating spatial neighborhood information into distance-based dimensionality reduction methods, such as t-Distributed Stochastic Neighbor Embedding (t-SNE).\nWe achieve this by modifying the distance measure between high-dimensional attribute vectors associated with each pixel such that it takes the pixel's spatial neighborhood into account.\nBased on a classification of different methods for comparing image patches, we explore a number of different approaches.\nWe compare these approaches from a theoretical and experimental point of view. \nFinally, we illustrate the value of the proposed methods by qualitative and quantitative evaluation on synthetic data and two real-world use cases.",
      "award": false
    },
    "paper-4981": {
      "authors": [
        "Pengfei Gu (University of Notre Dame)",
        "Jun Han (University of Notre Dame)",
        "Danny Chen (University of Notre Dame)",
        "Chaoli Wang (University of Notre Dame)"
      ],
      "Paper ID": "paper-4981",
      "Title": "Scalar2Vec: Translating Scalar Fields to Vector Fields via Deep Learning",
      "type": "Paper",
      "Abstract": "We introduce Scalar2Vec, a new deep learning solution that translates scalar fields to velocity vector fields for scientific visualization. Given multivariate or ensemble scalar field volumes and their velocity vector field counterparts, Scalar2Vec first identifies suitable variables for scalar-to-vector translation. It then leverages a k-complete bipartite translation network (kCBT-Net) to complete the translation task. kCBT-Net takes a set of sampled scalar volumes of the same variable as input, extracts their multi-scale information, and learns to synthesize the corresponding vector volumes. Ground-truth vector fields and their derived quantities are utilized for loss computation and network training. After training, Scalar2Vec can infer unseen velocity vector fields of the same data set directly from their scalar field counterparts. We demonstrate the effectiveness of Scalar2Vec with quantitative and qualitative results on multiple data sets and compare it with three other state-of-the-art deep learning methods.",
      "award": false
    },
    "paper-5060": {
      "authors": [
        "Harsh Bhatia (Lawrence Livermore National Laboratory)",
        "Duong Hoang (University of Utah)",
        "Nate Morrical (University of Utah)",
        "Valerio Pascucci (University of Utah)",
        "Peer-Timo Bremer (Lawrence Livermore National Laboratory)",
        "Peter Lindstrom (Lawrence Livermore National Laboratory)"
      ],
      "Paper ID": "paper-5060",
      "Title": "AMM: Adaptive Multilinear Meshes",
      "type": "PPaper",
      "Abstract": "Adaptive representations are increasingly indispensable for reducing the in-memory and on-disk footprints of large-scale data. Usual solutions are designed broadly along two themes: reducing data precision, e.g., through compression, or adapting data resolution, e.g., using spatial hierarchies. Recent research suggests that combining the two approaches, i.e., adapting both resolution and precision simultaneously, can offer significant gains over using them individually. However, there currently exist no practical solutions to creating and evaluating such representations at scale. In this work, we present a new resolution-precision-adaptive representation to support hybrid data reduction schemes and offer an interface to existing tools and algorithms. Through novelties in spatial hierarchy, our representation, Adaptive Multilinear Meshes (AMM), provides considerable reduction in the mesh size. AMM creates a piecewise multilinear representation of uniformly sampled scalar data and can selectively relax or enforce constraints on conformity, continuity, and coverage, delivering a flexible adaptive representation. AMM also supports representing the function using mixed-precision values to further the achievable gains in data reduction. We describe a practical approach to creating AMM incrementally using arbitrary orderings of data and demonstrate AMM on six types of resolution and precision datastreams. By interfacing with state-of-the-art rendering tools through VTK, we demonstrate the practical and computational advantages of our representation for visualization techniques. With an open-source release of our tool to create AMM, we make such evaluation of data reduction accessible to the community, which we hope will foster new opportunities and future data reduction schemes",
      "award": "best"
    },
    "paper-5304": {
      "authors": [
        "Neng Shi (The Ohio State University)",
        "Jiayi Xu (The Ohio State University)",
        "Skylar Wurster (The Ohio State University)",
        "Hanqi Guo (Argonne National Laboratory)",
        "Jonathan Woodring (Los Alamos National Laboratory)",
        "Luke Van Roekel (Los Alamos National Laboratory)",
        "Han-Wei Shen (The Ohio State University)"
      ],
      "Paper ID": "paper-5304",
      "Title": "GNN-Surrogate: A Hierarchical and Adaptive Graph Neural Network for Parameter Space Exploration of Unstructured-Mesh Ocean Simulations",
      "type": "PPaper",
      "Abstract": "We propose GNN-Surrogate, a graph neural network-based surrogate model to explore the parameter space of ocean climate simulations. Parameter space exploration is important for domain scientists to understand the influence of input parameters (e.g., wind stress) on the simulation output (e.g., temperature). The exploration requires scientists to exhaust the complicated parameter space by running a batch of computationally expensive simulations. Our approach improves the efficiency of parameter space exploration with a surrogate model that predicts the simulation outputs accurately and efficiently. Specifically, GNN-Surrogate predicts the output field with given simulation parameters so scientists can explore the simulation parameter space with visualizations from user-specified visual mappings. Moreover, our graph-based techniques are designed for unstructured meshes, making the exploration of simulation outputs on irregular grids efficient. For efficient training, we generate hierarchical graphs and use adaptive resolutions. We give quantitative and qualitative evaluations on the MPAS-Ocean simulation to demonstrate the effectiveness and efficiency of GNN-Surrogate. Source code is publicly available at \\url{https://github.com/trainsn/GNN-Surrogate}.",
      "award": false
    },
    "paper-5686": {
      "authors": [
        "Sanjana Srabanti (University of Illinois at Chicago)",
        "Michael Tran (University of Illinois at Chicago)",
        "Virginie Achim (University of Illinois at Chicago)",
        "Clifton David Fuller (University of Texas)",
        "Guadalupe Canahuate (University of Iowa)",
        "Fabio Miranda (University of Illinois at Chicago)",
        "G. Elisabeta Marai (University of Illinois at Chicago)"
      ],
      "Paper ID": "paper-5686",
      "Title": "A Tale of Two Centers: Visual Exploration of Health Disparities in Cancer Care",
      "type": "Paper",
      "Abstract": "The annual incidence of head and neck cancers (HNC) worldwide is more than 550,000 cases, with around 300,000 deaths each year. However, the incidence rates and disease-characteristics of HNC differ between treatment centers and different populations, due to undetermined reasons, which may or not include socioeconomic factors. The multi-faceted and multi-variate nature of the data in the context of the emerging field of health disparities research makes automated analysis impractical. Hence, we present a visual analysis approach to explore the health disparities in the data of Head and Neck cancer patients from two different cohorts at two cancer care centers. Our approach integrates data from multiple sources, including census data and city data, with custom visual encodings and with a nearest neighbor approach. Our design, created in collaboration with oncology experts, makes it possible to analyze the patients\u2019 demographic, disease characteristics, treatments and outcomes, and to make significant comparisons of these two cohorts and of individual patients. We evaluate this approach through two case studies performed with domain experts. The results demonstrate that this visual analysis approach successfully accomplishes the goal of comparing two cohorts in terms of different significant factors, and can provide insights into the main source of health disparities between the two centers.",
      "award": false
    },
    "paper-5799": {
      "authors": [
        "Aditi Mishra (Arizona State University)",
        "Utkarsh Soni (Arizona State University)",
        "Jinbin Huang (Arizona state university)",
        "Chris Bryan (Arizona State University)"
      ],
      "Paper ID": "paper-5799",
      "Title": "Why? Why not? When? Visual Explanations of Agent Behavior in Reinforcement Learning",
      "type": "Paper",
      "Abstract": "Reinforcement learning (RL) is used in many domains, including autonomous driving, robotics, stock trading, and video games. Unfortunately, the black box nature of RL agents, combined with legal and ethical considerations, makes it increasingly important that humans (including those are who not experts in RL) understand the reasoning behind the actions taken by an RL agent, particularly in safety-critical domains. To help address this challenge, we introduce PolicyExplainer, a visual analytics interface which lets the user directly query an autonomous agent. PolicyExplainer visualizes the states, policy, and expected future rewards for an agent, and supports asking and answering questions such as: 'Why take this action? Why not take this other action? When is this action taken?'' PolicyExplainer is designed based upon a domain analysis with RL researchers, and is evaluated via qualitative and quantitative assessments on a trio of domains: taxi navigation, a stack bot domain, and drug recommendation for HIV patients.\nWe find that PolicyExplainer's visual approach promotes trust and understanding of agent decisions better than a state-of-the-art text-based explanation approach. Interviews with domain practitioners provide further validation for PolicyExplainer as applied to safety-critical domains. Our results help demonstrate how visualization-based approaches can be leveraged to decode the behavior of autonomous RL agents, particularly for RL non-experts.",
      "award": false
    },
    "paper-6148": {
      "authors": [
        "Seok-Hee Hong (University of Sydney)",
        "Amyra Meidiana (University of Sydney)",
        "James George Wood (University of Sydney)",
        "Juan Pablo Bonilla Ataides (University of Sydney)",
        "Peter Eades (University of Sydney)",
        "Kunsoo Park (Seoul National University)"
      ],
      "Paper ID": "paper-6148",
      "Title": "dGG, dRNG, DSC: New Shape-based Faithfulness Metrics for  Large and Complex Graph Visualization",
      "type": "Paper",
      "Abstract": "Shape-based metrics measure how faithfully a drawing D of a large graph G shows the structure of graph, by comparing the similarity between G and a proximity graph P computed from D. Although these metrics can successfully evaluate drawings of large graphs, they are limited to relatively sparse graphs, since existing metrics use planar proximity graphs GG (Gabriel Graph) and RNG (Relative Neighbourhood Graph).\n\nThis paper presents new shape-based faithfulness metrics for evaluating drawings of large and complex graphs, using high-order proximity graphs k-GG and k-RNG. Extensive experiments demonstrate that our new shape-based metrics using degree-based proximity graphs dGG and dRNG can more accurately measure the faithfulness\nof drawings of large and complex graphs, with a significant improvement of over 100% better, on average, than the existing shape-based metrics using GG and RNG.\n\nMoreover, we present a new shape change faithfulness metric DSC for evaluating drawings of dynamic graphs, by measuring how proportional the geometric shape change in the drawings of dynamic graphs is to the ground truth change in dynamic graphs. Validation using deformation experiments support that DSC can accurately\nmeasure shape change faithfulness in dynamic graph drawing.\n\nFurthermore, we present extensive comparison experiments of ten popular graph layouts using our new shape-based metrics dGG, dRNG and DSC, to recommend which layouts can give a better shape-faithful graph drawing for large and complex graphs.",
      "award": false
    },
    "paper-6250": {
      "authors": [
        "Shilpika Shilpika (University of California, Davis)",
        "Takanori Fujiwara (University of California, Davis)",
        "Naohisa Sakamoto (Kobe University)",
        "Jorji Nonaka (RIKEN Center for Computational Science)",
        "Kwan-Liu Ma (University of California at Davis)"
      ],
      "Paper ID": "paper-6250",
      "Title": "A Visual Analytics Approach for Hardware System Monitoring with Streaming Functional Data Analysis",
      "type": "PPaper",
      "Abstract": "Many real-world applications involve analyzing time-dependent phenomena, which are intrinsically functional, consisting of curves varying over a continuum (e.g., time). When analyzing continuous data, functional data analysis (FDA) provides substantial\nbenefits, such as the ability to study the derivatives and to restrict the ordering of data. However, continuous data inherently has infinite dimensions, and for a long time series, FDA methods often suffer from high computational costs. The analysis problem becomes even more challenging when we must update the FDA results for continuously arriving data. In this paper, we present a visual analytics approach for monitoring and reviewing time series data streamed from a hardware system with a focus on identifying outliers by using FDA. To perform FDA while addressing the computational problem, we introduce new incremental and progressive algorithms that promptly generate the magnitude-shape (MS) plot, which conveys both the functional magnitude and shape outlyingness of time series data. In addition, by using an MS plot in conjunction with an FDA version of principal component analysis, we enhance the analyst\u2019s ability to investigate the visually-identified outliers. We illustrate the effectiveness of our approach with two use scenarios using real-world datasets. The resulting tool is evaluated by industry experts using real-world streaming datasets.",
      "award": "honorable"
    },
    "paper-6863": {
      "authors": [
        "Dana EL-Rushaidat (Jordan University of Science and Technology)",
        "Raine Yeh (Google)",
        "Xavier Tricoche (Purdue University )"
      ],
      "Paper ID": "paper-6863",
      "Title": "Boundary-Aware Rectilinear Grid: Accurate Approximation of Unstructured Dataset into Rectilinear Grid with Solid Boundary Handling Capabilities",
      "type": "Paper",
      "Abstract": "Computational fluid dynamics simulations produce increasingly large datasets that are often defined over unstructured grids with solid boundaries. Though unstructured grids allow for the flexible representation of this geometry and the refinement of the grid resolution, they suffer from high storage cost, non-trivial spatial queries, and low reconstruction smoothness. On the other hand, rectilinear grids do not have these drawbacks, but they cannot represent complex boundaries.\nWe present in this paper a technique for the high-quality approximation of large unstructured datasets with solid boundaries onto modified rectilinear grids that we endow with boundary handling capabilities. The resulting data representation can accommodate challenging boundaries while supporting high-order reconstruction kernels with a much-reduced memory footprint. As such, our data representation enjoys all the benefits of conventional rectilinear grids while addressing their fundamental geometric limitations. We demonstrate the proposed approach on several CFD datasets and show that our method achieves an accurate and high-quality approximation of simulation datasets.",
      "award": false
    },
    "paper-7044": {
      "authors": [
        "Pavol Klacansky (University of Utah)",
        "Attila Gyulassy (University of Utah)",
        "Peer-Timo Bremer (Lawrence Livermore National Laboratory)",
        "Valerio Pascucci (University of Utah)"
      ],
      "Paper ID": "paper-7044",
      "Title": "A Study of the Locality of Persistence-Based Queries and Its Implications on Efficiency of Localized Data Structures",
      "type": "Paper",
      "Abstract": "Scientific datasets are often analyzed and visualized using isosurfaces. The connected components at or above the isovalue defining these isosurfaces are called superlevel-set components. The vertex set of these superlevel-set components can be used to compute local statistics, such as mean temperature or histogram per component, or to segment the data. However, in datasets produced by acquisition devices or simulations noise induces many spurious components which clutter the visualization and analysis results. Many of these spurious components would disappear if the data values were slightly adjusted. The notion of persistence captures the stability of a component with respect to function value changes, and so we are interested in computing persistence quickly. Locality of computation is critical for parallel scalability, minimization of communication in a distributed environment, or an out-of-core processing. The recently introduced merge forest attained high performance by exploiting locality, thereby avoiding communication until needed to resolve a feature query. We extend the merge forest to support persistence-based queries and study the locality of these queries by evaluating the traversals of regions of data during a query. We confirm that the majority of evaluated datasets have the property that the noise is mostly local, and thus can be efficiently eliminated without performing a global analysis. Finally, we compare the query running times with those of a triplet merge tree, because a triplet merge tree answers all proposed queries in constant time and can be constructed from a merge tree in linear time.",
      "award": false
    },
    "paper-7244": {
      "authors": [
        "Aditi Mishra (Arizona State University)",
        "Shashank Ginjpalli (Arizona State University)",
        "Chris Bryan (Arizona State University)"
      ],
      "Paper ID": "paper-7244",
      "Title": "News Kaleidoscope: Visual Investigation of Coverage Diversity inNews Event Reporting",
      "type": "Paper",
      "Abstract": "When a newsworthy event occurs, media articles that report on and about the event can vary widely in different ways---a concept known as coverage diversity. To help investigate coverage diversity in event reporting, we develop a visual analytics system called NewsKaleidoscope. NewsKaleidoscope combines several backend language processing techniques with a coordinated visualization interface. Notably, NewsKaleidoscope is tailored for visualization non-experts, and adopts an analytic workflow based around subselection analysis, whereby second-level features of articles are extracted to provide a more detailed and nuanced analysis of coverage diversity.\nTo robustly evaluate NewsKaleidoscope, we conduct a trio of user studies. (1) A study with news experts assesses the insights promoted for our targeted journalism-savvy users. (2) A follow-up study with news novices assesses the overall system and the specific insights promoted for journalism-agnostic users. (3) Based on identified system limitations in these two studies, we amend NewsKaleidoscope\u2019s design and conduct a third study to validate these improvements. Results indicate that, for both news novice and experts, NewsKaleidoscope supports an effective, task-driven workflow for analyzing the diversity of news coverage about events, though journalism expertise has a significant influence on the user\u2019s insights and takeaways. Our insights developing and evaluating NewsKaleidoscope can aid future tools that combine visualization with natural language processing to analyze coverage diversity in news event reporting.",
      "award": false
    },
    "paper-7366": {
      "authors": [
        "Shivam Agarwal (University of Duisburg-Essen)",
        "G\u00fcnter Wallner (Johannes Kepler University Linz)",
        "Jeremy Watson (AI Crowd)",
        "Fabian Beck (University of Duisburg-Essen)"
      ],
      "Paper ID": "paper-7366",
      "Title": "Spatio-temporal Analysis of Multi-agent Scheduling Behaviors on Fixed-track Networks",
      "type": "Paper",
      "Abstract": "Multi-agent systems require coordination among the agents to solve a given task. For movement on fixed-track networks, traditional scheduling algorithms have dominated so far, but the interest in autonomous and intelligent agents is growing as they promise to react to unexpected and exceptional situations more robustly. In this paper, we study data from the Flatland 2020 NeurIPS Competition, where trains move through a virtual rail network. We developed a timeline-based visualization that provides an overview of all train movements in a simulated episode, clearly hinting at different phases, non-optimal routes, and issues such as deadlocks. This view is complemented with a map view and a graph view, interactively linked through highlighting and synchronous animation. Defining regions of interest in the map builds an analysis graph for detailed inspection. A comparison mode allows contrasting two different episodes regarding the same rail network across all views. We have conducted this application study in close collaboration with the Flatland community. Identified analysis goals stem from interviews with key persons of the community, while the approach itself was developed in two iterations based on feedback from experts with diverse backgrounds. This feedback, together with an analysis of the winning submissions from the competition, confirms that the initial analysis goals can be answered.",
      "award": false
    },
    "paper-7610": {
      "authors": [
        "Shisong Wang (University of Saskatchewan)",
        "Debajyoti Mondal (University of Saskatchewan)",
        "Sara Sadri (University of Saskatchewan)",
        "Chanchal K. Roy (University of Saskatchewan)",
        "Jay Famiglietti (Global Institute of Water Security)",
        "Kevin A. Schneider (University of Saskatchewan)"
      ],
      "Paper ID": "paper-7610",
      "Title": "SET-STAT-MAP: Extending Parallel Sets for Visualizing Mixed Data",
      "type": "Paper",
      "Abstract": "Multi-attribute dataset visualizations are often designed based on attribute types, i.e., whether the attributes are categorical or numerical.  Parallel Sets and Parallel Coordinates are two well-known techniques to visualize categorical and numerical data, respectively. A common strategy to visualize mixed data is to use multiple information linked view, e.g., Parallel Coordinates are often augmented with maps to explore spatial data with numeric attributes. In this paper, we design visualizations for mixed data, where the dataset may include numerical, categorical, and spatial attributes. The proposed solution Set-Stat-Map is a harmonious combination of three interactive components: Parallel Sets (visualizes sets determined by the combination of categories or numeric ranges), statistics columns (visualizes numerical summaries of the sets), and a geospatial map view (visualizes the spatial information). We augment these components with colors and textures to enhance users' capability of analyzing distributions of pairs of attribute combinations. To improve scalability, we merge the sets to limit the number of possible combinations to be rendered on the display. We demonstrate the use of Set-Stat-Map using two different types of datasets: a meteorological dataset and an online vacation rental dataset (Airbnb). To examine the potential of the system, we collaborated with the meteorologists, which revealed both challenges and opportunities for Set-Stat-Map to be used for real-life visual analytics.",
      "award": false
    },
    "paper-8231": {
      "authors": [
        "Jacob Miller (University of Arizona)",
        "Stephen Kobourov (University of Arizona)",
        "Vahan Huroyan (University of Arizona)"
      ],
      "Paper ID": "paper-8231",
      "Title": "Browser-based Hyperbolic Visualization of Graphs",
      "type": "Paper",
      "Abstract": "Hyperbolic geometry offers a natural \u2018focus+context\u2019 for data visualization and has been shown to underlie real-world complex networks. However, current hyperbolic network visualization approaches are limited to special types of networks and do not scale to large datasets. With this in mind, we designed, implemented, and analyzed three methods for hyperbolic visualization of networks in the browser based on inverse projections, generalized force-directed algorithms, and hyperbolic multi-dimensional scaling (H-MDS). A comparison with Euclidean MDS shows that H-MDS produces embeddings with lower distortion for several types of networks. All three methods can handle node-link and node-link-group representations and are available in a fully functional web-based system.",
      "award": false
    },
    "paper-8250": {
      "authors": [
        "Yun-Hsin Kuo (University of California, Davis)",
        "Takanori Fujiwara (University of California, Davis)",
        "Charles C.-K. Chou (Academia Sinica)",
        "Chun-houh Chen (Academia Sinica)",
        "Kwan-Liu Ma (University of California, Davis)"
      ],
      "Paper ID": "paper-8250",
      "Title": "A Machine-Learning-Aided Visual Analysis Workflow for Investigating Air Pollution Data",
      "type": "Paper",
      "Abstract": "Analyzing air pollution data is challenging as there are various analysis focuses from different aspects: feature (what), space (where), and time (when). As in most geospatial analysis problems, besides high-dimensional features, the temporal and spatial dependencies of air pollution induce the complexity of performing analysis. Machine learning methods, such as dimensionality reduction, can extract and summarize important information of the data to lift the burden of understanding such a complicated environment. In this paper, we present a methodology that utilizes multiple machine learning methods to uniformly explore these aspects. With this methodology, we develop a visual analytic system that supports a flexible analysis workflow, allowing domain experts to freely explore different aspects based on their analysis needs. We demonstrate the capability of our system and analysis workflow supporting a variety of analysis tasks with multiple use cases.",
      "award": false
    },
    "paper-8469": {
      "authors": [
        "Pavol Klacansky (University of Utah)",
        "Haichao Miao (Lawrence Livermore National Laboratory)",
        "Attila Gyulassy (University of Utah)",
        "Andrew Townsend (LLNL)",
        "Kyle Champley (LLNL)",
        "Joe Tringe (LLNL)",
        "Valerio Pascucci (University of Utah)",
        "Peer-Timo Bremer (Lawrence Livermore National Laboratory)"
      ],
      "Paper ID": "paper-8469",
      "Title": "Virtual Inspection of Additively Manufactured Parts",
      "type": "Paper",
      "Abstract": "Advanced manufacturing techniques, such as additive manufacturing, enable the design of increasingly complex components for a wide range of industrial applications.\nHowever, this complexity makes qualification of the parts, determining whether a part is within some margin of error from the initial design, difficult.\nTo inspect and qualify complex internal geometries that are not accessible with an external probe, parts are typically scanned with computed tomography (CT), and manually compared to the computer-aided design (CAD) model using visual inspections.\nMatching the CAD model to the 3D reconstructed object is challenging in a traditional desktop environment due to the lack of depth perception and 3D interaction.\nAn additional challenge comes from the geometric complexity of CAD meshes and large-scale CT scans.\nWe present a virtual reality (VR) system for manual qualification, providing a novel defect visualization method. First, we describe a semiautomatic CAD-to-scan Registration approach in VR using a finite element mesh.\nSecond, we introduce the Defect Box, which enables full-resolution inspection for massive scans and CAD-CT comparison of local defect regions.\nFinally, our system includes intuitive 3D Metrology methods that enable natural interactions for the measurement of features and defects in VR.\nWe demonstrate our approach on both real and synthetic data and discuss feedback from four expert users in nondestructive qualification.",
      "award": false
    },
    "paper-8813": {
      "authors": [
        "Chengbo Zheng (Hong Kong University of Science and Technology)",
        "Xiaojuan Ma (Hong Kong University of Science and Technology)"
      ],
      "Paper ID": "paper-8813",
      "Title": "Evaluating the Effect of Enhanced Text-Visualization Integration on Combating Misinformation in Data Story",
      "type": "Paper",
      "Abstract": "Misinformation has disruptive effects on our lives. Many researchers have looked into means to identify and combat misinformation in text or data visualization. However, there is still a lack of understanding of how misinformation can be introduced when text and visualization are combined to tell data stories, not to mention how to improve the lay public\u2019s awareness of possible misperceptions about facts in narrative visualization. In this paper, we \ufb01rst analyze where misinformation could possibly be injected into the productionconsumption process of data stories through a literature survey. Then, as a \ufb01rst step towards combating misinformation in data stories, we explore possible defensive design methods to enhance the reader\u2019s awareness of information misalignment when data facts are scripted and visualized. More speci\ufb01cally, we conduct a between-subjects crowdsourcing study to investigate the impact of two design methods enhancing text-visualization integration, i.e., explanatory annotation and interactive linking, on users\u2019 awareness of misinformation in data stories. The study results show that although most participants still can not \ufb01nd misinformation, the two design methods can significantly lower the perceived credibility of the text or visualizations. Our work informs the possibility of \ufb01ghting an infodemic through defensive design methods.",
      "award": false
    },
    "paper-8907": {
      "authors": [
        "Xiwei Xuan (University of California, Davis)",
        "Xiaoyu Zhang (University of California, Davis)",
        "Oh-Hyun Kwon (University of California, Davis)",
        "Kwan-Liu Ma (University of California at Davis)"
      ],
      "Paper ID": "paper-8907",
      "Title": "VAC-CNN: A Visual Analytics System for Comparative Studies of Deep Convolutional Neural Networks",
      "type": "PPaper",
      "Abstract": "The rapid development of Convolutional Neural Networks (CNNs) in recent years has triggered significant breakthroughs in many machine learning (ML) applications. The ability to understand and compare various CNN models available is thus essential. The conventional approach with visualizing each model's quantitative features, such as classification accuracy and computational complexity, is not sufficient for a deeper understanding and comparison of the behaviors of different models. Moreover, most of the existing tools for assessing CNN behaviors only support comparison between two models and lack the flexibility of customizing the analysis tasks according to user needs. This paper presents a visual analytics system, VAC-CNN (Visual Analytics for Comparing CNNs), that supports the in-depth inspection of a single CNN model as well as comparative studies of two or more models. The ability to compare a larger number of (e.g., tens of) models especially distinguishes our system from previous ones. With a carefully designed model visualization and explaining support, VAC-CNN facilitates a highly interactive workflow that promptly presents both quantitative and qualitative information at each analysis stage. We demonstrate VAC-CNN's effectiveness for assisting novice ML practitioners in evaluating and comparing multiple CNN models through two use cases and one preliminary evaluation study using the image classification tasks on the ImageNet dataset.",
      "award": false
    },
    "paper-9879": {
      "authors": [
        "Dominik Vietinghoff (Leipzig University)",
        "Michael B\u00f6ttinger (German Climate Computing Center (DKRZ))",
        "Gerik Scheuermann (Leipzig University)",
        "Christian Heine (Leipzig University)"
      ],
      "Paper ID": "paper-9879",
      "Title": "Detecting Critical Points in 2D Scalar Field Ensembles Using Bayesian Inference",
      "type": "Paper",
      "Abstract": "In an era of quickly growing data set sizes, information reduction methods such as extracting or highlighting characteristic features become more and more important for data analysis. For single scalar fields, topological methods can fill this role by extracting and relating critical points. While such methods are regularly employed to study single scalar fields, it is less well studied how they can be extended to uncertain data, as produced, e.g., by ensemble simulations.\n\nMotivated by our previous work on visualization in climate research, we study new methods to characterize critical points in ensembles of 2D scalar fields. Previous work on this topic either assumed or required specific distributions, did not account for uncertainty introduced by approximating the underlying latent distributions by a finite number of fields, or did not allow to answer all our domain experts' questions. In this work, we use Bayesian inference to estimate the probability of critical points, either of the original ensemble or its bootstrapped mean. This does not make any assumptions on the underlying distribution and allows to estimate the sensitivity of the results to finite-sample approximations of the underlying distribution. We use color mapping to depict these probabilities and the stability of their estimation. The resulting images can, e.g., be used to estimate how precise the critical points of the mean-field are. We apply our method to synthetic data to validate its theoretical properties and compare it with other methods in this regard. We also apply our method to the data from our previous work, where it provides a more accurate answer to the domain experts' research questions.",
      "award": false
    },
    "note-1000": {
      "authors": [
        "Angelos Chatzimparmpas (Linnaeus University)",
        "Vilhelm Park (Linnaeus University)",
        "Andreas Kerren (Linnaeus University)"
      ],
      "Paper ID": "note-1000",
      "Title": "Evaluating StackGenVis with a Comparative User Study",
      "type": "Note",
      "Abstract": "Stacked generalization (also called stacking) is an ensemble method in machine learning that deploys a metamodel to summarize the predictive results of heterogeneous base models organized into one or more layers. Despite being capable of producing high-performance results, building a stack of models can be a trial-and-error procedure. Thus, our previously developed visual analytics system, entitled StackGenVis, was designed to monitor and control the entire stacking process visually. In this work, we present the results of a comparative user study we performed for evaluating the StackGenVis system. We divided the study participants into two groups to test the usability and effectiveness of StackGenVis compared to Orange Visual Stacking (OVS) in an exploratory usage scenario using healthcare data. The results indicate that StackGenVis is significantly more powerful than OVS based on the qualitative feedback provided by the participants. However, the average completion time for all tasks was comparable between both tools.",
      "award": false
    },
    "note-1006": {
      "authors": [
        "Martin Baumann (University of Stuttgart)",
        "Jena Satkunarajan (Universit\u00e4t Stuttgart)",
        "Steffen Koch (University of Stuttgart)",
        "Thomas Ertl (University of Stuttgart)"
      ],
      "Paper ID": "note-1006",
      "Title": "Hierarchical Multifocus Navigation in Text Annotation Data",
      "type": "Note",
      "Abstract": "We present a new hierarchical multifocus representation- and\ninteraction-technique for the analysis of text annotations. The com-\nparative analysis of annotation data on multiple, distant passages\n(focus regions) of a long source text raises several scalability prob-\nlems. In particular, one soon can be confronted with many nested\nfoci on text ranges with sizes of different orders of magnitude. Our\nsolution suggests to delegate the detailed data representation to other\nviews and to concentrate in the presented overview on the organi-\nzation of the focus regions. The approach consists of three parts: a\ncollection of strips where the annotations are represented in a con-\ndensed form and where sibling- and child-foci are manipulated, a\nmap of the resulting tree of foci for direct access, and a work bench\nthat allows to compare deliberate nodes of the tree on a flat layer.\nWe discuss our approach by comparing it with other state-of-the-art\nmultifocus techniques and describe two use cases that deal with rela-\ntional annotation and with the analysis of annotations on hierarchical\ntext structures respectively.",
      "award": false
    },
    "note-1011": {
      "authors": [
        "Teng-Yok Lee (Mitsubishi Electric Corporation)"
      ],
      "Paper ID": "note-1011",
      "Title": "Visualization for neural-network-based person reidentification",
      "type": "Note",
      "Abstract": "Given images of a person, person re-identification (Person ReID) techniques aim to find images of the same person from previously collected images. Because of large data sets of person images and the advance of deep learning, convolutional neural networks (CNN) successfully boost the accuracy of Person ReID algorithms, but it can be difficult to explain and to troubleshoot issues due to the complexity of CNN. In this paper, we present an visualization-based approach to understand a CNN-based Person ReID algorithm. Given two images, we design an algorithm to estimate how much different elements in a CNN layer contribute to the similarity between their outputs. Based on the contribution estimation, we build a visualization tool to interactively locate and visualize the activation of these elements, other than brute-force examining millions of elements. Our visualization tool also supports various user interaction components to explore a Person ReID data set, locate difficult cases, and analyze the similarity between these difficult cases. We show a use case with our tool to understand and troubleshoot issues in a CNN-based Person ReID algorithm.",
      "award": false
    },
    "note-1017": {
      "authors": [
        "Yumiko Sakamoto (University of Manitoba)",
        "Samar Sallam (University of Manitoba)",
        "Aaron Salo (University of Manitoba)",
        "Jason Leboe-McGowan (University of Manitoba)",
        "Pourang Irani (University of Manitoba)"
      ],
      "Paper ID": "note-1017",
      "Title": "Persuasive Data Storytelling with a Data Video during Covid-19 Infodemic: Affective Pathway to Influence the Users\u2019 Perception about Contact Tracing Apps in less than 6 Minutes",
      "type": "Note",
      "Abstract": "The current pandemic showed us the importance of swiftly disseminating data-based information to the masses of people. This study explores an affect-centered narrative to convey data-driven messages regarding contact tracing apps (CTAs) using video as a medium (i.e., data video). A between-subjects online study compared the effect of three storytelling approaches on viewers\u2019 perception. A video developed by Google was selected as the baseline video (Control Condition; 2min 23s) due to its high quality and relevance to CTAs. The central messages of this baseline video were; a) how CTAs work, and b) how safe and effective CTAs are. Infographics supporting these messages were then added to the baseline video (the second condition; 3min 19s ); this was a simple data video (DV), and it did not intend to induce specific emotional experiences in participants (i.e., cognition-centered video). Finally, an affect-focused DV (AFDV) was also created by emphasizing the emotion-based narrative aspect of the message (the third condition; 4min 6s ). In this video, three cute human-like cartoon characters were introduced. Viewers in this condition needed to process both cognitive and affective information. Note all three videos (i.e., control video, DV, and AFDV) conveyed identical messages. Participants watched one of these three videos only once, and we explored the video effect on their perception. Our results repeatedly indicated the potential\nbenefits of including affect in data storytelling.",
      "award": false
    },
    "note-1020": {
      "authors": [
        "Sebeom Park (Seoul National University)",
        "Soohyun Lee (Korea University)",
        "Hyeon Jeon (Seoul National University)",
        "Youngtaek Kim (Samsung Electronics Co., Ltd)",
        "Seokweon Jung (Seoul National University)",
        "Jinwook Bok (Seoul National University)",
        "Jinwook Seo (Seoul National University)"
      ],
      "Paper ID": "note-1020",
      "Title": "VANT : A Visual Analytics System for Refining Parallel Corpora in Neural Machine Translation",
      "type": "Note",
      "Abstract": "The quality of parallel corpora used to train a Neural Machine Trans\u0002lation (NMT) model can critically influence the model\u2019s performance. Various approaches for refining parallel corpora have been introduced, but there is still much room for improvements, such as\nenhancing the efficiency and the quality of refinement. We introduce VANT, a novel visual analytics system for refining parallel corpora used in training an NMT model. Our system helps users to readily detect and filter noisy parallel corpora by (1) aiding the quality estimation of individual sentence pairs within the corpora by providing diverse quality metrics (e.g., cosine similarity, BLEU, length ratio) and (2) allowing users to visually examine and manage the corpora based on the pre-computed metrics scores. Our system\u2019s effectiveness and usefulness are demonstrated through a qualitative user study with eight participants, including four domain experts with real-world datasets.",
      "award": "best"
    },
    "note-1025": {
      "authors": [
        "Tangyuan Zou (southwest university of science and technology)",
        "song wang (southwest university of science and technology)",
        "Hanglin Li (SouthWest University of Science and Technology)",
        "Yadong Wu (Sichuan University of Science and Engineering)"
      ],
      "Paper ID": "note-1025",
      "Title": "Hybrid Traffic Route Visualization Recommendation Based on Multilayer Complex Networks",
      "type": "Note",
      "Abstract": "Urban traffic congestion is a major nuisance for residents\u2019 daily commute, but few studies have focused on the effective combination between urban traffic condition visualization and hybrid traffic travel route recommendation. In this paper, the visualization exploration of urban transportation patterns is realized by multilayer complex transportation networks, which are constructed by taxi transportation network, bike-sharing transportation network, and urban transportation community network. Based on multilayer complex traffic networks, a genetic algorithm modified by A* search algorithm is used to generate multi-modal travel routes. The case studies prove that this method can effectively reduce the time cost of commuting between congested areas by generating hybrid traffic routes.",
      "award": false
    },
    "note-1028": {
      "authors": [
        "Nathan Danneman (Data Machines Corp)",
        "Robert Gove (Two Six Technologies)"
      ],
      "Paper ID": "note-1028",
      "Title": "Tuning Automatic Summarization for Incident Report Visualization",
      "type": "Note",
      "Abstract": "We present a machine learning approach to improve the accuracy of summarized incident report visualizations for cyber security. We extend a recent incident report summarization method by training a Bayesian hierarchical model to optimize the summarization algorithm's weights. We also train a flat model and a neural network as alternative models to compare against our hierarchical model. Summaries generated by our hierarchical model achieve higher accuracy than the other methods, with an AUC 0.2 higher than the unweighted method while achieving comparable summarization size. We further demonstrate that visualizations of the hierarchical model's summaries are at least as useful the unweighted method's summaries, and possibly more useful.",
      "award": false
    },
    "note-1029": {
      "authors": [
        "Aosheng Cheng (Zhejiang University of Finance and Economics)",
        "Yulong Yin (Zhejiang University of Finance and Economics)",
        "Zhenyu Yan (Zhejiang University of Finance and Economics)",
        "Yuhua Liu (Hangzhou Dianzi University)",
        "Zhiguang Zhou (Zhejiang University of Finance and Economics)"
      ],
      "Paper ID": "note-1029",
      "Title": "Visual Analytics of Multiple Network Ranking based on Structural Similarity ",
      "type": "Note",
      "Abstract": "Ranking the node importance in complex networks has been widely applied for different purposes, such as web search, resource allocation, and network security. However, existing node ranking methods are almost single network ranking using only one relationship, or aggregate the node ranking scores on multiple networks with equal\nweight, which are insufficient to construct reasonable multiple network rankings, since the association information among multiple networks is largely ignored. Thus, we propose a multiple network visualization framework by fusing multiple networks to obtain credible node ranking scores. After measuring the scores of nodes in each single network by the classic PageRank, a network weight self-adjustment model based on structural similarities between pairwise networks is designed to strengthen the common features of multiple networks or their distinct characteristics. Then, a combined score for each node is computed by a weighted sum of its individual ranking scores on multiple networks. Besides, we provide a set of visualization and interaction interfaces, enabling users to intuitively explore, optimize and compare the multiple network rankings. Case studies on real datasets show that our system is flexible to adapt to different application scenarios, and users can successfully solve multiple network ranking tasks efficiently.",
      "award": "honorable"
    },
    "contest-1016": {
      "authors": [
        "Shiman Zhang (Tongji University)",
        "Haotian Wu (Zhejiang University)",
        "YuXuan Li (Tongji University)",
        "Yancheng Cao (Tongji University)",
        "Yang Shi (Tongji University)",
        "Siming Chen (Fudan University)",
        "Nan Cao (Tongji College of Design and Innovation)"
      ],
      "Paper ID": "contest-1016",
      "Title": "Understanding Cultural Communication through the Visual Portraits of Youtube Channels",
      "type": "Storytelling",
      "Abstract": "https://storage.bhs.cloud.ovh.net/v1/AUTH_26879f98162b4e0092dbf77201f410cb/pacificvis22d/pacificvis22d-sub1016-cam-i6.pdf?temp_url_sig=ca66181ff0e8307a0f0fe37106c333da69a9e76d&temp_url_expires=1646879100",
      "Abstract pages": 1,
      "Abstract paper size": "letter",
      "Abstract.1": "The Guinness World Record for the \"the most subscribed Chinese YouTube Channel\" was set by Chinese short video blogger Li Ziqi, whose videos are not in English but are popular with foreign audiences. This data video presents a visual portrait of Li Ziqi's YouTube channel. The visual portrait depicts cultural communication power using six dimensions: subscriptions, the number of videos in vogue, average video views, like rate, YouTube category, and whether the channel is a personal blogger. By building a series of visual portraits of YouTube channels, we first compared China's cultural communication power among the three East Asian culture countries, including China, Japan, and Korea. Then, we compared East Asian culture's cultural communication power as a whole among different cultural regions of the world. We collected data through public data sources and Google YouTube Data API and processed the data through statistical analysis. Finally, we proposed a set of suggestions regarding how to improve the cultural communication power of Chinese on YouTube.",
      "award": "honorable",
      "url": false
    },
    "contest-1019": {
      "authors": [
        "Linqi Wang (Hunan University)",
        "Fengzhou Liang (Sun Yat-sen University)",
        "ning bin (Hunan University)",
        "Junyan Lv (Hunan University)",
        "Fang Liu (Hunan University)"
      ],
      "Paper ID": "contest-1019",
      "Title": "Emergency Logistics Constructing a Lifeline in Wuhan for Fighting COVID-19",
      "type": "Storytelling",
      "Abstract": "https://storage.bhs.cloud.ovh.net/v1/AUTH_26879f98162b4e0092dbf77201f410cb/pacificvis22d/pacificvis22d-sub1019-cam-i6.pdf?temp_url_sig=521aee89ead106b7fd9341e6ab31abbc35d53cf0&temp_url_expires=1646879100",
      "Abstract pages": 2,
      "Abstract paper size": "letter",
      "Abstract.1": "COVID-19 has brought a significant impact on the world. It is a joint responsibility of all countries to fight against this epidemic together. Through visual and interactive web pages, taking emergency logistics as the clue, the work tells a touching story: in the spring of 2020, people all over China and even the world supported Wuhan to fight the outbreak and overcome the shortage of resources.\nWuhan, known as the \"thoroughfare of nine provinces,\" was not isolated from the outside world under lockdown but has received a steady stream of support despite the corona-virus crisis. The story divides into five chapters. The color of the visualization page changes from dark to bright, representing Wuhan getting rid of the haze of the epidemic step by step. We hope to encourage people to help each other and contribute to an early and complete victory over the coronavirus throughout the world.",
      "award": "best",
      "url": false
    },
    "contest-1021": {
      "authors": [
        "William Harvey (Polytechnique Montreal)",
        "Claudia Onorato (Polytechnique Montreal)",
        "Thomas Hurtut (Polytechnique Montreal)"
      ],
      "Paper ID": "contest-1021",
      "Title": "Polydodo: a Tool for Personal Sleep Stage Analysis and Narrative Visualization",
      "type": "Storytelling",
      "Abstract": "https://storage.bhs.cloud.ovh.net/v1/AUTH_26879f98162b4e0092dbf77201f410cb/pacificvis22d/pacificvis22d-sub1021-cam-i6.pdf?temp_url_sig=fa477f868ed4b310b34b09dda38f68de0834c0a2&temp_url_expires=1646879100",
      "Abstract pages": 1,
      "Abstract paper size": "letter",
      "Abstract.1": "The submitted story is part of an open source project called Polydodo. This project proposes a user-friendly tool and interface to classify sleep stages. The user can upload sleep records, and then visualize them through a data story-telling format. The story and visualizations adapt to the user's data. For the sake of submission to PacificVis, we show the \"preview\" mode, using already loaded data. EEG data is analyzed by a Random forest classifier followed by a Hidden Markov Model post-processing. The design process of this project started as a team project during the 2020 winter semester of \"Data Visualization Design\" course at Polytechnique Montreal. It followed a classical iterative user-centred design process, targeting non expert user regarding sleep cycles data, therefore also the choice of using a story-telling based format to communicate them. The fact that the user can upload personal sleep data also reinforces the user engagement.",
      "award": false,
      "url": false
    },
    "contest-1024": {
      "authors": [
        "Juanjuan Long (Jiangnan University)",
        "Wei Zhou (Jiangnan University)",
        "YongJie Xing (Jiangnan University)",
        "yang kang (Jiangnan University)",
        "Siyuan He (Cognizant)",
        "Yimin Mao (Cognizant)"
      ],
      "Paper ID": "contest-1024",
      "Title": "The Story of Slow Train in China",
      "type": "Storytelling",
      "Abstract": "https://storage.bhs.cloud.ovh.net/v1/AUTH_26879f98162b4e0092dbf77201f410cb/pacificvis22d/pacificvis22d-sub1024-cam-i6.pdf?temp_url_sig=15a16be1f7175436544e8858b5730b576eb2467c&temp_url_expires=1646879100",
      "Abstract pages": 8,
      "Abstract paper size": "A4",
      "Abstract.1": "The original intention of our work is to make people understand the development of Slow train in China and the role it plays in rural revitalization.\nIn terms of data, we first collect the slow train data of China's railway network and related news reports (including train number, mileage, starting and ending points, etc.) and displayed the data results in charts.\nIn terms of design, we first interpret the data and compare the speed of slow trains with high-speed trains. Then, we use charts and maps to analyze the distribution and development of slow trains in China. Finally, we use collages to illustrate the story of people's livelihood.\nThe technical implementation method uses the web page interaction technology of CSS3 and Javascript.\nDue to technical limitations, to give you a better viewing experience, this work is recommended to be viewed at 1920X1080 resolution.",
      "award": false,
      "url": false
    },
    "visxai-6403": {
      "authors": [
        "Jun Han (University of Notre Dame)",
        "Chaoli Wang (University of Notre Dame)"
      ],
      "Paper ID": "visxai-6403",
      "Title": "VCNet: A Generative Model for Volume Completion",
      "type": "?",
      "Abstract": "We present VCNet, a new deep learning approach for volume completion by synthesizing missing subvolumes. Our solution leverages a generative adversarial network (GAN) that learns to complete volumes using the adversarial and volumetric losses. The core design of VCNet features dilated residual block and long-term connection. During training, VCNet first randomly masks basic subvolumes (e.g., cuboids, slices) from complete volumes and learns to recover them. Moreover, we design a two-stage algorithm for stabilizing and accelerating network optimization. Once trained, VCNet takes an incomplete volume as input and automatically identifies and fills in the missing subvolumes with high quality. We quantitatively and qualitatively test VCNet with volumetric data sets of various characteristics to demonstrate its effectiveness. We also compare VCNet against a diffusion-based solution and two GAN-based solutions.",
      "award": false
    },
    "visxai-5160": {
      "authors": [
        "Robert Gove (Two Six Technologies)",
        "Lucas Cadalzo (Two Six Technologies)",
        "Nicholas Leiby (Two Six Technologies)",
        "Jedediah Singer (Two Six Technologies)",
        "Alexander Zaitzeff (Two Six Technologies)"
      ],
      "Paper ID": "visxai-5160",
      "Title": "New Guidance for Using t-SNE: Alternative Defaults, Hyperparameter Selection Automation, and Comparative Evaluation",
      "type": "?",
      "Abstract": "We present new guidelines for choosing hyperparameters for t-SNE and an evaluation comparing these guidelines to current ones. These guidelines include a proposed empirically optimum guideline derived from a t-SNE hyperparameter grid search over a large collection of data sets. We also introduce a new method to featurize data sets using graph-based metrics called scagnostics; we use these features to train a neural network that predicts optimal t-SNE hyperparameters for the respective data set. This neural network has the potential to simplify the use of t-SNE by removing guesswork about which hyperparameters will produce the best embedding. We evaluate and compare our neural network-derived and empirically optimum hyperparameters to several other t-SNE hyperparameter guidelines from the literature on 68 data sets. The hyperparameters predicted by our neural network yield embeddings with similar accuracy as the best current t-SNE guidelines. Using our empirically optimum hyperparameters is simpler than following previously published guidelines but yields more accurate embeddings, in some cases by a statistically significant margin. We find that the useful ranges for t-SNE hyperparameters are narrower and include smaller values than previously reported in the literature. Importantly, we also quantify the potential for future improvements in this area: using data from a grid search of t-SNE hyperparameters we find that an optimal selection method could improve embedding accuracy by up to two percentage points over the methods examined in this paper.",
      "award": false
    },
    "visxai-4033": {
      "authors": [
        "Shijun Cai (The University of Sydney)",
        "Seok-Hee Hong (The University of Sydney)",
        "Xiaobo Xia (The University of Sydney)",
        "Tongliang Liu (The University of Sydney)",
        "Weidong Huang (University of Technology Sydney)"
      ],
      "Paper ID": "visxai-4033",
      "Title": "A Machine Learning Approach for Predicting Human Shortest Path Task Performance",
      "type": "?",
      "Abstract": "Finding a shortest path for a given pair of vertices in a graph drawing is one of the fundamental tasks for qualitative evaluation of graph drawings. In this paper, we present the first machine learning approach to predict human shortest path task performance, including accuracy, response time, and mental effort.\n\nTo predict the shortest path task performance, we utilize correlated quality metrics and the ground truth data from the shortest path experiments. Specifically, we introduce path faithfulness metrics and show strong correlations with the shortest path task performance. Moreover, to mitigate the problem of insufficient ground truth training data, we use the transfer learning method to pre-train our deep model, exploiting the correlated quality metrics.\n\nExperimental results using the ground truth human shortest path experiment data show that our models can successfully predict the shortest path task performance. In particular, model MSP achieves the MSE (i.e., test mean square error) of 0.7243 (i.e., data range from \u221217.27 to 1.81) for prediction.",
      "award": false
    },
    "visxai-9591": {
      "authors": [
        "Michael Gleicher (University of Wisconsin - Madison)",
        "Xinyi Yu (University of Wisconsin - Madison)",
        "Yuheng Chen (University of Wisconsin - Madison)"
      ],
      "Paper ID": "visxai-9591",
      "Title": "Trinary tools for Continuously Valued Binary Classifiers",
      "type": "?",
      "Abstract": "Classification methods for binary (yes/no) tasks often produce a continuously valued score.\nMachine learning practitioners must perform model selection, calibration, discretization, performance assessment, tuning, and fairness assessment.\nSuch tasks involve examining classifier results, typically using summary statistics and manual examination of details.\nIn this paper, we provide an interactive visualization approach to support such continuously-valued classifier examination tasks.\n\\added{Our approach addresses the three phases of these tasks: calibration, operating point selection, and examination.}\nWe enhance standard views and introduce task-specific views so that they can be integrated into a multi-view coordination (MVC) system.\nWe build on an existing comparison-based approach, extending it to continuous classifiers by treating the continuous values as trinary (positive, unsure, negative) even if the classifier will not ultimately use the 3-way classification. We provide use cases that demonstrate how our approach enables machine learning practitioners to accomplish key tasks.",
      "award": false
    },
    "poster-1030": {
      "authors": [
        "Taiki Tanaka (Nihon University)",
        "Yosuke Onoue (Nihon University)"
      ],
      "Paper ID": "poster-1030",
      "Title": "Summarized Dendrogram for Interactive Exploration of Hierarchical Document Clusters",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Hierarchical clustering techniques are widely used to classify documents based on a set of text written on a specific topic. Dendrograms (or tree diagrams) are often used to visualize the hierarchical clustering results; however, visual scalability for thousands of documents is an issue. To visualize a large number of documents, an provide abstract overview of hierarchical document clusters is required. In this paper, we present a novel visual analytics method to obtain an overview of hierarchical document clusters by aggregating dendrograms and summarizing subclusters using keyphrase extraction. The proposed method includes user interactions for adjusting the dendrogram's level of detail and drilling down to subclusters. An application example of the visualization publications dataset demonstrates the usefulness of our proposed method.",
      "award": false
    },
    "poster-1015": {
      "authors": [
        "Jiayang Li (Tianjin University)",
        "Chongke Bi (Tianjin University)"
      ],
      "Paper ID": "poster-1015",
      "Title": "Visual Analysis of Air Pollutants Transmission Patterns Based on Similarity Metric",
      "type": "Poster",
      "cancel": false,
      "Abstract": "In recent years, air pollution has become one of the major environmental problems. Tracking the transmission of pollutants is an important method to combat air pollution. However, the accuracy and efficiency of existing analysis methods cannot fully satisfy domain scientists\u2019 requirements. In this paper, we proposed a similarity metric based method to successfully extract the transmission patterns from high-dimensional air pollution data. Furthermore, a visual analysis framework is also designed to help domain scientists interactively mine some potential features. Finally, the effectiveness of our framework has been demonstrated by user study from domain scientists. Our framework has successfully help domain scientists understanding the development of air pollution trends and transmission patterns.",
      "award": false
    },
    "poster-1020": {
      "authors": [
        "KUNQI HU (Kyoto University)",
        "ZHONGJAING HAN (Kyoto University)",
        "Koji Koyamada (Kyoto University)",
        "Hiroaki Ohtani (National Institute for Fusion Science)"
      ],
      "Paper ID": "poster-1020",
      "Title": "Visualization of a plasma shape and its interference with a fusion reactor in 3D space",
      "type": "Poster",
      "cancel": false,
      "Abstract": "The design of a fusion reactor, FFHR, requires domain experts to inspect the interference of a plasma shape and inner components. As the plasma shape has a complex structure, we propose introducing the alpha shape method and neural network technology to obtain its boundary in three-dimensional space. Then, the interference is rendered with data mapping. The effectiveness of our approach is confirmed by slices.",
      "award": false
    },
    "poster-1028": {
      "authors": [
        "Ting Wang (Kyoto University)",
        "Hiroaki Natsukawa (Kyoto University)",
        "Koji Koyamada (Kyoto University)"
      ],
      "Paper ID": "poster-1028",
      "Title": "ChordTransition: A New State Transition Model with a Time Order TrackingMechanism for Time Series Data",
      "type": "Poster",
      "cancel": true,
      "Abstract": "In real systems such as those found in ecology, relationships between time series variables dynamically change in a nonlinear or state-dependent manner. Nonlinear analysis, as represented by empirical dynamic modeling, can represent time series data as trajectories in state space. By summarizing a sequence of points in a high-dimensional space, we can visualize the state transitions of the underlying system. State transition representations using node-link diagrams have often been used in previous research. Therefore, time order tracking is difficult in the state transition graph and the complex timelines cause clutter. To solve the problem, we propose ChordTransition, a new state transition model that employs Chord technique and refines the transition details within states. We discuss the design of ChordTransition, and present a prototype visual analytic system.",
      "award": false
    },
    "poster-1024": {
      "authors": [
        "JIARUI OU (Kyoto University)",
        "HAOBIN LI (Kyoto University)",
        "Koji Koyamada (Kyoto University)"
      ],
      "Paper ID": "poster-1024",
      "Title": "Visual Analytics for Deriving PDE Using Physics-Informed Neural Network",
      "type": "Poster",
      "cancel": false,
      "Abstract": "In this paper, we proposed a visual analytics approach to support the derivation of high-precision partial differential equations (PDEs) using a neural network from point cloud data consisting of the spatiotemporal coordinates. In neural networks, spatiotemporal coordinates are input, physical data is output, and a function approximates point cloud data is regressed. This makes the PDE residual a supervised data, especially in the case of equation derivation. In addition, although optimization of the neural network structure is important, it is difficult to automate it, and it is largely left to humans. As a result, to create knowledge from data, we developed a visual analytics system that emphasizes the importance of human involvement while also automatically building a model. We also conducted several case studies using the proposed system to confirm the effectiveness of this system and illustrated the results.",
      "award": false
    },
    "poster-1031": {
      "authors": [
        "Zekai Shao (Fudan University)",
        "Shuran Sun (Fudan University)",
        "Yuheng Zhao (Fudan Univerisity)",
        "Siyuan Wang (Fudan University)",
        "Zhongyu Wei (Fudan University)",
        "Siming Chen (Fudan University)"
      ],
      "Paper ID": "poster-1031",
      "Title": "Visual Exploration of the Reading Comprehension Question Answering Model for Improving the Interpretability",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Reading Comprehension Question Answering (RCQA) is an important task in natural language processing (NLP), aiming at answering questions based on natural language formats of unstructured documents. Recent research work has advanced the performance on benchmark datasets to new records, especially in combination with techniques based on the transformer model of neural machine reading comprehension (MRC). However, understanding the decision process of the model is challenging, which limits the development of RCQA. Therefore, we propose a tree-based visual analysis method that tries to explain the data flow in the model for gaining the interpretability. We demonstrate its effectiveness in promoting the interpretability of RCQA models with initial visual explorations.",
      "award": false
    },
    "poster-1021": {
      "authors": [
        "Sangbong Yoo (Sejong University)",
        "Soobin Yim (Sejong University)",
        "ChanYoung Yoon (Sejong University)",
        "Yun Jang (Sejong University)"
      ],
      "Paper ID": "poster-1021",
      "Title": "Gazed Object Sequence for Similarity Comparison of Attention Moving",
      "type": "Poster",
      "cancel": false,
      "Abstract": "AoIs (Area of Interest) refers to meaningful areas in visual stimuli, such as images and videos, for experiment and verification of research hypotheses. In the eye-tracking study, AoIs are appointed to compare the gaze behaviors of the participants and analyze their eye movement. AoI-based visualization shows patterns in attention moving such as AoI sequence, AoI hit, and dwell time. However, since the AoI-based technique focuses on the attention movement between AoIs, it is not easy to analyze gaze behavior patterns within the AoI. The gaze observing the visual stimulus behaves to search for objects while finding the search target.The gazed object is used as a clue to infer the visual search target of gaze behavior. In this paper, we propose a gazed object sequence with AoIs for comparing similarity of attention moving. The proposed sequence provides AoI sequence and gazed object sequence by mapping eye movement, AoIs, and segmented object data. We compare the proposed sequence with the existing AoI sequence.",
      "award": false
    },
    "poster-1001": {
      "authors": [
        "Cong Feng (Department of Statics and Information)"
      ],
      "Paper ID": "poster-1001",
      "Title": "A New Space-slicing Treemapping Method",
      "type": "Poster",
      "cancel": true,
      "Abstract": "Dynamical stability is a desired property for treemapping methods. Since in real world, the dataset is usually in a continuous way to be proceed, and the treemap we visualized will be in a dynamic flow. In this paper, We present a dynamic stable treepping method. Our approach has two main stages, the first step is to layout each rectangle into the treemap in a near-uniform way, and then we resize each rectangle into its real size. This method is a novel method which focuses on the dynamic stable issue of treemapping methods. And this method shows good dynamical stable property in our experiments with real world datasets.",
      "award": false
    },
    "poster-1017": {
      "authors": [
        "Yue Wang (Fudan University)",
        "Yusheng Qi (Fudan University)",
        "Siming Chen (Fudan University)",
        "Guozheng Li (Peking University)"
      ],
      "Paper ID": "poster-1017",
      "Title": "Visual Analytics For Industry Hierarchies",
      "type": "Poster",
      "cancel": false,
      "Abstract": "The industry structure is always presented as hierarchical data. We are keen to analyze the competitive situation among companies or regions in the industry. We propose a visual analytics system for industry hierarchies with an illustrative example of the semiconductor display industry, which can be used to explore the industry structure and the competitive or complementary relationships between companies or regions in one or more industries. We also give a case study comparing two companies in the red phosphorescent material industry to validate our system.",
      "award": false
    },
    "poster-1013": {
      "authors": [
        "David Trye (University of Waikato)"
      ],
      "Paper ID": "poster-1013",
      "Title": "Visualising Multivariate Categorical Data",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Despite categorical dimensions being common in real-world datasets, few visualisation techniques support the analysis of multiple categorical variables at the same time. Those methods that do exist do not scale well, or do not consider relationships between all variables simultaneously, instead breaking them down into more restricted views or reflecting a hierarchy of variables. Drawing inspiration from set-based tools, this paper introduces a novel technique for visualising multivariate categorical data, by aggregating different combinations of categories. Advantages of this approach include the ability to easily compare frequencies among both variable categories and their combinations, the absence of line crossings, and a non-hierarchical layout that does not privilege one variable above all others.",
      "award": false
    },
    "poster-1032": {
      "authors": [
        "Hyein Hong (Sejong university)",
        "Sangbong Yoo (Sejong University)",
        "Soobin Yim (Sejong University)",
        "ChanYoung Yoon (Sejong University)",
        "Yun Jang (Sejong University)"
      ],
      "Paper ID": "poster-1032",
      "Title": "Visualization System for Data Quality Improvement",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Poor quality data leads to erroneous results in the analytical model. Therefore, the data scientist repeats the data cleaning and quality assessment steps to improve the data quality. Data scientists examine the causes of poor data quality and clean up the data by replacement and deletion. After cleaning the data, data scientists evaluate data quality using data quality metrics and normality tests. It is up to the data scientist to decide which method to use during the data quality improvement step. Therefore, data scientists spend much time and effort deciding how to improve data quality. In this study, we propose a visualization system to assist data scientists in determining how to improve data quality. The visualization system suggests data correction methods such as replacement or deletion according to quality criteria. In addition, the visualization system provides data quality visualizations using node-link diagrams, heat maps, histograms, eCDFs, and density plots.",
      "award": false
    },
    "poster-1022": {
      "authors": [
        "ZHONGJAING HAN (Kyoto university)",
        "JIARUI OU (Academic Center for Computing and Media Studies)",
        "KUNQI HU (Kyoto University)",
        "Hiroaki Natsukawa (Kyoto University)",
        "Koji Koyamada (Kyoto University)"
      ],
      "Paper ID": "poster-1022",
      "Title": "Three-dimensional book data page segmentation and extraction method using neural network",
      "type": "Poster",
      "cancel": false,
      "Abstract": "At present, X-ray-based CT scans have been used to analyze the closed booklet form without the need for physical expansion, where the important task is to extract page information. Previously, we constructed page volume data by 3D annotations and calculated Laplace equations, and used data-mapped iso-surfaces to visualize paper information. The generated page volume data, where the scalar data value represents the page number. In order to improve the accuracy of the method, we use a deep neural network to approximate the page volume data from the annotated spatial points. We confirm its validity by evaluating the accuracy of page extraction.",
      "award": false
    },
    "poster-1018": {
      "authors": [
        "Tiffany Chhim (Kitware Europe)"
      ],
      "Paper ID": "poster-1018",
      "Title": "Enhancing Scientific Visualization Through Virtual Reality in ParaView",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Scientific visualization is a highly relevant area for all scientific domains that aims to extract information out of raw data and display it as explicitly and intuitively as possible to give users a quick grasp of their data characteristics. In particular, virtual reality (VR) is a well-suited method for three-dimensional data which creates a visualization of objects as if present in the real world. On the other hand, ParaView is a leading open-source software offering a great variety of processing tools for data analysis and visualization. As such, ParaView includes a plugin for VR support providing an easy way of viewing most 3D data in VR, as well as specific user actions through controllers and an overlay menu giving access to many customization options. This work brings insight into how the VR capabilities combine with ParaView to enhance user experience for scientific visualization. Example use cases are presented to illustrate some of the VR functionalities in ParaView.",
      "award": false
    },
    "poster-1023": {
      "authors": [
        "Sayaka Morikoshi (Ochanomizu University)",
        "Masaki Onishi (National Institute of Advanced Industrial Science and Technology)",
        "Takayuki Itoh (Ochanomizu University)"
      ],
      "Paper ID": "poster-1023",
      "Title": "People Flow Visualization based on Proximity Networks",
      "type": "Poster",
      "cancel": false,
      "Abstract": "With the worldwide spread of novel coronavirus (COVID-19), Japanese politicians require people to avoid the \u201cThree Cs.\u201d  Here, three Cs stands for Crowded places, Close-contact settings and Confined and enclosed spaces. Against this background, there have been a lot of studies that analyze the flow of people and visualize it. It is important to reduce congestion during events, and reducing the proximity of people is particularly effective, in order to prevent the spread of infections. On the other hand, there are a small number of methods to visualize the human flow based on the proximity of people. This paper presents a method to visualize walking patterns with high infection risk based on the network formed by connecting conjunct pedestrians.",
      "award": false
    },
    "poster-1012": {
      "authors": [
        "Yuki Nakai (Ochanomizu University)",
        "Takayuki Itoh (Ochanomizu University)"
      ],
      "Paper ID": "poster-1012",
      "Title": "Classification and Visualization of Lyric Collections Using Guided LDA",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Lyrics are one of the most important components of music and have a great impact on our daily listening to music. Therefore, a music search system based on the meaning of lyrics is useful. However, the impression of lyrics is subjective, and it is difficult to analyze music by focusing only on the lyrics. Therefore, we propose a method to analyze lyrics using guided LDA and to visualize the distribution of lyrics.",
      "award": false
    },
    "poster-1007": {
      "authors": [
        "Shivam Agarwal (University of Duisburg-Essen)",
        "Uttiya Ghosh (International Institute of Information Technology Bangalore)",
        "Fabian Beck (University of Bamberg)",
        "Jaya Sreevalsan Nair (IIIT Bangalore)"
      ],
      "Paper ID": "poster-1007",
      "Title": "CiteVis: Visual Analysis of Overlapping Citation Intents as Dynamic Sets",
      "type": "Poster",
      "cancel": false,
      "Abstract": "A scientific article can be cited with different intents over several years. The citation intents can be inferred by classifying the citation text into different categories. With multiple citations to the same article, the citation intent categories overlap, making their analysis more challenging. We model the categories as dynamic sets and propose an approach to visualize temporal citation trends of an article across overlapping citation intents. The approach supports comparison between the citation trends of two seed articles of interest. The implemented prototype supports searching and selecting seed articles from a Semantic Scholar dataset.",
      "award": false
    },
    "poster-1019": {
      "authors": [
        "Kenji Wada (Eindhoven University of Technology)",
        "G\u00fcnter Wallner (Eindhoven University of Technology)",
        "Steven Vos (Eindhoven University of Technology)"
      ],
      "Paper ID": "poster-1019",
      "Title": "Towards Designing a Map-Based Data Visualization Application to Enhance Collaboration through Awareness among Different Experts in Vitality",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Visualizations have been used for solving real-world problems in a variety of contexts. Therefore, it is considered that empirical studies to understand visualizations in each specific context are necessary. We conducted a study to understand users\u2019 search behavior and requirements on a visualization utilized by various domain experts who work on improving vitality, which is considered a major societal issue today. A mixed-methods study involving online surveys, open-ended tasks, and semi-structured interviews was conducted with three experts each from the fields of government, business, and research (N=9). The results of our study show that a combination of multiple datasets potentially supports achieving goals for various users in the context of vitality. The study also found the collaborative use of visualizations among domain experts. Based on these findings, we propose a preliminary design of a collaborative map-based data visualization application for the field of vitality. For this application, we hypothesize awareness to be a key factor to enhance various users\u2019 engagement and collaboration.",
      "award": false
    },
    "poster-1025": {
      "authors": [
        "Jieying Huang (Sun Yat-Sen University)",
        "Junnan Hu (Sun Yat-sen University)",
        "Yang Xi (Sun Yat-sen University)",
        "Jun Tao (Sun Yat-sen University)"
      ],
      "Paper ID": "poster-1025",
      "Title": "Exploring Flow Data Using Natural Languages",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Flow visualization conveys critical information of flow fields by rendering flow features and patterns of interest. To identify desired features for visualization, traditional approaches often rely on graphical user interfaces for interactive exploration, which requires a great amount of learning effort. To reduce this effort, we present a novel interactive system to explore flow data using natural languages. The system consists of a natural language parser, a declarative language, and a visualization engine. The natural language parser interprets user intention from textual input and translates it into the declarative language. The declarative language is specifically designed for flow visualization. It serves as an intermediate layer between the natural language and the flow visualization engine. The declarative language features a series of flexible operations to derive complicated structures from existing ones (e.g., streamlines, critical points, simple patterns, and scalar values), so that various kinds of queries can be answered.",
      "award": "honorable"
    },
    "poster-1029": {
      "authors": [
        "Songqian Wu (Beijing University of Posts and Telecommunications)",
        "Tiemeng Li (Beijing University of Posts & Telecommunications)",
        "Yanning Jin (Beijing University of Posts and Telecommunications)",
        "Haopai Shi (Beijing University of Posts and Telecommunications)",
        "Shiran Liu (Beijing University of Posts and Telecommunications)"
      ],
      "Paper ID": "poster-1029",
      "Title": "Data Transfer Interaction Technique for Multi-source Visualization in Mixed Space",
      "type": "Poster",
      "cancel": false,
      "Abstract": "This paper presents a data transfer interaction technique for multi-source visualization in mixed space. The technical solution consists of three parts: a Web client to parse existing 2D visualization data; HoloLens mixed reality client that handles gestures and immersive visualization data; and the server that receives and distributes messages. The user selects data elements on the existing 2D visualization through natural freehand interaction and drags them to the 3D visualization space. The Web client completes data extraction, the server completes data transmission, and the mixed reality terminal is responsible for gesture interaction recognition and rendering in the process of data transfer.",
      "award": false
    },
    "poster-1010": {
      "authors": [
        "haotian mi (Beijing Institute of Technology)",
        "Guozheng Li (Beijing Institute of Technology)",
        "Chi Harold Liu (Beijing Institute of Technology)",
        "Siming Chen (Fudan University)"
      ],
      "Paper ID": "poster-1010",
      "Title": "HiRegExp: Querying and Exploring Multivariate Hierarchical Data using Regular Expressions",
      "type": "Poster",
      "cancel": false,
      "Abstract": "We present HiRegExp, a declarative grammar for querying multivariate hierarchical data. \nBased on tree visualization's task abstraction framework, we identify three types of query targets (node, path, and subtree) and two aspects for querying these targets (target features and target positions). To give the user flexible and fine-grained specifications for these targets, HiRegExp borrows the operators from traditional regular expressions. \nFurthermore, it extends the expressiveness by allowing users to add several attributes constraints for each node and defining extra operators for specifying topological structures and element compositions. We design and implement a visual editor based on HiRegExp to allow analysts to construct the query statements interactively.",
      "award": false
    },
    "poster-1026": {
      "authors": [
        "Zhaoyu Zhou (Fudan University)",
        "Jason Wong (The Hong Kong University of Science and Technology)",
        "Guozheng Li (Peking University)",
        "Siming Chen (Fudan University)"
      ],
      "Paper ID": "poster-1026",
      "Title": "Feature Selection on Deep Learning Models: an Interactive Visualization Approach",
      "type": "Poster",
      "cancel": false,
      "Abstract": "In the era of data explosion, deep neural networks are widely used for prediction tasks in various scenarios. However, the complex feature spaces in high-dimensional data pose challenges to model training. While the common practice is to perform feature selection, existing approaches are generally designed for non-deep models. Additionally, deep models, considered as black-boxes, lack interpretability in utilizing features. This paper presents a visual analytics approach to facilitate the feature selection process of deep learning models by introducing human experience and decisions in integrated classical statistical methods. Our visual analytics system includes a Data Filter Component and an Interactive Verification Component. The former identifies and filters irrelevant and redundant features, while the latter supports the fine selection by understanding the features\u2019 contribution. Furthermore, iterative exploration is supported to gain a proper feature subspace.",
      "award": false
    },
    "poster-1003": {
      "authors": [
        "Xiaojiao Chen (Zhejiang University)",
        "Xin Ge (Zhejiang University)",
        "lilianping li (Zhejiang University)",
        "liantong yin (Zhejiang University)",
        "Zhuqing Wang (Zhejiang University)",
        "Jiayi Zhang (Zhejiang University)",
        "Xiaosong Wang (Zhejiang University)"
      ],
      "Paper ID": "poster-1003",
      "Title": "Echoes of Ancient China: Visualizing Refrain and Music in the Shijing",
      "type": "Poster",
      "cancel": false,
      "Abstract": "The refrain is a popular literary device that represents the repeated lines in poetry. It can be viewed as an essential part of most songs in the Shijing. In the past, only by chanting a particular poem, people can generally communicate their feelings and emotions. Is there any similar way existing for appreciation? Driven by the problem mentioned above, this work uses visualization technology to convert the repetitive structure into visual data, mainly presented on interactive web pages with visual analysis and music visualization. It also includes physical visualization incorporating \u2019synthetic\u2019 techniques to enrich the visual representation. We hope that this attempt at visualization will serve as a feasible solution for the concrete dissemination of poetic rhyme. To a certain extent, this work has great significance and enlightening impact on future education and cultural transmission.",
      "award": "best"
    },
    "poster-1033": {
      "authors": [
        "Xuan Chen (Fudan University)",
        "Xincan Zhang (Fudan University)",
        "Zhaohan Wang (Fudan University)",
        "Kerun Yu (Fudan University)",
        "Jason Wong (The Hong Kong University of Science and Technology)",
        "Haoyun Guo (EthPlanet)",
        "Siming Chen (Fudan University)"
      ],
      "Paper ID": "poster-1033",
      "Title": "A Visualization Method for Security Threats Detection on Ethereum 2.0 Beacon Chain",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Ethereum, as one of the largest blockchain platforms, is conducting continuous upgrades towards Ethereum 2.0. Security issues of the beacon chain, the core component of Ethereum 2.0, have always been concerned. As far as we know, the beacon chain lacks an intuitive visualization method. This paper propose a visualization method for security threat awareness on Ethereum 2.0 beacon chain. After summarizing the most discussed security threats from previous works, we investigate the attacking activities' impact on beacon chain data and provide three views from macroscopic and microcosmic perspectives, including epoch overview, slot overview, and slot details view. Users can effectively detect suspicious information and observe the validator distribution and their voting results in an understandable manner.",
      "award": false
    },
    "poster-1027": {
      "authors": [
        "Can Liu (Peking University)",
        "Yu Zhang (University of Oxford)",
        "Cong Wu (Peking University)",
        "Xiaoru Yuan (Peking University)"
      ],
      "Paper ID": "poster-1027",
      "Title": "Direct Manipulation of Static Visualizations",
      "type": "Poster",
      "cancel": false,
      "Abstract": "We propose a method that enables manipulating static visualizations and carrying out various interaction tasks through simple operations. Our method models the visual mark layout of static visualization with spatial constraints. Given a static visualization, we extract control points and deduce initial spatial constraints. We formulate a wide range of interaction tasks as changes to force-directed movements, including selection, filtering, navigation, arrangement, and aggregation. The control point positions and spatial constraints are updated upon manipulating the visual marks. The spatial constraints are encoded as forces that drive visual marks to converge to a stable spatial layout.",
      "award": false
    }
  },
  "Full Papers": [
    {
      "authors": [
        "Tobias Rapp (Karlsruhe Institute of Technology)",
        "Christoph Peters (Karlsruhe Institute of Technology)",
        "Carsten Dachsbacher (Karlsruhe Institute of Technology)"
      ],
      "Paper ID": "paper-1158",
      "Title": "Image-based Visualization of Large Volumetric Data Using Moments",
      "type": "PPaper",
      "Abstract": "We present a novel image-based representation to interactively visualize large and arbitrarily structured volumetric data. This image-based representation is created from a fixed view and models the scalar densities along each viewing ray. Then, any transfer\nfunction can be applied and changed interactively to visualize the data. In detail, we transform the density in each pixel to the Fourier basis and store Fourier coefficients of a bounded signal, i.e. bounded trigonometric moments. To keep this image-based representation compact, we adaptively determine the number of moments in each pixel and present a novel coding and quantization strategy. Additionally, we perform spatial and temporal interpolation of our image representation and discuss the visualization of introduced uncertainties. Moreover, we use our representation to add single scattering illumination. Lastly, we achieve accurate results even with changes in the view configuration. We evaluate our approach on two large volume datasets and a time-dependent SPH dataset.",
      "award": "honorable"
    },
    {
      "authors": [
        "Jiacheng Yu (Peking University)",
        "Yifan Hu (Yahoo Research)",
        "Xiaoru Yuan (Peking University)"
      ],
      "Paper ID": "paper-2382",
      "Title": "UNICON: A UNIform CONstraint Based Graph Layout Framework",
      "type": "Paper",
      "Abstract": "We propose UNICON, a UNIform CONstraint based graph layout framework that supports both soft and hard constraints. We extend the stress model to accommodate soft constraints by incorporating them in the objective functions, optimized by stochastic gradient descent. For hard constraints, such as inequalities or equalities in the layout space, we utilize a gradient projection method to satisfy them. A visualization prototype system is implemented based on this framework for the user to interactively add or remove constraints to generate the desired layouts. We demonstrate the efficiency, quality, and flexibility of the framework and the system on a number of datasets with a wide range of user-defined constraints.",
      "award": false
    },
    {
      "authors": [
        "Alexander Vieth (Delft University of Technology )",
        "Anna Vilanova (Eindhoven University of Technology)",
        "Boudewijn Lelieveldt (Leiden University Medical Center)",
        "Elmar Eisemann (Delft University of Technology)",
        "Thomas H\u00f6llt (TU Delft)"
      ],
      "Paper ID": "paper-4701",
      "Title": "Incorporating Texture Information into Dimensionality Reduction for High-Dimensional Images",
      "type": "Paper",
      "Abstract": "High-dimensional imaging is becoming increasingly relevant in many fields from astronomy and cultural heritage to systems biology.\nVisual exploration of such high-dimensional data is commonly facilitated by dimensionality reduction.\nHowever, common dimensionality reduction methods do not include spatial information present in images, such as local texture features, into the construction of low-dimensional embeddings.\nConsequently, exploration of such data is typically split into a step focusing on the attribute space followed by a step focusing on spatial information, or vice versa.\nIn this paper, we present a method for incorporating spatial neighborhood information into distance-based dimensionality reduction methods, such as t-Distributed Stochastic Neighbor Embedding (t-SNE).\nWe achieve this by modifying the distance measure between high-dimensional attribute vectors associated with each pixel such that it takes the pixel's spatial neighborhood into account.\nBased on a classification of different methods for comparing image patches, we explore a number of different approaches.\nWe compare these approaches from a theoretical and experimental point of view. \nFinally, we illustrate the value of the proposed methods by qualitative and quantitative evaluation on synthetic data and two real-world use cases.",
      "award": false
    },
    {
      "authors": [
        "Pengfei Gu (University of Notre Dame)",
        "Jun Han (University of Notre Dame)",
        "Danny Chen (University of Notre Dame)",
        "Chaoli Wang (University of Notre Dame)"
      ],
      "Paper ID": "paper-4981",
      "Title": "Scalar2Vec: Translating Scalar Fields to Vector Fields via Deep Learning",
      "type": "Paper",
      "Abstract": "We introduce Scalar2Vec, a new deep learning solution that translates scalar fields to velocity vector fields for scientific visualization. Given multivariate or ensemble scalar field volumes and their velocity vector field counterparts, Scalar2Vec first identifies suitable variables for scalar-to-vector translation. It then leverages a k-complete bipartite translation network (kCBT-Net) to complete the translation task. kCBT-Net takes a set of sampled scalar volumes of the same variable as input, extracts their multi-scale information, and learns to synthesize the corresponding vector volumes. Ground-truth vector fields and their derived quantities are utilized for loss computation and network training. After training, Scalar2Vec can infer unseen velocity vector fields of the same data set directly from their scalar field counterparts. We demonstrate the effectiveness of Scalar2Vec with quantitative and qualitative results on multiple data sets and compare it with three other state-of-the-art deep learning methods.",
      "award": false
    },
    {
      "authors": [
        "Harsh Bhatia (Lawrence Livermore National Laboratory)",
        "Duong Hoang (University of Utah)",
        "Nate Morrical (University of Utah)",
        "Valerio Pascucci (University of Utah)",
        "Peer-Timo Bremer (Lawrence Livermore National Laboratory)",
        "Peter Lindstrom (Lawrence Livermore National Laboratory)"
      ],
      "Paper ID": "paper-5060",
      "Title": "AMM: Adaptive Multilinear Meshes",
      "type": "PPaper",
      "Abstract": "Adaptive representations are increasingly indispensable for reducing the in-memory and on-disk footprints of large-scale data. Usual solutions are designed broadly along two themes: reducing data precision, e.g., through compression, or adapting data resolution, e.g., using spatial hierarchies. Recent research suggests that combining the two approaches, i.e., adapting both resolution and precision simultaneously, can offer significant gains over using them individually. However, there currently exist no practical solutions to creating and evaluating such representations at scale. In this work, we present a new resolution-precision-adaptive representation to support hybrid data reduction schemes and offer an interface to existing tools and algorithms. Through novelties in spatial hierarchy, our representation, Adaptive Multilinear Meshes (AMM), provides considerable reduction in the mesh size. AMM creates a piecewise multilinear representation of uniformly sampled scalar data and can selectively relax or enforce constraints on conformity, continuity, and coverage, delivering a flexible adaptive representation. AMM also supports representing the function using mixed-precision values to further the achievable gains in data reduction. We describe a practical approach to creating AMM incrementally using arbitrary orderings of data and demonstrate AMM on six types of resolution and precision datastreams. By interfacing with state-of-the-art rendering tools through VTK, we demonstrate the practical and computational advantages of our representation for visualization techniques. With an open-source release of our tool to create AMM, we make such evaluation of data reduction accessible to the community, which we hope will foster new opportunities and future data reduction schemes",
      "award": "best"
    },
    {
      "authors": [
        "Neng Shi (The Ohio State University)",
        "Jiayi Xu (The Ohio State University)",
        "Skylar Wurster (The Ohio State University)",
        "Hanqi Guo (Argonne National Laboratory)",
        "Jonathan Woodring (Los Alamos National Laboratory)",
        "Luke Van Roekel (Los Alamos National Laboratory)",
        "Han-Wei Shen (The Ohio State University)"
      ],
      "Paper ID": "paper-5304",
      "Title": "GNN-Surrogate: A Hierarchical and Adaptive Graph Neural Network for Parameter Space Exploration of Unstructured-Mesh Ocean Simulations",
      "type": "PPaper",
      "Abstract": "We propose GNN-Surrogate, a graph neural network-based surrogate model to explore the parameter space of ocean climate simulations. Parameter space exploration is important for domain scientists to understand the influence of input parameters (e.g., wind stress) on the simulation output (e.g., temperature). The exploration requires scientists to exhaust the complicated parameter space by running a batch of computationally expensive simulations. Our approach improves the efficiency of parameter space exploration with a surrogate model that predicts the simulation outputs accurately and efficiently. Specifically, GNN-Surrogate predicts the output field with given simulation parameters so scientists can explore the simulation parameter space with visualizations from user-specified visual mappings. Moreover, our graph-based techniques are designed for unstructured meshes, making the exploration of simulation outputs on irregular grids efficient. For efficient training, we generate hierarchical graphs and use adaptive resolutions. We give quantitative and qualitative evaluations on the MPAS-Ocean simulation to demonstrate the effectiveness and efficiency of GNN-Surrogate. Source code is publicly available at \\url{https://github.com/trainsn/GNN-Surrogate}.",
      "award": false
    },
    {
      "authors": [
        "Sanjana Srabanti (University of Illinois at Chicago)",
        "Michael Tran (University of Illinois at Chicago)",
        "Virginie Achim (University of Illinois at Chicago)",
        "Clifton David Fuller (University of Texas)",
        "Guadalupe Canahuate (University of Iowa)",
        "Fabio Miranda (University of Illinois at Chicago)",
        "G. Elisabeta Marai (University of Illinois at Chicago)"
      ],
      "Paper ID": "paper-5686",
      "Title": "A Tale of Two Centers: Visual Exploration of Health Disparities in Cancer Care",
      "type": "Paper",
      "Abstract": "The annual incidence of head and neck cancers (HNC) worldwide is more than 550,000 cases, with around 300,000 deaths each year. However, the incidence rates and disease-characteristics of HNC differ between treatment centers and different populations, due to undetermined reasons, which may or not include socioeconomic factors. The multi-faceted and multi-variate nature of the data in the context of the emerging field of health disparities research makes automated analysis impractical. Hence, we present a visual analysis approach to explore the health disparities in the data of Head and Neck cancer patients from two different cohorts at two cancer care centers. Our approach integrates data from multiple sources, including census data and city data, with custom visual encodings and with a nearest neighbor approach. Our design, created in collaboration with oncology experts, makes it possible to analyze the patients\u2019 demographic, disease characteristics, treatments and outcomes, and to make significant comparisons of these two cohorts and of individual patients. We evaluate this approach through two case studies performed with domain experts. The results demonstrate that this visual analysis approach successfully accomplishes the goal of comparing two cohorts in terms of different significant factors, and can provide insights into the main source of health disparities between the two centers.",
      "award": false
    },
    {
      "authors": [
        "Aditi Mishra (Arizona State University)",
        "Utkarsh Soni (Arizona State University)",
        "Jinbin Huang (Arizona state university)",
        "Chris Bryan (Arizona State University)"
      ],
      "Paper ID": "paper-5799",
      "Title": "Why? Why not? When? Visual Explanations of Agent Behavior in Reinforcement Learning",
      "type": "Paper",
      "Abstract": "Reinforcement learning (RL) is used in many domains, including autonomous driving, robotics, stock trading, and video games. Unfortunately, the black box nature of RL agents, combined with legal and ethical considerations, makes it increasingly important that humans (including those are who not experts in RL) understand the reasoning behind the actions taken by an RL agent, particularly in safety-critical domains. To help address this challenge, we introduce PolicyExplainer, a visual analytics interface which lets the user directly query an autonomous agent. PolicyExplainer visualizes the states, policy, and expected future rewards for an agent, and supports asking and answering questions such as: 'Why take this action? Why not take this other action? When is this action taken?'' PolicyExplainer is designed based upon a domain analysis with RL researchers, and is evaluated via qualitative and quantitative assessments on a trio of domains: taxi navigation, a stack bot domain, and drug recommendation for HIV patients.\nWe find that PolicyExplainer's visual approach promotes trust and understanding of agent decisions better than a state-of-the-art text-based explanation approach. Interviews with domain practitioners provide further validation for PolicyExplainer as applied to safety-critical domains. Our results help demonstrate how visualization-based approaches can be leveraged to decode the behavior of autonomous RL agents, particularly for RL non-experts.",
      "award": false
    },
    {
      "authors": [
        "Seok-Hee Hong (University of Sydney)",
        "Amyra Meidiana (University of Sydney)",
        "James George Wood (University of Sydney)",
        "Juan Pablo Bonilla Ataides (University of Sydney)",
        "Peter Eades (University of Sydney)",
        "Kunsoo Park (Seoul National University)"
      ],
      "Paper ID": "paper-6148",
      "Title": "dGG, dRNG, DSC: New Shape-based Faithfulness Metrics for  Large and Complex Graph Visualization",
      "type": "Paper",
      "Abstract": "Shape-based metrics measure how faithfully a drawing D of a large graph G shows the structure of graph, by comparing the similarity between G and a proximity graph P computed from D. Although these metrics can successfully evaluate drawings of large graphs, they are limited to relatively sparse graphs, since existing metrics use planar proximity graphs GG (Gabriel Graph) and RNG (Relative Neighbourhood Graph).\n\nThis paper presents new shape-based faithfulness metrics for evaluating drawings of large and complex graphs, using high-order proximity graphs k-GG and k-RNG. Extensive experiments demonstrate that our new shape-based metrics using degree-based proximity graphs dGG and dRNG can more accurately measure the faithfulness\nof drawings of large and complex graphs, with a significant improvement of over 100% better, on average, than the existing shape-based metrics using GG and RNG.\n\nMoreover, we present a new shape change faithfulness metric DSC for evaluating drawings of dynamic graphs, by measuring how proportional the geometric shape change in the drawings of dynamic graphs is to the ground truth change in dynamic graphs. Validation using deformation experiments support that DSC can accurately\nmeasure shape change faithfulness in dynamic graph drawing.\n\nFurthermore, we present extensive comparison experiments of ten popular graph layouts using our new shape-based metrics dGG, dRNG and DSC, to recommend which layouts can give a better shape-faithful graph drawing for large and complex graphs.",
      "award": false
    },
    {
      "authors": [
        "Shilpika Shilpika (University of California, Davis)",
        "Takanori Fujiwara (University of California, Davis)",
        "Naohisa Sakamoto (Kobe University)",
        "Jorji Nonaka (RIKEN Center for Computational Science)",
        "Kwan-Liu Ma (University of California at Davis)"
      ],
      "Paper ID": "paper-6250",
      "Title": "A Visual Analytics Approach for Hardware System Monitoring with Streaming Functional Data Analysis",
      "type": "PPaper",
      "Abstract": "Many real-world applications involve analyzing time-dependent phenomena, which are intrinsically functional, consisting of curves varying over a continuum (e.g., time). When analyzing continuous data, functional data analysis (FDA) provides substantial\nbenefits, such as the ability to study the derivatives and to restrict the ordering of data. However, continuous data inherently has infinite dimensions, and for a long time series, FDA methods often suffer from high computational costs. The analysis problem becomes even more challenging when we must update the FDA results for continuously arriving data. In this paper, we present a visual analytics approach for monitoring and reviewing time series data streamed from a hardware system with a focus on identifying outliers by using FDA. To perform FDA while addressing the computational problem, we introduce new incremental and progressive algorithms that promptly generate the magnitude-shape (MS) plot, which conveys both the functional magnitude and shape outlyingness of time series data. In addition, by using an MS plot in conjunction with an FDA version of principal component analysis, we enhance the analyst\u2019s ability to investigate the visually-identified outliers. We illustrate the effectiveness of our approach with two use scenarios using real-world datasets. The resulting tool is evaluated by industry experts using real-world streaming datasets.",
      "award": "honorable"
    },
    {
      "authors": [
        "Dana EL-Rushaidat (Jordan University of Science and Technology)",
        "Raine Yeh (Google)",
        "Xavier Tricoche (Purdue University )"
      ],
      "Paper ID": "paper-6863",
      "Title": "Boundary-Aware Rectilinear Grid: Accurate Approximation of Unstructured Dataset into Rectilinear Grid with Solid Boundary Handling Capabilities",
      "type": "Paper",
      "Abstract": "Computational fluid dynamics simulations produce increasingly large datasets that are often defined over unstructured grids with solid boundaries. Though unstructured grids allow for the flexible representation of this geometry and the refinement of the grid resolution, they suffer from high storage cost, non-trivial spatial queries, and low reconstruction smoothness. On the other hand, rectilinear grids do not have these drawbacks, but they cannot represent complex boundaries.\nWe present in this paper a technique for the high-quality approximation of large unstructured datasets with solid boundaries onto modified rectilinear grids that we endow with boundary handling capabilities. The resulting data representation can accommodate challenging boundaries while supporting high-order reconstruction kernels with a much-reduced memory footprint. As such, our data representation enjoys all the benefits of conventional rectilinear grids while addressing their fundamental geometric limitations. We demonstrate the proposed approach on several CFD datasets and show that our method achieves an accurate and high-quality approximation of simulation datasets.",
      "award": false
    },
    {
      "authors": [
        "Pavol Klacansky (University of Utah)",
        "Attila Gyulassy (University of Utah)",
        "Peer-Timo Bremer (Lawrence Livermore National Laboratory)",
        "Valerio Pascucci (University of Utah)"
      ],
      "Paper ID": "paper-7044",
      "Title": "A Study of the Locality of Persistence-Based Queries and Its Implications on Efficiency of Localized Data Structures",
      "type": "Paper",
      "Abstract": "Scientific datasets are often analyzed and visualized using isosurfaces. The connected components at or above the isovalue defining these isosurfaces are called superlevel-set components. The vertex set of these superlevel-set components can be used to compute local statistics, such as mean temperature or histogram per component, or to segment the data. However, in datasets produced by acquisition devices or simulations noise induces many spurious components which clutter the visualization and analysis results. Many of these spurious components would disappear if the data values were slightly adjusted. The notion of persistence captures the stability of a component with respect to function value changes, and so we are interested in computing persistence quickly. Locality of computation is critical for parallel scalability, minimization of communication in a distributed environment, or an out-of-core processing. The recently introduced merge forest attained high performance by exploiting locality, thereby avoiding communication until needed to resolve a feature query. We extend the merge forest to support persistence-based queries and study the locality of these queries by evaluating the traversals of regions of data during a query. We confirm that the majority of evaluated datasets have the property that the noise is mostly local, and thus can be efficiently eliminated without performing a global analysis. Finally, we compare the query running times with those of a triplet merge tree, because a triplet merge tree answers all proposed queries in constant time and can be constructed from a merge tree in linear time.",
      "award": false
    },
    {
      "authors": [
        "Aditi Mishra (Arizona State University)",
        "Shashank Ginjpalli (Arizona State University)",
        "Chris Bryan (Arizona State University)"
      ],
      "Paper ID": "paper-7244",
      "Title": "News Kaleidoscope: Visual Investigation of Coverage Diversity inNews Event Reporting",
      "type": "Paper",
      "Abstract": "When a newsworthy event occurs, media articles that report on and about the event can vary widely in different ways---a concept known as coverage diversity. To help investigate coverage diversity in event reporting, we develop a visual analytics system called NewsKaleidoscope. NewsKaleidoscope combines several backend language processing techniques with a coordinated visualization interface. Notably, NewsKaleidoscope is tailored for visualization non-experts, and adopts an analytic workflow based around subselection analysis, whereby second-level features of articles are extracted to provide a more detailed and nuanced analysis of coverage diversity.\nTo robustly evaluate NewsKaleidoscope, we conduct a trio of user studies. (1) A study with news experts assesses the insights promoted for our targeted journalism-savvy users. (2) A follow-up study with news novices assesses the overall system and the specific insights promoted for journalism-agnostic users. (3) Based on identified system limitations in these two studies, we amend NewsKaleidoscope\u2019s design and conduct a third study to validate these improvements. Results indicate that, for both news novice and experts, NewsKaleidoscope supports an effective, task-driven workflow for analyzing the diversity of news coverage about events, though journalism expertise has a significant influence on the user\u2019s insights and takeaways. Our insights developing and evaluating NewsKaleidoscope can aid future tools that combine visualization with natural language processing to analyze coverage diversity in news event reporting.",
      "award": false
    },
    {
      "authors": [
        "Shivam Agarwal (University of Duisburg-Essen)",
        "G\u00fcnter Wallner (Johannes Kepler University Linz)",
        "Jeremy Watson (AI Crowd)",
        "Fabian Beck (University of Duisburg-Essen)"
      ],
      "Paper ID": "paper-7366",
      "Title": "Spatio-temporal Analysis of Multi-agent Scheduling Behaviors on Fixed-track Networks",
      "type": "Paper",
      "Abstract": "Multi-agent systems require coordination among the agents to solve a given task. For movement on fixed-track networks, traditional scheduling algorithms have dominated so far, but the interest in autonomous and intelligent agents is growing as they promise to react to unexpected and exceptional situations more robustly. In this paper, we study data from the Flatland 2020 NeurIPS Competition, where trains move through a virtual rail network. We developed a timeline-based visualization that provides an overview of all train movements in a simulated episode, clearly hinting at different phases, non-optimal routes, and issues such as deadlocks. This view is complemented with a map view and a graph view, interactively linked through highlighting and synchronous animation. Defining regions of interest in the map builds an analysis graph for detailed inspection. A comparison mode allows contrasting two different episodes regarding the same rail network across all views. We have conducted this application study in close collaboration with the Flatland community. Identified analysis goals stem from interviews with key persons of the community, while the approach itself was developed in two iterations based on feedback from experts with diverse backgrounds. This feedback, together with an analysis of the winning submissions from the competition, confirms that the initial analysis goals can be answered.",
      "award": false
    },
    {
      "authors": [
        "Shisong Wang (University of Saskatchewan)",
        "Debajyoti Mondal (University of Saskatchewan)",
        "Sara Sadri (University of Saskatchewan)",
        "Chanchal K. Roy (University of Saskatchewan)",
        "Jay Famiglietti (Global Institute of Water Security)",
        "Kevin A. Schneider (University of Saskatchewan)"
      ],
      "Paper ID": "paper-7610",
      "Title": "SET-STAT-MAP: Extending Parallel Sets for Visualizing Mixed Data",
      "type": "Paper",
      "Abstract": "Multi-attribute dataset visualizations are often designed based on attribute types, i.e., whether the attributes are categorical or numerical.  Parallel Sets and Parallel Coordinates are two well-known techniques to visualize categorical and numerical data, respectively. A common strategy to visualize mixed data is to use multiple information linked view, e.g., Parallel Coordinates are often augmented with maps to explore spatial data with numeric attributes. In this paper, we design visualizations for mixed data, where the dataset may include numerical, categorical, and spatial attributes. The proposed solution Set-Stat-Map is a harmonious combination of three interactive components: Parallel Sets (visualizes sets determined by the combination of categories or numeric ranges), statistics columns (visualizes numerical summaries of the sets), and a geospatial map view (visualizes the spatial information). We augment these components with colors and textures to enhance users' capability of analyzing distributions of pairs of attribute combinations. To improve scalability, we merge the sets to limit the number of possible combinations to be rendered on the display. We demonstrate the use of Set-Stat-Map using two different types of datasets: a meteorological dataset and an online vacation rental dataset (Airbnb). To examine the potential of the system, we collaborated with the meteorologists, which revealed both challenges and opportunities for Set-Stat-Map to be used for real-life visual analytics.",
      "award": false
    },
    {
      "authors": [
        "Jacob Miller (University of Arizona)",
        "Stephen Kobourov (University of Arizona)",
        "Vahan Huroyan (University of Arizona)"
      ],
      "Paper ID": "paper-8231",
      "Title": "Browser-based Hyperbolic Visualization of Graphs",
      "type": "Paper",
      "Abstract": "Hyperbolic geometry offers a natural \u2018focus+context\u2019 for data visualization and has been shown to underlie real-world complex networks. However, current hyperbolic network visualization approaches are limited to special types of networks and do not scale to large datasets. With this in mind, we designed, implemented, and analyzed three methods for hyperbolic visualization of networks in the browser based on inverse projections, generalized force-directed algorithms, and hyperbolic multi-dimensional scaling (H-MDS). A comparison with Euclidean MDS shows that H-MDS produces embeddings with lower distortion for several types of networks. All three methods can handle node-link and node-link-group representations and are available in a fully functional web-based system.",
      "award": false
    },
    {
      "authors": [
        "Yun-Hsin Kuo (University of California, Davis)",
        "Takanori Fujiwara (University of California, Davis)",
        "Charles C.-K. Chou (Academia Sinica)",
        "Chun-houh Chen (Academia Sinica)",
        "Kwan-Liu Ma (University of California, Davis)"
      ],
      "Paper ID": "paper-8250",
      "Title": "A Machine-Learning-Aided Visual Analysis Workflow for Investigating Air Pollution Data",
      "type": "Paper",
      "Abstract": "Analyzing air pollution data is challenging as there are various analysis focuses from different aspects: feature (what), space (where), and time (when). As in most geospatial analysis problems, besides high-dimensional features, the temporal and spatial dependencies of air pollution induce the complexity of performing analysis. Machine learning methods, such as dimensionality reduction, can extract and summarize important information of the data to lift the burden of understanding such a complicated environment. In this paper, we present a methodology that utilizes multiple machine learning methods to uniformly explore these aspects. With this methodology, we develop a visual analytic system that supports a flexible analysis workflow, allowing domain experts to freely explore different aspects based on their analysis needs. We demonstrate the capability of our system and analysis workflow supporting a variety of analysis tasks with multiple use cases.",
      "award": false
    },
    {
      "authors": [
        "Pavol Klacansky (University of Utah)",
        "Haichao Miao (Lawrence Livermore National Laboratory)",
        "Attila Gyulassy (University of Utah)",
        "Andrew Townsend (LLNL)",
        "Kyle Champley (LLNL)",
        "Joe Tringe (LLNL)",
        "Valerio Pascucci (University of Utah)",
        "Peer-Timo Bremer (Lawrence Livermore National Laboratory)"
      ],
      "Paper ID": "paper-8469",
      "Title": "Virtual Inspection of Additively Manufactured Parts",
      "type": "Paper",
      "Abstract": "Advanced manufacturing techniques, such as additive manufacturing, enable the design of increasingly complex components for a wide range of industrial applications.\nHowever, this complexity makes qualification of the parts, determining whether a part is within some margin of error from the initial design, difficult.\nTo inspect and qualify complex internal geometries that are not accessible with an external probe, parts are typically scanned with computed tomography (CT), and manually compared to the computer-aided design (CAD) model using visual inspections.\nMatching the CAD model to the 3D reconstructed object is challenging in a traditional desktop environment due to the lack of depth perception and 3D interaction.\nAn additional challenge comes from the geometric complexity of CAD meshes and large-scale CT scans.\nWe present a virtual reality (VR) system for manual qualification, providing a novel defect visualization method. First, we describe a semiautomatic CAD-to-scan Registration approach in VR using a finite element mesh.\nSecond, we introduce the Defect Box, which enables full-resolution inspection for massive scans and CAD-CT comparison of local defect regions.\nFinally, our system includes intuitive 3D Metrology methods that enable natural interactions for the measurement of features and defects in VR.\nWe demonstrate our approach on both real and synthetic data and discuss feedback from four expert users in nondestructive qualification.",
      "award": false
    },
    {
      "authors": [
        "Chengbo Zheng (Hong Kong University of Science and Technology)",
        "Xiaojuan Ma (Hong Kong University of Science and Technology)"
      ],
      "Paper ID": "paper-8813",
      "Title": "Evaluating the Effect of Enhanced Text-Visualization Integration on Combating Misinformation in Data Story",
      "type": "Paper",
      "Abstract": "Misinformation has disruptive effects on our lives. Many researchers have looked into means to identify and combat misinformation in text or data visualization. However, there is still a lack of understanding of how misinformation can be introduced when text and visualization are combined to tell data stories, not to mention how to improve the lay public\u2019s awareness of possible misperceptions about facts in narrative visualization. In this paper, we \ufb01rst analyze where misinformation could possibly be injected into the productionconsumption process of data stories through a literature survey. Then, as a \ufb01rst step towards combating misinformation in data stories, we explore possible defensive design methods to enhance the reader\u2019s awareness of information misalignment when data facts are scripted and visualized. More speci\ufb01cally, we conduct a between-subjects crowdsourcing study to investigate the impact of two design methods enhancing text-visualization integration, i.e., explanatory annotation and interactive linking, on users\u2019 awareness of misinformation in data stories. The study results show that although most participants still can not \ufb01nd misinformation, the two design methods can significantly lower the perceived credibility of the text or visualizations. Our work informs the possibility of \ufb01ghting an infodemic through defensive design methods.",
      "award": false
    },
    {
      "authors": [
        "Xiwei Xuan (University of California, Davis)",
        "Xiaoyu Zhang (University of California, Davis)",
        "Oh-Hyun Kwon (University of California, Davis)",
        "Kwan-Liu Ma (University of California at Davis)"
      ],
      "Paper ID": "paper-8907",
      "Title": "VAC-CNN: A Visual Analytics System for Comparative Studies of Deep Convolutional Neural Networks",
      "type": "PPaper",
      "Abstract": "The rapid development of Convolutional Neural Networks (CNNs) in recent years has triggered significant breakthroughs in many machine learning (ML) applications. The ability to understand and compare various CNN models available is thus essential. The conventional approach with visualizing each model's quantitative features, such as classification accuracy and computational complexity, is not sufficient for a deeper understanding and comparison of the behaviors of different models. Moreover, most of the existing tools for assessing CNN behaviors only support comparison between two models and lack the flexibility of customizing the analysis tasks according to user needs. This paper presents a visual analytics system, VAC-CNN (Visual Analytics for Comparing CNNs), that supports the in-depth inspection of a single CNN model as well as comparative studies of two or more models. The ability to compare a larger number of (e.g., tens of) models especially distinguishes our system from previous ones. With a carefully designed model visualization and explaining support, VAC-CNN facilitates a highly interactive workflow that promptly presents both quantitative and qualitative information at each analysis stage. We demonstrate VAC-CNN's effectiveness for assisting novice ML practitioners in evaluating and comparing multiple CNN models through two use cases and one preliminary evaluation study using the image classification tasks on the ImageNet dataset.",
      "award": false
    },
    {
      "authors": [
        "Dominik Vietinghoff (Leipzig University)",
        "Michael B\u00f6ttinger (German Climate Computing Center (DKRZ))",
        "Gerik Scheuermann (Leipzig University)",
        "Christian Heine (Leipzig University)"
      ],
      "Paper ID": "paper-9879",
      "Title": "Detecting Critical Points in 2D Scalar Field Ensembles Using Bayesian Inference",
      "type": "Paper",
      "Abstract": "In an era of quickly growing data set sizes, information reduction methods such as extracting or highlighting characteristic features become more and more important for data analysis. For single scalar fields, topological methods can fill this role by extracting and relating critical points. While such methods are regularly employed to study single scalar fields, it is less well studied how they can be extended to uncertain data, as produced, e.g., by ensemble simulations.\n\nMotivated by our previous work on visualization in climate research, we study new methods to characterize critical points in ensembles of 2D scalar fields. Previous work on this topic either assumed or required specific distributions, did not account for uncertainty introduced by approximating the underlying latent distributions by a finite number of fields, or did not allow to answer all our domain experts' questions. In this work, we use Bayesian inference to estimate the probability of critical points, either of the original ensemble or its bootstrapped mean. This does not make any assumptions on the underlying distribution and allows to estimate the sensitivity of the results to finite-sample approximations of the underlying distribution. We use color mapping to depict these probabilities and the stability of their estimation. The resulting images can, e.g., be used to estimate how precise the critical points of the mean-field are. We apply our method to synthetic data to validate its theoretical properties and compare it with other methods in this regard. We also apply our method to the data from our previous work, where it provides a more accurate answer to the domain experts' research questions.",
      "award": false
    }
  ],
  "Visualization Notes": [
    {
      "authors": [
        "Angelos Chatzimparmpas (Linnaeus University)",
        "Vilhelm Park (Linnaeus University)",
        "Andreas Kerren (Linnaeus University)"
      ],
      "Paper ID": "note-1000",
      "Title": "Evaluating StackGenVis with a Comparative User Study",
      "type": "Note",
      "Abstract": "Stacked generalization (also called stacking) is an ensemble method in machine learning that deploys a metamodel to summarize the predictive results of heterogeneous base models organized into one or more layers. Despite being capable of producing high-performance results, building a stack of models can be a trial-and-error procedure. Thus, our previously developed visual analytics system, entitled StackGenVis, was designed to monitor and control the entire stacking process visually. In this work, we present the results of a comparative user study we performed for evaluating the StackGenVis system. We divided the study participants into two groups to test the usability and effectiveness of StackGenVis compared to Orange Visual Stacking (OVS) in an exploratory usage scenario using healthcare data. The results indicate that StackGenVis is significantly more powerful than OVS based on the qualitative feedback provided by the participants. However, the average completion time for all tasks was comparable between both tools.",
      "award": false
    },
    {
      "authors": [
        "Martin Baumann (University of Stuttgart)",
        "Jena Satkunarajan (Universit\u00e4t Stuttgart)",
        "Steffen Koch (University of Stuttgart)",
        "Thomas Ertl (University of Stuttgart)"
      ],
      "Paper ID": "note-1006",
      "Title": "Hierarchical Multifocus Navigation in Text Annotation Data",
      "type": "Note",
      "Abstract": "We present a new hierarchical multifocus representation- and\ninteraction-technique for the analysis of text annotations. The com-\nparative analysis of annotation data on multiple, distant passages\n(focus regions) of a long source text raises several scalability prob-\nlems. In particular, one soon can be confronted with many nested\nfoci on text ranges with sizes of different orders of magnitude. Our\nsolution suggests to delegate the detailed data representation to other\nviews and to concentrate in the presented overview on the organi-\nzation of the focus regions. The approach consists of three parts: a\ncollection of strips where the annotations are represented in a con-\ndensed form and where sibling- and child-foci are manipulated, a\nmap of the resulting tree of foci for direct access, and a work bench\nthat allows to compare deliberate nodes of the tree on a flat layer.\nWe discuss our approach by comparing it with other state-of-the-art\nmultifocus techniques and describe two use cases that deal with rela-\ntional annotation and with the analysis of annotations on hierarchical\ntext structures respectively.",
      "award": false
    },
    {
      "authors": [
        "Teng-Yok Lee (Mitsubishi Electric Corporation)"
      ],
      "Paper ID": "note-1011",
      "Title": "Visualization for neural-network-based person reidentification",
      "type": "Note",
      "Abstract": "Given images of a person, person re-identification (Person ReID) techniques aim to find images of the same person from previously collected images. Because of large data sets of person images and the advance of deep learning, convolutional neural networks (CNN) successfully boost the accuracy of Person ReID algorithms, but it can be difficult to explain and to troubleshoot issues due to the complexity of CNN. In this paper, we present an visualization-based approach to understand a CNN-based Person ReID algorithm. Given two images, we design an algorithm to estimate how much different elements in a CNN layer contribute to the similarity between their outputs. Based on the contribution estimation, we build a visualization tool to interactively locate and visualize the activation of these elements, other than brute-force examining millions of elements. Our visualization tool also supports various user interaction components to explore a Person ReID data set, locate difficult cases, and analyze the similarity between these difficult cases. We show a use case with our tool to understand and troubleshoot issues in a CNN-based Person ReID algorithm.",
      "award": false
    },
    {
      "authors": [
        "Yumiko Sakamoto (University of Manitoba)",
        "Samar Sallam (University of Manitoba)",
        "Aaron Salo (University of Manitoba)",
        "Jason Leboe-McGowan (University of Manitoba)",
        "Pourang Irani (University of Manitoba)"
      ],
      "Paper ID": "note-1017",
      "Title": "Persuasive Data Storytelling with a Data Video during Covid-19 Infodemic: Affective Pathway to Influence the Users\u2019 Perception about Contact Tracing Apps in less than 6 Minutes",
      "type": "Note",
      "Abstract": "The current pandemic showed us the importance of swiftly disseminating data-based information to the masses of people. This study explores an affect-centered narrative to convey data-driven messages regarding contact tracing apps (CTAs) using video as a medium (i.e., data video). A between-subjects online study compared the effect of three storytelling approaches on viewers\u2019 perception. A video developed by Google was selected as the baseline video (Control Condition; 2min 23s) due to its high quality and relevance to CTAs. The central messages of this baseline video were; a) how CTAs work, and b) how safe and effective CTAs are. Infographics supporting these messages were then added to the baseline video (the second condition; 3min 19s ); this was a simple data video (DV), and it did not intend to induce specific emotional experiences in participants (i.e., cognition-centered video). Finally, an affect-focused DV (AFDV) was also created by emphasizing the emotion-based narrative aspect of the message (the third condition; 4min 6s ). In this video, three cute human-like cartoon characters were introduced. Viewers in this condition needed to process both cognitive and affective information. Note all three videos (i.e., control video, DV, and AFDV) conveyed identical messages. Participants watched one of these three videos only once, and we explored the video effect on their perception. Our results repeatedly indicated the potential\nbenefits of including affect in data storytelling.",
      "award": false
    },
    {
      "authors": [
        "Sebeom Park (Seoul National University)",
        "Soohyun Lee (Korea University)",
        "Hyeon Jeon (Seoul National University)",
        "Youngtaek Kim (Samsung Electronics Co., Ltd)",
        "Seokweon Jung (Seoul National University)",
        "Jinwook Bok (Seoul National University)",
        "Jinwook Seo (Seoul National University)"
      ],
      "Paper ID": "note-1020",
      "Title": "VANT : A Visual Analytics System for Refining Parallel Corpora in Neural Machine Translation",
      "type": "Note",
      "Abstract": "The quality of parallel corpora used to train a Neural Machine Trans\u0002lation (NMT) model can critically influence the model\u2019s performance. Various approaches for refining parallel corpora have been introduced, but there is still much room for improvements, such as\nenhancing the efficiency and the quality of refinement. We introduce VANT, a novel visual analytics system for refining parallel corpora used in training an NMT model. Our system helps users to readily detect and filter noisy parallel corpora by (1) aiding the quality estimation of individual sentence pairs within the corpora by providing diverse quality metrics (e.g., cosine similarity, BLEU, length ratio) and (2) allowing users to visually examine and manage the corpora based on the pre-computed metrics scores. Our system\u2019s effectiveness and usefulness are demonstrated through a qualitative user study with eight participants, including four domain experts with real-world datasets.",
      "award": "best"
    },
    {
      "authors": [
        "Tangyuan Zou (southwest university of science and technology)",
        "song wang (southwest university of science and technology)",
        "Hanglin Li (SouthWest University of Science and Technology)",
        "Yadong Wu (Sichuan University of Science and Engineering)"
      ],
      "Paper ID": "note-1025",
      "Title": "Hybrid Traffic Route Visualization Recommendation Based on Multilayer Complex Networks",
      "type": "Note",
      "Abstract": "Urban traffic congestion is a major nuisance for residents\u2019 daily commute, but few studies have focused on the effective combination between urban traffic condition visualization and hybrid traffic travel route recommendation. In this paper, the visualization exploration of urban transportation patterns is realized by multilayer complex transportation networks, which are constructed by taxi transportation network, bike-sharing transportation network, and urban transportation community network. Based on multilayer complex traffic networks, a genetic algorithm modified by A* search algorithm is used to generate multi-modal travel routes. The case studies prove that this method can effectively reduce the time cost of commuting between congested areas by generating hybrid traffic routes.",
      "award": false
    },
    {
      "authors": [
        "Nathan Danneman (Data Machines Corp)",
        "Robert Gove (Two Six Technologies)"
      ],
      "Paper ID": "note-1028",
      "Title": "Tuning Automatic Summarization for Incident Report Visualization",
      "type": "Note",
      "Abstract": "We present a machine learning approach to improve the accuracy of summarized incident report visualizations for cyber security. We extend a recent incident report summarization method by training a Bayesian hierarchical model to optimize the summarization algorithm's weights. We also train a flat model and a neural network as alternative models to compare against our hierarchical model. Summaries generated by our hierarchical model achieve higher accuracy than the other methods, with an AUC 0.2 higher than the unweighted method while achieving comparable summarization size. We further demonstrate that visualizations of the hierarchical model's summaries are at least as useful the unweighted method's summaries, and possibly more useful.",
      "award": false
    },
    {
      "authors": [
        "Aosheng Cheng (Zhejiang University of Finance and Economics)",
        "Yulong Yin (Zhejiang University of Finance and Economics)",
        "Zhenyu Yan (Zhejiang University of Finance and Economics)",
        "Yuhua Liu (Hangzhou Dianzi University)",
        "Zhiguang Zhou (Zhejiang University of Finance and Economics)"
      ],
      "Paper ID": "note-1029",
      "Title": "Visual Analytics of Multiple Network Ranking based on Structural Similarity ",
      "type": "Note",
      "Abstract": "Ranking the node importance in complex networks has been widely applied for different purposes, such as web search, resource allocation, and network security. However, existing node ranking methods are almost single network ranking using only one relationship, or aggregate the node ranking scores on multiple networks with equal\nweight, which are insufficient to construct reasonable multiple network rankings, since the association information among multiple networks is largely ignored. Thus, we propose a multiple network visualization framework by fusing multiple networks to obtain credible node ranking scores. After measuring the scores of nodes in each single network by the classic PageRank, a network weight self-adjustment model based on structural similarities between pairwise networks is designed to strengthen the common features of multiple networks or their distinct characteristics. Then, a combined score for each node is computed by a weighted sum of its individual ranking scores on multiple networks. Besides, we provide a set of visualization and interaction interfaces, enabling users to intuitively explore, optimize and compare the multiple network rankings. Case studies on real datasets show that our system is flexible to adapt to different application scenarios, and users can successfully solve multiple network ranking tasks efficiently.",
      "award": "honorable"
    }
  ],
  "Visual Data Storytelling Contest": [
    {
      "authors": [
        "Shiman Zhang (Tongji University)",
        "Haotian Wu (Zhejiang University)",
        "YuXuan Li (Tongji University)",
        "Yancheng Cao (Tongji University)",
        "Yang Shi (Tongji University)",
        "Siming Chen (Fudan University)",
        "Nan Cao (Tongji College of Design and Innovation)"
      ],
      "Paper ID": "contest-1016",
      "Title": "Understanding Cultural Communication through the Visual Portraits of Youtube Channels",
      "type": "Storytelling",
      "Abstract": "https://storage.bhs.cloud.ovh.net/v1/AUTH_26879f98162b4e0092dbf77201f410cb/pacificvis22d/pacificvis22d-sub1016-cam-i6.pdf?temp_url_sig=ca66181ff0e8307a0f0fe37106c333da69a9e76d&temp_url_expires=1646879100",
      "Abstract pages": 1,
      "Abstract paper size": "letter",
      "Abstract.1": "The Guinness World Record for the \"the most subscribed Chinese YouTube Channel\" was set by Chinese short video blogger Li Ziqi, whose videos are not in English but are popular with foreign audiences. This data video presents a visual portrait of Li Ziqi's YouTube channel. The visual portrait depicts cultural communication power using six dimensions: subscriptions, the number of videos in vogue, average video views, like rate, YouTube category, and whether the channel is a personal blogger. By building a series of visual portraits of YouTube channels, we first compared China's cultural communication power among the three East Asian culture countries, including China, Japan, and Korea. Then, we compared East Asian culture's cultural communication power as a whole among different cultural regions of the world. We collected data through public data sources and Google YouTube Data API and processed the data through statistical analysis. Finally, we proposed a set of suggestions regarding how to improve the cultural communication power of Chinese on YouTube.",
      "award": "honorable",
      "url": false
    },
    {
      "authors": [
        "Linqi Wang (Hunan University)",
        "Fengzhou Liang (Sun Yat-sen University)",
        "ning bin (Hunan University)",
        "Junyan Lv (Hunan University)",
        "Fang Liu (Hunan University)"
      ],
      "Paper ID": "contest-1019",
      "Title": "Emergency Logistics Constructing a Lifeline in Wuhan for Fighting COVID-19",
      "type": "Storytelling",
      "Abstract": "https://storage.bhs.cloud.ovh.net/v1/AUTH_26879f98162b4e0092dbf77201f410cb/pacificvis22d/pacificvis22d-sub1019-cam-i6.pdf?temp_url_sig=521aee89ead106b7fd9341e6ab31abbc35d53cf0&temp_url_expires=1646879100",
      "Abstract pages": 2,
      "Abstract paper size": "letter",
      "Abstract.1": "COVID-19 has brought a significant impact on the world. It is a joint responsibility of all countries to fight against this epidemic together. Through visual and interactive web pages, taking emergency logistics as the clue, the work tells a touching story: in the spring of 2020, people all over China and even the world supported Wuhan to fight the outbreak and overcome the shortage of resources.\nWuhan, known as the \"thoroughfare of nine provinces,\" was not isolated from the outside world under lockdown but has received a steady stream of support despite the corona-virus crisis. The story divides into five chapters. The color of the visualization page changes from dark to bright, representing Wuhan getting rid of the haze of the epidemic step by step. We hope to encourage people to help each other and contribute to an early and complete victory over the coronavirus throughout the world.",
      "award": "best",
      "url": false
    },
    {
      "authors": [
        "William Harvey (Polytechnique Montreal)",
        "Claudia Onorato (Polytechnique Montreal)",
        "Thomas Hurtut (Polytechnique Montreal)"
      ],
      "Paper ID": "contest-1021",
      "Title": "Polydodo: a Tool for Personal Sleep Stage Analysis and Narrative Visualization",
      "type": "Storytelling",
      "Abstract": "https://storage.bhs.cloud.ovh.net/v1/AUTH_26879f98162b4e0092dbf77201f410cb/pacificvis22d/pacificvis22d-sub1021-cam-i6.pdf?temp_url_sig=fa477f868ed4b310b34b09dda38f68de0834c0a2&temp_url_expires=1646879100",
      "Abstract pages": 1,
      "Abstract paper size": "letter",
      "Abstract.1": "The submitted story is part of an open source project called Polydodo. This project proposes a user-friendly tool and interface to classify sleep stages. The user can upload sleep records, and then visualize them through a data story-telling format. The story and visualizations adapt to the user's data. For the sake of submission to PacificVis, we show the \"preview\" mode, using already loaded data. EEG data is analyzed by a Random forest classifier followed by a Hidden Markov Model post-processing. The design process of this project started as a team project during the 2020 winter semester of \"Data Visualization Design\" course at Polytechnique Montreal. It followed a classical iterative user-centred design process, targeting non expert user regarding sleep cycles data, therefore also the choice of using a story-telling based format to communicate them. The fact that the user can upload personal sleep data also reinforces the user engagement.",
      "award": false,
      "url": false
    },
    {
      "authors": [
        "Juanjuan Long (Jiangnan University)",
        "Wei Zhou (Jiangnan University)",
        "YongJie Xing (Jiangnan University)",
        "yang kang (Jiangnan University)",
        "Siyuan He (Cognizant)",
        "Yimin Mao (Cognizant)"
      ],
      "Paper ID": "contest-1024",
      "Title": "The Story of Slow Train in China",
      "type": "Storytelling",
      "Abstract": "https://storage.bhs.cloud.ovh.net/v1/AUTH_26879f98162b4e0092dbf77201f410cb/pacificvis22d/pacificvis22d-sub1024-cam-i6.pdf?temp_url_sig=15a16be1f7175436544e8858b5730b576eb2467c&temp_url_expires=1646879100",
      "Abstract pages": 8,
      "Abstract paper size": "A4",
      "Abstract.1": "The original intention of our work is to make people understand the development of Slow train in China and the role it plays in rural revitalization.\nIn terms of data, we first collect the slow train data of China's railway network and related news reports (including train number, mileage, starting and ending points, etc.) and displayed the data results in charts.\nIn terms of design, we first interpret the data and compare the speed of slow trains with high-speed trains. Then, we use charts and maps to analyze the distribution and development of slow trains in China. Finally, we use collages to illustrate the story of people's livelihood.\nThe technical implementation method uses the web page interaction technology of CSS3 and Javascript.\nDue to technical limitations, to give you a better viewing experience, this work is recommended to be viewed at 1920X1080 resolution.",
      "award": false,
      "url": false
    }
  ],
  "Visualization Meets AI Papers": [
    {
      "authors": [
        "Jun Han (University of Notre Dame)",
        "Chaoli Wang (University of Notre Dame)"
      ],
      "Paper ID": "visxai-6403",
      "Title": "VCNet: A Generative Model for Volume Completion",
      "type": "?",
      "Abstract": "We present VCNet, a new deep learning approach for volume completion by synthesizing missing subvolumes. Our solution leverages a generative adversarial network (GAN) that learns to complete volumes using the adversarial and volumetric losses. The core design of VCNet features dilated residual block and long-term connection. During training, VCNet first randomly masks basic subvolumes (e.g., cuboids, slices) from complete volumes and learns to recover them. Moreover, we design a two-stage algorithm for stabilizing and accelerating network optimization. Once trained, VCNet takes an incomplete volume as input and automatically identifies and fills in the missing subvolumes with high quality. We quantitatively and qualitatively test VCNet with volumetric data sets of various characteristics to demonstrate its effectiveness. We also compare VCNet against a diffusion-based solution and two GAN-based solutions.",
      "award": false
    },
    {
      "authors": [
        "Robert Gove (Two Six Technologies)",
        "Lucas Cadalzo (Two Six Technologies)",
        "Nicholas Leiby (Two Six Technologies)",
        "Jedediah Singer (Two Six Technologies)",
        "Alexander Zaitzeff (Two Six Technologies)"
      ],
      "Paper ID": "visxai-5160",
      "Title": "New Guidance for Using t-SNE: Alternative Defaults, Hyperparameter Selection Automation, and Comparative Evaluation",
      "type": "?",
      "Abstract": "We present new guidelines for choosing hyperparameters for t-SNE and an evaluation comparing these guidelines to current ones. These guidelines include a proposed empirically optimum guideline derived from a t-SNE hyperparameter grid search over a large collection of data sets. We also introduce a new method to featurize data sets using graph-based metrics called scagnostics; we use these features to train a neural network that predicts optimal t-SNE hyperparameters for the respective data set. This neural network has the potential to simplify the use of t-SNE by removing guesswork about which hyperparameters will produce the best embedding. We evaluate and compare our neural network-derived and empirically optimum hyperparameters to several other t-SNE hyperparameter guidelines from the literature on 68 data sets. The hyperparameters predicted by our neural network yield embeddings with similar accuracy as the best current t-SNE guidelines. Using our empirically optimum hyperparameters is simpler than following previously published guidelines but yields more accurate embeddings, in some cases by a statistically significant margin. We find that the useful ranges for t-SNE hyperparameters are narrower and include smaller values than previously reported in the literature. Importantly, we also quantify the potential for future improvements in this area: using data from a grid search of t-SNE hyperparameters we find that an optimal selection method could improve embedding accuracy by up to two percentage points over the methods examined in this paper.",
      "award": false
    },
    {
      "authors": [
        "Shijun Cai (The University of Sydney)",
        "Seok-Hee Hong (The University of Sydney)",
        "Xiaobo Xia (The University of Sydney)",
        "Tongliang Liu (The University of Sydney)",
        "Weidong Huang (University of Technology Sydney)"
      ],
      "Paper ID": "visxai-4033",
      "Title": "A Machine Learning Approach for Predicting Human Shortest Path Task Performance",
      "type": "?",
      "Abstract": "Finding a shortest path for a given pair of vertices in a graph drawing is one of the fundamental tasks for qualitative evaluation of graph drawings. In this paper, we present the first machine learning approach to predict human shortest path task performance, including accuracy, response time, and mental effort.\n\nTo predict the shortest path task performance, we utilize correlated quality metrics and the ground truth data from the shortest path experiments. Specifically, we introduce path faithfulness metrics and show strong correlations with the shortest path task performance. Moreover, to mitigate the problem of insufficient ground truth training data, we use the transfer learning method to pre-train our deep model, exploiting the correlated quality metrics.\n\nExperimental results using the ground truth human shortest path experiment data show that our models can successfully predict the shortest path task performance. In particular, model MSP achieves the MSE (i.e., test mean square error) of 0.7243 (i.e., data range from \u221217.27 to 1.81) for prediction.",
      "award": false
    },
    {
      "authors": [
        "Michael Gleicher (University of Wisconsin - Madison)",
        "Xinyi Yu (University of Wisconsin - Madison)",
        "Yuheng Chen (University of Wisconsin - Madison)"
      ],
      "Paper ID": "visxai-9591",
      "Title": "Trinary tools for Continuously Valued Binary Classifiers",
      "type": "?",
      "Abstract": "Classification methods for binary (yes/no) tasks often produce a continuously valued score.\nMachine learning practitioners must perform model selection, calibration, discretization, performance assessment, tuning, and fairness assessment.\nSuch tasks involve examining classifier results, typically using summary statistics and manual examination of details.\nIn this paper, we provide an interactive visualization approach to support such continuously-valued classifier examination tasks.\n\\added{Our approach addresses the three phases of these tasks: calibration, operating point selection, and examination.}\nWe enhance standard views and introduce task-specific views so that they can be integrated into a multi-view coordination (MVC) system.\nWe build on an existing comparison-based approach, extending it to continuous classifiers by treating the continuous values as trinary (positive, unsure, negative) even if the classifier will not ultimately use the 3-way classification. We provide use cases that demonstrate how our approach enables machine learning practitioners to accomplish key tasks.",
      "award": false
    }
  ],
  "Posters": [
    {
      "authors": [
        "Taiki Tanaka (Nihon University)",
        "Yosuke Onoue (Nihon University)"
      ],
      "Paper ID": "poster-1030",
      "Title": "Summarized Dendrogram for Interactive Exploration of Hierarchical Document Clusters",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Hierarchical clustering techniques are widely used to classify documents based on a set of text written on a specific topic. Dendrograms (or tree diagrams) are often used to visualize the hierarchical clustering results; however, visual scalability for thousands of documents is an issue. To visualize a large number of documents, an provide abstract overview of hierarchical document clusters is required. In this paper, we present a novel visual analytics method to obtain an overview of hierarchical document clusters by aggregating dendrograms and summarizing subclusters using keyphrase extraction. The proposed method includes user interactions for adjusting the dendrogram's level of detail and drilling down to subclusters. An application example of the visualization publications dataset demonstrates the usefulness of our proposed method.",
      "award": false
    },
    {
      "authors": [
        "Jiayang Li (Tianjin University)",
        "Chongke Bi (Tianjin University)"
      ],
      "Paper ID": "poster-1015",
      "Title": "Visual Analysis of Air Pollutants Transmission Patterns Based on Similarity Metric",
      "type": "Poster",
      "cancel": false,
      "Abstract": "In recent years, air pollution has become one of the major environmental problems. Tracking the transmission of pollutants is an important method to combat air pollution. However, the accuracy and efficiency of existing analysis methods cannot fully satisfy domain scientists\u2019 requirements. In this paper, we proposed a similarity metric based method to successfully extract the transmission patterns from high-dimensional air pollution data. Furthermore, a visual analysis framework is also designed to help domain scientists interactively mine some potential features. Finally, the effectiveness of our framework has been demonstrated by user study from domain scientists. Our framework has successfully help domain scientists understanding the development of air pollution trends and transmission patterns.",
      "award": false
    },
    {
      "authors": [
        "KUNQI HU (Kyoto University)",
        "ZHONGJAING HAN (Kyoto University)",
        "Koji Koyamada (Kyoto University)",
        "Hiroaki Ohtani (National Institute for Fusion Science)"
      ],
      "Paper ID": "poster-1020",
      "Title": "Visualization of a plasma shape and its interference with a fusion reactor in 3D space",
      "type": "Poster",
      "cancel": false,
      "Abstract": "The design of a fusion reactor, FFHR, requires domain experts to inspect the interference of a plasma shape and inner components. As the plasma shape has a complex structure, we propose introducing the alpha shape method and neural network technology to obtain its boundary in three-dimensional space. Then, the interference is rendered with data mapping. The effectiveness of our approach is confirmed by slices.",
      "award": false
    },
    {
      "authors": [
        "Ting Wang (Kyoto University)",
        "Hiroaki Natsukawa (Kyoto University)",
        "Koji Koyamada (Kyoto University)"
      ],
      "Paper ID": "poster-1028",
      "Title": "ChordTransition: A New State Transition Model with a Time Order TrackingMechanism for Time Series Data",
      "type": "Poster",
      "cancel": true,
      "Abstract": "In real systems such as those found in ecology, relationships between time series variables dynamically change in a nonlinear or state-dependent manner. Nonlinear analysis, as represented by empirical dynamic modeling, can represent time series data as trajectories in state space. By summarizing a sequence of points in a high-dimensional space, we can visualize the state transitions of the underlying system. State transition representations using node-link diagrams have often been used in previous research. Therefore, time order tracking is difficult in the state transition graph and the complex timelines cause clutter. To solve the problem, we propose ChordTransition, a new state transition model that employs Chord technique and refines the transition details within states. We discuss the design of ChordTransition, and present a prototype visual analytic system.",
      "award": false
    },
    {
      "authors": [
        "JIARUI OU (Kyoto University)",
        "HAOBIN LI (Kyoto University)",
        "Koji Koyamada (Kyoto University)"
      ],
      "Paper ID": "poster-1024",
      "Title": "Visual Analytics for Deriving PDE Using Physics-Informed Neural Network",
      "type": "Poster",
      "cancel": false,
      "Abstract": "In this paper, we proposed a visual analytics approach to support the derivation of high-precision partial differential equations (PDEs) using a neural network from point cloud data consisting of the spatiotemporal coordinates. In neural networks, spatiotemporal coordinates are input, physical data is output, and a function approximates point cloud data is regressed. This makes the PDE residual a supervised data, especially in the case of equation derivation. In addition, although optimization of the neural network structure is important, it is difficult to automate it, and it is largely left to humans. As a result, to create knowledge from data, we developed a visual analytics system that emphasizes the importance of human involvement while also automatically building a model. We also conducted several case studies using the proposed system to confirm the effectiveness of this system and illustrated the results.",
      "award": false
    },
    {
      "authors": [
        "Zekai Shao (Fudan University)",
        "Shuran Sun (Fudan University)",
        "Yuheng Zhao (Fudan Univerisity)",
        "Siyuan Wang (Fudan University)",
        "Zhongyu Wei (Fudan University)",
        "Siming Chen (Fudan University)"
      ],
      "Paper ID": "poster-1031",
      "Title": "Visual Exploration of the Reading Comprehension Question Answering Model for Improving the Interpretability",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Reading Comprehension Question Answering (RCQA) is an important task in natural language processing (NLP), aiming at answering questions based on natural language formats of unstructured documents. Recent research work has advanced the performance on benchmark datasets to new records, especially in combination with techniques based on the transformer model of neural machine reading comprehension (MRC). However, understanding the decision process of the model is challenging, which limits the development of RCQA. Therefore, we propose a tree-based visual analysis method that tries to explain the data flow in the model for gaining the interpretability. We demonstrate its effectiveness in promoting the interpretability of RCQA models with initial visual explorations.",
      "award": false
    },
    {
      "authors": [
        "Sangbong Yoo (Sejong University)",
        "Soobin Yim (Sejong University)",
        "ChanYoung Yoon (Sejong University)",
        "Yun Jang (Sejong University)"
      ],
      "Paper ID": "poster-1021",
      "Title": "Gazed Object Sequence for Similarity Comparison of Attention Moving",
      "type": "Poster",
      "cancel": false,
      "Abstract": "AoIs (Area of Interest) refers to meaningful areas in visual stimuli, such as images and videos, for experiment and verification of research hypotheses. In the eye-tracking study, AoIs are appointed to compare the gaze behaviors of the participants and analyze their eye movement. AoI-based visualization shows patterns in attention moving such as AoI sequence, AoI hit, and dwell time. However, since the AoI-based technique focuses on the attention movement between AoIs, it is not easy to analyze gaze behavior patterns within the AoI. The gaze observing the visual stimulus behaves to search for objects while finding the search target.The gazed object is used as a clue to infer the visual search target of gaze behavior. In this paper, we propose a gazed object sequence with AoIs for comparing similarity of attention moving. The proposed sequence provides AoI sequence and gazed object sequence by mapping eye movement, AoIs, and segmented object data. We compare the proposed sequence with the existing AoI sequence.",
      "award": false
    },
    {
      "authors": [
        "Cong Feng (Department of Statics and Information)"
      ],
      "Paper ID": "poster-1001",
      "Title": "A New Space-slicing Treemapping Method",
      "type": "Poster",
      "cancel": true,
      "Abstract": "Dynamical stability is a desired property for treemapping methods. Since in real world, the dataset is usually in a continuous way to be proceed, and the treemap we visualized will be in a dynamic flow. In this paper, We present a dynamic stable treepping method. Our approach has two main stages, the first step is to layout each rectangle into the treemap in a near-uniform way, and then we resize each rectangle into its real size. This method is a novel method which focuses on the dynamic stable issue of treemapping methods. And this method shows good dynamical stable property in our experiments with real world datasets.",
      "award": false
    },
    {
      "authors": [
        "Yue Wang (Fudan University)",
        "Yusheng Qi (Fudan University)",
        "Siming Chen (Fudan University)",
        "Guozheng Li (Peking University)"
      ],
      "Paper ID": "poster-1017",
      "Title": "Visual Analytics For Industry Hierarchies",
      "type": "Poster",
      "cancel": false,
      "Abstract": "The industry structure is always presented as hierarchical data. We are keen to analyze the competitive situation among companies or regions in the industry. We propose a visual analytics system for industry hierarchies with an illustrative example of the semiconductor display industry, which can be used to explore the industry structure and the competitive or complementary relationships between companies or regions in one or more industries. We also give a case study comparing two companies in the red phosphorescent material industry to validate our system.",
      "award": false
    },
    {
      "authors": [
        "David Trye (University of Waikato)"
      ],
      "Paper ID": "poster-1013",
      "Title": "Visualising Multivariate Categorical Data",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Despite categorical dimensions being common in real-world datasets, few visualisation techniques support the analysis of multiple categorical variables at the same time. Those methods that do exist do not scale well, or do not consider relationships between all variables simultaneously, instead breaking them down into more restricted views or reflecting a hierarchy of variables. Drawing inspiration from set-based tools, this paper introduces a novel technique for visualising multivariate categorical data, by aggregating different combinations of categories. Advantages of this approach include the ability to easily compare frequencies among both variable categories and their combinations, the absence of line crossings, and a non-hierarchical layout that does not privilege one variable above all others.",
      "award": false
    },
    {
      "authors": [
        "Hyein Hong (Sejong university)",
        "Sangbong Yoo (Sejong University)",
        "Soobin Yim (Sejong University)",
        "ChanYoung Yoon (Sejong University)",
        "Yun Jang (Sejong University)"
      ],
      "Paper ID": "poster-1032",
      "Title": "Visualization System for Data Quality Improvement",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Poor quality data leads to erroneous results in the analytical model. Therefore, the data scientist repeats the data cleaning and quality assessment steps to improve the data quality. Data scientists examine the causes of poor data quality and clean up the data by replacement and deletion. After cleaning the data, data scientists evaluate data quality using data quality metrics and normality tests. It is up to the data scientist to decide which method to use during the data quality improvement step. Therefore, data scientists spend much time and effort deciding how to improve data quality. In this study, we propose a visualization system to assist data scientists in determining how to improve data quality. The visualization system suggests data correction methods such as replacement or deletion according to quality criteria. In addition, the visualization system provides data quality visualizations using node-link diagrams, heat maps, histograms, eCDFs, and density plots.",
      "award": false
    },
    {
      "authors": [
        "ZHONGJAING HAN (Kyoto university)",
        "JIARUI OU (Academic Center for Computing and Media Studies)",
        "KUNQI HU (Kyoto University)",
        "Hiroaki Natsukawa (Kyoto University)",
        "Koji Koyamada (Kyoto University)"
      ],
      "Paper ID": "poster-1022",
      "Title": "Three-dimensional book data page segmentation and extraction method using neural network",
      "type": "Poster",
      "cancel": false,
      "Abstract": "At present, X-ray-based CT scans have been used to analyze the closed booklet form without the need for physical expansion, where the important task is to extract page information. Previously, we constructed page volume data by 3D annotations and calculated Laplace equations, and used data-mapped iso-surfaces to visualize paper information. The generated page volume data, where the scalar data value represents the page number. In order to improve the accuracy of the method, we use a deep neural network to approximate the page volume data from the annotated spatial points. We confirm its validity by evaluating the accuracy of page extraction.",
      "award": false
    },
    {
      "authors": [
        "Tiffany Chhim (Kitware Europe)"
      ],
      "Paper ID": "poster-1018",
      "Title": "Enhancing Scientific Visualization Through Virtual Reality in ParaView",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Scientific visualization is a highly relevant area for all scientific domains that aims to extract information out of raw data and display it as explicitly and intuitively as possible to give users a quick grasp of their data characteristics. In particular, virtual reality (VR) is a well-suited method for three-dimensional data which creates a visualization of objects as if present in the real world. On the other hand, ParaView is a leading open-source software offering a great variety of processing tools for data analysis and visualization. As such, ParaView includes a plugin for VR support providing an easy way of viewing most 3D data in VR, as well as specific user actions through controllers and an overlay menu giving access to many customization options. This work brings insight into how the VR capabilities combine with ParaView to enhance user experience for scientific visualization. Example use cases are presented to illustrate some of the VR functionalities in ParaView.",
      "award": false
    },
    {
      "authors": [
        "Sayaka Morikoshi (Ochanomizu University)",
        "Masaki Onishi (National Institute of Advanced Industrial Science and Technology)",
        "Takayuki Itoh (Ochanomizu University)"
      ],
      "Paper ID": "poster-1023",
      "Title": "People Flow Visualization based on Proximity Networks",
      "type": "Poster",
      "cancel": false,
      "Abstract": "With the worldwide spread of novel coronavirus (COVID-19), Japanese politicians require people to avoid the \u201cThree Cs.\u201d  Here, three Cs stands for Crowded places, Close-contact settings and Confined and enclosed spaces. Against this background, there have been a lot of studies that analyze the flow of people and visualize it. It is important to reduce congestion during events, and reducing the proximity of people is particularly effective, in order to prevent the spread of infections. On the other hand, there are a small number of methods to visualize the human flow based on the proximity of people. This paper presents a method to visualize walking patterns with high infection risk based on the network formed by connecting conjunct pedestrians.",
      "award": false
    },
    {
      "authors": [
        "Yuki Nakai (Ochanomizu University)",
        "Takayuki Itoh (Ochanomizu University)"
      ],
      "Paper ID": "poster-1012",
      "Title": "Classification and Visualization of Lyric Collections Using Guided LDA",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Lyrics are one of the most important components of music and have a great impact on our daily listening to music. Therefore, a music search system based on the meaning of lyrics is useful. However, the impression of lyrics is subjective, and it is difficult to analyze music by focusing only on the lyrics. Therefore, we propose a method to analyze lyrics using guided LDA and to visualize the distribution of lyrics.",
      "award": false
    },
    {
      "authors": [
        "Shivam Agarwal (University of Duisburg-Essen)",
        "Uttiya Ghosh (International Institute of Information Technology Bangalore)",
        "Fabian Beck (University of Bamberg)",
        "Jaya Sreevalsan Nair (IIIT Bangalore)"
      ],
      "Paper ID": "poster-1007",
      "Title": "CiteVis: Visual Analysis of Overlapping Citation Intents as Dynamic Sets",
      "type": "Poster",
      "cancel": false,
      "Abstract": "A scientific article can be cited with different intents over several years. The citation intents can be inferred by classifying the citation text into different categories. With multiple citations to the same article, the citation intent categories overlap, making their analysis more challenging. We model the categories as dynamic sets and propose an approach to visualize temporal citation trends of an article across overlapping citation intents. The approach supports comparison between the citation trends of two seed articles of interest. The implemented prototype supports searching and selecting seed articles from a Semantic Scholar dataset.",
      "award": false
    },
    {
      "authors": [
        "Kenji Wada (Eindhoven University of Technology)",
        "G\u00fcnter Wallner (Eindhoven University of Technology)",
        "Steven Vos (Eindhoven University of Technology)"
      ],
      "Paper ID": "poster-1019",
      "Title": "Towards Designing a Map-Based Data Visualization Application to Enhance Collaboration through Awareness among Different Experts in Vitality",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Visualizations have been used for solving real-world problems in a variety of contexts. Therefore, it is considered that empirical studies to understand visualizations in each specific context are necessary. We conducted a study to understand users\u2019 search behavior and requirements on a visualization utilized by various domain experts who work on improving vitality, which is considered a major societal issue today. A mixed-methods study involving online surveys, open-ended tasks, and semi-structured interviews was conducted with three experts each from the fields of government, business, and research (N=9). The results of our study show that a combination of multiple datasets potentially supports achieving goals for various users in the context of vitality. The study also found the collaborative use of visualizations among domain experts. Based on these findings, we propose a preliminary design of a collaborative map-based data visualization application for the field of vitality. For this application, we hypothesize awareness to be a key factor to enhance various users\u2019 engagement and collaboration.",
      "award": false
    },
    {
      "authors": [
        "Jieying Huang (Sun Yat-Sen University)",
        "Junnan Hu (Sun Yat-sen University)",
        "Yang Xi (Sun Yat-sen University)",
        "Jun Tao (Sun Yat-sen University)"
      ],
      "Paper ID": "poster-1025",
      "Title": "Exploring Flow Data Using Natural Languages",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Flow visualization conveys critical information of flow fields by rendering flow features and patterns of interest. To identify desired features for visualization, traditional approaches often rely on graphical user interfaces for interactive exploration, which requires a great amount of learning effort. To reduce this effort, we present a novel interactive system to explore flow data using natural languages. The system consists of a natural language parser, a declarative language, and a visualization engine. The natural language parser interprets user intention from textual input and translates it into the declarative language. The declarative language is specifically designed for flow visualization. It serves as an intermediate layer between the natural language and the flow visualization engine. The declarative language features a series of flexible operations to derive complicated structures from existing ones (e.g., streamlines, critical points, simple patterns, and scalar values), so that various kinds of queries can be answered.",
      "award": "honorable"
    },
    {
      "authors": [
        "Songqian Wu (Beijing University of Posts and Telecommunications)",
        "Tiemeng Li (Beijing University of Posts & Telecommunications)",
        "Yanning Jin (Beijing University of Posts and Telecommunications)",
        "Haopai Shi (Beijing University of Posts and Telecommunications)",
        "Shiran Liu (Beijing University of Posts and Telecommunications)"
      ],
      "Paper ID": "poster-1029",
      "Title": "Data Transfer Interaction Technique for Multi-source Visualization in Mixed Space",
      "type": "Poster",
      "cancel": false,
      "Abstract": "This paper presents a data transfer interaction technique for multi-source visualization in mixed space. The technical solution consists of three parts: a Web client to parse existing 2D visualization data; HoloLens mixed reality client that handles gestures and immersive visualization data; and the server that receives and distributes messages. The user selects data elements on the existing 2D visualization through natural freehand interaction and drags them to the 3D visualization space. The Web client completes data extraction, the server completes data transmission, and the mixed reality terminal is responsible for gesture interaction recognition and rendering in the process of data transfer.",
      "award": false
    },
    {
      "authors": [
        "haotian mi (Beijing Institute of Technology)",
        "Guozheng Li (Beijing Institute of Technology)",
        "Chi Harold Liu (Beijing Institute of Technology)",
        "Siming Chen (Fudan University)"
      ],
      "Paper ID": "poster-1010",
      "Title": "HiRegExp: Querying and Exploring Multivariate Hierarchical Data using Regular Expressions",
      "type": "Poster",
      "cancel": false,
      "Abstract": "We present HiRegExp, a declarative grammar for querying multivariate hierarchical data. \nBased on tree visualization's task abstraction framework, we identify three types of query targets (node, path, and subtree) and two aspects for querying these targets (target features and target positions). To give the user flexible and fine-grained specifications for these targets, HiRegExp borrows the operators from traditional regular expressions. \nFurthermore, it extends the expressiveness by allowing users to add several attributes constraints for each node and defining extra operators for specifying topological structures and element compositions. We design and implement a visual editor based on HiRegExp to allow analysts to construct the query statements interactively.",
      "award": false
    },
    {
      "authors": [
        "Zhaoyu Zhou (Fudan University)",
        "Jason Wong (The Hong Kong University of Science and Technology)",
        "Guozheng Li (Peking University)",
        "Siming Chen (Fudan University)"
      ],
      "Paper ID": "poster-1026",
      "Title": "Feature Selection on Deep Learning Models: an Interactive Visualization Approach",
      "type": "Poster",
      "cancel": false,
      "Abstract": "In the era of data explosion, deep neural networks are widely used for prediction tasks in various scenarios. However, the complex feature spaces in high-dimensional data pose challenges to model training. While the common practice is to perform feature selection, existing approaches are generally designed for non-deep models. Additionally, deep models, considered as black-boxes, lack interpretability in utilizing features. This paper presents a visual analytics approach to facilitate the feature selection process of deep learning models by introducing human experience and decisions in integrated classical statistical methods. Our visual analytics system includes a Data Filter Component and an Interactive Verification Component. The former identifies and filters irrelevant and redundant features, while the latter supports the fine selection by understanding the features\u2019 contribution. Furthermore, iterative exploration is supported to gain a proper feature subspace.",
      "award": false
    },
    {
      "authors": [
        "Xiaojiao Chen (Zhejiang University)",
        "Xin Ge (Zhejiang University)",
        "lilianping li (Zhejiang University)",
        "liantong yin (Zhejiang University)",
        "Zhuqing Wang (Zhejiang University)",
        "Jiayi Zhang (Zhejiang University)",
        "Xiaosong Wang (Zhejiang University)"
      ],
      "Paper ID": "poster-1003",
      "Title": "Echoes of Ancient China: Visualizing Refrain and Music in the Shijing",
      "type": "Poster",
      "cancel": false,
      "Abstract": "The refrain is a popular literary device that represents the repeated lines in poetry. It can be viewed as an essential part of most songs in the Shijing. In the past, only by chanting a particular poem, people can generally communicate their feelings and emotions. Is there any similar way existing for appreciation? Driven by the problem mentioned above, this work uses visualization technology to convert the repetitive structure into visual data, mainly presented on interactive web pages with visual analysis and music visualization. It also includes physical visualization incorporating \u2019synthetic\u2019 techniques to enrich the visual representation. We hope that this attempt at visualization will serve as a feasible solution for the concrete dissemination of poetic rhyme. To a certain extent, this work has great significance and enlightening impact on future education and cultural transmission.",
      "award": "best"
    },
    {
      "authors": [
        "Xuan Chen (Fudan University)",
        "Xincan Zhang (Fudan University)",
        "Zhaohan Wang (Fudan University)",
        "Kerun Yu (Fudan University)",
        "Jason Wong (The Hong Kong University of Science and Technology)",
        "Haoyun Guo (EthPlanet)",
        "Siming Chen (Fudan University)"
      ],
      "Paper ID": "poster-1033",
      "Title": "A Visualization Method for Security Threats Detection on Ethereum 2.0 Beacon Chain",
      "type": "Poster",
      "cancel": false,
      "Abstract": "Ethereum, as one of the largest blockchain platforms, is conducting continuous upgrades towards Ethereum 2.0. Security issues of the beacon chain, the core component of Ethereum 2.0, have always been concerned. As far as we know, the beacon chain lacks an intuitive visualization method. This paper propose a visualization method for security threat awareness on Ethereum 2.0 beacon chain. After summarizing the most discussed security threats from previous works, we investigate the attacking activities' impact on beacon chain data and provide three views from macroscopic and microcosmic perspectives, including epoch overview, slot overview, and slot details view. Users can effectively detect suspicious information and observe the validator distribution and their voting results in an understandable manner.",
      "award": false
    },
    {
      "authors": [
        "Can Liu (Peking University)",
        "Yu Zhang (University of Oxford)",
        "Cong Wu (Peking University)",
        "Xiaoru Yuan (Peking University)"
      ],
      "Paper ID": "poster-1027",
      "Title": "Direct Manipulation of Static Visualizations",
      "type": "Poster",
      "cancel": false,
      "Abstract": "We propose a method that enables manipulating static visualizations and carrying out various interaction tasks through simple operations. Our method models the visual mark layout of static visualization with spatial constraints. Given a static visualization, we extract control points and deduce initial spatial constraints. We formulate a wide range of interaction tasks as changes to force-directed movements, including selection, filtering, navigation, arrangement, and aggregation. The control point positions and spatial constraints are updated upon manipulating the visual marks. The spatial constraints are encoded as forces that drive visual marks to converge to a stable spatial layout.",
      "award": false
    }
  ]
};
