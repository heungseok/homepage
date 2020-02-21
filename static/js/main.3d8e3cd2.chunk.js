(this["webpackJsonpheungseok.github.io"]=this["webpackJsonpheungseok.github.io"]||[]).push([[0],{21:function(e,a,t){e.exports=t(32)},26:function(e,a,t){},27:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(17),r=t.n(o),l=(t(26),t(12)),s=t(3),c=t(13),u=t(14),m=t(15),d=(t(27),t(44)),g=t(45),h=[{title:"KAIST (Korea Advanced of Institute and Technology)",description:"M.S. in Graduate School of Cultur Technology (Social Computing)",duration:"Mar. 2016 - Feb. 2018"},{title:"Ajou University",description:"B.S. in Digital Media in College of Information and Technology",duration:"Mar. 2010 - Feb. 2016"},{title:"University of Nevada, Las Vegas",description:"Visiting Scholar in College of Engineering",duration:"Jan. 2015 - May. 2015"}],v=[{title:"Clova AI Research, NAVER",description:"Visualization Engineer & Researcher, Front-end web developer",duration:"Feb. 2018 - Now"},{title:"3Secondz",description:"Visualization Engineer, Front-end web developer",duration:"May. 2017 - Jan. 2018"}],E=[{title:"VisualHyperTuner: Visual Analytics for User-Driven Hyperparameter Tuning of Deep Neural Networks",author:"Heungseok Park, Jinwoong Kim, Minkyu Kim, Ji-hoon Kim, Jaegul Choo, Jung-Woo Ha, and Nako Sung",venue:"In Proc. International Conference on Machine Learning and Systems (MLSys)",date:"2019"},{title:"CHOPT : Automated Hyperparameter Optimization Framework for Cloud-Based Machine Learning Platforms",author:"Jinwoong Kim, Minkyu Kim, Heungseok Park, Ernar Kusdavletov, Dongjun Lee, Adrian Kim, Ji-Hoon Kim, Jung-Woo Ha, and Nako Sung",venue:"arXiv",date:"2018"},{title:"NSML: Meet the MLaaS platform with a real-world case study",author:"Hanjoo Kim, Minkyu Kim, Dongjoo Seo, Jinwoong Kim, Heungseok Park, Soeun Park, Hyunwoo Jo, KyungHyun Kim, Youngil Yang, Youngkwan Kim, Nako Sung, and Jung-Woo Ha",venue:"arXiv",date:"2018"},{title:"What makes a Successful Course at MOOCs? The Effects of the Structural Positions in Review Networks on the Course's Popularity and Satisfaction",author:"Heungseok Park, Wonjae Lee",venue:"Master Thesis",date:"2018"},{title:"NetSet: A Systematic integration of visualization for analyzing set intersections with network",author:"Heungseok Park, Hongjun Lim, Wonjae Lee, and Kyungwon Lee",venue:"In Proc. IEEE Pacific Visualization Symposium (PacificVis)",date:"2017"},{title:"Extracting Placeness from Social Media: an Ontology-Based System",author:"Jee Jung Choi, Jungmin Kim, Heungseok Park, and Wonjae Lee, ",venue:"In Proc. IEEE/ACM International Conference on Advances in Social Networks Analysis and Mining (ASONAM)",date:"2017"},{title:"NetSet: Interactive Visualization for Analyzing Sets in Large Networks",author:"Heungseok Park, Hongjun Lim, and Kyungwon Lee",venue:"Poster, IEEE VIS Conference, Visualization in Data Science (VDS) Symposium",date:"2015"}],p=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.item,a=e.title,t=e.description,n=e.duration;return i.a.createElement("div",{className:"BioItem"},i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"title"},a),i.a.createElement("div",null,t)),i.a.createElement("div",{className:"sub"},n))}}]),a}(i.a.PureComponent),f=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.item,a=e.title,t=e.author,n=e.venue,o=e.date,r=e.items,l=t.split(",");return i.a.createElement("div",{className:"PaperItem"},i.a.createElement("div",{className:"main"},i.a.createElement("div",{className:"title"},a),i.a.createElement("div",null,l.map((function(e,a){return i.a.createElement("span",{key:e,style:{fontWeight:"Heungseok Park"===e.trim()?800:"unset"}},a===l.length-1?e:"".concat(e,", "))}))),i.a.createElement("div",{className:"venue"},n),r&&i.a.createElement("div",null,r)),i.a.createElement("div",{className:"sub"},o))}}]),a}(i.a.PureComponent);var k=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"header"},i.a.createElement("h1",{className:"title"},i.a.createElement("a",{href:"https://heungseok.github.io/"},"Heungseok Park"),i.a.createElement("div",null)),i.a.createElement("div",{className:"header-items"},i.a.createElement("a",{href:"/static/documents/CV_HeungseokPark.pdf"},"CV (PDF)"))),i.a.createElement("div",{className:"contents flex row"},i.a.createElement("div",{className:"profile"},i.a.createElement("div",null,i.a.createElement("img",{width:"150px",height:"200px",src:"https://github.com/heungseok/heungseok.github.io/blob/master/static/images/profile_image.jpeg?raw=true",alt:"failed to load"})),i.a.createElement("div",{className:"contacts"},i.a.createElement("div",null,i.a.createElement(d.a,null,"email"),i.a.createElement("a",{href:"mailto:heungseok2@gmail.com"},"heungseok2@gmail.com")),i.a.createElement("div",null,i.a.createElement(d.a,null,"school"),i.a.createElement("a",{href:"https://scholar.google.com/citations?user=Shc__D8AAAAJ"},"Google Scholar")),i.a.createElement("div",null,i.a.createElement(g.a,{style:{marginRigth:"5px"}}),i.a.createElement("a",{href:"https://www.linkedin.com/in/heungseok2/"}," LinkedIn")))),i.a.createElement("div",{className:"bio"},i.a.createElement("div",{className:"intro"},i.a.createElement("p",null,"Hi! I'm a data visualization researcher and engineer at the NAVER Corporation. I'm currently designing and developing a Visaul analytics system for AutoML on the cloud-based machine learning platform in Clova AI at Naver Corporation. I was interested in data analysis since undergraduate years, specifically in data visualization. I love the quote that \u201cNever trust summary statistics alone, always visualize your data\u201d.")),i.a.createElement("div",null,i.a.createElement("h3",null,"Education"),h.map((function(e){return i.a.createElement(p,{key:e.title,item:e})}))),i.a.createElement("div",null,i.a.createElement("h3",null,"Experience"),v.map((function(e){return i.a.createElement(p,{key:e.title,item:e})}))),i.a.createElement("div",null,i.a.createElement("h3",null,"Publications"),E.map((function(e){return i.a.createElement(f,{key:e.title,item:e})})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.3d8e3cd2.chunk.js.map