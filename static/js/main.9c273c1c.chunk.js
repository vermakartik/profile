(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},120:function(e,t,a){e.exports=a.p+"static/media/Kartik.67446f52.jpg"},121:function(e,t,a){e.exports=a(529)},126:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},251:function(e,t,a){},40:function(e,t,a){e.exports=a.p+"static/media/profile.51ca9de6.jpg"},527:function(e,t,a){},529:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(62),o=a.n(c),r=(a(126),a(8)),s=a.n(r),i=a(15),m=a(1),u=a(2),d=a(4),p=a(3),h=a(5),f=(a(128),a(6)),g=a(20),b=(a(129),a(130),"https://tranquil-mountain-69690.herokuapp.com"),E=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],v=function(){return l.a.createElement("span",{className:"pl-2 pr-2"},l.a.createElement("i",{className:"fas fa-circle align-middle",style:{fontSize:"4px"}}))},N=function(e){return console.log(e),e=new Date(parseInt(e)),console.log("called date ..."),console.log(e),"".concat(E[e.getMonth()]," ").concat(e.getDate(),", ").concat(e.getFullYear())},y=function(e){var t=e.icon,a=e.link;return l.a.createElement("span",{className:"pl-2 pr-2"},l.a.createElement("a",{href:a,className:"social-link"},l.a.createElement("i",{class:t})))},w=function(){return l.a.createElement("div",{style:{fontFamily:"Fresca",fontSize:"20px"}},l.a.createElement("p",null,"Hi, I'm Kartik Verma. I have done my graduation in Computer Science & Engineering from National Institute of Techology, Hamirpur."),l.a.createElement("p",null,"I am tech enthusiast and like to read and work on new technologies. I have worked in Deep Learning, Android development and Web Development. My current interest is Front End Development."),l.a.createElement("p",null,"I have done some competitions on algorithms on hackerearth, spoj, hackerrank. I have also participated in machine learning competitions on kaggle and hackerearth."))},k=function(){var e={username:"",authToken:""},t=localStorage.getItem("username"),a=localStorage.getItem("authToken");return e.username=t,e.authToken=a,console.log("get AUth Details...."),console.log(e),e},j=function(){return l.a.createElement("div",{className:"container pb-3"},l.a.createElement("div",{className:"c-loader text-center mt-5 mb-2"},l.a.createElement("span",{style:{marginRight:"24px",top:"4px",position:"relative",fontFamily:"'Fresca', sans-serif",textTransform:"uppercase",letterSpacing:"2px"}},"Loading..."),l.a.createElement("span",null,l.a.createElement("div",{className:"c-loader-item"}),l.a.createElement("div",{className:"c-loader-item"}))))},O=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log(this.props.article.backColor),l.a.createElement("div",{className:"row pt-md-5 pb-md-5 pt-4 pb-4",style:{backgroundColor:"".concat(this.props.article.backColor)}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 col-0"}),l.a.createElement("div",{className:"col-md-6 col-12 article-link-title"},this.props.article.title),l.a.createElement("div",{className:"col-md-3 col-0"})),l.a.createElement("div",{className:"row pt-2"},l.a.createElement("div",{className:"col-md-3 col-0"}),l.a.createElement("div",{className:"col-md-6 col-12 article-link-desc"},l.a.createElement("span",{className:"article-tag"},this.props.article.type)," ",l.a.createElement(v,null),l.a.createElement("span",null,N(this.props.article.publishDate))," ",l.a.createElement(v,null),l.a.createElement("span",{style:{fontWeight:"bold",letterSpacing:"1px"}},this.props.article.author)),l.a.createElement("div",{className:"col-md-3 col-0"}))))}}]),t}(l.a.Component),x=a(113),C=a.n(x),S=(a(251),a(252),a(40)),L=a.n(S),I=a(9),D=a.n(I),A=a(531),F=a(117),H=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.language,a=e.value;return l.a.createElement(A.a,{language:t,style:F.darcula},a)}}]),t}(n.PureComponent);H.defaultProps={language:null};var T=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={isLoading:!1,articleItem:{}},a.fetch=function(){var e=Object(i.a)(s.a.mark(function e(t){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),console.log(t),e.next=4,D.a.get(b+"/posts/"+t);case 4:n=e.sent,console.log(n.data.data),a.setState({isLoading:!1,articleItem:n.data.data}),console.log(a.state.articleItem);case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetch(this.props.match.params.id)}},{key:"render",value:function(){console.log("Article View Called.."),console.log(this.state.articleItem);var e=this.state.articleItem;return console.log(e.id),!0===this.state.isLoading?l.a.createElement(j,null):l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row pt-5 pb-4 pt-md-5 pb-md-4 article-item-details",style:{backgroundColor:"".concat(e.backColor),color:"white"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-1 col-0"}),l.a.createElement("div",{className:"col-md-10 col-12 article-view-title"},e.title),l.a.createElement("div",{className:"col-md-1 col-0"})),l.a.createElement("div",{className:"row pt-2"},l.a.createElement("div",{className:"col-md-1 col-0"}),l.a.createElement("div",{className:"col-md-10 col-12"},l.a.createElement("span",{className:"article-tag"},l.a.createElement("span",null,e.type)," ",l.a.createElement(v,null),l.a.createElement("span",null,N(e.publishDate))," ",l.a.createElement(v,null),l.a.createElement("span",{style:{fontWeight:"bold",letterSpacing:"2px"}},e.author))),l.a.createElement("div",{className:"col-md-1 col-0"})))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row pt-4 pb-4"},l.a.createElement("div",{className:"col-0 col-md-1"}),l.a.createElement("div",{className:"col-12 col-md-10 article-view-text"},l.a.createElement(C.a,{source:e.text,renderers:{code:H}})),l.a.createElement("div",{className:"col-0 col-md-1"}))),l.a.createElement("div",{className:"row pt-4 pb-4 pt-md-5 pb-md-5",style:{backgroundColor:"#d3d3d3"}},l.a.createElement("div",{className:"container pt-0 pt-md-2 pb-md-2 pt-0 "},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-0 col-md-1"}),l.a.createElement("div",{className:"col-0 col-md-10"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-8 col-12"},l.a.createElement("div",{className:"font-weight-bold",style:{fontFamily:'"Fresca", sans-serif',letterSpacing:"2px",textTransform:"uppercase",fontSize:"18px"}},"About the Author"),l.a.createElement("div",{style:{fontFamily:'"Fresca", sans-serif',fontSize:"18px"}},"I'm a Computer Science & Engineering Graduate from National Institute of Technology, Hamirpur. I have worked in the fields of Deep Learning, Android Development and Web Development. My current interest is front end development."),l.a.createElement("div",{className:"container-fluid pt-3"},l.a.createElement("ul",{style:{listStyleType:"none"},className:"row"},l.a.createElement("li",null,l.a.createElement(y,{icon:"fab fa-github",link:"https://github.com/vermakartik"})),l.a.createElement("li",null,l.a.createElement(y,{icon:"fab fa-codepen",link:"https://codepen.io/simClev/"})),l.a.createElement("li",null,l.a.createElement(y,{icon:"fab fa-linkedin-in",link:"https://www.linkedin.com/in/kartik-verma/"}))))),l.a.createElement("div",{className:"col-12 col-md-4 text-center"},l.a.createElement("img",{src:L.a,style:{width:"164px",height:"164px",borderRadius:"50%",objectFit:"cover",border:"3px solid white"}})))),l.a.createElement("div",{className:"col-0 col-md-1"})))))}}]),t}(l.a.Component),P=function(e){var t=e.articleURL,a=e.item;return l.a.createElement(f.b,{to:t,style:{textDecoration:"none"}},l.a.createElement(O,{article:a}))},_=function(e){var t=e.blogList,a=e.url;return l.a.createElement("div",{className:"container-fluid"},t.map(function(e,t){var n=e.title.split(" ").join("-"),c="".concat(a,"/").concat(n);return console.log(c),l.a.createElement(P,{key:t,articleURL:c,item:e})}))},M=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={isLoading:!1,blogList:[]},a.fetch=Object(i.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({isLoading:!0}),e.next=3,D.a.get(b+"/posts");case 3:t=e.sent,console.log(t),a.setState({isLoading:!1}),a.setState({blogList:t.data.hits});case 7:case"end":return e.stop()}},e)})),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){var e=this,t=this.props.match;return console.log(t),!1===this.state.isLoading?l.a.createElement("div",null,l.a.createElement(g.b,{exact:!0,path:t.url,component:function(){return l.a.createElement(_,{blogList:e.state.blogList,url:t.url})}}),l.a.createElement(g.b,{path:t.url+"/:id",component:T})):l.a.createElement(j,null)}}]),t}(l.a.Component),W=(a(527),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row pt-2 pb-2 pt-md-5 pb-md-5",style:{backgroundColor:"#d3d3d3"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4 col-12 text-md-right text-center"},l.a.createElement("img",{className:"profile-image",src:L.a})),l.a.createElement("div",{className:"col-md-8 col-12 text-md-left text-center"},l.a.createElement("span",{className:"align-bottom about-title"},"About Me"))))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row pt-4"},l.a.createElement("div",{className:"col-0 col-md-2"}),l.a.createElement("div",{className:"col-12 col-md-8"},l.a.createElement(w,null)),l.a.createElement("div",{className:"col-0 col-md-2"}))))}}]),t}(l.a.Component)),z=a(29),R=a(19),B=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:""},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row mt-md-5 mt-3"},l.a.createElement("div",{className:"col-0 col-md-4"}),l.a.createElement("div",{className:"col-12 col-md-4 bg-danger rounded-lg pt-3 pb-3"},l.a.createElement("div",{className:"text-center",style:{fontFamily:'"Fredoka One", sans-serif',fontSize:"24px",letterSpacing:"2px",textTransform:"uppercase",color:"white"}},"Login"),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"text-light",style:{fontFamily:"ubuntu, sans-serif"}},"Username"),l.a.createElement("input",{name:"username",type:"text",onChange:this.handleChange,value:this.state.username,className:"form-control",id:"username"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"text-light",style:{fontFamily:"ubuntu, sans-serif"}},"Password"),l.a.createElement("input",{name:"password",type:"password",className:"form-control",id:"password",onChange:this.handleChange,value:this.state.password})),l.a.createElement("div",{className:"text-right"},l.a.createElement("button",{type:"button",style:{border:"none",textTransform:"uppercase"},className:"rounded-lg pl-3 pr-3 pt-1 pb-1",onClick:function(t){return e.props.loginHandle(e.state.username,e.state.password,!0)}},"Submit")))),l.a.createElement("div",{className:"col-0 col-md-4"})))}}]),t}(l.a.Component),J=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("button",{className:"logout-button bg-warning",onClick:function(){e.props.loginHandle("","",!1),e.props.history.push("/posts")},style:{display:"inline-block",border:"none",borderRadius:"50%",padding:"4px 8px 4px 10px",fontSize:"20px",color:"white"}},l.a.createElement("i",{className:"fas fa-sign-out-alt"}))}}]),t}(l.a.Component),U=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.isLoggedIn?this.props.children:l.a.createElement(B,{loginHandle:this.props.loginHandle});return console.log(e),l.a.createElement("div",null,e)}}]),t}(l.a.Component),K=Object(g.g)(J),V=Object(g.g)(function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",text:"",type:"",author:"",backColor:"#ffffff",publishDate:Date.now()},a.onChange=function(e){a.setState(Object(R.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(i.a)(s.a.mark(function e(t){var n,l,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=Date.now(),a.setState({publishDate:n}),l=k(),c={},c=l?Object(z.a)({},a.state,{user:l}):Object(z.a)({},a.state),console.log(a.state),D.a.post(b+"/posts",c).then(function(e){console.log(e),a.props.history.replace("/admin/edit/"+a.state.title.split(" ").join("-"))});case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row pb-4"},l.a.createElement("div",{className:"col-md-1 col-0"}),l.a.createElement("div",{className:"col-md-10 col-12"},l.a.createElement("div",{style:{fontFamily:'"Fredoka One", "sans-serif"',fontSize:"24px"},className:"pt-2 pl-0 pb-2"},"New Article"),l.a.createElement("form",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-12 col-md-6"},l.a.createElement("label",{className:"font-weight-bold"},"Post Title"),l.a.createElement("input",{className:"form-control",type:"text",name:"title",value:this.state.title,onChange:this.onChange})),l.a.createElement("div",{className:"form-group col-12 col-md-6"},l.a.createElement("label",{className:"font-weight-bold"},"Post Author"),l.a.createElement("input",{className:"form-control",type:"text",name:"author",value:this.state.author,onChange:this.onChange}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Post Type"),l.a.createElement("input",{className:"form-control",type:"text",name:"type",value:this.state.type,onChange:this.onChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Post Text"),l.a.createElement("textarea",{className:"form-control",type:"text",name:"text",value:this.state.text,onChange:this.onChange,rows:"20",cols:"50"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Background color"),l.a.createElement("input",{className:"form-control",type:"color",name:"backColor",value:this.state.backColor,onChange:this.onChange,rows:"20",cols:"50"})),l.a.createElement("button",{type:"button",className:"border-0 pt-1 pb-1 pl-3 pr-3 rounded-sm bg-primary text-light",onClick:this.onSubmit},"Submit"))),l.a.createElement("div",{className:"col-1 col-0"})),l.a.createElement("div",{className:"links-position"},l.a.createElement(f.b,{to:"/admin"},l.a.createElement("span",{className:"text-top"},l.a.createElement("button",{className:"new-button list-button shadow-sm ml-1 mr-1",style:{backgroundColor:"#00897b"}},l.a.createElement("i",{class:"fas fa-clipboard-list"})))),l.a.createElement(K,{loginHandle:this.props.loginHandle})))}}]),t}(l.a.Component)),q=(a(112),a(63)),G=a.n(q),Y=Object(g.g)(function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={_id:"",title:"",text:"",type:"",author:"",backColor:"",publishDate:""},a.fetch=function(){var e=Object(i.a)(s.a.mark(function e(t){var n,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,D.a.get(b+"/posts/"+t);case 3:n=e.sent,l=n.data.data,a.setState({_id:l._id,title:l.title,text:l.text,type:l.type,author:l.author,backColor:l.backColor,publishDate:l.publishDate}),console.log(a.state);case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onChange=function(e){console.log("changed..."+e.target.name+" > "+e.target.value),a.setState(Object(R.a)({},e.target.name,e.target.value))},a.onSubmit=function(){var e=Object(i.a)(s.a.mark(function e(t){var n,l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("called update state"),console.log(a.state),n=k(),l={},l=n?Object(z.a)({},a.state,{user:n}):Object(z.a)({},a.state),console.log("***UserInfo***"),console.log(l),D.a.post(b+"/posts/save",l).then(function(e){console.log(e),a.props.history.replace("/admin")});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("called ======"),this.fetch(this.props.match.params.name)}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row pb-4"},l.a.createElement("div",{className:"col-md-1 col-0"}),l.a.createElement("div",{className:"col-md-10 col-12"},l.a.createElement("div",{style:{fontFamily:'"Fredoka One", "sans-serif"',fontSize:"24px"},className:"pt-2 pl-0 pb-2"},"Edit"),l.a.createElement("form",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-12 col-md-6"},l.a.createElement("label",{className:"font-weight-bold"},"Post Title"),l.a.createElement("input",{className:"form-control",type:"text",name:"title",value:this.state.title,onChange:this.onChange})),l.a.createElement("div",{className:"form-group col-12 col-md-6"},l.a.createElement("label",{className:"font-weight-bold"},"Post Author"),l.a.createElement("input",{className:"form-control",type:"text",name:"author",value:this.state.author,onChange:this.onChange}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Post Type"),l.a.createElement("input",{className:"form-control",type:"text",name:"type",value:this.state.type,onChange:this.onChange})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"form-group col-md-6 col-12"},l.a.createElement("label",{className:"font-weight-bold"},"Post Text"),l.a.createElement("textarea",{className:"form-control",type:"text",name:"text",value:this.state.text,onChange:this.onChange,rows:"20",cols:"50"})),l.a.createElement("div",{className:"border rounded col-md-6 col-12"},l.a.createElement("div",{className:"p-0 m-0",style:{maxHeight:"34em",overflow:"scroll",wordBreak:"break-word"}},l.a.createElement(G.a,{source:this.state.text,renderers:{code:H}})))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Background color"),l.a.createElement("input",{className:"form-control",type:"color",name:"backColor",value:this.state.backColor,onChange:this.onChange,rows:"20",cols:"50"})),l.a.createElement("button",{type:"button",className:"border-0 pt-1 pb-1 pl-3 pr-3 rounded-sm bg-primary text-light",onClick:this.onSubmit},"Submit"))),l.a.createElement("div",{className:"col-1 col-0"})),l.a.createElement("div",{className:"links-position"},l.a.createElement(f.b,{to:"/admin/new"},l.a.createElement("button",{className:"new-button shadow-sm ml-1 mr-1"},l.a.createElement("i",{className:"fas fa-plus"})," ",l.a.createElement("span",{className:"pl-1",style:{fontWeight:"bold"}},"NEW"))),l.a.createElement(f.b,{to:"/admin"},l.a.createElement("span",{className:"text-top"},l.a.createElement("button",{className:"new-button list-button shadow-sm ml-1 mr-1",style:{backgroundColor:"#00897b"}},l.a.createElement("i",{class:"fas fa-clipboard-list"})))),l.a.createElement(K,{loginHandle:this.props.loginHandle})))}}]),t}(l.a.Component)),$=(a(528),function(e){var t=e.match,a=e.loginHandle;return l.a.createElement("div",{className:"links-position"},l.a.createElement(f.b,{to:t.url+"/new"},l.a.createElement("button",{className:"new-button shadow-sm ml-1 mr-1"},l.a.createElement("i",{className:"fas fa-plus"})," ",l.a.createElement("span",{className:"pl-1",style:{fontWeight:"bold"}},"NEW"))),l.a.createElement(K,{loginHandle:a}))}),Q=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={articleList:[]},a.fetch=function(){D.a.get(b+"/posts").then(function(e){var t=e.data.hits;a.setState({articleList:t}),console.log(t)})},a.handleDelete=function(e){var t,n=k();t=n?{_id:a.state.articleList[e]._id,user:n}:{_id:a.state.articleList[e]._id},D.a.post(b+"/posts/delete",t).then(function(e){console.log(e),a.fetch()})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"render",value:function(){var e=this,t=this.props.match,a=this.state.articleList;return console.log(a),l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row bg-light"},l.a.createElement("div",{style:{fontFamily:'"Fredoka One", "sans-serif"',fontSize:"24px"},className:"pl-md-4 pt-md-5 pl-2 pt-3"},"Article List")),l.a.createElement("div",{className:"row"},this.state.articleList.map(function(a,n){return l.a.createElement("div",{className:"col-md-4 col-12 mt-3 mb-3"},l.a.createElement("div",{className:"row m-1 border rounded-lg text-dark"},l.a.createElement("div",{className:"col-10 pt-2 pb-2"},l.a.createElement(f.b,{to:t.url+"/edit/"+a.title.split(" ").join("-")},l.a.createElement("div",{className:"text-dark"},l.a.createElement("span",{className:"font-weight-bold"},"Title: "),a.title," ",l.a.createElement("br",null),l.a.createElement("span",{className:"font-weight-bold"},"Date: "),N(a.publishDate)))),l.a.createElement("div",{className:"col-2"},l.a.createElement("span",{className:"text-middle"},l.a.createElement("button",{onClick:function(){return e.handleDelete(n)},className:"delete-article-button"},l.a.createElement("i",{className:"far fa-trash-alt"}))))))}))),l.a.createElement($,this.props))}}]),t}(l.a.Component),X=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.match,n=t.isLoggedIn;return console.log(n),console.log(a),l.a.createElement("div",{className:"container-fluid"},l.a.createElement(U,{loginHandle:this.props.loginHandle,isLoggedIn:n},l.a.createElement(g.b,{path:a.url,exact:!0,component:function(){return l.a.createElement(Q,{match:a,loginHandle:e.props.loginHandle})}}),l.a.createElement(g.b,Object.assign({path:a.url+"/new",component:function(t){return l.a.createElement(V,{loginHandle:e.props.loginHandle})}},this.props)),l.a.createElement(g.b,{path:a.url+"/edit/:name",component:function(t){return l.a.createElement(Y,Object.assign({loginHandle:e.props.loginHandle},t))}})))}}]),t}(l.a.Component),Z=a(120),ee=a.n(Z),te=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"nav_container"},l.a.createElement("div",{className:"nav_image_container"},l.a.createElement(f.b,{to:"/about",style:{textDecoration:"none"}},l.a.createElement("div",{className:"nav_link"},"About")),l.a.createElement(f.b,{to:"/posts"},l.a.createElement("img",{src:ee.a,className:"nav_image"})))),l.a.createElement(g.b,{path:"/posts",component:M}),l.a.createElement(g.b,{path:"/about",component:W}),l.a.createElement(g.a,{from:"/",to:"/posts"}),l.a.createElement("div",{className:"container-fluid text-center"},l.a.createElement("div",{className:"pt-4 pb-3",style:{fontFamily:'"consolas", "roboto-mono"'}},l.a.createElement("div",null,"Inspired from ",l.a.createElement("a",{href:"https://ines.io"},"ines.io")),"\xa9 2019 KARTIK VERMA . ",l.a.createElement(f.b,{to:"/about",style:{color:"black"}},"About")," . ",l.a.createElement(f.b,{to:"/posts",style:{color:"black"}},"Posts"),l.a.createElement("div",{className:"pt-4"},l.a.createElement("ul",{style:{listStyleType:"none",clear:"both",display:"inline-block"}},l.a.createElement("li",{style:{display:"inline",float:"left"}},l.a.createElement(y,{icon:"fab fa-github",link:"https://github.com/vermakartik"})),l.a.createElement("li",{style:{float:"left"}},l.a.createElement(y,{icon:"fab fa-codepen",link:"https://codepen.io/simClev/"})),l.a.createElement("li",{style:{float:"left"}},l.a.createElement(y,{icon:"fab fa-linkedin-in",link:"https://www.linkedin.com/in/kartik-verma/"})),l.a.createElement("li",{style:{float:"left"}},l.a.createElement(y,{icon:"fab fa-instagram",link:"https://www.instagram.com/its.an.engineer/"})))))))},ae=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={isLoggedIn:!!localStorage.getItem("isLoggedIn")},a.fetch=function(){var e=Object(i.a)(s.a.mark(function e(t,n){var l;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.post(b+"/users/signin",{username:t,password:n});case 2:l=e.sent,console.log(l.data.authToken),200===l.data.status?(localStorage.setItem("authToken",l.data.authToken),localStorage.setItem("username",t),localStorage.setItem("isLoggedIn",!0),a.setState({isLoggedIn:!0})):a.setState({isLoggedIn:!1}),console.log(l);case 6:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.onChangeLogin=function(e,t,n){console.log("username"+e),console.log("password"+t),!0===n?a.fetch(e,t):(localStorage.clear(),a.setState({isLoggedIn:!0}))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(f.a,null,l.a.createElement(g.d,null,l.a.createElement(g.b,{path:"/admin",component:function(t){return l.a.createElement(X,Object.assign({loginHandle:e.onChangeLogin,isLoggedIn:e.state.isLoggedIn},t))}}),l.a.createElement(g.b,{path:"/",component:te})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[121,1,2]]]);
//# sourceMappingURL=main.9c273c1c.chunk.js.map