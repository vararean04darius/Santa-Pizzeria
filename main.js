(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(601),a=n.n(i),o=n(314),r=n.n(o)()(a());r.push([e.id,"html body{\n    padding: 0;\n    margin: 0;\n}\n#pizza-logo{\n    height: 250px;\n    width: 250px;\n    rotate: 67deg;\n    margin-bottom: -60px;\n    padding: 0;\n}\n#logo-container{\n    align-content: center;\n    justify-items: center;\n    text-align: center;\n}\nli{\n    margin-bottom: 12px;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n#nav-bar{\n    top: 0;\n    width: 100%;\n    height: 8%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    background-color: #ECB67C;\n}\n#content{\n    background-color: #E9BB6D;\n    align-items: center;\n    justify-items: center;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    flex-direction: column;\n    min-height: 84vh;\n}\n#page-container{\n    background-color: whitesmoke;\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 3;\n    border-radius: 20px;\n    height: auto;\n    padding: 5%;\n    display: flex;\n    flex-direction: column;\n    margin-top: 2%;\n    margin-bottom: 2%;\n    margin-left: 10%;\n    margin-right: 10%;\n    min-height: 65vh;\n}\n.nav-button{\n    background-color: #ECB67C;\n    border: none;\n    font-family: cursive;\n    font-weight: 800;\n    font-size: large;\n    border-bottom-color: whitesmoke;\n    border-bottom-style: solid;\n    border-width: 1px;\n}\n.nav-button:hover{\n    background-color: #E1AC77;\n    border-top-left-radius: 50px;\n    border-top-right-radius: 50px;\n}\n.selected-page{\n    background-color: #E9BB6D;\n    border-top-left-radius: 50px;\n    border-top-right-radius: 50px;\n    border-bottom-style: none;\n    border-color: whitesmoke;\n    border-top-style: solid;\n    border-right-style: solid;\n    border-left-style: solid;\n    border-width: 1px;\n}\n.group{\n    text-align: start;\n    line-height: 1;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n.description{\n    display: inline;\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n}\n.div-container{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n}\n.container-description-image{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    margin-top: 1em;\n    margin-bottom: 1em;\n}\n#chef-picture{\n    min-height: 150px;\n    min-width: 300px;\n    max-height: 300px;\n    max-width: 600px;\n    height: 100%;\n    width: 100%;\n    border-radius: 50px;\n    border-style: solid;\n    border-color: black;\n    margin-left: 5%;\n}\n#reviews-container{\n    background-color: rgb(53, 53, 53);\n    border-radius: 25px;\n    height: auto;\n    color: whitesmoke;\n    padding: 25px;\n    margin-right: 10%;\n}\nfooter{\n    bottom:0;\n    display: grid;\n    height: 8%;\n    background-color: #E9785A;\n    text-align: center;\n    width: 100%;\n    align-items: center;\n}",""]);const s=r},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(r[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);i&&r[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var o={},r=[],s=0;s<e.length;s++){var d=e[s],c=i.base?d[0]+i.base:d[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=a(m,i);i.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}r.push(p)}return r}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=i(e=e||[],a=a||{});return function(e){e=e||[];for(var r=0;r<o.length;r++){var s=n(o[r]);t[s].references--}for(var d=i(e,a),c=0;c<o.length;c++){var l=n(o[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=d}}},659:e=>{var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,a&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var a=t[i];if(void 0!==a)return a.exports;var o=t[i]={id:i,exports:{}};return e[i](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var a=i.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=i[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;const i=n.p+"39e60bd7f1e5c0dfbe4a.svg",a=document.getElementById("content");function o(){const e=document.createElement("div");e.id="reviews-container";const t=document.createElement("p"),n=document.createElement("div");n.classList.add("review-group"),t.classList.add("reviews-title"),t.textContent="What people say about us:";const i=document.createElement("p");i.classList.add("reviews-description"),i.textContent="I can't get enough of Santa Pizzeria! The pizza here is simply out of this world. The crust is perfectly crispy, the toppings are fresh, and the flavors are authentic. Chef Giovanni has truly brought a piece of Italy to our town. I highly recommend the Quattro Stagioni – it's like taking a culinary tour of Italy with every bite!",n.appendChild(t),n.appendChild(i),e.appendChild(n);const o=document.createElement("p");o.classList.add("reviews"),o.textContent="As a pizza enthusiast, I've tried almost every pizzeria around, and Santa Pizzeria is hands down the best. The wood-fired oven gives the pizza a unique and delicious smoky flavor. The Margherita is my go-to, and it never disappoints. The ambiance is cozy, and the staff is always friendly. Five stars all the way!",e.appendChild(o),a.appendChild(e)}const r=n.p+"0f36b37089d5ed922ce6.jpg";function s(){const e=document.getElementById("content"),t=document.createElement("div");t.id="logo-container";const n=document.createElement("div");n.id="page-container";const a=document.createElement("img");a.id="pizza-logo",a.src=i,a.alt="pizza svg image",t.appendChild(a);const s=document.createElement("h1");s.textContent="Welcome to Santa Pizzeria",t.appendChild(s),n.appendChild(t);const d=document.createElement("div");d.classList.add("group");const c=document.createElement("h3");c.textContent="A Slice of Tradition, a Dash of Passion",d.appendChild(c);const l=document.createElement("p");l.classList.add("description"),l.textContent="At Santa Pizzeria, we believe that every pizza tells a story. Ours begins with a dedication to authentic Italian culinary traditions, brought to life with the freshest ingredients and a passion for perfection.",d.appendChild(l),n.appendChild(d);const p=document.createElement("div");p.classList.add("group");const u=document.createElement("h3");u.textContent="Crafted with Love",p.appendChild(u);const m=document.createElement("p");m.classList.add("description"),m.textContent="Our pizzas are more than just a meal – Here's how we make each one special:",p.appendChild(m);const h=document.createElement("ul"),g=document.createElement("li");g.textContent="Handpicked Ingredients: We source the finest ingredients, from ripe San Marzano tomatoes to creamy mozzarella di bufala, ensuring every bite is rich in flavor and quality.",h.appendChild(g);const f=document.createElement("li");f.textContent="Hand-Stretched Dough: Our dough is made fresh daily, using a traditional Italian recipe. Hand-stretched to perfection, it results in a crust that's crispy on the outside and soft and airy on the inside.",h.appendChild(f);const v=document.createElement("li");v.textContent="Wood-Fired Oven: Baked in our custom-built wood-fired oven, our pizzas boast a unique smoky aroma and a perfectly charred crust, reminiscent of the classic pizzerias of Naples.",h.appendChild(v);const y=document.createElement("li");y.textContent="Authentic Toppings: Whether it's our signature Margherita with fresh basil and extra-virgin olive oil, or our decadent Prosciutto e Funghi with thinly sliced prosciutto and earthy mushrooms, each pizza is topped with authentic flavors that transport you straight to Italy.",h.appendChild(y),p.appendChild(h),n.appendChild(p);const b=document.createElement("div");b.classList.add("group");const C=document.createElement("h3");C.textContent="Meet Our Chef",b.appendChild(C);const w=document.createElement("p");w.classList.add("description"),w.textContent="At the heart of Santa Pizzeria is our esteemed Chef, Giovanni Russo. With roots deeply embedded in the rich culinary traditions of Naples, Chef Giovanni brings a wealth of experience and a profound love for authentic Italian cuisine.",b.appendChild(w);const x=document.createElement("div");x.classList.add("container-description-image");const z=document.createElement("div");z.classList.add("group-description");const E=document.createElement("div");E.classList.add("group-image");const L=document.createElement("img");L.id="chef-picture",L.src=r,E.appendChild(L);const k=document.createElement("ul"),I=document.createElement("li");I.textContent="Early Beginnings: Growing up in a family where food was a cornerstone of daily life, Giovanni's passion for cooking ignited at a young age. His earliest memories are filled with the aromas of fresh herbs, simmering sauces, and the comforting warmth of a wood-fired oven in his grandmother's kitchen.",k.appendChild(I);const T=document.createElement("li");T.textContent="Formal Training: Giovanni honed his skills at the prestigious Italian Culinary Institute in Florence, where he mastered the art of traditional Italian cooking. His education was complemented by apprenticeships at renowned pizzerias and restaurants across Italy, where he learned the secrets of perfect pizza making.",k.appendChild(T);const S=document.createElement("li");S.textContent="Global Experience: With a desire to share his love for Italian cuisine with the world, Giovanni has worked in top kitchens across Europe and the United States. His journey has been marked by a commitment to quality and innovation, blending classic techniques with contemporary twists.",k.appendChild(S),z.appendChild(k),x.appendChild(z),x.appendChild(E),b.appendChild(x);const q=document.createElement("p");q.textContent="Chef Giovanni's philosophy is simple: use the best ingredients, respect traditional methods, and cook with love. At Santa Pizzeria, he oversees every aspect of the culinary process, ensuring that each pizza is a masterpiece.",b.appendChild(q);const A=document.createElement("p");A.textContent="Whether you're enjoying a casual lunch with friends, a cozy dinner with family, or a special celebration, Santa Pizzeria is the perfect place to savor the art of pizza making. Join us and experience the warmth of Italian hospitality, right here in your neighborhood.",b.appendChild(A),n.appendChild(b),e.appendChild(n),o()}const d=document.getElementById("content");function c(){for(;d.firstChild;)d.removeChild(d.firstChild)}var l=n(72),p=n.n(l),u=n(825),m=n.n(u),h=n(659),g=n.n(h),f=n(56),v=n.n(f),y=n(540),b=n.n(y),C=n(113),w=n.n(C),x=n(208),z={};z.styleTagTransform=w(),z.setAttributes=v(),z.insert=g().bind(null,"head"),z.domAPI=m(),z.insertStyleElement=b(),p()(x.A,z),x.A&&x.A.locals&&x.A.locals;const E=document.getElementById("home-button"),L=document.getElementById("menu-button"),k=document.getElementById("about-button");E.addEventListener("click",(()=>{c(),s(),E.classList.add("selected-page"),L.classList.remove("selected-page"),k.classList.remove("selected-page")})),L.addEventListener("click",(()=>{c(),function(){const e=document.getElementById("content"),t=document.createElement("div");t.id="page-container";const n=document.createElement("img");n.id="pizza-logo",n.src=i,n.alt="pizza svg image",t.appendChild(n);const a=document.createElement("h1");a.textContent="Santa Pizzeria",t.appendChild(a);const r=document.createElement("p");r.textContent="This pizza spot will soon be your favorite spot to eat pizza Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus adipisci, laboriosam debitis animi dicta, rem eius ipsa aliquam rerum suscipit maxime earum incidunt quasi! Quos quae sequi eos nostrum. Temporibus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus adipisci, laboriosam debitis animi dicta, rem eius ipsa aliquam rerum suscipit maxime earum incidunt quasi! Quos quae sequi eos nostrum. Temporibus?",t.appendChild(r),e.appendChild(t),o()}(),L.classList.add("selected-page"),E.classList.remove("selected-page"),k.classList.remove("selected-page")})),k.addEventListener("click",(()=>{c(),function(){const e=document.getElementById("content"),t=document.createElement("div");t.id="page-container";const n=document.createElement("img");n.id="pizza-logo",n.src=i,n.alt="pizza svg image",t.appendChild(n);const a=document.createElement("h1");a.textContent="Santa Pizzeria",t.appendChild(a);const r=document.createElement("p");r.textContent="This pizza spot will soon be your favorite spot to eat pizza Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus adipisci, laboriosam debitis animi dicta, rem eius ipsa aliquam rerum suscipit maxime earum incidunt quasi! Quos quae sequi eos nostrum. Temporibus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus adipisci, laboriosam debitis animi dicta, rem eius ipsa aliquam rerum suscipit maxime earum incidunt quasi! Quos quae sequi eos nostrum. Temporibus?",t.appendChild(r),e.appendChild(t),o()}(),k.classList.add("selected-page"),E.classList.remove("selected-page"),L.classList.remove("selected-page")})),c(),s(),E.classList.add("selected-page")})();