(function(){"use strict";var t={6319:function(t,e,n){var o=n(144),r=n(9132);o.Z.use(r.Z);var i=new r.Z({theme:{themes:{light:{primary:"#ff5a00",primaryAccent1:"#fff1ea",primaryAccent2:"#728F9B",primaryAccent3:"#B7C9CD",secondary:"#38373A",secondaryAccent1:"#6B6C6E",secondaryAccent2:"#98999B",secondaryAccent3:"#C2C3C4",success:"#1A5924",successAccent1:"#4AA832",successAccent2:"#9FCB8A",error:"#C83C22",errorAccent1:"#E8754C",errorAccent2:"#EBA386",info:"#075E8D",infoAccent1:"#3F7A9C",infoAccent2:"#6098B6",white:"#fff"}}}}),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[o("div",{staticClass:"d-flex align-center"},[o("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:n(5843),transition:"scale-transition",width:"40"}}),o("h2",[t._v(" Velo-finder ")])],1),o("v-spacer"),t.loader?o("v-progress-circular",{attrs:{indeterminate:"",color:"primaryAccent1"}}):t._e(),o("v-spacer"),o("router-link",{staticClass:"ml-2 mr-2",attrs:{to:"/"}},[o("v-icon",[t._v("mdi-map")])],1),t._v(" | "),o("router-link",{staticClass:"ml-2 mr-2",attrs:{to:"/list"}},[o("v-icon",[t._v("mdi-format-list-bulleted")])],1)],1),o("v-main",{staticStyle:{"background-color":"#fff1ea"}},[o("router-view")],1)],1)},a=[],c=n(140),l=function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let u=class extends o.Z{get loader(){return this.$store.getters.getLoader}mounted(){this.$store.dispatch("pollStations"),this.$store.dispatch("loadUserLocation")}};u=l([(0,c.wA)({})],u);var d=u,f=d,p=n(1001),h=n(3453),g=n.n(h),m=n(7524),v=n(3583),y=n(6428),b=n(7047),S=n(7877),_=n(624),k=n(9762),Z=(0,p.Z)(f,s,a,!1,null,null,null),w=Z.exports;g()(Z,{VApp:m.Z,VAppBar:v.Z,VIcon:y.Z,VImg:b.Z,VMain:S.Z,VProgressCircular:_.Z,VSpacer:k.Z});var A=n(5205);(0,A.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var L=n(8345),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("station-autocomplete"),n("stations-map")],1)},C=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("l-map",{staticStyle:{height:"92vh","z-index":"0"},attrs:{zoom:t.zoom,center:t.center},on:{"update:zoom":function(e){t.zoom=e},"update:center":function(e){t.center=e},click:function(e){return t.selectStation("")}}},[n("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.markers,(function(e){return n("l-marker",{key:e.id,attrs:{"lat-lng":e.latlng,icon:e.icon},on:{click:function(n){return t.clicked(e)}}},[n("stations-map-popup",{attrs:{marker:e}})],1)})),t.userLocation?n("l-marker",{attrs:{"lat-lng":t.userLocation,icon:t.userLocationIcon}}):t._e()],2)},j=[],R=n(3796),E=n(5352),I=n(2727),P=n(8380),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("l-popup",[n("v-row",{attrs:{dense:""}},[n("v-col",{attrs:{cols:"auto"}},[n("strong",[t._v(t._s(t.marker.name))])])],1),n("v-row",{attrs:{dense:""}},[n("v-col",[n("v-icon",[t._v("mdi-bicycle")]),t._v(" "+t._s(t.marker.free_bikes)+" ")],1),n("v-col",[n("v-icon",[t._v("mdi-lock-open-variant-outline")]),t._v(" "+t._s(t.marker.empty_slots)+" ")],1)],1),n("v-row",{attrs:{dense:""}},[n("v-col",[n("v-icon",[t._v("mdi-map-marker-outline")]),t._v(" "+t._s(t.marker.addres)+" ")],1)],1),n("v-row",{attrs:{dense:""}},[n("v-col",[n("rating",{attrs:{"station-id":t.marker.id}})],1)],1)],1)},V=[],B=n(7889),F=n(4481),T=function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let z=class extends c.w3{constructor(...t){super(...t),(0,R.Z)(this,"marker",void 0)}};T([(0,c.fI)(Object)],z.prototype,"marker",void 0),z=T([(0,c.wA)({components:{LPopup:B.Z,Rating:F.Z}})],z);var D=z,M=D,N=n(2102),U=n(2877),q=(0,p.Z)(M,$,V,!1,null,null,null),H=q.exports;g()(q,{VCol:N.Z,VIcon:y.Z,VRow:U.Z});var K=n(5243),G=n.n(K);class J{constructor(t){(0,R.Z)(this,"icon",void 0),(0,R.Z)(this,"latlng",void 0),(0,R.Z)(this,"id",void 0),(0,R.Z)(this,"empty_slots",void 0),(0,R.Z)(this,"free_bikes",void 0),(0,R.Z)(this,"name",void 0),(0,R.Z)(this,"addres",void 0),this.latlng=[t.latitude,t.longitude],this.id=t.id,this.empty_slots=t.empty_slots,this.free_bikes=t.free_bikes,this.name=t.name,this.addres=t.extra.address,this.icon=this.getIcon(!1)}getIcon(t){return G().icon({iconUrl:this.getIconLocation(),iconSize:t?[44,44]:[30,30],iconAnchor:t?[22,44]:[15,30]})}isEmpty(){return 0===this.empty_slots}isFull(){return 0===this.free_bikes}getIconLocation(){return this.isEmpty()?n(7663):this.isFull()?n(775):n(1163)}select(){this.icon=this.getIcon(!0)}deselect(){this.icon=this.getIcon(!1)}}var Q=function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let W=class extends c.w3{constructor(...t){super(...t),(0,R.Z)(this,"url","https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),(0,R.Z)(this,"attribution",'&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'),(0,R.Z)(this,"zoom",15),(0,R.Z)(this,"center",[51.221223,4.399851]),(0,R.Z)(this,"userLocationIcon",G().icon({iconUrl:n(8084),iconSize:[30,30],iconAnchor:[15,15]}))}created(){this.selectedStation?(this.zoom=18,this.onSelectedStationUpdate(this.selectedStation,null)):this.userLocation&&(this.center=this.userLocation)}get stations(){return this.$store.getters.getStations}get selectedStation(){return this.$store.getters.getSelectedStation}get userLocation(){return this.$store.getters.getUserLocation}get markers(){return this.stations.map((t=>new J(t)))}clicked(t){this.center=t.latlng,this.selectStation(t.id)}clickMap(){this.selectStation("")}selectStation(t){this.$store.dispatch("selectStation",t)}onSelectedStationUpdate(t,e){if(e?.id!==t?.id){if(t&&""!==t?.id){const e=this.markers.find((e=>e.id===t.id));e&&(e.select(),this.center=e.latlng)}if(e&&""!==e?.id){const t=this.markers.find((t=>t.id===e.id));t&&t.deselect()}}}};Q([(0,c.RL)("selectedStation")],W.prototype,"onSelectedStationUpdate",null),W=Q([(0,c.wA)({components:{LMap:E.Z,LTileLayer:I.Z,LMarker:P.Z,StationsMapPopup:H}})],W);var X=W,Y=X,tt=(0,p.Z)(Y,x,j,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"pa-2 pb-0",staticStyle:{position:"absolute",left:"0",right:"0",margin:"auto",top:"8pt","z-index":"1"},attrs:{"max-width":"300pt"}},[n("v-autocomplete",{attrs:{label:"Zoek",value:t.selectedStation,items:t.stationsForAutocomplete},on:{input:t.selectStation}})],1)},ot=[],rt=function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let it=class extends c.w3{get stations(){return this.$store.getters.getStations}get selectedStation(){return this.$store.getters.getSelectedStation}selectStation(t){this.$store.dispatch("selectStation",t?.id||null)}get stationsForAutocomplete(){return this.stations.map((t=>({text:t.name,value:t})))}};it=rt([(0,c.wA)({})],it);var st=it,at=st,ct=n(9480),lt=n(2660),ut=(0,p.Z)(at,nt,ot,!1,null,null,null),dt=ut.exports;g()(ut,{VAutocomplete:ct.Z,VCard:lt.Z});var ft=function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let pt=class extends c.w3{};pt=ft([(0,c.wA)({components:{StationAutocomplete:dt,StationsMap:et}})],pt);var ht=pt,gt=ht,mt=(0,p.Z)(gt,O,C,!1,null,null,null),vt=mt.exports;o.Z.use(L.Z);const yt=[{path:"/",name:"home",component:vt},{path:"/list",name:"list",component:()=>n.e(443).then(n.bind(n,5859))}],bt=new L.Z({mode:"history",base:"/",routes:yt});var St=bt,_t=n(629),kt=n(9669),Zt=n.n(kt);class wt{constructor(t){(0,R.Z)(this,"empty_slots",void 0),(0,R.Z)(this,"extra",void 0),(0,R.Z)(this,"free_bikes",void 0),(0,R.Z)(this,"id",void 0),(0,R.Z)(this,"latitude",void 0),(0,R.Z)(this,"longitude",void 0),(0,R.Z)(this,"name",void 0),(0,R.Z)(this,"timestamp",void 0),this.empty_slots=t?.empty_slots||0,this.extra=t?.extra||{address:"",status:"",uid:-1},this.free_bikes=t?.free_bikes||0,this.id=t?.id||"",this.latitude=t?.latitude||0,this.longitude=t?.longitude||0,this.name=t?.name||"",this.timestamp=t?.timestamp||""}isEmpty(){return 0===this.empty_slots}isFull(){return 0===this.free_bikes}}o.Z.use(_t.ZP);class At{constructor(t,e){(0,R.Z)(this,"stationId",void 0),(0,R.Z)(this,"rating",void 0),this.stationId=t,this.rating=e}}var Lt=new _t.ZP.Store({state:{stations:[],selectedStation:null,loader:!1,ratings:[],userLocation:null},getters:{getStations(t){return t.stations},getSelectedStation(t){return t.selectedStation},getLoader(t){return t.loader},getRatingById:t=>e=>{const n=t.ratings.find((t=>t.stationId===e));return n?n.rating:3},getUserLocation(t){return t.userLocation}},mutations:{addStation(t,e){t.stations.push(e)},clearStations(t){t.stations=[]},selectStation(t,e){t.selectedStation=e},deselectStation(t){t.selectedStation=null},setLoaderLoading(t){t.loader=!0},setLoaderDone(t){t.loader=!1},addRating(t,e){const n=t.ratings.find((t=>t.stationId===e.stationId));n?n.rating=e.rating:t.ratings.push(e)}},actions:{pollStations(t,e){e=e||3e4,t.dispatch("fetchStations"),setTimeout((()=>t.dispatch("pollStations",e)),e)},fetchStations(t){t.commit("setLoaderLoading"),Zt().get("https://api.citybik.es/v2/networks/velo-antwerpen").then((t=>t.data)).then((t=>t.network)).then((e=>{t.commit("clearStations"),e.stations.forEach((e=>t.commit("addStation",new wt(e))))})).finally((()=>setTimeout((()=>t.commit("setLoaderDone")),1500)))},updateRating(t,{rating:e,id:n}){t.commit("addRating",new At(n,e))},selectStation(t,e){const n=t.state.stations.find((t=>t.id===e));n?t.commit("selectStation",n):t.commit("deselectStation")},async loadUserLocation(t){navigator.geolocation.getCurrentPosition((e=>{t.state.userLocation=[e.coords.latitude,e.coords.longitude]}),(t=>{console.warn(t.message)}))}},modules:{}});o.Z.config.productionTip=!1,new o.Z({router:St,store:Lt,vuetify:i,render:t=>t(w)}).$mount("#app")},4481:function(t,e,n){n.d(e,{Z:function(){return m}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-rating",{attrs:{"empty-icon":"mdi-star-outline","full-icon":"mdi-star",hover:"",length:5,value:t.rating},on:{input:function(e){return t.updateRating(e,t.stationId)}}})],1)},r=[],i=n(3796),s=n(140),a=function(t,e,n,o){var r,i=arguments.length,s=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(i<3?r(s):i>3?r(e,n,s):r(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};let c=class extends s.w3{constructor(...t){super(...t),(0,i.Z)(this,"stationId",void 0)}updateRating(t,e){this.$store.dispatch("updateRating",{rating:t,id:e})}get rating(){return this.$store.getters.getRatingById(this.stationId)}};a([(0,s.fI)(String)],c.prototype,"stationId",void 0),c=a([(0,s.wA)({})],c);var l=c,u=l,d=n(1001),f=n(3453),p=n.n(f),h=n(2436),g=(0,d.Z)(u,o,r,!1,null,null,null),m=g.exports;p()(g,{VRating:h.Z})},8084:function(t,e,n){t.exports=n.p+"img/current-location.a20d0c52.svg"},5843:function(t,e,n){t.exports=n.p+"img/logo-velo.98f11c8c.svg"},7663:function(t,e,n){t.exports=n.p+"img/pin_empty.d489df98.svg"},775:function(t,e,n){t.exports=n.p+"img/pin_full.85ae7c9b.svg"},1163:function(t,e,n){t.exports=n.p+"img/pin_regular.97ef7cef.svg"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var s=1/0;for(u=0;u<t.length;u++){o=t[u][0],r=t[u][1],i=t[u][2];for(var a=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(a=!1,i<s&&(s=i));if(a){t.splice(u--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.b33195cc.js"}}(),function(){n.miniCssF=function(t){return"css/about.b91bbb06.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="rombit-case-2:";n.l=function(o,r,i,s){if(t[o])t[o].push(r);else{var a,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+i){a=d;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",e+i),a.src=o),t[o]=[r];var f=function(e,n){a.onerror=a.onload=null,clearTimeout(p);var r=t[o];if(delete t[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)n();else{var s=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=a,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=i,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],i=r.getAttribute("data-href");if(i===t||i===e)return r}},o=function(o){return new Promise((function(r,i){var s=n.miniCssF(o),a=n.p+s;if(e(s,a))return r();t(o,a,r,i)}))},r={143:0};n.f.miniCss=function(t,e){var n={443:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=i);var s=n.p+n.u(e),a=new Error,c=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}};n.l(s,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,s=o[0],a=o[1],c=o[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(c)var u=c(n)}for(e&&e(o);l<s.length;l++)i=s[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(u)},o=self["webpackChunkrombit_case_2"]=self["webpackChunkrombit_case_2"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(6319)}));o=n.O(o)})();
//# sourceMappingURL=app.335624db.js.map