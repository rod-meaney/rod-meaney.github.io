(this.webpackJsonptremor=this.webpackJsonptremor||[]).push([[0],{44:function(e,t,n){e.exports=n(57)},49:function(e,t,n){},52:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(19),o=n.n(i),l=(n(49),n(40)),c=n(36),s=n(37),u=n(43),m=n(41),h=n(32),d=n(17),v=n(14),E=n(27),w=n(11);function g(e){return null!=e?e.toFixed(2):0}function f(){return window.location.origin.indexOf("3000")>-1||window.location.origin.indexOf("amazonaws.com")>-1}var p=function(e){var t=e.eventOr,n=e.eventMo;return r.a.createElement(E.a,null,r.a.createElement(d.a,null,r.a.createElement(d.a.Header,null,r.a.createElement(E.a.Toggle,{as:v.a,variant:"link",eventKey:"1"},"Device information")),r.a.createElement(E.a.Collapse,{eventKey:"1"},r.a.createElement(d.a.Body,null,r.a.createElement("p",null,"The below is showing your devices orientation, which is used to play this game. If the numbers are not changing as you move the device, the game will not work for you."),r.a.createElement(w.a,null,r.a.createElement(w.a.Item,null,"alpha",r.a.createElement("span",{className:"float-right"},function(){try{return g(t.alpha)}catch(e){return 0}}())),r.a.createElement(w.a.Item,null,"beta",r.a.createElement("span",{className:"float-right"},function(){try{return g(t.beta)}catch(e){return 0}}())),r.a.createElement(w.a.Item,null,"gamma",r.a.createElement("span",{className:"float-right"},function(){try{return g(t.gamma)}catch(e){return 0}}())),r.a.createElement(w.a.Item,null,"Acc X",r.a.createElement("span",{className:"float-right"},function(){try{return g(n.acceleration.x)}catch(e){return 0}}())),r.a.createElement(w.a.Item,null,"Acc Y",r.a.createElement("span",{className:"float-right"},function(){try{return g(n.acceleration.y)}catch(e){return 0}}())),r.a.createElement(w.a.Item,null,"Acc Z",r.a.createElement("span",{className:"float-right"},function(){try{return g(n.acceleration.z)}catch(e){return 0}}())),r.a.createElement(w.a.Item,null,"Acc Interval",r.a.createElement("span",{className:"float-right"},function(){try{return g(n.interval)}catch(e){return 0}}())))))))},y=n(42),b=n(22),O=function(e){var t=e.canPlay,n=e.handleOrientation,i=Object(a.useState)(r.a.createElement(b.a,{variant:"info"},"Your device needs to approve access to orientation events for this website. Click the 'Device orientation access' button.")),o=Object(y.a)(i,2),l=o[0],c=o[1];return r.a.createElement(r.a.Fragment,null,t?"":r.a.createElement(v.a,{onClick:function(){window.DeviceOrientationEvent?"function"===typeof window.DeviceMotionEvent.requestPermission?window.DeviceOrientationEvent.requestPermission().then((function(e){"granted"===e?window.addEventListener("deviceorientation",n):c(r.a.createElement(b.a,{variant:"danger"},r.a.createElement("p",null,"You need to 'Allow' access to Motion and Orientation for this application to work. You will need to close and re-open the browser to test again.")))})):c(r.a.createElement(b.a,{variant:"warning"},r.a.createElement("p",null,"It appears your device has orientation events, please check the following."),r.a.createElement("ul",null,r.a.createElement("li",null,"The url is using https - orientation requires this;"),r.a.createElement("li",null,"Older iPhones require settings updated. Under Safari in settings is 'Motion and Orientation Access';"),r.a.createElement("li",null,"You may not be able to use the App. Some browsers have this setting even though they are not on a device with an accelerometer;")),r.a.createElement("p",null,"Testing on all devices and browsers has not been done. Feel free to raise an issue with device and browser"))):c(r.a.createElement(b.a,{variant:"danger"},r.a.createElement("p",null,"This device has no orientation event. Try another device.")))},variant:"dark"},"Device orientation access"),r.a.createElement("br",null),r.a.createElement("br",null),t?"":l)},k=function(e){e.x_history;Object(a.useEffect)((function(){window.google.charts.load("current",{packages:["corechart","line"]})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"base_chart"}),r.a.createElement(v.a,{variant:"secondary",onClick:function(){return function(e,t,n){var a=new window.google.visualization.DataTable;a.addColumn("number","Time"),a.addColumn("number",t),a.addRows(n);var r={hAxis:{title:"Time (ms)"},vAxis:{title:t}};new window.google.visualization.LineChart(document.getElementById(e)).draw(a,r)}("base_chart","X",window.graphs)}},"Chart me"))},x=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleOrientation=function(e){a.setState({orientationEvent:e,canPlay:!0})},a.handleMotion=function(e){if(a.state.recording){var t=Date.now()-a.state.recordingStartTime;t>a.state.recordingLength?a.setState({recording:!1}):(window.graphs.push([t,e.acceleration.x]),a.setState({x_history:a.state.x_history.push(e.acceleration.x),y_history:a.state.y_history.push(e.acceleration.y),showStuff:t}))}else a.setState({motionEvent:e,canPlay:!0})},a.startRecording=function(){window.graphs=[],a.setState({recording:!0,recordingStartTime:Date.now(),x_history:[],y_history:[]})},a.buttons=function(){var e="";return a.state.canPlay&&(a.state.recording||(e=r.a.createElement(v.a,{variant:"primary",onClick:function(){return a.startRecording()}},"Start"))),e},a.state={orientationEvent:null,motionEvent:null,canPlay:f(),showOrientationDisplayComponent:!0,recording:!1,recordingStartTime:null,recordingLength:4e3,showStuff:null,x_history:[],y_history:[]},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("deviceorientation",this.handleOrientation.bind(this)),window.addEventListener("devicemotion",this.handleMotion.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("deviceorientation",this.handleOrientation.bind(this)),window.removeEventListener("devicemotion",this.handleMotion.bind(this))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{bg:"light",expand:"lg"},r.a.createElement(h.a.Brand,null,"Tremor check")),r.a.createElement(d.a,null,r.a.createElement(d.a.Body,null,this.state.canPlay?this.buttons():"",this.state.canPlay?r.a.createElement(k,{eventMo:this.state.x_history}):"",r.a.createElement("p",null,r.a.createElement("br",null),r.a.createElement(O,{canPlay:this.state.canPlay,handleOrientation:this.handleOrientation.bind(this)}),this.state.showOrientationDisplayComponent&&!f()?r.a.createElement(p,{eventOr:this.state.orientationEvent,eventMo:this.state.motionEvent}):""))))}}]),n}(r.a.Component),S=n(38),T=n(5);n(52);var C=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S.a,{basename:"/tremor"},r.a.createElement(l.a,null,r.a.createElement(T.c,null,r.a.createElement(T.a,{path:"/"},r.a.createElement(x,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(56);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.b5606490.chunk.js.map