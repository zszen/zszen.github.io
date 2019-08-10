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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);// helper functions:

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
	this.shape.setTransform(13.1,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D91F05").s().p("Ag9BiIAAgVIAMAAQAOAEgBggIAAhfQAAgWgQAAIgKgBIAAgZIA4AAIADAYIACgCQAVgZAZAAQAKAAAIADIAAArQgPgJgUABQgRABgLANIAABeQAAAfAKgEIAXACIAAAUg");
	this.shape_1.setTransform(85.7,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D91F05").s().p("AgrBiIAAgVIANgCQAPADgDgeIAAhfQABgVgQAAIgJgCIAAgUIA9gHIAACRQgCAgAMgFIAPACIAAAVg");
	this.shape_2.setTransform(99.5,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D91F05").s().p("AA7BkQgZAAgHgVIAAgCIgCACQgHAPgqAGQhBgIAHgtQAEhABkACIABAAIAAgRQACgngfABQgagBgcANIgCABIgIgWIACgBQAXgRAtgDQA9gBgCBEIAABaQgCASAPgBIALABIAAAVQgKAFgLAAIgDgBgAgqAsQAEAfAZgDQAigCACghIAAgcIgCAAIgCAAQhBAAAEAjg");
	this.shape_3.setTransform(114.2,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D91F05").s().p("AgUBiQgigBgLgVQgMgVABgZIAAhQQAAgWgQAAIgKgCIAAgYIA/AAIAAB9QAAAnAgAAQAUAAAZgQIABAAIAAhkQAAgWgQAAIgKgCIAAgYIA/AAIAACUQgBAWARAAIALABIAAAVIg4AAIgFgXIgBABQgeAbgeAAIgBgBg");
	this.shape_4.setTransform(36.3,18.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D91F05").s().p("AgiBEIAAh1IgbAAIAAgaIAdAAIAMgtIAWAAIAAAtIAvAAIAAAaIgvAAIAABwQABAhATgEQAOAAAPgHIACgBIAJAUIgBABQgPANgkADIgBAAQgrAAAAg1g");
	this.shape_5.setTransform(71.1,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D91F05").s().p("AgWAAQAAgVAWAAQAWAAABAVQAAAWgXAAQgWgBAAgVg");
	this.shape_6.setTransform(99,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D91F05").s().p("AASBiIAAgVIAMgBQAMADgCgcIAAhOQAAgmghAAQgVABgaAPIAAAAIAABiQgCAeANgDIAMABIAAAVIhWAAIAAgVIANgBQAPADgCgeIAAhfQAAgWgQAAIgIgBIAAgZIA2AAIADAYIACgCQAUgWApgDQA6AAAABDIAABPQgCAdAOgCIAPABIAAAVg");
	this.shape_7.setTransform(135.1,18.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D91F05").s().p("AgGBkQgsgCgSgMIAAg0IAbAAIAEAaQgCANAjABQAgAEAFghQgDgbgggEIgLgDQgugEgHgwQADg4BEgDQAjABAWAMIAAAwIgaAAIgGgWQACgLgcgBQgkAAAAAZQAEAXAgAGIAKADQAvAEAIAxQgBAjgXAOQgWAPgbAAIgCgBg");
	this.shape_8.setTransform(55.9,18.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D91F05").s().p("AgKgKIAKgFQAHAPAEALIgLAFQgEgNgGgNg");
	this.shape_9.setTransform(65.8,41.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D91F05").s().p("AgiAIQAigMAWgTIANALQgZAVgiAPg");
	this.shape_10.setTransform(86.3,42.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D91F05").s().p("AgkBQQAQghgCgnIgNAAIAAgNIANAAIAAg8IARAAQAEgMABgLIARADIgHAUIAbAAIAACFQAAAMgGAEQgHADgRgBQgBgHgEgIIAQAAQABAAABAAQAAAAABAAQAAgBAAAAQAAgBAAgBIAAg8IgbAAQABAsgRAlQgHgFgHgEgAgGgFIAbAAIAAgtIgbAAg");
	this.shape_11.setTransform(65.2,44.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D91F05").s().p("Ag0AvQAYgegEggIAAgpIA9AAIAABWQAAAHABABIACABIAEAAIADgBIACgFIAAgVQAFAEAHACQgBAQgBAJQgCAGgDACQgEADgGAAIgJAAQgGAAgEgEQgFgCABgSIAAhGIgcAAIAAAZQADAmgaAiQgGgGgIgEg");
	this.shape_12.setTransform(74.2,47.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D91F05").s().p("AgigJIALgNQAgAQAaAPIgMAOQgXgQgigQg");
	this.shape_13.setTransform(95.4,42.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D91F05").s().p("AhQAmIAAgQIBHAAIAAgrIgyAAIAAgQIB3AAIAAAQIgzAAIAAArIBIAAIAAAQg");
	this.shape_14.setTransform(90.8,48.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D91F05").s().p("AhRAiIAAgrIBKAAIgIgTIASgFIAKAYIBFAAIAAAnIgTAAIAAgYIh+AAIAAAcg");
	this.shape_15.setTransform(90.8,39);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D91F05").s().p("AgLgLIALgFQAHAQAFAMIgMAFQgCgOgJgOg");
	this.shape_16.setTransform(65.9,47.6);

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
	this.shape_21.setTransform(55.3,44.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D91F05").s().p("AgvAYIAAgPIAoAAQgFgNgGgOIARgFIALAbIgNAFIAzAAIAAAPg");
	this.shape_22.setTransform(74.2,37.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D91F05").s().p("AAxA1IAAhKIhiAAIAABKIgQAAIAAhZIAzAAIAGgQIASADIgGANIA/AAIAABZg");
	this.shape_23.setTransform(8.8,41);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D91F05").s().p("AgQgDIAJgJIAYAQIgJAJQgJgIgPgIg");
	this.shape_24.setTransform(11.4,44.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D91F05").s().p("AgFBXIAAhLQgPAfgSATQgEgIgGgJQAYgYAPgjIgjAAIAAgRIAnAAIAAgcIgjAFIgFgNQAtgHAggMIANANQgPAGgSAEIAAAgIAlAAIAAARIglAAIAAAGIAjAgIgKAPIgZgcIAABMg");
	this.shape_25.setTransform(45.8,44.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D91F05").s().p("AgIA1IAAhpIARAAIAABpg");
	this.shape_26.setTransform(52.9,43.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D91F05").s().p("AgoA5IAAg4IgOAGIgHgPIAVgIIAAgzIAQAAIAAAsIAWgJIAAg1IAQAAIAAAtIAUgIIAHgGIAMAFIgBADQABA3gCAOQgBAMgJACQgJACgJAAQgCgJgDgGIALAAQAFAAAAgFQACgGAAgsIgWAKIAABEIgQAAIAAg9IgWAJIAAA+QgCAOARgBIApAAQAOADAAgdQAHAFAIACQAAAlgcgCIgrAAIgFAAQgcAAADgdg");
	this.shape_27.setTransform(32.1,44.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D91F05").s().p("AggA3IAZgKIAAg5IgYAAIAAgRIAYAAIAAgrIAQAAIAAArIAVAAIAAARIgVAAIAAAyIAUgIIAEAPIg6Acg");
	this.shape_28.setTransform(23.7,43.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#94292B").s().p("AAHAVIhVgMQAAAAgBgBQAAAAAAAAQAAAAAAgBQABAAAAAAIAGgCQArgKArgKIAKgDQArgHAMAUQADAJgGANIABgCQADgHgDgEQgKgKg7Abg");
	this.shape_29.setTransform(164.1,9.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D91F05").s().p("Aj6B+IA3gqQBnhUAZgnQAJgPgFgLQgMgVgrAIQCygoC9gJQAAAAABAAQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAABAAAAQjtBNi3CfIAAAAIhPAOQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_30.setTransform(178.4,15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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


(lib.t1swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("Ag7BVQARgQAIgVQALgcAAg4IAAgnQAAgPgCgLIAbAAQgBAIAAASIAAAjIAOgHQAJAVAEANIAAg4QABgSgCgGIAbAAQgCAIABAQIAAAeIANgHQALATAGAPIAAg+QAAgTgCgIIAdAAQgCAKAAAQIAACVQAAARACAKIgdAAIACgbIAAhEIgPAIQgGgVgJgTIAABcQAAAPABAKIgbAAQABgLAAgOIAAg5IgOAHQgDgPgDgGIgHgVQgBAzgJAdQgGASgIANQgFAGgLAMQgJgMgLgGgAhsBUQARgTANgyIAVAOQgHAdgLAVIgEAIIgHAOgAg+ALQAHgNAEgNQADgMAAgTIAWAEQgCAXgDAMQgDAMgGAPgAhZgPIgUgOIAQgSQAVAMARAQIgQATQgLgKgHgFgAhmhVIARgRQAYAOAQAQIgSATQgRgTgWgNg");
	this.shape.setTransform(84,28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AA6BFQgNgUgFgTQgDAWgOAUQgNATgUAOQgJgNgGgFQgEgBgEABIgzAAQgOgBgLACQABgIAAgOIAAiIIgBgUIAWAAIA7AAQAOABAKgCIAAAYIgXgBIg4AAIAABwQATgVAKgXQgNgPgPgOIAOgTIAJAJIAOAPQAFgRACgVIAYAHIgHAeIgGAVIAMAOIAOAUIgQAUIgNgUIgHgLQgMAYgSAUQgIgLgIgGIAAATIAyAAQANAAAGgBIAAALQAOgMAJgOQAQgcABgsIgBgNIAaAAIAAAHQAAAcAHAVQAHAVAQAQQALALASANQgJALgGANQgZgTgMgRgAA6gGQAOgTAGgYIgxAAQgLAZgQAXQgIgKgLgHQAQgTAJgcQAIgXABgQIAdAEQgBAAgFAQIgEANIAoAAQAMABAHgCIAMAMIgGATQgGAWgPAZQgMgHgKgFg");
	this.shape_1.setTransform(60.9,28.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AhzBSQAAAAARgNQAOgLAFgCIAAgwIgNAAQgJgBgHACIAAgXIATABIASAAIASgBQgBAIABAPIAAAvQABgBAMAKQAJAHAOADQANACAfAAQAzAAAngFQgHAMgBAOIhVACQgpAAgPgEQgMgCgQgOIgGgDQgGAAgNAMIgMANgAgQAzQAcgKAXgUQgUgOgQgJIANgPQAWALARALQANgOAGgPIhKAAIgDAbQgCAQgDALQgEARgNATQgIgKgNgJQAMgOAEgUQAHgdAAgvQAAgOgBgKIAJABQAOAAAXgDQAWgCASgDQATgCALgFIATAWIgMACQgnAIg6AEIAAAGIgBAOIBFAAQAPAAAIgCIAMANIgGALQgIAXgPASIAjAcIgSASQgPgOgTgPQgWAVghAQQgHgNgJgIgAhthQIAUgQQAZAUAQAUIgUARQgTgYgWgRg");
	this.shape_2.setTransform(35.9,28.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("AhVBpQACgLgBgPIAAgtIABgVQgHAIgLAJQgGgQgGgIQAmgZAPgdIAVANIgCAEIgRAVIAABaIABAZgABVBgIhoAAIgcABIAAgZQANABAPAAIAlAAIAAguIgZAAIgbABIAAgYIAbABIAZAAIAAgoIgcAAIgbABIAAgZQAKABARAAIAxAAQgSgSgcgMIATgPQAOAFALAHQAKAGAQAMIgSAPIAlAAQARAAALgBIAAAZIgcgBIglAAIAAAoIAeAAIAbgBIAAAYIgbgBIgeAAIAAAuIAoAAQAPAAANgBIAAAZIgcgBgAhvg9QASgKAPgMQANgKAGgLIAWAPIgKAJQgYAYgaAQQgGgMgIgJg");
	this.shape_3.setTransform(11.4,28.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("Ag5BTQAWgMAIgOQAMgTgBgmQABgNgBgHIAcAAIgBAUQAAAugOAYQgLAUgYAPQgHgNgMgJgAhWBmQABgLAAgPIAAg9IAAgIIAAgRQgGALgNANQgEgPgHgNQAbgYARgkQAHgOACgOIAdAHIgEAIQgKAZgMAUIAAAQQAYgMAPgOQAWgTAPghIAbAFIgEAHQAWAoA2AbQgJAJgFAPIgOgIQgMgIgSgQQgPgOgQgYQgRAZgTARIgPAMIgWAQQgGgPgHgIIAABlQAAAQABAJgAArBmQABgLAAgQIAAhIQAAgOgBgJIAeAAQgCAHAAAQIAABIQAAAPACAMg");
	this.shape_4.setTransform(84.5,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("AhGBoQABgJABgRIAAgtIgJADIgQAGIgKADIgGgZIAOgDIAbgIIAAgtIgPAAQgDASgGAPQgJgGgMgEQAMgeABgkIgBgGIAYADQgBADAAAGIgBAPIALAAIAAgbQAAgKgCgIIAcAAIgBASIAAAbIACAAQAMAAAHgCIAAAYIAWABIAcAAIAAgWIgVAAIgYABIAAgYIAYABIAVAAIAAgHQAAgJgCgIIAdAAQgCAHAAAKIAAAHIAbAAIAZgBIAAAYIgZgBIgbAAIAAAWIAhAAQASAAAKgCIAAAZQgMgCgOAAIgBAAIAAASIACAAQAQAAAIgBIAAAZQgKgCgOAAIgCAAIAAA2QADAXgogCIgUAAQgBgPgFgKQATADAJgBQALABgCgHIAAguIg/AAQgNAAgKACIAAgLIgSAIIAAA1IABAagAgWADIAXABIA8AAIAAgSIg9AAQgRAAgKACIAAgXIgMgBIgEAAIAAAmIAVgHgAgPAoIATgMQASAOAOAUIgVAPQgMgUgSgRg");
	this.shape_5.setTransform(59.8,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("AgqBSQArgIAbgUQASgMAKgLIgcAAQACgLAAgLIAAhWIgCgZIAcAAQgBAKAAAPIAABXIABAUQAOgPAEgPIAYAMIgIAMQgLARgMAMQgjAlg7APQgGgOgJgJgAhwBSQAbgQAOgYIgTgMIgQgJQAMgZAGgkIgFAAQgIgBgJACIAAgZQAJACALAAIAGAAQAEgZAAgRIAbACIgDATIgEAVIARAAIAWgBIgBAGIgCAVIgCAUQgGAdgJAVQAPAKAKAJIgOAYQgKgMgMgIQgPAXgbAVQgHgLgLgIgAhHgJIgHAVIASAKQAKgXADgnIgQAAIgIAfgAgaAGQAUgdADgxIAXAFIgFAeIgEARQgFAWgMAWQgHgJgNgJgABAhDIAWgHIAQAnIAKAiIgaAHQgGgkgQglg");
	this.shape_6.setTransform(35.8,1.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D81E05").s().p("AgCA6QgZAnhIAJQgEgMgIgKQA4gDAZgZIg2AAQgPAAgLABIAAgYIAaABIBDAAIACgLIgBgBIAcAAIgBACIgCAKIBIAAIAbgBIAAAYQgMgBgPAAIg3AAQAYAWA+AEQgIAMgEAMQhNgJgZgngABBAbIAAhaIiDAAIAABFQAXgHAMgMIgLAAQgMgBgHABIAAgUQAFABAOABQgEgKgKgKIATgIQAJAJAFAKIgRAJIAbAAIAAgOQAAgHgCgGIAZAAQgCAFABAIIAAAOIAaAAIgQgHQAJgLAFgKIAUAGQgJAOgHAIIAFAAIASgBIAAATIgSAAIgbAAQARAFAZANIgMASIgRgLIgUgLIAAAHIABAJIgXAAIABgKIAAgEIABgKQgRAUgZAKQgFgJgHgHIAAAUIgbAAIABgRIAAhNIgBgRIAaABIAnAAQAGgJAGgNIAbADIgLATIBDAAIAZgBQgCAHABAKIAABNQgBAKACAHg");
	this.shape_7.setTransform(11.5,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-9.2,96.6,54.6);


(lib.liswf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
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

	// 图层 2
	this.instance = new lib.sujet();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(0,0,300,600), null);


(lib.baiidi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A3bT6MAAAgnzMAu3AAAMAAAAnzg");
	this.shape.setTransform(150,72.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.baiidi, new cjs.Rectangle(0,-54.8,300,254.8), null);


(lib.an = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABAdIAEgIQAWAGALAEIgDAJQgNgFgVgGgAglAgQARgCAIgFQAJgEgBgOIAIAAQAAAMgDADQgEAOgdAEQgCgFgDgDgAAUAYIAAgFIAAgPIglAAIAAAMIAAACIAAAGIgJAAIAAgJIAAgLIgHADIgBgCIgEgFQANgCAHgFIgJAAIgHAAQADgIABgJIAHABIALAAIAAgEIgNAAIgIAAIAAgHIAIABIAOAAIgBgGIAJAAIAAAGIAJAAIgBgGIAJAAIAAAGIAMAAIAIgBIgBAHIAAAEIAAAGIgHgBIgMAAIAAAEIARAAIAIAAIAAABIgBAFQAAAIgJAAIAAAQIAAAIgAAOgCIAJAAIgBgDIAFAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBIgPAAgAgMgCIASAAIAAgFIgNAAIgFAFgAgFgOIALAAIAAgEIgKAAIgBAEgAgXgQIAAACIAJAAIABgCIAAgCIgKAAIAAACgAAOgXIALAAIAAgEIgLAAgAgDgXIAJAAIAAgEIgJAAIAAAEg");
	this.shape.setTransform(9.2,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAeQAIgJAEgMQADgJAAgOIgEAAQgFgBgDABIAAgKIAJABIAEAAIAAgFIgBgKIALAAIgBAGIAAAJIAHAAIAJAAQgBAAABAPQgBAYgCALQgBAKgJgBIgJAAQAAgFgBgEIAIABQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQABgGABgPIAAgSIgIAAQgBAPgDAMQgEAOgJAMQgDgGgEgDgAAHAlIABgKIAAgvIAAgJIAHABIAQAAIAIgBIAAAJIAAAvIAAAJIgKAAIAAgFIgMAAIAAAGgAARAWIAMAAIAAgqIgMAAg");
	this.shape_1.setTransform(0.5,14.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAnIABgMIAAgUIAAgJIgEAGIgFgIQAIgIAEgOIACgMIAKADIgCAFIgGAPIAAArIABALgAglAnIABgKIAAg5IgBgIIAHABIAMAAIAGgBIAEAFIAAABIgBABQgEAMgFAIQAHAJAAAJQAAAIgFAEQgCABgFAAIgCAAIAAgBQAAgEgCgDIAEAAQAEAAAAgFQAAgGgCgDIgFgIIAHgTIgIAAIAAApIAAAPIAAAKgAAKAnQAAgGgCgDIAKAAQABAAABAAQABAAAAAAQABgBAAAAQAAgBAAgBIAAgmIgJAAIgIAAIAAgJQADABAFgBIAJAAIAAgIIgBgJIAKAAIAAAJIAAAIIAHAAIAAAKIgHgBIAAAoQAAAEgCADQgCADgIAAIgJAAgAAEgCIAHgEQAFAIAEALIgHAFQgEgMgFgIgAgbAOIAAAAg");
	this.shape_2.setTransform(-7.8,14.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAgIACgEQAFgIAEgOIAJAGQgFAOgGAKIgBADgAAcAnIAAgFIggAAIAAAFIgKAAIABgKIAAgrIAAgJIAIAAIAMAAIAAgHIAAgIIAKAAQgBADAAAGIAAAGIANAAIAIAAIAAAJIAAApIAAAMgAAQAZIAMAAIAAgRIgMAAgAgEAZIALAAIAAgRIgLAAgAAQAAIAMAAIAAgOIgMAAgAgEAAIALAAIAAgOIgLAAgAgkgKIAEgGQAIAEAIAHIgGAGQgHgFgHgGgAgigeIAHgHQAHAEAGAHIgFAHQgGgHgJgEg");
	this.shape_3.setTransform(-16.8,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAiQAFgFADgJIABgEIAIADQgDALgGAJgAAYASIAHgDQAFAIAEAMIgIADQgDgMgFgIgAALASIAIgBQADAHACAMIgIACQgCgMgDgIgAgBATIAHgCIADAUIgJABQAAgHgBgMgAgnAeQAEgEADgGQAFgJgBgeQAAgQgBgDIAKAAIgBAUIAEgJIAFAGIgBACIgIALIgBAQIAKAMIgHAHIgFgJQgDANgHAHQgDgEgDgEgAABAKQAHgFAEgGQADgFABgGIgDAAIgDAAQgDAIgFAGQgFAIgHAGQgCgEgEgDQAIgFAEgEIgGgFIgCAEQgCgDgEgDQAIgIAEgMIACgLIAHACIgBAEIAAABIACAAIAFAAIAEAEIgBAEIAAADIAFAAIAAgLIAAgGIAJAAQgBAAABAKIgBAHIAGAAIAIgBIAAAJIgIAAIgGAAQABAFAEAGQAEAEAGAFIgFAIQgKgJgEgKQgEALgLAJIgFgHgAgGgJIABAAIAEADIABgEIgEgEIgCAFgAgBgUIAEAEIACgIIgFAAIgBAEgAgnAAQADgGgBgRIAHACQAAARgCAHgAAaghIAGgDIAHAKIgGAFQgCgGgFgGg");
	this.shape_4.setTransform(-25.2,14.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAnIAAgLIAAgOIABgKIgGANIgGAIQgCgFgDgDIAJgMIAGgLIAAAAIgGAAIgHAAIAAgJIAIAAIAGAAIAAgIIgLACQgBgFgCgEQAVgCAKgGIAFAIIAAABIgCAAIgBABIgKADIAAAKIAGAAIAGAAIAAAJIgGAAIgGAAIAAACQAIAFAFAIIgFAHIgIgLIAAAXIABALgAAdAlIAAgGIgRAAIAAAGIgKAAIABgKIAAgxIgBgJIAIAAIAUAAIAIAAIAAAJIAAAwIAAALgAAMAWIARAAIAAgsIgRAAg");
	this.shape_5.setTransform(-34.1,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAgQAPgIgBgTIgBAAIgFAAIAAgFIAAgPIAAgGIAGAAIABAAQgCgJgDgFIAHgDQAEAHADAGIgJAEIAPAAQAEgJACgIIAJADIgGAOIACAAIAHAAIAAAGIAAAPIAAAFIgHAAIgDAAIAAAXQgBAAABABQAAAAAAAAQABABAAAAQABAAABAAQAFACgBgOQAFADADABQAAAMgDABQgBAEgKgBQgLABABgIIAAgaIgGAAQAAAMgDAHQgFAKgJAGQgCgFgEgDgAACgCIAYAAIAAgKIgYAAgAgZAnIAAgKIAAgPIAAgKQgCAKgIAJQgCgFgCgEQAGgGADgIIAEgIIgFAAQgEAAgCABIAAgKQACACAEgBIAGAAIAAgJIgJACIgDgIQANgBAJgFIAEgCIAFAIIgCABIgIADIAAALIACAAIAHAAIAAAIIgHAAIgCAAIAAADQAGAFADAHIgFAHIgEgJIAAAYIAAAKg");
	this.shape_6.setTransform(-42.4,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAlIgJAAIgCgJIAMABQAFABABgKIACgYIgCAAIgEAJQgFAMgJAJQgFAGgJAFIgHgGQAOgJAIgKQAEgGACgGIACgEIgFAAIgGAKQgEAGgIAGIgGgFIAAAGQgKAFgKAEIgEABIgCgJIAKgDIAAgaIgCAAIgHABIAAgJIAHAAIACAAIAAgLIgBgJIALAAQgCADABAGIAAALIADAAIAFAAIAAAJIgFgBIgDAAIAAAXIADgCIAEgCIAAACQALgIAEgIIgEAAIgGABIgCgIQAEgBAGgFIANgJIgNAAIgKABIAAgKQAFABAFAAIAQAAIAJgBIAEAGIgBABIAAABIgXAQIAIgBIAOAAIAJgBIgBAOQAAAlgMAAIgFgBg");
	this.shape_7.setTransform(-51.2,14.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNAgQAGgFACgHQAEgKAAghQAAgIgBgEIAHABIAOAAIAIgBIAAAJIAAA1QAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIAAgPQADACAFABQAAARgCACQgBACgDABIgGABQgHAAgBgCQgCgBAAgGIAAg3IgLAAQAAAdgCAJQgCARgIAKIgIgHgAgZAnIABgIIAAgRIAAgOQgEALgGAJQgCgFgDgDQAJgLAEgPIgEAAIgHABIAAgKIAHABIAFAAIAAgIQABgFgBgDIAKAAQgBADAAAFIAAAIIAGAAIAFgBIAAAKIgFgBIgGAAIAAACIANAQIgHAHIgGgMIAAAgQAAAFABADg");
	this.shape_8.setTransform(-59.7,14.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATAoIAAgEIgmAAIAAAEIgJAAIAAgIIAAgQIAAgHIAHAAIAWAAIALgJIgfAAIgJAAIAAgHIAIAAIAjAAIAHAAIAFAEIgDADIgKAJIAJAAIAGAAIAAAHIAAAQIAAAIgAgTAbIAmAAIAAgKIgmAAgAAAgdQgGAIgKAGIgTAKQgBgEgDgEQAMgFAIgFQALgHAFgJIAJACIgBACQAGAHAGAEQAJAGAPAEIgEAFIgCAEQgXgIgMgQgAgLgNIAEgIQAOADAGAEIgEAGQgJgEgLgBg");
	this.shape_9.setTransform(-68.2,14.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("A3XHQIAAufMAuvAAAIAAOfg");
	this.shape_10.setTransform(-117.2,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

	// 图层 3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D81E05").s().p("AgGBvQgaABgXgLIAAgVQANAGANADQAMADAMAAQAOABANgGQAJgFABgKQgBgJgHgGQgOgIgPgGQgVgGgRgPQgKgLABgOQAAgZAWgMQgKgEgGgJQgGgJAAgLQAAgRAPgKQATgLAWABQAMAAAMACQANADANAFIgHATQgMgFgMgCQgKgCgKAAQgLgBgMAFQgIAEABAJQAAAIAHAFQAPAJAOAFQAVAGAQAOQAKALAAAPQAAAYgVANQAcAQgKAfQgFAKgJAGQgUALgVAAIgEAAgAgZgVQgFAGgBAJQAAAGAEAGQAFAGAHAEQAPAHAQAGQAQgIACgSQAAgLgKgHQgQgLgSgFQgJADgGAHg");
	this.shape_11.setTransform(10.2,10.3,0.746,0.746);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.1,2,8.4,16.6);


(lib.xiaobiaoanniu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 5
	this.instance = new lib.an();
	this.instance.parent = this;
	this.instance.setTransform(3.9,7.9,1,1,0,0,0,10.2,10.2);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.an(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-273.1,-44.5,299.3,92.9);


(lib.t4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.liswf("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(45.5,21.4,1.546,1.546,0,0,0,23.4,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D81E05").ss(2,1,1).p("ALeCBIAAkBQAAgxgxAAI1ZAAQgxAAAAAxIAAEBQAAAxAxAAIVZAAQAxAAAAgxg");
	this.shape.setTransform(46.2,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.t4, new cjs.Rectangle(-28.2,3.4,148.8,37.5), null);


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
	this.p3.setTransform(135.2,10.2,0.979,0.979,0,0,0,-4,-29.1);

	this.p2 = new lib.n1();
	this.p2.name = "p2";
	this.p2.parent = this;
	this.p2.setTransform(110.1,10.2,0.979,0.979,0,0,0,-4,-29.1);

	this.p1 = new lib.n1();
	this.p1.name = "p1";
	this.p1.parent = this;
	this.p1.setTransform(85.1,10.2,0.979,0.979,0,0,0,-4,-29.1);

	this.p0 = new lib.n1();
	this.p0.name = "p0";
	this.p0.parent = this;
	this.p0.setTransform(60.3,10.2,0.979,0.979,0,0,0,-3.9,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p0},{t:this.p1},{t:this.p2},{t:this.p3}]}).wait(1));

	// 图层 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AgZCAQACgPgBgRIAAiXIgBgeIAbABIAnAAIAAgSQAAgNgCgMIAiAAQgCAKAAAPIAAASIAqAAIAbgBQgCAJAAAWIAACVQACAXgOADQgGAFgegBIgPAAQgCgSgGgNQASAEALgBQANABAAgIIAAgrIgWATQgPgugKgTQgHATgIARQgDAHgTAYQgMgRgIgIIAAA4IABAdgAAFAnQASgSAGgTQAKgWACgjIgkAAgABHgnIAGAOQAWAiAKAdIAAhdIgmAAIAAAQgAiGBWQAOAAAdgEIA8gMIAAAeQgWAGgkAFQgbAEgKAEgAiIAYQAMgDADgDIAEgFQAMgKAOgRIgqAEIgGgeQAIAAAIgMQANgUAGgOIAIgRIAIgXIAjANIgHALIgLAVIgNAWIgMAUIAZgBQAHgLAIgPIAfAOQgOAXgTAWQgPARgNAMIATgDIAmgFIgDAdIgZADIgiAEIgbAEIgLABg");
	this.shape.setTransform(75.6,-10.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AggB+QgRgBgKgCQgjgEADglIAAhaIgOADIgeAHIgEgfQANgBASgEIARgDIAAgmQAAgSgCgNIAkAAQgBAMAAATIAAAeIAzgMIAAglQAAgUgCgLIAjAAQgCAKAAAUIAAAfIA/gOQAQgEAQgFIgCAnIgEApQgDAogKAHQgIAKgXgBIgcgBQgBgPgFgPQAPAEANAAQAOAEADghQACgVAAgVIg6AOIAABFQAAAUACAKIgjAAQACgJAAgXIAAg7IgzALIAABgQgBAMAJACQAHAEA/AAQAtAAAQgCQAPgCADgGQAHgIABggQATAKAOACQgDAngNAMQgJAKgTADQgLADg/AAIg2gBg");
	this.shape_1.setTransform(45.2,-11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AgPCCQACgNgBgRIAAhvIAAgEIgOAPQgJgPgNgJQAbgXAUgnQALgWAFgVIAhAIIgIASIgKAVIAsAAIgOgWIgGgJIAcgNQAQAWALAWIABAAIAfgCIAAAeQgKgBgVAAIgVAAIAAAeIAUAAQASAAAHgCIAAAbIgZAAIgUAAIAAAeIAUAAIAZgBIAAAbIgZgBIgUAAIAAAiIAZAAQAVAAAJgCIAAAeQgLgCgUAAIheAAIAAAPgAARBZIAnAAIAAgiIgnAAgAARAeIAnAAIAAgeIgnAAgAARgZIAnAAIAAgeIgnAAgAiLBXQAqgCBHgPIAAAeIgbAGIg3AJQgNADgJADgAiMAZQAMgDAGgGIAPgQIAPgRIgIAAIgjACIgGgbQAKgCAGgIIATgkQAKgVAFgPIAgAKIgEAIIgVAnIgPAZIAYgBQAIgMAFgLIAfAMIgJAMQgWAigdAdIA7gHIgDAbQgkAGgtAEIgRACg");
	this.shape_2.setTransform(15,-11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("AhJA4IALgJQAKgHADgBIAAgiIgIAAIgKABIAAgQQADABAIAAIAMAAQAGAAAGgBQgCAGAAAKIAAAhQABgCAIAIQAIAJAigCQAgAAAYgCQgEAHAAAKIg2ABQgZAAgKgCQgHgBgKgKIgEgBQgEgCgIAJIgJAJgAgKAjQASgGAPgPIgYgQIAJgJQANAHAMAIQAHgKAFgKIgvAAQgBAUgEAQQgDAMgIANQgFgGgIgHQAHgKADgNQAEgTAAghIgBgQIAHAAQAVgBAbgEIATgFIALAPIgHABQgYAHgmABIABAFQgBABAAAJIAsAAIAOgBIAIAIQgCADgBAFQgHAPgJAMIAWATIgLANQgJgJgMgKQgOAOgVAKIgKgOgAhFg3IANgLQAQAPAKANIgNAMQgLgRgPgMg");
	this.shape_3.setTransform(170.4,39.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("Ag1BIIABgSIAAggIAAgNQgDAFgIAGIgHgQQAXgRAKgUIAOAJIgCADQgFAHgFAHIAAA+IAAARgAA3BCIhCAAQgLAAgIABIAAgRIATAAIAXAAIAAgfIgQAAIgRAAIAAgRQAHACAKAAIAQAAIAAgcIgSAAIgRABIAAgBIAAgQIARAAIAeAAQgLgLgSgJIAMgLQAQAHAQAOIgLAKIAYAAQALABAGgBIAAARIgRgBIgYAAIAAAcIAUAAQAKAAAGgCIAAARIgQAAIgUAAIAAAfIAbAAIARAAIAAARQgIgBgJAAgAgXgYgAhFgpQALgHAIgIQAKgIADgHIAOAKIgHAHQgPAPgPALQgFgHgEgGg");
	this.shape_4.setTransform(154.5,39.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("AhHA5QAMgWAAgfIAAgEIAPACIgBAOIAAAIQADAGAGAGIAAgpIgOAAIgPAAIAAgQIAPABIAMAAIAAgPIgIAAQgKAAgGABIAAgQIAQABIAIAAIAAgEQAAgKgBgEIASAAIgCAOIAAAEIAIAAIAPgBIAAAQQgHgBgIAAIgIAAIAAAPIAKAAIAOgBIAAAQIgOAAIgHAAIAAAOIAIAAIAMAAIAAAQIgMgBIgIAAIAAAWQAJAFAaAAQAnAAASgEQgEAHAAAKIgPABIgkAAQgSAAgOgCQgWgEgMgSQgDAPgHAMQgFgIgHgDgAAJAmQgEgCABgLIAAgeIgBgRIAPABIAYAAIAAgYIgZAAIgPAAIAAgPIAQABIAZAAIAQgBIgBAOIAAAYIABAQQgFgCgMAAIgWAAIAAAdIAAAEQACABAKAAQAPAAACgDQACgCAAgHIAAgKQAIAEAIABQgCAVgDAFQgDAEgGABIgWABIgHAAQgOAAgDgDg");
	this.shape_5.setTransform(169.7,20.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("AhEAzQAYgJAIgRQAGgNAAgYIgTAAIgRABIAAgSIARABIBjAAIARgBIAAASIgRgBIgaAAIAAA1QgBAHANgBQAPgBAAgFIACgVQAHAFAJAAQgCAbgFADQgCAIgbgBQgRABgEgFQgFgCABgHIAAg9IgVAAQAAAcgIASQgHAOgMAJQgEAEgMAFQgFgJgHgGgAAlgwIhJAAIgPABIAAgSIAPABIBJAAIAPgBIAAASIgPgBg");
	this.shape_6.setTransform(155,20.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D81E05").s().p("AgIBHQABgIAAgMIAAg+IggAAIAAAqIABATIgTAAIABgTIAAgqIgBgPIAOAAIAkAAIAAgTIgGABIgsABQgCgKgEgGIAKAAQA5gBAjgGQAGgBAIgDIAKARIgKABQgQAEgcACIAAAUIAmAAIAOAAQgBAFAAAKIAAArQADASgXgBIgSgBQAAgJgEgHQAMACAJAAQAGAAgBgFIAAgoIgjAAIAAA+IABAUg");
	this.shape_7.setTransform(38.5,20.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D81E05").s().p("AAuBDQgQgBgSgVQgKgPgFgTIgmAAIAAAiQAYgGAQgFIABARQgEAAggAKIgXAGIgFgRQAGgCgBgHIAAhYIgBgTIATABIBJAAIASgBIgBAQIAAARIABAOIgRgBIgZAAIACARIAgAAIASgBIAAAQQgIgBgKAAIgcAAQAFAPALAMQAJAJAFAAQACACAEgXQAHAGAIADQgFAggNAAIgBAAgAgpgDIAjAAIgCgRIghAAgAgpgiIBJAAIAAgQIhJAAg");
	this.shape_8.setTransform(23.7,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D81E05").s().p("AAUAhQgNgQgGgYQgEAPgIAOQgIARgQAOQgJAIgPAJQgEgKgIgGQAVgLANgPQAdgfAAg1IgBgNIASAAIgBAOQAAAlAQAZQAIAQAQANQAMAKAMAHQgIAHgEAKQgagSgOgTg");
	this.shape_9.setTransform(7.2,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-24.8,215.7,86.3);


(lib.t2swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.num =  num_blg?num_blg:0;
		this.nums = [Math.floor(this.num/1000)%10, Math.floor(this.num/100)%10,Math.floor(this.num/10)%10, this.num%10];
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_4
	this.p3 = new lib.n1();
	this.p3.name = "p3";
	this.p3.parent = this;
	this.p3.setTransform(135.2,10.2,0.979,0.979,0,0,0,-4,-29.1);

	this.p2 = new lib.n1();
	this.p2.name = "p2";
	this.p2.parent = this;
	this.p2.setTransform(110.1,10.2,0.979,0.979,0,0,0,-4,-29.1);

	this.p1 = new lib.n1();
	this.p1.name = "p1";
	this.p1.parent = this;
	this.p1.setTransform(85.1,10.2,0.979,0.979,0,0,0,-4,-29.1);

	this.p0 = new lib.n1();
	this.p0.name = "p0";
	this.p0.parent = this;
	this.p0.setTransform(60.3,10.2,0.979,0.979,0,0,0,-3.9,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p0},{t:this.p1},{t:this.p2},{t:this.p3}]}).wait(1));

	// Layer_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AhCBkQAsgIAbgOQAdgOAVgXQAOgQAKgTIACgGIACgCIAUAIQgLgqgYgvIAcgLQAWAlAQA0IgeAMIAJAEQgTAjgXAYQgWAWgbAOQgbAPgsAKQgFgRgMgOgAiCBpQAJgJALgZQALgYAJgcIAaASQgLAlgOAdIgOAagAARAoQACgOAAgMIAAhwQAAgUgCgLIAkAAQgCALAAAUIAABxQABAMABANgAhCAOQAPgZAGgWQAIgWAFgmIAfAJQgGApgIAYQgHAZgQAbQgMgLgQgIgAiFgkIASgZQAcAQAWATIgSAaQgZgWgZgOgAh4hrIAUgXQAcARAXAWIgUAaQgVgXgegTg");
	this.shape.setTransform(43.2,-11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AgRCGQACgRAAgSIAAgdIhLAAIgjABIAAghQAMACAXAAIBLAAIAAgNIgBgOIAAgDIAhAAQgBAJAAAIIAAANIBQAAQAUAAANgCIAAAhIgjgBIhOAAIAAAdQAAASACARgAhVANQACgJAAgQIABgiQgOARgVAOQgEgOgJgOQAbgTAUgaQASgYAHgVIAfANIgJAPIgBACIgEAFIgNAWIAAA/IABAagAAFABQgGgCgDgHQgCgFAAgOIAAgQIgWAFQgEgPgHgOIAhgFIAAgTQAAgZgCgLIAgAAIgBAiIAAAOQAsgMAggXIAWAaQgtAZg1AOIAAAOQAAAJAFACQAGACAUAAQAjAAAGgFQADgBACgHIACgYQANAGAQAFQgDAbgFAKQgFAKgLADQgIADgUACIgZAAQgnAAgKgGg");
	this.shape_1.setTransform(14.4,-11.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AhIA4IAKgJQAKgHADgBIAAgiIgIAAIgKABIAAgQQADABAIAAIAMAAQAGAAAFgBQgBAGAAAKIAAAhQABgCAIAIQAHAJAjgCQAfAAAZgCQgDAHgBAKIg2ABQgZAAgKgCQgHgBgKgKIgFgBQgDgCgIAJIgJAJgAgKAjQASgGAPgPIgYgQIAJgJQANAHAMAIQAHgKAFgKIguAAQgCAUgEAQQgDAMgIANQgFgGgIgHQAHgKADgNQAEgTAAghIgBgQIAHAAIAwgFIATgFIALAPIgHABQgYAHglABIAAAFQAAABAAAJIAsAAIANgBIAIAIQgCADgBAFQgHAPgJAMIAWATIgLANQgJgJgMgKQgOAOgVAKIgKgOgAhFg3IANgLQAQAPAKANIgNAMQgLgRgPgMg");
	this.shape_2.setTransform(171.2,39.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("Ag1BIIABgSIAAggIAAgNQgEAFgHAGIgHgQQAXgRAKgUIAOAJIgCADQgFAHgGAHIAAA+IAAARgAA3BCIhCAAQgLAAgIABIAAgRIATAAIAXAAIAAgfIgPAAIgSAAIAAgRQAHACALAAIAPAAIAAgcIgSAAIgRABIAAgBIAAgQIARAAIAeAAQgLgLgRgJIALgLQAQAHARAOIgMAKIAYAAQALABAGgBIAAARIgRgBIgYAAIAAAcIAUAAQAKAAAGgCIAAARIgQAAIgUAAIAAAfIAbAAIAQAAIAAARQgHgBgJAAgAgXgYgAhFgpQALgHAJgIQAJgIADgHIAOAKIgHAHQgOAPgQALQgFgHgEgGg");
	this.shape_3.setTransform(155.3,39.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("AhHA5QAMgWAAgfIAAgEIAQACIgBAOIgBAIQADAGAGAGIAAgpIgOAAIgPAAIAAgQIAPABIAMAAIAAgPIgIAAQgKAAgGABIAAgQIAQABIAIAAIAAgEQAAgKgCgEIASAAIgBAOIAAAEIAIAAIAPgBIAAAQQgHgBgIAAIgIAAIAAAPIAKAAIAOgBIAAAQIgOAAIgHAAIAAAOIAIAAIAMAAIAAAQIgMgBIgIAAIAAAWQAJAFAaAAQAnAAASgEQgDAHgCAKIgOABIgkAAQgSAAgOgCQgWgEgMgSQgDAPgHAMQgEgIgIgDgAAJAmQgEgCABgLIAAgeIgBgRIAPABIAZAAIAAgYIgaAAIgPAAIAAgPIAQABIAaAAIAPgBIgBAOIAAAYIABAQQgFgCgLAAIgXAAIAAAdIAAAEQACABAKAAQAOAAADgDQACgCAAgHIAAgKQAIAEAIABQgCAVgDAFQgDAEgGABIgWABIgHAAQgOAAgDgDg");
	this.shape_4.setTransform(170.5,20.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("AhEAzQAYgJAIgRQAGgNAAgYIgTAAIgRABIAAgSIARABIBjAAIARgBIAAASIgRgBIgaAAIAAA1QgBAHANgBQAPgBAAgFIACgVQAHAFAJAAQgCAbgFADQgCAIgbgBQgRABgEgFQgFgCABgHIAAg9IgVAAQAAAcgIASQgHAOgMAJQgEAEgMAFQgFgJgHgGgAAlgwIhJAAIgPABIAAgSIAPABIBJAAIAPgBIAAASIgPgBg");
	this.shape_5.setTransform(155.8,20.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("AgIBHQABgIAAgMIAAg+IggAAIAAAqIABATIgTAAIABgTIAAgqIgBgPIAOAAIAkAAIAAgTIgGABIgsABQgCgKgEgGIAKAAQA4gBAjgGQAHgBAIgDIAKARIgKABQgQAEgcACIAAAUIAmAAIAPAAQgCAFAAAKIAAArQADASgXgBIgSgBQAAgJgEgHQANACAHAAQAHAAgBgFIAAgoIgjAAIAAA+IABAUg");
	this.shape_6.setTransform(39.3,20.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D81E05").s().p("AAuBDQgQgBgSgVQgKgPgFgTIgmAAIAAAiQAYgGAQgFIABARQgEAAggAKIgXAGIgFgRQAGgCgBgHIAAhYIgBgTIATABIBJAAIASgBIgBAQIAAARIABAOIgRgBIgZAAIACARIAgAAIASgBIAAAQQgIgBgKAAIgcAAQAFAPALAMQAJAJAFAAQACACAEgXQAHAGAIADQgFAggNAAIgBAAgAgpgDIAjAAIgCgRIghAAgAgpgiIBJAAIAAgQIhJAAg");
	this.shape_7.setTransform(24.5,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D81E05").s().p("AAUAhQgNgQgGgYQgEAPgIAOQgIARgQAOQgJAIgPAJQgEgKgIgGQAVgLANgPQAdgfAAg1IgBgNIASAAIgBAOQAAAlAQAZQAIAQAQANQAMAKAMAHQgIAHgEAKQgagSgOgTg");
	this.shape_8.setTransform(8,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-27.3,218.3,88.7);


(lib.yuding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAABiQAjABAKgBQAIAAAAgGIAAiuIhRAAIAAgUICWAAIAAAUIgwAAIAACuQABATgOAEQgPAFglAAQgDgMgGgKgAhaBhQALgEAEgTIAAhfIguAAIAAgTIBBAAIAABxIAngaIAGASQhCAtgDAEIgKgRgAhohqIANgNQAaAXAQAVIgPAOQgPgWgZgXg");
	this.shape.setTransform(155.2,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhqB1QgCgLgFgJIAeAAQAGAAgBgEIAAhoIgsAAIAAgTIBBAAIg0gkIAMgNIAXARQARgQAOgTIhJAAIAAgSIBVAAIADgBIANAIQgTAfgZAYIAYARIgFAGIAUAAIANAEQgLAggMAZIgOgDIAOgnIgcAAIAABoQAAAQgKAEQgJAEgUAAIgJAAgAA9BIIANgMQAdAWAUAVIgNAOQgTgWgegXgAgWBlQBRglgMgvIAAg0IASAAIAAA0QANA4hYAqIgMgOgABeA3IAAhsIhKAAIAABsIgTAAIAAh+IAoAAIAHgbIg4AAIAAgSICDAAIAAASIg1AAIgKAbIA1AAIAAB+g");
	this.shape_1.setTransform(127.9,30.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaB0IAAjmIBXAAIAACaQAAAQgKAEQgJAFgdgBQgCgKgFgJIAfAAQAGAAgCgFIAAiHIgwAAIAADTgAhxBXQAKgCABgPIAAi5IBmAAIAAB9IhRAAIAABDIAzgRIgQgcIASgIQAXAlANAgIgRAKIgNgbQhQAcgDADQgCgKgGgKgAhRgHIA/AAIAAglIg/AAgAhRg+IA/AAIAAgjIg/AAg");
	this.shape_2.setTransform(100.7,30.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah3B2IAAgUICCAAQAYg9AQhDIAXAEQgTBBgXA7IBYAAIAAAUgAhGgaIAUgEQASA6AJA1IgWAFQgHg2gSg6gAhsgtIAAgVIDYAAIAAAVgAgThvIAUgGIANAqIgTAHQgFgUgJgXg");
	this.shape_3.setTransform(74.1,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(3));

	// 图层 1
	this.instance = new lib.t4();
	this.instance.parent = this;
	this.instance.setTransform(115.4,26.4,1.454,1.454,0,0,0,45.9,19);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("AvjECQhHAAAAhHIAAl1QAAhHBHAAIfHAAQBHAAAABHIAAF1QAABHhHAAg");
	this.shape_4.setTransform(115.8,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_4}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.7,3.6,216.3,54.6);


// stage content:
(lib._300x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// biankuang
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9A9A9A").ss(2,1,0,3).p("EAXcgu3MAAABdvMgu3AAAMAAAhdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1773));

	// sdfdf
	this.instance = new lib.xiaobiaoanniu();
	this.instance.parent = this;
	this.instance.setTransform(276.5,561.7,1,1,0,0,0,4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1773));

	// t7
	this.instance_1 = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(241.1,11.7,0.713,0.713,0,0,0,74.5,7.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(826).to({_off:false},0).to({alpha:1},6).wait(941));

	// t5
	this.instance_2 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(98.6,541.6,0.793,0.793,0,0,0,100.8,26.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(826).to({_off:false},0).to({alpha:1},6).wait(941));

	// t4
	this.instance_3 = new lib.yuding();
	this.instance_3.parent = this;
	this.instance_3.setTransform(96.8,456.3,0.717,0.717,0,0,0,115.1,28.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(806).to({_off:false},0).to({alpha:1},6).wait(961));

	// t2
	this.instance_4 = new lib.t2swf2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(117.9,456.6,1.126,1.126,0,0,0,88.4,19.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(743).to({_off:false},0).to({alpha:1},8).wait(49).to({y:347.1},6).wait(967));

	// t2
	this.instance_5 = new lib.t2swf();
	this.instance_5.parent = this;
	this.instance_5.setTransform(117.9,456.6,1.126,1.126,0,0,0,88.4,19.2);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(666).to({_off:false},0).to({alpha:1},7).wait(64).to({alpha:0},6).to({_off:true},1).wait(1029));

	// t1
	this.instance_6 = new lib.t1swf("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(73.8,451.1,1.337,1.337,0,0,0,41.6,23.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(615).to({_off:false},0).to({alpha:1},7).wait(37).to({startPosition:0},0).to({alpha:0},7).wait(1107));

	// baidi
	this.instance_7 = new lib.baiidi();
	this.instance_7.parent = this;
	this.instance_7.setTransform(80,520.7,1,0.794,0,0,0,80,100);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(597).to({_off:false},0).to({scaleY:0.87,y:512.8,alpha:1},6).wait(197).to({scaleY:1.3,y:470.5},6).wait(967));

	// bg
	this.instance_8 = new lib.bg();
	this.instance_8.parent = this;
	this.instance_8.setTransform(141.1,493.9,1.817,1.817,0,0,0,84,294.7);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(592).to({_off:false},0).to({regY:294.6,scaleX:1,scaleY:1,x:84,y:294.6},51,cjs.Ease.get(1)).wait(1130));

	// t7
	this.instance_9 = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(241.1,11.7,0.713,0.713,0,0,0,74.5,7.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(530).to({_off:false},0).to({alpha:1},6).to({_off:true},56).wait(1181));

	// t5
	this.instance_10 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(98.6,541.6,0.793,0.793,0,0,0,100.8,26.7);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(530).to({_off:false},0).to({alpha:1},6).to({_off:true},56).wait(1181));

	// t4
	this.instance_11 = new lib.yuding();
	this.instance_11.parent = this;
	this.instance_11.setTransform(96.8,456.3,0.717,0.717,0,0,0,115.1,28.7);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;
	new cjs.ButtonHelper(this.instance_11, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(510).to({_off:false},0).to({alpha:1},6).to({_off:true},76).wait(1181));

	// t2
	this.instance_12 = new lib.t2swf2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(117.9,456.6,1.126,1.126,0,0,0,88.4,19.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(447).to({_off:false},0).to({alpha:1},8).wait(49).to({y:347.1},6).to({_off:true},82).wait(1181));

	// t2
	this.instance_13 = new lib.t2swf();
	this.instance_13.parent = this;
	this.instance_13.setTransform(117.9,456.6,1.126,1.126,0,0,0,88.4,19.2);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(370).to({_off:false},0).to({alpha:1},7).wait(64).to({alpha:0},6).to({_off:true},1).wait(1325));

	// t1
	this.instance_14 = new lib.t1swf("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(73.8,451.1,1.337,1.337,0,0,0,41.6,23.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(319).to({_off:false},0).to({alpha:1},7).wait(37).to({startPosition:0},0).to({alpha:0},7).to({_off:true},222).wait(1181));

	// baidi
	this.instance_15 = new lib.baiidi();
	this.instance_15.parent = this;
	this.instance_15.setTransform(80,520.7,1,0.794,0,0,0,80,100);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(301).to({_off:false},0).to({scaleY:0.87,y:512.8,alpha:1},6).wait(197).to({scaleY:1.3,y:470.5},6).to({_off:true},82).wait(1181));

	// bg
	this.instance_16 = new lib.bg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(141.1,493.9,1.817,1.817,0,0,0,84,294.7);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(296).to({_off:false},0).to({regY:294.6,scaleX:1,scaleY:1,x:84,y:294.6},51,cjs.Ease.get(1)).to({_off:true},245).wait(1181));

	// t7
	this.instance_17 = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(241.1,11.7,0.713,0.713,0,0,0,74.5,7.9);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(234).to({_off:false},0).to({alpha:1},6).to({_off:true},56).wait(1477));

	// t5
	this.instance_18 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(98.6,541.6,0.793,0.793,0,0,0,100.8,26.7);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(234).to({_off:false},0).to({alpha:1},6).to({_off:true},56).wait(1477));

	// t4
	this.instance_19 = new lib.yuding();
	this.instance_19.parent = this;
	this.instance_19.setTransform(96.8,456.3,0.717,0.717,0,0,0,115.1,28.7);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;
	new cjs.ButtonHelper(this.instance_19, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(214).to({_off:false},0).to({alpha:1},6).to({_off:true},76).wait(1477));

	// t2
	this.instance_20 = new lib.t2swf2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(117.9,456.6,1.126,1.126,0,0,0,88.4,19.2);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(151).to({_off:false},0).to({alpha:1},8).wait(49).to({y:347.1},6).to({_off:true},82).wait(1477));

	// t2
	this.instance_21 = new lib.t2swf();
	this.instance_21.parent = this;
	this.instance_21.setTransform(117.9,456.6,1.126,1.126,0,0,0,88.4,19.2);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(74).to({_off:false},0).to({alpha:1},7).wait(64).to({alpha:0},6).to({_off:true},1).wait(1621));

	// t1
	this.instance_22 = new lib.t1swf("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(73.8,451.1,1.337,1.337,0,0,0,41.6,23.9);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(23).to({_off:false},0).to({alpha:1},7).wait(37).to({startPosition:0},0).to({alpha:0},7).to({_off:true},222).wait(1477));

	// baidi
	this.instance_23 = new lib.baiidi();
	this.instance_23.parent = this;
	this.instance_23.setTransform(80,520.7,1,0.794,0,0,0,80,100);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(5).to({_off:false},0).to({scaleY:0.87,y:512.8,alpha:1},6).wait(197).to({scaleY:1.3,y:470.5},6).to({_off:true},82).wait(1477));

	// bg
	this.instance_24 = new lib.bg();
	this.instance_24.parent = this;
	this.instance_24.setTransform(141.1,493.9,1.817,1.817,0,0,0,84,294.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_24).to({regY:294.6,scaleX:1,scaleY:1,x:84,y:294.6},51,cjs.Ease.get(1)).to({_off:true},245).wait(1477));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(138.5,258.5,545.1,1090.1);
// library properties:
lib.properties = {
	id: 'F3FB63F443E741999197AB7F16C8E378',
	width: 300,
	height: 600,
	fps: 25,
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
an.compositions['F3FB63F443E741999197AB7F16C8E378'] = {
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