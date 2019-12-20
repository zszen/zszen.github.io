var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(r,i){function a(e){try{l(o.next(e))}catch(t){i(t)}}function s(e){try{l(o["throw"](e))}catch(t){i(t)}}function l(e){e.done?r(e.value):new n(function(t){t(e.value)}).then(a,s)}l((o=o.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return o([e,t])}}function o(n){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,i&&(a=i[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(i,n[1])).done)return a;switch(i=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return l.label++,{value:n[1],done:!1};case 5:l.label++,i=n[1],n=[0];continue;case 7:n=l.ops.pop(),l.trys.pop();continue;default:if(a=l.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){l=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){l.label=n[1];break}if(6===n[0]&&l.label<a[1]){l.label=a[1],a=n;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(n);break}a[2]&&l.ops.pop(),l.trys.pop();continue}n=t.call(e,l)}catch(o){n=[6,o],i=0}finally{r=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var r,i,a,s,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},Com_withSlideAction=function(e){function t(){var t=e.call(this)||this;return t.isSlided=!1,t.potX=Number.NaN,t.func_touch_down=null,t.func_touch_up=null,t.func_slide_2left=null,t.func_slide_2right=null,t}return __extends(t,e),t.prototype.add_act_slide=function(){var e=this;this.touchChildren=!1,this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,function(t){e.isSlided=!1,e.potX=t.stageX,e.func_touch_down&&e.func_touch_down()},this),this.addEventListener(egret.TouchEvent.TOUCH_MOVE,function(t){e.isSlided||(t.stageX-e.potX<-Conf.Single().val_slide_check?e.func_slide_2left&&(e.func_slide_2left(),e.isSlided=!0):t.stageX-e.potX>Conf.Single().val_slide_check&&e.func_slide_2right&&(e.func_slide_2right(),e.isSlided=!0))},this),this.addEventListener(egret.TouchEvent.TOUCH_END,function(t){e.func_touch_up&&e.func_touch_up()},this),this.addEventListener(egret.TouchEvent.TOUCH_CANCEL,function(t){e.func_touch_up&&e.func_touch_up()},this)},t}(eui.Component);__reflect(Com_withSlideAction.prototype,"Com_withSlideAction");var SceneManager=function(){function e(){this.design_size={width:750,height:1330},this.real_size={width:0,height:0},this.offset_size={width:0,height:0}}return e.getInstance=function(){return null===this._manager&&(this._manager=new e),this._manager},e.prototype.goScene=function(e){var t={x:750,y:1330},n={x:Conf.Single().stage.stageWidth,y:Conf.Single().stage.stageHeight},o={x:n.x/t.x,y:n.y/t.y},r={x:t.x-n.x,y:t.y-n.y};e.scaleX=e.scaleY=Math.min(o.x,o.y),e.x+=.5*r.x,this.currentScene&&(this.rootScene.removeChild(this.currentScene),this.currentScene=null);try{e.create_video()}catch(i){console.log(i)}this.rootScene.addChild(e),this.currentScene=e},e._manager=null,e}();__reflect(SceneManager.prototype,"SceneManager");var Scene=function(e){function t(){return e.call(this)||this}return __extends(t,e),t}(eui.Component);__reflect(Scene.prototype,"Scene",["eui.UIComponent","egret.DisplayObject"]);var Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),Conf.Single().stage=this.stage,Func.Single().create_video(),egret.lifecycle.addLifecycleListener(function(e){}),egret.lifecycle.onPause=function(){egret.ticker.pause()},egret.lifecycle.onResume=function(){egret.ticker.resume()};var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){switch(e.label){case 0:return[4,this.loadResource()];case 1:return e.sent(),this.createGameScene(),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n;return __generator(this,function(o){switch(o.label){case 0:return o.trys.push([0,6,,7]),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return o.sent(),[4,RES.loadGroup("loadingbar")];case 2:return o.sent(),[4,this.loadTheme()];case 3:return o.sent(),e=new Layer_Bg,this.stage.addChild(e),t=new LoadingPage,this.stage.addChild(t),[4,t.createView()];case 4:return o.sent(),[4,RES.loadGroup("preload",0,t)];case 5:return o.sent(),this.stage.removeChild(t),[3,7];case 6:return n=o.sent(),console.error(n),[3,7];case 7:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var o=new eui.Theme("resource/default.thm.json",e.stage);o.addEventListener(eui.UIEvent.COMPLETE,function(){t()},e)})},t.prototype.createGameScene=function(){var e=SceneManager.getInstance();e.rootScene=this.stage;var t=new S_Index;e.goScene(t)},t}(eui.UILayer);__reflect(Main.prototype,"Main");var CardBgColor;!function(e){e[e.major=12379386]="major",e[e.n1=16760524]="n1",e[e.n1e=12832511]="n1e",e[e.n2=10010100]="n2",e[e.n2e=13565859]="n2e",e[e.n3=16502696]="n3",e[e.n3e=9108696]="n3e",e[e.n4=16774821]="n4",e[e.n4e=16298962]="n4e",e[e.n5=8972213]="n5"}(CardBgColor||(CardBgColor={}));var Func=function(){function e(){}return e.prototype.create_video=function(){},e.prototype.load_video=function(e){document.show_video(e)},e.prototype.play_video=function(e){void 0===e&&(e=null)},e.prototype.stop_video=function(){document.hide_video()},e.prototype.setVideoFrame=function(e){if(Conf.Single().video_frame){for(var t=document.getElementById("videoc"),n=document.documentElement.clientWidth/Conf.Single().stage.stageWidth,o=document.documentElement.clientHeight/Conf.Single().stage.stageHeight,r=Math.min(n,o),i=n,a=o,s=r,l=Conf.Single().video_frame.parent,c=Conf.Single().video_frame.localToGlobal(0,0);l;)l.scaleX&&(r*=l.scaleX+.5*(1-l.scaleX),n*=l.scaleX+.5*(1-l.scaleX),o*=l.scaleY+.5*(1-l.scaleY),s*=l.scaleX+(1-l.scaleX)*-.25,i*=l.scaleX+(1-l.scaleX)*-.25,a*=l.scaleY+(1-l.scaleY)*-.25),l=l.parent;t.style.width=Conf.Single().video_frame.width*n+"px",t.style["margin-left"]=c.x*i+"px",t.style["margin-top"]=c.y*a+"px"}e&&document.show_video(e)},e.Single=function(){return null==this._single&&(this._single=new e),this._single},e._single=null,e}();__reflect(Func.prototype,"Func");var Layer_Bg=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t}(eui.Component);__reflect(Layer_Bg.prototype,"Layer_Bg",["eui.UIComponent","egret.DisplayObject"]);var Layer_share=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t}(eui.Component);__reflect(Layer_share.prototype,"Layer_share",["eui.UIComponent","egret.DisplayObject"]);var LoadingPage=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this);var t=this.person.verticalCenter;egret.Tween.get(this.person,{loop:!0,onChange:function(){}}).to({verticalCenter:t+20},10).to({verticalCenter:t},600,egret.Ease.backOut);for(var n=1;12>=n;n++){var o=this["t"+n];o.isTwing=!1,o.alpha=0}},t.prototype.createView=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},t.prototype.onProgress=function(e,t){console.log(e,t),this.bar.value=100*e/t;for(var n=1;12>=n;n++){var o=this["t"+(13-n)];12*e/t>=n&&0==o.isTwing&&(o.isTwing=!0,egret.Tween.get(o,{loop:!1}).to({alpha:1},300))}},t}(eui.Component);__reflect(LoadingPage.prototype,"LoadingPage",["eui.UIComponent","egret.DisplayObject","RES.PromiseTaskReporter"]);var LoadingUI=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.createView=function(){return __awaiter(this,void 0,void 0,function(){var e,t=this;return __generator(this,function(n){return e=new egret.Shape,e.graphics.beginFill(2902923),e.graphics.drawRect(0,0,this.stage.stageWidth,this.stage.stageHeight),e.graphics.endFill(),this.addChild(e),[2,new Promise(function(e,n){RES.getResAsync("bg_png").then(function(n){var o=new egret.Bitmap(n);o.width=t.stage.stageWidth,o.height=t.stage.stageHeight,t.addChild(o),e(!0)})})]})})},t.prototype.onProgress=function(e,t){console.log(e,t)},t}(egret.Sprite);__reflect(LoadingUI.prototype,"LoadingUI",["RES.PromiseTaskReporter"]);var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function o(o){t.call(n,o,e)}if(RES.hasRes(e)){var r=RES.getRes(e);r?o(r):RES.getResAsync(e,o,this)}else RES.getResByUrl(e,o,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var S_Index=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.add_act_slide(),this.area.mask=this.masker,this.layer_bg=new S_Major,this.bg.addChild(this.layer_bg),this.layer_bg.jumpTo(0);var t=this;this.func_slide_2left=function(){Func.Single().setVideoFrame("resource/res/video/v1.mp4"),console.log("next page"),t.contents.visible=!1,t.layer_bg.turnTo(1,function(){var e=new S_P1;SceneManager.getInstance().goScene(e)})},this.func_slide_2right=function(){console.log("prev page"),t.contents.visible=!1,t.layer_bg.turnTo(-1,function(){var e=new S_P1;SceneManager.getInstance().goScene(e)})};var n=1,o=this.arrawToLeft;egret.Tween.get(o,{loop:!0}).to({x:o.x-20},600*n,egret.Ease.cubicIn).wait(10).to({x:o.x},600*n,egret.Ease.cubicOut).wait(10),o=this.arrawHand,o.rotation=3,egret.Tween.get(o,{loop:!0}).to({rotation:-3},600*n,egret.Ease.cubicIn).wait(10).to({rotation:3},600*n,egret.Ease.cubicOut).wait(10);for(var r=function(e){if(e>6){var t=i["c"+(e-6)];return t.visible=!1,t.scaleX=t.scaleY=0,t.rotation=-5,egret.Tween.get(t).wait(200*e+300).set({visible:!0}).to({scaleX:1,scaleY:1,rotation:0},600,egret.Ease.backOut).call(function(e){e.oy=e.y,egret.Tween.get(e,{loop:!0}).wait(3e3*Math.random()+300).set({y:e.oy-30}).to({y:e.oy},600,egret.Ease.bounceOut)},t,[t]),"continue"}var n=i["p"+e];return 6==e?(egret.Tween.get(n).wait(200*e+300).call(function(){egret.Tween.get(n,{loop:!0}).to({rotation:360},1e4)}),"continue"):(n.y+=500,n.visible=!1,void egret.Tween.get(n).wait(200*e+300).set({visible:!0}).to({y:n.y-500},800,egret.Ease.backOut))},i=this,a=1;9>=a;a++)r(a)},t}(Com_withSlideAction);__reflect(S_Index.prototype,"S_Index",["eui.UIComponent","egret.DisplayObject"]);var S_Major=function(e){function t(){var t=e.call(this)||this;return t.poolColor=[],t.cur_page=0,t.poolColor.push(CardBgColor.major),t.poolColor.push(CardBgColor.n1),t.poolColor.push(CardBgColor.n1e),t.poolColor.push(CardBgColor.n2),t.poolColor.push(CardBgColor.n2e),t.poolColor.push(CardBgColor.n3),t.poolColor.push(CardBgColor.n3e),t.poolColor.push(CardBgColor.n4),t.poolColor.push(CardBgColor.n4e),t.poolColor.push(CardBgColor.n5),t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),Conf.Single().video_frame=this.video_frame;for(var t=0;6>t;t++){var n=this["card"+t];n.info={verticalCenter:n.verticalCenter,horizontalCenter:n.horizontalCenter,width:n.width,height:n.height}}},t.prototype.remove_first_data=function(){var e=this.poolColor.indexOf(CardBgColor.major);e&&this.poolColor.splice(e,1)},t.prototype.setHandVisible=function(e){this.toLeft.visible=e,this.toRight.visible=e},t.prototype.jumpTo=function(e){console.log(this.poolColor[e],CardBgColor.major),this.poolColor[e]==CardBgColor.major&&this.setHandVisible(!1),this.cur_page=e;for(var t=0;6>t;t++){var n=this["card"+t],o=this["card_color"+t];n.index=(e+t-3+this.poolColor.length)%this.poolColor.length,o.fillColor=this.poolColor[n.index]}},t.prototype.turnTo=function(e,t){var n=this;this.setHandVisible(!1);for(var o=200,r=this.poolColor.length,i=this.cur_page+e,a=(i+r)%r,s=0;6>s;s++){var l=this["card"+s],c=null;c=e>0?this["card"+(s-1+6)%6]:this["card"+(s+1+6)%6],egret.Tween.get(l).to({verticalCenter:c.verticalCenter,horizontalCenter:c.horizontalCenter,width:c.width,height:c.height},o).call(function(e){e.verticalCenter=e.info.verticalCenter,e.horizontalCenter=e.info.horizontalCenter,e.width=e.info.width,e.height=e.info.height},l,[l])}egret.Tween.get(this).wait(o).call(function(){n.jumpTo(a),t&&(n.setHandVisible(!0),t())},this)},t}(eui.Component);__reflect(S_Major.prototype,"S_Major",["eui.UIComponent","egret.DisplayObject"]);var S_P1=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this),this.add_act_slide(),this.layer_bg=new S_Major,this.bg.addChild(this.layer_bg),this.layer_bg.jumpTo(1),this.p1.mask=this.masker,this.p1.y+=300,egret.Tween.get(this.p1).wait(300).to({y:this.p1.y-300},800,egret.Ease.backOut),this.func_slide_2left=function(){Func.Single().stop_video(),console.log("next page"),this.contents.visible=!1,this.layer_bg.turnTo(1,function(){var e=new S_Index;SceneManager.getInstance().goScene(e)})},this.func_slide_2right=function(){Func.Single().stop_video(),console.log("prev page"),this.contents.visible=!1,this.layer_bg.turnTo(-1,function(){var e=new S_Index;SceneManager.getInstance().goScene(e)})}},t}(Com_withSlideAction);__reflect(S_P1.prototype,"S_P1",["eui.UIComponent","egret.DisplayObject"]);var S_Test_Scale_Logo=function(e){function t(){var t=e.call(this)||this;return t.ps_value=0,t}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){var t=this;e.prototype.childrenCreated.call(this),SceneManager.getInstance().real_size.width=750,SceneManager.getInstance().real_size.height=750*document.body.clientHeight/document.body.clientWidth,SceneManager.getInstance().offset_size.height=SceneManager.getInstance().real_size.height-SceneManager.getInstance().design_size.height,console.log(this.loadingbar),this.loadingbar.value=0,egret.Tween.get(this,{onChange:function(){t.loadingbar.value=t.ps_value}}).to({ps_value:100},1e3,egret.Ease.cubicOut)},t}(Scene);__reflect(S_Test_Scale_Logo.prototype,"S_Test_Scale_Logo");var S_Test_Video=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.partAdded=function(t,n){e.prototype.partAdded.call(this,t,n)},t.prototype.childrenCreated=function(){e.prototype.childrenCreated.call(this)},t.prototype.onLoad=function(e){var t=new eui.Button;t.label="播放",t.x=this.video.x+20,t.y=this.video.y+this.video.height+20,this.addChild(t),t.addEventListener(egret.TouchEvent.TOUCH_TAP,this.play,this),console.log(this.video.length)},t.prototype.onLoadErr=function(e){console.log("video load error happened")},t.prototype.play=function(e){this.video.play()},t}(Scene);__reflect(S_Test_Video.prototype,"S_Test_Video");var Conf=function(){function e(){this.val_slide_check=50}return e.Single=function(){return null==this._self&&(this._self=new e),this._self},e._self=null,e}();__reflect(Conf.prototype,"Conf");var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,o){function r(e){t.call(o,e)}function i(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),n.call(o))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(o,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(o,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var s=e.split("/");s.pop();var l=s.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(o,generateJSON.paths[e])},this):RES.getResByUrl(l,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){t.call(o,generateJSON.paths[e])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(o,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,i,null),RES.getResByUrl(e,r,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);