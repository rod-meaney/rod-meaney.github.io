(this["webpackJsonpreact-learning"]=this["webpackJsonpreact-learning"]||[]).push([[0],{50:function(e,t,a){e.exports=a(63)},55:function(e,t,a){},56:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(27),c=a.n(l),i=(a(55),a(19)),o=a(20),s=a(23),m=a(21),u=a(25),h=a(48),d=a(41),p=a(30),E=a(13),f=a(11),b=a(26),w=a(14),y=a(18),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={title:e.title,email:e.email,firstname:e.firstname,lastname:e.lastname,id:e.id},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(E.a.Item,null,this.state.title," ",this.state.firstname," ",this.state.lastname,r.a.createElement("span",{className:"float-right"},r.a.createElement(b.a,{color:"red",size:30,onClick:function(){return e.props.delete(e.state.id)}},"del")))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={users:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.randomuser.me/?results=20").then((function(e){return e.json()})).then((function(t){var a=t.results.map((function(t,a){return r.a.createElement(g,{key:a,title:t.name.title,email:t.email,firstname:t.name.first,lastname:t.name.last,id:"".concat(a),delete:e.deleteItem.bind(e)})}));e.setState({users:a})}))}},{key:"deleteItem",value:function(e){this.setState({users:this.state.users.filter((function(t){return t.props.id!==e}))})}},{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(f.a.Body,null,r.a.createElement(E.a,null,this.state.users.map((function(e){return e})))))}}]),t}(r.a.Component),j=(a(56),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(f.a.Body,null))}}]),t}(r.a.Component)),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleResize=function(e){a.setState({windowWith:window.innerWidth}),document.getElementById("updatemeplease").innerHTML=window.innerWidth},a.handleMotion=function(e){document.getElementById("arewethere").innerHTML="Here",a.setState({acc_x:e.acceleration.x,acc_y:e.acceleration.y,acc_z:e.acceleration.z})},a.state={acc_x:0,acc_y:0,acc_z:0,windowWith:window.innerWidth},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("devicemotion",this.handleMotion),window.addEventListener("resize",this.handleResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("devicemotion",this.handleMotion),window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(f.a.Body,null,r.a.createElement(E.a,null,r.a.createElement(E.a.Item,null,"Window width (no react)",r.a.createElement("span",{className:"float-right"},r.a.createElement("span",{id:"updatemeplease"},this.state.windowWith))),r.a.createElement(E.a.Item,null,"Window width",r.a.createElement("span",{className:"float-right"},this.state.windowWith)),r.a.createElement(E.a.Item,null,"X",r.a.createElement("span",{id:"acc_x",className:"float-right"},this.state.acc_x)),r.a.createElement(E.a.Item,null,"Y",r.a.createElement("span",{className:"float-right"},this.state.acc_y)),r.a.createElement(E.a.Item,null,"Z",r.a.createElement("span",{className:"float-right"},this.state.acc_z)),r.a.createElement(E.a.Item,null,"Triggering",r.a.createElement("span",{className:"float-right"},r.a.createElement("span",{id:"arewethere"}))))))}}]),t}(r.a.Component),I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,"Basic Home Page"),r.a.createElement(f.a.Img,{variant:"top",src:"https://i.pinimg.com/236x/5c/2b/d9/5c2bd965c4d91122de012e636496e60c--swimming-photography-summer-photography.jpg",style:{width:"15rem"}}),r.a.createElement("p",null,r.a.createElement("br",null),"Just some fun for training",r.a.createElement("br",null),"Environment is: ",r.a.createElement("b",null,"Deployed")),r.a.createElement(w.b,{to:"/temp-play"},r.a.createElement(b.a,{variant:"primary"},"Play time"))," ",r.a.createElement(w.b,{to:"/fetching"},r.a.createElement(b.a,{variant:"primary"},"Fetching stuff"))))}}]),t}(r.a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,{basename:"/learn"},r.a.createElement(h.a,null,r.a.createElement(d.a,{bg:"light",expand:"lg"},r.a.createElement(d.a.Brand,{as:w.b,to:"/"},"Learning!"),r.a.createElement(p.a,{title:"Options",id:"basic-nav-dropdown",className:"nav-item dropdown ml-auto"},r.a.createElement(p.a.Item,{as:w.b,to:"/"},"Home"),r.a.createElement(p.a.Item,{as:w.b,to:"/temp-play"},"Play time"),r.a.createElement(p.a.Item,{as:w.b,to:"/fetching"},"Fetching"),r.a.createElement(p.a.Item,{as:w.b,to:"/accelerometer"},"Accelerometer"))),r.a.createElement(y.c,null,r.a.createElement(y.a,{path:"/fetching"},r.a.createElement(v,null)),r.a.createElement(y.a,{path:"/temp-play"},r.a.createElement(j,null)),r.a.createElement(y.a,{path:"/accelerometer"},r.a.createElement(O,null)),r.a.createElement(y.a,{path:"/"},r.a.createElement(I,null)))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(62);c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[50,1,2]]]);
//# sourceMappingURL=main.b7430efc.chunk.js.map