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



(lib.sujet = function() {
	this.initialize(img.sujet);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

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
	this.shape.graphics.f("#D81E05").s().p("AhjBsIAAjJIBMAAIAACGQAAAOgIAEQgJAEgZgBQgCgJgEgIIAbAAQAFAAgBgEIAAh2IgrAAIAAC5gAAWBrQgCgJgEgHIAaAAQAFAAgBgEIAAhbIgmAAIAAgRIA5AAIgtgfIAJgMIAVAPQAPgOAMgRIhAAAIAAgPIBKAAIADgBIALAHQgRAbgVAVIAUAPIgDAFIARAAIALADQgKAdgKAWIgMgDIAMgiIgYAAIAABbQAAANgJAEQgIADgQAAIgJAAgACpBEIALgKQAZATASATIgMALQgQgSgagVgAFiBYQAdABAKgBQAHAAAAgGIAAiYIhIAAIAAgRICEAAIAAARIgqAAIAACYQABAQgMAEQgNAEggAAQgDgKgFgIgABfBeQBIghgLgpIAAgtIAQAAIAAAtQAMAxhOAlQgFgHgGgFgAESBXQAKgEADgRIAAhTIgoAAIAAgQIA5AAIAABiIAigXQACAJADAHQg6AngCAEQgEgIgFgGgAjdBTQAIgCACgNIAAiiIBZAAIAABtIhIAAIAAA7IAugPIgPgYIAQgHQATAgANAcIgQAJIgLgYQhFAZgDACQgCgIgFgJgAjCAAIA3AAIAAggIg3AAgAjCgwIA3AAIAAgfIg3AAgAnLBiIAAgRIByAAQAVg2AOg7IAUAEQgRA5gTA0IBMAAIAAARgAmhgcIASgEQAPA0AIAuIgSAFQgHgvgQg0gADGA1IAAheIhBAAIAABeIgRAAIAAhuIAjAAIAGgYIgyAAIAAgPIB0AAIAAAPIguAAIgJAYIAuAAIAABugAnBgsIAAgSIC9AAIAAASgAEGhbIALgLQAXATAOATIgNAMQgOgTgVgUgAl0hmIASgFIAMAlIgSAFQgEgRgIgUg");
	this.shape.setTransform(67.1,-1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhjBsIAAjJIBMAAIAACGQAAAOgIAEQgJAEgZgBQgCgJgEgIIAbAAQAFAAgBgEIAAh2IgrAAIAAC5gAAWBrQgCgJgEgHIAaAAQAFAAgBgEIAAhbIgmAAIAAgRIA5AAIgtgfIAJgMIAVAPQAPgOAMgRIhAAAIAAgPIBKAAIADgBIALAHQgRAbgVAVIAUAPIgDAFIARAAIALADQgKAdgKAWIgMgDIAMgiIgYAAIAABbQAAANgJAEQgIADgQAAIgJAAgACpBEIALgKQAZATASATIgMALQgQgSgagVgAFiBYQAdABAKgBQAHAAAAgGIAAiYIhIAAIAAgRICEAAIAAARIgqAAIAACYQABAQgMAEQgNAEggAAQgDgKgFgIgABfBeQBIghgLgpIAAgtIAQAAIAAAtQAMAxhOAlQgFgHgGgFgAESBXQAKgEADgRIAAhTIgoAAIAAgQIA5AAIAABiIAigXQACAJADAHQg6AngCAEQgEgIgFgGgAjdBTQAIgCACgNIAAiiIBZAAIAABtIhIAAIAAA7IAugPIgPgYIAQgHQATAgANAcIgQAJIgLgYQhFAZgDACQgCgIgFgJgAjCAAIA3AAIAAggIg3AAgAjCgwIA3AAIAAgfIg3AAgAnLBiIAAgRIByAAQAVg2AOg7IAUAEQgRA5gTA0IBMAAIAAARgAmhgcIASgEQAPA0AIAuIgSAFQgHgvgQg0gADGA1IAAheIhBAAIAABeIgRAAIAAhuIAjAAIAGgYIgyAAIAAgPIB0AAIAAAPIguAAIgJAYIAuAAIAABugAnBgsIAAgSIC9AAIAAASgAEGhbIALgLQAXATAOATIgNAMQgOgTgVgUgAl0hmIASgFIAMAlIgSAFQgEgRgIgUg");
	this.shape_1.setTransform(67.1,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(3));

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#D81E05").ss(1.5,1,1).p("AqnhvIAADeQAAAzAyAAITrAAQAyAAAAgzIAAjeQAAgygyAAIzrAAQgyAAAAAyg");
	this.shape_2.setTransform(68.4,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("Ap1CiQgyAAAAgzIAAjeQAAgxAyAAITrAAQAyAAAAAxIAADeQAAAzgyAAg");
	this.shape_3.setTransform(68.4,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-18.4,138.1,34.3);


(lib.VektorSmartobjekt2swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
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

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D91F05").s().p("AAjCOIAAgVIAcgEIgXhBIheAAIgYBCIAcADIAAAVIhQAAIAAgVIAMgCQAOgCAFgVIBbjtIAVAAIBWDpQAJAdAMgCIALACIAAAVgAAeAaIgkhnIgmBnIBKAAg");
	this.shape.setTransform(13.1,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D91F05").s().p("Ag9BjIAAgWIAMgBQAOAFgBggIAAhfQAAgWgQAAIgKgCIAAgYIA4AAIADAYIACgCQAVgaAZABQAKAAAIACIAAAsQgPgJgUAAQgRABgLAOIAABeQAAAfAKgFIAXAEIAAAUg");
	this.shape_1.setTransform(85.7,8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D91F05").s().p("AgrBiIAAgVIANgCQAPADgDgeIAAhfQABgVgQAAIgJgCIAAgUIA9gHIAACRQgCAgAMgFIAPACIAAAVg");
	this.shape_2.setTransform(99.5,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D91F05").s().p("AA7BkQgZAAgHgVIAAgCIgCACQgHAPgqAGQhBgIAHgtQAEhABkACIABAAIAAgRQACgngfABQgagBgcANIgCABIgIgWIACgBQAXgRAtgDQA9gBgCBEIAABaQgCASAPgBIALABIAAAVQgKAFgLAAIgDgBgAgqAsQAEAfAZgDQAigCACghIAAgcIgCAAIgCAAQhBAAAEAjg");
	this.shape_3.setTransform(114.2,8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D91F05").s().p("AgUBiQgigBgLgVQgMgVABgZIAAhQQAAgWgQAAIgKgCIAAgYIA/AAIAAB9QAAAnAgAAQAUAAAZgQIABAAIAAhkQAAgWgQAAIgKgCIAAgYIA/AAIAACUQgBAWARAAIALABIAAAVIg4AAIgFgXIgBABQgeAbgeAAIgBgBg");
	this.shape_4.setTransform(36.3,8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D91F05").s().p("AgiBEIAAh1IgbAAIAAgaIAdAAIAMgtIAWAAIAAAtIAvAAIAAAaIgvAAIAABwQABAhATgEQAOAAAPgHIACgBIAJAUIgBABQgPANgkADIgBAAQgrAAAAg1g");
	this.shape_5.setTransform(71.1,6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D91F05").s().p("AgWAAQAAgVAWAAQAWAAABAVQAAAWgXAAQgWgBAAgVg");
	this.shape_6.setTransform(99,-7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D91F05").s().p("AASBjIAAgWIAMgBQAMADgCgcIAAhNQAAgnghAAQgVAAgaAPIAAABIAABhQgCAfANgDIAMABIAAAWIhWAAIAAgWIANgCQAPAEgCgfIAAheQAAgWgQAAIgIgCIAAgYIA2AAIADAYIACgCQAUgVApgEQA6gBAABEIAABOQgCAeAOgDIAPACIAAAWg");
	this.shape_7.setTransform(135.1,8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D91F05").s().p("AgGBkQgsgCgSgMIAAg0IAbAAIAEAaQgCANAjABQAgAEAFghQgDgbgggEIgLgDQgugEgHgwQADg4BEgDQAjABAWAMIAAAwIgaAAIgGgWQACgLgcgBQgkAAAAAZQAEAXAgAGIAKADQAvAEAIAxQgBAjgXAOQgWAPgbAAIgCgBg");
	this.shape_8.setTransform(55.9,8.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D91F05").s().p("AgKgKIAKgFQAHAPAEALIgLAFQgEgNgGgNg");
	this.shape_9.setTransform(65.8,31.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D91F05").s().p("AgiAIQAigLAWgUIANALQgZAVgiAPg");
	this.shape_10.setTransform(86.3,32.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D91F05").s().p("AgkBRQAQgjgCgmIgNAAIAAgOIANAAIAAg7IARAAQAEgMABgLIARACIgHAVIAbAAIAACFQAAAMgGADQgHAEgRgBQgBgIgEgGIAQAAQABAAABgBQAAAAABAAQAAgBAAAAQAAgBAAgBIAAg8IgbAAQABArgRAnQgHgGgHgDgAgGgGIAbAAIAAgtIgbAAg");
	this.shape_11.setTransform(65.2,34.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D91F05").s().p("Ag0AvQAYgegEggIAAgpIA9AAIAABWQAAAHABABIACABIAEAAIADgBIACgFIAAgVQAFAEAHACQgBAQgBAJQgCAGgDACQgEADgGAAIgJAAQgGAAgEgEQgFgCABgSIAAhGIgcAAIAAAZQADAmgaAiQgGgGgIgEg");
	this.shape_12.setTransform(74.2,37.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D91F05").s().p("AgigJIALgNQAgAQAaAPIgMAOQgXgQgigQg");
	this.shape_13.setTransform(95.4,32.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D91F05").s().p("AhQAmIAAgQIBHAAIAAgrIgyAAIAAgQIB3AAIAAAQIgzAAIAAArIBIAAIAAAQg");
	this.shape_14.setTransform(90.8,38.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D91F05").s().p("AhRAiIAAgrIBKAAIgIgTIASgFIAKAYIBFAAIAAAnIgTAAIAAgYIh+AAIAAAcg");
	this.shape_15.setTransform(90.8,28.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D91F05").s().p("AgLgLIALgFQAHAQAFAMIgMAFQgCgOgJgOg");
	this.shape_16.setTransform(65.9,37.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D91F05").s().p("AAAgHQgJAhhGALQgDgJgGgHQA9gIAJgXIhCAAIAAgPIBIAAIACgLIARAAIgBALIBOAAIAAAPIhCAAQATAaA0AEQgHAHgEAKQg5gHgVglg");
	this.shape_17.setTransform(8.9,39.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D91F05").s().p("AgMAIIAMgUIANAGIgOASg");
	this.shape_18.setTransform(11.4,30);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D91F05").s().p("AgLgGIALgFIAMARIgMAGIgLgSg");
	this.shape_19.setTransform(6.1,30);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D91F05").s().p("AgrAYQAOgHANgNIgYAAIAAgLIAjAAIAAgbIAOAAIAAAbIAjAAIAAALIgjAAIAAAZIgOAAIAAgSQgNAPgPAJQgFgGgFgFg");
	this.shape_20.setTransform(8.6,32.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D91F05").s().p("AgSBWQgCgJgFgJIAcABQAFAAAAgFIAAiWIASAAIAACWQAAAQgKADQgJAEgUAAIgFgBg");
	this.shape_21.setTransform(55.3,34.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D91F05").s().p("AgvAYIAAgPIAoAAQgFgNgGgOIARgFIALAbIgNAFIAzAAIAAAPg");
	this.shape_22.setTransform(74.2,27.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D91F05").s().p("AAxA2IAAhMIhiAAIAABMIgQAAIAAhaIAzAAIAGgQIASACIgGAOIA/AAIAABag");
	this.shape_23.setTransform(8.8,30.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D91F05").s().p("AgQgEIAJgIIAYAPIgJAKQgJgIgPgJg");
	this.shape_24.setTransform(11.4,34);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D91F05").s().p("AgFBYIAAhNQgPAggSAUQgEgKgGgIQAYgXAPgkIgjAAIAAgRIAnAAIAAgcIgjAGIgFgPQAtgGAggNIANAOQgPAGgSAEIAAAgIAlAAIAAARIglAAIAAAGIAjAgIgKAPIgZgcIAABNg");
	this.shape_25.setTransform(45.8,34.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D91F05").s().p("AgIA1IAAhpIARAAIAABpg");
	this.shape_26.setTransform(52.9,32.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D91F05").s().p("AgoA5IAAg4IgOAGIgHgPIAVgIIAAgzIAQAAIAAAsIAWgJIAAg1IAQAAIAAAtIAUgIIAHgGIAMAFIgBADQABA3gCAOQgBAMgJACQgJACgJAAQgCgJgDgGIALAAQAFAAAAgFQACgGAAgsIgWAKIAABEIgQAAIAAg9IgWAJIAAA+QgCAOARgBIApAAQAOADAAgdQAHAFAIACQAAAlgcgCIgrAAIgFAAQgcAAADgdg");
	this.shape_27.setTransform(32.1,33.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D91F05").s().p("AggA3IAZgKIAAg5IgYAAIAAgRIAYAAIAAgqIAQAAIAAAqIAVAAIAAARIgVAAIAAAyIAUgJIAEAQIg6Acg");
	this.shape_28.setTransform(23.7,32.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#94292B").s().p("AAHAVIhVgMQAAAAgBgBQAAAAAAAAQAAAAAAgBQABAAAAAAIAGgCQArgKArgKIAKgDQArgHAMAUQADAJgGANIABgCQADgHgDgEQgKgKg7Abg");
	this.shape_29.setTransform(164.1,-1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D91F05").s().p("Aj6B+IA3gqQBnhUAZgnQAJgPgFgLQgMgVgrAIQCygoC9gJQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQjtBNi3CfIAAAAIhPAOQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_30.setTransform(178.4,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.5,203.5,53.5);


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

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AguBBQAOgMAGgQQAIgVAAgsIAAgdIgBgVIAUAAIAAAVIAAAaIALgFQAHARADAJIAAgrIgBgTIAVAAIgBATIAAAXIAKgFQAJAOAEAMIAAgwQAAgOgCgGIAXAAQgCAHABANIAABxIABAWIgXAAIACgWIAAgzIgMAFQgEgPgHgPIAABHQgBAMACAHIgVAAIABgTIAAgsIgLAFIgFgQIgFgPQAAAmgIAXQgEANgHAKIgMAPQgGgKgKgFgAhTBAQANgOALgmIAPALQgFAVgIARIgEAHIgFAKgAgvAIQAFgKADgJQACgKAAgPIARAEQgCARgCAKQgCAJgFALgAhEgMIgPgKIAMgOQAQAJANAMIgNAPIgNgMgAhPhBIAOgOQASALAMANIgNAOQgNgOgSgKg");
	this.shape.setTransform(140.7,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AAtA1QgLgPgDgPQgCARgLAPQgKAPgQALQgGgKgFgEIgGAAIgnAAIgUABIABgRIAAhoIgBgRIARABIAuAAIASgBIAAATIgRgBIgsAAIAABWQAPgQAIgSQgKgLgMgLIALgOIAHAGIAKAMQAFgNABgRIATAGIgGAXIgEAQIAJAKIALAQIgNAQIgKgQIgFgIQgKASgNAQQgHgJgGgEIAAAOIAnAAQAJAAAGgBIAAAJQAKgJAHgLQANgWAAgiQAAgGgBgDIAUAAIAAAFQAAAWAGAQQAFAPAMANQAJAJAOAJQgHAJgFAKQgTgPgJgNgAAtgEQAKgPAGgTIgnAAQgIAUgNASQgFgIgJgGQAMgOAIgWQAFgSACgMIAVADIgEANIgDAKIAfAAIAOgBIAJAJIgEAOQgFASgLATQgJgGgIgDg");
	this.shape_1.setTransform(122.9,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AhZA/QABAAANgKQALgIAEgCIAAglIgLAAQgGAAgGABIAAgSIAPABIAOAAIAOgBIgBASIAAAkQABgBAKAIQAGAFALACQAKACAYABQAngBAegEQgFAKgBALIhCABQgfAAgLgEQgKAAgMgLQgCgCgDAAQgEAAgKAJIgJAKgAgMAnQAVgHASgQQgQgLgMgGIALgNIAeARQAJgKAFgLIg4AAIgDAUIgEAVQgEANgJAPQgGgIgKgGQAJgMADgPQAFgWAAgkIgBgTIAIAAIAbgBIAggEQAOgCAJgEIAOARIgJACQgdAGgtACIAAAGIgBAKIA1AAQAMAAAFAAIAKAJIgEAJQgHARgMAOIAbAWIgOANQgLgKgPgMQgQAQgaAMQgFgJgHgHgAhUg+IAPgMQAUAPAMAQIgPAOQgPgTgRgOg");
	this.shape_2.setTransform(103.5,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("AhCBRQACgJgBgLIAAgkIABgPQgFAGgIAHQgEgMgFgGQAcgTAMgXIAQAKIgCADIgMAQIAABGIABATgABCBKIhQAAIgWABIAAgUIAWABIAbAAIAAgjIgSAAIgVABIAAgTIAVABIASAAIAAgfIgUAAIgVABIAAgTQAHABAOgBIAlAAQgOgNgVgJIAOgNQALAFAIAFQAJAFALAKIgNAKIAcAAQAOABAHgBIAAATIgVgBIgdAAIAAAfIAYAAQAMAAAIgBIAAATIgUgBIgYAAIAAAjIAgAAIAVgBIAAAUIgVgBgAhVgvQANgHAMgKQAKgIAFgIIAQALIgHAIQgSASgVANQgEgKgGgHg");
	this.shape_3.setTransform(84.7,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("AgrBAQARgKAFgKQAJgPAAgdIAAgQIAVAAIgBAQQAAAjgKATQgJAQgSALQgGgKgIgHgAhCBPIABgUIAAgwIAAgGIAAgNQgFAJgKAJQgDgLgFgJQAVgTANgcQAFgLABgLIAXAGIgDAHQgIASgJAQIAAANQASgLAMgJQARgPALgaIAVAEIgDAFQARAfApAVQgHAHgEALIgKgGQgJgGgOgNQgMgKgMgSQgNATgPANIgLAKIgRALQgFgLgFgHIAABOIABAUgAAhBPQABgJAAgMIAAg4QAAgKgBgIIAXAAIgBASIAAA4IABAVg");
	this.shape_4.setTransform(65.6,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("Ag2BQIACgUIAAgiIgHACIgNAEIgHADIgFgUIALgCIAVgGIAAgiIgMAAQgCANgEAMQgIgFgJgDQAJgXABgcIAAgEIASACIgBAHIgBALIAJAAIAAgUQAAgIgCgGIAWAAIgBAOIAAAUIACAAIAPgBIAAASIAQABIAVAAIAAgRIgQAAIgSABIAAgTIASABIAQAAIAAgFIgBgNIAWAAQgBAFAAAIIAAAFIAUAAIAUgBIAAATIgUgBIgUAAIAAARIAZAAIAWgBIAAATIgUgBIgBAAIAAANIABAAIATgBIAAATIgTAAIgBAAIAAApQACASgegCIgQAAQgBgLgEgIQAPACAHgBQAIABgBgGIAAgiIgwAAQgLgBgHABIAAgIIgOAGIAAApIABAUgAgRADIASAAIAuAAIAAgNIgvAAIgUABIAAgSIgKAAIgDAAIAAAcIAQgFgAgLAfIAOgKQAOAMALAPIgQALQgKgPgNgNg");
	this.shape_5.setTransform(46.6,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("AggBAQAhgHAVgPQANgJAIgJIgWAAIACgRIAAhCIgCgTIAWAAIgBATIAABDIABAPQAKgLAEgLIASAJIgGAJQgIANgJAJQgcAcgtAMQgEgLgHgGgAhWA/QAUgNALgRIgOgKIgMgHQAIgTAFgcIgDAAIgNABIAAgTIAPABIAEAAQAEgTgBgNIAVABIgCAPIgDAQIANAAQALABAGgBIgBAEIgBAQIgCARQgEAVgHARQALAHAIAHIgLASQgHgIgKgHQgLASgVAQQgGgJgIgGgAg2gGIgFAPIAMAIQAIgRADgfIgNAAIgFAZgAgUAEQAPgVADgmIASAEIgEAXIgDANQgFARgJAQQgFgHgKgHgAAxg0IASgFIAMAeIAIAaIgUAGQgFgcgNgdg");
	this.shape_6.setTransform(28,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D81E05").s().p("AgBAtQgUAeg3AHQgDgKgGgIQArgCATgTIgpAAIgVABIAAgSIAVABIAzAAIABgJIAAgBIAVAAIAAACIgCAIIA4AAIAUgBIAAASIgUgBIgrAAQASASAwACQgGAKgDAJQg7gIgTgdgAAyAVIAAhFIhlAAIAAA1QASgGAJgJIgIAAIgOAAIAAgPQADABALAAQgEgHgHgJIAPgGQAHAHAEAIIgOAHIAVAAIAAgKIgBgLIATAAQgBAFAAAFIAAALIAUAAIgNgFQAIgIAEgIIAPAEQgHALgFAGIADAAIAOgBIAAAPIgOAAIgVAAQAOAFATAJIgJAOIgNgJIgPgIIAAAFIAAAIIgRAAQABgCAAgHIAAgDIAAgHQgNAPgTAIIgKgMIAAAPIgUAAIABgOIAAg6IgBgNIATAAIAfAAQAFgGAEgLIAVADIgJAOIA0AAIATAAIgBANIAAA7IABANg");
	this.shape_7.setTransform(9.3,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.7,4.2,148.4,16.4);


(lib.biankuang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9A9A9A").ss(1,0,0,3).p("AXczhMAAAAnDMgu3AAAMAAAgnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.biankuang, new cjs.Rectangle(-1,-1,302,252), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.sujet();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,250), null);


(lib.baidi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6RLmIAA3MMA0jAAAIAAXMg");
	this.shape.setTransform(168.2,63.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.baidi, new cjs.Rectangle(0,-10.5,336.4,148.5), null);


(lib.an2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABAdIAEgIQAWAGALAEIgDAJQgNgFgVgGgAglAgQARgCAIgFQAJgEgBgOIAIAAQAAAMgDADQgEAOgdAEQgCgFgDgDgAAUAYIAAgFIAAgPIglAAIAAAMIAAACIAAAGIgJAAIAAgJIAAgLIgHADIgBgCIgEgFQANgCAHgFIgJAAIgHAAQADgIABgJIAHABIALAAIAAgEIgNAAIgIAAIAAgHIAIABIAOAAIgBgGIAJAAIAAAGIAJAAIgBgGIAJAAIAAAGIAMAAIAIgBIgBAHIAAAEIAAAGIgHgBIgMAAIAAAEIARAAIAIAAIAAABIgBAFQAAAIgJAAIAAAQIAAAIgAAOgCIAJAAIgBgDIAFAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBIgPAAgAgMgCIASAAIAAgFIgNAAIgFAFgAgFgOIALAAIAAgEIgKAAIgBAEgAgXgQIAAACIAJAAIABgCIAAgCIgKAAIAAACgAAOgXIALAAIAAgEIgLAAgAgDgXIAJAAIAAgEIgJAAIAAAEg");
	this.shape.setTransform(9.2,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAeQAIgJAEgMQADgJAAgOIgEAAQgFgBgDABIAAgKIAJABIAEAAIAAgFIgBgKIALAAIgBAGIAAAJIAHAAIAJAAQgBAAABAPQgBAYgCALQgBAKgJgBIgJAAQAAgFgBgEIAIABQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQABgGABgPIAAgSIgIAAQgBAPgDAMQgEAOgJAMQgDgGgEgDgAAHAlIABgKIAAgvIAAgJIAHABIAQAAIAIgBIAAAJIAAAvIAAAJIgKAAIAAgFIgMAAIAAAGgAARAWIAMAAIAAgqIgMAAg");
	this.shape_1.setTransform(0.5,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAnIABgLIAAgVIAAgJIgEAGIgFgIQAIgIAEgOIACgMIAKADIgCAFIgGAPIAAArIABALgAglAnIABgKIAAg4IgBgIIAHAAIAMAAIAGAAIAEAEIAAABIgBABQgEALgFAKQAHAIAAAJQAAAJgFACQgCACgFAAIgCAAIAAgBQAAgEgCgEIAEABQAEAAAAgFQAAgGgCgDIgFgHIAHgUIgIAAIAAAoIAAAQIAAAKgAAKAmQAAgFgCgEIAKABQABAAABAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAgnIgJAAIgIAAIAAgJQADABAFgBIAJAAIAAgHIgBgKIAKAAIAAAKIAAAHIAHAAIAAAKIgHgBIAAAoQAAAFgCACQgCACgIAAIgJAAgAAEgCIAHgEQAFAIAEALIgHAFQgEgMgFgIgAgbANIAAAAg");
	this.shape_2.setTransform(-7.8,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAgIACgEQAFgIAEgOIAJAGQgFAOgGALIgBACgAAcAmIAAgEIggAAIAAAEIgKAAIABgJIAAgsIAAgIIAIAAIAMAAIAAgHIAAgIIAKAAQgBADAAAGIAAAGIANAAIAIgBIAAAKIAAAqIAAAKgAAQAZIAMAAIAAgQIgMAAgAgEAZIALAAIAAgQIgLAAgAAQAAIAMAAIAAgPIgMAAgAgEAAIALAAIAAgPIgLAAgAgkgJIAEgHQAIAEAIAGIgGAHQgHgFgHgFgAgigfIAHgGQAHAEAGAHIgFAIQgGgIgJgFg");
	this.shape_3.setTransform(-16.8,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAhQAFgEADgIIABgFIAIADQgDALgGAJgAAYASIAHgEQAFAJAEALIgIAFQgDgNgFgIgAALASIAIgBQADAHACAMIgIADQgCgMgDgJgAgBATIAHgCIADAVIgJABQAAgJgBgLgAgnAfQAEgFADgGQAFgJgBgfQAAgPgBgDIAKAAIgBATIAEgIIAFAGIgBABIgIAMIgBAQIAKANIgHAGIgFgJQgDAMgHAJQgDgGgDgCgAABAKQAHgFAEgHQADgEABgGIgDAAIgDAAQgDAIgFAHQgFAHgHAGQgCgEgEgDQAIgEAEgGIgGgDIgCACQgCgCgEgDQAIgIAEgMIACgLIAHABIgBAFIAAABIACAAIAFAAIAEADIgBAGIAAACIAFAAIAAgLIAAgGIAJAAQgBAAABAKIgBAHIAGAAIAIgBIAAAJIgIAAIgGAAQABAFAEAFQAEAFAGAFIgFAIQgKgJgEgKQgEAMgLAHIgFgGgAgGgKIABAAIAEAFIABgFIgEgEIgCAEgAgBgUIAEAEIACgHIgFAAIgBADgAgnAAQADgGgBgQIAHABQAAARgCAHgAAaggIAGgEIAHAKIgGAFQgCgGgFgFg");
	this.shape_4.setTransform(-25.2,13);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAnIAAgLIAAgOIABgKIgGANIgGAIQgCgFgDgDIAJgMIAGgLIAAAAIgGAAIgHAAIAAgJIAIAAIAGAAIAAgIIgLACQgBgFgCgEQAVgCAKgGIAFAIIAAABIgCAAIgBABIgKADIAAAKIAGAAIAGAAIAAAJIgGAAIgGAAIAAACQAIAFAFAIIgFAHIgIgLIAAAXIABALgAAdAlIAAgGIgRAAIAAAGIgKAAIABgKIAAgxIgBgJIAIAAIAUAAIAIAAIAAAJIAAAwIAAALgAAMAWIARAAIAAgsIgRAAg");
	this.shape_5.setTransform(-34.1,12.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAgQAPgHgBgUIgBAAIgFAAIAAgFIAAgPIAAgGIAGAAIABAAQgCgJgDgEIAHgEQAEAGADAHIgJAEIAPAAQAEgIACgJIAJADIgGAOIACAAIAHAAIAAAGIAAAPIAAAFIgHAAIgDAAIAAAXQgBAAABABQAAAAAAAAQABABAAAAQABAAABAAQAFACgBgOQAFADADAAQAAANgDACQgBACgKAAQgLABABgIIAAgaIgGAAQAAAMgDAHQgFAKgJAFQgCgDgEgEgAACgCIAYAAIAAgLIgYAAgAgZAnIAAgKIAAgPIAAgKQgCAKgIAJQgCgFgCgEQAGgGADgIIAEgHIgFAAQgEgBgCABIAAgJQACAAAEAAIAGAAIAAgJIgJABIgDgIQANAAAJgEIAEgDIAFAHIgCACIgIADIAAALIACAAIAHAAIAAAJIgHAAIgCAAIAAABQAGAGADAHIgFAHIgEgJIAAAYIAAAKg");
	this.shape_6.setTransform(-42.4,12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAlIgJAAIgCgJIAMABQAFABABgKIACgYIgCAAIgEAJQgFAMgJAJQgFAGgJAFIgHgGQAOgJAIgKQAEgGACgGIACgEIgFAAIgGAKQgEAGgIAGIgGgFIAAAGQgKAFgKAEIgEABIgCgJIAKgDIAAgaIgCAAIgHABIAAgJIAHAAIACAAIAAgLIgBgJIALAAQgCADABAGIAAALIADAAIAFAAIAAAJIgFgBIgDAAIAAAXIADgCIAEgCIAAACQALgIAEgIIgEAAIgGABIgCgIQAEgBAGgFIANgJIgNAAIgKABIAAgKQAFABAFAAIAQAAIAJgBIAEAGIgBABIAAABIgXAQIAIgBIAOAAIAJgBIgBAOQAAAlgMAAIgFgBg");
	this.shape_7.setTransform(-51.2,12.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNAgQAGgFACgHQAEgLAAggQAAgJgBgCIAHAAIAOAAIAIAAIAAAIIAAA2QAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIAAgRQADADAFABQAAARgCACQgBACgDABIgGABQgHgBgBgBQgCgBAAgGIAAg3IgLAAQAAAcgCAKQgCARgIAKIgIgHgAgZAnIABgJIAAgRIAAgMQgEALgGAIQgCgFgDgEQAJgKAEgPIgEAAIgHAAIAAgJIAHAAIAFAAIAAgIQABgEgBgDIAKAAQgBADAAAEIAAAIIAGAAIAFAAIAAAJIgFAAIgGAAIAAACIANAPIgHAIIgGgLIAAAeQAAAGABADg");
	this.shape_8.setTransform(-59.7,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATAnIAAgDIgmAAIAAADIgJAAIAAgHIAAgQIAAgHIAHABIAWAAIALgKIgfAAIgJAAIAAgHIAIAAIAjAAIAHAAIAFAEIgDADIgKAKIAJAAIAGgBIAAAIIAAAPIAAAHgAgTAcIAmAAIAAgKIgmAAgAAAgdQgGAIgKAGIgTAKQgBgFgDgEQAMgEAIgGQALgHAFgIIAJADIgBABQAGAHAGAEQAJAGAPAEIgEAGIgCADQgXgIgMgQgAgLgOIAEgHQAOAEAGACIgEAIQgJgFgLgCg");
	this.shape_9.setTransform(-68.2,12.8);

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


(lib.an = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABAdIAEgIQAWAGALAEIgDAJQgNgFgVgGgAglAgQARgCAIgFQAJgEgBgOIAIAAQAAAMgDADQgEAOgdAEQgCgFgDgDgAAUAYIAAgFIAAgPIglAAIAAAMIAAACIAAAGIgJAAIAAgJIAAgLIgHADIgBgCIgEgFQANgCAHgFIgJAAIgHAAQADgIABgJIAHABIALAAIAAgEIgNAAIgIAAIAAgHIAIABIAOAAIgBgGIAJAAIAAAGIAJAAIgBgGIAJAAIAAAGIAMAAIAIgBIgBAHIAAAEIAAAGIgHgBIgMAAIAAAEIARAAIAIAAIAAABIgBAFQAAAIgJAAIAAAQIAAAIgAAOgCIAJAAIgBgDIAFAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAgBAAAAIgPAAgAgMgCIASAAIAAgFIgNAAIgFAFgAgFgOIALAAIAAgEIgKAAIgBAEgAgXgQIAAACIAJAAIABgCIAAgCIgKAAIAAACgAAOgXIALAAIAAgEIgLAAgAgDgXIAJAAIAAgEIgJAAIAAAEg");
	this.shape.setTransform(9.2,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAeQAIgJAEgMQADgJAAgOIgEAAQgFgBgDABIAAgKIAJABIAEAAIAAgFIgBgKIALAAIgBAGIAAAJIAHAAIAJAAQgBAAABAPQgBAYgCALQgBAKgJgBIgJAAQAAgFgBgEIAIABQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQABgGABgPIAAgSIgIAAQgBAPgDAMQgEAOgJAMQgDgGgEgDgAAHAlIABgKIAAgvIAAgJIAHABIAQAAIAIgBIAAAJIAAAvIAAAJIgKAAIAAgFIgMAAIAAAGgAARAWIAMAAIAAgqIgMAAg");
	this.shape_1.setTransform(0.5,9.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAnIABgLIAAgVIAAgJIgEAGIgFgIQAIgIAEgOIACgMIAKADIgCAFIgGAPIAAArIABALgAglAnIABgLIAAg3IgBgIIAHAAIAMAAIAGAAIAEAEIAAABIgBACQgEAKgFAKQAHAJAAAIQAAAJgFACQgCACgFAAIgCAAIAAgBQAAgEgCgEIAEABQAEAAAAgFQAAgFgCgEIgFgHIAHgUIgIAAIAAAoIAAAQIAAAKgAAKAmQAAgFgCgEIAKABQABAAABAAQABAAAAAAQABgBAAAAQAAgBAAAAIAAgnIgJAAIgIABIAAgKQADABAFAAIAJAAIAAgIIgBgKIAKAAIAAAKIAAAIIAHgBIAAAKIgHgBIAAAoQAAAEgCADQgCADgIgBIgJAAgAAEgBIAHgFQAFAIAEALIgHAFQgEgMgFgHgAgbANIAAAAg");
	this.shape_2.setTransform(-7.8,9.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAgIACgEQAFgHAEgOIAJAFQgFAOgGALIgBACgAAcAmIAAgEIggAAIAAAEIgKAAIABgKIAAgrIAAgIIAIAAIAMAAIAAgHIAAgIIAKAAQgBAEAAAFIAAAGIANAAIAIgBIAAAKIAAAqIAAAKgAAQAZIAMAAIAAgQIgMAAgAgEAZIALAAIAAgQIgLAAgAAQAAIAMAAIAAgPIgMAAgAgEAAIALAAIAAgPIgLAAgAgkgJIAEgHQAIAEAIAGIgGAHQgHgFgHgFgAgigfIAHgGQAHAEAGAHIgFAIQgGgIgJgFg");
	this.shape_3.setTransform(-16.8,9.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAhQAFgEADgIIABgFIAIADQgDALgGAJgAAYASIAHgEQAFAKAEAKIgIAFQgDgNgFgIgAALATIAIgCQADAHACANIgIACQgCgNgDgHgAgBATIAHgCIADAVIgJABQAAgJgBgLgAgnAfQAEgEADgHQAFgIgBggQAAgPgBgDIAKAAIgBATIAEgIIAFAGIgBABIgIAMIgBAQIAKANIgHAGIgFgIQgDALgHAJQgDgGgDgCgAABAKQAHgFAEgHQADgEABgHIgDAAIgDAAQgDAJgFAHQgFAHgHAGQgCgEgEgCQAIgGAEgFIgGgDIgCACQgCgCgEgDQAIgIAEgMIACgLIAHABIgBAFIAAABIACAAIAFAAIAEADIgBAGIAAABIAFAAIAAgKIAAgGIAJAAQgBAAABAKIgBAGIAGAAIAIAAIAAAJIgIgBIgGAAQABAGAEAFQAEAFAGAFIgFAIQgKgJgEgKQgEALgLAIIgFgGgAgGgKIABAAIAEAFIABgFIgEgEIgCAEgAgBgUIAEAEIACgHIgFAAIgBADgAgnAAQADgGgBgQIAHABQAAARgCAHgAAaggIAGgEIAHALIgGADQgCgFgFgFg");
	this.shape_4.setTransform(-25.2,9.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAnIAAgLIAAgOIABgKIgGANIgGAIQgCgFgDgDIAJgMIAGgLIAAAAIgGAAIgHAAIAAgJIAIAAIAGAAIAAgIIgLACQgBgFgCgEQAVgCAKgGIAFAIIAAABIgCAAIgBABIgKADIAAAKIAGAAIAGAAIAAAJIgGAAIgGAAIAAACQAIAFAFAIIgFAHIgIgLIAAAXIABALgAAdAlIAAgGIgRAAIAAAGIgKAAIABgKIAAgxIgBgJIAIAAIAUAAIAIAAIAAAJIAAAwIAAALgAAMAWIARAAIAAgsIgRAAg");
	this.shape_5.setTransform(-34.1,9.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAgQAPgHgBgUIgBAAIgFAAIAAgFIAAgPIAAgGIAGAAIABAAQgCgJgDgEIAHgEQAEAGADAHIgJAEIAPAAQAEgIACgJIAJADIgGAOIACAAIAHAAIAAAGIAAAPIAAAFIgHAAIgDAAIAAAXQgBAAABABQAAAAAAABQABAAAAAAQABAAABAAQAFACgBgOQAFADADAAQAAANgDACQgBADgKgBQgLABABgIIAAgaIgGAAQAAAMgDAIQgFAJgJAFQgCgDgEgEgAACgCIAYAAIAAgLIgYAAgAgZAnIAAgKIAAgPIAAgKQgCALgIAIQgCgFgCgEQAGgGADgIIAEgHIgFAAQgEgBgCABIAAgJQACAAAEAAIAGAAIAAgJIgJABIgDgIQANgBAJgDIAEgDIAFAHIgCACIgIADIAAALIACAAIAHAAIAAAJIgHAAIgCAAIAAABQAGAGADAHIgFAHIgEgJIAAAYIAAAKg");
	this.shape_6.setTransform(-42.4,9.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAlIgJAAIgCgJIAMABQAFABABgKIACgYIgCAAIgEAJQgFAMgJAJQgFAGgJAFIgHgGQAOgJAIgKQAEgGACgGIACgEIgFAAIgGAKQgEAGgIAGIgGgFIAAAGQgKAFgKAEIgEABIgCgJIAKgDIAAgaIgCAAIgHABIAAgJIAHAAIACAAIAAgLIgBgJIALAAQgCADABAGIAAALIADAAIAFAAIAAAJIgFgBIgDAAIAAAXIADgCIAEgCIAAACQALgIAEgIIgEAAIgGABIgCgIQAEgBAGgFIANgJIgNAAIgKABIAAgKQAFABAFAAIAQAAIAJgBIAEAGIgBABIAAABIgXAQIAIgBIAOAAIAJgBIgBAOQAAAlgMAAIgFgBg");
	this.shape_7.setTransform(-51.2,9.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNAgQAGgFACgIQAEgKAAggQAAgJgBgCIAHAAIAOAAIAIAAIAAAIIAAA2QAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIAAgRQADADAFABQAAARgCACQgBACgDABIgGABQgHgBgBgBQgCgCAAgFIAAg3IgLAAQAAAdgCAJQgCARgIAKIgIgHgAgZAnIABgJIAAgRIAAgMQgEALgGAIQgCgFgDgEQAJgKAEgPIgEAAIgHAAIAAgJIAHAAIAFAAIAAgIQABgEgBgDIAKAAQgBADAAAEIAAAIIAGAAIAFAAIAAAJIgFAAIgGAAIAAACIANAPIgHAHIgGgKIAAAeQAAAGABADg");
	this.shape_8.setTransform(-59.7,9.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATAnIAAgDIgmAAIAAADIgJAAIAAgHIAAgQIAAgHIAHABIAWAAIALgKIgfAAIgJAAIAAgHIAIAAIAjAAIAHAAIAFAEIgDADIgKAKIAJAAIAGgBIAAAIIAAAPIAAAHgAgTAcIAmAAIAAgKIgmAAgAAAgcQgGAHgKAGIgTAKQgBgEgDgFQAMgEAIgGQALgGAFgJIAJADIgBABQAGAHAGADQAJAHAPAEIgEAGIgCADQgXgIgMgPgAgLgOIAEgHQAOAEAGACIgEAIQgJgEgLgDg");
	this.shape_9.setTransform(-68.2,9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("A3SGbIAAs1MAulAAAIAAM1g");
	this.shape_10.setTransform(-123.2,-11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

	// 图层 3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D81E05").s().p("AgpBLIAAgPQAKAEAKACQAIADAKAAQAJAAAKgFQAHgDABgHQgBgIgFgDQgLgHgKgEQgQgEgNgLQgHgJAAgKQAAgTARgIQgHgEgFgHQgFgGAAgIQABgNALgHQAOgJAQABIASACQAKABAJAFIgFAOQgJgEgJgBQgHgCgIAAQgIAAgJADQgFADAAAHQAAAGAFAEQALAGALAEQAPAEAMALQAIAIAAALQAAASgQAKQAVAMgHAXQgEAHgHAEQgQAKgRgBIgDAAQgSAAgQgIgAgSgQQgEAFgBAHQAAAEADAEQAEAEAFADQALAHAMADQAMgFABgOQAAgHgHgGQgMgIgNgEQgHACgEAFg");
	this.shape_11.setTransform(10.2,10.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.5,20.5);


(lib.xiaobiaoanniu2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.an2();
	this.instance.parent = this;
	this.instance.setTransform(3.9,7.9,1,1,0,0,0,10.2,10.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.an2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.1,-0.3,276.7,27.5);


(lib.xiaobiaoanniu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.an();
	this.instance.parent = this;
	this.instance.setTransform(3.9,7.9,1,1,0,0,0,10.2,10.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.an(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278.6,-55.2,298.2,82.3);


(lib.t2swf2 = function(mode,startPosition,loop) {
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
	this.p3.setTransform(137.7,27.8,0.99,0.99,0,0,0,-4,-29.1);

	this.p2 = new lib.n1();
	this.p2.name = "p2";
	this.p2.parent = this;
	this.p2.setTransform(112.4,27.8,0.99,0.99,0,0,0,-3.9,-29.1);

	this.p1 = new lib.n1();
	this.p1.name = "p1";
	this.p1.parent = this;
	this.p1.setTransform(87.1,27.8,0.99,0.99,0,0,0,-4,-29.1);

	this.p0 = new lib.n1();
	this.p0.name = "p0";
	this.p0.parent = this;
	this.p0.setTransform(61.9,27.8,0.99,0.99,0,0,0,-4,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p0},{t:this.p1},{t:this.p2},{t:this.p3}]}).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AgZCAQACgPgBgRIAAiXIgBgeIAbABIAnAAIAAgSQAAgNgCgMIAiAAQgCAKAAAPIAAASIAqAAIAbgBQgCAJAAAWIAACVQACAXgOADQgGAFgegBIgPAAQgCgSgGgNQASAEALgBQANABAAgIIAAgrIgWATQgPgugKgTQgHATgIARQgDAHgTAYQgMgRgIgIIAAA4IABAdgAAFAnQASgSAGgTQAKgWACgjIgkAAgABHgnIAGAOQAWAiAKAdIAAhdIgmAAIAAAQgAiGBWQAOAAAdgEIA8gMIAAAeQgWAGgkAFQgbAEgKAEgAiIAYQAMgDADgDIAEgFQAMgKAOgRIgqAEIgGgeQAIAAAIgMQANgUAGgOIAIgRIAIgXIAjANIgHALIgLAVIgNAWIgMAUIAZgBIAPgaIAfAOQgOAXgTAWQgPARgNAMIATgCIAmgGIgDAdIgZADIgiAEIgbAEIgLABg");
	this.shape.setTransform(78.8,7.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AggB+QgRgBgJgCQgkgEADglIAAhaIgPADIgdAHIgEgfQANgBARgEIASgDIAAgmQAAgSgBgNIAkAAQgCAMAAATIAAAeIAygMIAAglQAAgUgCgLIAjAAQgBAKAAAUIAAAfIA/gOQAQgEAPgFIgBAnIgDApQgEAogKAHQgJAKgWgBIgbgBQgBgPgHgPQAQAEANAAQAPAEABghQADgVAAgVIg6AOIAABFQAAAUABALIgjAAQACgKAAgXIAAg7IgyALIAABgQgBAMAKACQAFAEBBAAQAtAAAPgCQAPgCADgGQAHgIAAggQAUAKAOACQgDAngNAMQgJAKgTADQgLADg/AAIg2gBg");
	this.shape_1.setTransform(48.4,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AgPCCQACgNgBgRIAAhvIAAgEIgOAPQgJgPgNgJQAbgXAUgnQALgWAFgVIAhAIIgIASIgKAVIAsAAIgOgWIgGgJIAcgNQAQAWALAWIABAAIAfgCIAAAeQgKgBgVAAIgVAAIAAAeIAUAAQASAAAHgCIAAAbIgZAAIgUAAIAAAeIAUAAIAZgBIAAAbIgZgBIgUAAIAAAiIAZAAQAVAAAJgCIAAAeQgLgCgUAAIheAAIAAAPgAARBZIAnAAIAAgiIgnAAgAARAeIAnAAIAAgeIgnAAgAARgZIAnAAIAAgeIgnAAgAiLBXQAqgCBHgPIAAAeIgbAGIg3AJQgNADgJADgAiMAZQAMgDAGgGIAPgQIAPgRIgIAAIgjACIgGgbQAKgCAGgIIATgkQAKgVAFgPIAgAKIgEAIIgVAnIgPAZIAYgBIANgXIAfAMIgJAMQgWAigdAdIA7gHIgDAbQgkAGgtAEIgRACg");
	this.shape_2.setTransform(18.2,6.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("AhIA4IALgJQAJgHADgBIAAgiIgJAAIgKABIAAgQQAEABAHAAIANAAQAHAAAEgBQgBAGAAAKIAAAhQACgCAHAIQAHAJAkgCQAeAAAZgCQgDAHgCAKIg1ABQgZAAgKgCQgIgBgJgKIgFgBQgDgCgHAJIgJAJgAgKAjQARgGAPgPIgWgQIAJgJQAMAHALAIQAIgKAFgKIguAAQgCAUgDAQQgEAMgHANQgGgGgJgHQAIgKACgNQAGgTAAghIgBgQIAFAAIAygFIASgFIALAPIgIABQgXAHglABIABAFQgBABAAAJIAsAAIANgBIAIAIQgCADgBAFQgGAPgKAMIAWATIgLANQgJgJgMgKQgOAOgVAKIgKgOgAhFg3IAMgLQARAPAKANIgNAMQgLgRgPgMg");
	this.shape_3.setTransform(173.6,57.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("Ag1BIIABgSIAAggIAAgNQgDAFgIAGIgIgQQAYgRAKgUIAOAJIgDADQgDAHgHAHIAAA+IAAARgAA2BCIhAAAQgMAAgHABIAAgRIATAAIAWAAIAAgfIgPAAIgRAAIAAgRQAFACAMAAIAPAAIAAgcIgSAAIgRABIAAgBIAAgQIARAAIAfAAQgMgLgRgJIALgLQAQAHARAOIgMAKIAYAAQALABAGgBIAAARIgRgBIgYAAIAAAcIAUAAQAKAAAGgCIAAARIgQAAIgUAAIAAAfIAaAAIARAAIAAARQgHgBgKAAgAgXgYgAhGgpQAMgHAJgIQAIgIAEgHIAOAKIgGAHQgPAPgRALQgDgHgGgGg");
	this.shape_4.setTransform(157.7,57.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("AhHA5QAMgWAAgfIAAgEIAQACIgBAOIgCAIQAEAGAGAGIAAgpIgOAAIgQAAIAAgQIAQABIAMAAIAAgPIgJAAQgJAAgFABIAAgQIAOABIAJAAIAAgEQAAgKgCgEIASAAIAAAOIAAAEIAHAAIAPgBIAAAQQgGgBgJAAIgHAAIAAAPIAJAAIAOgBIAAAQIgOAAIgIAAIAAAOIAJAAIAMAAIAAAQIgMgBIgJAAIAAAWQAKAFAZAAQAoAAASgEQgDAHgCAKIgPABIgjAAQgSAAgOgCQgWgEgMgSQgDAPgHAMQgEgIgIgDgAAKAmQgFgCABgLIAAgeIgBgRIAPABIAZAAIAAgYIgaAAIgPAAIAAgPIAQABIAaAAIAPgBIgBAOIAAAYIABAQQgFgCgLAAIgXAAIAAAdIAAAEQACABAJAAQAPAAACgDQACgCAAgHIAAgKQAJAEAHABQgBAVgCAFQgEAEgGABIgXABIgGAAQgOAAgCgDg");
	this.shape_5.setTransform(172.9,38.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("AhEAzQAYgJAIgRQAGgNAAgYIgTAAIgRABIAAgSIARABIBjAAIARgBIAAASIgRgBIgaAAIAAA1QgBAHANgBQAPgBAAgFIACgVQAHAFAJAAQgCAbgFADQgCAIgbgBQgRABgEgFQgFgCABgHIAAg9IgVAAQAAAcgIASQgHAOgMAJQgEAEgMAFQgFgJgHgGgAAlgwIhJAAIgPABIAAgSIAPABIBJAAIAPgBIAAASIgPgBg");
	this.shape_6.setTransform(158.2,38.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D81E05").s().p("AgIBHQABgIABgMIAAg+IgiAAIAAAqIABATIgSAAIABgTIAAgqIgBgPIAOAAIAlAAIAAgTIgHABIgsABQgCgKgDgGIAKAAQA4gBAigGQAHgBAJgDIAKARIgKABQgRAEgcACIAAAUIAmAAIAPAAQgCAFAAAKIAAArQACASgXgBIgRgBQAAgJgDgHQAMACAHAAQAHAAgBgFIAAgoIgjAAIAAA+IABAUg");
	this.shape_7.setTransform(41.7,38.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D81E05").s().p("AAuBDQgQgBgSgVQgKgPgFgTIgmAAIAAAiQAYgGAQgFIABARQgEAAggAKIgXAGIgFgRQAGgCgBgHIAAhYIgBgTIATABIBJAAIASgBIgBAQIAAARIABAOIgRgBIgZAAIACARIAgAAIASgBIAAAQQgIgBgKAAIgcAAQAFAPALAMQAJAJAFAAQACACAEgXQAHAGAIADQgFAggNAAIgBAAgAgpgDIAjAAIgCgRIghAAgAgpgiIBJAAIAAgQIhJAAg");
	this.shape_8.setTransform(26.9,38.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D81E05").s().p("AAUAhQgNgQgGgYQgEAPgIAOQgIARgQAOQgJAIgPAJQgEgKgIgGQAVgLANgOQAdggAAg1IgBgNIASAAIgBAOQAAAlAQAZQAIAQAQANQAMAKAMAHQgIAHgEAKQgagSgOgTg");
	this.shape_9.setTransform(10.4,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.3,-6,215.7,82.8);


(lib.t2swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.num = num_blg? num_blg:0;
		this.nums = [Math.floor(this.num/1000)%10, Math.floor(this.num/100)%10,Math.floor(this.num/10)%10, this.num%10];
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AhEBpQAtgJAcgPQAegOAXgYQAOgQALgVIACgGIABgDIAVAKQgKgsgagzIAegLQAWAoARA1IgeAOIAJADQgVAlgXAZQgXAXgdAQQgcAOguALQgFgRgMgPgAiJBtQAKgJAMgZQAMgZAJgeIAbAUQgLAlgPAeIgPAbgAASAqQACgPAAgNIAAh0QAAgWgCgLIAmAAQgCAMAAAVIAAB2IACAagAhFAPQAPgaAIgYQAHgXAGgoIAgAJQgHAsgHAaQgJAYgPAeQgNgMgRgIgAiLgmIATgaQAdARAXAUIgSAbQgbgXgagPgAh9hwIAVgYQAcASAZAXIgVAaQgXgXgegUg");
	this.shape.setTransform(47.3,6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AgSCMQACgSAAgSIAAgfIhOAAQgRAAgUACIAAgjQANACAYAAIBOAAIAAgOIgBgPIAAgCIAjAAIgBARIAAAOIBTAAQAWAAANgCIAAAjQgTgCgSAAIhRAAIAAAfQAAASACASgAhYAOIABgaQAAgXABgNQgOARgWAQQgFgPgJgPQAcgUAVgbQATgaAHgUIAhAMIgKARIgBABIgEAGIgNAVIAABDQAAASABAKgAAFABQgGgDgDgGQgCgHAAgNIAAgRIgYAEQgDgPgIgOIAjgFIAAgVQAAgZgCgMIAiAAQgCAMAAAXIAAAQQAugNAigYIAXAcQgwAZg3AOIAAAQQAAAJAGABQAFADAWAAQAlAAAGgEQADgDABgGIACgaQAOAHARAEQgDAcgFALQgFALgMADQgIAEgWABIgZABQgpgBgLgGg");
	this.shape_1.setTransform(17.1,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_4
	this.p3 = new lib.n1();
	this.p3.name = "p3";
	this.p3.parent = this;
	this.p3.setTransform(137.7,27.8,0.99,0.99,0,0,0,-4,-29.1);

	this.p2 = new lib.n1();
	this.p2.name = "p2";
	this.p2.parent = this;
	this.p2.setTransform(112.4,27.8,0.99,0.99,0,0,0,-3.9,-29.1);

	this.p1 = new lib.n1();
	this.p1.name = "p1";
	this.p1.parent = this;
	this.p1.setTransform(87.1,27.8,0.99,0.99,0,0,0,-4,-29.1);

	this.p0 = new lib.n1();
	this.p0.name = "p0";
	this.p0.parent = this;
	this.p0.setTransform(61.9,27.8,0.99,0.99,0,0,0,-4,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p0},{t:this.p1},{t:this.p2},{t:this.p3}]}).wait(1));

	// 图层 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AhIA4IALgJQAJgHADgBIAAgiIgJAAIgKABIAAgQQAEABAHAAIANAAQAHAAAEgBQgBAGAAAKIAAAhQACgCAHAIQAHAJAkgCQAeAAAZgCQgDAHgCAKIg1ABQgZAAgKgCQgIgBgJgKIgFgBQgDgCgHAJIgJAJgAgKAjQARgGAPgPIgWgQIAJgJQAMAHALAIQAIgKAFgKIguAAQgCAUgDAQQgEAMgHANQgGgGgJgHQAIgKACgNQAGgTAAghIgBgQIAFAAIAygFIASgFIALAPIgIABQgXAHglABIABAFQgBABAAAJIAsAAIANgBIAIAIQgCADgBAFQgGAPgKAMIAWATIgLANQgJgJgMgKQgOAOgVAKIgKgOgAhFg3IAMgLQARAPAKANIgNAMQgLgRgPgMg");
	this.shape_2.setTransform(173.6,57.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("Ag1BIIABgSIAAggIAAgNQgDAFgIAGIgIgQQAYgRAKgUIAOAJIgDADQgDAHgHAHIAAA+IAAARgAA2BCIhAAAQgMAAgHABIAAgRIATAAIAWAAIAAgfIgPAAIgRAAIAAgRQAFACAMAAIAPAAIAAgcIgSAAIgRABIAAgBIAAgQIARAAIAfAAQgMgLgRgJIALgLQAQAHARAOIgMAKIAYAAQALABAGgBIAAARIgRgBIgYAAIAAAcIAUAAQAKAAAGgCIAAARIgQAAIgUAAIAAAfIAaAAIARAAIAAARQgHgBgKAAgAgXgYgAhGgpQAMgHAJgIQAIgIAEgHIAOAKIgGAHQgPAPgRALQgDgHgGgGg");
	this.shape_3.setTransform(157.7,57.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("AhHA5QAMgWAAgfIAAgEIAQACIgBAOIgCAIQAEAGAGAGIAAgpIgOAAIgQAAIAAgQIAQABIAMAAIAAgPIgJAAQgJAAgFABIAAgQIAOABIAJAAIAAgEQAAgKgCgEIASAAIAAAOIAAAEIAHAAIAPgBIAAAQQgGgBgJAAIgHAAIAAAPIAJAAIAOgBIAAAQIgOAAIgIAAIAAAOIAJAAIAMAAIAAAQIgMgBIgJAAIAAAWQAKAFAZAAQAoAAASgEQgDAHgCAKIgPABIgjAAQgSAAgOgCQgWgEgMgSQgDAPgHAMQgEgIgIgDgAAKAmQgFgCABgLIAAgeIgBgRIAPABIAZAAIAAgYIgaAAIgPAAIAAgPIAQABIAaAAIAPgBIgBAOIAAAYIABAQQgFgCgLAAIgXAAIAAAdIAAAEQACABAJAAQAPAAACgDQACgCAAgHIAAgKQAJAEAHABQgBAVgCAFQgEAEgGABIgXABIgGAAQgOAAgCgDg");
	this.shape_4.setTransform(172.9,38.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("AhEAzQAYgJAIgRQAGgNAAgYIgTAAIgRABIAAgSIARABIBjAAIARgBIAAASIgRgBIgaAAIAAA1QgBAHANgBQAPgBAAgFIACgVQAHAFAJAAQgCAbgFADQgCAIgbgBQgRABgEgFQgFgCABgHIAAg9IgVAAQAAAcgIASQgHAOgMAJQgEAEgMAFQgFgJgHgGgAAlgwIhJAAIgPABIAAgSIAPABIBJAAIAPgBIAAASIgPgBg");
	this.shape_5.setTransform(158.2,38.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("AgIBHQABgIABgMIAAg+IgiAAIAAAqIABATIgSAAIABgTIAAgqIgBgPIAOAAIAlAAIAAgTIgHABIgsABQgCgKgDgGIAKAAQA4gBAigGQAHgBAJgDIAKARIgKABQgRAEgcACIAAAUIAmAAIAPAAQgCAFAAAKIAAArQACASgXgBIgRgBQAAgJgDgHQAMACAHAAQAHAAgBgFIAAgoIgjAAIAAA+IABAUg");
	this.shape_6.setTransform(41.7,38.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D81E05").s().p("AAuBDQgQgBgSgVQgKgPgFgTIgmAAIAAAiQAYgGAQgFIABARQgEAAggAKIgXAGIgFgRQAGgCgBgHIAAhYIgBgTIATABIBJAAIASgBIgBAQIAAARIABAOIgRgBIgZAAIACARIAgAAIASgBIAAAQQgIgBgKAAIgcAAQAFAPALAMQAJAJAFAAQACACAEgXQAHAGAIADQgFAggNAAIgBAAgAgpgDIAjAAIgCgRIghAAgAgpgiIBJAAIAAgQIhJAAg");
	this.shape_7.setTransform(26.9,38.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D81E05").s().p("AAUAhQgNgQgGgYQgEAPgIAOQgIARgQAOQgJAIgPAJQgEgKgIgGQAVgLANgOQAdggAAg1IgBgNIASAAIgBAOQAAAlAQAZQAIAQAQANQAMAKAMAHQgIAHgEAKQgagSgOgTg");
	this.shape_8.setTransform(10.4,38.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-10.1,218.9,86.9);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// biankuang
	this.instance = new lib.biankuang();
	this.instance.parent = this;
	this.instance.setTransform(135.9,110,1,1,0,0,0,135.9,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(900));

	// anni
	this.instance_1 = new lib.xiaobiaoanniu2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(283.6,232.3,1,1,0,0,0,4,8);

	this.instance_2 = new lib.xiaobiaoanniu();
	this.instance_2.parent = this;
	this.instance_2.setTransform(283.6,232.3,1,1,0,0,0,4,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},136).wait(764));

	// t7
	this.instance_3 = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(244.6,26.7,0.649,0.649,0,0,0,74.4,8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(165).to({_off:false},0).to({alpha:1},4).wait(731));

	// t5
	this.instance_4 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(116.7,209.9,0.855,0.855,0,0,0,100.8,26.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150).to({_off:false},0).to({alpha:1},4).wait(746));

	// t4
	this.instance_5 = new lib.yuding();
	this.instance_5.parent = this;
	this.instance_5.setTransform(133.1,171.7,1,1,0,0,0,100.9,25);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;
	new cjs.ButtonHelper(this.instance_5, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(137).to({_off:false},0).to({alpha:1},4).wait(759));

	// t2
	this.instance_6 = new lib.t2swf2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(123.9,169.8,1.064,1.064,0,0,0,88.3,19.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(99).to({_off:false},0).to({alpha:1},7).wait(24).to({y:64.8},6,cjs.Ease.get(1)).wait(764));

	// t2
	this.instance_7 = new lib.t2swf();
	this.instance_7.parent = this;
	this.instance_7.setTransform(123.9,169.8,1.064,1.064,0,0,0,88.3,19.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42).to({_off:false},0).to({alpha:1},5).wait(47).to({alpha:0},4).to({_off:true},1).wait(801));

	// t1
	this.instance_8 = new lib.t1swf("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(87.6,182.6,1.378,1.378,0,0,0,41.6,23.9);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({_off:false},0).to({alpha:1},4).wait(26).to({startPosition:0},0).to({alpha:0},5).wait(858));

	// baidi
	this.instance_9 = new lib.baidi();
	this.instance_9.parent = this;
	this.instance_9.setTransform(136,182.9,0.907,0.882,0,0,0,150,62.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({_off:false},0).to({alpha:1},4).wait(124).to({regY:62.8,scaleY:1.76,y:128},6,cjs.Ease.get(1)).wait(764));

	// bg
	this.instance_10 = new lib.bg();
	this.instance_10.parent = this;
	this.instance_10.setTransform(185.9,182.1,1.673,1.673,0,0,0,136,110);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1,scaleY:1,x:136,y:110},37,cjs.Ease.get(1)).wait(863));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(108.4,123,501.9,418.3);
// library properties:
lib.properties = {
	id: 'A04660999FA549CA9888483F8A0E5B7B',
	width: 300,
	height: 250,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/bj.jpg", id:"sujet"}
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
an.compositions['A04660999FA549CA9888483F8A0E5B7B'] = {
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