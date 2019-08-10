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
	xmlhttp.open("GET","https://cdn-aua.adverserve.net/XML/425_3442.xml",false);
	xmlhttp.send();
	var xmlDoc=xmlhttp.responseXML;
	
	var prices = xmlDoc.getElementsByTagName("price");
	var maxLen = Math.min(10,prices.length);
	
	for(var i=0;i<maxLen;i++){
		var price1=xmlDoc.getElementsByTagName("price")[i].textContent;
		var znum = parseInt(price1);
		pool.push(znum);
	}
	return pool;
}


(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,970,250);// helper functions:

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
	this.shape.graphics.f("#D81E05").s().p("AAABLIAWAAIANAAQAFgBABgFIAAiCIg+AAIAAgQIBxAAIAAAQIgkAAIAACCQAAAPgKADIgPADIgYABQgBgKgGgGgAhDBKQADgCAEgFQADgFAAgGIAAhHIgiAAIAAgPIAxAAIAABVIAegTIABAGIADAHIgoAcIgMAJQgDgFgEgHgAg9g+IgRgSIAKgJIARARQAJAJAFAGIgKALIgOgQg");
	this.shape.setTransform(108.5,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AEFBNIgUgSIAJgJIAVARIARAQIgKALIgRgRgABsBPIAXAAQAEAAAAgDIAAhPIgiAAIAAgNIAyAAIgngdIAIgJIAIAGIAKAGQAMgMAKgOIg2AAIAAgOIBAAAIADgBIAJAHQgOAXgTASIAFAEIAFADIAIAGIgEAGIAOAAIACgCIAJAEIAAABIAAABIgIAUIgJAVIgLgDIAGgOIAFgPIgVAAIAABPQAAALgIAEIgLACIgSABQgBgIgEgHgAAOBeIAAitIBDAAIAABzQAAAMgIADQgGADgXAAQgCgJgCgFIAWAAQAEgBAAgDIAAhmIglAAIAACggACxBSQARgGALgIQAKgHAGgKQAFgHACgKQACgHAAgJIAAgoIANAAIAAAoQABALgCAJQgDALgFAJQgHAKgLAJQgLAJgTAHQgEgHgFgEgAhaBIQAEgBACgDQADgEgBgFIAAiMIBPAAIAABfIg/AAIAAAyIAngNIgMgUIAMgHIARAbIALAZIgNAIIgJgUIgxARIgKAEIgDACQgCgIgFgHgAhCAAIAvAAIAAgbIgvAAgAhCgoIAvAAIAAgbIgvAAgAkfBVIAAgPIBjAAQAIgTAIgdQAJgaAFgXIARADIgOAwQgKAbgHATIBBAAIAAAPgAjuAUQgGgWgGgVIAPgEIAMArIAIApIgQAEQgCgQgFgZgAEJAvIAAhRIg4AAIAABRIgOAAIAAhfIAeAAIAGgVIgrAAIAAgOIBkAAIAAAOIgoAAIgDAFIgCAGIgDAKIAoAAIAABfgAkWgnIAAgOICjAAIAAAOgAjThYIAOgFQAIAUADANIgPAEQgCgNgIgTg");
	this.shape_1.setTransform(69,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ACiBNIgVgSIAKgJIAVARIARAQIgLALIgQgRgAAJBPIAXAAQAEAAAAgDIAAhPIgiAAIAAgNIAyAAIgogdIAJgJIAIAGIAKAGQAMgMAKgOIg2AAIAAgOIBAAAIADgBIAJAHQgOAXgUASIAGAEIAFADIAIAGIgEAGIAOAAIACgCIAJAEIAAABIgBABIgHAUIgJAVIgLgDIAFgOIAGgPIgWAAIAABPQAAALgHAEIgMACIgRABQgBgIgEgHgAhUBeIAAitIBDAAIAABzQAAAMgIADQgGADgXAAQgCgJgDgFIAXAAQAEgBAAgDIAAhmIglAAIAACggAEoBNIAVAAIANAAQAGgBAAgFIAAiCIg/AAIAAgQIByAAIAAAQIgkAAIAACCQAAAPgKADIgPADIgYABQgBgKgFgGgABOBSQARgGALgIQAKgHAGgKQAFgHACgKQABgHAAgJIAAgoIAOAAIAAAoQAAALgBAJQgDALgFAJQgHAKgLAJQgMAJgSAHQgEgHgFgEgADjBMQAEgCADgFQAEgFAAgGIAAhHIgjAAIAAgPIAxAAIAABVIAegTIACAGIACAHIgoAcIgMAJQgCgFgFgHgAi9BIQADgBACgDQADgEAAgFIAAiMIBOAAIAABfIg/AAIAAAyIAngNIgMgUIANgHIAQAbIANAZIgOAIIgJgUIgxARIgKAEIgEACQgCgIgEgHgAimAAIAwAAIAAgbIgwAAgAimgoIAwAAIAAgbIgwAAgAmCBVIAAgPIBjAAQAIgTAIgdQAJgaAFgXIARADIgPAwQgJAbgHATIBBAAIAAAPgAlSAUQgFgWgGgVIAPgEIAMArIAIApIgQAEQgCgQgGgZgACmAvIAAhRIg4AAIAABRIgOAAIAAhfIAeAAIAFgVIgrAAIAAgOIBlAAIAAAOIgpAAIgCAFIgCAGIgDAKIAoAAIAABfgAl5gnIAAgOICjAAIAAAOgADpg8IgRgSIAKgJIARARQAKAJAEAGIgKALIgOgQgAk2hYIAOgFQAIAUADANIgPAEQgDgNgHgTg");
	this.shape_2.setTransform(78.9,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).wait(3));

	// 图层 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#D81E05").ss(1.8,1,1).p("AMTCVIAAkpQAAgfgfAAI3nAAQgfAAAAAfIAAEpQAAAfAfAAIXnAAQAfAAAAgfg");
	this.shape_3.setTransform(78.7,19.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("ArzCzQgfABAAgfIAAkpQAAgfAfAAIXnAAQAfAAAAAfIAAEpQAAAfgfgBg");
	this.shape_4.setTransform(78.7,19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,0.8,159.4,37.9);


(lib.VektorSmartobjekt2swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIADIAPgIIACADIgPAIg");
	this.shape.setTransform(88.1,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgUAJIAAgEIATAAIAAgKIgNAAIAAgDIAeAAIAAADIgOAAIAAAKIATAAIAAAEg");
	this.shape_1.setTransform(89.3,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIgCIACgDIAHAFIAIADIgCADIgPgIg");
	this.shape_2.setTransform(90.6,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AARAHIAAgGIghAAIAAAGIgEAAIAAgHIAUAAIgCgFIADgBIACAGIASAAIAAAHg");
	this.shape_3.setTransform(89.4,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AADAUIAAgHIgLACIgBgDIADgBIAAgbIgCAAIAAgDIARAAIAAADIgDAAIAAAZIADgBIABAEIgEAAIAAAIgAgDAKIAGgBIAAgHIgGAAgAgDAAIAGAAIAAgGIgGAAgAgDgJIAGAAIAAgHIgGAAg");
	this.shape_4.setTransform(95.1,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgDgCIADgBIAEAGIgEABIgDgGg");
	this.shape_5.setTransform(96.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgMATQAJgHABgJIgJAAIAAgDIAKAAIAAgIIgJAAIAAgDIALAAIAAAAIAFgJIADABIgFAIIAIAAIAAADIgKAAIAAAIIALAAIAAADIgLAAQADALAIAEIgCADQgJgFgCgIQgCAJgIAEg");
	this.shape_6.setTransform(97.3,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVALIAAgDIAVAAIAAgFIgOAAIAAgCIAOAAIAAgEIgNAAIgFAFIgDgCQAFgEACgFIADABIgBACIAMAAIAAgEIACAAIAAAEIASAAIAAADIgSAAIAAAEIAQAAIAAACIgQAAIAAAFIAUAAIAAADg");
	this.shape_7.setTransform(82.3,2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAIIAAgQIAhAAIAAAQgAgNAGIAbAAIAAgFIgbAAgAgNgBIAbAAIAAgDIgbAAg");
	this.shape_8.setTransform(82.4,0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAHAPIAAgBIgIAIIgCgDIAJgJQgDgJAAgKIgQAAIAAAHIAMAAIAAALQAAAHgGAAIgFAAIAAgDIAEAAQADAAAAgEIAAgJIgIAAQAAAMgFAKIgDgCQADgHAAgDQABgCAAgIIAAgMIATAAIAAgJIAEAAIAAAJIAPAAIAAADIgOAAQAAAIACAIQAEgGADgGIADACQgDAHgGAHQADAHACAAQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBIABgGIAEAAQAAACgCAGQgBAFgEAAIAAAAQgEAAgEgHg");
	this.shape_9.setTransform(110.1,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgDAAIADgCIAEADIgDACIgEgDg");
	this.shape_10.setTransform(111.6,0);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKAKQAEgEAAgIIAAgJIARAAIAAARQAAAFgFAAIgGAAIAAgDIAEAAQABAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgBIgLAAIgBADIgCAEIgDgCgAgDACIAKAAIAAgDIgKAAgAgDgEIAKAAIAAgFIgKAAg");
	this.shape_11.setTransform(104.1,1.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgVAHIAAgDIAEAAIAAgKIAiAAIAAAKIAFAAIAAADgAAHAEIAHAAIAAgHIgHAAgAgDAEIAHAAIAAgHIgHAAgAgNAEIAHAAIAAgHIgHAAg");
	this.shape_12.setTransform(103.2,3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAKIAAgTIANAAIAAATgAgDAIIAHAAIAAgHIgHAAgAgDAAIAHAAIAAgHIgHAAg");
	this.shape_13.setTransform(102,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgUARQATgBAAgNIAEAAQAAAEgCADIAIADIAMAEIgBADIgUgHQgEAFgQADgAgRALIAAgOIAjAAIAAAOIgEAAIAAgLIgbAAIAAALgAgPgHIAAgNIAeAAIAAANgAgLgLIAXAAIAAgGIgXAAg");
	this.shape_14.setTransform(116.9,1.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AANATIgBgBQAAAAgBgJQABgHgKABIgNAAIAAAQIgFAAIAAglIATAAQANAAAAAKQAAAGgGACQAFACABAGIAAAJIABACgAgLgBIANAAQAKAAAAgHQAAgGgJAAIgOAAg");
	this.shape_15.setTransform(117,-4.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgOATIAAglIAdAAIAAAEIgZAAIAAAMIAYAAIAAADIgYAAIAAAOIAZAAIAAAEg");
	this.shape_16.setTransform(112.7,-4.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgQATIAAglIAVAAQAKAAAAAKQAAAGgGACQAHABABAHQgCALgLAAgAgMAQIAQAAQAIAAABgIQgBgHgIAAIgQAAgAgMgBIAPAAQAIAAAAgHQAAgHgHAAIgQAAg");
	this.shape_17.setTransform(108.2,-4.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AASATIAAggIgQAgIgDAAIgQggIAAAgIgFAAIAAglIAGAAIAQAgIARggIAFAAIAAAlg");
	this.shape_18.setTransform(103,-4.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgOATIAAglIAdAAIAAAEIgZAAIAAAMIAYAAIAAADIgYAAIAAAOIAZAAIAAAEg");
	this.shape_19.setTransform(98.2,-4.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AATATIAAggIgRAgIgDAAIgQggIAAAgIgFAAIAAglIAGAAIAQAgIARggIAFAAIAAAlg");
	this.shape_20.setTransform(93,-4.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AjfATQgKAAgFgEQgDgDAAgGIAEAAQAAAEACADQADADAIAAQAFABAGgEQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgFgEgBQgEgCgFAAQgNABgDgKQAAgEADgCQAFgFAIAAQAHAAAGAEQADADAAAFIgEAAQAAgDgCgCQgFgEgEABIgJABQgEACAAAEQABAHAMAAQAOgBACALQgFALgIAAIgDgBgACjAAQAAgQAUgDQAPABAEAMIAAABIgEAAIAAgBQgDgJgMAAQgPABgBAOQgBAOARACQANAAACgMIAAAAIAEAAIAAAAQgBAOgSABQgTAAgBgTgADUATIAAglIAeAAIAAAEIgaAAIAAANIAZAAIAAACIgZAAIAAAOIAaAAIAAAEgACUATIgNgPIgPgQIAAAfIgDAAIAAglIAEAAIANAPIAOAPIAAgeIAEAAIAAAlgABnATIgFgMIgTAAIgGAMIgEAAIASglIADAAIARAlgABgAEIgIgRIgIARIAQAAIAAAAgAA3ATIAAglIAEAAIAAAlgAAUATIAAglIAEAAIAAAhIAXAAIAAAEgAgOATIAAglIAEAAIAAAhIAWAAIAAAEgAgcATIgGgMIgTAAIgFAMIgEAAIARglIAEAAIARAlgAgjAEIgIgRIgIARIAQAAIAAAAgAhdATIAAgBQgBAAAAgIQAAgJgJABIgPAAIAAARIgEAAIAAglIAUAAQANAAAAALQAAAFgGACQAFACAAAGQAAAIABACIAAABgAh2AAIAPAAQAJAAAAgIQAAgGgIAAIgQAAgAiIATIgFgMIgTAAIgGAMIgEAAIASglIADAAIASAlgAiPAEIgHgRIgJARIAQAAIAAAAgAi8ATIAAghIgPAAIAAgEIAhAAIAAAEIgOAAIAAAhg");
	this.shape_21.setTransform(63.9,-4.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAPATIgGgMIgSAAIgFAMIgEAAIARglIADAAIARAlgAAIAEIgIgQIgHAQIAPAAIAAAAg");
	this.shape_22.setTransform(35.8,-4.6);

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
p.nominalBounds = new cjs.Rectangle(33.9,-7.1,104.5,11.2);


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


(lib.t1swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AgsBAQANgMAGgQQAIgUAAgrIAAgdIgBgUIAUAAIgBAUIAAAZIAKgEIAKAZIAAgqQABgNgCgFIAVAAIgBASIAAAXIAKgFQAIANAEAMIAAgvIgBgUIAWAAQgCAIABAMIAABvIABAVIgWAAIABgVIAAgyIgLAFQgEgPgHgOIAABEIABAUIgVAAIABgUIAAgqIgLAFIgEgQIgFgPQgBAmgGAWQgFANgGAKIgMAOQgHgJgIgFgAhRA/QANgOAKglIAPAKQgFAVgIARIgDAGIgGAKgAguAIQAFgKADgJQACgJAAgPIAQAEIgDAaIgHAUgAhDgLIgPgLIAMgNQAQAJANAMIgNAOQgHgHgGgEgAhNhAIANgNQASALAMAMIgOAOQgMgOgRgKg");
	this.shape.setTransform(136.5,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AAsA0QgKgPgEgOQgCAQgLAPQgJAOgPALQgHgKgFgDIgGAAIgmAAIgTAAIABgRIAAhlIgBgQIAQABIAtAAQALAAAHgBIAAASIgRgBIgqAAIAABUQAOgQAIgRQgKgLgMgLIALgOIAGAGIALAMQAEgNABgQIASAGIgEAWIgFAQIAJAKIAKAQIgMAPIgJgPIgGgJQgJASgNAQQgGgJgGgEIAAAOIAlAAIAPAAIAAAIQAKgJAHgLQAMgVABghIgBgKIAUAAIgBAGQABAVAFAPQAFAPAMANQAIAIAOAKQgHAJgFAJQgSgOgJgNgAAsgEQAKgPAFgSIglAAQgIATgNARQgGgHgIgFQAMgOAHgWQAGgRABgMIAVACIgEANIgDAKIAeAAIAPgBIAJAJIgFAOQgFARgLATQgJgFgHgEg");
	this.shape_1.setTransform(119.1,19.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AhXA+QABAAANgKQAKgIAEgCIAAgkIgKAAIgMABIAAgSIAOABIAOAAIAOgBIgBASIAAAjIAKAHQAHAFAKACQALACAXAAQAmAAAdgEQgFAJgBALIhAABQgfABgLgEQgJgBgMgLQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgEAAgLAJIgJAKgAgMAnQAVgIASgPIgcgRIAKgMIAeAQQAJgKAFgLIg3AAIgDAVQgBAMgDAHQgDAOgJAOQgHgIgJgGQAIgLAEgPQAFgWAAgjIgBgTIAHABIAbgCIAfgDQAOgCAIgEIAPARIgJABQgdAGgsADIAAAFIgBAKIA0AAQALAAAGgBIAKAKIgFAIQgHARgLAOIAbAVIgOANQgLgKgPgLQgQAQgZALQgFgJgHgGgAhSg8IAPgMQATAPAMAPIgPANQgOgSgRgNg");
	this.shape_2.setTransform(100.2,19.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("AhABPQABgIAAgMIAAgiIAAgPQgEAGgJAGQgEgLgFgHQAcgSAMgWIAQAKIgCADIgNAQIAABEIABASgABABJIhOAAIgVABIAAgUIAVABIAbAAIAAgjIgSAAIgVABIAAgSIAVABIASAAIAAgeIgUAAIgVABIAAgTIAVABIAkAAQgOgOgUgJIANgMQALAFAIAFQAJAEALAJIgNAMIAcAAIAUgBIAAATIgUgBIgdAAIAAAeIAYAAIAUgBIAAASIgUgBIgYAAIAAAjIAfAAIAWgBIAAAUIgWgBgAhTguQANgHALgJQAKgIAFgIIAQALIgHAHQgSASgUAMQgEgJgGgHg");
	this.shape_3.setTransform(81.8,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("AgrA/QASgJAFgLQAJgOAAgdQAAgJgBgGIAVAAIgBAPQAAAjgKASQgJAPgSALQgEgKgKgGgAhBBNIABgTIAAgvIAAgGIAAgMQgEAHgKAKQgDgKgFgKQAUgSANgcQAFgKACgKIAVAFIgDAGQgHASgKAQIAAAMQATgJALgLQARgOALgZIAUADIgDAGQARAeAoAUQgHAIgDAKIgKgGQgJgFgOgMQgMgLgLgSQgNATgPANIgLAIIgQAMQgEgKgHgHIAABMQABAMABAHgAAhBNIAAgUIAAg2IAAgSIAWAAQgBAGgBAMIAAA2QABALABAJg");
	this.shape_4.setTransform(63.7,19.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("Ag1BOQACgGAAgNIAAgiIgGADIgNADIgIADIgEgTIAKgCIAVgGIAAghIgLAAQgDAMgEAMQgHgEgJgEQAJgWABgbIgBgFIASADIgBAGIgBAMIAJAAIAAgVQAAgHgCgGIAWAAIgBANIAAAVIABAAQAKAAAFgCIAAASIAQABIAVAAIAAgQIgQAAIgRAAIAAgSIARABIAQAAIAAgGQAAgHgBgFIAVAAIgBAMIAAAGIAUAAIATgBIAAASIgTAAIgUAAIAAAQIAZAAIAVgBIAAASIgTgBIgCAAIAAANIACAAIASAAIAAASIgSgBIgCAAIAAAoQADASgegCIgPAAQgBgLgEgIQAPADAGgBQAIABgBgFIAAgjIgvAAIgSABIAAgIIgNAGIAAAoIABATgAgQADIARAAIAtAAIAAgNIguAAIgUABIAAgRIgJAAIgDAAIAAAcIAQgGgAgLAeIAOgJQAOALAKAPIgQALQgJgPgNgNg");
	this.shape_5.setTransform(45,19.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("AgfA+QAggGAUgPQAOgJAHgJQAKgMAEgLIASAJIgGAJQgIANgJAKQgbAbgsALQgFgLgGgGgAhUA+QAUgMAKgSIgOgJIgMgHQAJgTAFgbIgDAAIgNABIAAgSIAOABIAFAAQADgUAAgNIAUACIgCAPIgCAQIAMAAIARgBIgBAEIgCAQIgCAQQgDAUgHARQAKAHAIAIIgKARQgIgJgJgGQgLASgUAPQgGgIgIgGgAg1gGIgFAOIANAIQAHgRADgdIgNAAIgFAYgAAVAXIABgPIAAhCIgBgSIAWAAQgCAHAAALIAABCIABAPgAgUAEQAQgUACgmIARADIgDAXIgDANQgFAQgIARQgFgHgLgHgAAwgzIARgEIAMAdQAFAMADANIgTAGQgGgbgMgdg");
	this.shape_6.setTransform(26.9,19.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D81E05").s().p("AgBAsQgTAeg2AGQgEgJgFgIQAqgCASgTIgoAAIgUABIAAgSIAUABIAyAAIACgIIgBgBIAVAAIAAABIgCAIIA2AAIAUgBIAAASIgUgBIgqAAQATARAuADQgGAJgCAJQg6gHgTgdgAAxAUIAAhDIhjAAIAAAzQASgFAJgJIgIAAQgKAAgFABIAAgQIAOABQgDgGgHgIIAPgGQAGAGAEAIIgNAGIAUAAIAAgKIgBgKIASAAQgBAFABAFIAAAKIATAAIgMgEQAHgJAEgHIAPAEIgMAQIAEAAIANgBIAAAQIgNgBIgVAAQAOAFASAJIgJANIgNgIIgPgIIAAAGIABAGIgRAAIAAgIIAAgDIABgHQgNAOgSAJQgEgHgGgFIAAAOIgUAAIABgNIAAg5IgBgNIATABIAeAAQAFgHAEgKIAVACIgJAPIAzAAIASgBIgBAMIAAA7IABAMg");
	this.shape_7.setTransform(8.5,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,144.9,44.8);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bg1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,970,250), null);


(lib.an = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABAdIAEgIQAWAGALAEIgDAJQgNgFgVgGgAglAgQARgCAIgFQAJgEgBgOIAIAAQAAAMgDADQgEAOgdAEQgCgFgDgDgAAUAYIAAgFIAAgPIglAAIAAAMIAAACIAAAGIgJAAIAAgJIAAgLIgHADIgBgCIgEgFQANgCAHgFIgJAAIgHAAQADgIABgJIAHABIALAAIAAgEIgNAAIgIAAIAAgHIAIABIAOAAIgBgGIAJAAIAAAGIAJAAIgBgGIAJAAIAAAGIAMAAIAIgBIgBAHIAAAEIAAAGIgHgBIgMAAIAAAEIARAAIAIAAIAAABIgBAFQAAAIgJAAIAAAQIAAAIgAAOgCIAJAAIgBgDIAFAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBIgPAAgAgMgCIASAAIAAgFIgNAAIgFAFgAgFgOIALAAIAAgEIgKAAIgBAEgAgXgQIAAACIAJAAIABgCIAAgCIgKAAIAAACgAAOgXIALAAIAAgEIgLAAgAgDgXIAJAAIAAgEIgJAAIAAAEg");
	this.shape.setTransform(9.2,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAeQAIgJAEgMQADgJAAgOIgEAAQgFgBgDABIAAgKIAJABIAEAAIAAgFIgBgKIALAAIgBAGIAAAJIAHAAIAJAAQgBAAABAPQgBAYgCALQgBAKgJgBIgJAAQAAgFgBgEIAIABQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQABgGABgPIAAgSIgIAAQgBAPgDAMQgEAOgJAMQgDgGgEgDgAAHAlIABgKIAAgvIAAgJIAHABIAQAAIAIgBIAAAJIAAAvIAAAJIgKAAIAAgFIgMAAIAAAGgAARAWIAMAAIAAgqIgMAAg");
	this.shape_1.setTransform(0.5,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAnIABgLIAAgVIAAgJIgEAGIgFgIQAIgIAEgOIACgMIAKADIgCAFIgGAPIAAArIABALgAglAnIABgKIAAg4IgBgIIAHAAIAMAAIAGAAIAEAEIAAABIgBABQgEALgFAKQAHAIAAAJQAAAJgFACQgCACgFAAIgCAAIAAgBQAAgEgCgEIAEABQAEAAAAgFQAAgGgCgDIgFgHIAHgUIgIAAIAAAoIAAAQIAAAKgAAKAnQAAgGgCgEIAKABQABAAABAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAgnIgJAAIgIAAIAAgJQADABAFgBIAJAAIAAgHIgBgKIAKAAIAAAKIAAAHIAHAAIAAAKIgHgBIAAAoQAAAFgCACQgCACgIABIgJAAgAAEgCIAHgEQAFAIAEALIgHAFQgEgMgFgIgAgbANIAAAAg");
	this.shape_2.setTransform(-7.8,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAgIACgEQAFgIAEgOIAJAGQgFAOgGALIgBACgAAcAnIAAgFIggAAIAAAFIgKAAIABgKIAAgsIAAgIIAIAAIAMAAIAAgHIAAgIIAKAAQgBADAAAGIAAAGIANAAIAIgBIAAAKIAAAqIAAALgAAQAZIAMAAIAAgQIgMAAgAgEAZIALAAIAAgQIgLAAgAAQAAIAMAAIAAgPIgMAAgAgEAAIALAAIAAgPIgLAAgAgkgJIAEgHQAIAEAIAGIgGAHQgHgFgHgFgAgigfIAHgGQAHAEAGAHIgFAIQgGgIgJgFg");
	this.shape_3.setTransform(-16.8,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAhQAFgEADgIIABgFIAIADQgDALgGAJgAAYASIAHgEQAFAKAEAKIgIAFQgDgNgFgIgAALASIAIgBQADAHACAMIgIADQgCgMgDgJgAgBATIAHgCIADAVIgJABQAAgJgBgLgAgnAfQAEgFADgGQAFgJgBgfQAAgPgBgDIAKAAIgBATIAEgIIAFAGIgBABIgIAMIgBAQIAKANIgHAGIgFgJQgDAMgHAJQgDgGgDgCgAABAKQAHgFAEgHQADgEABgGIgDAAIgDAAQgDAIgFAHQgFAHgHAGQgCgEgEgDQAIgEAEgGIgGgDIgCACQgCgCgEgDQAIgIAEgMIACgLIAHABIgBAFIAAABIACAAIAFAAIAEADIgBAGIAAABIAFAAIAAgKIAAgGIAJAAQgBAAABAKIgBAGIAGAAIAIAAIAAAJIgIAAIgGAAQABAFAEAFQAEAFAGAFIgFAIQgKgJgEgKQgEAMgLAHIgFgGgAgGgKIABAAIAEAFIABgFIgEgEIgCAEgAgBgUIAEAEIACgHIgFAAIgBADgAgnAAQADgGgBgQIAHABQAAARgCAHgAAaggIAGgEIAHAKIgGAFQgCgGgFgFg");
	this.shape_4.setTransform(-25.2,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAnIAAgLIAAgOIABgKIgGANIgGAIQgCgFgDgDIAJgMIAGgLIAAAAIgGAAIgHAAIAAgJIAIAAIAGAAIAAgIIgLACQgBgFgCgEQAVgCAKgGIAFAIIAAABIgCAAIgBABIgKADIAAAKIAGAAIAGAAIAAAJIgGAAIgGAAIAAACQAIAFAFAIIgFAHIgIgLIAAAXIABALgAAdAlIAAgGIgRAAIAAAGIgKAAIABgKIAAgxIgBgJIAIAAIAUAAIAIAAIAAAJIAAAwIAAALgAAMAWIARAAIAAgsIgRAAg");
	this.shape_5.setTransform(-34.1,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAgQAPgHgBgUIgBAAIgFAAIAAgFIAAgPIAAgGIAGAAIABAAQgCgJgDgEIAHgEQAEAGADAHIgJAEIAPAAQAEgIACgJIAJADIgGAOIACAAIAHAAIAAAGIAAAPIAAAFIgHAAIgDAAIAAAXQgBAAABABQAAAAAAABQABAAAAAAQABAAABAAQAFACgBgOQAFADADAAQAAANgDACQgBACgKAAQgLABABgIIAAgaIgGAAQAAAMgDAHQgFAKgJAFQgCgDgEgEgAACgCIAYAAIAAgLIgYAAgAgZAnIAAgKIAAgPIAAgKQgCAKgIAJQgCgFgCgEQAGgGADgIIAEgHIgFAAQgEgBgCABIAAgJQACAAAEAAIAGAAIAAgJIgJABIgDgIQANgBAJgDIAEgDIAFAHIgCACIgIADIAAALIACAAIAHAAIAAAJIgHAAIgCAAIAAABQAGAGADAHIgFAHIgEgJIAAAYIAAAKg");
	this.shape_6.setTransform(-42.4,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAlIgJAAIgCgJIAMABQAFABABgKIACgYIgCAAIgEAJQgFAMgJAJQgFAGgJAFIgHgGQAOgJAIgKQAEgGACgGIACgEIgFAAIgGAKQgEAGgIAGIgGgFIAAAGQgKAFgKAEIgEABIgCgJIAKgDIAAgaIgCAAIgHABIAAgJIAHAAIACAAIAAgLIgBgJIALAAQgCADABAGIAAALIADAAIAFAAIAAAJIgFgBIgDAAIAAAXIADgCIAEgCIAAACQALgIAEgIIgEAAIgGABIgCgIQAEgBAGgFIANgJIgNAAIgKABIAAgKQAFABAFAAIAQAAIAJgBIAEAGIgBABIAAABIgXAQIAIgBIAOAAIAJgBIgBAOQAAAlgMAAIgFgBg");
	this.shape_7.setTransform(-51.2,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNAgQAGgFACgHQAEgLAAggQAAgJgBgCIAHAAIAOAAIAIAAIAAAIIAAA2QAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIAAgQQADACAFABQAAARgCACQgBACgDABIgGABQgHgBgBgBQgCgBAAgGIAAg3IgLAAQAAAcgCAKQgCARgIAKIgIgHgAgZAnIABgJIAAgRIAAgMQgEALgGAIQgCgFgDgDQAJgLAEgPIgEAAIgHAAIAAgJIAHAAIAFAAIAAgIQABgEgBgDIAKAAQgBADAAAEIAAAIIAGAAIAFAAIAAAJIgFAAIgGAAIAAACIANAPIgHAIIgGgLIAAAeQAAAGABADg");
	this.shape_8.setTransform(-59.7,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATAnIAAgDIgmAAIAAADIgJAAIAAgHIAAgQIAAgHIAHABIAWAAIALgKIgfAAIgJAAIAAgHIAIAAIAjAAIAHAAIAFAEIgDADIgKAKIAJAAIAGgBIAAAIIAAAPIAAAHgAgTAcIAmAAIAAgKIgmAAgAAAgdQgGAIgKAGIgTAKQgBgFgDgEQAMgEAIgGQALgHAFgIIAJADIgBABQAGAHAGAEQAJAGAPAEIgEAGIgCADQgXgIgMgQgAgLgOIAEgHQAOAEAGACIgEAIQgJgFgLgCg");
	this.shape_9.setTransform(-68.2,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

	// 图层 6
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AorBgIAAiNIMwAAIAAgyIEnAAIAAC/g");
	this.shape_10.setTransform(-29.7,10);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1).to({_off:false},0).wait(3));

	// 图层 5
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D81E05").s().p("AgpBLIAAgPQAKAEAKACQAIADAKAAQAJAAAKgFQAHgDABgHQgBgIgFgDQgLgHgKgEQgQgEgNgLQgHgJAAgKQAAgTARgIQgHgEgFgHQgFgGAAgIQABgNALgHQAOgJAQABIASACQAKABAJAFIgFAOQgJgEgJgBQgHgCgIAAQgIAAgJADQgFADAAAHQAAAGAFAEQALAGALAEQAPAEAMALQAIAIAAALQAAASgQAKQAVAMgHAXQgEAHgHAEQgQAKgRgBIgDAAQgSAAgQgIgAgSgQQgEAFgBAHQAAAEADAEQAEAEAFADQALAHAMADQAMgFABgOQAAgHgHgGQgMgIgNgEQgHACgEAFg");
	this.shape_11.setTransform(10.2,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.5,20.5);


(lib.xiaobiaoanniu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.an();
	this.instance.parent = this;
	this.instance.setTransform(3.9,7.9,1,1,0,0,0,10.2,10.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.an(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.6,-2,111.2,19.3);


(lib.theswf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.num =  num_wyn?num_wyn:0;
		this.nums = [Math.floor(this.num/1000)%10, Math.floor(this.num/100)%10,Math.floor(this.num/10)%10, this.num%10];
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4
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

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AgjCvQADgVgBgXIAAjPQAAgZgCgOQARABAVAAIA0AAIAAgaQABgRgDgRIAuAAQgDAOABAVIAAAZIA4AAQAXAAAOgBQgCALAAAdIAADNQADAegUAGQgHAFgqAAIgUgBQgCgYgKgRQAaADAPAAQASAAgBgKIAAg5IgeAaQgUhAgOgaQgIAZgMAYQgEAKgaAgQgQgXgLgLIAABNQAAAbACANgAAHA2QAYgZAJgbQANgdACgxIgwAAgABgg0IAKARQAcAwAOAnIAAiAIgzAAIgBAYgAi3B2QATgBAogGQAogHApgJIgBApQgdAJgyAHQgjAFgOAGgAi6AhQAQgEAGgFIAEgFQAQgPAUgWIg6ADIgHgnQAKgBALgPQASgdAHgRIALgZIAMgfIAvASIgJAPIgPAcIgSAfIgQAbIAigCQAJgOALgVIAqATQgTAggaAeQgUAYgRAPIAZgDQALgBApgHIgEAnIgiAFIguAGIglAEIgPABg");
	this.shape.setTransform(110.8,8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AgsCrQgXgBgNgDQgwgFAEgxIAAh8IgUAEQgaAGgOAEIgGgrQASgBAYgFIAYgGIAAgyQAAgZgDgRIAyAAQgDAQAAAaIAAAoIBFgPIAAgzQAAgcgCgPIAwAAQgCAOAAAcIAAAqIBWgUQAUgEAWgIQAAAWgCAfIgEA4QgFA4gOAJQgLANgfAAQgRAAgVgCQgBgUgIgVQAWAFARAAQAUAFACgsQAEgdAAgdIhPATIAABeQAAAcACAOIgwAAQACgNAAgfIAAhSIhFAQIAACDQgBAQANADQAJAFBXAAQA9AAAVgCQAVgDAEgIQAKgMAAgqQAaANAUADQgEA1gSARQgMANgZAEQgRADhVAAIhKgBg");
	this.shape_1.setTransform(69.3,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AgVCxQADgRAAgYIAAiXIAAgHIgUAWQgNgWgRgLQAkggAbg1QARgeAGgcIAuALIgMAYQgCAGgLAWIA7AAIgSgeIgJgMIAngRQAUAeAQAdIABAAQAZAAARgCIAAApQgNgCgdAAIgcAAIAAAqIAcAAQAYgBAJgCIAAAlQgKAAgXAAIgcAAIAAAoIAcAAQAWAAALgCIAAAmQgIgBgaAAIgbAAIAAAtIAiAAQAdAAALgBIAAAoQgOgCgbgBIiAAAIAAAVgAAYB4IA0AAIAAgtIg0AAgAAYAoIA0AAIAAgoIg0AAgAAYgiIA0AAIAAgqIg0AAgAi9B3QA5gEBhgUIAAApQgPAEgXAEIhKAMQgTAEgMAEgAi/AhQAQgDAJgIIAUgWIAUgYIgKAAIgxADIgHglQAOgDAIgLQAMgUAOgdQANgcAGgVIAtAOIgGALIgcA1IgVAiIAhgBIARggIAqARQgDAEgIAMQgfAugmApIBPgKIgEAlQgxAHg9AGIgYADg");
	this.shape_2.setTransform(28.1,7.9);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.8,-9.8,303.6,111.3);


(lib.t2swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.num = num_blg? num_blg:0;
		this.nums = [Math.floor(this.num/1000)%10, Math.floor(this.num/100)%10,Math.floor(this.num/10)%10, this.num%10];
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_3
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

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AhWCCQA5gLAkgRQAlgTAbgeQATgUANgaIADgHIABgEIAbAMQgOg3ggg/IAmgNQAbAxAVBDIgmAQIALAFQgYAugeAfQgdAdgkASQgjASg5APQgGgWgQgTgAiqCIQAMgMAOgfQAPgfAMgmIAiAZQgPAvgSAmIgSAhgAAWA0QADgSAAgQIAAiSQAAgagDgOIAvAAQgCAOAAAaIAACTQAAARACAQgAhXASQAUggAJgdQAJgdAHgyIApALQgJA3gKAgQgJAfgUAlQgQgQgWgKgAitgwIAXgfQAlAVAcAYIgXAiQghgdgggTgAiciMIAagdQAjAVAfAdIgaAhQgcgdgmgZg");
	this.shape.setTransform(63.7,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AgWCtQACgVAAgYIAAglIhgAAQgWAAgZACIAAgrQAQACAdAAIBiAAIAAgQQAAgLgBgJIgBgCIAsAAQgBAKAAAMIAAAQIBoAAQAbAAAQgCIAAArQgYgCgWAAIhlAAIAAAlQAAAYACAVgAhuARQABgMAAgVQAAgcACgQQgSAVgaAUQgHgTgLgSQAjgaAZggQAZggAIgaIApAQIgNAUIgBABIgEAIIgRAbIAABSQAAAXACAMgAAGABQgHgDgEgIQgDgIAAgRIAAgVIgdAFQgEgSgKgSIArgHIAAgZQAAghgCgNIAqAAQgCAPAAAcIAAATQA6gPApgfIAcAjQg6AghFASIAAATQAAAKAHADQAHADAbAAQAtAAAIgGQAEgDACgHIACghQASAKAUAFQgEAigGAOQgGANgPAFQgKAEgaACIggAAQgzABgOgJg");
	this.shape_1.setTransform(26.2,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AhjBMQACAAANgMQANgKAEgCIAAgtIgLAAQgHAAgHACIAAgXQAFACALAAIAQAAQAJAAAGgCQgCAIAAAPIAAArQACgBALAKQAJAMAwgCQAqAAAjgEQgGALgBANIhJACQgiAAgOgEQgKgBgNgOQgCgBgEAAQgEgCgLAMIgMALgAgOAvQAYgIAUgUIgfgVIANgOQAQAKAPALQALgOAGgOIg/AAQgBAcgFAWQgGARgJARQgHgJgMgIQAKgOADgSQAIgaAAgsQAAgNgCgJIAIAAQAdgBAlgGQAPgDALgDIAPAUIgLACQgfAIg0ACIACAGQgBACgBAMIA8AAIATgCIALAMQgDADgBAHQgJAVgOARIAfAZIgPARQgMgMgRgNQgSASgdAOQgGgKgIgJgAhehLIASgPQAWAUANATIgRAPQgPgWgVgRg");
	this.shape_2.setTransform(243.9,75.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("AhIBiQACgKAAgQIAAgqIAAgSQgGAGgKAJQgFgOgFgIQAggXAOgbIASAMIgDAEQgFAKgJAKIAABTIAAAYgABJBZIhYAAQgPAAgKACIAAgYIAZAAIAfAAIAAgqIgVAAIgXAAIAAgWQAIACAPAAIAVAAIAAgmIgYAAQgOAAgKACIAAgCIAAgWIAYAAIApAAQgPgPgYgMIAPgPQAWAKAWATIgPANIAgAAQAPACAJgCIAAAYQgLgCgNAAIggAAIAAAmIAbAAQANAAAJgCIAAAWIgWAAIgbAAIAAAqIAjAAIAYAAIAAAYQgKgCgOAAgAggghgAheg4QAPgJAMgMQAMgKAFgKIASAOQAAABgIAJQgUAUgWAPQgFgKgHgIg");
	this.shape_3.setTransform(222.4,75.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("AhgBNQARgeAAgpIAAgHIAUAEIgBATIgCALQAEAHAJAJIAAg5IgTAAIgVAAIAAgVQAHACAOgBIAQAAIAAgTIgLAAQgNAAgHABIAAgVQAHABANAAIALAAIAAgGQAAgNgBgGIAYAAIgBATIAAAGIAKAAQAOAAAGgBIAAAVQgJgBgLAAIgKAAIAAATIAMAAQANABAGgCIAAAVIgTAAIgKAAIAAAVIAMAAIAQAAIAAAVQgGgBgKAAIgMAAIAAAeQANAFAjAAQA1AAAYgDQgEAIgBAOIgUABIgxAAQgZABgSgDQgegGgQgYQgFAUgIAQQgHgLgKgEgAANAzQgGgDACgOIAAgqQAAgOgCgIQAHABANAAIAhAAIAAgfIgiAAIgUAAIAAgWQAIABANAAIAjAAQAOAAAHgBIgBAUIAAAgIABAVQgHgBgQgBIgeAAIAAAoIAAAFQADACANAAQAUAAADgEQADgDAAgLIAAgMQALAFAKACQgBAbgFAHQgEAGgJABQgKACgUAAIgKAAQgSAAgDgFg");
	this.shape_4.setTransform(243,50.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("AhcBFQAggNALgWQAJgRAAghIgaAAQgPAAgIABIAAgYQAIABAPAAICFAAQANAAAKgBIAAAYQgKgBgNAAIgiAAIAABIQgCAIASgBQATAAABgHQABgHABgWQAKAGAMABQgDAkgFAEQgEAKglAAQgWAAgGgFQgGgDACgKIAAhSIgeAAQAAAlgLAZQgIASgSANQgGAEgPAIQgIgMgIgIgAAyhBIhjAAQgNAAgHACIAAgZQAFACAPAAIBjAAQAOAAAGgCIAAAZQgHgCgNAAg");
	this.shape_5.setTransform(223,50.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("AgKBdQABgKAAgQIAAhSIgrAAIAAA3IABAaIgYAAQACgNAAgNIAAg3IgCgUIATAAIAvAAIAAgYIgIABIg6ACQgCgNgFgJIANAAQBKgBAtgIQAJgBALgEIANAXIgNABQgVAEgmAEIAAAZIAzAAIASAAQgBAIAAAMIAAA4QADAZgegBIgYgCQAAgMgDgKQAPAEAKAAQAJgBgCgGIAAg1IguAAIAABSQABAQABAKg");
	this.shape_6.setTransform(59.4,50.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D81E05").s().p("AA9BXQgWgBgWgbQgPgUgGgZIgyAAIAAAtQAfgIAWgHIABAXQgGAAgpANIgeAHIgHgVQAIgDgBgKIAAhzQAAgOgBgKQAKABAOAAIBgAAQAOAAAJgBIgBAUIAAAXIABASQgIgBgNAAIghAAQAAAHACAOIAqAAQANAAAKgBIAAAWQgKgCgNAAIglAAQAHAUAOAQQAMAMAHAAQADACAEgeQAKAHAKAFQgHApgQAAIgBAAgAg2gFIAuAAIgDgVIgrAAgAg2gtIBgAAIAAgVIhgAAg");
	this.shape_7.setTransform(39.8,50.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D81E05").s().p("AAaArQgRgVgIghQgFAVgKATQgMAVgUASQgMAMgTAMQgGgOgKgIQAbgOASgTQAlgqAAhFIgCgRIAZAAQgBAIAAALQAAAvAUAhQALAWAUARQAQANAQAIQgKALgGANQghgXgTgag");
	this.shape_8.setTransform(18.5,50.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-13.3,313.2,114.8);


// stage content:
(lib._970x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// biankuang
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9A9A9A").ss(2,1,0,3).p("EBLyATiMiXjAAAMAAAgnDMCXjAAAg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1097));

	// dsd
	this.instance = new lib.xiaobiaoanniu();
	this.instance.parent = this;
	this.instance.setTransform(953.6,227.9,1,1,0,0,0,4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1097));

	// t6
	this.instance_1 = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(381.6,34.7,1.373,1.373,0,0,0,74.5,7.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(278).to({_off:false},0).to({alpha:1},6).wait(813));

	// t7
	this.instance_2 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(729.4,125.2,1.62,1.62,0,0,0,100.9,26.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(278).to({_off:false},0).to({alpha:1},6).wait(813));

	// t4
	this.instance_3 = new lib.yuding();
	this.instance_3.parent = this;
	this.instance_3.setTransform(643,188.1,1.309,1.309,0,0,0,79.5,19.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(217).to({_off:false},0).to({alpha:1},6).wait(49).to({alpha:0},6).wait(819));

	// t5
	this.instance_4 = new lib.theswf();
	this.instance_4.parent = this;
	this.instance_4.setTransform(544.4,88.1,1,1,0,0,0,17.9,8.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(156).to({_off:false},0).to({alpha:1},6).wait(49).to({y:58.1},6).wait(55).to({alpha:0},6).wait(819));

	// t2
	this.instance_5 = new lib.t2swf();
	this.instance_5.parent = this;
	this.instance_5.setTransform(614.1,99.2,1,1,0,0,0,88.3,19.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(77).to({_off:false},0).to({regX:88.4,x:614.2,alpha:1},7).wait(66).to({regX:88.3,x:614.1},0).to({alpha:0},6).wait(941));

	// t1
	this.instance_6 = new lib.t1swf("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(645.9,129.6,2.666,2.666,0,0,0,41.6,23.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).to({alpha:1},8).wait(41).to({startPosition:0},0).to({alpha:0},7).wait(1020));

	// bg
	this.instance_7 = new lib.bg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(485,125,1,1,0,0,0,485,125);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:1},8).wait(1089));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484,124,972,252);
// library properties:
lib.properties = {
	id: '7797078D72EC43129B1E5946B9BED14B',
	width: 970,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/bj.jpg", id:"bg1"}
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
an.compositions['7797078D72EC43129B1E5946B9BED14B'] = {
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