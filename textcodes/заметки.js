
//scroll
function ssc_init(){if(document.body){var e=document.body,s=document.documentElement,c=window.innerHeight,t=e.scrollHeight;if(ssc_root=document.compatMode.indexOf("CSS")>=0?s:e,ssc_activeElement=e,ssc_initdone=!0,top!=self)ssc_frame=!0;else if(t>c&&(e.offsetHeight<=c||s.offsetHeight<=c)&&(ssc_root.style.height="auto",ssc_root.offsetHeight<=c)){var o=document.createElement("div");o.style.clear="both",e.appendChild(o)}ssc_fixedback||(e.style.backgroundAttachment="scroll",s.style.backgroundAttachment="scroll"),ssc_keyboardsupport&&ssc_addEvent("keydown",ssc_keydown)}}function ssc_scrollArray(e,s,c,t){if(t||(t=1e3),ssc_directionCheck(s,c),ssc_que.push({x:s,y:c,lastX:0>s?.99:-.99,lastY:0>c?.99:-.99,start:+new Date}),!ssc_pending){var o=function(){for(var r=+new Date,n=0,a=0,i=0;i<ssc_que.length;i++){var l=ssc_que[i],_=r-l.start,u=_>=ssc_animtime,d=u?1:_/ssc_animtime;ssc_pulseAlgorithm&&(d=ssc_pulse(d));var f=l.x*d-l.lastX>>0,m=l.y*d-l.lastY>>0;n+=f,a+=m,l.lastX+=f,l.lastY+=m,u&&(ssc_que.splice(i,1),i--)}if(s){var h=e.scrollLeft;e.scrollLeft+=n,n&&e.scrollLeft===h&&(s=0)}if(c){var p=e.scrollTop;e.scrollTop+=a,a&&e.scrollTop===p&&(c=0)}s||c||(ssc_que=[]),ssc_que.length?setTimeout(o,t/ssc_framerate+1):ssc_pending=!1};setTimeout(o,0),ssc_pending=!0}}function ssc_wheel(e){ssc_initdone||ssc_init();var s=e.target,c=ssc_overflowingAncestor(s);if(!c||e.defaultPrevented||ssc_isNodeName(ssc_activeElement,"embed")||ssc_isNodeName(s,"embed")&&/\.pdf/i.test(s.src))return!0;var t=e.wheelDeltaX||0,o=e.wheelDeltaY||0;t||o||(o=e.wheelDelta||0),Math.abs(t)>1.2&&(t*=ssc_stepsize/120),Math.abs(o)>1.2&&(o*=ssc_stepsize/120),ssc_scrollArray(c,-t,-o),e.preventDefault()}function ssc_keydown(e){var s=e.target,c=e.ctrlKey||e.altKey||e.metaKey;if(/input|textarea|embed/i.test(s.nodeName)||s.isContentEditable||e.defaultPrevented||c)return!0;if(ssc_isNodeName(s,"button")&&e.keyCode===ssc_key.spacebar)return!0;var t,o=0,r=0,n=ssc_overflowingAncestor(ssc_activeElement),a=n.clientHeight;switch(n==document.body&&(a=window.innerHeight),e.keyCode){case ssc_key.up:r=-ssc_arrowscroll;break;case ssc_key.down:r=ssc_arrowscroll;break;case ssc_key.spacebar:t=e.shiftKey?1:-1,r=-t*a*.9;break;case ssc_key.pageup:r=.9*-a;break;case ssc_key.pagedown:r=.9*a;break;case ssc_key.home:r=-n.scrollTop;break;case ssc_key.end:var i=n.scrollHeight-n.scrollTop-a;r=i>0?i+10:0;break;case ssc_key.left:o=-ssc_arrowscroll;break;case ssc_key.right:o=ssc_arrowscroll;break;default:return!0}ssc_scrollArray(n,o,r),e.preventDefault()}function ssc_mousedown(e){ssc_activeElement=e.target}function ssc_setCache(e,s){for(var c=e.length;c--;)ssc_cache[ssc_uniqueID(e[c])]=s;return s}function ssc_overflowingAncestor(e){var s=[],c=ssc_root.scrollHeight;do{var t=ssc_cache[ssc_uniqueID(e)];if(t)return ssc_setCache(s,t);if(s.push(e),c===e.scrollHeight){if(!ssc_frame||ssc_root.clientHeight+10<c)return ssc_setCache(s,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow"),"scroll"===overflow||"auto"===overflow))return ssc_setCache(s,e)}while(e=e.parentNode)}function ssc_addEvent(e,s,c){window.addEventListener(e,s,c||!1)}function ssc_removeEvent(e,s,c){window.removeEventListener(e,s,c||!1)}function ssc_isNodeName(e,s){return e.nodeName.toLowerCase()===s.toLowerCase()}function ssc_directionCheck(e,s){e=e>0?1:-1,s=s>0?1:-1,(ssc_direction.x!==e||ssc_direction.y!==s)&&(ssc_direction.x=e,ssc_direction.y=s,ssc_que=[])}function ssc_pulse_(e){var s,c,t;return e*=ssc_pulseScale,1>e?s=e-(1-Math.exp(-e)):(c=Math.exp(-1),e-=1,t=1-Math.exp(-e),s=c+t*(1-c)),s*ssc_pulseNormalize}function ssc_pulse(e){return e>=1?1:0>=e?0:(1==ssc_pulseNormalize&&(ssc_pulseNormalize/=ssc_pulse_(1)),ssc_pulse_(e))}var ssc_framerate=150,ssc_animtime=500,ssc_stepsize=150,ssc_pulseAlgorithm=!0,ssc_pulseScale=6,ssc_pulseNormalize=1,ssc_keyboardsupport=!0,ssc_arrowscroll=50,ssc_frame=!1,ssc_direction={x:0,y:0},ssc_initdone=!1,ssc_fixedback=!0,ssc_root=document.documentElement,ssc_activeElement,ssc_key={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},ssc_que=[],ssc_pending=!1,ssc_cache={};setInterval(function(){ssc_cache={}},1e4);var ssc_uniqueID=function(){var e=0;return function(s){return s.ssc_uniqueID||(s.ssc_uniqueID=e++)}}(),ischrome=/chrome/.test(navigator.userAgent.toLowerCase());ischrome&&(ssc_addEvent("mousedown",ssc_mousedown),ssc_addEvent("mousewheel",ssc_wheel),ssc_addEvent("load",ssc_init));

(function(e){e.extend({browserSelector:function(){var e=navigator.userAgent,t=e.toLowerCase(),n=function(e){return t.indexOf(e)>-1},r="gecko",i="webkit",s="safari",o="opera",u=document.documentElement,a=[!/opera|webtv/i.test(t)&&/msie\s(\d)/.test(t)?"ie ie"+parseFloat(navigator.appVersion.split("MSIE")[1]):n("firefox/2")?r+" ff2":n("firefox/3.5")?r+" ff3 ff3_5":n("firefox/3")?r+" ff3":n("gecko/")?r:n("opera")?o+(/version\/(\d+)/.test(t)?" "+o+RegExp.jQuery1:/opera(\s|\/)(\d+)/.test(t)?" "+o+RegExp.jQuery2:""):n("konqueror")?"konqueror":n("chrome")?i+" chrome":n("iron")?i+" iron":n("applewebkit/")?i+" "+s+(/version\/(\d+)/.test(t)?" "+s+RegExp.jQuery1:""):n("mozilla/")?r:"",n("j2me")?"mobile":n("iphone")?"iphone":n("ipod")?"ipod":n("mac")?"mac":n("darwin")?"mac":n("webtv")?"webtv":n("win")?"win":n("freebsd")?"freebsd":n("x11")||n("linux")?"linux":"","js"];c=a.join(" ");u.className+=" "+c}})})(jQuery);(function(e){e.extend({smoothScroll:function(){function c(){var e=false;if(document.URL.indexOf("google.com/reader/view")>-1){e=true}if(t.excluded){var r=t.excluded.split(/[,\n] ?/);r.push("mail.google.com");for(var i=r.length;i--;){if(document.URL.indexOf(r[i])>-1){a&&a.disconnect();N("mousewheel",g);e=true;n=true;break}}}if(e){N("keydown",y)}if(t.keyboardSupport&&!e){T("keydown",y)}}function h(){if(!document.body)return;var e=document.body;var i=document.documentElement;var f=window.innerHeight;var l=e.scrollHeight;o=document.compatMode.indexOf("CSS")>=0?i:e;u=e;c();s=true;if(top!=self){r=true}else if(l>f&&(e.offsetHeight<=f||i.offsetHeight<=f)){var h=false;var p=function(){if(!h&&i.scrollHeight!=document.height){h=true;setTimeout(function(){i.style.height=document.height+"px";h=false},500)}};i.style.height="auto";setTimeout(p,10);var d={attributes:true,childList:true,characterData:false};a=new _(p);a.observe(e,d);if(o.offsetHeight<=f){var v=document.createElement("div");v.style.clear="both";e.appendChild(v)}}if(document.URL.indexOf("mail.google.com")>-1){var m=document.createElement("style");m.innerHTML=".iu { visibility: hidden }";(document.getElementsByTagName("head")[0]||i).appendChild(m)}else if(document.URL.indexOf("www.facebook.com")>-1){var g=document.getElementById("home_stream");g&&(g.style.webkitTransform="translateZ(0)")}if(!t.fixedBackground&&!n){e.style.backgroundAttachment="scroll";i.style.backgroundAttachment="scroll"}}function m(e,n,r,i){i||(i=1e3);k(n,r);if(t.accelerationMax!=1){var s=+(new Date);var o=s-v;if(o<t.accelerationDelta){var u=(1+30/o)/2;if(u>1){u=Math.min(u,t.accelerationMax);n*=u;r*=u}}v=+(new Date)}p.push({x:n,y:r,lastX:n<0?.99:-.99,lastY:r<0?.99:-.99,start:+(new Date)});if(d){return}var a=e===document.body;var f=function(s){var o=+(new Date);var u=0;var l=0;for(var c=0;c<p.length;c++){var h=p[c];var v=o-h.start;var m=v>=t.animationTime;var g=m?1:v/t.animationTime;if(t.pulseAlgorithm){g=P(g)}var y=h.x*g-h.lastX>>0;var b=h.y*g-h.lastY>>0;u+=y;l+=b;h.lastX+=y;h.lastY+=b;if(m){p.splice(c,1);c--}}if(a){window.scrollBy(u,l)}else{if(u)e.scrollLeft+=u;if(l)e.scrollTop+=l}if(!n&&!r){p=[]}if(p.length){M(f,e,i/t.frameRate+1)}else{d=false}};M(f,e,0);d=true}function g(e){if(!s){h()}var n=e.target;var r=x(n);if(!r||e.defaultPrevented||C(u,"embed")||C(n,"embed")&&/\.pdf/i.test(n.src)){return true}var i=e.wheelDeltaX||0;var o=e.wheelDeltaY||0;if(!i&&!o){o=e.wheelDelta||0}if(!t.touchpadSupport&&A(o)){return true}if(Math.abs(i)>1.2){i*=t.stepSize/120}if(Math.abs(o)>1.2){o*=t.stepSize/120}m(r,-i,-o);e.preventDefault()}function y(e){var n=e.target;var r=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==l.spacebar;if(/input|textarea|select|embed/i.test(n.nodeName)||n.isContentEditable||e.defaultPrevented||r){return true}if(C(n,"button")&&e.keyCode===l.spacebar){return true}var i,s=0,o=0;var a=x(u);var f=a.clientHeight;if(a==document.body){f=window.innerHeight}switch(e.keyCode){case l.up:o=-t.arrowScroll;break;case l.down:o=t.arrowScroll;break;case l.spacebar:i=e.shiftKey?1:-1;o=-i*f*.9;break;case l.pageup:o=-f*.9;break;case l.pagedown:o=f*.9;break;case l.home:o=-a.scrollTop;break;case l.end:var c=a.scrollHeight-a.scrollTop-f;o=c>0?c+10:0;break;case l.left:s=-t.arrowScroll;break;case l.right:s=t.arrowScroll;break;default:return true}m(a,s,o);e.preventDefault()}function b(e){u=e.target}function S(e,t){for(var n=e.length;n--;)w[E(e[n])]=t;return t}function x(e){var t=[];var n=o.scrollHeight;do{var i=w[E(e)];if(i){return S(t,i)}t.push(e);if(n===e.scrollHeight){if(!r||o.clientHeight+10<n){return S(t,document.body)}}else if(e.clientHeight+10<e.scrollHeight){overflow=getComputedStyle(e,"").getPropertyValue("overflow-y");if(overflow==="scroll"||overflow==="auto"){return S(t,e)}}}while(e=e.parentNode)}function T(e,t,n){window.addEventListener(e,t,n||false)}function N(e,t,n){window.removeEventListener(e,t,n||false)}function C(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function k(e,t){e=e>0?1:-1;t=t>0?1:-1;if(i.x!==e||i.y!==t){i.x=e;i.y=t;p=[];v=0}}function A(e){if(!e)return;e=Math.abs(e);f.push(e);f.shift();clearTimeout(L);var t=f[0]==f[1]&&f[1]==f[2];var n=O(f[0],120)&&O(f[1],120)&&O(f[2],120);return!(t||n)}function O(e,t){return Math.floor(e/t)==e/t}function D(e){var n,r,i;e=e*t.pulseScale;if(e<1){n=e-(1-Math.exp(-e))}else{r=Math.exp(-1);e-=1;i=1-Math.exp(-e);n=r+i*(1-r)}return n*t.pulseNormalize}function P(e){if(e>=1)return 1;if(e<=0)return 0;if(t.pulseNormalize==1){t.pulseNormalize/=D(1)}return D(e)}var e={frameRate:150,animationTime:700,stepSize:80,pulseAlgorithm:true,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:true,arrowScroll:50,touchpadSupport:true,fixedBackground:true,excluded:""};var t=e;var n=false;var r=false;var i={x:0,y:0};var s=false;var o=document.documentElement;var u;var a;var f=[120,120,120];var l={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36};var p=[];var d=false;var v=+(new Date);var w={};setInterval(function(){w={}},10*1e3);var E=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}();var L;var M=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,n){window.setTimeout(e,n||1e3/60)}}();var _=window.MutationObserver||window.WebKitMutationObserver;T("mousedown",b);T("mousewheel",g);T("load",h)}})})(jQuery)





(24+12+54+45+20)/5 = 31 - Среднее арифметическое значение

//Gulp
1.Node.js
i - Установить
-g - Глобально
init - Инициализация (Создаёт базавый пакет)

npm ls -g -depth=0 		// Просмотр установленных
npm init							// Установка
npm i gulp -g 
npm i gulp --save-dev // Созранить в папке










String.prototype.unescape = function() {
    var str;
    var winalpha = {
      E0: '%D0%B0', E1: '%D0%B1', E2: '%D0%B2', E3: '%D0%B3',
      E4: '%D0%B4', E5: '%D0%B5', B8: '%D1%91', E6: '%D0%B6',
      E7: '%D0%B7', E8: '%D0%B8', E9: '%D0%B9', EA: '%D0%BA',
      EB: '%D0%BB', EC: '%D0%BC', ED: '%D0%BD', EE: '%D0%BE',
      EF: '%D0%BF', F0: '%D1%80', F1: '%D1%81', F2: '%D1%82',
      F3: '%D1%83', F4: '%D1%84', F5: '%D1%85', F6: '%D1%86',
      F7: '%D1%87', F8: '%D1%88', F9: '%D1%89', FA: '%D1%8A',
      FB: '%D1%8B', FC: '%D1%8C', FD: '%D1%8D', FE: '%D1%8E',
      FF: '%D1%8F', C0: '%D0%90', C1: '%D0%91', C2: '%D0%92',
      C3: '%D0%93', C4: '%D0%94', C5: '%D0%95', A8: '%D0%81',
      C6: '%D0%96', C7: '%D0%97', C8: '%D0%98', C9: '%D0%99',
      CA: '%D0%9A', CB: '%D0%9B', CC: '%D0%9C', CD: '%D0%9D',
      CE: '%D0%9E', CF: '%D0%9F', D0: '%D0%A0', D1: '%D0%A1',
      D2: '%D0%A2', D3: '%D0%A3', D4: '%D0%A4', D5: '%D0%A5',
      D6: '%D0%A6', D7: '%D0%A7', D8: '%D0%A8', D9: '%D0%A9',
      DA: '%D0%AA', DB: '%D0%AB', DC: '%D0%AC', DD: '%D0%AD',
      DE: '%D0%AE', DF: '%D0%AF'
    };
    str = this.replace(/%/g, '$');
    for (var i in winalpha) {
       str = str.replace(new RegExp('[\$]'+i, 'g'), winalpha[i]);
    }
    str = str.replace(/\$/g, '%');
    str = decodeURIComponent(str);
    return str;
  }
	
	
	
	
//GOOGLE

Indexof - поиск списком
site: - сайт
filetype - тип файла

	
	
	