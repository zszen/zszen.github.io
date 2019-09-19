var arr = dealData();
//console.log(arr);
var num_wyn = arr[0];

function dealData(){
	var pool = [];
	var xmlhttp;
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	}else{// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("GET","https://cdn.austrian-tino.cybertime.at/campaigns/banner/1/XML/454_3709.xml",false);
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



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,90);// helper functions:

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
	this.shape.graphics.f("#D81E05").s().p("ACmBNIgVgSIAKgJIAVARIARAQIgLALIgQgRgAANBPIAXAAQAEAAAAgDIAAhPIgiAAIAAgNIAyAAIgogdIAJgJIAIAGIAKAGQAMgMAKgOIg2AAIAAgOIBAAAIADgBIAJAHQgOAXgUASIAGAEIAFADIAIAGIgEAGIAOAAIACgCIAJAEIAAABIgBABIgHAUIgJAVIgLgDIAFgOIAGgPIgWAAIAABPQAAALgHAEIgMACIgRABQgBgIgEgHgAhUBeIAAitIBDAAIAABzQAAAMgHADQgGADgYAAQgBgJgDgFIAWAAQAEgBAAgDIAAhmIglAAIAACggAEsBNIAVAAIANAAQAGgBAAgFIAAiCIg/AAIAAgQIByAAIAAAQIgkAAIAACCQAAAPgKADIgPADIgYABQgBgKgFgGgABSBSQARgGALgIQAKgHAGgKQAFgHACgKQABgHAAgJIAAgoIAOAAIAAAoQAAALgBAJQgDALgFAJQgHAKgLAJQgMAJgSAHQgEgHgFgEgADnBMQAEgCADgFQAEgFAAgGIAAhHIgjAAIAAgPIAxAAIAABVIAegTIACAGIACAHIgoAcIgMAJQgCgFgFgHgAi9BIQAEgBACgDQADgEAAgFIAAiMIBOAAIAABfIg/AAIAAAyIAngNIgMgUIANgHIAQAbIAMAZIgOAIIgJgUIgxARIgJAEIgEACQgCgIgFgHgAilAAIAwAAIAAgbIgwAAgAilgoIAwAAIAAgbIgwAAgAmGBVIAAgPIBjAAQAIgTAIgdQAJgaAFgXIARADIgPAwQgJAbgHATIBBAAIAAAPgAlWAUQgFgWgGgVIAPgEIAMArIAIApIgQAEQgCgQgGgZgACqAvIAAhRIg4AAIAABRIgOAAIAAhfIAeAAIAFgVIgrAAIAAgOIBlAAIAAAOIgpAAIgCAFIgCAGIgDAKIAoAAIAABfgAl9gnIAAgOICjAAIAAAOgADtg8IgRgSIAKgJIARARQAKAJAEAGIgKALIgOgQgAk6hYIAOgFQAIAUADANIgPAEQgDgNgHgTg");
	this.shape.setTransform(79.3,18.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACmBNIgVgSIAKgJIAVARIARAQIgLALIgQgRgAANBPIAXAAQAEAAAAgDIAAhPIgiAAIAAgNIAyAAIgogdIAJgJIAIAGIAKAGQAMgMAKgOIg2AAIAAgOIBAAAIADgBIAJAHQgOAXgUASIAGAEIAFADIAIAGIgEAGIAOAAIACgCIAJAEIAAABIgBABIgHAUIgJAVIgLgDIAFgOIAGgPIgWAAIAABPQAAALgHAEIgMACIgRABQgBgIgEgHgAhUBeIAAitIBDAAIAABzQAAAMgHADQgGADgYAAQgBgJgDgFIAWAAQAEgBAAgDIAAhmIglAAIAACggAEsBNIAVAAIANAAQAGgBAAgFIAAiCIg/AAIAAgQIByAAIAAAQIgkAAIAACCQAAAPgKADIgPADIgYABQgBgKgFgGgABSBSQARgGALgIQAKgHAGgKQAFgHACgKQABgHAAgJIAAgoIAOAAIAAAoQAAALgBAJQgDALgFAJQgHAKgLAJQgMAJgSAHQgEgHgFgEgADnBMQAEgCADgFQAEgFAAgGIAAhHIgjAAIAAgPIAxAAIAABVIAegTIACAGIACAHIgoAcIgMAJQgCgFgFgHgAi9BIQAEgBACgDQADgEAAgFIAAiMIBOAAIAABfIg/AAIAAAyIAngNIgMgUIANgHIAQAbIAMAZIgOAIIgJgUIgxARIgJAEIgEACQgCgIgFgHgAilAAIAwAAIAAgbIgwAAgAilgoIAwAAIAAgbIgwAAgAmGBVIAAgPIBjAAQAIgTAIgdQAJgaAFgXIARADIgPAwQgJAbgHATIBBAAIAAAPgAlWAUQgFgWgGgVIAPgEIAMArIAIApIgQAEQgCgQgGgZgACqAvIAAhRIg4AAIAABRIgOAAIAAhfIAeAAIAFgVIgrAAIAAgOIBlAAIAAAOIgpAAIgCAFIgCAGIgDAKIAoAAIAABfgAl9gnIAAgOICjAAIAAAOgADtg8IgRgSIAKgJIARARQAKAJAEAGIgKALIgOgQgAk6hYIAOgFQAIAUADANIgPAEQgDgNgHgTg");
	this.shape_1.setTransform(79.3,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D81E05").ss(1.7,1,1).p("AL0jCI3nAAQgoAAAAAoIAAE1QAAAoAoAAIXnAAQAoAAAAgoIAAk1QAAgogoAAg");
	this.shape_2.setTransform(79.6,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("ArzDDQgoAAAAgoIAAk1QAAgoAoAAIXnAAQAoAAAAAoIAAE1QAAAogoAAg");
	this.shape_3.setTransform(79.6,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,161.3,41);


(lib.VektorSmartobjekt2swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
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

	// 图层_1
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


(lib.theswf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D61E05").s().p("AARArIgEgQIgcAAIgEAQIgYAAIAchVIAfAAIAbBVgAgKAKIASAAIgJggg");
	this.shape.setTransform(270.6,-6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D61E05").s().p("AAOArIgeg1IAAA1IgWAAIAAhVIAdAAIAaAvIAAgvIAWAAIAABVg");
	this.shape_1.setTransform(257.2,-6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D61E05").s().p("AAPArIgfg1IAAA1IgVAAIAAhVIAcAAIAaAvIAAgvIAVAAIAABVg");
	this.shape_2.setTransform(243.5,-6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D61E05").s().p("AgeArIAAhVIA7AAIAAATIgiAAIAAAPIAbAAIAAAQIgbAAIAAAQIAkAAIAAATg");
	this.shape_3.setTransform(231.1,-6.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D61E05").s().p("AgLArIAAhVIAYAAIAABVg");
	this.shape_4.setTransform(220.8,-6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D61E05").s().p("AgNArIgdhVIAbAAIAQA7IASg7IAYAAIgdBVg");
	this.shape_5.setTransform(210,-6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D61E05").s().p("AgNAAQAFgIAIgFQAJAFAFAIQgFAJgJAFQgIgFgFgJg");
	this.shape_6.setTransform(280.7,-3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D61E05").s().p("AgpAAIAAAAQACgnAngEQAoAEACAnIAAAAQgCAogoAEQgmgEgDgogAgeAAIAAAAQACAhAcACQAegCABghIAAAAQgBgfgegDQgdACgBAgg");
	this.shape_7.setTransform(319.6,-6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D61E05").s().p("AgYArIAAhVIAxAAIAAAJIgnAAIAAAeIAeAAIAAAHIgeAAIAAAng");
	this.shape_8.setTransform(308.6,-6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D61E05").s().p("AAUArIgphJIAABJIgLAAIAAhVIAOAAIApBGIAAhGIAKAAIAABVg");
	this.shape_9.setTransform(297.1,-6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D61E05").s().p("AgEArIAAhVIAJAAIAABVg");
	this.shape_10.setTransform(287.5,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(205.8,-10.4,118,8.8);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D61E05").s().p("Ag8B4QAqhHgGhSIAAgGQgGAogQAfIgbgPQASgeAFgpIAaAIIAAhZIAhAAIAABdIAPgGQAIAPAGASIAAhyIAiAAIAABQIAMgFQAKAPAHARIAAhxIAjAAIAAETIgjAAIAAh7IgOAHQgEgSgLgXIAACUIgiAAIAAhxIgTAHQgDgRgHgWQADBTgpBIQgOgNgRgIgAiDB3QAUgoAUg6IAdATQgQAzgUAugAiHghIAUgaQAdANAWAPIgWAdQgUgPgdgQgAh8hxIAVgbQAdAOAWAQIgWAdQgUgQgegQg");
	this.shape.setTransform(263.2,35.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D61E05").s().p("AgEB8IAAAGIiFAAIAAj7ICGAAIAAAhIhjAAIAAAYIAQgJQAQAWAPAWQAJgZAHgbIAfAGQgLAqgPAlQAVAjALAcIgfAQQgGgSgNgYQgOAdgSAVQgHgHgLgIIAAAVIBiAAIAAAKQAzhIgIhAIAAgWIAiAAIAAAXIgBAXQAPBPAyAnQgPALgIARQglghgRgtQgNArgmAlQgFgIgIgLgAhmA7QASgWAOgeQgPgZgRgZgABUgOQAHgWAHgeIg7AAQgLAjgQAWQgMgJgQgJQAegsAIhHIAiAEQgDAVgEATIA8AAIAGgCIAXAHQgLAygOAlg");
	this.shape_1.setTransform(232.9,35.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D61E05").s().p("AAlCIIgyAAQg3AEAFg2IAAiMIAlAAIAACMQgCATAUgCIAqAAQAUAHAAhAQAQAKASAFQgBBMgsAAIgGgBgAiNBRQAQg1AHhAIAjAHQgGBBgQA8gABFggIAigOQAcA7ALA1IgkAPQgKg1gbg8gAg1hvIAZgZQAwAfAjAgIgbAcQgfgggygig");
	this.shape_2.setTransform(202.1,35.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D61E05").s().p("AgeAAQADgbAbgDQAcADADAbQgDAcgcADQgbgDgDgcg");
	this.shape_3.setTransform(180.9,37.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D61E05").s().p("AgQBvQANgNAJgQIgcAJIgEgPQg2AOgTAGQgTAHgFADQgEgOgIgSQAJgEAHgQQAIgTANg0IgmAAIAAghICHAAIAAAhIg8AAQgKAngQAkIA0gLIgNgmIAcgIQATApAIAlQAZgyAChIIghAAIAAgjIAiAAIAAg8IAkAAIgBA8IBCAAIAAARQgCBZgDAoQgEApgHAKQgKAOgPABQgQACgZgBQgBgSgKgRQAXABALAAQAIAAADgFQAKgGADiFIgfAAQgBB0g8BCQgKgRgPgLgAh+hYIAAggIB3AAIAAAgg");
	this.shape_4.setTransform(159.9,35.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(146.3,21.2,130.6,28.7), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg3iAOJIAA8RMBvFAAAIAAcRg");
	this.shape.setTransform(355.5,90.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,711,181);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhHPAHCIAAuDMCOfAAAIAAODg");
	this.shape.setTransform(456,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,912,90);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib._1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,311,90), null);


(lib.an2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABAdIAFgIQAVAGALAEIgDAJQgOgFgUgGgAglAgQARgCAJgFQAHgEAAgOIAIAAQAAAMgDADQgFAOgcAEQgCgFgDgDgAAUAYIAAgFIAAgPIglAAIAAAMIAAACIAAAGIgJAAIAAgJIAAgLIgIADIAAgCIgDgFQAMgCAHgFIgJAAIgIAAQAEgIACgJIAGABIAMAAIAAgEIgOAAIgIAAIAAgHIAIABIAOAAIAAgGIAJAAIAAAGIAIAAIAAgGIAJAAIAAAGIALAAIAIgBIAAAHIAAAEIAAAGIgIgBIgLAAIAAAEIAQAAIAHAAIAAABIgBAFQABAIgKAAIAAAQIABAIgAAPgCIAIAAIgBgDIAFAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAgBAAAAIgOAAgAgMgCIASAAIAAgFIgNAAIgFAFgAgFgOIALAAIAAgEIgKAAIgBAEgAgXgQIgBACIAKAAIABgCIAAgCIgKAAIAAACgAAPgXIAKAAIAAgEIgKAAgAgDgXIAJAAIAAgEIgJAAIAAAEg");
	this.shape.setTransform(-4.1,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAeQAIgJAEgMQADgJAAgOIgEAAQgFgBgDABIAAgKIAJABIAEAAIAAgFIgBgKIALAAIgBAGIAAAJIAHAAIAJAAQgBAAABAPQgBAYgCALQgBAKgJgBIgJAAQAAgFgBgEIAIABQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBQABgGABgPIAAgSIgIAAQgBAPgDAMQgEAOgJAMQgDgGgEgDgAAHAlIABgKIAAgvIAAgJIAHABIAQAAIAIgBIAAAJIAAAvIAAAJIgKAAIAAgFIgMAAIAAAGgAARAWIAMAAIAAgqIgMAAg");
	this.shape_1.setTransform(-12.8,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAnIABgLIAAgVIAAgJIgEAGIgFgIQAIgIAEgOIACgMIAKADIgCAFIgGAPIAAArIABALgAglAnIABgLIAAg3IgBgIIAHAAIAMAAIAGAAIAEAEIAAABIgBACQgEAKgFAKQAHAJAAAIQAAAJgFACQgCACgFAAIgCAAIAAgBQAAgEgCgEIAEABQAEAAAAgFQAAgFgCgEIgFgHIAHgUIgIAAIAAAoIAAAQIAAAKgAAKAmQAAgFgCgEIAKABQABAAABAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAgnIgJAAIgIABIAAgKQADABAFAAIAJAAIAAgIIgBgKIAKAAIAAAKIAAAIIAHgBIAAAKIgHgBIAAAoQAAAEgCADQgCADgIgBIgJAAgAAEgBIAHgFQAFAIAEALIgHAFQgEgMgFgHgAgbANIAAAAg");
	this.shape_2.setTransform(-21.1,11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAgIACgEQAGgHADgOIAIAFQgEAOgGALIgBACgAAcAmIAAgEIgfAAIAAAEIgLAAIACgKIAAgrIgBgIIAIAAIAMAAIAAgHIAAgIIAKAAQgCAEABAFIAAAGIANAAIAIgBIAAAKIAAAqIAAAKgAAQAZIAMAAIAAgQIgMAAgAgDAZIAKAAIAAgQIgKAAgAAQAAIAMAAIAAgPIgMAAgAgDAAIAKAAIAAgPIgKAAgAgkgJIAEgHQAIAEAIAGIgFAHQgIgFgHgFgAgigfIAHgGQAGAEAHAHIgFAIQgGgIgJgFg");
	this.shape_3.setTransform(-30.1,11.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAhQAFgFADgHIABgFIAIADQgDALgGAJgAAYASIAHgEQAFAKAEAKIgIAFQgDgNgFgIgAALATIAIgCQADAHACANIgIACQgCgNgDgHgAgBATIAHgCIADAVIgJABQAAgJgBgLgAgnAfQAEgEADgHQAFgIgBggQAAgPgBgDIAKAAIgBATIAEgIIAFAGIgBABIgIAMIgBAQIAKANIgHAGIgFgIQgDALgHAJQgDgGgDgCgAABAKQAHgFAEgHQADgEABgHIgDAAIgDAAQgDAJgFAHQgFAHgHAGQgCgEgEgCQAIgFAEgGIgGgDIgCACQgCgCgEgDQAIgIAEgMIACgLIAHABIgBAFIAAABIACAAIAFAAIAEADIgBAGIAAABIAFAAIAAgKIAAgGIAJAAQgBAAABAKIgBAGIAGAAIAIAAIAAAJIgIgBIgGAAQABAGAEAFQAEAFAGAFIgFAIQgKgJgEgKQgEALgLAIIgFgGgAgGgKIABAAIAEAFIABgFIgEgEIgCAEgAgBgUIAEAEIACgHIgFAAIgBADgAgnAAQADgGgBgQIAHABQAAARgCAHgAAaggIAGgEIAHALIgGADQgCgFgFgFg");
	this.shape_4.setTransform(-38.5,11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAnIAAgLIAAgOIABgKIgGANIgGAIQgCgFgDgDIAKgMIAFgLIAAAAIgFAAIgIAAIAAgJIAIAAIAGAAIAAgIIgLACQAAgFgDgEQAWgCAJgGIAFAIIAAABIgBAAIgBABIgLADIAAAKIAFAAIAHAAIAAAJIgHAAIgFAAIAAACQAIAFAFAIIgFAHIgIgLIAAAXIABALgAAcAlIAAgGIgRAAIAAAGIgJAAIAAgKIAAgxIAAgJIAIAAIATAAIAJAAIgBAJIAAAwIABALgAALAWIARAAIAAgsIgRAAg");
	this.shape_5.setTransform(-47.4,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAgQAPgHgBgUIgBAAIgFAAIAAgFIAAgQIAAgFIAFAAIACAAQgCgJgDgEIAHgEQAEAGADAHIgJAEIAPAAQAEgIADgJIAJADIgHAOIACAAIAHAAIAAAFIAAAQIAAAFIgHAAIgDAAIAAAXQgBAAABABQAAAAAAABQABAAAAAAQABAAABAAQAEACAAgOQAEADAEAAQgBANgCACQgBADgKgBQgLABABgIIAAgaIgGAAQAAAMgDAIQgFAJgKAFQgCgDgDgEgAACgCIAYAAIAAgLIgYAAgAgaAnIABgKIAAgPIAAgKQgDALgHAIQgCgFgCgEQAGgGAEgIIACgHIgDAAQgFgBgCABIAAgJQACAAAFAAIAFAAIAAgJIgJABIgDgIQANgBAJgDIAEgDIAFAHIgCACIgIADIAAALIACAAIAGAAIAAAJIgGAAIgCAAIAAABQAFAGAEAHIgEAHIgFgJIAAAYIAAAKg");
	this.shape_6.setTransform(-55.7,11.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAlIgJAAIgCgJIALABQAGABABgKIACgYIgCAAIgEAJQgFAMgJAJQgFAGgKAFIgGgGQAPgJAHgKQAEgGACgGIACgEIgFAAIgGAKQgEAGgJAGIgFgFIAAAGQgKAFgKAEIgEABIgCgJIAKgDIAAgaIgCAAIgHABIAAgJIAHAAIACAAIAAgLIAAgJIAKAAQgBADAAAGIAAALIACAAIAHAAIAAAJIgHgBIgCAAIAAAXIADgCIAEgCIAAACQALgIAEgIIgEAAIgHABIgBgIQAFgBAEgFIAOgJIgOAAIgJABIAAgKQAFABAEAAIARAAIAJgBIAEAGIgBABIgBABIgVAQIAHgBIANAAIAKgBIgBAOQAAAlgMAAIgFgBg");
	this.shape_7.setTransform(-64.5,11.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNAgQAGgFACgHQAEgLgBggQABgJgBgCIAHAAIAPAAIAHAAIAAAIIAAA2QAAAAAAAAQAAAAABABQAAAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIAAgRQAEADAEABQAAARgCACQAAAAgBABQAAAAAAABQgBAAgBAAQAAABgBAAIgGAAQgGAAgCgBQgCgCAAgFIAAg3IgLAAQAAAdgCAJQgCARgIAKIgIgHgAgZAnIABgJIAAgRIAAgMQgEALgGAIQgBgFgEgEQAJgKAEgPIgEAAIgHAAIAAgJIAHAAIAGAAIAAgIQAAgEgBgDIAKAAQgBADABAEIAAAIIAEAAIAGAAIAAAJIgGAAIgEAAIAAACIAMAPIgHAHIgFgKIAAAeQgBAGABADg");
	this.shape_8.setTransform(-73,11.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAUAnIAAgDIgnAAIAAADIgKAAIABgHIAAgQIgBgHIAIABIAXAAIAKgKIgfAAIgJAAIAAgHIAHAAIAkAAIAHAAIAFAEIgDADIgKAKIAJAAIAGgBIAAAIIAAAPIAAAHgAgTAcIAnAAIAAgKIgnAAgAAAgcQgGAHgKAGIgTAKQgBgEgDgFQAMgEAIgGQALgGAFgJIAJADIgBABQAGAHAGAEQAJAGAPAEIgEAGIgCADQgWgIgNgPgAgLgOIAFgHQANAEAGACIgEAIQgJgEgLgDg");
	this.shape_9.setTransform(-81.5,11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

	// 图层 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AotByIAAjjIRaAAIAADjg");
	this.shape_10.setTransform(-36.3,8);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1).to({_off:false},0).wait(3));

	// 图层 3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D81E05").s().p("AgpBLIAAgPQAKAEAKACQAIADAKAAQAJAAAKgFQAHgDABgHQgBgIgFgDQgLgHgKgEQgQgEgNgLQgHgJAAgKQAAgTARgIQgHgEgFgHQgFgGAAgIQABgNALgHQAOgJAQABIASACQAKABAJAFIgFAOQgJgEgJgBQgHgCgIAAQgIAAgJADQgFADAAAHQAAAGAFAEQALAGALAEQAPAEAMALQAIAIAAALQAAASgQAKQAVAMgHAXQgEAHgHAEQgQAKgRgBIgDAAQgSAAgQgIgAgSgQQgEAFgBAHQAAAEADAEQAEAEAFADQALAHAMADQAMgFABgOQAAgHgHgGQgMgIgNgEQgHACgEAFg");
	this.shape_11.setTransform(10.2,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.1,2,8.4,16.6);


(lib.xiaobiaoanniu2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_5
	this.instance = new lib.an2();
	this.instance.parent = this;
	this.instance.setTransform(3.9,7.9,1,1,0,0,0,10.2,10.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.an2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.4,-5.7,111.5,22.9);


(lib.t2swf2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.num =  num_wyn?num_wyn:0;
		this.nums = [Math.floor(this.num/1000)%10, Math.floor(this.num/100)%10,Math.floor(this.num/10)%10, this.num%10];
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_5
	this.p3 = new lib.n1();
	this.p3.name = "p3";
	this.p3.parent = this;
	this.p3.setTransform(114.9,2.8,0.812,0.812,0,0,0,-4,-29.1);

	this.p2 = new lib.n1();
	this.p2.name = "p2";
	this.p2.parent = this;
	this.p2.setTransform(93.4,2.8,0.812,0.812,0,0,0,-4,-29.1);

	this.p1 = new lib.n1();
	this.p1.name = "p1";
	this.p1.parent = this;
	this.p1.setTransform(71.9,2.8,0.812,0.812,0,0,0,-4,-29.1);

	this.p0 = new lib.n1();
	this.p0.name = "p0";
	this.p0.parent = this;
	this.p0.setTransform(50.5,2.8,0.812,0.812,0,0,0,-4,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p0},{t:this.p1},{t:this.p2},{t:this.p3}]}).wait(1));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AgQBTIABgUIAAhiIgBgTIARABIAZAAIAAgNQAAgIgBgIIAWAAQgBAHAAAKIAAAMIAbAAIASgBIgBATIAABhQAAAPgIACQgEADgUgBIgKAAQgBgLgDgIQALABAIAAQAIAAAAgEIAAgcIgPANQgKgfgGgMQgEAMgGALQgBAFgMAPQgIgLgGgFIAAAkIABATgAADAZQAMgLAEgMQAGgOABgXIgXAAgAAugZIAEAJQAOAWAHATIAAg8IgZAAIAAAKgAhXA4IAcgDIAngIIAAATQgOAFgYAEQgQACgHADgAhYAQQAHgCADgDIACgCQAIgHAJgKIgbABIgDgSQAEgBAGgHIAMgWIAFgLIAFgPIAXAJIgFAHIgGANIgJAOIgIANIARgBIAJgQIAUAIQgJAQgMAOQgLALgHAHIAMgBIAZgDIgDASIgQACIgWADIgSACIgGABg");
	this.shape.setTransform(46.7,-11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AgUBRQgMAAgGgBQgXgDACgXIAAg7IgJADIgTADIgDgTQAJgBALgCIALgDIAAgYIgBgUIAYAAQgCAHAAANIAAATIAhgHIAAgZQAAgNgBgHIAWAAIgBAUIAAAUIAqgKIATgFIAAAZIgDAaQgCAagGAFQgGAHgPAAIgRgCQgBgKgEgJQAKACAJAAQAJACABgUQACgOAAgOIgmAJIAAAsIABAVIgWAAQABgGAAgQIAAglIghAHIAAA+QAAAIAGACQAEABApAAQAeAAAJgBQAKgBACgEQAFgFAAgVQAMAHAKABQgCAZgJAIQgFAGgNADQgHABgpAAIgigBg");
	this.shape_1.setTransform(26.9,-11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AgJBUQABgIAAgLIAAhIIAAgDIgJAKQgGgKgJgFQARgPANgZQAIgPADgNIAVAFIgGAMIgFANIAcAAIgJgOIgEgGIASgJQAKAPAHAOIAVgBIAAATIgVgBIgMAAIAAAUIAMAAIAQgBIAAARIgQAAIgMAAIAAATIAMAAIAQgBIAAASIgQAAIgMAAIAAAWIAQAAIATgCIAAAUQgGgCgNAAIg9AAIAAAKgAAMA6IAZAAIAAgWIgZAAgAAMATIAZAAIAAgTIgZAAgAAMgQIAZAAIAAgUIgZAAgAhZA4QAbgBAugKIAAAUIgSAEIgjAFIgPAFgAhbAQQAIgBAFgFIAJgKIAKgLIgGAAIgWACIgEgSQAHgBAEgGIAMgWQAHgOACgLIAVAIIgDAFIgNAZIgKAQIAQgBIAIgPIAUAJIgFAHQgPAWgSATIAmgFIgDARQgXAEgdADIgLABg");
	this.shape_2.setTransform(7.3,-11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("AgGA7IABgRIAAgzIgbAAIAAAiIABAQIgQAAQACgHAAgJIAAgiQAAgGgCgGIAMAAIAeAAIAAgQIgFABIglABQgBgIgDgGIAIAAQAugBAdgEIAMgEIAIAPIgIAAIglAFIAAARIAgAAIAMAAIgBAMIAAAjQACAPgUgBIgOgBQAAgHgCgGIAQACQAFAAgBgEIAAghIgdAAIAAAzIABARg");
	this.shape_3.setTransform(28.2,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("AAmA3QgOgBgOgRQgJgNgEgPIgfAAIAAAcQAUgEANgFIABAPQgEAAgZAIIgTAEIgFgNQAGgCgBgHIAAhIIgBgPQAGABAJAAIA8AAQAKAAAFgBIgBANIAAAOIABAMIgOgBIgVAAIACAOIAaAAIAPgBIAAANIgPgBIgXAAQAEANAJAKQAIAHAEAAQACABADgSQAGAEAGADQgEAagKAAIgBAAgAgigCIAdAAIgCgOIgbAAgAgigcIA8AAIAAgNIg8AAg");
	this.shape_4.setTransform(16,9.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("AARAbQgLgNgGgUQgCAMgHAMQgGAOgNALQgIAHgMAIQgDgIgHgGQASgJAKgLQAXgaAAgsIgBgLIAQAAIgBAMQAAAeANAUQAHANAMALQAKAJAKAFQgGAHgEAIQgVgPgLgQg");
	this.shape_5.setTransform(2.5,9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("Ag9AvIAJgHQAIgHADgBIAAgcIgHAAIgIABIAAgOQACACAHAAIAKAAQAFAAAFgCIgBAOIAAAbQABAAAGAGQAGAGAdAAQAbAAAVgCQgEAGAAAIIguABQgUAAgJgCQgGgBgJgIQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQgDAAgGAHIgIAHgAgIAdQAOgFANgNIgTgMIAIgJIATANIALgRIgnAAQgBARgEAOQgCAKgHALQgEgGgIgFQAHgIACgMQAEgQAAgbQAAgIgBgFIAGAAIAogEIAQgEIAJAMIgGABQgUAFgfABIABAEIgBAJIAkAAIAMgBIAHAHIgDAGQgFANgIAKIASAQIgJAKIgSgPQgMALgRAJIgIgMgAg6guIALgJQANAMAJAMIgLAJQgKgOgMgKg");
	this.shape_6.setTransform(151.3,25.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D81E05").s().p("AgtA8IABgPIAAgaIAAgMQgDAFgGAEIgGgNQAUgOAIgQIAMAHIgCACIgIANIAAAzIAAAOgAAtA3Ig2AAQgJAAgHACIAAgQIAQAAIATAAIAAgZIgMAAIgPAAIAAgOIAPABIAMAAIAAgXIgPAAIgOABIAAgBIAAgNIAOAAIAaAAQgKgKgPgHIAKgJQANAFAOAMIgJAJIATAAQAJABAHgBIAAAOIgQgBIgTAAIAAAXIARAAIANgBIAAAOIgNAAIgRAAIAAAZIAVAAIAPAAIAAAQQgGgCgJAAgAgTgUgAg6gjQAKgEAHgIQAHgGADgGIAMAIQAAABgGAFQgMANgNAJIgIgMg");
	this.shape_7.setTransform(135.7,26);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D81E05").s().p("Ag7AvQALgSAAgZIAAgEIAMABIgBAMIAAAHQACAFAFAFIAAgjIgLAAIgNAAIAAgNIANABIAKAAIAAgMIgHAAIgNABIAAgNIANAAIAHAAIAAgDQAAgIgCgEIAPAAIAAAMIAAADIAGAAIAMAAIAAANIgMgBIgGAAIAAAMIAIAAIALgBIAAANIgLAAIgHAAIAAANIAIAAIAJAAIAAANIgJgBIgIAAIAAATQAJAEAVAAQAhAAAOgDQgCAFgBAJIgNABIgdAAQgPAAgMgCQgTgDgJgPQgDAMgFAKQgFgHgGgDgAAIAgQgDgCABgJIAAgaIgBgOIAMABIAVAAIAAgTIgWAAIgMAAIAAgNIANAAIAVAAIANAAIAAAMIAAATIAAAOQgEgBgJAAIgTAAIAAAYIAAADQABABAJAAQAMAAACgCQABgCAAgGIAAgIQAHADAHABQgBARgDAEQgDADgEACIgTABIgEAAQgOAAgCgDg");
	this.shape_8.setTransform(150,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D81E05").s().p("Ag5ArQAUgJAHgNQAGgKAAgVIgRAAIgOABIAAgPIAOABIBTAAIAOgBIAAAPIgOgBIgWAAIAAAsQAAAGAKgBQANAAAAgFQABgEAAgNQAGADAIABQgCAXgDACQgCAGgYAAQgOAAgDgDQgEgCABgGIAAgzIgRAAQAAAYgIAPQgFALgLAIQgDADgJAEQgFgHgGgFgAAggnIg+AAIgMAAIAAgPQADABAJAAIA+AAQAIAAAEgBIAAAPIgMAAg");
	this.shape_9.setTransform(135.5,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.4,-24.8,233.8,86.9);


// stage content:
(lib._912x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_348 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(348).call(this.frame_348).wait(1));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("EhHPgHBMCOfAAAIAAODMiOfAAAg");
	this.shape.setTransform(456,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(349));

	// biankuang
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#9A9A9A").ss(2,1,0,3).p("EhHPgHBMCOfAAAIAAODMiOfAAAg");
	this.shape_1.setTransform(456,45);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).wait(346));

	// 图层_12
	this.instance = new lib.xiaobiaoanniu2();
	this.instance.parent = this;
	this.instance.setTransform(833.7,81.2,0.778,0.783,0,0,0,4,8.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(346));

	// t6
	this.instance_1 = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(136.8,32,1.379,1.379,0,0,0,74.6,8.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(257).to({_off:false},0).wait(1).to({regX:85.8,regY:-1.6,x:152.2,y:18.6,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// t7
	this.instance_2 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(673,45.4,0.832,0.832,0,0,0,100.9,26.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(257).to({_off:false},0).wait(1).to({regX:100.2,x:672.4,y:45.3,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// t4
	this.instance_3 = new lib.yuding();
	this.instance_3.parent = this;
	this.instance_3.setTransform(671.3,47.1,1.036,1.036,0,0,0,79.7,20.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(205).to({_off:false},0).wait(1).to({regX:79.6,regY:19.5,x:671.1,y:46.3,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(38).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(92));

	// t5
	this.instance_4 = new lib.theswf("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(394.8,54.6,1,1,0,0,0,11.5,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150).to({_off:false},0).wait(1).to({regX:264.8,regY:-6,x:648,y:48.5,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(144));

	// Layer_9
	this.instance_5 = new lib.t2swf2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(362.7,60.2,1.196,1.196,0,0,0,89.3,19.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(95).to({_off:false},0).wait(254));

	// t1
	this.instance_6 = new lib.t1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(287.2,38.1,0.877,0.877,0,0,0,184.7,27.7);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(31).to({_off:false},0).wait(1).to({regX:211.6,regY:35.5,x:310.8,y:44.9,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(47).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(254));

	// Layer_3
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(540,45,0.5,1,0,0,0,455.9,45);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(19).to({_off:false},0).wait(1).to({regX:456,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_1
	this.instance_8 = new lib.Symbol1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(455.9,45,1,1,0,0,0,455.9,45);
	this.instance_8.alpha = 0.852;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).wait(1).to({regX:456,x:456,alpha:0.797},0).wait(1).to({alpha:0.744},0).wait(1).to({alpha:0.691},0).wait(1).to({alpha:0.637},0).wait(1).to({alpha:0.584},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.425},0).wait(1).to({alpha:0.372},0).wait(1).to({alpha:0.319},0).wait(1).to({alpha:0.266},0).wait(1).to({alpha:0.213},0).wait(1).to({alpha:0.159},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_8
	this.instance_9 = new lib.Symbol3("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(503,46.5,1,1,0,0,0,266.4,90.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).wait(346));

	// bg
	this.instance_10 = new lib.bg();
	this.instance_10.parent = this;
	this.instance_10.setTransform(456,45,1,1,0,0,0,456,45);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({_off:false},0).wait(346));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(455,43.7,914,92.3);
// library properties:
lib.properties = {
	id: '5278D652B6F14D7D9D0B222E7CDE1B46',
	width: 912,
	height: 90,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/bj.jpg?1568890029112", id:"_1"}
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
an.compositions['5278D652B6F14D7D9D0B222E7CDE1B46'] = {
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