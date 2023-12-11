"use strict";(self["webpackChunkquant_ux"]=self["webpackChunkquant_ux"]||[]).push([[838],{89224:function(t,e,i){i.d(e,{Z:function(){return c}});i(2707),i(43290),i(41539),i(33948);var s,n,a=i(40282),r=i(79109),o={name:"Heat",mixins:[r.Z,a.Z],data:function(){return{defaultRadius:15,defaultBlur:20,defaultGradient:{.4:"blue",.6:"cyan",.7:"lime",.8:"yellow","1.0":"red"},max:-1}},components:{},methods:{computeMouseDistribution:function(t,e){for(var i={},s={},n=0;n<t.length;n++){var a=t[n];s[a.screen]||(s[a.screen]=[]),s[a.screen].push(a)}for(var r in s){var o=e.screens[r];if(o){for(var h=s[r],l=[],d=0;d<h.length;d++)for(var c=h[d],u=c.x,v=c.y,m=c.t,g=0;g<u.length;g++)l.push({x:u[g],y:v[g],t:m[g]});l.sort((function(t,e){return t.t-e.t}));for(var f=o.w,p=o.h,y=0,S={},w=-1,M=0;M<l.length;M++){var x=l[M],T=0;if(y>0&&(T=Math.log(x.t-y)),y>x.t&&console.error("wrong order",M,x.t),x.x>0&&x.y>0){var _=Math.round(x.x*f),A=Math.round(x.y*p);null==S[_]&&(S[_]={}),null==S[_][A]&&(S[_][A]=0),S[_][A]+=T,w=Math.max(w,S[_][A])}y=x.t}i[r]={max:w,values:this._matrixToData(S)}}else console.debug("No Screen Model for ",r)}return i},computeClickDistribution:function(t,e,i){for(var s={},n=-1,a=0;a<t.length;a++){var r=t[a];if(r.x&&r.y&&!r.noheat){var o=Math.round(r.x*e),h=Math.round(r.y*i);o>0&&h>0&&(null==s[o]&&(s[o]={}),null==s[o][h]&&(s[o][h]=0),s[o][h]++,n=Math.max(n,s[o][h]))}}return{max:n,values:this._matrixToData(s)}},_matrixToData:function(t){var e=[];for(var i in t){var s=t[i];for(var n in s){var a=[];a[0]=i,a[1]=n,a[2]=t[i][n],e.push(a)}}return e},cleanUpHeat:function(){delete this._circle},draw:function(t,e,i,s,n,a){if(!(s<=0||n<=0)){this._circle||this.radius(this.defaultRadius,this.defaultBlur),this._grad||this.gradient(this.defaultGradient),t.clearRect(0,0,s,n);for(var r,o=0,h=e.length;o<h;o++)r=e[o],t.globalAlpha=Math.max(r[2]/i,void 0===a?.05:a),t.drawImage(this._circle,r[0]-this._r,r[1]-this._r);var l=t.getImageData(0,0,s,n);this._colorize(l.data,this._grad),t.putImageData(l,0,0)}},radius:function(t,e){e=e||15;var i=this._circle=document.createElement("canvas"),s=i.getContext("2d"),n=this._r=t+e;return i.width=i.height=2*n,s.shadowOffsetX=s.shadowOffsetY=200,s.shadowBlur=e,s.shadowColor="black",s.beginPath(),s.arc(n-200,n-200,t,0,2*Math.PI,!0),s.closePath(),s.fill(),this},gradient:function(t){var e=document.createElement("canvas"),i=e.getContext("2d"),s=i.createLinearGradient(0,0,0,256);for(var n in e.width=1,e.height=256,t)s.addColorStop(1*n,t[n]);return i.fillStyle=s,i.fillRect(0,0,1,256),this._grad=i.getImageData(0,0,1,256).data,this},_colorize:function(t,e){for(var i,s=3,n=t.length;s<n;s+=4)i=4*t[s],i&&(t[s-3]=e[i],t[s-2]=e[i+1],t[s-1]=e[i+2])},computeScrollDurationDistrubtion:function(t,e,i){for(var s=[],n=0;n<i;n++)s[n]=1;for(var a=1,r=-1,o=-1,h=0;h<t.length;h++){var l=t[h];if("SessionStart"==l.type&&(r=-1,o=-1),"ScreenScroll"==l.type||"ScreenLoaded"==l.type){var d=0;if("ScreenScroll"==l.type&&l.state&&l.state.children&&(d=1*l.state.value,d=Math.floor(e*d)),r>=0&&o>=0)for(var c=l.time-r,u=0;u<e;u++){var v=o+u;v<i&&(s[v]+=c,a=Math.max(a,s[v]))}r=l.time,o=d}}return{max:a,values:s}},computeScrollVisibiltyDistribution:function(t,e,i){for(var s=[],n=0;n<i;n++)s[n]=1;for(var a=1,r=null,o={},h=0;h<t.length;h++){var l=t[h];if("ScreenScroll"==l.type||"ScreenLoaded"==l.type){"ScreenLoaded"==l.type&&(r=l.id,o[r]||(o[r]=0));var d=0;"ScreenScroll"==l.type&&l.state&&l.state.children&&(d=1*l.state.value,d=Math.floor(e*d)),o[r]=Math.max(d,o[r])}}for(var c in o)for(var u=o[c],v=1*e+1*u,m=0;m<v;m++)m<i&&(s[m]+=1,a=Math.max(a,s[m]));return{max:a,values:s}},drawSections:function(t,e,i,s){this.logger.log(2,"drawSections","enter");var n=t.values;e||(e=this._ctx),s||(s=this._width),i||(i=this._height),t.max||(console.warn("drawSections() > no max"),t.max=this.max);var a=-1,r=0;e.globalAlpha=.4;for(var o=0;o<i;o++){if(a!=n[o]&&a>=0){var h=a/t.max,l=this.mixColor(h);e.fillStyle=l;var d=o-r;e.fillRect(0,r,s,d),r=o}a=n[o]}var c=a/t.max,u=this.mixColor(c);e.fillStyle=u,e.fillRect(0,r,s,i),this.logger.log(2,"drawSections","exit")}},mounted:function(){}},h=o,l=i(1001),d=(0,l.Z)(h,s,n,!1,null,null,null),c=d.exports},80693:function(t,e,i){i.d(e,{Z:function(){return Z}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"MatcPlayer"},[i("div",{staticClass:"MatcPlayerLeft"},[i("div",{ref:"container",staticClass:"MatcPlayerView"}),i("div",{staticClass:"MatcPlayerNav"},[i("div",{ref:"tasks",staticClass:"MatcPlayerTasks"}),i("div",{ref:"progress",staticClass:"MatcPlayerProgress"})]),t._m(0)]),i("div",{staticClass:"MatcPlayerEvents",attrs:{"data-dojo-attach-point":"eventCntr"}})])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"MatcPlayerButtonBar"},[i("div",{},[i("a",{attrs:{"data-dojo-attach-point":"btnBack"}},[i("span",{staticClass:"mdi mdi-skip-previous"})]),i("a",{attrs:{"data-dojo-attach-point":"btnPlay"}},[i("span",{staticClass:"mdi mdi-play",attrs:{"data-dojo-attach-point":"iconPlay"}})]),i("span",{staticClass:"MatcPlayerTime",attrs:{"data-dojo-attach-point":"time"}})])])}],a=(i(40561),i(68309),i(26833),i(2707),i(40282)),r=i(28379),o=i(48039),h=i(75790),l=i(59344),d=i(77050),c=i(54524),u=i(43371),v=i(26698),m=i(17386),g=i(72712),f=i(54946),p=i(88797),y=i(3270),S=i(38217),w=i(768),M=i(77259),x={name:"Player",mixins:[a.Z,g.Z],props:["app","testSettings","annotation","sessionID","eventsWithAnnimations","pub","mouse"],data:function(){return{running:!1,currentTime:0,lastEventPos:0,animationTimeOffSet:400,mode:"private",invisibleEvents:{Animation:!0,SessionStart:!0,ScreenAnimation:!0,OverlayShowAnimation:!0,OverlayRemoveAnimation:!0,ValidationOk:!0,MouseOut:!0,MouseOver:!0,WidgetInit:!0}}},components:{},methods:{postCreate:function(){this.logger=new c.Z("VideoPlayer"),this.analytics=new y.Z,this.jwtToken=M.Z.getUserService().getToken(),this.db=new m.Z,this.own((0,o.Z)(this.btnBack,h.Z.press,l.Z.hitch(this,"onBack"))),this.own((0,o.Z)(this.btnPlay,h.Z.press,l.Z.hitch(this,"onPlay"))),this.init()},init:function(){if(this.app){this.setModel(this.app);var t=this.analytics.nornalizeContainerChildEvents(this.eventsWithAnnimations),e=new u.Z(t),i=e.groupBy("session"),s=i.get(this.sessionID);this.mouseData=this.mouse,this.setSession(s,this.sessionID)}},setMouse:function(t){this.mouseData=t},setTestSettings:function(t){this.testSettings=t},setDialog:function(t){this.dialog=t},setModel:function(t){this.model=this.createInheritedModel(t),this.model=w.Z.addContainerChildrenToModel(this.model),this.initSize()},initSize:function(){this.previewWrapper=this.renderPreview()},setSession:function(t,e){this.logger.log(0,"setSession","enter "+e);try{this.sessionID=e,this.session=t,t.sortBy("time"),this.events=l.Z.clone(t.as_array());for(var i=0;i<this.events.length;i++){var s=this.events[i],n=null;i+1<this.events.length&&(n=this.events[i+1],"ScreenLoaded"!=n.type&&"ScreenAnimation"!=n.type||"WidgetClick"!=s.type&&"ScreenGesture"!=s.type||(s.time-=this.animationTimeOffSet,s._transition=!0))}this.fixGestures(this.events),this.taskMatches=this.getMatches(),this.duration=this.session.max("time")-this.session.min("time"),this.min=this.session.min("time"),this.initWidgetStatesAndScroll(),this.render(),this.initAnimations(),this.initMouseData(),this.lastEventPos=0,this.setTime(0)}catch(a){console.debug(a.err),console.debug(a.stack)}},initMouseData:function(){var t=0,e={};if(this.mouseData){for(var i=this.mouseData,s=0;s<i.length;s++)for(var n=i[s],a=0;a<n.t.length;a++){var r={screen:n.screen,time:n.t[a],x:n.x[a],y:n.y[a],dur:n.sample},o=this.getAnimationIndex(r.time-this.min);e[o]=r,t=Math.max(r.time)}this.mouseData=null}this._mouseStates=e,this.duration=Math.max(t-this.min,this.duration)},initAnimations:function(){this.logger.log(0,"initAnimations","enter");var t=new p.Z;this._widgetAnimationStates={};for(var e=0;e<this.duration;e+=30)this._widgetAnimationStates[e]={};var i={},s={};this.styleIDCounter=0;var n={},a={};this.posIDCounter=0;for(var r=0,o=0;o<this.events.length;o++){var h=this.events[o],d=this.getAnimationIndex(h.time-this.min);if("ScreenLoaded"==h.type||"OverlayLoaded"==h.type){for(var c=d;c<this.duration;c+=30)for(var u in i){var v=i[u];this._widgetAnimationStates[c][u].style=v,s[g]=v;var m=a[u];this._widgetAnimationStates[c][u].pos=m,n[g]=m}r=d}if("Animation"==h.type){var g=h.animation.id,f=this.model.widgets[g];if(f){if(!i[g]){var y=this.initWidgetAnimation(g,f);i[g]=y,s[g]=y;var S=this.initWidgetAnimationPos(g,f);a[g]=S,n[g]=S}var w=h.animation,M=w.from.style,x=w.to.style,T=w.from.pos;T&&(T=this.getAbsolutePosition(h.screen,T));var _=w.to.pos;_&&(_=this.getAbsolutePosition(h.screen,_));var A,Z,P=!1,C=d;h.animation&&"ScreenLoaded"==h.animation.triggerType&&(C=r);for(var E=C;E<this.duration;E+=30){var k=E-d,b=1;if(w.duration>0&&(b=w.delay?t.getP(k,w.delay,w.duration):Math.min(1,k/w.duration)),!P||!A){A=t.getAnimationMixedStyle(M,x,b),A._aid=this.styleIDCounter++,A._org=!1;var L=s[g];for(var D in L)void 0==A[D]&&(A[D]=L[D]);s[g]=l.Z.clone(A),T&&_?(Z=t.getAnimationMixedPos(T,_,b),Z._aid=this.posIDCounter++,Z._org=!1):Z=null}b>=1&&(P=!0),this._widgetAnimationStates[E][g].style=A,Z&&(this._widgetAnimationStates[E][g].pos=Z)}}else console.warn("initAnimations() > No widgte",g)}}for(var q=[],O=0;O<this.events.length;O++){var I=this.events[O];"Animation"!=I.type&&q.push(I)}this.events=q,this.logger.log(0,"initAnimations","exit > "+this.styleIDCounter)},getAbsolutePosition:function(t,e){var i=this.scaledModel.screens[t];if(i){var s={x:Math.round(i.w*e.x),y:Math.round(i.h*e.y),w:Math.round(i.w*e.w),h:Math.round(i.h*e.h)};return s}},initWidgetAnimation:function(t,e){var i=l.Z.clone(e.style);i._aid=this.styleIDCounter++,i._org=!0;for(var s=0;s<this.duration;s+=30)this._widgetAnimationStates[s][t]={style:i};return i},initWidgetAnimationPos:function(t){var e={x:0,y:0,w:0,h:0,start:!0};e._aid=this.posIDCounter++,e._org=!0;for(var i=0;i<this.duration;i+=30)this._widgetAnimationStates[i][t]||(this._widgetAnimationStates[i][t]={}),this._widgetAnimationStates[i][t].pos=e;return e},initWidgetStatesAndScroll:function(){this.logger.log(1,"initWidgetStatesAndScroll","enter");for(var t=this.getDefaultStates(),e={},i=[],s={},n={type:"scroll",value:0},a={},r=0;r<this.events.length;r++){var o=this.events[r],h=o.screen,d=l.Z.clone(t);if(e[o.id]=d[h],t=d,o.state&&"ScreenScroll"!=o.type&&(d[h]?(d[h][o.widget]=o.state,"radiobox.checked"==o.state.type&&this._setStates(d[h],"radiobox.checked",!1,o)):console.warn("getWidgetStatesByEvent() > No state for screen ",h)),"ScreenScroll"==o.type&&o.state)a[o.id]=o.state,n={type:"scroll",value:o.state.value};else if("ScreenLoaded"==o.type||"ScreenAnimation"==o.type){var c={type:"scroll",value:0};a[o.id]=c,n=c;var u=this.events[r-1];!u||"ScreenAnimation"==o.type||"ScreenAnimation"==u.type&&"ScreenLoaded"==o.type||void 0!=o.scrollTop&&null!=o.scrollTop&&(c.value=o.scrollTop)}else a[o.id]=n;if("ScreenLoaded"==o.type&&(i=[]),"OverlayLoaded"==o.type){var v=i.indexOf(o.overlay);v<0&&i.push(o.overlay)}if("OverlayShowAnimation"==o.type)if(o.animation){var m=i.indexOf(o.animation.to);m<0&&i.push(o.animation.to)}else console.debug("initWidgetStatesAndScroll() > no animation for event",o);if("OverlayRemoved"==o.type){var g=i.indexOf(o.overlay);g>-1&&i.splice(g,1)}s[o.id]=l.Z.clone(i)}this._widgetStates=e,this._overLayStates=s,this._scrollStates=a,this.logger.log(2,"initWidgetStatesAndScroll","exit")},_setStates:function(t,e,i,s){for(var n in t){var a=t[n];a.type==e&&n!=s.widget&&(a.value=i)}},getDefaultStates:function(){this.logger.log(2,"getDefaultStates","enter");var t=new f.Z;t.setJwtToken(this.jwtToken),t.setModel(this.model),t.setMode("view"),t.setScaleFactor(1,1);var e=document.createElement("div"),i={},s={};for(var n in this.model.widgets){var a=this.model.widgets[n],r=this.getParentScreen(a);if(r){s[r.id]||(s[r.id]={});var o=t.createUIWidget(e,a);if(o){var h=o.getState();h&&(i[n]=h,s[r.id][n]=h)}}}return t.cleanUp(),s},getMatches:function(){if(this.taskNames={},this.testSettings){var t=new u.Z(this.events);t=this.getActionEvents(t);for(var e=this.testSettings.tasks,i=0;i<e.length;i++)this.taskNames[e[i].id]=e[i].name;return this.analytics.getTaskPerformance(t,e,!0)}return null},onBack:function(t){this.stopEvent(t),this.currentTime=0,this.lastEventPos=0,this.setTime(0)},onPlay:function(t){this.stopEvent(t),this.currentTime>=this.duration&&(this.currentTime=0,this.lastEventPos=0),this.running?this.stop():this.start()},start:function(){this.running=!0,r.Z.add(this.iconPlay,"mdi-pause"),r.Z.remove(this.iconPlay,"mdi-play"),this.lastLoop=(new Date).getTime(),requestAnimationFrame(l.Z.hitch(this,"loop"))},stop:function(){this.running=!1,r.Z.remove(this.iconPlay,"mdi-pause"),r.Z.add(this.iconPlay,"mdi-play")},loop:function(){var t=(new Date).getTime(),e=t-this.lastLoop;this.lastLoop=t,this.currentTime+=e,this.currentTime<this.duration?(this.setTime(this.currentTime),this.running&&requestAnimationFrame(l.Z.hitch(this,"loop"))):(this.setTime(this.duration,!0),this.stop())},render:function(){this.logger.log(2,"render","enter"),this.preview=this.$new(S.Z,{isPlayer:!0}),this.preview.setJwtToken(this.jwtToken),this.preview.placeAt(this.previewWrapper),this.preview.setModel(this.model),this.scaledModel=this.preview.model,this.slider=this.$new(v.Z),this.slider.setMax(this.duration),this.slider.setMarks(this.getAnnotation()),this.slider.placeAt(this.$refs.progress),this.own((0,o.Z)(this.slider,"change",l.Z.hitch(this,"onSliderChange"))),this.renderEventList(),this.renderTaskBar()},renderPreview:function(){this.$refs.container.innerHTML="";var t=document.createElement("div");return r.Z.add(t,"MatcPlayerPreview"),this.layout(t),t},renderTaskBar:function(){if(this.taskMatches){var t=this.taskMatches.as_dict("task");for(var e in this.taskNames){var i=this.taskNames[e],s=t[e];if(s){var n=(s.startTime-this.min)/this.duration,a=(s.endTime-s.startTime)/this.duration;this.renderTask(n,a,i)}}0===Object.values(t).length&&r.Z.add(this.$refs.tasks,"MatcHidden")}},renderTask:function(t,e,i){var s=this.db.div("MatcPlayerTasksBarCntr").div("MatcPlayerTasksBar",i).build(this.$refs.tasks);s.style.left=Math.min(97,100*t)+"%",s.style.width=Math.max(3,100*e)+"%"},getAnnotation:function(){var t=this,e=[];return this.taskMatches&&this.taskMatches.foreach((function(i){var s={start:i.startTime-t.min,length:0};e.push(s)})),e},renderEventList:function(){for(var t=[],e=0;e<this.events.length;e++){var i=this.events[e];t.push(i)}t.sort((function(t,e){return t.time-e.time})),this.eventCntr.innerHTML="",this.cleanUpTempListener();for(var s=document.createElement("div"),n=0;n<t.length;n++){var a=t[n],d=a.type;if(d){if(!this.invisibleEvents[d]){var c=document.createElement("div");r.Z.add(c,"MatcPlayerEvent"),r.Z.add(c,a.type);var u=this.getMinute(a.time-this.min);if("WidgetClick"==d||"WidgetChange"==d||"ValidationError"==d||"ValidationErrorLine"==d){!a.state||"WidgetClick"!=d&&"WidgetChange"!=d?u+=" - "+this.getEventLabel(a.type):u+=" - "+this.getEventStateLabel(a.state);var v=this.model.widgets[a.widget];u+=v?" -  &quot;"+v.name+"&quot;":" -  &quot;"+a.widget+"&quot;"}else if("ScreenGesture"==d&&a.gesture){var m=a.gesture,g=this.model.screens[a.screen];u+=g?" - Screen "+this.getGestureLabel(m.type)+" -  &quot;"+g.name+"&quot;":" - Screen "+this.getGestureLabel(m.type)+" - &quot;"+a.screen+"&quot;"}else if("WidgetGesture"==d&&a.gesture){var f=a.gesture,p=this.model.screens[a.screen];u+=p?" - "+this.getGestureLabel(f.type)+" -  &quot;"+p.name+"&quot;":" - "+this.getGestureLabel(f.type)+" - &quot;"+a.screen+"&quot;";var y=this.model.widgets[a.widget];u+=y?" -  &quot;"+y.name+"&quot;":" -  &quot;"+a.widget+"&quot;"}else{var S=this.model.screens[a.screen];u+=S?" - "+this.getEventLabel(a.type)+" -  &quot;"+S.name+"&quot;":" - "+this.getEventLabel(a.type)+" - &quot;"+a.screen+"&quot;"}c.innerHTML=this.stripHTML(u),s.appendChild(c),this.tempOwn((0,o.Z)(c,h.Z.press,l.Z.hitch(this,"onEvent",a)))}}else{var w=document.createElement("div");r.Z.add(w,"MatcPlayerEvent MatcPlayerTagEvent");var M=this.getMinute(a.time-this.min)+" - Tag &quot;"+this.stripHTML(a.tag)+"&quot;";w.innerHTML=M,s.appendChild(w),this.tempOwn((0,o.Z)(w,h.Z.press,l.Z.hitch(this,"onEvent",a)));var x=document.createElement("span");r.Z.add(x,"mdi mdi-close-circle MatcPlayerEventRemove"),w.appendChild(x),this.tempOwn((0,o.Z)(x,h.Z.press,l.Z.hitch(this,"removeTag",a)))}}this.eventCntr.appendChild(s)},layout:function(t){var e=this,i=this.$refs.container,s=d.Z.position(i),n=this.getScaledSize(s,"auto",this.model);t.style.width=Math.round(n.w)+"px",t.style.height=n.h+"px",i.style.height=n.h+"px",i.appendChild(t);var a=d.Z.position(this.domNode);this.eventCntr.style.height=Math.floor(a.h)+"px",this.dialog&&(this.logger.log(-1,"layout","dialog >> "+a.h+" x "+a.w),a.w+=0,a.h+=0,setTimeout((function(){e.dialog.resize(a)}),30))},onEvent:function(t){this.currentTime=t.time-this.min,this.lastEventPos=0,this.preview.resetAnimations(),this.setTime(this.currentTime,!0)},onSliderChange:function(t){this.currentTime=t,this.lastEventPos=0,this.preview.resetAnimations(),this.setTime(t,!0)},setTime:function(t,e){if(this.time){this.time.innerHTML=this.getMinute(t)+" / "+this.getMinute(this.duration),this.slider.setValue(t);var i=this.getEvent(Math.floor(t));try{i.screen&&("ScreenAnimation"==i.type?this.preview.animateScreen(i,t,this.min):this.preview.setScreen(i.screen,i.scrollTop));var s=this._overLayStates[i.id];s&&this.preview.setOverlays(s),"OverlayShowAnimation"==i.type||"OverlayRemoveAnimation"==i.type?this.preview.animateOverlay(i,t,this.min):this.lastEvent&&"OverlayShowAnimation"==this.lastEvent.type&&this.preview.animateOverlay(this.lastEvent,t,this.min);var n=0;e&&(n=Math.abs(i.time-this.min-t)),i.x>0&&i.y>0&&n<100&&this.preview.setMarker(i,e);var a=this._widgetStates[i.id];for(var r in a){var o=a[r];this.preview.setWidgetState(r,o,e,t+this.min)}this.setScroll(i,t),this.setMouseCursor(i,t);var h=this.getAnimationIndex(t);if(this._widgetAnimationStates[h]){var l=this._widgetAnimationStates[h];this.preview.setWidgetAnimationStates(l)}else console.warn("setTime() > No animation data for time index",h)}catch(d){console.warn("VideoPlayer.setTime() > Error",d)}this.lastEventID=i.id,this.lastEvent=i}},setMouseCursor:function(t,e){var i=this.getAnimationIndex(e);this._mouseStates&&this._mouseStates[i]&&this.preview.setMouse(this._mouseStates[i])},setScroll:function(t,e){var i=this._scrollStates[t.id];if(i)if(i.children){i._ts||(i._scrollts=this.createTimeSeries(i.children)),e+=this.min;var s=i._scrollts.get(e);s?this.preview.setScroll(s.value):console.debug("setScroll()> No scrollEvent for event ",e)}else this.preview.setScroll(i.value);else console.warn("setScroll() > No scrollState for ",t.id)},_getLastValueForTime:function(t,e){var i=null;if(t)for(var s=0;s<t.length;s++){var n=t[s];if(!(n.time<=e))return i;i=n}else console.warn("_getLastValueForTime() > No values passed");return i},getEvent:function(t){for(var e=null,i=this.lastEventPos;i<this.events.length;i++){var s=this.events[i],n=s.time-this.min;if(n>t)break;e=s,this.lastEventPos=i}return e},getMinute:function(t){var e=Math.round(t/1e3),i=Math.floor(e/60),s=e%60;return s<10&&(s="0"+s),i+":"+s}},mounted:function(){}},T=x,_=i(1001),A=(0,_.Z)(T,s,n,!1,null,null,null),Z=A.exports}}]);
//# sourceMappingURL=838-legacy.4684b8f8.js.map