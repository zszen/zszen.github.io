window.__require=function t(e,o,r){function n(c,s){if(!o[c]){if(!e[c]){var d=c.split("/");if(d=d[d.length-1],!e[d]){var p="function"==typeof __require&&__require;if(!s&&p)return p(d,!0);if(i)return i(d,!0);throw new Error("Cannot find module '"+c+"'")}c=d}var u=o[c]={exports:{}};e[c][0].call(u.exports,function(t){return n(e[c][1][t]||t)},u,u.exports,t,e,o,r)}return o[c].exports}for(var i="function"==typeof __require&&__require,c=0;c<r.length;c++)n(r[c]);return n}({HexGrp:[function(t,e,o){"use strict";cc._RF.push(e,"0d068PGx/9MzbkG+NvEysOd","HexGrp"),Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,n=r.ccclass,i=r.property,c=t("./HexUnit"),s=t("./Hex"),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.pf_unit=null,e.row=10,e.col=7,e.dic={},e}return __extends(e,t),e.prototype.start=function(){for(var t=0;t<6;t++)for(var e=0;e<7;e++){var o=cc.instantiate(this.pf_unit);this.node.addChild(o);var r=o.getComponent(c.default);r.reset(e,t),this.dic[r.key]=r}cc.director.on("down",this.evt_down,this)},e.prototype.evt_down=function(t){for(var e in this.dic)this.dic[e].set_color(s.ColorType.def);for(var o=t.index,r=t.get_neighbers(),n=0;n<r.length;n++){var i=o.row+r[n].x,c=o.col+r[n].y,d=this.dic[i+","+c];d&&d.set_color(s.ColorType.red)}},__decorate([i(cc.Prefab)],e.prototype,"pf_unit",void 0),__decorate([i(cc.Integer)],e.prototype,"row",void 0),__decorate([i(cc.Integer)],e.prototype,"col",void 0),e=__decorate([n],e)}(cc.Component);o.default=d,cc._RF.pop()},{"./Hex":"Hex","./HexUnit":"HexUnit"}],HexUnit:[function(t,e,o){"use strict";cc._RF.push(e,"c83d0Ub0vVKyKUzoYNGZal6","HexUnit"),Object.defineProperty(o,"__esModule",{value:!0});var r=t("./Hex"),n=cc._decorator,i=n.ccclass,c=(n.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.dis={x:50,y:40},e.is_down=!1,e.key="",e}var o;return __extends(e,t),o=e,e.prototype.onLoad=function(){this.index=new r.Hex,this.txt=this.node.getChildByName("info").getComponent(cc.Label),this.txt.string="",this.node.scale=.46,this.node.color=o.COLORs[0],this.node.on(cc.Node.EventType.TOUCH_END,this.evt_touch_end,this)},e.prototype.start=function(){},e.prototype.reset=function(t,e){this.index.row=t,this.index.col=e,this.key=t+","+e,this.txt.string=this.key,this.node.x=t*this.dis.x+(1&e)*this.dis.x*.5,this.node.y=e*this.dis.y},e.prototype.set_color=function(t){t==r.ColorType.red?this.node.color=o.COLORs[1]:this.node.color=o.COLORs[0]},e.prototype.evt_touch_end=function(t){this.is_down=!this.is_down,cc.director.emit("down",this)},e.prototype.get_neighbers=function(){return 1&this.index.col?[{x:-1,y:0},{x:0,y:1},{x:1,y:1},{x:1,y:0},{x:1,y:-1},{x:0,y:-1}]:[{x:-1,y:0},{x:-1,y:1},{x:0,y:1},{x:1,y:0},{x:0,y:-1},{x:-1,y:-1}]},e.COLORs=[cc.color(215,221,209,255),cc.color(255,49,86,255)],e=o=__decorate([i],e)}(cc.Component));o.default=c,cc._RF.pop()},{"./Hex":"Hex"}],Hex:[function(t,e,o){"use strict";cc._RF.push(e,"c348a5cqsBAXbp64M0OU4cn","Hex"),Object.defineProperty(o,"__esModule",{value:!0}),function(t){t[t.def=0]="def",t[t.red=1]="red"}(o.ColorType||(o.ColorType={}));var r=function(){return function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.row=t,this.col=e}}();o.Hex=r,cc._RF.pop()},{}]},{},["Hex","HexGrp","HexUnit"]);