(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={Quiz:"Quiz__Quiz--3J8Ip",QuizWrapper:"Quiz__QuizWrapper--2cJp0"}},function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz__ActiveQuiz--1xPLH",Question:"ActiveQuiz__Question--2AtZS"}},function(e,t,n){e.exports={AnswerItem:"AnswerItem__AnswerItem--FMFZL",success:"AnswerItem__success--tAKqq",error:"AnswerItem__error--27Deq"}},,,function(e,t,n){e.exports={Layout:"Layout__Layout--2C2_c"}},function(e,t,n){e.exports={AnswersList:"AnswersList__AnswersList--1WLwo"}},function(e,t,n){e.exports=n(26)},,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(11),r=n.n(i),c=(n(19),n(1)),o=n(2),u=n(4),l=n(3),w=n(5),m=n(12),h=n.n(m),d=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:h.a.Layout},s.a.createElement("main",null,this.props.children))}}]),t}(a.Component),p=n(6),v=n(7),f=n.n(v),A=n(8),Q=n.n(A),b=n(13),z=n.n(b),E=n(9),_=n.n(E),j=function(e){var t=[_.a.AnswerItem];return e.state&&t.push(_.a[e.state]),s.a.createElement("li",{className:t.join(" "),onClick:function(){return e.onAnswerClick(e.answer.id)}},e.answer.text)},k=function(e){return s.a.createElement("ul",{className:z.a.AnswersList},s.a.createElement("ul",null," ",e.answers.map(function(t,n){return s.a.createElement(j,{key:n,answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null})})," "))},q=function(e){return s.a.createElement("div",{className:Q.a.ActiveQuiz},s.a.createElement("p",{className:Q.a.Question},s.a.createElement("span",null,s.a.createElement("strong",null,e.answerNumber,"."),"\xa0",e.question),s.a.createElement("small",null," ",e.answerNumber," from ",e.quizLength," ")),s.a.createElement(k,{state:e.state,answers:e.answers,onAnswerClick:e.onAnswerClick}))},O=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={activeQuestion:0,answerState:null,quiz:[{question:"Which function is used to stop a setInterval timer?",rightAnswerId:2,id:1,answers:[{text:"clearTimer",id:1},{text:"clearInterval",id:2},{text:"stopInterval",id:3},{text:"stopTimer",id:4}]},{question:"Can multiple event handlers be added to a single element?",rightAnswerId:1,id:2,answers:[{text:"Yes",id:1},{text:"No",id:2}]}]},n.onAnswerClickHandler=function(e){if(n.state.quiz[n.state.activeQuestion].rightAnswerId===e){n.setState({answerState:Object(p.a)({},e,"success")});var t=window.setTimeout(function(){n.isQuizFinished()?console.log("Finished!"):n.setState({activeQuestion:n.state.activeQuestion+1,answerState:null}),window.clearTimeout(t)},1e3)}else n.setState({answerState:Object(p.a)({},e,"error")})},n}return Object(w.a)(t,e),Object(o.a)(t,[{key:"isQuizFinished",value:function(){return this.state.activeQuestion+1===this.state.quiz.length}},{key:"render",value:function(){return s.a.createElement("div",{className:f.a.Quiz},s.a.createElement("div",{className:f.a.QuizWrapper},s.a.createElement("h1",null," Answer the questions "),s.a.createElement(q,{answers:this.state.quiz[this.state.activeQuestion].answers,question:this.state.quiz[this.state.activeQuestion].question,onAnswerClick:this.onAnswerClickHandler,quizLength:this.state.quiz.length,answerNumber:this.state.activeQuestion+1,state:this.state.answerState})))}}]),t}(a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement(d,null,s.a.createElement(O,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,2,1]]]);
//# sourceMappingURL=main.6218680b.chunk.js.map