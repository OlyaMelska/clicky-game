(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),i=a(2),l=a.n(i),n=(a(14),function(){return r.a.createElement("header",{id:"header"},r.a.createElement("h1",null,"Clicky Game!"),r.a.createElement("h3",null,"Click on an image to earn points, but dont click on any more than once!"))}),s=a(3),o=a(4),m=a(6),g=a(5),u=a(7),h=(a(15),function(e){return r.a.createElement("nav",{id:"nav",className:"sticky-top "},r.a.createElement("h2",null,"Click on ART!"),r.a.createElement("h2",{id:"correctly"},"Click an image to begin"),r.a.createElement("h2",{id:"score"},"Score: ",e.score),r.a.createElement("h2",{id:"total-score"},"Highest Score: ",e.bestScore))}),d=(a(16),function(e){return r.a.createElement("div",{className:"fixed-size"},r.a.createElement("img",{src:e.src,alt:e.alt,className:"img-fluid img frame",isClicked:e.isClicked}))}),k=[{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/1.jpg?raw=true",alt:"Salvadore Dali's The Persistence of Memory",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/2.jpg?raw=true",alt:"Salvadore Dali's painting",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/3.jpg?raw=true",alt:"Soft Construction with Boiled Beans",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/4.jpg?raw=true",alt:"Apparition of Face and Fruit Dish on a Beach",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/5.jpg?raw=true",alt:"Mona lisa by Leonardo Da Vinci ",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/6.jpg?raw=true",alt:"Leonardo Da Vinci's painting",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/7.jpg?raw=true",alt:"Lady with an Ermine by Leonardo Da Vinci",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/8.jpg?raw=true",alt:"Leonardo Da Vinci's painting",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/9.jpg?raw=true",alt:"Famous painting",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/10.jpg?raw=true",alt:"Lady with a dog painting",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/11.jpg?raw=true",alt:"The Starry Night by Van Gogh",isClicked:!1},{src:"https://github.com/OlyaMelska/clicky-game/blob/master/src/images/12.jpg?raw=true",alt:"Van Gogh's self portrait painting",isClicked:!1}],b=(a(17),function(e){function t(){var e,a;Object(s.a)(this,t);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={score:0,bestScore:0,imgArr:k},a.handleClickCount=function(){console.log("HERE"),a.ramdomizeImages(),a.setState({score:a.state.score+1})},a.handleTextChange=function(){},a.ramdomizeImages=function(){for(var e=[];e.length<k.length;){var t=Math.floor(Math.random()*k.length);-1===e.indexOf(t)&&e.push(k[t])}console.log("shuffled Array",e),a.setState({imgArr:e})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.ramdomizeImages()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h,{score:this.state.score,bestScore:this.state.bestScore}),r.a.createElement("div",{className:"flex"},this.state.imgArr.map(function(t){return r.a.createElement(d,{key:t.src,src:t.src,alt:t.alt,isClicked:t.isClicked,onClick:e.handleClickCount})})))}}]),t}(r.a.Component)),p=(a(18),function(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("p",null,"copyright \xa9 2019"))});var y=function(){return r.a.createElement("div",null,r.a.createElement(n,null),r.a.createElement(b,null),r.a.createElement(p,null))};l.a.render(r.a.createElement(y,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.9545e796.chunk.js.map