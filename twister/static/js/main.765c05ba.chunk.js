(this.webpackJsonptwister=this.webpackJsonptwister||[]).push([[0],Array(24).concat([function(t,e,n){t.exports=n.p+"static/media/BlueFootLeft.370e17c6.png"},function(t,e,n){t.exports=n.p+"static/media/BlueFootRight.c4b3d312.png"},function(t,e,n){t.exports=n.p+"static/media/BlueHandLeft.84637e8d.png"},function(t,e,n){t.exports=n.p+"static/media/BlueHandRight.697ddf11.png"},function(t,e,n){t.exports=n.p+"static/media/GreenFootLeft.d08f3fcf.png"},function(t,e,n){t.exports=n.p+"static/media/GreenFootRight.eac71a0e.png"},function(t,e,n){t.exports=n.p+"static/media/GreenHandLeft.9e4c7f2f.png"},function(t,e,n){t.exports=n.p+"static/media/GreenHandRight.8d85ed72.png"},function(t,e,n){t.exports=n.p+"static/media/RedFootLeft.acca21ef.png"},function(t,e,n){t.exports=n.p+"static/media/RedFootRight.fe0185cb.png"},function(t,e,n){t.exports=n.p+"static/media/RedHandLeft.0b8c3b4b.png"},function(t,e,n){t.exports=n.p+"static/media/RedHandRight.b05f30ae.png"},function(t,e,n){t.exports=n.p+"static/media/YellowFootLeft.01f8466c.png"},function(t,e,n){t.exports=n.p+"static/media/YellowFootRight.009e8b37.png"},function(t,e,n){t.exports=n.p+"static/media/YellowHandLeft.835fbc9d.png"},function(t,e,n){t.exports=n.p+"static/media/YellowHandRight.a6a5aa30.png"},,,,,,function(t,e,n){t.exports=n(58)},,,,,function(t,e,n){},,,function(t,e,n){},,,,,function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(9),o=n.n(r),s=(n(50),n(42)),c=n(10),l=n(11),u=n(12),p=n(14),m=n(13),d=n(19),f=n(44),g=n(20),h=n(23),b=n.n(h),R=n(24),x=n.n(R),v=n(25),E=n.n(v),w=n(26),F=n.n(w),H=n(27),L=n.n(H),B=n(28),k=n.n(B),y=n(29),j=n.n(y),O=n(30),G=n.n(O),S=n(31),Y=n.n(S),T=n(32),I=n.n(T),C=n(33),M=n.n(C),A=n(34),J=n.n(A),W=n(35),N=n.n(W),$=n(36),q=n.n($),z=n(37),D=n.n(z),K=n(38),P=n.n(K),Q=n(39),U=n.n(Q),V=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={string:["Blue Foot Left","Blue Foot Right","Blue Hand Left","Blue Hand Right","Green Foot Left","Green Foot Right","Green Hand Left","Green Hand Right","Red Foot Left","Red Foot Right","Red Hand Left","Red Hand Right","Yellow Foot Left","Yellow Foot Right","Yellow Hand Left","Yellow Hand Right"],img:[x.a,E.a,F.a,L.a,k.a,j.a,G.a,Y.a,I.a,M.a,J.a,N.a,q.a,D.a,P.a,U.a]},a}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:this.state.img[this.props.current],alt:this.state.string[this.props.current]}),i.a.createElement("br",null),i.a.createElement("h2",null,this.props.spinning?"-":this.state.string[this.props.current]))}}]),n}(i.a.Component),X=function(t){Object(p.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={current:a.getRandomInt(15),spinning:!1,times:0,maxTimes:30},a.spin=a.spin.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"getRandomInt",value:function(t){return Math.floor(Math.random()*Math.floor(t))}},{key:"startSpin",value:function(){var t=this;this.setState({times:0}),setTimeout((function(){t.spin()}),200)}},{key:"spin",value:function(){var t=this;this.state.times<=this.state.maxTimes?setTimeout((function(){t.setState({current:t.getRandomInt(15),times:t.state.times+1,spinning:!0}),t.spin()}),10*this.state.times):this.setState({spinning:!1})}},{key:"render",value:function(){var t=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{bg:"light",expand:"lg"},i.a.createElement(d.a.Brand,null,"Twister spinner")),i.a.createElement(g.a,null,i.a.createElement(g.a.Body,null,i.a.createElement(V,{current:this.state.current,spinning:this.state.spinning}),i.a.createElement("br",null),i.a.createElement(f.a,{disabled:this.state.spinning,variant:"primary",onClick:function(){return t.startSpin()}},"Spin"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(b.a,{disabled:this.state.spinning,value:this.state.maxTimes,onChange:function(e){return t.setState({maxTimes:parseInt(e.target.value)})},min:0,max:40,step:10}))))}}]),n}(i.a.Component),Z=n(43);n(53);var _=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(Z.a,{basename:"/twister"},i.a.createElement(s.a,null,i.a.createElement(X,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(57);o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}]),[[45,1,2]]]);
//# sourceMappingURL=main.765c05ba.chunk.js.map