(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{209:function(e,t,a){},228:function(e,t,a){},229:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(42),c=a.n(o),r=(a(82),a(8)),s=a.n(r),i=a(15),m=a(1),u=a(2),p=a(4),d=a(3),h=a(5),f=(a(84),a(6)),g=a(19),b=(a(85),a(86),"https://tranquil-mountain-69690.herokuapp.com"),E=["Jan","Feb","Mar","Apr","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],v=function(){return l.a.createElement("span",{className:"pl-2 pr-2"},l.a.createElement("i",{className:"fas fa-circle align-middle",style:{fontSize:"4px"}}))},N=function(e){return console.log(e),e=new Date(parseInt(e)),console.log("called date ..."),console.log(e),"".concat(E[e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear())},y=function(e){var t=e.icon,a=e.link;return l.a.createElement("span",{className:"pl-2 pr-2"},l.a.createElement("a",{href:a,className:"social-link"},l.a.createElement("i",{class:t})))},w=function(){return l.a.createElement("div",{style:{fontFamily:"Fresca",fontSize:"20px"}},l.a.createElement("p",null,"Hi, I'm Kartik Verma. I have done my graduation in Computer Science & Engineering from National Institute of Techology, Hamirpur."),l.a.createElement("p",null,"I am tech enthusiast and like to read and work on new technologies. I have worked in Deep Learning, Android development and Web Development. My current interest is Front End Development."),l.a.createElement("p",null,"I have done some competitions on algorithms on hackerearth, spoj, hackerrank. I have also participated in machine learning competitions on kaggle and hackerearth."))},k=function(){var e={username:"",authToken:""},t=localStorage.getItem("username"),a=localStorage.getItem("authToken");return e.username=t,e.authToken=a,console.log("get AUth Details...."),console.log(e),e},j=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log(this.props.article.backColor),l.a.createElement("div",{className:"row pt-md-5 pb-md-5 pt-4 pb-4",style:{backgroundColor:"".concat(this.props.article.backColor)}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 col-0"}),l.a.createElement("div",{className:"col-md-6 col-12 article-link-title"},this.props.article.title),l.a.createElement("div",{className:"col-md-3 col-0"})),l.a.createElement("div",{className:"row pt-2"},l.a.createElement("div",{className:"col-md-3 col-0"}),l.a.createElement("div",{className:"col-md-6 col-12 article-link-desc"},l.a.createElement("span",{className:"article-tag"},this.props.article.type)," ",l.a.createElement(v,null),l.a.createElement("span",null,N(this.props.article.publishDate))," ",l.a.createElement(v,null),l.a.createElement("span",{style:{fontWeight:"bold",letterSpacing:"1px"}},this.props.article.author)),l.a.createElement("div",{className:"col-md-3 col-0"}))))}}]),t}(l.a.Component),O=a(73),x=a.n(O),C=(a(209),a(28)),S=a.n(C),I=a(10),L=a.n(I),D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={articleItem:{}},a.fetch=function(){var e=Object(i.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,L.a.get(b+"/posts/"+t);case 3:n=e.sent,console.log(n.data.data),a.setState({articleItem:n.data.data}),console.log(a.state.articleItem);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetch(this.props.match.params.id)}},{key:"render",value:function(){console.log("Article View Called.."),console.log(this.state.articleItem);var e=this.state.articleItem;return console.log(e.id),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row pt-5 pb-4 pt-md-5 pb-md-4 article-item-details",style:{backgroundColor:"".concat(e.backColor),color:"white"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-1 col-0"}),l.a.createElement("div",{className:"col-md-10 col-12 article-view-title"},e.title),l.a.createElement("div",{className:"col-md-1 col-0"})),l.a.createElement("div",{className:"row pt-2"},l.a.createElement("div",{className:"col-md-1 col-0"}),l.a.createElement("div",{className:"col-md-10 col-12"},l.a.createElement("span",{className:"article-tag"},l.a.createElement("span",null,e.type)," ",l.a.createElement(v,null),l.a.createElement("span",null,N(e.publishDate))," ",l.a.createElement(v,null),l.a.createElement("span",{style:{fontWeight:"bold",letterSpacing:"2px"}},e.author))),l.a.createElement("div",{className:"col-md-1 col-0"})))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row pt-4 pb-4"},l.a.createElement("div",{className:"col-0 col-md-1"}),l.a.createElement("div",{className:"col-12 col-md-10 article-view-text"},l.a.createElement(x.a,{source:e.text,escapeHtml:!1})),l.a.createElement("div",{className:"col-0 col-md-1"}))),l.a.createElement("div",{className:"row pt-4 pb-4 pt-md-5 pb-md-5",style:{backgroundColor:"#d3d3d3"}},l.a.createElement("div",{className:"container pt-0 pt-md-2 pb-md-2 pt-0 "},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-0 col-md-1"}),l.a.createElement("div",{className:"col-0 col-md-10"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 col-12"},l.a.createElement("div",{className:"font-weight-bold",style:{fontFamily:'"Fresca", sans-serif',letterSpacing:"2px",textTransform:"uppercase",fontSize:"18px"}},"About the Author"),l.a.createElement("div",{style:{fontFamily:'"Fresca", sans-serif',fontSize:"18px"}},"I'm a Computer Science & Engineering Graduate from National Institute of Technology, Hamirpur. I have worked in the fields of Deep Learning, Android Development and Web Development. My current interest is front end development."),l.a.createElement("div",{className:"container-fluid pt-3"},l.a.createElement("ul",{style:{listStyleType:"none"},className:"row"},l.a.createElement("li",null,l.a.createElement(y,{icon:"fab fa-github",link:"https://github.com/vermakartik"})),l.a.createElement("li",null,l.a.createElement(y,{icon:"fab fa-codepen",link:"https://codepen.io/simClev/"})),l.a.createElement("li",null,l.a.createElement(y,{icon:"fab fa-linkedin-in",link:"https://www.linkedin.com/in/kartik-verma/"}))))),l.a.createElement("div",{className:"col-12 col-md-4 text-center"},l.a.createElement("img",{src:S.a,style:{width:"164px",height:"164px",borderRadius:"50%",objectFit:"cover",border:"3px solid white"}})))),l.a.createElement("div",{className:"col-0 col-md-1"})))))}}]),t}(l.a.Component),A=function(e){var t=e.articleURL,a=e.item;return l.a.createElement(f.b,{to:t,style:{textDecoration:"none"}},l.a.createElement(j,{article:a}))},H=function(e){var t=e.blogList,a=e.url;return l.a.createElement("div",{className:"container-fluid"},t.map(function(e,t){var n=e.title.split(" ").join("-"),o="".concat(a,"/").concat(n);return console.log(o),l.a.createElement(A,{key:t,articleURL:o,item:e})}))},F=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={blogList:[]},a.fetch=Object(i.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.get(b+"/posts");case 2:t=e.sent,console.log(t),a.setState({blogList:t.data.hits});case 5:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){var e=this,t=this.props.match;return console.log(t),l.a.createElement("div",null,l.a.createElement(g.b,{exact:!0,path:t.url,component:function(){return l.a.createElement(H,{blogList:e.state.blogList,url:t.url})}}),l.a.createElement(g.b,{path:t.url+"/:id",component:D}))}}]),t}(l.a.Component),T=(a(228),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row pt-2 pb-2 pt-md-5 pb-md-5",style:{backgroundColor:"#d3d3d3"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 col-12 text-md-right text-center"},l.a.createElement("img",{className:"profile-image",src:S.a})),l.a.createElement("div",{className:"col-md-8 col-12 text-md-left text-center"},l.a.createElement("span",{className:"align-bottom about-title"},"About Me"))))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row pt-4"},l.a.createElement("div",{className:"col-0 col-md-2"}),l.a.createElement("div",{className:"col-12 col-md-8"},l.a.createElement(w,null)),l.a.createElement("div",{className:"col-0 col-md-2"}))))}}]),t}(l.a.Component)),M=a(24),P=a(18),W=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:""},a.handleChange=function(e){console.log(e.target.name+"<---\x3e"+e.target.value),a.setState(Object(P.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-md-5 mt-3"},l.a.createElement("div",{className:"col-0 col-md-4"}),l.a.createElement("div",{className:"col-12 col-md-4 bg-danger rounded-lg pt-3 pb-3"},l.a.createElement("div",{className:"text-center",style:{fontFamily:'"Fredoka One", sans-serif',fontSize:"24px",letterSpacing:"2px",textTransform:"uppercase",color:"white"}},"Login"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"text-light",style:{fontFamily:"ubuntu, sans-serif"}},"Username"),l.a.createElement("input",{name:"username",type:"text",onChange:this.handleChange,value:this.state.username,className:"form-control",id:"username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"text-light",style:{fontFamily:"ubuntu, sans-serif"}},"Password"),l.a.createElement("input",{name:"password",type:"password",className:"form-control",id:"password",onChange:this.handleChange,value:this.state.password})),l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"button",style:{border:"none",textTransform:"uppercase"},className:"rounded-lg pl-3 pr-3 pt-1 pb-1",onClick:function(t){return e.props.loginHandle(e.state.username,e.state.password,!0)}},"Submit")))),l.a.createElement("div",{className:"col-0 col-md-4"})))}}]),t}(l.a.Component),z=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("button",{className:"logout-button bg-warning",onClick:function(){e.props.loginHandle("","",!1),e.props.history.push("/posts")},style:{display:"inline-block",border:"none",borderRadius:"50%",padding:"4px 8px 4px 10px",fontSize:"20px",color:"white"}},l.a.createElement("i",{className:"fas fa-sign-out-alt"}))}}]),t}(l.a.Component),_=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){console.log("Auth Check called ...."),console.log(this.props.isLoggedIn);var e=this.props.isLoggedIn?this.props.children:l.a.createElement(W,{loginHandle:this.props.loginHandle});return console.log(e),l.a.createElement("div",null,e)}}]),t}(l.a.Component),R=Object(g.g)(z),J=Object(g.g)(function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",text:"",type:"",author:"",backColor:"#ffffff",publishDate:Date.now()},a.onChange=function(e){a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(i.a)(s.a.mark(function e(t){var n,l,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=Date.now(),a.setState({publishDate:n}),l=k(),o={},o=l?Object(M.a)({},a.state,{user:l}):Object(M.a)({},a.state),console.log(a.state),L.a.post(b+"/posts",o).then(function(e){console.log(e),a.props.history.replace("/admin/edit/"+a.state.title.split(" ").join("-"))});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row pb-4"},l.a.createElement("div",{className:"col-md-1 col-0"}),l.a.createElement("div",{className:"col-md-10 col-12"},l.a.createElement("div",{style:{fontFamily:'"Fredoka One", "sans-serif"',fontSize:"24px"},className:"pt-2 pl-0 pb-2"},"New Article"),l.a.createElement("form",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-12 col-md-6"},l.a.createElement("label",{className:"font-weight-bold"},"Post Title"),l.a.createElement("input",{className:"form-control",type:"text",name:"title",value:this.state.title,onChange:this.onChange})),l.a.createElement("div",{className:"form-group col-12 col-md-6"},l.a.createElement("label",{className:"font-weight-bold"},"Post Author"),l.a.createElement("input",{className:"form-control",type:"text",name:"author",value:this.state.author,onChange:this.onChange}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Post Type"),l.a.createElement("input",{className:"form-control",type:"text",name:"type",value:this.state.type,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Post Text"),l.a.createElement("textarea",{className:"form-control",type:"text",name:"text",value:this.state.text,onChange:this.onChange,rows:"20",cols:"50"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Background color"),l.a.createElement("input",{className:"form-control",type:"color",name:"backColor",value:this.state.backColor,onChange:this.onChange,rows:"20",cols:"50"})),l.a.createElement("button",{type:"button",className:"border-0 pt-1 pb-1 pl-3 pr-3 rounded-sm bg-primary text-light",onClick:this.onSubmit},"Submit"))),l.a.createElement("div",{className:"col-1 col-0"})),l.a.createElement("div",{className:"links-position"},l.a.createElement(f.b,{to:"/admin"},l.a.createElement("span",{className:"text-top"},l.a.createElement("button",{className:"new-button list-button shadow-sm ml-1 mr-1",style:{backgroundColor:"#00897b"}},l.a.createElement("i",{class:"fas fa-clipboard-list"})))),l.a.createElement(R,{loginHandle:this.props.loginHandle})))}}]),t}(l.a.Component)),U=(a(72),Object(g.g)(function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={_id:"",title:"",text:"",type:"",author:"",backColor:"",publishDate:""},a.fetch=function(){var e=Object(i.a)(s.a.mark(function e(t){var n,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,L.a.get(b+"/posts/"+t);case 3:n=e.sent,l=n.data.data,a.setState({_id:l._id,title:l.title,text:l.text,type:l.type,author:l.author,backColor:l.backColor,publishDate:l.publishDate}),console.log(a.state);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onChange=function(e){console.log("changed..."+e.target.name+" > "+e.target.value),a.setState(Object(P.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(i.a)(s.a.mark(function e(t){var n,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("called update state"),console.log(a.state),n=k(),l={},l=n?Object(M.a)({},a.state,{user:n}):Object(M.a)({},a.state),console.log("***UserInfo***"),console.log(l),L.a.post(b+"/posts/save",l).then(function(e){console.log(e),a.props.history.replace("/admin")});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("called ======"),this.fetch(this.props.match.params.name)}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row pb-4"},l.a.createElement("div",{className:"col-md-1 col-0"}),l.a.createElement("div",{className:"col-md-10 col-12"},l.a.createElement("div",{style:{fontFamily:'"Fredoka One", "sans-serif"',fontSize:"24px"},className:"pt-2 pl-0 pb-2"},"Edit"),l.a.createElement("form",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-12 col-md-6"},l.a.createElement("label",{className:"font-weight-bold"},"Post Title"),l.a.createElement("input",{className:"form-control",type:"text",name:"title",value:this.state.title,onChange:this.onChange})),l.a.createElement("div",{className:"form-group col-12 col-md-6"},l.a.createElement("label",{className:"font-weight-bold"},"Post Author"),l.a.createElement("input",{className:"form-control",type:"text",name:"author",value:this.state.author,onChange:this.onChange}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Post Type"),l.a.createElement("input",{className:"form-control",type:"text",name:"type",value:this.state.type,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Post Text"),l.a.createElement("textarea",{className:"form-control",type:"text",name:"text",value:this.state.text,onChange:this.onChange,rows:"20",cols:"50"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Background color"),l.a.createElement("input",{className:"form-control",type:"color",name:"backColor",value:this.state.backColor,onChange:this.onChange,rows:"20",cols:"50"})),l.a.createElement("button",{type:"button",className:"border-0 pt-1 pb-1 pl-3 pr-3 rounded-sm bg-primary text-light",onClick:this.onSubmit},"Submit"))),l.a.createElement("div",{className:"col-1 col-0"})),l.a.createElement("div",{className:"links-position"},l.a.createElement(f.b,{to:"/admin/new"},l.a.createElement("button",{className:"new-button shadow-sm ml-1 mr-1"},l.a.createElement("i",{className:"fas fa-plus"})," ",l.a.createElement("span",{className:"pl-1",style:{fontWeight:"bold"}},"NEW"))),l.a.createElement(f.b,{to:"/admin"},l.a.createElement("span",{className:"text-top"},l.a.createElement("button",{className:"new-button list-button shadow-sm ml-1 mr-1",style:{backgroundColor:"#00897b"}},l.a.createElement("i",{class:"fas fa-clipboard-list"})))),l.a.createElement(R,{loginHandle:this.props.loginHandle})))}}]),t}(l.a.Component))),B=function(e){var t=e.match,a=e.loginHandle;return l.a.createElement("div",{className:"links-position"},l.a.createElement(f.b,{to:t.url+"/new"},l.a.createElement("button",{className:"new-button shadow-sm ml-1 mr-1"},l.a.createElement("i",{className:"fas fa-plus"})," ",l.a.createElement("span",{className:"pl-1",style:{fontWeight:"bold"}},"NEW"))),l.a.createElement(R,{loginHandle:a}))},K=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={articleList:[]},a.fetch=function(){L.a.get(b+"/posts").then(function(e){var t=e.data.hits;a.setState({articleList:t}),console.log(t)})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetch(),console.log("Called Component Mount for admin...........")}},{key:"render",value:function(){var e=this.props.match,t=this.state.articleList;return console.log(t),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row bg-light"},l.a.createElement("div",{style:{fontFamily:'"Fredoka One", "sans-serif"',fontSize:"24px"},className:"pl-md-4 pt-md-5 pl-2 pt-3"},"Article List")),l.a.createElement("div",{className:"row"},this.state.articleList.map(function(t,a){return l.a.createElement("div",{className:"col-md-6 col-12"},l.a.createElement(f.b,{to:e.url+"/edit/"+t.title.split(" ").join("-")},l.a.createElement("div",{className:"m-3 border rounded-lg p-3 text-dark"},l.a.createElement("span",{className:"font-weight-bold"},"Title: "),t.title," ",l.a.createElement("br",null),l.a.createElement("span",{className:"font-weight-bold"},"Date: "),N(t.publishDate))))}))),l.a.createElement(B,this.props))}}]),t}(l.a.Component),V=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.match,n=t.isLoggedIn;return console.log(n),console.log(a),l.a.createElement("div",{className:"container-fluid"},l.a.createElement(_,{loginHandle:this.props.loginHandle,isLoggedIn:n},l.a.createElement(g.b,{path:a.url,exact:!0,component:function(){return l.a.createElement(K,{match:a,loginHandle:e.props.loginHandle})}}),l.a.createElement(g.b,Object.assign({path:a.url+"/new",component:function(t){return l.a.createElement(J,{loginHandle:e.props.loginHandle})}},this.props)),l.a.createElement(g.b,{path:a.url+"/edit/:name",component:function(t){return l.a.createElement(U,Object.assign({loginHandle:e.props.loginHandle},t))}})))}}]),t}(l.a.Component),q=a(76),G=a.n(q),Y=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"nav_container"},l.a.createElement("div",{className:"nav_image_container"},l.a.createElement(f.b,{to:"/about",style:{textDecoration:"none"}},l.a.createElement("div",{className:"nav_link"},"About")),l.a.createElement(f.b,{to:"/posts"},l.a.createElement("img",{src:G.a,className:"nav_image"})))),l.a.createElement(g.b,{path:"/posts",component:F}),l.a.createElement(g.b,{path:"/about",component:T}),l.a.createElement(g.a,{from:"/",to:"/posts"}),l.a.createElement("div",{className:"container-fluid text-center"},l.a.createElement("div",{className:"pt-4 pb-3",style:{fontFamily:'"consolas", "roboto-mono"'}},l.a.createElement("div",null,"Inspired from ",l.a.createElement("a",{href:"https://ines.io"},"ines.io")),"\xa9 2019 KARTIK VERMA . ",l.a.createElement(f.b,{to:"/about",style:{color:"black"}},"About")," . ",l.a.createElement(f.b,{to:"/posts",style:{color:"black"}},"Posts"),l.a.createElement("div",null,l.a.createElement("ul",{style:{listStyleType:"none",clear:"both",display:"inline-block"}},l.a.createElement("li",{style:{display:"inline",float:"left"}},l.a.createElement(y,{icon:"fab fa-github",link:"https://github.com/vermakartik"})),l.a.createElement("li",{style:{float:"left"}},l.a.createElement(y,{icon:"fab fa-codepen",link:"https://codepen.io/simClev/"})),l.a.createElement("li",{style:{float:"left"}},l.a.createElement(y,{icon:"fab fa-linkedin-in",link:"https://www.linkedin.com/in/kartik-verma/"})),l.a.createElement("li",{style:{float:"left"}},l.a.createElement(y,{icon:"fab fa-instagram",link:"https://www.instagram.com/its.an.engineer/"})))))))},$=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).state={isLoggedIn:!!localStorage.getItem("isLoggedIn")},a.fetch=function(){var e=Object(i.a)(s.a.mark(function e(t,n){var l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.a.post(b+"/users/signin",{username:t,password:n});case 2:l=e.sent,console.log(l.data.authToken),200===l.data.status?(localStorage.setItem("authToken",l.data.authToken),localStorage.setItem("username",t),localStorage.setItem("isLoggedIn",!0),a.setState({isLoggedIn:!0})):a.setState({isLoggedIn:!1}),console.log(l);case 6:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.onChangeLogin=function(e,t,n){console.log("username"+e),console.log("password"+t),!0===n?a.fetch(e,t):(localStorage.clear(),a.setState({isLoggedIn:!0}))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(f.a,null,l.a.createElement(g.d,null,l.a.createElement(g.b,{path:"/admin",component:function(t){return l.a.createElement(V,Object.assign({loginHandle:e.onChangeLogin,isLoggedIn:e.state.isLoggedIn},t))}}),l.a.createElement(g.b,{path:"/",component:Y})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},28:function(e,t,a){e.exports=a.p+"static/media/profile.51ca9de6.jpg"},72:function(e,t,a){},76:function(e,t,a){e.exports=a.p+"static/media/Kartik.67446f52.jpg"},77:function(e,t,a){e.exports=a(229)},82:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.d244052a.chunk.js.map