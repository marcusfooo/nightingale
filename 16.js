(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{136:function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(467),i=r(351);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d="MAMYDDEFDTKASDLTFSPWVEVENWKDVTTRLRAIKFALQADRDKIPGVLSDLKTNCPYSAFKRFPDKSLYSVLSKEAVIAVAQIQSASGFKRRADEKNAVSGLVSVTPTQISQSASSSAATPVGLATVKPPRESDSAFQEDTFSYAKFDDASTAFHKALAYLEGLSLRPTYRRKFEKDMNVKWGGSGSAPSGAPAGGSSGSAPPTSGSSGSGAAPTPPPNP",p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,u(t).apply(this,arguments))}var r,s,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,n["Component"]),r=t,(s=[{key:"componentDidMount",value:function(){document.querySelector("#seq1").data=d,document.querySelector("#seq2").data=d,document.querySelector("#seq3").data=d,document.querySelector("#seq4").data=d,document.querySelector("#seq5").data=d}},{key:"render",value:function(){return Object(i.a)("protvista-coloured-sequence",a.a),o.a.createElement(n.Fragment,null,o.a.createElement("h4",null,"Same Scale - different levels of zoom"),o.a.createElement("protvista-coloured-sequence",{id:"seq1",length:"223",displaystart:"1",displayend:"223",height:"10",scale:"hydrophobicity-scale"}),o.a.createElement("protvista-coloured-sequence",{id:"seq2",length:"223",height:"10",displaystart:"10",displayend:"150",scale:"hydrophobicity-scale"}),o.a.createElement("protvista-coloured-sequence",{id:"seq3",length:"223",height:"10",displaystart:"50",displayend:"70",highlightStart:"23",highlightEnd:"45",scale:"hydrophobicity-scale"}),o.a.createElement("protvista-coloured-sequence",{id:"seq4",length:"223",height:"10",displaystart:"50",displayend:"70",scale:"hydrophobicity-scale"}),o.a.createElement("protvista-coloured-sequence",{id:"seq5",length:"223",height:"10",displaystart:"203",displayend:"220",scale:"hydrophobicity-scale"}),o.a.createElement("protvista-coloured-sequence",{sequence:d,length:"223",height:"10",displaystart:"1",displayend:"4",scale:"hydrophobicity-scale"}),o.a.createElement("br",null),o.a.createElement("h4",null,"Testing Scales"),o.a.createElement("h5",null,"hydrophobicity-scale"),o.a.createElement("protvista-coloured-sequence",{sequence:d,length:"223",displaystart:"1",displayend:"100",scale:"hydrophobicity-scale"}),o.a.createElement("h5",null,"hydrophobicity-interface-scale"),o.a.createElement("protvista-coloured-sequence",{sequence:d,length:"223",displaystart:"1",displayend:"100",scale:"hydrophobicity-interface-scale"}),o.a.createElement("h5",null,"hydrophobicity-octanol-scale"),o.a.createElement("protvista-coloured-sequence",{sequence:d,length:"223",displaystart:"1",displayend:"100",scale:"hydrophobicity-octanol-scale"}),o.a.createElement("h5",null,"isoelectric-point-scale"),o.a.createElement("protvista-coloured-sequence",{sequence:d,length:"223",displaystart:"1",displayend:"100",scale:"isoelectric-point-scale",color_range:"white:0,dodgerblue:11"}),o.a.createElement("h5",null,"custom-scale"),o.a.createElement("pre",null,'"T:-2,R:-2,Y:-2,F:2,A:2,I:2,L:2"'),o.a.createElement("protvista-coloured-sequence",{sequence:d,length:"223",displaystart:"1",displayend:"100",scale:"T:-2,R:-2,Y:-2,F:2,A:2,I:2,L:2"}),o.a.createElement("h4",null,"Testing other colors"),o.a.createElement("h5",null,"hydrophobicity-scale - same colors on a wider scale"),o.a.createElement("protvista-coloured-sequence",{sequence:d,length:"223",displaystart:"1",displayend:"100",scale:"hydrophobicity-scale",color_range:"#ffdd00:-5,#0000FF:5"}),o.a.createElement("h5",null,"hydrophobicity-scale - same colors but white inzero values"),o.a.createElement("protvista-coloured-sequence",{sequence:d,length:"223",displaystart:"1",displayend:"100",scale:"hydrophobicity-scale",color_range:"#ffdd00:-2,#FFFFFF:0,#0000FF:2"}),o.a.createElement("h5",null,"hydrophobicity-scale - changing completely the color scale. "),o.a.createElement("pre",null,'"red:-3,#FFFFFF:0,#00FF00:3"'),o.a.createElement("protvista-coloured-sequence",{sequence:d,length:"223",displaystart:"1",displayend:"100",scale:"hydrophobicity-scale",color_range:"red:-3,#FFFFFF:0,#00FF00:3"}))}}])&&c(r.prototype,s),p&&c(r,p),t}();t.default=p},455:function(e){e.exports={I:-.31,L:-.56,F:-1.13,V:.07,M:-.23,P:.45,W:-1.85,H:.17,T:.14,E:-.01,Q:.58,C:-.24,Y:-.94,A:.17,S:.13,N:.42,D:-.07,R:.81,G:.01,K:.99}},456:function(e){e.exports={I:-1.12,L:-1.25,F:-1.71,V:-.46,M:-.67,P:.14,W:-2.09,H:.11,T:.25,E:.11,Q:.77,C:-.02,Y:-.71,A:.5,S:.46,N:.85,D:.43,R:1.15,G:3.63,K:3.64}},457:function(e){e.exports={I:-.81,L:-.69,F:-.58,V:-.53,M:-.44,P:-.31,W:-.24,H:-.06,T:.11,E:.12,Q:.19,C:.22,Y:.23,A:.33,S:.33,N:.43,D:.5,R:1.14,G:1.61,K:2.41}},458:function(e){e.exports={I:6.04,L:6.04,F:5.91,V:6.02,M:5.74,P:6.3,W:5.88,H:7.64,T:5.6,E:3.08,Q:5.65,C:5.02,Y:5.63,A:6.11,S:5.68,N:5.41,D:2.87,R:10.76,G:6.06,K:9.47}},467:function(e,t,r){"use strict";var n=r(465),o=r(455),a=r(456),i=r(457),s=r(458),c=r(403),l=r(356);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=["hydrophobicity-interface-scale","hydrophobicity-octanol-scale","hydrophobicity-scale","isoelectric-point-scale"],g=[-2,2],b=["#ffdd00","#0000FF"],m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,p(t).apply(this,arguments))}var r,u,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,c["a"]),r=t,m=[{key:"observedAttributes",get:function(){return c.a.observedAttributes.concat("scale","color_range")}}],(u=[{key:"_createSequence",value:function(){this.svg=Object(n.b)(this).append("div").attr("class","").append("svg").attr("id","").attr("width",this.width).attr("height",this._height),this.uniqueID=Math.random().toString(36).substring(7),this.gradient=this.svg.append("defs").append("linearGradient").attr("id","scale-gradient-"+this.uniqueID),this.seq_g=this.svg.append("g").attr("class","background"),this.seq_greadient=this.svg.append("rect").attr("class","seq-gradient").style("pointer-events","none"),this._getCharWidth(),this.trackHighlighter.appendHighlightTo(this.svg),this.refresh()}},{key:"getScaleFromAttribute",value:function(){var e=null;if(f.indexOf(this._scale)>=0)switch(this._scale){case"hydrophobicity-scale":return i;case"hydrophobicity-interface-scale":return o;case"isoelectric-point-scale":return s;case"hydrophobicity-octanol-scale":return a}if(/([ILFVMPWHTEQCYASNDRGK]:-?\d+\.?\d*)(,[ILFVMPWHTEQCYASNDRGK]:-?\d+\.?\d*)*/.test(this._scale))try{e=Object(l.b)(this._scale,{keyFormatter:function(e){return e.toUpperCase()},valueFormatter:function(e){return parseFloat(e)}})}catch(e){console.error("Couldn't parse the given scale ".concat(this._scale),error)}return e}},{key:"refresh",value:function(){var e=this;if(this.seq_g){var t=this.getScaleFromAttribute();if(null===t)return void console.error("The attribute scale is not valid.");var r=Object(n.a)();if(this._color_range){var o=Object(l.a)(this._color_range);r.domain(o.domain).range(o.range)}else r.domain(g).range(b);var a=this.getSingleBaseWidth(),i=Math.round(Math.max(0,this._displaystart-2)),s=Math.round(Math.min(this.sequence.length,this._displayend+1)),c=this.sequence.slice(i,s).split("").map(function(e,n){var o=e.toUpperCase()in t?t[e.toUpperCase()]:0;return{start:1+i+n,end:1+i+n,aa:e,value:o,colour:r(o)}});this.residues=this.seq_g.selectAll("rect.base_bg").data(a<8?[]:c,function(e){return e.start}),this.residues.enter().append("rect").attr("class","base_bg feature").attr("data-base",function(e){return e.aa}).attr("data-pos",function(e){return e.start}).attr("height",this._height).merge(this.residues).attr("width",a).attr("fill",function(e){return e.colour}).attr("x",function(t){var r=t.start;return e.getXFromSeqPosition(r)}).call(this.bindEvents,this),this.residues.exit().remove();var u=this.gradient.selectAll("stop").data(this.sequence.split(""));u.enter().append("stop").merge(u).attr("offset",function(t,r){return(r+.5)/e.sequence.length}).attr("stop-color",function(e){return r(e.toUpperCase()in t?t[e.toUpperCase()]:0)}),this.gradient.exit().remove(),this.seq_greadient.attr("x",this.getXFromSeqPosition(1)).attr("y",0).attr("height",this._height).attr("width",this.getXFromSeqPosition(this.sequence.length)-this.getXFromSeqPosition(0)).style("opacity",a<8?1:8/a).attr("fill","url(#scale-gradient-".concat(this.uniqueID,")")),this._updateHighlight()}}}])&&h(r.prototype,u),m&&h(r,m),t}(),v=function(){customElements.define("protvista-coloured-sequence",m)};window.customElements?v():document.addEventListener("WebComponentsReady",function(){v()});t.a=m}}]);