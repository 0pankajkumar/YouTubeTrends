(function(g){var window=this;var x5=function(a,b,c){var d=b.dc();g.U(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.kd(c?c:"mqdefault.jpg");var f=b instanceof g.AO&&b.lengthSeconds?g.cV(b.lengthSeconds):null,k=!!e;e=k&&"RD"==(new g.xQ(e.substr(0,2),e.substr(2))).type;var l=b instanceof g.AO?b.Ka:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:b.author,aria_label:b.Ul||g.$G("YTP_WATCH_VIDEO_OR_PLAYLIST",{TITLE:b.title},b.title),duration:f,url:b.Hm(),
is_live:l,is_list:k,is_mix:e,background:c?"background-image: url("+c+")":""};b instanceof g.zQ&&(d.playlist_length=b.getLength());a.update(d)},y5=function(a,b){g.zH.call(this,{I:"div",
fa:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.player=a;this.created=!1},z5=function(a){g.W.call(this,{I:"div",
M:"ytp-upnext",U:{"aria-label":"{{aria_label}}"},O:[{I:"div",M:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{I:"span",M:"ytp-upnext-top",O:[{I:"span",M:"ytp-upnext-header",da:"Up Next"},{I:"span",M:"ytp-upnext-title",da:"{{title}}"},{I:"span",M:"ytp-upnext-author",da:"{{author}}"}]},{I:"a",M:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"Play next video"},O:[{I:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},O:[{I:"circle",M:"ytp-svg-autoplay-circle",
U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",M:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",M:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",M:"ytp-upnext-bottom",O:[{I:"span",M:"ytp-upnext-cancel"},{I:"span",M:"ytp-upnext-paused",da:"Auto-play is paused"}]}]});this.F=null;
var b=this.o["ytp-upnext-cancel"];this.F=new g.W({I:"button",fa:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"Cancel autoplay"},da:"Cancel"});g.N(this,this.F);this.F.W("click",this.qS,this);this.F.xa(b);this.B=a;this.L=this.o["ytp-svg-autoplay-ring"];this.H=this.G=this.C=this.D=null;this.J=new g.V(this.No,5E3,this);g.N(this,this.J);this.K=0;this.R(this.o["ytp-upnext-autoplay-icon"],"click",this.DU);this.cE();this.R(a,"autonavvisibility",this.cE);this.R(a,"mdxnowautoplaying",
this.RT);this.R(a,"mdxautoplaycanceled",this.ST);this.R(a,"mdxautoplayupnext",this.KG);3==this.B.Ta()&&(a=(a=g.aU(g.TT(this.B)))?a.rL():null)&&this.KG(a)},A5=function(a,b){if(!a.C){g.YF("a11y-announce","Up Next "+a.D.title);
a.K=g.iG();a.C=new g.V((0,g.B)(a.Fs,a,b),25);a.Fs(b);var c=b||g.Y(a.B).experiments.A("autoplay_time")||1E4;a.B.ya("onAutonavCoundownStarted",c)}g.Bq(a.element,"ytp-upnext-autoplay-paused")},C5=function(a){B5(a);
a.K=g.iG();a.Fs();g.T(a.element,"ytp-upnext-autoplay-paused")},B5=function(a){a.C&&(a.C.dispose(),a.C=null)},D5=function(a,b){b=void 0===b?!1:b;
if(g.Y(a.B).experiments.o("autonav_notifications")&&b&&window.Notification&&window.document.hasFocus){var c=window.Notification.permission;"default"==c?window.Notification.requestPermission():"granted"!=c||window.document.hasFocus()||(c=a.D.dc(),a.No(),a.G=new window.Notification("Up Next",{body:c.title,icon:c.kd()}),a.H=a.R(a.G,"click",a.tU),a.J.start())}B5(a);a.B.Zk(!1,b)},kCa=function(a){y5.call(this,a,"subscribecard-endscreen");
var b=a.getVideoData();this.B=new g.W({I:"div",M:"ytp-subscribe-card",O:[{I:"img",M:"ytp-author-image",U:{src:b.profilePicture}},{I:"div",M:"ytp-subscribe-card-right",O:[{I:"div",M:"ytp-author-name",da:b.author},{I:"div",M:"html5-subscribe-button-container"}]}]});g.N(this,this.B);this.B.xa(this.element);this.C=new g.JZ("Subscribe",null,"Unsubscribe",null,!0,!1,b.Gl,b.subscribed,"trailer-endscreen",null,null,a);g.N(this,this.C);this.C.xa(this.B.o["html5-subscribe-button-container"]);this.hide()},E5=
function(a){var b=g.Y(a),c=g.lI||g.pf?{style:"will-change: opacity"}:void 0,d=b.o,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.W.call(this,{I:"a",fa:e,U:{href:"{{url}}",target:d?"_blank":"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},O:[{I:"div",M:"ytp-videowall-still-image",U:{style:"{{background}}"}},{I:"span",M:"ytp-videowall-still-info",O:[{I:"span",M:"ytp-videowall-still-info-bg",O:[{I:"span",M:"ytp-videowall-still-info-content",U:c,O:[{I:"span",M:"ytp-videowall-still-info-title",da:"{{title}}"},{I:"span",
M:"ytp-videowall-still-info-author",da:"{{author_and_views}}"},{I:"span",M:"ytp-videowall-still-info-live",da:"Live"},{I:"span",M:"ytp-videowall-still-info-duration",da:"{{duration}}"}]}]}]},{I:"span",fa:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],O:[{I:"span",M:"ytp-videowall-still-listlabel-icon"},"Playlist",{I:"span",M:"ytp-videowall-still-listlabel-length",O:[" (",{I:"span",da:"{{playlist_length}}"},")"]}]},{I:"span",fa:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],
O:[{I:"span",M:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{I:"span",M:"ytp-videowall-still-listlabel-length",da:" (50+)"}]}]});this.F=d;this.B=a;this.C=null;this.D=new g.HF(this);g.N(this,this.D);this.W("click",this.H);this.W("keypress",this.J);this.D.R(a,"videodatachange",this.G);g.Y(a).Y&&(a=a.app.ma,b=this.element,g.Ma(a.o,b),g.Pa(a.o,b),c=String(a.H++),b.setAttribute("data-visual-id",c),g.jf(this,(0,g.B)(a.G,a,b)));this.G()},F5=function(a){y5.call(this,a,"videowall-endscreen");
this.K=a;this.G=0;this.C=[];this.H=this.F=this.D=null;this.J=this.P=!1;this.Z=new g.HF(this);g.N(this,this.Z);this.L=new g.V(g.Da(g.T,this.element,"ytp-show-tiles"),0);g.N(this,this.L);var b=new g.W({I:"button",fa:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"Previous"},O:[g.WU()]});g.N(this,b);b.xa(this.element);b.W("click",this.qQ,this);this.N=new g.tH({I:"div",M:"ytp-endscreen-content"});g.N(this,this.N);this.N.xa(this.element);b=new g.W({I:"button",fa:["ytp-button","ytp-endscreen-next"],
U:{"aria-label":"Next"},O:[g.XU()]});g.N(this,b);b.xa(this.element);b.W("click",this.pQ,this);this.B=new z5(a);g.N(this,this.B);g.tU(this.player,this.B.element,4);this.hide()},G5=function(a){return g.vU(a.player)&&a.qz()&&!a.H},lCa=function(a,b){return(0,g.I)(b.suggestions,function(b){b=g.FX(g.Y(a.K),b);
g.N(a,b);return b})},H5=function(a){var b=a.Iv();
b!=a.P&&(a.P=b,a.player.V("autonavvisibility"))},I5=function(a){g.DU.call(this,a);
this.o=null;this.A=new g.HF(this);g.N(this,this.A);this.B=g.Y(a);mCa(a)?this.o=new F5(this.player):this.B.Fa?this.o=new kCa(this.player):this.o=new y5(this.player);g.N(this,this.o);g.tU(this.player,this.o.element,4);this.wF();this.A.R(a,"videodatachange",this.wF,this);this.A.R(a,"crn_endscreen",this.qO,this);this.A.R(a,"crx_endscreen",this.rO,this)},mCa=function(a){a=g.Y(a);
return a.gd&&!a.Fa};
g.r(y5,g.zH);y5.prototype.create=function(){this.created=!0};
y5.prototype.destroy=function(){this.created=!1};
y5.prototype.qz=function(){return!1};
y5.prototype.Iv=function(){return!1};g.r(z5,g.W);g.h=z5.prototype;g.h.No=function(){this.G&&(this.J.stop(),this.Ha(this.H),this.H=null,this.G.close(),this.G=null)};
g.h.cE=function(){g.yH(this,g.UT(this.B))};
g.h.tU=function(){window.focus();this.No()};
g.h.hide=function(){g.W.prototype.hide.call(this)};
g.h.Fs=function(a){a=a||g.Y(this.B).experiments.A("autoplay_time")||1E4;var b=Math.min(g.iG()-this.K,a);a=Math.min(b/a,1);this.L.setAttribute("stroke-dashoffset",-211*(a+1));1<=a&&3!=this.B.Ta()?D5(this,!0):this.C&&this.C.start()};
g.h.DU=function(a){!g.Zd(this.F.element,g.vF(a))&&g.GW(a,this.B)&&D5(this)};
g.h.qS=function(){g.XT(this.B,!0)};
g.h.RT=function(a){this.B.Ta();this.show();A5(this,a)};
g.h.KG=function(a){this.B.Ta();this.D&&this.D.dc().videoId==a.dc().videoId||(this.D=a,x5(this,a,"hqdefault.jpg"))};
g.h.ST=function(){this.B.Ta();B5(this);this.hide()};
g.h.X=function(){B5(this);this.No();g.W.prototype.X.call(this)};g.r(kCa,y5);g.r(E5,g.W);E5.prototype.wl=function(){g.yU(this.B,this.element);var a=this.C.dc().videoId,b=this.C.getPlaylistId();g.a0(this.B.app,a,this.C.Id,b,void 0,void 0,void 0)};
E5.prototype.H=function(a){g.GW(a,this.B,this.F,this.C.Id||void 0)&&this.wl()};
E5.prototype.J=function(a){switch(a.keyCode){case 13:case 32:g.AF(a)||(this.wl(),g.zF(a))}};
E5.prototype.G=function(){var a=this.B.getVideoData(),b=g.Y(this.B);this.F=a.isDni?!1:b.o};g.r(F5,y5);g.h=F5.prototype;g.h.create=function(){y5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.D=lCa(this,a),this.F=a);this.kh();this.Z.R(this.player,"appresize",this.kh);this.Z.R(this.player,"onVideoAreaChange",this.kh);this.Z.R(this.player,"videodatachange",this.rQ);this.Z.R(this.player,"autonavchange",this.YC);this.Z.R(this.player,"autonavcancel",this.oQ);this.Z.R(this.element,"transitionend",this.VV)};
g.h.destroy=function(){g.JF(this.Z);g.mf(this.C);this.C=[];this.D=null;y5.prototype.destroy.call(this);g.Bq(this.element,"ytp-show-tiles");this.L.stop()};
g.h.qz=function(){return 1!=this.F.autonavState};
g.h.show=function(){y5.prototype.show.call(this);g.Bq(this.element,"ytp-show-tiles");g.Y(this.player).B?g.nu(this.L):this.L.start();(this.J||this.H&&this.H!=this.F.clientPlaybackNonce)&&g.XT(this.player,!1);G5(this)?(H5(this),2==this.F.autonavState?g.Y(this.player).experiments.o("fast_autonav_in_background")&&3==this.player.xj()?D5(this.B,!0):A5(this.B):3==this.F.autonavState&&C5(this.B)):(g.XT(this.player,!0),H5(this))};
g.h.hide=function(){y5.prototype.hide.call(this);C5(this.B);H5(this)};
g.h.VV=function(a){g.vF(a)==this.element&&this.kh()};
g.h.kh=function(){if(this.D&&this.D.length){g.T(this.element,"ytp-endscreen-paginate");var a=g.kU(this.K,!0),b=g.NH(this.K);b&&(b=b.nd()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),k=Math.max(a.height/54,2),l=this.D.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<k);){var p=b/2,t=e/2,w=b<=f-2&&n>=t*m,z=e<=k-2&&n>=p*m;if((p+1)/t*d/c>c/(p/(t+1)*d)&&z)n-=p*m,e+=2;else if(w)n-=t*m,b+=2;else if(z)n-=p*m,e+=2;else break}d=
!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m*=c;n*=c;m*=g.ld(a.width/m||1,1,1.21);n*=g.ld(a.height/n||1,1,1.21);m=Math.floor(Math.min(a.width,m));n=Math.floor(Math.min(a.height,n));a=this.N.element;g.Ph(a,m,n);g.wh(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});c=this.B;f=this.D[0];c.D=f;x5(c,f,"hqdefault.jpg");g.U(this.element,"ytp-endscreen-takeover",G5(this));H5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(k=0;k<e;k++)if(p=c,t=0,d&&f>=b-2&&k>=e-
2?t=1:0==k%2&&0==f%2&&(2>k&&2>f?0==k&&0==f&&(t=2):t=2),p=g.md(p+this.G,l),0!=t){w=this.C[c];w||(w=new E5(this.player),this.C[c]=w,a.appendChild(w.element));z=Math.floor(n*k/e);var E=Math.floor(m*f/b),J=Math.floor(n*(k+t)/e)-z-4,Q=Math.floor(m*(f+t)/b)-E-4;g.Dh(w.element,E,z);g.Ph(w.element,Q,J);g.wh(w.element,"transitionDelay",(k+f)/20+"s");g.U(w.element,"ytp-videowall-still-mini",1==t);g.U(w.element,"ytp-videowall-still-large",2<t);t=w;p=this.D[p];t.C!=p&&(t.C=p,x5(t,p,g.zq(t.element,"ytp-videowall-still-large")?
"hqdefault.jpg":"mqdefault.jpg"),w=(p=p.Id)&&p.itct)&&(p=t.B,g.Y(p).Y&&(p=p.app.ma,t=t.element,z=t.getAttribute("data-visual-id"),g.Ma(p.o,t),g.wU(p,"onLogServerVeCreated",{id:z,tracking_params:w})));c++}g.U(this.element,"ytp-endscreen-paginate",c<l);for(b=this.C.length-1;b>=c;b--)e=this.C[b],g.Td(e.element),g.kf(e);this.C.length=c}};
g.h.rQ=function(){var a=this.player.getVideoData();this.F!=a&&(this.G=0,this.D=lCa(this,a),this.F=a,this.kh())};
g.h.pQ=function(){this.G+=this.C.length;this.kh()};
g.h.qQ=function(){this.G-=this.C.length;this.kh()};
g.h.uN=function(){return!!this.B.C};
g.h.YC=function(a){1==a?(this.J=!1,this.H=this.F.clientPlaybackNonce,B5(this.B),this.A&&this.kh()):(this.J=!0,this.A&&G5(this)&&(2==a?A5(this.B):3==a&&C5(this.B)))};
g.h.oQ=function(a){if(a){for(a=0;a<this.C.length;a++)g.zU(this.K,this.C[a].element,!0);this.YC(1)}else this.H=null,this.J=!1;this.kh()};
g.h.Iv=function(){return this.A&&G5(this)};g.r(I5,g.DU);g.h=I5.prototype;g.h.wC=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!mCa(this.player)||b;a=g.bP(a,"ypc_module");var c=g.E_(this.player.app);return b&&!a&&!c};
g.h.vC=function(){return this.o.Iv()};
g.h.qN=function(){return this.vC()?this.o.uN():!1};
g.h.X=function(){g.rU(this.player,"endscreen");g.DU.prototype.X.call(this)};
g.h.load=function(){g.DU.prototype.load.call(this);this.o.show()};
g.h.unload=function(){g.DU.prototype.unload.call(this);this.o.hide();this.o.destroy()};
g.h.qO=function(a){this.wC()&&(this.o.created||this.o.create(),"load"==a.getId()&&this.load())};
g.h.rO=function(a){"load"==a.getId()&&this.loaded&&this.unload()};
g.h.wF=function(){g.rU(this.player,"endscreen");var a=Math.max(1E3*(this.player.getVideoData().lengthSeconds-10),0);a=new g.vQ(a,0x8000000000000,{id:"preload",namespace:"endscreen"});g.N(this,a);var b=new g.vQ(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});g.N(this,b);g.nU(this.player,[a,b])};g.AX.endscreen=I5;})(_yt_player);
