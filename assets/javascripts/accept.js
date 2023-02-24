var paper_data = {
    'full': [
        {
            'id': "7946",
            'title': "FraudAuditor: A Visual Analytics Approach for Collusive Fraud in Health Insurance",
            'author': "Jiehui Zhou"
        },
        {
            'id': "8295",
            'title': "Parallel Assemblies Plot, a visualization tool to explore categorical and quantitative data: application to digital mobility outcomes",
            'author': "Alma Cantu"
        },
        {
            'id': "4476",
            'title': "How Can We Improve Data Quality for Machine Learning? A Visual Analytics System using Data and Process-driven Strategies",
            'author': "Hyein Hong"
        },
        {
            'id': "3258",
            'title': "GraphDescriptor: Augmenting Node-Link Diagrams With Textual Descriptions",
            'author': "Jiacheng Pan"
        },
        {
            'id': "5693",
            'title': "SDRQuerier: A Visual Querying Framework for Cross-National Survey Data Recycling",
            'author': "Yamei Tu"
        },
        {
            'id': "8541",
            'title': "Investigating Animal Infectious Diseases with Visual Analytics",
            'author': "Yun-Hsin Kuo"
        },
        {
            'id': "7465",
            'title': "MySemCloud: Semantic-aware Word Cloud Editing",
            'author': "MSc Anaïs Villedieu"
        },
        {
            'id': "4333",
            'title': "LinSets.zip: Compressing Linear Set Diagrams",
            'author': "Markus Wallinger"
        },
        {
            'id': "1448",
            'title': "NFTVis: Visual Analysis of NFT Performance",
            'author': "Fan Yan"
        },
        {
            'id': "2112",
            'title': "Feature Learning for Nonlinear Dimensionality Reduction toward Maximal Extraction of Hidden Patterns",
            'author': "Takanori Fujiwara"
        },
        {
            'id': "2994",
            'title': "Visualizing Interaction Networks and Evidence in Biomedical Corpora",
            'author': "Enrique Noriega-Atala"
        },
        {
            'id': "3219",
            'title': "A Study of Zooming, Interactive Lenses and Overview+Detail Techniques in Collaborative Map-based Tasks",
            'author': "Lingyun Yu"
        },
        {
            'id': "4089",
            'title': "Edit-History Vis: An Interactive Visual Exploration and Analysis on Wikipedia Edit History",
            'author': "Yuhan Guo"
        },
        {
            'id': "5370",
            'title': "Studies of Part-to-Whole Glanceable Visualizations on Smartwatch Faces",
            'author': "Tanja Blascheck"
        },
        {
            'id': "5584",
            'title': "Interactive Transformations and Visual Assessment of Noisy Event Sequences: An Application in En-Route Air Traffic Control",
            'author': "Peilin Yu"
        },
        {
            'id': "5635",
            'title': "Neural Stream Functions",
            'author': "Skylar Wolfgang Wurster"
        },
        {
            'id': "7856",
            'title': "How Does Attention Work in Vision Transformers? A Visual Analytics Attempt",
            'author': "Yiran Li"
        },
        {
            'id': "8044",
            'title': "Understanding 3D Data Videos: From Screens to Virtual Reality",
            'author': "Leni Yang"
        },
        {
            'id': "8193",
            'title': "LabelVizier: Interactive Validation and Relabeling for Technical Text Annotations",
            'author': "Xiaoyu Zhang"
        },
        {
            'id': "8293",
            'title': "Efficient Raycasting of Volumetric Depth Images for Remote Visualization of Large Volumes at High Frame Rates",
            'author': "Aryaman Gupta"
        },
        {
            'id': "8886",
            'title': "Federated Visualization: A Privacy-preserving Strategy for Aggregated Visual Query",
            'author': "Yating Wei"
        },
        {
            'id': "9366",
            'title': "Dimensionality Explorer for Single-Cell Analysis",
            'author': "Haejin Jeong"
        }
    ],
    'notes': [
        {
            'id': "1003",
            'title': "Understanding People's Needs in Viewing Diverse Social Opinions  about Controversial Topics",
            'author': "Song, Hayeong"
        },
        {
            'id': "1007",
            'title': "Transparent Dashboards: Open data practices for promoting competition as motivation in business dashboards",
            'author': "Ridley, Arran"
        },
        {
            'id': "1021",
            'title': "MetaStackVis: Visually-Assisted Performance Evaluation of Metamodels",
            'author': "Chatzimparmpas, Angelos"
        },
        {
            'id': "1027",
            'title': "NCARVis: No-Code Visualization Creation System based on Free-hand",
            'author': "Cheng, Kehan"
        },
        {
            'id': "1029",
            'title': "Toward Reproducible Visual Analysis Results",
            'author': "Franke, Max"
        },
        {
            'id': "1038",
            'title': "Optimizing Embedding-based Network Reconstruction",
            'author': "Witschard, Daniel"
        },
        {
            'id': "1042",
            'title': "EmbeddingTree: Hierarchical Exploration of Entity Features in Embedding",
            'author': "Zheng, Yan"
        },
        {
            'id': "fp track",
            'title': "A Visual Analytics Inspired Approach to Correlate and Understand Multiple Mechanical Tensor Fields",
            'author': "Kretzschmar, Vanessa"
        }
    ]
};

window.addEventListener('load', function() {
    for(var id in paper_data) {
        var obj = document.getElementsByClassName(id)[0];
        var inHtml = ``;

        var content = paper_data[id];

        for(var paper_content of content) {
            inHtml += `
                <paper>
                    <span class='title'>(${paper_content['id']}) ${paper_content['title']}</span>
                    <p>Main Author: ${paper_content['author']}</p>
                </paper>
            `;
        }
        obj.innerHTML = inHtml;
    }
});
