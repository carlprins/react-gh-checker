(window["webpackJsonpreact-gh-checker"]=window["webpackJsonpreact-gh-checker"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(9),i=n.n(r),o=(n(17),n(7)),c=n.n(o),s=n(10),u=n(11),p=n(2),h=n(3),m=n(5),d=n(4),g=n(1),b=n(6),v=(n(19),function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={userInput:""},n.handleUserInput=n.handleUserInput.bind(Object(g.a)(n)),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"handleUserInput",value:function(e){var t=this,n=e.target.value;this.setState({userInput:n}),this.props.onChange(e).then((function(e){t.props.Calc()}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"InputItem"},l.a.createElement("p",null,this.props.name),l.a.createElement("input",{type:this.props.type,onChange:this.handleUserInput,value:this.state.userInput,name:this.props.name}),l.a.createElement("h2",null,this.state.userInput))}}]),t}(l.a.Component)),f=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={userInput:""},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({userInput:t}),this.props.onChange(e).then((function(e){}))}},{key:"handleSubmit",value:function(e){alert("Your favorite flavor is: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("form",null,l.a.createElement("label",null,this.props.name,l.a.createElement("select",{value:this.state.value,onChange:this.handleChange,name:this.props.name},this.props.options.map((function(e){return l.a.createElement("option",{value:e,key:1},e)})))),l.a.createElement("h2",null,this.state.userInput))}}]),t}(l.a.Component),E=(n(20),l.a.Component,n(21),[{id:1,name:"Retailer",type:"dropdown",options:[{name:"Origin Energy",key:"origin"},{name:"AGL",key:"agl"},{name:"EnergyAustralia",key:"energyaustralia"}].map((function(e){return e.name}))},{id:2,name:"Bill Start Date",type:"date",options:[]},{id:3,name:"Bill End Date",type:"date",options:[]},{id:4,name:"OpeningBalance",type:"number",options:[]},{id:5,name:"ClosingBalance",type:"number",options:[]},{id:4,name:"Period Start Date",type:"date",options:[]},{id:5,name:"Period End Date",type:"date",options:[]},{id:6,name:"Peak Usage",type:"number",options:[]},{id:7,name:"Peak Rate",type:"number",options:[]}]),y=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(){var e=Object(u.a)(c.a.mark((function e(t){var a,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.value,l=t.target.name,console.log(a),console.log(l),n.setState(Object(s.a)({},l,a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={billTotal:0,OpeningBalance:0,ClosingBalance:0,Retailer:""},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.calcFields=n.calcFields.bind(Object(g.a)(n)),n}return Object(b.a)(t,e),Object(h.a)(t,[{key:"calcFields",value:function(){var e=this.state.ClosingBalance-this.state.OpeningBalance;this.setState({billTotal:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"FormContainer"},l.a.createElement("div",{className:"FormHeading"},l.a.createElement("h1",null,this.props.formTitle),E.map((function(t){return"number"===t.type?l.a.createElement(v,{name:t.name,type:t.type,onChange:e.handleChange,Calc:e.calcFields}):"dropdown"===t.type?l.a.createElement(f,{name:t.name,options:t.options,onChange:e.handleChange}):void 0}))),l.a.createElement("div",{className:"CalcFields"},l.a.createElement("h2",null,"Calculated Fields from this form"),l.a.createElement("p",null,"Opening Balance"),l.a.createElement("p",null,this.state.OpeningBalance),l.a.createElement("p",null,"Closing Balance"),l.a.createElement("p",null,this.state.ClosingBalance),l.a.createElement("p",null,"Calc Bill Total"),l.a.createElement("p",null,this.state.billTotal),l.a.createElement("p",null,"Selected Retailer"),l.a.createElement("p",null,this.state.Retailer),l.a.createElement("input",{className:"Button",type:"button",onClick:this.calcFields,value:"Calc now"})),l.a.createElement("div",null))}}]),t}(l.a.Component);n(22);var C=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(y,{formTitle:"Bill Checker"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.141a3922.chunk.js.map