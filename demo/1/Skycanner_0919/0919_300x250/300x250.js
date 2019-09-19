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



(lib._272 = function() {
	this.initialize(img._272);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,550,352);// helper functions:

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


(lib.VektorSmartobjekt2swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAEQALgEALgHIADAEIgXALg");
	this.shape.setTransform(77.9,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAMIAAgEIAaAAIAAgPIgTAAIAAgEIArAAIAAAEIgTAAIAAAPIAaAAIAAAEg");
	this.shape_1.setTransform(79.6,14.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMgEIADgEIALAHIALAFIgDAFIgWgNg");
	this.shape_2.setTransform(81.4,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAYAKIAAgIIgvAAIAAAIIgFAAIAAgLIAbAAIgCgGIAFgCIACAIIAZAAIAAALg");
	this.shape_3.setTransform(79.7,10.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAEAdIAAgLIgQADIgBgFIAEgBIAAgmIgDAAIAAgFIAYAAIAAAFIgDAAIAAAjIAEgBIABAFIgFABIAAAMgAgEAPIAIgCIAAgKIgIAAgAgEAAIAIAAIAAgJIgIAAgAgEgNIAIAAIAAgKIgIAAg");
	this.shape_4.setTransform(87.7,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEgDIAEgBIAFAIIgEACIgFgJg");
	this.shape_5.setTransform(90,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgRAaQANgJACgNIgOAAIAAgEIAOAAIAAgMIgMAAIAAgEIAPAAIAAgBIAIgMIAEABIgGAMIAJAAIAAAEIgOAAIAAAMIAQAAIAAAEIgPAAQADAPAMAHIgDAEQgLgHgEgMQgDAMgLAIg");
	this.shape_6.setTransform(90.8,12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgeAPIAAgEIAeAAIAAgGIgVAAIAAgEIAVAAIAAgGIgTAAQgDAFgEADIgEgDQAHgGADgIIAFACIgCADIARAAIAAgFIADAAIAAAFIAZAAIAAAEIgZAAIAAAGIAXAAIAAAEIgXAAIAAAGIAcAAIAAAEg");
	this.shape_7.setTransform(70,14.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAMIAAgXIAxAAIAAAXgAgTAIIAnAAIAAgGIgnAAgAgTgBIAnAAIAAgGIgnAAg");
	this.shape_8.setTransform(70,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAKAVIAAgBIgLALIgDgFQADgBAJgKQgDgOgBgOIgXAAIAAAKIARAAIAAAQQAAAKgIAAIgHAAIAAgFIAFAAQAFAAAAgFIAAgMIgMAAQAAAQgHAOIgEgDQAEgJAAgFQABgDAAgLIAAgSIAdAAIAAgMIAFAAIAAAMIAVAAIAAAFIgUAAQAAALADAMQAFgIAFgJIAEACQgFALgIAKQAEAJADAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBIABgJIAFAAQABADgDAIQgCAHgFAAIgBAAQgGAAgFgKg");
	this.shape_9.setTransform(108.9,12.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgEAAIADgEIAGAFIgDAEIgGgFg");
	this.shape_10.setTransform(110.9,10.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgOAOQAFgGAAgLIAAgNIAYAAIAAAYQABAIgIgBIgIAAIAAgDIAGAAQAFAAAAgFIAAgBIgQAAIgCAFIgEAGIgDgDgAgEADIAPAAIAAgGIgPAAgAgEgGIAPAAIAAgHIgPAAg");
	this.shape_11.setTransform(100.8,11.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgeAKIAAgEIAGAAIAAgPIAxAAIAAAPIAGAAIAAAEgAAKAGIAKAAIAAgLIgKAAgAgEAGIAJAAIAAgLIgJAAgAgTAGIAKAAIAAgLIgKAAg");
	this.shape_12.setTransform(99.7,14.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJAPIAAgdIATAAIAAAdgAgEALIAKAAIAAgJIgKAAgAgEgBIAKAAIAAgJIgKAAg");
	this.shape_13.setTransform(98,11.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdAZQAcgDAAgTIAEAAQAAAHgBADIALAFIARAFIgCAGIgcgLQgFAIgXADgAgZAQIAAgVIAyAAIAAAUIgFAAIAAgPIgoAAIAAAQgAgWgLIAAgRIAsAAIAAARgAgRgPIAiAAIAAgJIgiAAg");
	this.shape_14.setTransform(118.5,12.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AASAbIgBgBQgBAAgBgMQACgMgNACIgVAAIAAAXIgFAAIAAg1IAaAAQATAAAAAPQAAAIgJAEQAHACABAIQAAAMABACIAAACgAgRgBIAVAAQANAAgBgKQAAgJgMgBIgVAAg");
	this.shape_15.setTransform(118.7,3.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAbIAAg1IAqAAIAAAFIgkAAIAAASIAjAAIAAAFIgjAAIAAATIAlAAIAAAGg");
	this.shape_16.setTransform(112.6,3.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAGAbIgdAAIAAg1IAeAAQAPABgBANQABAIgKADQALACABAKQgDAQgOAAIgBAAgAgRAWIAWAAQAMAAABgLQgBgKgLABIgXAAgAgRgCIAVAAQALAAABgKQgBgJgJAAIgXAAg");
	this.shape_17.setTransform(106.5,3.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAaAbIAAgtIgXAtIgFAAIgXgtIAAAtIgGAAIAAg1IAIAAIAXAuIAYguIAIAAIAAA1g");
	this.shape_18.setTransform(99.3,3.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgVAbIAAg1IAqAAIAAAFIgkAAIAAASIAjAAIAAAFIgjAAIAAATIAlAAIAAAGg");
	this.shape_19.setTransform(92.2,3.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAaAbIAAgtIgXAtIgFAAIgXguIAAAuIgGAAIAAg1IAIAAIAXAuIAYguIAIAAIAAA1g");
	this.shape_20.setTransform(85.1,3.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ak9AcQgOAAgHgGQgEgFAAgIIAFAAQAAAGAEADQAEAFAMAAQAGABAJgFQACgDAAgEQABgGgGgCQgFgCgIAAQgSABgEgPQAAgFADgDQAIgHAMAAQAKAAAIAGQADAEABAGIgGAAQAAgEgCgDQgHgEgHAAQgGAAgGACQgGADAAAFQACAKARAAQATgBADAPQgGAQgMAAIgFAAgADmAAQAAgXAegEQAVABAEARIABACIgGAAIAAgBQgEgNgQgBQgWACgCAUQgBAUAZADQARgBAEgQIAAgBIAGAAIAAABQgDATgYADQgcgBgCgbgAEsAbIAAg1IArAAIAAAGIglAAIAAASIAkAAIAAAEIgkAAIAAAUIAlAAIAAAFgADRAbIgRgVIgVgXIAAAsIgGAAIAAg1IAGAAIASAVIAUAXIAAgsIAGAAIAAA1gACSAbIgIgRIgbAAIgHARIgGAAIAYg1IAGAAIAYA1gACIAFIgLgXIgMAXIAXAAIAAAAgABOAbIAAg1IAGAAIAAA1gAAdAbIAAg1IAGAAIAAAwIAgAAIAAAFgAgVAbIAAg1IAGAAIAAAwIAgAAIAAAFgAgpAbIgHgRIgbAAIgIARIgFAAIAYg1IAFAAIAZA1gAgyAFIgLgXIgLAXIAWAAIAAAAgAiDAbIgBgBQgCAAAAgMQABgMgNACIgWAAIAAAXIgFAAIAAg1IAbAAQATAAAAAPQAAAIgIAEQAGACABAIQAAAMABACIABACgAiogBIAWAAQANAAAAgKQAAgJgNAAIgWAAgAjBAbIgIgRIgaAAIgIARIgGAAIAZg1IAFAAIAZA1gAjLAFIgKgXIgMAXIAWAAIAAAAgAkKAbIAAgvIgVAAIAAgGIAvAAIAAAGIgVAAIAAAvg");
	this.shape_21.setTransform(43.9,3.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAVAbIgHgRIgaAAIgIARIgGAAIAZg1IADAAIAZA1gAALAFIgLgXIgKAXIAVAAIAAAAg");
	this.shape_22.setTransform(4.2,3.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAHAIIAAgNIgGANIgBAAIgGgNIAAANIgCAAIAAgPIACAAIAGANIAHgNIACAAIAAAPg");
	this.shape_23.setTransform(148.1,1.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAAAHIAAgMIgGAAIAAgBIANAAIAAABIgGAAIAAAMg");
	this.shape_24.setTransform(146.2,1.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4E4E4D").s().p("AgJgOIAigCQgLAKgNAIQgMAIgNAHg");
	this.shape_25.setTransform(141.5,7.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D9D9DA").s().p("AgJAAQgBgPABgPIATAeIgOAeQgEgPgBgPg");
	this.shape_26.setTransform(139.5,6.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#989999").s().p("AgbgOQAPAFANAHQAOAGAMAIIgiACg");
	this.shape_27.setTransform(141.4,4.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4E4E4D").s().p("AAAACQgMgJgLgLIAiAFIANAgQgNgIgLgJg");
	this.shape_28.setTransform(138.5,13.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D9D9DA").s().p("AgbAJQANgIAOgEQAOgGAOgEIgVAbg");
	this.shape_29.setTransform(138.9,11.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#989999").s().p("AgKgBIAVgcQAAAPgCAOQgCAQgFAOg");
	this.shape_30.setTransform(140.7,12.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D9D9DA").s().p("AgEAAQAEgOAHgOIAGAiIgaAXQADgPAGgOg");
	this.shape_31.setTransform(132,12.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#989999").s().p("AgNAMIgGgiQAMAJAJAMQAKAMAIANg");
	this.shape_32.setTransform(134.7,12.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4E4E4D").s().p("AgCgKIAgALQgOAFgQACQgOADgPAAg");
	this.shape_33.setTransform(133.6,14.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D9D9DA").s().p("AgegHQAPgCAPAAQAQABAPADIgfAPg");
	this.shape_34.setTransform(130.5,6.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#4E4E4D").s().p("AgOgIIAegRQgGAOgIAMQgHANgKAMg");
	this.shape_35.setTransform(131.9,8.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#989999").s().p("AgCABQgHgMgFgPIAdASIgBAjQgJgMgHgOg");
	this.shape_36.setTransform(129,8.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#989999").s().p("AgMAFIAJgiQAFAPAEAOQAFAOACAQg");
	this.shape_37.setTransform(136.2,3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#4E4E4D").s().p("AAAAHQgPgEgOgFIAhgJIAaAXQgQgBgOgEg");
	this.shape_38.setTransform(134.5,4.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D9D9DA").s().p("AgBAAQAKgLAMgKIgIAhIghAKQAJgMAKgKg");
	this.shape_39.setTransform(133.6,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.5,0,147.5,15.9);


(lib.VektorSmartobjektswf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#94292B").s().p("AAHAUIhVgMQAAAAgBAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAGgCQArgKArgKIAKgDIAjAAQAOADAGAKQADAKgGAMIABgCQADgHgDgEQgKgKg7Abg");
	this.shape.setTransform(164.1,9.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D91F05").s().p("AmSECQARghgCgnIgOAAIAAgOIAOAAIAAg8IARAAQAEgMABgLIASADIgHAUIAbAAIAACGQAAAMgGAEQgIADgRgBQAAgHgEgIIAQAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBIAAg8IgcAAQABAsgRAlQgHgFgIgEgAlzCsIAcAAIAAgtIgcAAgAlHEAQAXgdgDgiIAAgoIA+AAIAABXQgBAGABACIADABIADAAIADgBIACgFIAAgVQAFAEAHACQAAAQgCAJQgCAFgDADQgEACgGAAIgJAAQgGABgEgEQgFgDABgSIAAhHIgdAAIAAAZQADAogaAhQgFgFgIgFgAo1EJIAAhLQgOAfgSATQgFgIgFgJQAYgYAPgkIgjAAIAAgRIAmAAIAAgcIgiAFIgFgNQAugHAfgMIAOANQgPAGgTAEIAAAgIAlAAIAAARIglAAIAAAGIAjAhIgKAPIgZgcIAABMgAufDcQgKAjhHAKQgDgIgGgHQA+gIAJgYIhDAAIAAgQIBIAAIACgKIATAAIgCAKIBOAAIAAAQIhCAAQATAbA0ADQgHAIgEAJQg5gGgUgngAnjEJQgCgJgEgKIAdABQAEAAAAgEIAAiXIASAAIAACXQABAQgLADQgIADgWAAIgFAAgArhDpIAAg4IgNAGIgHgQIAUgJIAAgyIARAAIAAAsIAVgJIAAg1IARAAIAAAtIAVgIIAGgGIANAFIgBADQAAA4gCAOQAAAMgKABQgIADgKAAQgBgJgDgGIALAAQAEAAABgGQACgFAAgtIgXAKIAABEIgRAAIAAg9IgVAJIAAA/QgCAOARgCIApAAQAOADABgdQAGAFAJADQAAAlgdgCIgsAAIgFAAQgbAAACgdgAi9EDIAAgQIBHAAIAAgrIgyAAIAAgRIB4AAIAAARIgzAAIAAArIBIAAIAAAQgAssDbIAZgJIAAg6IgYAAIAAgRIAYAAIAAgrIAQAAIAAArIAWAAIAAARIgWAAIAAAyIAVgIIADAQIg7AbgAlyDEIALgFQAIAQAFANIgMAFQgDgOgJgPgAnwDaIAAhqIASAAIAABqgAtwDDIAAhLIhjAAIAABLIgQAAIAAhaIAzAAIAHgQIATADIgHANIA/AAIAABagAvOC3QAOgIANgMIgZAAIAAgNIARAAIgMgUIAMgEIALASIgLAGIATAAIAAgbIAPAAIAAAbIAQAAIgLgFIANgUIANAGIgPATIATAAIAAANIgjAAIAAAZIgPAAIAAgTQgNAPgPAJQgFgGgFgEgAuXCtIAJgJIAZARIgJAJQgLgIgOgJgAi9CqQAigNAXgTIANAKQgZAWgjAPgAhiCWIALgMQAhAPAbARIgNANQgYgPgigSgAlxCKIAKgEQAIAOADAMIgLAFQgEgNgGgOgAi+CcIAAgsIBJAAIgIgTIATgFIALAYIBEAAIAAAoIgSAAIAAgYIh/AAIAAAcgAlDCIIAAgQIApAAQgFgNgHgOIARgGIANAdIgPAEIA1AAIAAAQgAC4AUQgZAAgHgVIAAgCIgCACQgHAOgsAHQhAgJAHgsQAEhBBkADIABAAIAAgSQADgnghACQgZgBgcAMIgCABIgIgWIABgBQAYgRAtgCQA+gCgCBEIAABbQgCATAPgCIALABIAAAUQgKAFgMAAIgCAAgABRgjQAFAeAYgDQAkgBABgiIAAgbIgBAAIgCgBQhCAAADAkgAnRAUQgrgCgTgNIAAgzIAbAAIAFAaQgDANAkACQAgADAGghQgDgbghgEIgMgDQgtgEgHgxQADg4BFgCQAjAAAVAMIAAAwIgaAAIgGgWQACgLgcgBQgkAAgBAZQAEAYAhAFIALADQAvAFAIAyQgCAigXANQgWAPgcAAIgCAAgAqiAUQgigBgMgVQgLgVABgZIAAhRQgBgWgQAAIgJgBIAAgZIA/AAIAAB+QAAAnAfAAQAVAAAagPIABAAIAAhmQAAgWgQAAIgKgBIAAgZIA/AAIAACVQgBAWARAAIALABIAAAUIg4AAIgFgVIgBABQgeAZgfAAIgBAAgAlVghIAAh1IgbAAIAAgbIAdAAIANgtIAWAAIAAAtIAvAAIAAAbIgvAAIAABwQACAhASgDQAPAAAPgIIACgBIAJAUIgBAAQgQANgkAEIgBAAQgsAAAAg1gAtSAQIAAgUIAcgDIgXhCIhfAAIgYBCIAcADIAAAUIhRAAIAAgUIANgBQAOgDAFgVIBbjuIAVAAIBXDqQAJAdAMgBIALABIAAAUgAuihjIBLAAIglhogAIDANIA3goQBnhUAZgoQAJgPgFgLQgFgLgOgDIgjABQCygpC9gIQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQjtBMi4CgIAAAAIhPANQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBgAFfAPIAAgUIANgBQALADgBgcIAAhPQAAgmghAAQgXABgZAPIAAAAIAABjQgDAeAOgDIALABIAAAUIhVAAIAAgUIANgBQAPADgDgeIAAhgQAAgWgPAAIgIgBIAAgZIA2AAIADAYIABgCQAVgWAqgDQA6AAAABDIAABQQgCAdAOgCIAPABIAAAUgAhCAPIAAgUIANgBQAPADgDgeIAAhhQABgUgQAAIgJgCIAAgUIA+gHIAACSQgCAgALgFIAPABIAAAUgAjeAPIAAgUIANAAQAOAEgCggIAAhgQAAgWgQAAIgKgBIAAgZIA4AAIAEAYIABgCQAWgZAZAAQAKAAAIADIAAArQgPgJgUABQgQABgMANIAABfQgBAfALgEIAXACIAAATgAgyjtQABgWAWAAQAWAAACAWQgBAWgXABQgWgCgBgVg");
	this.shape_1.setTransform(101.8,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,203.5,53.5);


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
	this.shape.graphics.f("#D71E05").s().p("AG+ABIAAgBQACgjAjgCQAjACACAjIAAAAQgCAkgjACQgjgDgCgigAHIAAIAAABQACAcAZACQAagCABgdIAAAAQAAgbgbgDQgbACAAAcgACBAaQAEgIAIgFQAIAFAEAIQgEAHgIAFQgIgFgEgHgAFsAmIAAhKIAsAAIAAAHIgjAAIAAAaIAbAAIAAAHIgbAAIAAAigAEvAmIgmhAIAABAIgJAAIAAhKIAMAAIAlA9IAAg9IAIAAIAABKgADEAmIAAhKIAJAAIAABKgABDAmIgEgPIgZAAIgEAPIgVAAIAZhLIAcAAIAYBLgAAqAJIARAAIgJgdgAg1AmIgcgvIAAAvIgTAAIAAhLIAZAAIAYApIAAgpIATAAIAABLgAitAmIgcgvIAAAvIgTAAIAAhLIAYAAIAZApIAAgpIATAAIAABLgAlDAmIAAhLIA1AAIAAAQIgfAAIAAAOIAZAAIAAAOIgZAAIAAANIAhAAIAAASgAmNAmIAAhLIAWAAIAABLgAnuAmIgZhLIAYAAIAPA0IAQg0IAUAAIgZBLg");
	this.shape.setTransform(55.8,9.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,5.5,104,7.7);


(lib.t1swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D71E05").s().p("ADzCRIAAAHIibAAIAAklICdAAIAAAmIh0AAIAAAcIATgKQASAZASAbQAKgeAJggIAkAIQgNAwgRAsQAYApANAgIgkATQgHgVgPgcQgRAhgVAZQgIgIgNgJIAAAYIByAAIAAANQAjgnAJgsQAKgrgCghIAAgbIAoAAIAAAbIgBAbQASBdA5AtQgRAOgJATQgrgngVg0QgOAygtAsQgGgLgLgMgACBBGQAVgbARgjQgSgegUgdgAIVCNQAxhTgHhgIAAgHQgIAvgSAkIgfgRQAUgjAGgxIAfAJIAAhnIAoAAIAABsIASgHQAIASAIAVIAAiFIAnAAIAABeIAPgHQAKASAKATIAAiDIAoAAIAAFCIgoAAIAAiQIgRAIQgFgVgNgbIAACtIgnAAIAAiFIgWAJQgEgUgJgaQAFBigyBTQgQgPgUgJgApvCEQAPgPALgTIghALIgEgRQhAAQgWAHQgWAHgGAEQgEgRgJgUQAJgEAJgUQAKgWAOg9IgrAAIAAgmICcAAIAAAmIhGAAQgLAugTArIA9gOIgQgsIAigKQAVAxAMAqQAdg6AChUIgmAAIAAgpIAnAAIAAhGIArAAIgBBGIBMAAIAAATQgCBpgEAvQgEAwgJAKQgLARgSACQgTACgdgBQgBgVgMgUQAbACANgBQAJABAFgHQAKgGAEicIglAAQgBCHhEBOQgNgTgTgOgAHDCLQAWguAYhDIAhAWQgTA7gWA2gAhDCeIg7AAQhAAEAGg/IAAikIAsAAIAACkQgDAWAWgCIAzAAQAXAIAAhLQATAMAVAGQgBBYg0AAIgHAAgAkUBdQAUg+AIhLIAoAIQgDAkgHAnQgHAogJAfgAgdgnIAngQQAgBFAOA+IgrASQgLg/gfhGgAmJAaQADggAhgDQAhADADAgQgDAhghADQghgDgDghgAG9glIAXgfQAhAPAbASIgaAiQgXgTgigRgAFcgRQAIgZAIgjIhFAAQgMAogTAbQgPgMgTgKQAjgzALhUIAnAGQgDAYgFAWIBGAAIAGgBIAcAIQgNA5gQAsgAitiDIAdgdQAZAQAcAUQAdAUAQARIgfAhQglgmg7gngAHKiEIAZgfQAhARAaASIgaAiQgYgTgigTgArvhlIAAglICKAAIAAAlg");
	this.shape.setTransform(49.5,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-15.7,152.7,33.6);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A8lXhMAAAgvBMA5LAAAMAAAAvBg");
	this.shape.setTransform(183,150.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,366,301);


(lib.liswf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AAAAsIAUAAQABAAABAAQAAgBABAAQAAAAABgBQAAgBAAAAIAAhNIgkAAIAAgJIBCAAIAAAJIgVAAIAABNQAAAIgGACQgGACgRAAIgEgJgAgnArQAFgCABgIIAAgqIgUAAIAAgIIAdAAIAAAxIARgLIADAIQgeAUgBACIgEgIgAgugvIAGgFQAMAKAHAJIgHAGQgHgJgLgLg");
	this.shape.setTransform(41.4,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AgvA0IgDgJIAOAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAAAgBIAAgtIgUAAIAAgJIAdAAIgXgQIAFgGIALAIQAHgHAGgJIggAAIAAgIIAmAAIABAAIAGADQgJAOgLALIALAHIgCADIAJAAIAFACIgKAZIgGgCIAGgQIgMAAIAAAtQAAAHgFACQgEACgIAAIgFAAgAAbAgIAGgFQANAJAJAKIgGAGQgJgKgNgKgAgJAtQAjgRgFgVIAAgWIAIAAIAAAWQAGAZgnATIgFgGgAAqAYIAAgvIghAAIAAAvIgJAAIAAg3IASAAIADgMIgYAAIAAgIIA6AAIAAAIIgYAAIgEAMIAXAAIAAA3g");
	this.shape_1.setTransform(29.3,5.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AALA0IAAhmIAoAAIAABEQAAAHgFACQgFACgMgBIgDgIIANAAQABAAABAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAAg8IgWAAIAABegAgyAnQAFgBAAgHIAAhSIAtAAIAAA3IgjAAIAAAeIAXgHIgIgNIAIgDQAKAQAFAOIgGAFIgGgMQgkAMgBACIgEgJgAgjgDIAbAAIAAgQIgbAAgAgjgbIAbAAIAAgQIgbAAg");
	this.shape_2.setTransform(17.2,5.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("Ag0A1IAAgJIA5AAQALgbAHgeIAKACQgJAcgKAbIAnAAIAAAJgAgfgLIAJgCQAIAaAEAXIgJACQgEgYgIgZgAgvgTIAAgJIBfAAIAAAJgAgIgxIAIgDIAGATIgIADIgGgTg");
	this.shape_3.setTransform(5.3,5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.8,11);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib._272();
	this.instance.parent = this;
	this.instance.setTransform(33,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(33,-7,550,352), null);


(lib.an2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AACAjIAEgKQAZAHANAEIgDAKQgQgFgXgGgAgsAlQAVgBAKgHQAJgEAAgQIAJAAQgBANgCAEQgGAQgiAEQgCgFgEgEgAAXAcIAAgFIAAgSIgrAAIAAAOIAAACIAAAHIgLAAIABgKIAAgNIgJADIgBgBIgEgHQAOgDAJgGIgLAAIgIAAQADgJACgKIAIABIAOAAIAAgFIgRAAIgJAAIAAgHIAJAAIARAAIAAgGIAKAAIAAAGIAKAAIgBgGIALAAIAAAGIANAAIAKAAIAAAHIAAAFIAAAHIgKgBIgNAAIAAAFIATAAIAJgBIAAACIgBAGQAAAKgLgBIAAASIABAKgAARgCIAKAAIgBgEIAFAAQABABAAgBQABAAAAAAQAAAAABgBQAAgBAAgBIgRAAgAgOgCIAVAAIAAgHIgPAAIgGAHgAgGgQIANAAIAAgFIgLAAIgCAFgAgbgSIgBACIAMAAIABgCIABgDIgNAAIAAADgAARgbIANAAIAAgFIgNAAgAgDgbIAKAAIAAgFIgKAAIAAAFg");
	this.shape.setTransform(-10.4,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgtAkQAKgLAEgPQADgKABgRIgFAAQgFgBgFABIAAgLIAMABIAEAAIAAgGIgBgLIAMAAIAAAGIgBALIAJAAIALAAQgCAAABASQgBAbgCANQgBANgKgBIgLAAQAAgHgCgFIAKACQADAAABgEQACgHAAgRIABgWIgJAAQgCASgDAOQgEAQgLAOQgEgGgFgDgAAIArIABgLIAAg4IAAgKIAJAAIASAAIAJAAIAAAKIAAA4IAAALIgKAAIAAgHIgPAAIAAAHgAAUAaIAPAAIAAgyIgPAAg");
	this.shape_1.setTransform(-20.6,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgHAuIAAgOIAAgYIAAgLQgBAEgDAEIgFgKQAJgJAFgRIADgOIAKAEIgCAGIgHARIAAAzIABANgAgrAuIAAgNIAAhBIAAgKIAIABIANAAIAHgBIAGAGIgBABIAAABQgFANgGALQAJALgCAKQAAAJgEAEQgDACgFAAIgDAAIAAgBQAAgFgDgEIAGAAQADAAAAgFQABgHgDgEQgCgEgEgFQAGgMADgLIgKAAIAAAwIAAASIAAAMgAAMAtQAAgGgCgEIALAAQAFABAAgEIAAgtIgLAAIgJABIAAgMQADACAHgBIAKAAIAAgJIgBgLIAMAAIgBALIAAAJIAIgBIAAAMQgDgBgFAAIAAAvQAAAFgCADQgDADgJAAIgKAAgAAEgCIAIgFQAHAJAEANIgIAGQgEgOgHgJgAggAQIAAAAg");
	this.shape_2.setTransform(-30.3,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgqAlIACgEQAGgJAFgQIAJAGQgFAQgHANIgBADgAAhAtIAAgFIgmAAIAAAFIgLAAIABgMIAAgyIAAgKIAJAAIAOAAIAAgIIgBgKIANAAQgCAEABAHIAAAHIAPAAIAKgBIAAALIAAAxIAAANgAATAdIAOAAIAAgTIgOAAgAgFAdIANAAIAAgTIgNAAgAATAAIAOAAIAAgRIgOAAgAgFAAIANAAIAAgRIgNAAgAgrgLIAGgIQAJAFAJAHIgGAIQgJgGgJgGgAgogkIAIgHQAIAEAIAIIgHAJQgHgJgKgFg");
	this.shape_3.setTransform(-40.8,12.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWAnQAFgFAEgKIACgGIAIAEQgDANgHAKgAAcAVIAIgEQAHAKADAOIgJAEQgDgOgGgKgAANAWIAJgCQADAIACAPIgJACQgCgOgDgJgAgBAWIAIgCQACALABANIgKABQAAgKgBgNgAguAjQAFgEADgHQAGgKgBglQAAgSgBgEIALAAIgBAXIAFgJIAGAGIgBACIgKANIgBATIAMAPIgIAIIgHgKQgDAOgIAJQgDgGgEgEgAABALQAIgFAFgIQADgFABgIIgDAAIgEAAQgDAKgGAIQgGAJgIAGQgCgEgFgDQAJgGAFgGIgGgFIgEAEQgCgDgEgEQAIgJAFgOIADgNIAJACIgCAGIAAABIADAAIAFAAIAFADIgBAGIAAADIAFAAIABgMIgBgIIAMAAQgCAAABAMIgBAIIAHAAIAJgBIAAALIgJgBIgHAAQACAGAEAHQAFAGAHAFIgGAJQgLgKgFgLQgFANgNAJQgCgEgEgEgAgHgLIAAAAIAGAEIABgFIgEgFIgDAGgAgBgYIAEAFIADgJIgGAAIgBAEgAguAAQADgHgBgUIAJACQAAAUgDAJgAAfgmIAGgFQAGAIADAFIgHAEQgDgGgFgGg");
	this.shape_4.setTransform(-50.7,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYAtIAAgMIAAgQIABgMIgIAOIgHAKQgCgGgDgEQAGgFAFgIIAGgNIAAAAIgGAAIgJAAIAAgLIAJABIAIAAIAAgKIgNACQgBgFgDgFQAZgDAMgGIAFAJIAAABIgCAAIgBAAIgMAEIAAANIAHAAIAHgBIAAALIgHAAIgHAAIAAACQAJAGAGAJIgGAJIgJgNIAAAbIABAMgAAhAsIAAgHIgUAAIAAAHIgKAAIAAgMIAAg6IAAgLIAJABIAWAAIALgBIgBALIAAA4IABAOgAANAaIAUAAIAAg0IgUAAg");
	this.shape_5.setTransform(-61.1,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPAmQARgJAAgXIgCAAIgGAAIAAgGIAAgSIAAgHIAHAAIACAAQgDgKgEgGIAJgEQAFAIADAIIgKAEIAQAAQAGgKADgKIAKAEIgHAQIACAAIAIAAIAAAHIAAASIAAAGIgIAAIgEAAIAAAbQAAAAAAABQAAAAAAABQABAAABAAQABAAABAAQAFADAAgRQAFAEAEAAQgBAPgCACQgCADgMgBQgMACABgKIAAgeIgHAAQAAAOgEAJQgGALgLAGQgCgEgEgEgAACgDIAdAAIAAgMIgdAAgAgeAuIABgMIAAgSIAAgLQgDAMgJAKQgCgGgDgEQAHgIAEgJQADgFABgEIgFAAQgFgBgDACIAAgLQADABAFgBIAHAAIAAgKIgLABIgDgJQAPgBAKgFIAFgCIAGAIIgCACIgKADIAAANIADAAIAHAAIAAAKIgHAAIgDAAIAAACQAHAHAEAIIgFAIIgGgKIAAAcIAAAMg");
	this.shape_6.setTransform(-70.9,12.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAsIgKgBIgCgKIANABQAGABABgLQADgQAAgNIgDAAIgEALQgGAOgKAKQgHAHgKAHIgHgHQAQgLAIgMQAGgHABgHIADgFIgGAAQgEAHgDAFQgFAHgJAHIgHgGIAAAHQgMAGgMAEIgEACIgDgLIANgDIAAgeIgDAAIgIAAIAAgKIAIAAIADAAIAAgNIgBgLIALAAQgBAEABAHIAAANIACAAIAHAAIAAAKIgHAAIgCAAIAAAaIADgCIAFgDIAAADQANgJAFgKIgFAAIgIABIgCgJQAGgBAGgGIAPgKIgPAAIgMAAIAAgLQAHABAFAAIATAAIAKgBIAGAHIgCABIgBABIgZATIAIgCIAQAAIALAAIgBAQQABAsgPAAIgGgBg");
	this.shape_7.setTransform(-81.1,12.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgQAlQAHgFADgJQAEgMAAgmQAAgKgBgEIAJABIARAAIAJgBIgBAKIAAA/QAAABAAAAQABAAAAAAQAAABABAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAgBIAAgTQAEADAGACQAAATgDADQgBACgDABIgHABQgIAAgCgCQgCgCAAgGIAAhBIgNAAQAAAigCALQgDAUgJAMIgKgJgAgeAuQACgEAAgGIAAgUIAAgPQgFAMgHAKQgCgFgEgFQALgMAFgSIgGAAIgHABIAAgLIAHABIAHAAIAAgKQABgFgCgEIAMAAQgBAEABAFIAAAKIAFAAIAHgBIAAALIgHgBIgFAAIAAADIAOASIgHAIIgHgNIAAAlQgBAGABAEg");
	this.shape_8.setTransform(-91,12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAXAuIAAgEIguAAIAAAEIgKAAIAAgJIAAgSIAAgIIAIAAIAbAAIAMgLIglAAIgKAAIAAgIIAJAAIAqAAIAIAAIAGAFIgEADIgMALIALAAIAHAAIAAAIIAAATIAAAIgAgXAgIAuAAIAAgMIguAAgAAAgiQgHAJgMAHQgJAGgNAGQAAgFgGgFQAQgFAJgHQANgIAFgJIALACIgCACQAJAIAGAEQALAIAQAEQgCADgBAEIgDAEQgbgKgOgSgAgNgQIAGgIQAPADAGAEIgDAIQgLgFgNgCg");
	this.shape_9.setTransform(-101,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

	// 图层 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("A1mByIAAjjMArNAAAIAADjg");
	this.shape_10.setTransform(-112.5,18.1);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(1).to({_off:false},0).wait(3));

	// 图层 3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D81E05").s().p("AgpBLIAAgPQAKAEAKACQAIADAKAAQAJAAAKgFQAHgDABgHQgBgIgFgDQgLgHgKgEQgQgEgNgLQgHgJAAgKQAAgTARgIQgHgEgFgHQgFgGAAgIQABgNALgHQAOgJAQABIASACQAKABAJAFIgFAOQgJgEgJgBQgHgCgIAAQgIAAgJADQgFADAAAHQAAAGAFAEQALAGALAEQAPAEAMALQAIAIAAALQAAASgQAKQAVAMgHAXQgEAHgHAEQgQAKgRgBIgDAAQgSAAgQgIgAgSgQQgEAFgBAHQAAAEADAEQAEAEAFADQALAHAMADQAMgFABgOQAAgHgHgGQgMgIgNgEQgHACgEAFg");
	this.shape_11.setTransform(10.2,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.5,20.5);


(lib.xiaobiaoanniu2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_5
	this.instance = new lib.an2();
	this.instance.parent = this;
	this.instance.setTransform(-6.3,-2.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.an2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.1,-0.3,276.7,27.5);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.liswf("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(45.5,20.2,1.546,1.546,0,0,0,23.4,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D81E05").ss(1.3,1,1).p("AMZCpIAAlRQAAgcgbAAI37AAQgbAAAAAcIAAFRQAAAcAbAAIX7AAQAbAAAAgcg");
	this.shape.setTransform(45.9,20.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-34.4,-0.1,160.6,41.4), null);


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
	this.p3.setTransform(113.4,8.5,0.812,0.812,0,0,0,-4,-29.1);

	this.p2 = new lib.n1();
	this.p2.name = "p2";
	this.p2.parent = this;
	this.p2.setTransform(92.4,8.5,0.812,0.812,0,0,0,-4,-29.1);

	this.p1 = new lib.n1();
	this.p1.name = "p1";
	this.p1.parent = this;
	this.p1.setTransform(71.4,8.5,0.812,0.812,0,0,0,-4,-29.1);

	this.p0 = new lib.n1();
	this.p0.name = "p0";
	this.p0.parent = this;
	this.p0.setTransform(50.5,8.5,0.812,0.812,0,0,0,-4,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p0},{t:this.p1},{t:this.p2},{t:this.p3}]}).wait(1));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AgSBeIABgXIAAhvIgBgWIAUABIAcAAIAAgOQAAgJgCgJIAaAAQgCAIAAALIAAANIAeAAIAVgBIgBAWIAABuQABARgKADQgFADgWgBIgLAAQgBgNgFgJQAOACAIgBQAJABAAgGIAAgfIgQAOQgLgjgIgNQgEANgGANQgDAGgNARQgJgNgGgFIAAApIABAVgAAEAdQANgNAFgOQAGgQACgaIgaAAgAA0gcIAFAKQAQAZAHAVIAAhEIgcAAIAAAMgAhiBAQAKgBAVgDIAsgJIAAAWQgQAFgbAEQgTADgHADgAhjASQAIgCADgDIACgDQAJgIAKgMIgeACIgFgVQAGAAAGgJIAOgYIAFgNIAGgRIAaAKIgFAIIgIAPIgJAQIgJAPIASgBIALgTIAWAKQgJARgOAQQgMANgJAIIAOgCIAcgDIgCAUIgTADIgZADIgUACIgHABg");
	this.shape.setTransform(53.1,-9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AgXBcQgNAAgHgCQgagDACgaIAAhDIgKADIgWAEIgDgWQAKAAAMgDIANgDIAAgcIgBgWIAbAAQgCAIAAAOIAAAWIAmgIIAAgcQAAgPgCgIIAaAAQgCAIAAAPIAAAXIAvgLIAXgHIgBAdIgDAeQgCAdgIAFQgGAIgRAAIgUgCQAAgLgFgKQAMACAJAAQALADABgXQACgQAAgQIgrAKIAAAzQAAAPACAHIgaAAQACgGAAgRIAAgsIgmAJIAABGQAAAJAHACQAEACAvAAQAhAAALgCQAMgBACgEQAFgHAAgWQAOAGALACQgCAdgKAJQgGAHgOACQgJACguAAIgngBg");
	this.shape_1.setTransform(30.8,-9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AgLBfQACgJgBgMIAAhRIAAgEIgKALQgHgLgJgGQATgRAPgdQAIgQAEgPIAYAGIgGANIgHAPIAgAAIgKgQIgFgGIAVgKQALAQAIAQIABAAIAXgBIAAAWIgXgBIgPAAIAAAWIAPAAIASgBIAAATIgSAAIgPAAIAAAWIAPAAIASgBIAAAUIgSAAIgPAAIAAAYIASAAIAWgBIAAAWQgHgBgPAAIhFAAIAAAKgAANBBIAcAAIAAgYIgcAAgAANAWIAcAAIAAgWIgcAAgAANgSIAcAAIAAgWIgcAAgAhmBAQAfgCA1gLIAAAXIgVAEIgoAHIgRAEgAhnASQAJgBAFgFIALgMIAKgMIgFAAIgaACIgEgUQAHgCAFgGIAOgaQAHgQADgLIAYAIIgDAGIgPAcIgLATIARgBIAJgRIAXAJIgGAJQgRAYgUAWIArgGIgDAUQgaAFghADIgNABg");
	this.shape_2.setTransform(8.6,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("AgGA9IABgRIAAg1IgcAAIAAAjIABARIgRAAQACgIgBgJIAAgjIgBgNIAMAAIAgAAIAAgQIgGABIgmAAQgCgIgCgGIAIAAQAwgBAegEIANgEIAJAPIgJABIgnAFIAAARIAhAAIAMAAIgBANIAAAkQACAQgUgBIgOgBQAAgHgDgHQAKACAHAAQAFAAAAgEIAAgiIgfAAIAAA1IABARg");
	this.shape_3.setTransform(31.2,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("AAoA5QgOgBgPgRQgKgOgEgQIggAAIAAAeIAigKIABAPQgEAAgbAJIgTAEIgFgOQAGgCgBgHIAAhLIgBgQQAGACAKAAIA/AAQAJAAAGgCIgBAOIAAAPIABAMIgOgBIgWAAIACAOIAbAAIAPgBIAAAOIgPgBIgYAAQAEANAKALQAHAHAFAAQACACADgUQAGAFAHADQgFAcgKAAIgBgBgAgjgDIAeAAIgCgOIgcAAgAgjgdIA/AAIAAgOIg/AAg");
	this.shape_4.setTransform(18.4,15.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("AARAcQgLgOgGgUQgDANgGAMQgHAOgNAMQgJAIgMAHQgEgIgHgGQATgJALgMQAYgbAAguIgBgLIAQAAIgBAMQAAAfAOAWQAHANANAMQALAIAJAGQgGAHgEAIQgWgPgMgRg");
	this.shape_5.setTransform(4.3,15.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("AhHA3IALgIQAIgIAEgBIAAgiIgIAAQgGABgEABIAAgQQADACAIAAIAMAAQAGAAAFgCQgBAGAAAKIAAAgQABgBAHAHQAHAIAjgBQAeAAAZgCQgFAHAAAJIg1ACQgYAAgKgCQgHgCgKgJQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDgBgIAJIgIAIgAgKAjQARgHAPgPIgWgPIAJgKQALAIALAIQAIgKAFgKIgtAAQgCAUgEAQQgDAMgIAMQgEgGgJgHQAIgJACgNQAFgTAAggQAAgJgCgHIAHAAIAvgEIATgFIALAPIgIABQgXAGgkABIABAEQgBACAAAJIAqAAIAOgCIAIAJQgCADgCAEQgGAPgJAMIAWASIgLAMIgVgSQgOAOgUAKQgEgIgGgFgAhDg1IAMgMQAPAOAKAPIgMAKQgLgPgOgMg");
	this.shape_6.setTransform(151.1,30.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D81E05").s().p("Ag0BHQABgIABgKIAAgfIAAgNQgEAFgHAFQgEgJgEgHQAXgPAKgUIAOAJIgDACIgJAOIAAA9IAAARgAA1BAIg/AAQgLABgIABIAAgSIATAAIAWAAIAAgdIgPAAIgRAAIAAgRIARABIAPAAIAAgaIgRAAQgKAAgHABIAAgBIAAgQIARAAIAdAAQgLgLgRgJIALgKQAQAHAQANIgLAKIAXAAQAKABAHgBIAAARQgIgBgJAAIgXAAIAAAaIAUAAIAPgBIAAARIgPAAIgUAAIAAAdIAZAAIARAAIAAASQgHgBgKgBgAgWgXgAhDgpQALgFAIgIQAJgIADgHIAOAJQAAABgHAHQgOAOgQALIgIgOg");
	this.shape_7.setTransform(135.5,30.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D81E05").s().p("AhFA3QAMgVAAgeIAAgEIAPACIgBANIgBAJQADAFAGAGIAAgpIgNAAIgQAAIAAgPIAQABIALAAIAAgOIgIAAIgPABIAAgPIAPAAIAIAAIAAgEQAAgJgBgEIARAAIAAANIAAAEIAHAAIAOAAIAAAPIgOgBIgHAAIAAAOIAJAAIANgBIAAAPIgNAAIgIAAIAAAPIAJAAIALAAIAAAPIgLAAIgJAAIAAAVQAKAFAZAAQAmAAARgEQgCAHgBAKIgPABIgjAAQgSAAgNgCQgWgEgLgSQgDAPgHALQgFgHgHgEgAAKAlQgFgCACgLIAAgeQAAgKgCgGQAFABAKAAIAYAAIAAgWIgZAAIgOAAIAAgQIAPABIAZAAIAPgBIgBAOIAAAXIABAQQgFgBgLAAIgWAAIAAAcIAAADQACACAKAAQAOAAACgDQACgCAAgHIAAgKQAIAEAIABQgBAUgEAFQgDAEgGABIgWABIgHAAQgNAAgCgDg");
	this.shape_8.setTransform(149.6,15.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D81E05").s().p("AhCAyQAWgKAIgPQAIgNAAgYIgTAAQgLAAgHACIAAgSIASABIBgAAIARgBIAAASQgJgCgIAAIgZAAIAAA0QgBAHAMgCQAPAAAAgFQABgFABgPQAHAEAJABQgCAagFADQgCAHgbAAQgRAAgDgEQgFgCABgIIAAg7IgUAAQAAAcgIARQgHAOgMAJQgFADgLAFQgFgIgGgGgAAkguIhIAAIgNAAIAAgRQADABAKAAIBIAAQALAAAEgBIAAARIgPAAg");
	this.shape_9.setTransform(135.3,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-24.8,232.2,86.9);


(lib.yuding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhjBsIAAjJIBMAAIAACGQAAAOgIAEQgJAEgZgBQgCgJgEgIIAbAAQAFAAgBgEIAAh2IgrAAIAAC5gAAWBrQgCgJgEgHIAaAAQAFAAgBgEIAAhbIgmAAIAAgRIA5AAIgtgfIAJgMIAVAPQAPgOAMgRIhAAAIAAgPIBKAAIADgBIALAHQgRAbgVAVIAUAPIgDAFIARAAIALADQgKAdgKAWIgMgDIAMgiIgYAAIAABbQAAANgJAEQgIADgQAAIgJAAgACpBEIALgKQAZATASATIgMALQgQgSgagVgAFiBYQAdABAKgBQAHAAAAgGIAAiYIhIAAIAAgRICEAAIAAARIgqAAIAACYQABAQgMAEQgNAEggAAQgDgKgFgIgABfBeQBIghgLgpIAAgtIAQAAIAAAtQAMAxhOAlQgFgHgGgFgAESBXQAKgEADgRIAAhTIgoAAIAAgQIA5AAIAABiIAigXQACAJADAHQg6AngCAEQgEgIgFgGgAjdBTQAIgCACgNIAAiiIBZAAIAABtIhIAAIAAA7IAugPIgPgYIAQgHQATAgANAcIgQAJIgLgYQhFAZgDACQgCgIgFgJgAjCAAIA3AAIAAggIg3AAgAjCgwIA3AAIAAgfIg3AAgAnLBiIAAgRIByAAQAVg2AOg7IAUAEQgRA5gTA0IBMAAIAAARgAmhgcIASgEQAPA0AIAuIgSAFQgHgvgQg0gADGA1IAAheIhBAAIAABeIgRAAIAAhuIAjAAIAGgYIgyAAIAAgPIB0AAIAAAPIguAAIgJAYIAuAAIAABugAnBgsIAAgSIC9AAIAAASgAEGhbIALgLQAXATAOATIgNAMQgOgTgVgUgAl0hmIASgFIAMAlIgSAFQgEgRgIgUg");
	this.shape.setTransform(100.2,24.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(3));

	// 图层 1
	this.instance = new lib.t4();
	this.instance.parent = this;
	this.instance.setTransform(101,23.1,1.272,1.272,0,0,0,45.9,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D81E05").ss(1.3,1,1).p("APxjWQAAgjgjAAI+bAAQgjAAAAAjIAAGtQAAAjAjAAIebAAQAjAAAAgjg");
	this.shape_1.setTransform(100.9,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AvND6QgjAAAAgjIAAmtQAAgjAjAAIebAAQAjAAAAAjIAAGtQAAAjgjAAg");
	this.shape_2.setTransform(100.9,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.8,203.3,51.6);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loop=3;
	}
	this.frame_313 = function() {
		if(this.loop>1){
			this.loop--;
			this.gotoAndPlay(2);
		}else{
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(313).call(this.frame_313).wait(1));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(48,48,48,0.4)").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(314));

	// 图层_13
	this.instance = new lib.xiaobiaoanniu2();
	this.instance.parent = this;
	this.instance.setTransform(287.3,233.2,0.716,0.716,0,0,0,4,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(314));

	// t7
	this.instance_1 = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(224.6,27.6,0.978,0.978,0,0,0,74.5,7.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(208).to({_off:false},0).wait(1).to({regX:75.2,regY:7.9,x:225.2,y:28.2,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// t5
	this.instance_2 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(78.6,211.6,0.602,0.602,0,0,0,100.7,26.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(208).to({_off:false},0).wait(1).to({regX:101.8,regY:26.8,x:79.2,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// t4
	this.instance_3 = new lib.yuding();
	this.instance_3.parent = this;
	this.instance_3.setTransform(79,247.2,0.607,0.607,0,0,0,100.7,27.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(131).to({_off:false},0).wait(1).to({regX:100.9,regY:25,x:79.1,y:233.5,alpha:0.111},0).wait(1).to({y:221.2,alpha:0.222},0).wait(1).to({y:208.8,alpha:0.333},0).wait(1).to({y:196.5,alpha:0.444},0).wait(1).to({y:184.2,alpha:0.556},0).wait(1).to({y:171.8,alpha:0.667},0).wait(1).to({y:159.5,alpha:0.778},0).wait(1).to({y:147.2,alpha:0.889},0).wait(1).to({y:134.8,alpha:1},0).wait(174));

	// t6
	this.instance_4 = new lib.theswf("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(22.9,215.6,0.885,0.885,0,0,0,9.5,0.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(131).to({_off:false},0).wait(1).to({regX:55.8,regY:9.3,x:63.9,y:223.4,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_8
	this.instance_5 = new lib.t2swf2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(149.2,197.2,1.45,1.45,0,0,0,88.7,19.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(88).to({_off:false},0).wait(1).to({regX:78.2,regY:9.9,x:134,y:183.3,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(37).to({y:169.5},0).wait(1).to({y:155.6},0).wait(1).to({y:141.7},0).wait(1).to({y:127.8},0).wait(1).to({y:113.9},0).wait(1).to({y:100},0).wait(1).to({y:86.1},0).wait(1).to({y:72.3},0).wait(1).to({y:58.3},0).wait(174));

	// t1
	this.instance_6 = new lib.t1swf("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(75.3,171.6,0.851,0.851,0,0,0,35.6,17.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(27).to({_off:false},0).wait(1).to({regX:49.5,regY:1,x:87,y:157.1,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(226));

	// Layer_2
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(136,182.3,1,0.503,0,0,0,136,108);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({_off:false},0).wait(1).to({regX:183,regY:150.5,x:183,y:203.6,alpha:0.167},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.55,y:196.5},0).wait(1).to({scaleY:0.6,y:189.2},0).wait(1).to({scaleY:0.65,y:182},0).wait(1).to({scaleY:0.7,y:174.8},0).wait(1).to({scaleY:0.74,y:167.6},0).wait(1).to({scaleY:0.79,y:160.3},0).wait(1).to({scaleY:0.84,y:153.1},0).wait(1).to({scaleY:0.89,y:145.9},0).wait(1).to({scaleY:0.94,y:138.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_1
	this.instance_8 = new lib.Symbol1("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(136,110,1,1,0,0,0,136,110);
	this.instance_8.alpha = 0.82;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({_off:false},0).wait(1).to({regX:183,regY:150.5,x:183,y:150.5,alpha:0.757},0).wait(1).to({alpha:0.694},0).wait(1).to({alpha:0.631},0).wait(1).to({alpha:0.568},0).wait(1).to({alpha:0.505},0).wait(1).to({alpha:0.442},0).wait(1).to({alpha:0.378},0).wait(1).to({alpha:0.315},0).wait(1).to({alpha:0.252},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0.126},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// bg
	this.instance_9 = new lib.bg();
	this.instance_9.parent = this;
	this.instance_9.setTransform(137.3,132.3,0.76,0.76,0,0,0,250,167);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({_off:false},0).to({regX:249.8,regY:166.8,scaleX:0.55,scaleY:0.55,x:118.2,y:94.3},85,cjs.Ease.quartOut).wait(226));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,302,252);
// library properties:
lib.properties = {
	id: '9B223EFC8A5B471C91AC4845A2ACD4A9',
	width: 300,
	height: 250,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/bj.jpg", id:"_272"}
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
an.compositions['9B223EFC8A5B471C91AC4845A2ACD4A9'] = {
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