var arr = dealData();
//console.log(arr);
var num_blg = arr[0];
var num_wyn = arr[1];

function dealData(){
	var pool = [];
	var xmlhttp;
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","https://cdn-aua.adverserve.net/XML/399_2793.xml",false);
	xmlhttp.send();
	var xmlDoc=xmlhttp.responseXML;
	
	var prices = xmlDoc.getElementsByTagName("price");
	var maxLen = Math.min(10,prices.length);
	
	for(var i=0;i<maxLen;i++){
		var price1=xmlDoc.getElementsByTagName("price")[i].textContent;
		var znum = parseInt(price1);
		pool.push(znum);
		// pool[i] = znum;
		// if(isNaN(znum)){
		// 	pool[i].push(10);
		// 	pool[i].push(10);
		// 	pool[i].push(10);
		// 	pool[i].push(0);
		// 	return;
		// }
		// pool[i].push(Math.floor(znum/1000)%10);
		// pool[i].push(Math.floor(znum/100)%10);
		// pool[i].push(Math.floor(znum/10)%10);
		// pool[i].push(znum%10);
		// if(znum.length<4) pool[i][0]=10;
		// if(znum.length<3) pool[i][1]=10;
		// if(znum.length<2) pool[i][2]=10;
	}
	return pool;
}


(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"728x90_atlas_", frames: [[0,0,728,90],[730,0,8,16]]}
];


// symbols:



(lib.beijing = function() {
	this.spriteSheet = ss["728x90_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.小标 = function() {
	this.spriteSheet = ss["728x90_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yuding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("ACmBNIgVgSIAKgJIAVARIARAQIgLAKIgQgQgAANBPIAXAAQAEAAAAgEIAAhOIgiAAIAAgNIAyAAIgogcIAJgKIAIAFIAKAHQAMgLAKgPIg2AAIAAgNIBAAAIADgBIAJAGQgOAWgUATIAGADIAFAEIAIAGIgEAGIAOAAIACgBIAJACIAAACIgBAAIgHAWIgJAUIgLgDIAFgOIAGgPIgWAAIAABPQAAAMgHADIgMACIgRAAQgBgHgEgHgAhUBdIAAisIBDAAIAABzQAAAMgHAEQgGACgYAAQgBgIgDgHIAWAAQAEABAAgEIAAhmIglAAIAACfgAEsBMIAVABIANgBQAGABAAgGIAAiDIg/AAIAAgPIByAAIAAAPIgkAAIAACEQAAAOgKAEIgPACIgYAAQgBgJgFgHgABSBSQARgGALgIQAKgIAGgIQAFgIACgJQABgIAAgJIAAgoIAOAAIAAAoQAAALgBAJQgDALgFAJQgHALgLAIQgMAJgSAGQgEgGgFgEgADnBMQAEgCADgEQAEgGAAgGIAAhIIgjAAIAAgOIAxAAIAABVIAegUIACAIIACAGIgoAcIgMAKQgCgHgFgGgAi9BIQAEgCACgCQADgDAAgGIAAiMIBOAAIAABfIg/AAIAAAyIAngMIgMgWIANgGIAQAcIAMAYIgOAHIgJgTIgxARIgJAEIgEADQgCgJgFgHgAilAAIAwAAIAAgbIgwAAgAilgpIAwAAIAAgaIgwAAgAmGBVIAAgPIBjAAQAIgTAIgdQAJgaAFgXIARADIgPAwQgJAcgHASIBBAAIAAAPgAlWAUQgFgWgGgWIAPgDIAMArIAIApIgQAEQgCgQgGgZgACqAuIAAhQIg4AAIAABQIgOAAIAAhfIAeAAIAFgUIgrAAIAAgNIBlAAIAAANIgpAAIgCAFIgCAFIgDAKIAoAAIAABfgAl9gnIAAgOICjAAIAAAOgADtg8IgRgSIAKgJIARARQAKAJAEAHIgKAKIgOgQgAk6hYIAOgFQAIAUADANIgPAFQgDgOgHgTg");
	this.shape.setTransform(79.3,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACmBNIgVgSIAKgJIAVARIARAQIgLALIgQgRgAANBPIAXAAQAEAAAAgDIAAhPIgiAAIAAgNIAyAAIgogdIAJgJIAIAGIAKAGQAMgMAKgOIg2AAIAAgOIBAAAIADgBIAJAHQgOAXgUASIAGAEIAFADIAIAGIgEAGIAOAAIACgCIAJAEIAAABIgBABIgHAUIgJAVIgLgDIAFgOIAGgPIgWAAIAABPQAAALgHAEIgMACIgRABQgBgIgEgHgAhUBeIAAitIBDAAIAABzQAAAMgHADQgGADgYAAQgBgJgDgFIAWAAQAEgBAAgDIAAhmIglAAIAACggAEsBNIAVAAIANAAQAGgBAAgFIAAiCIg/AAIAAgQIByAAIAAAQIgkAAIAACCQAAAPgKADIgPADIgYABQgBgKgFgGgABSBSQARgGALgIQAKgHAGgKQAFgHACgKQABgHAAgJIAAgoIAOAAIAAAoQAAALgBAJQgDALgFAJQgHAKgLAJQgMAJgSAHQgEgHgFgEgADnBMQAEgCADgFQAEgFAAgGIAAhHIgjAAIAAgPIAxAAIAABVIAegTIACAGIACAHIgoAcIgMAJQgCgFgFgHgAi9BIQAEgBACgDQADgEAAgFIAAiMIBOAAIAABfIg/AAIAAAyIAngNIgMgUIANgHIAQAbIAMAZIgOAIIgJgUIgxARIgJAEIgEACQgCgIgFgHgAilAAIAwAAIAAgbIgwAAgAilgoIAwAAIAAgbIgwAAgAmGBVIAAgPIBjAAQAIgTAIgdQAJgaAFgXIARADIgPAwQgJAbgHATIBBAAIAAAPgAlWAUQgFgWgGgVIAPgEIAMArIAIApIgQAEQgCgQgGgZgACqAvIAAhRIg4AAIAABRIgOAAIAAhfIAeAAIAFgVIgrAAIAAgOIBlAAIAAAOIgpAAIgCAFIgCAGIgDAKIAoAAIAABfgAl9gnIAAgOICjAAIAAAOgADtg8IgRgSIAKgJIARARQAKAJAEAGIgKALIgOgQgAk6hYIAOgFQAIAUADANIgPAEQgDgNgHgTg");
	this.shape_1.setTransform(79.3,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D81E05").ss(1.7,1,1).p("ALwCbIAAk1QAAgogmAAI2TAAQgmAAAAAoIAAE1QAAAoAmAAIWTAAQAmAAAAgog");
	this.shape_2.setTransform(79,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D81E05").ss(1.7,1,1).p("AL0jCI3nAAQgoAAAAAoIAAE1QAAAoAoAAIXnAAQAoAAAAgoIAAk1QAAgogoAAg");
	this.shape_3.setTransform(79,19.5,0.945,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("ArzDDQgoAAAAgoIAAk1QAAgoAoAAIXnAAQAoAAAAAoIAAE1QAAAogoAAg");
	this.shape_4.setTransform(79,19.5,0.945,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.8,-1,152.5,41);


(lib.VektorSmartobjekt2swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIADIAPgIIACADIgPAIg");
	this.shape.setTransform(87.8,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAJIAAgEIATAAIAAgKIgNAAIAAgDIAeAAIAAADIgOAAIAAAKIATAAIAAAEg");
	this.shape_1.setTransform(89,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIgCIACgDIAHAFIAIADIgCADIgPgIg");
	this.shape_2.setTransform(90.3,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AARAHIAAgGIghAAIAAAGIgEAAIAAgHIAUAAIgCgFIADgBIACAGIASAAIAAAHg");
	this.shape_3.setTransform(89.1,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AADAUIAAgHIgLACIgBgDIADgBIAAgbIgCAAIAAgDIARAAIAAADIgDAAIAAAZIADgBIABAEIgEAAIAAAIgAgDAKIAGgBIAAgHIgGAAgAgDAAIAGAAIAAgGIgGAAgAgDgJIAGAAIAAgHIgGAAg");
	this.shape_4.setTransform(94.8,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgDgCIADgBIAEAGIgEABIgDgGg");
	this.shape_5.setTransform(96.5,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMATQAKgHAAgJIgJAAIAAgDIAKAAIAAgIIgJAAIAAgDIAKAAIABAAIAFgJIADABIgEAIIAHAAIAAADIgLAAIAAAIIAMAAIAAADIgLAAQADALAIAEIgDADQgIgFgCgIQgCAJgIAEg");
	this.shape_6.setTransform(97,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVALIAAgDIAVAAIAAgFIgOAAIAAgCIAOAAIAAgEIgNAAIgFAFIgDgCQAFgEACgFIADABIgBACIAMAAIAAgEIACAAIAAAEIASAAIAAADIgSAAIAAAEIAQAAIAAACIgQAAIAAAFIAUAAIAAADg");
	this.shape_7.setTransform(82,2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgRAIIAAgQIAiAAIAAAQgAgNAGIAbAAIAAgFIgbAAgAgNgBIAbAAIAAgDIgbAAg");
	this.shape_8.setTransform(82.1,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAHAPIAAgBIgIAIIgCgDIAJgJQgDgJAAgKIgQAAIAAAHIAMAAIAAALQAAAHgGAAIgFAAIAAgDIAEAAQADAAAAgEIAAgJIgIAAQAAAMgFAKIgDgCQADgHAAgDQABgCAAgIIAAgMIATAAIAAgJIAEAAIAAAJIAPAAIAAADIgOAAQAAAIACAIQAEgGADgGIADACQgDAHgGAHQADAHACAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgGIAEAAQAAACgCAGQgBAFgEAAIAAAAQgEAAgEgHg");
	this.shape_9.setTransform(110,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgDAAIADgCIAEADIgDACIgEgDg");
	this.shape_10.setTransform(111.5,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKAKQAEgEAAgIIAAgJIARAAIAAARQAAAFgFAAIgGAAIAAgDIAEAAQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAIAAgBIgMAAIgBADIgCAEIgDgCgAgDACIALAAIAAgDIgLAAgAgDgEIALAAIAAgFIgLAAg");
	this.shape_11.setTransform(103.9,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVAHIAAgDIAEAAIAAgKIAiAAIAAAKIAFAAIAAADgAAHAEIAHAAIAAgHIgHAAgAgDAEIAHAAIAAgHIgHAAgAgNAEIAHAAIAAgHIgHAAg");
	this.shape_12.setTransform(103.1,3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAKIAAgTIANAAIAAATgAgDAIIAHAAIAAgHIgHAAgAgDAAIAHAAIAAgHIgHAAg");
	this.shape_13.setTransform(101.8,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUARQATgBABgNIADAAQgBAEgBADIAJADIALAEIgBADIgUgHQgDAFgRADgAgRALIAAgOIAjAAIAAAOIgEAAIAAgLIgcAAIAAALgAgPgHIAAgNIAeAAIAAANgAgMgLIAYAAIAAgGIgYAAg");
	this.shape_14.setTransform(116.8,1.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AANATIgBgBQAAAAgBgJQABgHgKABIgNAAIAAAQIgFAAIAAglIATAAQANAAAAAKQAAAGgGACQAFACABAGIAAAJIABACgAgLgBIANAAQAKAAAAgHQAAgGgJAAIgOAAg");
	this.shape_15.setTransform(117,-4.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOATIAAglIAdAAIAAAEIgZAAIAAAMIAYAAIAAADIgYAAIAAAOIAZAAIAAAEg");
	this.shape_16.setTransform(112.7,-4.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQATIAAglIAVAAQAKAAAAAKQAAAGgGACQAHABABAHQgCALgLAAgAgMAQIAQAAQAIAAABgIQgBgHgIAAIgQAAgAgMgBIAPAAQAIAAAAgHQAAgHgHAAIgQAAg");
	this.shape_17.setTransform(108.1,-4.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASATIAAggIgQAgIgDAAIgRggIAAAgIgDAAIAAglIAFAAIAQAgIARggIAGAAIAAAlg");
	this.shape_18.setTransform(102.9,-4.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOATIAAglIAdAAIAAAEIgZAAIAAAMIAYAAIAAADIgYAAIAAAOIAZAAIAAAEg");
	this.shape_19.setTransform(97.9,-4.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATATIAAggIgRAgIgDAAIgRggIAAAgIgEAAIAAglIAGAAIAQAgIARggIAFAAIAAAlg");
	this.shape_20.setTransform(92.7,-4.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AjfATQgKAAgFgEQgDgDAAgGIAEAAQAAAEACADQADADAIAAQAFABAGgEQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgFgEgBQgEgCgFAAQgNABgDgKQAAgEADgCQAFgFAIAAQAHAAAGAEQADADAAAFIgEAAQAAgDgCgCQgFgEgEABIgJABQgEACAAAEQABAHAMAAQAOgBACALQgFALgIAAIgDgBgACjAAQAAgQAUgDQAPABAEAMIAAABIgEAAIAAgBQgDgJgMAAQgPABgBAOQgBAOARACQANAAACgMIAAAAIAEAAIAAAAQgBAOgSABQgTAAgBgTgADUATIAAglIAeAAIAAAEIgaAAIAAANIAZAAIAAACIgZAAIAAAOIAaAAIAAAEgACUATIgNgPIgPgQIAAAfIgDAAIAAglIAEAAIANAPIAOAPIAAgeIAEAAIAAAlgABnATIgFgMIgTAAIgGAMIgEAAIASglIADAAIARAlgABgAEIgIgRIgIARIAQAAIAAAAgAA3ATIAAglIAEAAIAAAlgAAUATIAAglIAEAAIAAAhIAXAAIAAAEgAgOATIAAglIAEAAIAAAhIAWAAIAAAEgAgcATIgGgMIgTAAIgFAMIgEAAIARglIAEAAIARAlgAgjAEIgIgRIgIARIAQAAIAAAAgAhdATIAAgBQgBAAAAgIQAAgJgJABIgPAAIAAARIgEAAIAAglIAUAAQANAAAAALQAAAFgGACQAFACAAAGQAAAIABACIAAABgAh2AAIAPAAQAJAAAAgIQAAgGgIAAIgQAAgAiIATIgFgMIgTAAIgGAMIgEAAIASglIADAAIASAlgAiPAEIgHgRIgJARIAQAAIAAAAgAi8ATIAAghIgPAAIAAgEIAhAAIAAAEIgOAAIAAAhg");
	this.shape_21.setTransform(63.4,-4.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAPATIgFgMIgSAAIgGAMIgEAAIASglIACAAIARAlgAAIAEIgIgQIgHAQIAPAAIAAAAg");
	this.shape_22.setTransform(35.1,-4.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAFAFIAAgIIgFAIIAAAAIgEgIIAAAIIgBAAIAAgJIABAAIAEAIIAFgIIABAAIAAAJg");
	this.shape_23.setTransform(137.8,-6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAAAFIAAgIIgDAAIAAgBIAIAAIAAABIgEAAIAAAIg");
	this.shape_24.setTransform(136.4,-6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4E4E4D").s().p("AgGgJIAYgCQgIAHgJAGQgIAFgKAFg");
	this.shape_25.setTransform(133.1,-1.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D9D9DA").s().p("AgGAAQgBgKABgKIANAUIgKAVQgCgKgBgLg");
	this.shape_26.setTransform(131.7,-2.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#989999").s().p("AgTgJQALADAIAFQALADAIAHIgXABg");
	this.shape_27.setTransform(133,-3.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4E4E4D").s().p("AAAABQgIgFgIgIIAYADIAJAWIgRgMg");
	this.shape_28.setTransform(130.9,2.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D9D9DA").s().p("AgTAGIATgJQAJgEALgCIgPATg");
	this.shape_29.setTransform(131.2,0.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#989999").s().p("AgHAAIAOgUQABAKgCAKQgBALgEAKg");
	this.shape_30.setTransform(132.5,1.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D9D9DA").s().p("AgCAAQACgKAGgJIADAXIgSAQQACgKAFgKg");
	this.shape_31.setTransform(126.4,1.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#989999").s().p("AgJAIIgEgXQAIAGAGAJIANARg");
	this.shape_32.setTransform(128.3,1.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4E4E4D").s().p("AgBgHIAWAHQgKAEgLACIgUACg");
	this.shape_33.setTransform(127.5,3.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D9D9DA").s().p("AgVgFQALgBAKAAQALABAKACIgVAKg");
	this.shape_34.setTransform(125.2,-2.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4E4E4D").s().p("AgKgGIAVgLQgEAKgGAIQgFAJgGAIg");
	this.shape_35.setTransform(126.3,-1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#989999").s().p("AgBABQgFgJgEgKIAVANIgCAYIgKgSg");
	this.shape_36.setTransform(124.1,-1.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#989999").s().p("AgIADIAGgXIAGAUIAFAVg");
	this.shape_37.setTransform(129.3,-5.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4E4E4D").s().p("AAAAFQgKgDgKgDIAXgHIASARIgVgEg");
	this.shape_38.setTransform(128.1,-3.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D9D9DA").s().p("AAAAAQAHgIAIgGIgGAWIgXAHQAGgJAIgGg");
	this.shape_39.setTransform(127.5,-5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.2,-7.1,105.3,11.2);


(lib.VektorSmartobjektswf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D91F05").s().p("AAjCOIAAgVIAcgEIgXhBIheAAIgYBCIAcADIAAAVIhQAAIAAgVIAMgCQAOgCAFgVIBbjtIAVAAIBWDpQAJAdAMgCIALACIAAAVgAAeAaIgkhnIgmBnIBKAAg");
	this.shape.setTransform(13.1,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D91F05").s().p("Ag9BiIAAgVIAMAAQAOAEgBggIAAhfQAAgWgQAAIgKgBIAAgZIA4AAIADAYIACgCQAVgZAZAAQAKAAAIADIAAArQgPgJgUABQgRABgLANIAABeQAAAfAKgEIAXACIAAAUg");
	this.shape_1.setTransform(84.1,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D91F05").s().p("AgrBiIAAgVIANgCQAPADgDgeIAAhfQABgVgQAAIgJgCIAAgUIA9gHIAACRQgCAgAMgFIAPACIAAAVg");
	this.shape_2.setTransform(97.7,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D91F05").s().p("AA7BkQgZAAgHgVIAAgCIgCACQgHAPgqAGQhBgIAHgtQAEhABkACIABAAIAAgRQACgngfABQgagBgcANIgCABIgIgWIACgBQAXgRAtgDQA9gBgCBEIAABaQgCASAPgBIALABIAAAVQgKAFgLAAIgDgBgAgqAsQAEAfAZgDQAigCACghIAAgcIgCAAIgCAAQhBAAAEAjg");
	this.shape_3.setTransform(112,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D91F05").s().p("AgUBiQgigBgLgVQgMgVABgZIAAhQQAAgWgQAAIgKgCIAAgYIA/AAIAAB9QAAAnAgAAQAUAAAZgQIABAAIAAhkQAAgWgQAAIgKgCIAAgYIA/AAIAACUQgBAWARAAIALABIAAAVIg4AAIgFgXIgBABQgeAbgeAAIgBgBg");
	this.shape_4.setTransform(35.9,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D91F05").s().p("AgiBEIAAh1IgcAAIAAgaIAeAAIAMgtIAWAAIAAAtIAvAAIAAAaIgvAAIAABwQABAhATgEQAOAAAPgHIACgBIAJAUIgBABQgPANglADIAAAAQgrAAAAg1g");
	this.shape_5.setTransform(70.1,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D91F05").s().p("AgWAAQAAgVAWAAQAWAAABAVQAAAWgXAAQgWgBAAgVg");
	this.shape_6.setTransform(97.2,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D91F05").s().p("AASBiIAAgVIAMgBQAMADgCgcIAAhOQAAgmghAAQgVABgaAPIAAAAIAABiQgCAeANgDIAMABIAAAVIhWAAIAAgVIANgBQAPADgCgeIAAhfQAAgWgQAAIgIgBIAAgZIA2AAIADAYIACgCQAUgWApgDQA6AAAABDIAABPQgCAdAOgCIAPABIAAAVg");
	this.shape_7.setTransform(132.9,18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D91F05").s().p("AgGBkQgsgCgSgMIAAg0IAaAAIAGAaQgDANAjABQAfAEAGghQgDgbgggEIgMgDQgtgEgHgwQADg4BEgDQAkABAVAMIAAAwIgaAAIgGgWQACgLgdgBQgjAAAAAZQAEAXAfAGIALADQAvAEAIAxQgBAjgXAOQgWAPgbAAIgCgBg");
	this.shape_8.setTransform(55.1,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D91F05").s().p("AgKgKIAKgFQAHAPAEALIgLAFQgEgNgGgNg");
	this.shape_9.setTransform(64.8,41.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D91F05").s().p("AgiAIQAigMAWgTIANALQgZAVgiAPg");
	this.shape_10.setTransform(84.9,42.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D91F05").s().p("AgkBQQAQghgCgnIgNAAIAAgNIANAAIAAg8IARAAQAEgMABgLIARADIgHAUIAbAAIAACFQAAAMgGAEQgHADgRgBQgBgHgEgIIAQAAQABAAABAAQAAAAABAAQAAgBAAAAQAAgBAAgBIAAg8IgbAAQABAsgRAlQgHgFgHgEgAgGgFIAbAAIAAgtIgbAAg");
	this.shape_11.setTransform(64.2,44.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D91F05").s().p("Ag0AvQAYgegEggIAAgpIA9AAIAABWQAAAHABABIACABIAEAAIADgBIACgFIAAgVQAFAEAHACQgBAQgBAJQgCAGgDACQgEADgGAAIgJAAQgGAAgEgEQgFgCABgSIAAhGIgcAAIAAAZQADAmgaAiQgGgGgIgEg");
	this.shape_12.setTransform(73.2,47.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D91F05").s().p("AgigJIALgNQAgAQAaAPIgMAOQgXgQgigQg");
	this.shape_13.setTransform(94,42.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D91F05").s().p("AhQAmIAAgQIBHAAIAAgrIgyAAIAAgQIB3AAIAAAQIgzAAIAAArIBIAAIAAAQg");
	this.shape_14.setTransform(89.4,48.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D91F05").s().p("AhRAiIAAgrIBKAAIgIgTIASgFIAKAYIBFAAIAAAnIgTAAIAAgYIh+AAIAAAcg");
	this.shape_15.setTransform(89.4,39);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D91F05").s().p("AgLgLIALgFQAIAQAEAMIgMAFQgCgOgJgOg");
	this.shape_16.setTransform(64.9,47.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D91F05").s().p("AAAgHQgJAhhGALQgDgJgGgHQA9gIAJgXIhCAAIAAgPIBIAAIACgLIARAAIgBALIBOAAIAAAPIhCAAQATAaA0AEQgHAHgEAKQg5gHgVglg");
	this.shape_17.setTransform(8.9,49.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D91F05").s().p("AgMAHIAMgTIANAHIgOASg");
	this.shape_18.setTransform(11.4,40.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D91F05").s().p("AgLgGIALgFIAMARIgMAGIgLgSg");
	this.shape_19.setTransform(6.1,40.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D91F05").s().p("AgrAYQAOgHANgNIgYAAIAAgLIAjAAIAAgbIAOAAIAAAbIAjAAIAAALIgjAAIAAAZIgOAAIAAgSQgNAPgPAJQgFgGgFgFg");
	this.shape_20.setTransform(8.6,42.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D91F05").s().p("AgSBWQgCgJgFgJIAcABQAFAAAAgFIAAiWIASAAIAACWQAAAQgKADQgJAEgUAAIgFgBg");
	this.shape_21.setTransform(54.5,44.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D91F05").s().p("AgwAYIAAgPIApAAQgFgNgGgOIARgFIALAbIgNAFIAzAAIAAAPg");
	this.shape_22.setTransform(73.2,37.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D91F05").s().p("AAxA1IAAhKIhiAAIAABKIgQAAIAAhZIAzAAIAGgQIASADIgGANIA/AAIAABZg");
	this.shape_23.setTransform(8.8,41);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D91F05").s().p("AgQgDIAJgJIAYAQIgJAJQgJgIgPgIg");
	this.shape_24.setTransform(11.4,44.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D91F05").s().p("AgFBXIAAhLQgPAfgSATQgEgIgGgJQAYgYAPgjIgjAAIAAgRIAnAAIAAgcIgjAFIgFgNQAtgHAggMIANANQgPAGgSAEIAAAgIAlAAIAAARIglAAIAAAGIAjAgIgKAPIgZgcIAABMg");
	this.shape_25.setTransform(45,44.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D91F05").s().p("AgIA1IAAhpIARAAIAABpg");
	this.shape_26.setTransform(52.1,43.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D91F05").s().p("AgpA5IAAg4IgNAGIgHgPIAUgIIAAgzIARAAIAAAsIAWgJIAAg1IAPAAIAAAtIAWgIIAGgGIANAFIgBADQAAA3gCAOQgBAMgJACQgJACgKAAQgBgJgCgGIAKAAQAFAAABgFQABgGAAgsIgXAKIAABEIgPAAIAAg9IgWAJIAAA+QgCAOARgBIApAAQAOADAAgdQAHAFAJACQgBAlgcgCIgrAAIgFAAQgcAAACgdg");
	this.shape_27.setTransform(31.9,44.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D91F05").s().p("AggA3IAagKIAAg5IgZAAIAAgRIAZAAIAAgrIAPAAIAAArIAVAAIAAARIgVAAIAAAyIAUgIIAEAPIg6Acg");
	this.shape_28.setTransform(23.5,43.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#94292B").s().p("AAHAVIhVgMQAAAAgBgBQAAAAAAAAQAAAAAAgBQABAAAAAAIAGgCQArgKArgKIAKgDQArgHAMAUQADAJgGANIABgCQADgHgDgEQgKgKg7Abg");
	this.shape_29.setTransform(161.1,9.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D91F05").s().p("Aj6B+IA3gqQBnhUAZgnQAJgPgFgLQgMgVgrAIQCygoC9gJQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQjtBNi3CfIAAAAIhPAOQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_30.setTransform(175.4,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200.5,53.5);


(lib.n1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//console.log(this.name);
		var str = this.name;
		var num = this.parent.nums[Number(str[1])];
		if(num>0){
			this.gotoAndStop(num);
		}else{
			this.stop()
		}
		
		
		
		//console.log();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(11));

	// 0
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AhTCPQgggoAAhnQAAhlAjgsQAdglAzAAQA0AAAdAlQAjAsAABlQAABmgjAsQgdAlg0AAQgzAAgggogAgVh1QgKAIgFAVQgHAaAAA+QAAA/AGAYQAGAXAKAIQAKAIALAAQAMAAAKgIQAKgIAFgUQAHgbAAg/QAAg+gGgXQgGgYgKgIQgKgIgMAAQgLAAgKAIg");
	this.shape.setTransform(-4.2,-9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AAKC0IAAkCQglAjgzARIAAg+QAbgJAggYQAegZAMghIA4AAIAAFng");
	this.shape_1.setTransform(-6.1,-10.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("Ah3C0QAEgkATghQAUggA5g2QAugqAKgPQAOgVAAgVQAAgXgMgMQgMgNgWAAQgVAAgMANQgNANgCAeIhEgHQAGg4AggZQAggZAwAAQA1AAAeAdQAeAdAAAqQAAAYgIAWQgJAWgTAXQgMAQghAdIgoAoIgOATICHAAIAABAg");
	this.shape_2.setTransform(-4.6,-10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("AhRCbQgggcgFgtIBCgIQAEAZAOAOQANANAUAAQAUAAAPgQQAPgQAAgcQAAgZgOgQQgOgPgUAAQgNAAgSAFIAIg3QAbABAOgMQAPgNAAgWQAAgSgLgKQgLgLgQAAQgSAAgMAMQgNAMgDAYIg/gLQAHghANgTQANgTAYgLQAYgMAeAAQAxAAAfAhQAZAaAAAhQAAAvg0AcQAfAHATAWQASAXAAAgQAAAvgjAiQgiAhgyAAQgxAAgggcg");
	this.shape_3.setTransform(-4.1,-9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("AASC0IAAhIIiRAAIAAg8ICajjIA5AAIAADiIAsAAIAAA9IgsAAIAABIgAg/AvIBRAAIAAh5g");
	this.shape_4.setTransform(-4.1,-10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("AhSCZQgfgbgGgsIBEgIQADAYAOANQAPAOATAAQAUAAAPgRQAPgSAAgjQAAghgPgRQgPgPgWAAQgeAAgXAZIg4gIIAji5IC1AAIAAA/IiBAAIgLA+QAXgMAXAAQAuAAAgAhQAfAgAAA2QAAArgZAjQgjAwg9AAQgxgBgggag");
	this.shape_5.setTransform(-3.6,-9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("AhUCNQgjgqAAhgQAAhiAlgrQAkgsA5AAQApAAAbAXQAbAXAHArIhCAIQgDgVgKgJQgKgKgRAAQgVAAgOATQgQAUgDA+QAZgfAlAAQArAAAfAhQAfAgAAA0QAAA2ghAiQggAhgyAAQg2AAgjgqgAgcAKQgOAQAAAeQAAAiAQASQAPASATAAQATAAANgPQAMgPAAgiQAAgjgNgQQgOgPgUAAQgTAAgOAOg");
	this.shape_6.setTransform(-3.8,-9.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D81E05").s().p("AhECwQABhJAdhOQAdhMAwg9IicAAIAAg/IDrAAIAAAxQgeAdgeA2QgeA0gPA8QgPA8AAAvg");
	this.shape_7.setTransform(-4,-9.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D81E05").s().p("AhPCdQgmgeABg1QgBgdAOgYQAPgXAfgNQgbgMgMgUQgMgTABgYQAAgoAbgaQAcgaA0AAQAyAAAcAaQAcAaAAAoQAAAZgNAUQgMATgYALQAeAMAPAWQAQAWAAAeQgBAygfAfQgfAfg1AAQgwAAghgagAgkAeQgNASAAATQAAAdAOAQQAPAQAUAAQAWAAAOgPQANgQAAgdQAAgZgNgPQgOgPgWAAQgYAAgMARgAgfhzQgMALAAATQAAAVAMAMQALALAUAAQASAAAMgLQAMgMAAgVQAAgTgMgLQgMgMgSgBQgUABgLAMg");
	this.shape_8.setTransform(-4.1,-9.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D81E05").s().p("AhPCgQgZgWgIgsIBCgIQADAVAKAJQAKAKARAAQAUAAAPgUQAQgTAEg+QgaAfgmAAQgqAAgfghQgeggAAg0QAAg2AgghQAggiAyAAQA1AAAkArQAiAqAABgQABBhglArQglAsg4AAQgqAAgbgXgAgmhuQgNAPAAAiQAAAjAOAQQANAPAVAAQASABAOgQQAOgPAAgeQgBgigPgRQgPgTgTAAQgTAAgMAPg");
	this.shape_9.setTransform(-4.3,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.9,-39.5,32,59.9);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AhiCMQAcgaANgjQATgtgBhfIAAg/QABgagDgSIAtAAQgCAOAAAdIAAA5IAWgKQARAiAGAWIAAhdQAAgdgCgLIAtAAQgDANAAAbIAAAxIAXgKQASAdAKAbIAAhnQgBgfgCgNIAvAAQgDAQAAAbIAAD1QAAAeADARIgvAAQACgPABggIAAhvIgaAMQgIgjgRgfIAACYQAAAaADARIgtAAQACgSAAgZIAAhdIgYALQgFgYgFgMIgLgiQgBBVgQAxQgJAcgPAWQgIALgTAUQgNgUgTgLgAizCLQAbggAXhRIAiAWQgMAvgRAlIgHANIgMAWgAhnARQAMgWAGgVQAEgUACgfIAjAHQgDAlgFAVQgFAUgLAZgAiUgaQgMgKgVgMIAbgeQAjATAcAbIgcAgQgQgRgNgJgAiqiOIAdgcQAnAXAaAbIgdAfQgbgfgmgWg");
	this.shape.setTransform(316,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("ABhByQgXghgHggQgFAlgYAhQgVAfgiAXQgQgUgKgJQgFgBgIABIhTAAQgZgBgSACQADgNgBgYIAAjgIgBgjQAMACAYAAIBiAAQAXABAQgDIAAAoQgSgCgTAAIhdAAIAAC6QAfgjARgmQgVgZgZgZIAXgeIAOAPIAYAZQAJgcACgkIAoAMIgLAyQgEARgGARIATAYIAXAhIgaAiIgVgiIgNgSQgTAogdAiQgOgTgNgKIAAAgIBSAAQAVgBALgBIAAATQAYgUAPgYQAbgvABhJQAAgMgCgJIAsAAIgBALQABAvAMAkQALAhAaAbQASATAfAVQgPATgMAUQgngfgUgcgABggKQAXggALgoIhTAAQgRAqgbAmQgOgRgSgMQAagfARguQANgnACgZIAvAFQgCABgHAaIgHAXIBBAAQAVAAALgCIAUAUQgDAGgHAYQgKAlgYAqQgUgMgRgIg");
	this.shape_1.setTransform(277.8,33.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AjACHQACACAbgXQAXgSAJgEIAAhQIgWAAQgOAAgNACIAAgmQAMABAUAAIAeAAQARAAANgBQgCANABAaIAABNQACgBAVARQAOALAXAEQAWAFA0AAQBTgBBBgHQgKATgDAYQhfADgtgBQhFABgYgIQgVgDgagXQgFgEgFAAQgJgBgWAVIgUAUgAgbBVQAvgSAmggQghgYgcgPIAYgaQAjAUAdASQAUgYALgZIh6AAIgFAvQgEAagFARQgIAdgUAgQgOgSgVgOQATgXAHghQALgxAAhNQAAgZgCgQIAQACQAYAAAlgFQAngDAcgFQAfgFATgHIAfAkIgTAEQhAANhiAGIAAALIgBAWIByAAQAaABALgDIAWAVIgJATQgQAmgZAeQAgAYAbAWIgeAeQgYgXgggYQgjAig4AaQgMgVgPgNgAi1iFIAggbQAqAiAbAgIghAdQgfgoglgcg");
	this.shape_2.setTransform(236.3,33.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("AiOCuQADgSAAgZIAAhMIAAghQgKANgTAOQgJgZgKgOQA+gpAZgyIAkAXIgGAHQgLAPgQATIAACWQAAAZACAQgACMCgIirAAQgcAAgUACIAAgqQAWACAZAAIA9AAIAAhNIgqAAQgaAAgTACIAAgpQASACAbAAIAqAAIAAhDIgvAAQgbAAgRACIAAgqQARADAcAAIBRAAQgegegvgTIAfgbQAYAKASALQASALAaATIgeAZIA9AAQAdAAARgDIAAAqQgUgCgaAAIg+AAIAABDIAzAAQAbABARgDIAAApQgSgCgaAAIgzAAIAABNIBDAAQAZAAAXgCIAAAqQgVgCgbAAgAi4hlQAdgQAZgVQAUgRALgSIAlAZIgRAQQgnAngsAaQgJgUgNgOg");
	this.shape_3.setTransform(195.8,33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("AheCKQAkgUAMgXQAUgggBg/QABgWgCgMIAwAAQgCAJgBAYQABBNgYAoQgTAhgnAZQgMgVgSgPgAiQCqQADgUAAgYIAAhmIAAgNIAAgcQgLASgVAVQgGgYgMgVQAtgoAcg9QALgXAEgWIAvAMIgHANQgQApgUAhIAAAbQApgVAYgWQAlggAag3IAsAIIgHAMQAlBCBZAtQgQAPgIAZIgWgOQgUgNgegaQgZgXgbgoQgcAqgfAcQgNALgMAJIgkAZQgLgYgMgNIAACnQAAAaADARgABGCpQADgSAAgaIAAh4QAAgYgDgPIAyAAQgCAMAAAcIAAB3QAAAZACATg");
	this.shape_4.setTransform(156.2,33.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("Ah1CsQACgPABgbIAAhLIgOAFIgcAJIgQAGIgKgqIAYgEIAsgNIAAhMIgYAAQgFAegKAZQgPgLgUgGQAUgyABg8IAAgKIAnAFQgCAHAAAKIgCAWIASAAIAAgrQAAgQgDgPIAwAAQgDAOAAARIAAArIAEAAQAUABALgDIAAAnQAQACAVAAIAuAAIAAgkIgiAAQgXAAgSACIAAgpQAQACAZAAIAiAAIAAgLQAAgQgDgMIAvAAQgCALAAAQIAAAMIAsAAQAaAAAQgCIAAApQgRgCgZAAIgsAAIAAAkIA2AAQAeAAAQgCIAAAoQgTgDgXAAIgDAAIAAAfIAEAAQAaAAANgCIAAApQgQgCgXAAIgEAAIAABZQAGAmhBgDIgigBQgCgYgJgRQAhAEAOAAQASABgCgMIAAhLIhpAAQgXAAgQACIAAgRIgeAMIAABZQAAAXADATgAglAGIAmABIBlAAIAAgfIhmAAQgdAAgQADIAAgmIgUgBIgHAAIAAA+IAjgMgAgZBCIAggUQAdAYAYAhIgjAYQgVghgdgcg");
	this.shape_5.setTransform(115.1,33.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("AhGCJQBHgPAuggQAdgUARgUIgvAAQADgRAAgRIAAiRQgBgYgCgQIAwAAQgDAQAAAYIAACTQAAAPACARQAWgZAHgYIAnATQgCADgLASQgRAbgUAVQg6A7hiAbQgLgZgOgNgAi5CIQArgcAXgmIgfgVIgagPQATgqALg7IgIAAQgPgBgNADIAAgpQAOACASAAIAKAAQAHgpgBgdIAuAEQgCAGgEAaIgFAiIAbAAQAXABAOgCIgCAKIgDAiIgFAjQgIAvgPAkQAXAQASAQIgXAmQgQgSgVgQQgYAogsAiQgNgSgRgNgAh2gPIgLAiIAcAQQARglAFhBIgbAAIgMA0gAgsAJQAhgvAFhSIAoAIIgIAyIgHAcQgJAlgVAkQgLgPgWgPgABphwIAmgLQARAmAKAbQAJAaAHAdIgqAOQgLg9gcg+g");
	this.shape_6.setTransform(75.4,33.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D81E05").s().p("AgEBgQgqBBh2APQgIgVgMgRQBdgFAogpIhYAAQgZAAgSACIAAgnQARACAaAAIBuAAQADgLAAgHIAAgDIAtABIgBAEIgDAQIB4AAQAbAAAQgCIAAAnQgSgCgZAAIhcAAQAnAmBnAGQgNAUgGAUQiAgQgqhAgABsAtIAAiWIjaAAIAABzQAmgNAUgUIgSAAQgVgBgKACIAAghQAHACAXAAQgHgPgPgSIAggNQAOAPAJARIgeAOIAtAAIAAgWQAAgMgCgKIAqAAQgDAJABANIAAAWIAqAAIgagLQAQgSAIgRIAhALQgOAXgMAMIAIAAQAUAAAJgCIAAAhIgdgBIguAAQAeAKAoAVIgTAeIgcgSIghgSIAAAMQAAAJACAGIgoAAQACgEAAgOIAAgHIABgQQgbAhgpASQgKgPgLgMIAAAhIgsAAQACgMAAgRIAAh/QAAgRgCgMQAQACAZAAIBDAAQAJgOAKgXIAtAGQgKATgIAMIBwAAQAXAAARgCQgCALABARIAACBQgBAQACAMg");
	this.shape_7.setTransform(35.1,33.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(11.3,14.6,322.9,43.6), null);


(lib.bt_area = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AhmCCIAAkDIDNAAIAAEDg");
	this.shape.setTransform(10.3,13);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.biankuang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9A9A9A").ss(2,0,0,3).p("EA44AHCMhxvAAAIAAuDMBxvAAAg");
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.biankuang, new cjs.Rectangle(-1,-1,730,92), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.beijing();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,728,90), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		this.button_1.addEventListener("click", fl_ClickToGoToAndStopAtFrame.bind(this));
		function fl_ClickToGoToAndStopAtFrame(){
			this.gotoAndStop(1);
		}
	}
	this.frame_1 = function() {
		this.button_2.addEventListener("click", fl_ClickToGoToAndStopAtFrame2.bind(this));
		function fl_ClickToGoToAndStopAtFrame2(){
			this.gotoAndStop(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer_2
	this.button_1 = new lib.bt_area();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(3.9,7.2,1,1,0,0,0,10.2,13);
	new cjs.ButtonHelper(this.button_1, 0, 1, 2, false, new lib.bt_area(), 3);

	this.button_2 = new lib.bt_area();
	this.button_2.name = "button_2";
	this.button_2.parent = this;
	this.button_2.setTransform(-38.8,-2.8,5.824,2.191,0,0,0,9.9,12.9);
	new cjs.ButtonHelper(this.button_2, 0, 1, 2, false, new lib.bt_area(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.button_1}]}).to({state:[{t:this.button_2}]},1).wait(1));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABAdIAEgIQAWAGALAEIgEAJQgMgFgVgGgAglAgQARgCAIgFQAJgEAAgOIAHAAQgBAMgCADQgEAOgdAEQgCgFgDgDgAAUAYIAAgFIAAgPIglAAIAAAMIAAACIAAAGIgKAAIABgJIAAgLIgHADIgBgCIgEgFQAMgCAIgFIgKAAIgHAAQAEgIACgJIAHABIAKAAIAAgEIgNAAIgIAAIAAgHIAIABIAOAAIgBgGIAJAAIAAAGIAJAAIgBgGIAJAAIAAAGIALAAIAJgBIgBAHIAAAEIAAAGIgIgBIgLAAIAAAEIARAAIAIAAIAAABIgBAFQgBAIgIAAIAAAQIAAAIgAAOgCIAJAAIgBgDIAEAAQABAAAAAAQABAAAAAAQAAAAABgBQAAgBAAAAIgPAAgAgMgCIASAAIAAgFIgNAAIgFAFgAgFgOIALAAIAAgEIgKAAIgBAEgAgWgQIgBACIAKAAIAAgCIABgCIgKAAIAAACgAAOgXIALAAIAAgEIgLAAgAgDgXIAJAAIAAgEIgJAAIAAAEg");
	this.shape.setTransform(4.4,11.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAeQAIgJAEgMQADgJAAgOIgEAAQgFgBgDABIAAgKIAJABIAEAAIAAgFIgBgKIALAAIgBAGIAAAJIAHAAIAJAAQgBAAABAPQgBAYgCALQgBAKgJgBIgJAAQAAgFgBgEIAIABQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQABgGABgPIAAgSIgIAAQgBAPgDAMQgEAOgJAMQgDgGgEgDgAAHAlIABgKIAAgvIAAgJIAHABIAQAAIAIgBIAAAJIAAAvIAAAJIgKAAIAAgFIgMAAIAAAGgAARAWIAMAAIAAgqIgMAAg");
	this.shape_1.setTransform(-4.3,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAnIABgMIAAgUIAAgJIgEAGIgFgIQAIgIAEgOIACgMIAKADIgCAGIgGAOIAAArIABALgAglAnIABgLIAAg3IgBgJIAHABIAMAAIAGgBIAEAFIAAACIgBABQgEAKgFAJQAHAKAAAIQAAAIgFADQgCACgFAAIgCAAIAAgBQAAgEgCgDIAEAAQAEAAAAgFQAAgGgCgDIgFgIIAHgTIgIAAIAAApIAAAPIAAAKgAAKAmQAAgFgCgEIAKABQABAAABAAQAAAAABAAQAAgBABAAQAAgBAAgBIAAgmIgJAAIgIABIAAgKQADABAFAAIAJAAIAAgIIgBgKIAKAAIAAAKIAAAIIAHgBIAAAKIgHgBIAAAoQAAAEgCADQgCACgIAAIgJAAgAAEgBIAHgFQAFAIAEALIgHAFQgEgMgFgHgAgbAOIAAAAg");
	this.shape_2.setTransform(-12.6,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAgIADgEQAEgIAFgNIAIAFQgFAOgGAKIgBADgAAdAmIAAgEIghAAIAAAEIgJAAIAAgKIAAgrIAAgIIAIAAIAMAAIAAgGIgBgJIAKAAQAAAEAAAFIAAAGIANAAIAJgBIAAAKIAAApIAAALgAAQAZIANAAIAAgRIgNAAgAgEAZIALAAIAAgRIgLAAgAAQAAIANAAIAAgPIgNAAgAgEAAIALAAIAAgPIgLAAgAglgJIAGgHQAHAEAIAGIgGAHQgHgGgIgEgAghgeIAFgHQAHAEAIAHIgGAHQgHgHgHgEg");
	this.shape_3.setTransform(-21.6,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAiQAFgFADgJIABgEIAIADQgDALgGAJgAAYASIAHgEQAFAKAEALIgIADQgDgMgFgIgAALATIAIgCQADAHACANIgIABQgCgMgDgHgAgBATIAHgBIADAUIgJAAQAAgHgBgMgAgnAeQAEgEADgGQAFgJgBgeQAAgRgBgCIAKAAIgBAUIAEgIIAFAFIgBACIgIALIgBAQIAKAMIgHAHIgFgIQgDAMgHAHQgDgFgDgDgAABAKQAHgFAEgGQADgFABgHIgDAAIgDAAQgDAJgFAGQgFAIgHAGQgCgEgEgCQAIgFAEgFIgGgFIgCAEQgCgDgEgDQAIgIAEgMIACgLIAHACIgBAEIAAABIACAAIAFAAIAEAEIgBAEIAAACIAFAAIAAgKIAAgGIAJAAQgBAAABAKIgBAGIAGAAIAIAAIAAAJIgIgBIgGAAQABAGAEAGQAEAEAGAFIgFAIQgKgJgEgKQgEALgLAJIgFgHgAgGgJIABAAIAEADIABgEIgEgEIgCAFgAgBgUIAEAEIACgIIgFAAIgBAEgAgnAAQADgGgBgRIAHACQAAARgCAHgAAaghIAGgDIAHALIgGADQgCgFgFgGg");
	this.shape_4.setTransform(-30,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAnIABgLIAAgOIAAgKIgGANIgGAIQgBgFgEgDIAJgMIAGgLIAAAAIgGAAIgHAAIAAgJIAIAAIAHAAIAAgIIgLACQgBgFgDgEQAVgCALgGIAEAIIgBABIgBAAIgBABIgJADIAAAKIAEAAIAHAAIAAAJIgHAAIgEAAIAAACQAGAFAGAIIgFAHIgHgLIAAAXIAAALgAAcAlIAAgGIgQAAIAAAGIgKAAIABgKIAAgxIgBgJIAIAAIAUAAIAIAAIgBAJIAAAwIABALgAAMAWIAQAAIAAgsIgQAAg");
	this.shape_5.setTransform(-38.9,11.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAhQAPgJAAgSIgCAAIgFAAIAAgGIAAgQIAAgFIAGAAIACAAQgDgJgDgFIAHgDQAFAGACAHIgIAEIANAAQAFgIACgJIAJADIgGAOIADAAIAGAAIAAAFIAAAQIAAAGIgGAAIgFAAIAAAWQAAABABAAQAAAAAAABQABAAAAAAQABAAABAAQAEACAAgOQAEADAEABQgBAMgBABQgCADgLAAQgKABABgIIAAgZIgFAAQgBALgEAIQgEAJgJAGQgDgFgDgCgAACgCIAYAAIAAgKIgYAAgAgZAnIAAgKIAAgPIABgKQgEAKgHAKQgBgGgDgDQAGgHADgIIADgIIgEAAQgEAAgDABIAAgKQADABAEAAIAGAAIAAgJIgJABIgDgHQANgCAJgEIAEgBIAFAHIgCABIgIADIAAALIADAAIAGAAIAAAIIgGAAIgDAAIAAACQAGAGAEAHIgGAHIgEgIIAAAXIAAAKg");
	this.shape_6.setTransform(-47.2,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAlIgJAAIgCgJIAMABQAFABAAgKIADgYIgDAAIgDAJQgFAMgJAJQgGAGgIAFIgGgGQAOgJAGgKQAFgGACgGIACgEIgFAAIgGAKQgFAGgHAGIgGgFIAAAGQgKAFgKAEIgEABIgCgJIAKgDIAAgaIgCAAIgHABIAAgJIAHAAIACAAIAAgLIgBgJIAKAAQAAADAAAGIAAALIACAAIAGAAIAAAJIgGgBIgCAAIAAAXIADgCIAEgCIAAACQALgIAEgIIgEAAIgHABIgCgIQAGgBAEgFIAOgJIgOAAIgJABIAAgKQAFABAEAAIARAAIAIgBIAGAGIgBABIgBABIgXAQIAIgBIANAAIAKgBIgBAOQAAAlgMAAIgFgBg");
	this.shape_7.setTransform(-56,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNAgQAFgFADgIQAEgJAAghQAAgJgBgDIAHABIAOAAIAJgBIgBAJIAAA1QAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIAAgQQADADAFABQAAARgCACQgBACgDABIgGAAQgGAAgCgBQgCgCAAgFIAAg3IgLAAQAAAcgCAKQgCARgIAKIgIgHgAgZAnIABgIIAAgRIAAgOQgEALgGAJQgCgFgDgEQAJgKAFgPIgGAAIgFABIAAgKIAFABIAGAAIAAgIQABgFgBgDIAKAAQgBADAAAFIAAAIIAGAAIAFgBIAAAKIgFgBIgGAAIAAACIAMAQIgFAGIgHgLIAAAgQAAAFABADg");
	this.shape_8.setTransform(-64.5,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATAoIAAgEIgmAAIAAAEIgJAAIAAgIIAAgQIAAgHIAGAAIAXAAIALgJIgfAAIgIAAIAAgHIAGAAIAkAAIAHAAIAGAFIgEACIgLAJIAJAAIAHAAIAAAHIAAARIAAAHgAgTAbIAmAAIAAgKIgmAAgAAAgcQgGAHgKAGIgSAKQgBgEgFgEQANgFAJgGQAKgHAFgHIAJABIgCACQAIAHAFADQAJAHAOAEIgDAFIgBAEQgXgJgNgOgAgLgNIAEgHQAOACAFADIgDAHQgJgDgLgCg");
	this.shape_9.setTransform(-73,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// 图层 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AolB3IAAjtIRLAAIAADtg");
	this.shape_10.setTransform(-32,14);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1).to({_off:false},0).wait(1));

	// 图层 1
	this.instance = new lib.小标();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// 图层 2
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhfBgIAAi/IC/AAIAAC/g");
	this.shape_11.setTransform(4.3,7.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-5.8,20.5,26);


(lib.t2副本 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.num =  num_wyn?num_wyn:0;
		this.nums = [Math.floor(this.num/1000)%10, Math.floor(this.num/100)%10,Math.floor(this.num/10)%10, this.num%10];
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.p3 = new lib.n1();
	this.p3.name = "p3";
	this.p3.parent = this;
	this.p3.setTransform(190.1,38.3,1.274,1.274,0,0,0,-4,-29.2);

	this.p2 = new lib.n1();
	this.p2.name = "p2";
	this.p2.parent = this;
	this.p2.setTransform(157.5,38.3,1.274,1.274,0,0,0,-4,-29.2);

	this.p1 = new lib.n1();
	this.p1.name = "p1";
	this.p1.parent = this;
	this.p1.setTransform(125,38.3,1.274,1.274,0,0,0,-4,-29.2);

	this.p0 = new lib.n1();
	this.p0.name = "p0";
	this.p0.parent = this;
	this.p0.setTransform(92.5,38.3,1.274,1.274,0,0,0,-4,-29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p0},{t:this.p1},{t:this.p2},{t:this.p3}]}).wait(1));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AgjCvQADgVgBgXIAAjPQAAgZgCgOQARABAVAAIA0AAIAAgaQABgRgDgRIAuAAQgDAOABAVIAAAZIA4AAQAXAAAOgBQgCALAAAdIAADNQADAegUAGQgHAFgqAAIgUgBQgCgYgKgRQAaADAPAAQASAAgBgKIAAg5IgeAaQgUhAgOgaQgIAZgMAYQgEAKgaAgQgQgXgLgLIAABNQAAAbACANgAAHA2QAYgZAJgbQANgdACgxIgwAAgABgg0IAKARQAcAwAOAnIAAiAIgzAAIgBAYgAi3B2QATgBAogGQAogHApgJIgBApQgdAJgyAHQgjAFgOAGgAi6AhQAQgEAGgFIAEgFQAQgPAUgWIg6ADIgHgnQAKgBALgPQASgdAHgRIALgZIAMgfIAvASIgJAPIgPAcIgSAfIgQAbIAigCQAJgOALgVIAqATQgTAggaAeQgUAYgRAPIAZgDQALgBApgHIgEAnIgiAFIguAGIglAEIgPABg");
	this.shape.setTransform(110.8,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AgsCrQgXgBgNgDQgwgFAEgxIAAh8IgUAEQgaAGgOAEIgGgrQASgBAYgFIAYgGIAAgyQAAgZgDgRIAyAAQgDAQAAAaIAAAoIBFgPIAAgzQAAgcgCgPIAwAAQgCAOAAAcIAAAqIBWgUQAUgEAWgIQAAAWgCAfIgEA4QgFA4gOAJQgLANgfAAQgRAAgVgCQgBgUgIgVQAWAFARAAQAUAFACgsQAEgdAAgdIhPATIAABeQAAAcACAOIgwAAQACgNAAgfIAAhSIhFAQIAACDQgBAQANADQAJAFBXAAQA9AAAVgCQAVgDAEgIQAKgMAAgqQAaANAUADQgEA1gSARQgMANgZAEQgRADhVAAIhKgBg");
	this.shape_1.setTransform(69.3,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AgVCxQADgRAAgYIAAiXIAAgHIgUAWQgNgWgRgLQAkggAbg1QARgeAGgcIAuALIgMAYQgCAGgLAWIA7AAIgSgeIgJgMIAngRQAUAeAQAdIABAAQAZAAARgCIAAApQgNgCgdAAIgcAAIAAAqIAcAAQAYgBAJgCIAAAlQgKAAgXAAIgcAAIAAAoIAcAAQAWAAALgCIAAAmQgIgBgaAAIgbAAIAAAtIAiAAQAdAAALgBIAAAoQgOgCgbgBIiAAAIAAAVgAAYB4IA0AAIAAgtIg0AAgAAYAoIA0AAIAAgoIg0AAgAAYgiIA0AAIAAgqIg0AAgAi9B3QA5gEBhgUIAAApQgPAEgXAEIhKAMQgTAEgMAEgAi/AhQAQgDAJgIIAUgWIAUgYIgKAAIgxADIgHglQAOgDAIgLQAMgUAOgdQANgcAGgVIAtAOIgGALIgcA1IgVAiIAhgBIARggIAqARQgDAEgIAMQgfAugmApIBPgKIgEAlQgxAHg9AGIgYADg");
	this.shape_2.setTransform(28.1,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("AhjBMQACAAANgMQANgKAEgCIAAgtIgLAAQgHAAgHACIAAgXQAFACALAAIAQAAQAJAAAGgCQgCAIAAAPIAAArQACgBALAKQAJAMAwgCQAqAAAjgEQgGALgBANIhJACQgiAAgOgEQgKgBgNgOQgCgBgEAAQgEgCgLAMIgMALgAgOAvQAYgIAUgUIgfgVIANgOQAQAKAPALQALgOAGgOIg/AAQgBAcgFAWQgGARgJARQgHgJgMgIQAKgOADgSQAIgaAAgsQAAgNgCgJIAIAAQAdgBAlgGQAPgDALgDIAPAUIgLACQgfAIg0ACIACAGQgBACgBAMIA8AAIATgCIALAMQgDADgBAHQgJAVgOARIAfAZIgPARQgMgMgRgNQgSASgdAOQgGgKgIgJgAhehLIASgPQAWAUANATIgRAPQgPgWgVgRg");
	this.shape_3.setTransform(243.9,75.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("AhIBiQACgKAAgQIAAgqIAAgSQgGAGgKAJQgFgOgFgIQAggXAOgbIASAMIgDAEQgFAKgJAKIAABTIAAAYgABJBZIhYAAQgPAAgKACIAAgYIAZAAIAfAAIAAgqIgVAAIgXAAIAAgWQAIACAPAAIAVAAIAAgmIgYAAQgOAAgKACIAAgCIAAgWIAYAAIApAAQgPgPgYgMIAPgPQAWAKAWATIgPANIAgAAQAPACAJgCIAAAYQgLgCgNAAIggAAIAAAmIAbAAQANAAAJgCIAAAWIgWAAIgbAAIAAAqIAjAAIAYAAIAAAYQgKgCgOAAgAggghgAheg4QAPgJAMgMQAMgKAFgKIASAOQAAABgIAJQgUAUgWAPQgFgKgHgIg");
	this.shape_4.setTransform(222.4,75.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("AhgBNQARgeAAgpIAAgHIAUAEIgBATIgCALQAEAHAJAJIAAg5IgTAAIgVAAIAAgVQAHACAOgBIAQAAIAAgTIgLAAQgNAAgHABIAAgVQAHABANAAIALAAIAAgGQAAgNgBgGIAYAAIgBATIAAAGIAKAAQAOAAAGgBIAAAVQgJgBgLAAIgKAAIAAATIAMAAQANABAGgCIAAAVIgTAAIgKAAIAAAVIAMAAIAQAAIAAAVQgGgBgKAAIgMAAIAAAeQANAFAjAAQA1AAAYgDQgEAIgBAOIgUABIgxAAQgZABgSgDQgegGgQgYQgFAUgIAQQgHgLgKgEgAANAzQgGgDACgOIAAgqQAAgOgCgIQAHABANAAIAhAAIAAgfIgiAAIgUAAIAAgWQAIABANAAIAjAAQAOAAAHgBIgBAUIAAAgIABAVQgHgBgQgBIgeAAIAAAoIAAAFQADACANAAQAUAAADgEQADgDAAgLIAAgMQALAFAKACQgBAbgFAHQgEAGgJABQgKACgUAAIgKAAQgSAAgDgFg");
	this.shape_5.setTransform(243,50.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("AhcBFQAggNALgWQAJgRAAghIgaAAQgPAAgIABIAAgYQAIABAPAAICFAAQANAAAKgBIAAAYQgKgBgNAAIgiAAIAABIQgCAIASgBQATAAABgHQABgHABgWQAKAGAMABQgDAkgFAEQgEAKglAAQgWAAgGgFQgGgDACgKIAAhSIgeAAQAAAlgLAZQgIASgSANQgGAEgPAIQgIgMgIgIgAAyhBIhjAAQgNAAgHACIAAgZQAFACAPAAIBjAAQAOAAAGgCIAAAZQgHgCgNAAg");
	this.shape_6.setTransform(223,50.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D81E05").s().p("AgKBdQABgKAAgQIAAhSIgrAAIAAA3IABAaIgYAAQACgNAAgNIAAg3IgCgUIATAAIAvAAIAAgYIgIABIg6ACQgCgNgFgJIANAAQBKgBAtgIQAJgBALgEIANAXIgNABQgVAEgmAEIAAAZIAzAAIASAAQgBAIAAAMIAAA4QADAZgegBIgYgCQAAgMgDgKQAPAEAKAAQAJgBgCgGIAAg1IguAAIAABSQABAQABAKg");
	this.shape_7.setTransform(59.4,50.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D81E05").s().p("AA9BXQgWgBgWgbQgPgUgGgZIgyAAIAAAtQAfgIAWgHIABAXQgGAAgpANIgeAHIgHgVQAIgDgBgKIAAhzQAAgOgBgKQAKABAOAAIBgAAQAOAAAJgBIgBAUIAAAXIABASQgIgBgNAAIghAAQAAAHACAOIAqAAQANAAAKgBIAAAWQgKgCgNAAIglAAQAHAUAOAQQAMAMAHAAQADACAEgeQAKAHAKAFQgHApgQAAIgBAAgAg2gFIAuAAIgDgVIgrAAgAg2gtIBgAAIAAgVIhgAAg");
	this.shape_8.setTransform(39.8,50.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D81E05").s().p("AAaArQgRgVgIghQgFAVgKATQgMAVgUASQgMAMgTAMQgGgOgKgIQAbgOASgTQAlgqAAhFIgCgRIAZAAQgBAIAAALQAAAvAUAhQALAWAUARQAQANAQAIQgKALgGANQghgXgTgag");
	this.shape_9.setTransform(18.5,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2副本, new cjs.Rectangle(6.4,-9.8,527.6,111.3), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.num = num_blg? num_blg:0;
		this.nums = [Math.floor(this.num/1000)%10, Math.floor(this.num/100)%10,Math.floor(this.num/10)%10, this.num%10];
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.p3 = new lib.n1();
	this.p3.name = "p3";
	this.p3.parent = this;
	this.p3.setTransform(190.1,38.3,1.274,1.274,0,0,0,-4,-29.2);

	this.p2 = new lib.n1();
	this.p2.name = "p2";
	this.p2.parent = this;
	this.p2.setTransform(157.5,38.3,1.274,1.274,0,0,0,-4,-29.2);

	this.p1 = new lib.n1();
	this.p1.name = "p1";
	this.p1.parent = this;
	this.p1.setTransform(125,38.3,1.274,1.274,0,0,0,-4,-29.2);

	this.p0 = new lib.n1();
	this.p0.name = "p0";
	this.p0.parent = this;
	this.p0.setTransform(92.5,38.3,1.274,1.274,0,0,0,-4,-29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p0},{t:this.p1},{t:this.p2},{t:this.p3}]}).wait(1));

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AhjBMQACAAANgMQANgKAEgCIAAgtIgLAAQgHAAgHACIAAgXQAFACALAAIAQAAQAJAAAGgCQgCAIAAAPIAAArQACgBALAKQAJAMAwgCQAqAAAjgEQgGALgBANIhJACQgiAAgOgEQgKgBgNgOQgCgBgEAAQgEgCgLAMIgMALgAgOAvQAYgIAUgUIgfgVIANgOQAQAKAPALQALgOAGgOIg/AAQgBAcgFAWQgGARgJARQgHgJgMgIQAKgOADgSQAIgaAAgsQAAgNgCgJIAIAAQAdgBAlgGQAPgDALgDIAPAUIgLACQgfAIg0ACIACAGQgBACgBAMIA8AAIATgCIALAMQgDADgBAHQgJAVgOARIAfAZIgPARQgMgMgRgNQgSASgdAOQgGgKgIgJgAhehLIASgPQAWAUANATIgRAPQgPgWgVgRg");
	this.shape.setTransform(243.9,75.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AhIBiQACgKAAgQIAAgqIAAgSQgGAGgKAJQgFgOgFgIQAggXAOgbIASAMIgDAEQgFAKgJAKIAABTIAAAYgABJBZIhYAAQgPAAgKACIAAgYIAZAAIAfAAIAAgqIgVAAIgXAAIAAgWQAIACAPAAIAVAAIAAgmIgYAAQgOAAgKACIAAgCIAAgWIAYAAIApAAQgPgPgYgMIAPgPQAWAKAWATIgPANIAgAAQAPACAJgCIAAAYQgLgCgNAAIggAAIAAAmIAbAAQANAAAJgCIAAAWIgWAAIgbAAIAAAqIAjAAIAYAAIAAAYQgKgCgOAAgAggghgAheg4QAPgJAMgMQAMgKAFgKIASAOQAAABgIAJQgUAUgWAPQgFgKgHgIg");
	this.shape_1.setTransform(222.4,75.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AhgBNQARgeAAgpIAAgHIAUAEIgBATIgCALQAEAHAJAJIAAg5IgTAAIgVAAIAAgVQAHACAOgBIAQAAIAAgTIgLAAQgNAAgHABIAAgVQAHABANAAIALAAIAAgGQAAgNgBgGIAYAAIgBATIAAAGIAKAAQAOAAAGgBIAAAVQgJgBgLAAIgKAAIAAATIAMAAQANABAGgCIAAAVIgTAAIgKAAIAAAVIAMAAIAQAAIAAAVQgGgBgKAAIgMAAIAAAeQANAFAjAAQA1AAAYgDQgEAIgBAOIgUABIgxAAQgZABgSgDQgegGgQgYQgFAUgIAQQgHgLgKgEgAANAzQgGgDACgOIAAgqQAAgOgCgIQAHABANAAIAhAAIAAgfIgiAAIgUAAIAAgWQAIABANAAIAjAAQAOAAAHgBIgBAUIAAAgIABAVQgHgBgQgBIgeAAIAAAoIAAAFQADACANAAQAUAAADgEQADgDAAgLIAAgMQALAFAKACQgBAbgFAHQgEAGgJABQgKACgUAAIgKAAQgSAAgDgFg");
	this.shape_2.setTransform(243,50.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("AhcBFQAggNALgWQAJgRAAghIgaAAQgPAAgIABIAAgYQAIABAPAAICFAAQANAAAKgBIAAAYQgKgBgNAAIgiAAIAABIQgCAIASgBQATAAABgHQABgHABgWQAKAGAMABQgDAkgFAEQgEAKglAAQgWAAgGgFQgGgDACgKIAAhSIgeAAQAAAlgLAZQgIASgSANQgGAEgPAIQgIgMgIgIgAAyhBIhjAAQgNAAgHACIAAgZQAFACAPAAIBjAAQAOAAAGgCIAAAZQgHgCgNAAg");
	this.shape_3.setTransform(223,50.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("AgKBdQABgKAAgQIAAhSIgrAAIAAA3IABAaIgYAAQACgNAAgNIAAg3IgCgUIATAAIAvAAIAAgYIgIABIg6ACQgCgNgFgJIANAAQBKgBAtgIQAJgBALgEIANAXIgNABQgVAEgmAEIAAAZIAzAAIASAAQgBAIAAAMIAAA4QADAZgegBIgYgCQAAgMgDgKQAPAEAKAAQAJgBgCgGIAAg1IguAAIAABSQABAQABAKg");
	this.shape_4.setTransform(59.4,50.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("AA9BXQgWgBgWgbQgPgUgGgZIgyAAIAAAtQAfgIAWgHIABAXQgGAAgpANIgeAHIgHgVQAIgDgBgKIAAhzQAAgOgBgKQAKABAOAAIBgAAQAOAAAJgBIgBAUIAAAXIABASQgIgBgNAAIghAAQAAAHACAOIAqAAQANAAAKgBIAAAWQgKgCgNAAIglAAQAHAUAOAQQAMAMAHAAQADACAEgeQAKAHAKAFQgHApgQAAIgBAAgAg2gFIAuAAIgDgVIgrAAgAg2gtIBgAAIAAgVIhgAAg");
	this.shape_5.setTransform(39.8,50.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("AAaArQgRgVgIghQgFAVgKATQgMAVgUASQgMAMgTAMQgGgOgKgIQAbgOASgTQAlgqAAhFIgCgRIAZAAQgBAIAAALQAAAvAUAhQALAWAUARQAQANAQAIQgKALgGANQghgXgTgag");
	this.shape_6.setTransform(18.5,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D81E05").s().p("AiMCzQADgTAAgdIAAhNIABggIACgTQgSA4gUAbQgKgWgQgNQAog1ARhCIgQAAQgTAAgMABIAAgnQAJABAWABIATAAIAAghQABgbgDgMIAvAAQgBAOAAAZIAAAhIAMAAQAPAAAJgBIAAAbQA0gwAMgzIAuAHIgHAPIgEAJIA7AAQAaABAKgCIAZAZQgEAEgIANQgZAogfAdQA2AfA0ALQgQASgIAWIgSgHIgBAQIAABUQABAaACAMIgwAAIAAgTIhpAAIAAATIguAAQACgMAAgZIAAhVIAAgNIgNAFQgHgNgHgIIgLALQgGgQgMgVIAACDQAAAfACARgAAGB4IBpAAIAAg2IhpAAgAgLAeICJAAIAIAAQgjgPgogYQgXARgvAWgAheg2QAWAZAWAgQAqgPAigXQgQgNgSgWQgOAPgSAQQgMgSgPgLIgPAAIgMAAgAAPhlQAWAcAVAOQAcgXAPgZIhSAAIgEAGg");
	this.shape_7.setTransform(113.5,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D81E05").s().p("AiWCxIgZgBQAAgVgJgUQAVACANAAQANACgBgNIAAhPIgcAIQgNADgFADIgJgqQAQgBAngKIAAhHIgUAAQgPgBgPACIAAgqQAPADAPAAIAUAAIAAggQAAgYgCgPIAxAAQgCAOgBAZIAAAgIAPAAQAPAAAHgBIAAAoIgXgBIgOAAIAAA8IAsgOIAAAmIgsAOIAABpQABAWgOAIQgJAHgeAAIgEAAgACQClIiqAAQgdAAgVACIAAgsQAWADAbAAIBXAAQASgzAPg2QAOg1ABgaIAyAOIgDAKIgEAMIgYBTQgKAegNAjIAqAAQAfAAAQgDIAAAsQgTgCgeAAgAgkgsIArgLQARAzAGAaQAFAbAHAuIgtALQgJhSgYhEgACKhJIiMAAQgZAAgVABIAAgqQATACAaAAIAuAAQgJgdgPgUIAtgPQAPAYAKAhIgZAHIBKAAQAdAAARgCIAAAqQgWgBgYAAg");
	this.shape_8.setTransform(71.2,7.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D81E05").s().p("AgDCyQADgPgBgeIAAh2IhBAAIAABcQgBAeACAOIgyAAQADgRAAgbIAAhPQgYAUghAXQgJgWgOgQQBKgqAwhNIg9AAQghAAgVACIAAgrQARACAlAAIBRAAQALgdADgXIAzAFQgEAHgEAMIgKAcICQAAQAkAAARgCIAAArQgTgCgiAAIihAAQgRAhgbAgIA/AAIAAgDQABgdgDgPIAxAAQgCAOAAAeIAAADIBRAAQAXAAARgDQgDAOAAATIAABfQABAdgTAGQgNAHgigBIgZgBQgCgVgLgTQAZACAOAAQAVABgCgMIAAhQIhJAAIAAB2QAAAeADAPg");
	this.shape_9.setTransform(29.1,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(6.4,-10.2,527.6,111.7), null);


// stage content:
(lib._728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// biankuang
	this.instance = new lib.biankuang();
	this.instance.parent = this;
	this.instance.setTransform(363.9,45,1,1,0,0,0,363.9,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1110));

	// 小标
	this.instance_1 = new lib.元件1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(709.1,71.9,1,1,0,0,0,4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1110));

	// t6
	this.instance_2 = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(161.2,19,1,1,0,0,0,74.5,7.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(278).to({_off:false},0).to({alpha:1},6).wait(826));

	// t7
	this.instance_3 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(580.2,52.4,0.835,0.835,0,0,0,100.9,26.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(278).to({_off:false},0).to({alpha:1},6).wait(826));

	// t4
	this.instance_4 = new lib.yuding();
	this.instance_4.parent = this;
	this.instance_4.setTransform(579.6,45.5,1,1,0,0,0,79.6,19.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(212).to({_off:false},0).to({alpha:1},11,cjs.Ease.get(1)).wait(49).to({alpha:0},6).wait(832));

	// t5
	this.instance_5 = new lib.t2副本();
	this.instance_5.parent = this;
	this.instance_5.setTransform(411,33.9,0.679,0.679,0,0,0,238.7,23.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(156).to({_off:false},0).to({alpha:1},7).wait(947));

	// t2
	this.instance_6 = new lib.t2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(411,33.9,0.679,0.679,0,0,0,238.7,23.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(77).to({_off:false},0).to({alpha:1},7).wait(65).to({alpha:0},6).to({_off:true},1).wait(954));

	// t1
	this.instance_7 = new lib.t1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(399.1,43.8,0.812,0.812,0,0,0,190.9,34);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({alpha:1},8).wait(41).to({alpha:0},7).to({_off:true},1).wait(1032));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(364,45,1,1,0,0,0,364,45);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},8).wait(1102));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363,44,730,92);
// library properties:
lib.properties = {
	id: 'D06C14CF99C84F0B9B1D26A81E8A13CD',
	width: 728,
	height: 90,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/728x90_atlas_.png?1562688362521", id:"728x90_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D06C14CF99C84F0B9B1D26A81E8A13CD'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;