(this["webpackJsonpimpairment-calc"]=this["webpackJsonpimpairment-calc"]||[]).push([[0],{41:function(A,e,t){},50:function(A,e,t){"use strict";t.r(e);var r=t(0),n=t.n(r),c=t(12),B=t.n(c),s=(t(41),t(34)),g=t(27),j=t(28),a=t(15),C=t(36),u=t(35),D=t(54),w=t(59),b=t(60),I=t(55),Q=t(29),d=t(58),i=t(56),o=t(57),l=t.p+"static/media/github.88b0a55c.png",v=t(23),O=t(4);var E=function(A){Object(C.a)(t,A);var e=Object(u.a)(t);function t(A){var r;return Object(g.a)(this,t),(r=e.call(this,A)).updateEntry=function(A){var e=A.target.value;if(2===e.length)if(r.isNumber(e)){var t=r.state.percents;t.push(e),A.preventDefault(),r.setState({entry:"",percents:t,resultText:r.calculate(t)})}else alert("Must be a number between 01 and 99."),A.preventDefault(),r.setState({entry:""});else A.preventDefault(),r.setState({entry:A.target.value})},r.removeItem=function(A){var e=r.state.percents;e.splice(A,1);var t=r.state.resultTextDefault;0!==e.length&&(t=r.calculate(e)),r.setState({percents:e,entry:"",resultText:t}),r.setInputFocus()},r.state={entry:"",percents:[],total:0,resultText:"Start entering numbers",resultTextDefault:"Start entering numbers"},r.setInputFocus=r.setInputFocus.bind(Object(a.a)(r)),r}return Object(j.a)(t,[{key:"setInputFocus",value:function(){this.myInputRef.focus()}},{key:"clearList",value:function(){this.setState({percents:[],entry:"",resultText:this.state.resultTextDefault}),this.setInputFocus()}},{key:"calculate",value:function(A){var e=0;return A.forEach((function(A,t){e+=(100-e)*(parseInt(A,10)/100)})),Math.round(e)+"% impairment (2DP "+Math.round(100*e)/100+"%)"}},{key:"isNumber",value:function(A){var e=["0","1","2","3","4","5","6","7","8","9"];return-1!==e.indexOf(A[0])&&-1!==e.indexOf(A[1])}},{key:"calculateRows",value:function(){var A=this;return Object(O.jsx)(w.a,{children:this.state.percents.map((function(e,t){return Object(O.jsxs)(w.a.Item,{children:[e,Object(O.jsx)("span",{className:"float-end",children:Object(O.jsx)(D.a,{onClick:function(){return A.removeItem(t)}})})]},t)}))})}},{key:"render",value:function(){var A=this;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{}),Object(O.jsx)(b.a,{children:Object(O.jsxs)(b.a.Body,{children:[Object(O.jsx)(I.a,{children:Object(O.jsxs)(Q.a,{children:[Object(O.jsx)("p",{children:this.state.resultText})," "]})}),Object(O.jsxs)(I.a,{children:[Object(O.jsx)(Q.a,{sm:8,children:Object(O.jsx)(d.a,{children:Object(O.jsxs)(d.a.Group,{controlId:"formPercent",children:[Object(O.jsx)(d.a.Control,{type:"text",inputMode:"numeric",autoFocus:!0,placeholder:"eg 15,05,10",onChange:this.updateEntry,value:this.state.entry,ref:function(e){return A.myInputRef=e}})," "," "]})})}),Object(O.jsx)(Q.a,{sm:4,children:Object(O.jsx)(i.a,{variant:"secondary",onClick:function(){return A.clearList()},children:"Clear"})})]}),Object(O.jsx)("p",{}),Object(O.jsx)(I.a,{children:Object(O.jsx)(Q.a,{children:this.calculateRows()})}),Object(O.jsx)("p",{}),Object(O.jsx)(o.a,{variant:"dark",children:"Impairment Calculator"}),"The calculator will add percentages together to give you combined percentages based on the sum of:",Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"First injury%"}),Object(O.jsx)("li",{children:"(100 - First injury%) x % Second injury% = Second injury total%"}),Object(O.jsx)("li",{children:"(100 - First injury% - Second injury total%) x Third injury% = Third injury total%"}),Object(O.jsx)("li",{children:"and so on..."})]}),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("br",{}),Object(O.jsxs)("p",{children:[Object(O.jsxs)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.linkedin.com/in/rodkm/",children:[Object(O.jsx)(v.a,{style:{width:24},src:"data:image/png;base64,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"})," Developer"]})," | ",Object(O.jsxs)("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/rod-meaney/impairment-calc",children:[Object(O.jsx)(v.a,{style:{width:24},src:l})," Code"]})]})]})]})})]})}}]),t}(n.a.Component),f=t(32),P=t(7);var h=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(f.a,{basename:"/impairment",children:Object(O.jsx)(s.a,{children:Object(O.jsx)(P.c,{children:Object(O.jsx)(P.a,{path:"/",children:Object(O.jsx)(E,{})})})})})})},x=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,61)).then((function(e){var t=e.getCLS,r=e.getFID,n=e.getFCP,c=e.getLCP,B=e.getTTFB;t(A),r(A),n(A),c(A),B(A)}))};t(49);B.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(h,{})}),document.getElementById("root")),x()}},[[50,1,2]]]);
//# sourceMappingURL=main.240c99c5.chunk.js.map