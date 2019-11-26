/***start debug***/

function requestPlus(){
	var reg = new RegExp("(^|&)type=([^&]*)(&|$)");
	var url_params = window.location.search.substr(1).match(reg);
	if(url_params==null) {
		window.is_all_data_error = false;	
		window.PriceDataFiltered = [
			{"price":"3892","name":"罗马","is_error":false,"kf":2},
			{"price": "3990", "name": "布鲁塞尔", "is_error": false, "kf":0},
			{"price":"4264","name":"伦敦","is_error":false,"kf":1}
		];
		return;
	}

	switch(url_params[2]){
		case "0":
			window.is_all_data_error = false;	
			window.PriceDataFiltered = [
				{"price":"3892","name":"罗马","is_error":false,"kf":2},
				{"price": "3990", "name": "布鲁塞尔", "is_error": false, "kf":0},
				{"price":"4264","name":"伦敦","is_error":false,"kf":1}
			];
			break;
		case "1":
			window.is_all_data_error = false;	
			window.PriceDataFiltered = [
				{"price": "3990", "name": "布鲁塞尔", "is_error": false, "kf":0},
				{"price":"4264","name":"伦敦","is_error":false,"kf":1}
			];
			break;
		case "2":
			window.is_all_data_error = false;	
			window.PriceDataFiltered = [
				{"price":"3892","name":"罗马","is_error":false,"kf":2},
				{"price":"4264","name":"伦敦","is_error":false,"kf":1}
			];
			break;
		case "3":
			window.is_all_data_error = false;	
			window.PriceDataFiltered = [
				{"price":"3892","name":"罗马","is_error":false,"kf":2},
				{"price": "3990", "name": "布鲁塞尔", "is_error": false, "kf":0}
			];
			break;
		case "4":
			window.is_all_data_error = false;	
			window.PriceDataFiltered = [
				{"price":"4264","name":"伦敦","is_error":false,"kf":1}
			];
			break;
		case "5":
			window.is_all_data_error = false;	
			window.PriceDataFiltered = [
				{"price": "3990", "name": "布鲁塞尔", "is_error": false, "kf":0}
			];
			break;
		case "6":
			window.is_all_data_error = false;	
			window.PriceDataFiltered = [
				{"price":"3892","name":"罗马","is_error":false,"kf":2}
			];
			break;
		case "7":
			window.is_all_data_error = true;	
			window.PriceDataFiltered = [];
			break;
		default:
			window.is_all_data_error = true;	
			break;
	}
	// console.log(window.is_all_data_error);
	// console.log(window.PriceDataFiltered);
}

function build_links(){
	var div = document.createElement("div");
	document.body.appendChild(div);

	var links = [
		"全部正确",
		"第一城市出错",
		"第二城市出错",
		"第三城市出错",
		"第一二城市出错",
		"第一三城市出错",
		"第二三城市出错",
		"一二三城市全出错",
		"未获取到数据",
	];

	var reg = new RegExp("(^|&)type=([^&]*)(&|$)");
	var url_params = window.location.search.substr(1).match(reg);
	if(url_params!=null) {
		index = parseInt(url_params[2])
		div.appendChild(document.createTextNode("当前状态："+index+" - "+links[index]));
		div.appendChild(document.createElement("br"));
	}else{
		index = 0;
		div.appendChild(document.createTextNode("当前状态："+index+" - "+links[index]));
		div.appendChild(document.createElement("br"));
	}
	

	for (let index = 0; index < links.length; index++) {
		const info = links[index];
		var href = window.document.createElement("a");
		href.href = "?type="+index;
		href.textContent = info;
		div.appendChild(href);
		div.appendChild(document.createElement("br"));
	}
}

requestPlus();
// window.onload = build_links;
setTimeout(() => {
	build_links();
}, 200);

/***end debug***/


(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.diandi = function() {
	this.initialize(img.diandi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,272,220);// helper functions:

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
	this.shape_1.graphics.f("#D91F05").s().p("AmSECQARghgCgnIgOAAIAAgOIAOAAIAAg8IARAAQAEgMABgLIASADIgHAUIAbAAIAACGQAAAMgGAEQgIADgRgBQAAgHgEgIIAQAAQABAAAAAAQABAAAAAAQABgBAAAAQAAgBAAgBIAAg8IgcAAQABAsgRAlQgHgFgIgEgAlzCsIAcAAIAAgtIgcAAgAlHEAQAXgdgDgiIAAgoIA+AAIAABXQgBAGABACIADABIADAAIADgBIACgFIAAgVQAFAEAHACQAAAQgCAJQgCAFgDADQgEACgGAAIgJAAQgGABgEgEQgFgDABgSIAAhHIgdAAIAAAZQADAogaAhQgFgFgIgFgAo1EJIAAhLQgOAfgSATQgFgIgFgJQAYgYAPgkIgjAAIAAgRIAmAAIAAgcIgiAFIgFgNQAugHAfgMIAOANQgPAGgTAEIAAAgIAlAAIAAARIglAAIAAAGIAjAhIgKAPIgZgcIAABMgAufDcQgKAjhHAKQgDgIgGgHQA+gIAJgYIhDAAIAAgQIBIAAIACgKIATAAIgCAKIBOAAIAAAQIhCAAQATAbA0ADQgHAIgEAJQg5gGgUgngAnjEJQgCgJgEgKIAdABQAEAAAAgEIAAiXIASAAIAACXQABAQgLADQgIADgWAAIgFAAgArhDpIAAg4IgNAGIgHgQIAUgJIAAgyIARAAIAAAsIAVgJIAAg1IARAAIAAAtIAVgIIAGgGIANAFIgBADQAAA4gCAOQAAAMgKABQgIADgKAAQgBgJgDgGIALAAQAEAAABgGQACgFAAgtIgXAKIAABEIgRAAIAAg9IgVAJIAAA/QgCAOARgCIApAAQAOADABgdQAGAFAJADQAAAlgdgCIgsAAIgFAAQgbAAACgdgAi9EDIAAgQIBHAAIAAgrIgyAAIAAgRIB4AAIAAARIgzAAIAAArIBIAAIAAAQgAssDbIAZgJIAAg6IgYAAIAAgRIAYAAIAAgrIAQAAIAAArIAWAAIAAARIgWAAIAAAyIAVgIIADAQIg7AbgAlyDEIALgFQAIAQAFANIgMAFQgDgOgJgPgAnwDaIAAhqIASAAIAABqgAtwDDIAAhLIhjAAIAABLIgQAAIAAhaIAzAAIAHgQIATADIgHANIA/AAIAABagAvOC3QAOgIANgMIgZAAIAAgNIARAAIATAAIAAgbIAPAAIAAAbIAQAAIgLgFIANgUIANAGIgPATIATAAIAAANIgjAAIAAAZIgPAAIAAgTQgNAPgPAJQgFgGgFgEgAuXCtIAJgJIAZARIgJAJQgLgIgOgJgAi9CqQAigNAXgTIANAKQgZAWgjAPgAhiCWIALgMQAhAPAbARIgNANQgYgPgigSgAlxCKIAKgEQAIAOADAMIgLAFQgEgNgGgOgAi+CcIAAgsIBJAAIgIgTIATgFIALAYIBEAAIAAAoIgSAAIAAgYIh/AAIAAAcgAu7CWIgMgUIAMgEIALASIgLAGgAlDCIIAAgQIApAAQgFgNgHgOIARgGIANAdIgPAEIA1AAIAAAQgAC4AUQgZAAgHgVIAAgCIgCACQgHAOgsAHQhAgJAHgsQAEhBBkADIABAAIAAgSQADgnghACQgZgBgcAMIgCABIgIgWIABgBQAYgRAtgCQA+gCgCBEIAABbQgCATAPgCIALABIAAAUQgKAFgMAAIgCAAgABRgjQAFAeAYgDQAkgBABgiIAAgbIgBAAIgCgBQhCAAADAkgAnRAUQgrgCgTgNIAAgzIAbAAIAFAaQgDANAkACQAgADAGghQgDgbghgEIgMgDQgtgEgHgxQADg4BFgCQAjAAAVAMIAAAwIgaAAIgGgWQACgLgcgBQgkAAgBAZQAEAYAhAFIALADQAvAFAIAyQgCAigXANQgWAPgcAAIgCAAgAqiAUQgigBgMgVQgLgVABgZIAAhRQgBgWgQAAIgJgBIAAgZIA/AAIAAB+QAAAnAfAAQAVAAAagPIABAAIAAhmQAAgWgQAAIgKgBIAAgZIA/AAIAACVQgBAWARAAIALABIAAAUIg4AAIgFgVIgBABQgeAZgfAAIgBAAgAlVghIAAh1IgbAAIAAgbIAdAAIANgtIAWAAIAAAtIAvAAIAAAbIgvAAIAABwQACAhASgDQAPAAAPgIIACgBIAJAUIgBAAQgQANgkAEIgBAAQgsAAAAg1gAtSAQIAAgUIAcgDIgXhCIhfAAIgYBCIAcADIAAAUIhRAAIAAgUIANgBQAOgDAFgVIBbjuIAVAAIBXDqQAJAdAMgBIALABIAAAUgAuihjIBLAAIglhogAIDANIA3goQBnhUAZgoQAJgPgFgLQgFgLgOgDIgjABQCygpC9gIQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABQjtBMi4CgIAAAAIhPANQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBgAFfAPIAAgUIANgBQALADgBgcIAAhPQAAgmghAAQgXABgZAPIAAAAIAABjQgDAeAOgDIALABIAAAUIhVAAIAAgUIANgBQAPADgDgeIAAhgQAAgWgPAAIgIgBIAAgZIA2AAIADAYIABgCQAVgWAqgDQA6AAAABDIAABQQgCAdAOgCIAPABIAAAUgAhCAPIAAgUIANgBQAPADgDgeIAAhhQABgUgQAAIgJgCIAAgUIA+gHIAACSQgCAgALgFIAPABIAAAUgAjeAPIAAgUIANAAQAOAEgCggIAAhgQAAgWgQAAIgKgBIAAgZIA4AAIAEAYIABgCQAWgZAZAAQAKAAAIADIAAArQgPgJgUABQgQABgMANIAABfQgBAfALgEIAXACIAAATgAgyjtQABgWAWAAQAWAAACAWQgBAWgXABQgWgCgBgVg");
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


(lib.t3swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D71E05").s().p("ApXBGQgQAshiAOQgFgPgLgNQBUgKANgdIhaAAIAAgbIBjAAIABgNIAjAAIgCANIBtAAIAAAbIhaAAQAaAhBHADQgMANgIASQhOgIgcgygABXBvQARgsABgzIgSAAIAAgbIASAAIAAhXIAcAAQAFgPADgOIAhAEIgLAZIApAAIAAA/IAAB/IAAAHQAbgIAUgOQgVgYgOghIARgFIgUAAIAAgbIBfAAIAFgBIATAHQgKAxgZAfQAUAOAaAHQgMANgJAOQgbgJgVgQQgYATgfAJQgGgLgJgLQgCALgKAFQgNAGgdgBQgCgOgHgNIAdAAQAGAAAAgFIAAhMIgsAAQAAA9gUAyQgMgJgNgHgAETA4QAOgRAHgYIgyAAQAKAXATASgACFgLIArAAIAAg9IgrAAIAAARIATgKQANAUAIAQIgVAMQgGgQgNgUgAgKB/QgEgRgHgRQAcABALAAQAHAAAAgHIAAjQIAhAAIAADQQAAAbgQAGQgOAHgeAAIgIAAgAiAB/IAAhgQgTAmgXAYQgGgRgKgPQAfgfAUgtIgtAAIAAgeIA0AAIAAgiIgtAIQgDgOgHgMQBBgJAsgTIAXAZQgUAIgZAGIAAApIAxAAIAAAeIgxAAIAAAJIAwAoIgTAcIgdghIAABigAHtgMQgfBdhKArQgMgNgRgNQBVgsAWhtQgRgYgZgRIAUgcQA7AxAaA8QAaA7A8AsQgLASgEATQhLg2gghTgAlfBKIAAhGIgOAHIgNgcIAbgLIAAhIIAgAAIAAA6IAWgJIAAhLIAeAAIAAA+IAWgJIALgIIAXAIIgBAFQgBBNgCASQgBASgMAEQgOAFgOgBQgCgPgFgMIAMAAQAGABAAgHQABgFAAg4IgXAKIAABfIgeAAIAAhSIgWAKIAABTQgEAVAXgDIA0AAQAUAEAAgmQANAIAPAEQgCA2grgDIg7AAIgHAAQgrAAADgwgAMYB6IgtAAQgwADADgwIAAh+IAiAAIAAB+QgCARASgCIAmAAQASAGAAg6QAOAKAQAEQAABEgoAAIgGAAgAssBoIAHg7IgiAAIgIA7IgXAAIAHg7IgXAAIAAgaIAaAAIAEgkIgYAAIAAgbIAcAAIAGg0IAYAAIgHA0IAjAAIAHg0IAWAAIgFA0IAYAAIAAAbIgcAAIgEAkIAaAAIAAAaIgdAAIgHA7gAtFATIAjAAIAFgkIgjAAgAnLA4IAjgNIAAhMIgfAAIAAgeIAfAAIAAg7IAeAAIAAA7IAcAAIAAAeIgcAAIAABAIAZgLIAIAdIhVAogAJ5BIQAOgvAHg6IAfAGQgGA7gOA1gACEAgIAUgJQAOAVAJASIgWAMQgHgTgOgXgAM2gdIAfgMQAYA1ALAvIgiAOQgIgxgYg1gAgfA6IAAiXIAfAAIAACXgAoXAYIAAhnIiFAAIAABnIgeAAIAAiBIBIAAIAHgWIAkAFIgHARIBWAAIAACBgAqaADQARgHAPgOIgbAAIAAgVIATAAQgGgMgJgNIAUgJQALANAFAMIgSAJIAYAAIAAgkIAbAAIAAAkIAVAAIgRgJQAJgMAGgOIAYAKIgUAZIAXAAIAAAVIgdAAQARALAMAJIgQARQgMgLgRgMIAPgOIgQAAIAAAhIgbAAIAAgUQgQAQgSALQgHgKgKgJgADMgjQAYgSgEgXIAAglIBaAAIAAA0QgBALAFgBIAKAAQAGABAGgCIACAZQgGACgIAAIgOAAQgiABAEglIAAgZIgeAAIAAALQADAjgcAZQgLgLgOgJgALHhkIAXgWQArAbAgAeIgYAZQgcgdgugfg");
	this.shape.setTransform(107.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(19.1,-12,177.5,25.7);


(lib.t2swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D71E04").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMgAgSgSQgJAIAAAKQAAAMAJAHQAHAJALAAQALAAAIgJQAIgHAAgMQAAgKgIgIQgIgIgLAAQgLAAgHAIg");
	this.shape.setTransform(151.3,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D71E04").s().p("Ag1BuQAWgaAIgmQAHgbAAgrIAAheIASAAIAABeQAAAvgGAdQgJApgYAdQgGgHgKgFgABiB6IAAhtIgOAGQgHgagTggIAACaIgTAAIAAjlIATAAIAABHIAOgFQAQAbAKAbIAAh8IAUAAIAADwgAhwBrQAUglASgwIAQALQgRAtgSAogAg7AQQAOgVAHgqIAPAEQgHAtgOAWgAADgmIAOgGQAOAfAFAaIgQAGQgEgbgNgegAh0gjIALgOQAdANARANIgMAQQgOgLgfgRgAhphrIAMgOQAeAQANAMIgMAQQgPgOgcgQg");
	this.shape_1.setTransform(131.1,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D71E04").s().p("AgDBwIh0AAIAAjXIB0AAIAAASIhgAAIAAAeIAOgIQARAWAUAeQANgeAIggIASADQgMApgQAjQAVAiALAYIgRAKQgJgVgQgcQgTAigTAXQgHgGgHgEIAAAWIBgAAIAAAMQAbgcAKgpQAHgbAAglIAAgSIATAAIAAASIAAAYQAHAnANAZQAOAaAZAUQgKAHgEAJQgkgigQgvQgMAwgiAiQgDgFgHgHgAhjBFQAXgZATglQgVgggVgdgABUgMQAGgQAHgiIhDAAQgMAigNAUIgQgLQAZghAKhHIATADQgEAWgFASIBGAAIACgBIAOAFQgJApgLAcg");
	this.shape_2.setTransform(105.2,6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D71E04").s().p("Ah7BmQAXgaARgHIAAhGIglAAIAAgUIA5AAIAABbIAUAPQAUANAyAAQA1AAAsgFQgGAMAAAJQgnADg1AAQgyAAgXgPIgQgMQgGgGgEAAQgKABgbAkgAgwA8QAggQAQgdQANgZAFgmIhAAAIAAgUIBDAAIACg0IAUAAIgCA0IBNAAIAAAUIhPAAIgDATQA2A0AbAmIgRANQgWghgvgxQgRA6gxAaQgFgJgIgHgAhvhqIARgJQAXAbAKAYIgSAKQgIgWgYgeg");
	this.shape_3.setTransform(77.7,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D71E04").s().p("Ah5B2IAAgSIAnAAIAAiaIA/AAIADgWIhhAAIAAgTIBkAAIACgWIAVABIgDAVIBqAAIAAATIhuAAIgDAWIBVAAIAACaIAlAAIAAASgAg/BkICAAAIAAgYIiAAAgAg/A9ICAAAIAAgYIiAAAgAg/AVICAAAIAAgVIiAAAgAg/gPICAAAIAAgWIiAAAg");
	this.shape_4.setTransform(50.7,5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D71E04").s().p("AhOB7IAAh9QgQAxgSAbQgFgLgGgJQANgQAMgdQALgbAHgcIgnAAIAAgTIApAAIAAg5IATAAIAAA5IAiAAIAAATIgiAAIAAAKQAWAeAPAXIgOAQQgGgOgRgcIAACEgABdBiQhkANgIAEIAAgBIgIgTQAHgCALgWQAGgOALgcQAPgjAHgeIAVAIQgUBBgcA1IBPgKQgNgbgIgQIAQgHQAbAvALAgIgSAJgAgegMQAegjANhCIAUADQgPBGgeAogAA7hwIATgEQAQA7AeAoQgKAHgGAJQgfgqgShFg");
	this.shape_5.setTransform(23.5,5.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D71E04").s().p("AhDB7IAAg4IgyAKIgFgUIA3gJIAAgnIgYAAQgQAAgEAFQgDgMgDgFQAFgCAIgUQAHgRAHgdIgdAAIAAgTIAhAAQAFgTABgNIAUAFIgGAbIAwAAIAAATIg1AAQgJAggNAfIAaAAIAAgpIATAAIAAApIAbAAIAAARIgbAAIAAAkIAdgGIABASIgeAGIAAA8gAgTB0IAAgSIA+AAIAAhCIgvAAIAAgSIByAAIAAASIgwAAIAABCIA8AAIAAASgAgUgMQAdgLAagVQAcgVAQgYIhVAAIAAgTIBhAAIAEAAIAOAHQgOAfgdAaQAmASATAOIgMAOQgUgNgngTQgbAUggANQgHgJgGgGg");
	this.shape_6.setTransform(-3.4,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.8,-17.1,201.4,52.4);


(lib.t1swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D71E04").s().p("AiMCAQBDgWAAgzIAAgNQgfAVgiANQgLgTgRgQQA4gRAoghIg5AAIAAiYID+AAIAACYIg6AAQApAhA5AOQgRAQgLAVQghgLgbgSIAABxIgtAAIAAh+IAbAAQgagVgQgVIgkAAQgPAUgcAWIAfAAIAAAYQAABLhSAeQgKgSgTgQgAAVgrIA+AAIAAgaIg+AAgAhUgrIA/AAIAAgaIg/AAgAAVhlIA+AAIAAgaIg+AAgAhUhlIA/AAIAAgaIg/AAg");
	this.shape.setTransform(136.1,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D71E04").s().p("AhxCcIAAi7IgwAAIAAgpIAwAAIAAhMIAsAAIAABMIAxAAIAAhTIApAAIAABTIAxAAIAAhQIAtAAIAABQIAvAAIAAApIgvAAIAABqIiHAAIAAhqIgxAAIAACRIDeAAIAAAqgAAVAjIAxAAIAAhCIgxAAg");
	this.shape_1.setTransform(100.3,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D71E04").s().p("AiWClIAAgnICAAAIAAgrIhSAAIAAglIBSAAIAAgpIhXAAIAAgXIgiASQgIgQgVgUQAygUArghQAugiAagpIAlASIgHAJQA7A/BbAnQgWAUgHAQIgigSIAAAWIhYAAIAAApIBVAAIAAAlIhVAAIAAArICDAAIAAAngABXgfQgwgggngrQgnArgwAgICuAAIAAAAg");
	this.shape_2.setTransform(64.6,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D71E04").s().p("AgeCnIAAimIiDAAIAAgpICBAAIAAh+IAsAAIAAArIB0AAIAAApIh0AAIAAAqICWAAIAAApIiUAAIAAAzIAQgXQBYAjAeAOIgYAnQgggShOghIAABlg");
	this.shape_3.setTransform(28.8,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D71E04").s().p("AgCB3IA4ABQAJAAABgJIAAjOIhaAAIAAgrIDAAAIAAArIg4AAIAADPQgBATgEAKQgGALgMAFQgRAJg4AAQgDgWgNgZgAicB9IAhAAQAIAAAAgHIAAhHIgmAKIgNgqIAzgMIAAg8IguAAIAAgoIAuAAIAAhEIArAAIAABEIAoAAIAAAoIgoAAIAAAzIAogKIAGAnIguAMIAABUQAAAdgQAJQgOAIgpAAQgCgRgLgXg");
	this.shape_4.setTransform(-7,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-28,182.9,56.8);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1PRMMAAAgiXMAqfAAAMAAAAiXg");
	this.shape.setTransform(136,110);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272,220);


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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(this.parent.unitdata.kf==0){
			this.stop();
		}else{
			this.gotoAndStop(this.parent.unitdata.kf);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D71E04").s().p("AgzBPIAjABQAGAAAAgFIAAhrIAbAAIAABsQAAALgDAHQgDAFgIADQgKAFgiABQgCgMgIgRgAhkA9QAZgZANgpIAcAFQgQAwgaAdQgJgHgPgJgAAjADIAYgJQAfAtAKAaIgbALQgKgdgcgsgAhogXQAfgdATg2IAcAHIgLAZIB0AAIAFgBIAVAHQgNAjgQAVIgYgKQAHgKAIgQIh1AAQgPAbgOAQQgMgLgNgHg");
	this.shape.setTransform(82.5,19.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D71E04").s().p("AhXBrIAAgXIBLAAIAAgOIgnAAIAAgNQgSAMgVAHQgGgLgLgKQAfgIAWgSIguAAIAAgWIA4AAIAAgKIgfAAIAAgTIAfAAIAAgKIgiAAIAAgMIgWAAIAAgtIBXAAIgGgLIAdgFIAJAQIBRAAIAAAtIgWAAIAAAMIggAAIAAAKIAfAAIAAATIgfAAIAAAKIA3AAIAAAWIgtAAQAVAQAfAJQgLAJgHAMQgTgGgRgMIAAANIgpAAIAAAOIBMAAIAAAXgAArAxQgNgKgHgKIgsAAQgIAKgNAKIAeAAIAAgOIAZAAIAAAOIAeAAIAAAAgAgSAHIAmAAIAAgKIgmAAgAgSgWIAmAAIAAgKIgmAAgAAug9IAAAKIAaAAIAAgPIiRAAIAAAPIAdAAIAAgKIAaAAIAAAKIAmAAIAAgKg");
	this.shape_1.setTransform(59.5,19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D71E04").s().p("AhBBsIAAhRICNAAIAABRIgcAAIAAgHIhWAAIAAAHgAgmBTIBWAAIAAgKIhWAAgAgmA4IBWAAIAAgKIhWAAgAhdAVIAAgSIDFAAIAAASgAhJgCIAAgoIgNAIQgIgNgJgGQArgVAVghIAbAFIgGAJIAsAAIAFgCIASAKQgEAJgHAJIAvAAIAABBgAARgSIApAAIAAgJIgpAAgAgwgSIApAAIAAgJIgpAAgAARgqIApAAIAAgJIgpAAgAgwgqIApAAIAAgJIgpAAgAgphDIAxAAIAHgJIgvAAg");
	this.shape_2.setTransform(36,19.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D71E04").s().p("AACBsIAAhfIgjAAIAABKIgcAAIAAhCQgOAOgQALQgGgMgIgMQAjgWAXgvIgyAAIAAgaIA/AAQAGgRAEgRIAbAHIgIAbIBvAAIAAAaIh5AAQgLAUgIAPIAkAAIAAgbIAbAAIAAAbIBCAAIAABGQABASgMAGQgKAEgdAAQgCgMgGgNIAaAAQAEAAAAgEIAAgsIgmAAIAABfg");
	this.shape_3.setTransform(13.2,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D71E04").s().p("AgIBYQAcgPARgaQgKgXgHgcIgMAPQgFgJgHgJIAAAEIhXAAIAAgwIBXAAIAAAjQAWggALg6IAaAGQgGAZgFAPIA7AAIAAAZIgNAAQgHAygRAgQARAZAaAMQgKAIgIAPQgYgNgQgXQgRAXgaAOQgFgJgLgLgAAzATQAJgWAEggIgcAAQAGAhAJAVgAhFgVIApAAIAAgMIgpAAgAhWBUIAYAAQABAAABAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgNIgvAEIgDgWIAygFIAAgLQAJgEAJgFIg4AAIAAgUIBSAAIAFgCIAOAMQgRARgVAKIAAABIAngEIAAAWIgnAEIAAAQQAAAQgKAGQgJADgaAAQgCgLgGgLgAhng6IAAgYIAtAAIgHgUIAYgGIAKAaIAnAAIAAAYg");
	this.shape_4.setTransform(36.7,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D71E04").s().p("AhRBsIAAhzIgOAOQgHgPgIgMQAigiARg0IAaAIQgJAZgNAYIAAAaQA1ggAYg0IAeAGIgHAMQAMASASASQASAQASALQgKAIgJAOQgjgYgbgnQgTAagZAVIASAAIAAAoQAmgRAWgPIASAXQgpAWglANIAAAVQAAAHADADQACACAKAAIAnAAQAIAAADgGQADgGABgUQAKAHAOADQgCAbgIAKQgHAKgUgBIgsAAQgWAAgIgHQgIgHAAgWIAAhQIgQAMQgGgMgLgKIAACDg");
	this.shape_5.setTransform(13.5,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D71E04").s().p("AAVBmQAAgPgIgLIAhABQAIAAADgDQAIgHAGg3IiPAAQAEgfAEgsIAbACIgFAwIBMAAIAGg9Ih8AAIAAgaICBAAIAEgBIAVACQgCAggGA2IAnAAIgBAMQgHBPgMANQgJAJgPABIgSABIgSAAgAhkA7IAAgaICWAAIAAAag");
	this.shape_6.setTransform(36.4,20.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D71E04").s().p("AheBPQAugHAggNQgMgNgUgQIAVgOQAWASAMAMQAagPAPgWIhQAAQgVARgXALQgIgNgJgIQATgIASgMQASgOAKgOIg7AAIAAhGIC2AAIAABGIhsAAIAOAFIgIANIBGAAIAFgBIASALQgmBVh+AWQgGgOgKgKgAAog3IAbAAIAAgYIgbAAgAgKg3IAZAAIAAgYIgZAAgAg9g3IAaAAIAAgYIgaAAg");
	this.shape_7.setTransform(13.2,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.2,38.1);


(lib.biankuang = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(1,0,0,3).p("A1PxLMAqfAAAMAAAAiXMgqfAAAg");
	this.shape.setTransform(136,110);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.biankuang, new cjs.Rectangle(-1,-1,274,222), null);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.diandi();
	this.instance.parent = this;
	this.instance.setTransform(31,-7,2.039,2.039);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(31,-7,554.6,448.6), null);


(lib.an2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABAdIAEgIQAWAGALAEIgEAJQgMgFgVgGgAglAgQARgCAIgFQAJgEgBgOIAIAAQgBAMgCADQgFAOgcAEQgCgFgDgDgAAUAYIAAgFIAAgPIglAAIAAAMIAAACIAAAGIgKAAIABgJIAAgLIgHADIgBgCIgEgFQAMgCAIgFIgKAAIgGAAQADgIABgJIAIABIAKAAIAAgEIgNAAIgIAAIAAgHIAIABIAOAAIgBgGIAJAAIAAAGIAJAAIgBgGIAJAAIAAAGIALAAIAJgBIgBAHIAAAEIAAAGIgIgBIgLAAIAAAEIARAAIAIAAIAAABIgBAFQgBAIgIAAIAAAQIAAAIgAAOgCIAJAAIgBgDIAEAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBIgPAAgAgMgCIASAAIAAgFIgNAAIgFAFgAgFgOIALAAIAAgEIgKAAIgBAEgAgWgQIgBACIAKAAIAAgCIAAgCIgJAAIAAACgAAOgXIALAAIAAgEIgLAAgAgDgXIAJAAIAAgEIgJAAIAAAEg");
	this.shape.setTransform(-5.8,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAeQAIgJAEgMQADgJAAgOIgEAAQgFgBgDABIAAgKIAJABIAEAAIAAgFIgBgKIALAAIgBAGIAAAJIAHAAIAJAAQgBAAABAPQgBAYgCALQgBAKgJgBIgJAAQAAgFgBgEIAIABQABAAAAAAQABAAAAgBQABAAAAgBQABAAAAgBQABgGABgPIAAgSIgIAAQgBAPgDAMQgEAOgJAMQgDgGgEgDgAAHAlIABgKIAAgvIAAgJIAHABIAQAAIAIgBIAAAJIAAAvIAAAJIgKAAIAAgFIgMAAIAAAGgAARAWIAMAAIAAgqIgMAAg");
	this.shape_1.setTransform(-14.6,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAnIABgMIAAgUIAAgJIgEAGIgFgIQAIgIAEgOIACgMIAKADIgCAFIgGAPIAAArIABALgAglAnIABgKIAAg5IgBgIIAHABIAMAAIAGgBIAEAFIAAABIgBABQgEAMgFAIQAHAJAAAJQAAAIgFAEQgCABgFAAIgCAAIAAgBQAAgEgCgDIAEAAQAEAAAAgFQAAgGgCgDIgFgIIAHgTIgIAAIAAApIAAAPIAAAKgAAKAnQAAgGgCgDIAKAAQABAAABAAQAAAAABAAQABgBAAAAQAAgBAAgBIAAgmIgJAAIgIAAIAAgJQADABAFgBIAJAAIAAgIIgBgJIAKAAIAAAJIAAAIIAHAAIAAAKIgHgBIAAAoQAAAEgCADQgCADgIAAIgJAAgAAEgCIAHgEQAFAIAEALIgHAFQgEgMgFgIgAgbAOIAAAAg");
	this.shape_2.setTransform(-22.8,11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAgIADgEQAEgIAFgOIAIAGQgFAOgGAKIgBADgAAdAnIAAgFIghAAIAAAFIgKAAIABgKIAAgrIAAgJIAIAAIAMAAIAAgHIgBgIIAKAAQgBADABAGIAAAGIANAAIAJAAIAAAJIAAApIAAAMgAAQAZIANAAIAAgRIgNAAgAgEAZIALAAIAAgRIgLAAgAAQAAIANAAIAAgOIgNAAgAgEAAIALAAIAAgOIgLAAgAglgKIAFgGQAIAEAIAHIgGAGQgGgFgJgGgAghgeIAFgHQAHAEAHAHIgFAHQgHgHgHgEg");
	this.shape_3.setTransform(-31.8,11.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAiQAFgGADgIIABgEIAIADQgDALgGAJgAAYASIAHgDQAFAIAEAMIgIADQgDgMgFgIgAALASIAIgBQADAHACAMIgIACQgCgMgDgIgAgBATIAHgBIADATIgJABQAAgHgBgMgAgnAeQAEgEADgGQAFgJgBgeQAAgRgBgCIAKAAIgBAUIAEgIIAFAFIgBACIgIALIgBAQIAKAMIgHAHIgFgJQgDANgHAHQgDgEgDgEgAABAKQAHgFAEgGQADgFABgGIgDAAIgDAAQgDAIgFAGQgFAIgHAGQgCgEgEgDQAIgFAEgEIgGgFIgCAEQgCgDgEgDQAIgIAEgMIACgLIAHACIgBAEIAAABIACAAIAFAAIAEAEIgBAEIAAADIAFAAIAAgLIAAgGIAJAAQgBAAABAKIgBAHIAGAAIAIgBIAAAJIgIAAIgGAAQABAFAEAGQAEAEAGAFIgFAIQgKgJgEgKQgEALgLAJIgFgHgAgGgJIABAAIAEADIABgEIgEgEIgCAFgAgBgUIAEAEIACgIIgFAAIgBAEgAgnAAQADgGgBgRIAHACQAAARgCAHgAAaghIAGgDIAHAKIgGAFQgCgGgFgGg");
	this.shape_4.setTransform(-40.3,11.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAnIAAgLIAAgOIABgKIgGANIgGAIQgCgFgDgDIAJgMIAGgLIAAAAIgGAAIgHAAIAAgJIAIAAIAGAAIAAgIIgKACQgBgFgDgEQAVgCALgGIAEAIIgBABIgBAAIgBABIgKADIAAAKIAGAAIAGAAIAAAJIgGAAIgGAAIAAACQAIAFAFAIIgFAHIgIgLIAAAXIABALgAAdAlIAAgGIgRAAIAAAGIgKAAIABgKIAAgxIgBgJIAIAAIAUAAIAIAAIAAAJIAAAwIAAALgAAMAWIARAAIAAgsIgRAAg");
	this.shape_5.setTransform(-49.1,11.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAgQAPgIAAgTIgCAAIgFAAIAAgFIAAgPIAAgGIAGAAIACAAQgDgJgDgFIAHgDQAEAHADAGIgIAEIANAAQAFgIACgJIAJADIgGAOIADAAIAGAAIAAAGIAAAPIAAAFIgGAAIgFAAIAAAXQAAAAABABQAAAAAAAAQABABAAAAQABAAABAAQAFACgBgOQAEADAEABQAAAMgCABQgCAEgLgBQgKABABgIIAAgaIgFAAQgBAMgEAHQgEAKgJAGQgCgFgEgDgAACgCIAYAAIAAgKIgYAAgAgZAnIAAgKIAAgPIABgKQgDAKgIAJQgBgFgDgEQAGgGADgIIAEgIIgFAAQgEAAgDABIAAgKQADACAEgBIAGAAIAAgJIgJACIgDgIQANgBAJgFIAEgCIAFAIIgCABIgIADIAAALIACAAIAHAAIAAAIIgHAAIgCAAIAAADQAFAFAFAHIgGAHIgEgJIAAAYIAAAKg");
	this.shape_6.setTransform(-57.5,11.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAlIgJAAIgCgJIAMABQAFABAAgKIADgYIgDAAIgDAJQgFAMgJAJQgGAGgIAFIgHgGQAPgJAGgKQAFgGACgGIACgEIgFAAIgGAKQgFAGgHAGIgGgFIAAAGQgKAFgKAEIgEABIgCgJIAKgDIAAgaIgCAAIgHABIAAgJIAHAAIACAAIAAgLIgBgJIAKAAQAAADAAAGIAAALIADAAIAFAAIAAAJIgFgBIgDAAIAAAXIADgCIAEgCIAAACQALgIAEgIIgEAAIgGABIgDgIQAGgBAFgFIANgJIgNAAIgKABIAAgKQAFABAFAAIAQAAIAIgBIAGAGIgBABIgBABIgXAQIAIgBIAOAAIAJgBIgBAOQAAAlgMAAIgFgBg");
	this.shape_7.setTransform(-66.2,11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNAgQAFgFADgHQAEgKAAghQAAgIgBgEIAHABIAOAAIAIgBIAAAJIAAA1QAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBIAAgPQAEACAEABQAAARgCACQgBACgDABIgGABQgHAAgBgCQgCgBAAgGIAAg3IgLAAQAAAdgCAJQgCARgIAKIgIgHgAgZAnIABgIIAAgRIAAgOQgEALgGAJQgCgFgDgDQAJgLAEgPIgFAAIgFABIAAgKIAFABIAGAAIAAgIQABgFgBgDIAKAAQgBADAAAFIAAAIIAGAAIAFgBIAAAKIgFgBIgGAAIAAACIAMAQIgFAHIgHgMIAAAgQAAAFABADg");
	this.shape_8.setTransform(-74.7,11.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AATAoIAAgEIgmAAIAAAEIgJAAIAAgIIAAgQIAAgHIAGAAIAXAAIALgJIgfAAIgIAAIAAgHIAHAAIAjAAIAHAAIAFAFIgDACIgLAJIAJAAIAHAAIAAAHIAAAQIAAAIgAgTAbIAmAAIAAgKIgmAAgAAAgdQgGAIgKAGIgTAKQAAgEgFgEQANgFAJgFQAKgHAFgJIAJACIgCACQAIAHAFAEQAJAGAOAEIgDAFIgBAEQgYgIgMgQgAgLgNIAEgIQAOADAFAEIgDAGQgJgEgLgBg");
	this.shape_9.setTransform(-83.3,11.2);

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
	this.instance.setTransform(3.9,7.9,1,1,0,0,0,10.2,10.2);
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
		this.num =  0;
		this.unitdata=null;
		var len = window.PriceDataFiltered.length;
		for(var i=window.cid; i<len ; i++){
			this.unitdata = window.PriceDataFiltered[i];
			break;
		}
		this.num = this.unitdata.price;
		this.nums = [Math.floor(this.num/1000)%10, Math.floor(this.num/100)%10,Math.floor(this.num/10)%10, this.num%10];
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_9
	this.cityName = new lib.Symbol3();
	this.cityName.name = "cityName";
	this.cityName.parent = this;
	this.cityName.setTransform(0.4,-18.8,0.946,0.946,0,0,0,3.6,9.8);

	this.timeline.addTween(cjs.Tween.get(this.cityName).wait(1));

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

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AgGA9IABgRIAAg1IgcAAIAAAjIABARIgRAAQACgIgBgJIAAgjIgBgNIAMAAIAgAAIAAgQIgGABIgmAAQgCgIgCgGIAIAAQAwgBAegEIANgEIAJAPIgJABIgnAFIAAARIAhAAIAMAAIgBANIAAAkQACAQgUgBIgOgBQAAgHgDgHQAKACAHAAQAFAAAAgEIAAgiIgfAAIAAA1IABARg");
	this.shape.setTransform(31.2,15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AAoA5QgOgBgPgRQgKgOgEgQIggAAIAAAeIAigKIABAPQgEAAgbAJIgTAEIgFgOQAGgCgBgHIAAhLIgBgQQAGACAKAAIA/AAQAJAAAGgCIgBAOIAAAPIABAMIgOgBIgWAAIACAOIAbAAIAPgBIAAAOIgPgBIgYAAQAEANAKALQAHAHAFAAQACACADgUQAGAFAHADQgFAcgKAAIgBgBgAgjgDIAeAAIgCgOIgcAAgAgjgdIA/AAIAAgOIg/AAg");
	this.shape_1.setTransform(18.4,15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AARAcQgLgOgGgUQgDANgGAMQgHAOgNAMQgJAIgMAHQgEgIgHgGQATgJALgMQAYgbAAguIgBgLIAQAAIgBAMQAAAfAOAWQAHANANAMQALAIAJAGQgGAHgEAIQgWgPgMgRg");
	this.shape_2.setTransform(4.3,15.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("AhHA3IALgIQAIgIAEgBIAAgiIgIAAQgGABgEABIAAgQQADACAIAAIAMAAQAGAAAFgCQgBAGAAAKIAAAgQABgBAHAHQAHAIAjgBQAeAAAZgCQgFAHAAAJIg1ACQgYAAgKgCQgHgCgKgJQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDgBgIAJIgIAIgAgKAjQARgHAPgPIgWgPIAJgKQALAIALAIQAIgKAFgKIgtAAQgCAUgEAQQgDAMgIAMQgEgGgJgHQAIgJACgNQAFgTAAggQAAgJgCgHIAHAAIAvgEIATgFIALAPIgIABQgXAGgkABIABAEQgBACAAAJIAqAAIAOgCIAIAJQgCADgCAEQgGAPgJAMIAWASIgLAMIgVgSQgOAOgUAKQgEgIgGgFgAhDg1IAMgMQAPAOAKAPIgMAKQgLgPgOgMg");
	this.shape_3.setTransform(151.1,30.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("Ag0BHQABgIABgKIAAgfIAAgNQgEAFgHAFQgEgJgEgHQAXgPAKgUIAOAJIgDACIgJAOIAAA9IAAARgAA1BAIg/AAQgLABgIABIAAgSIATAAIAWAAIAAgdIgPAAIgRAAIAAgRIARABIAPAAIAAgaIgRAAQgKAAgHABIAAgBIAAgQIARAAIAdAAQgLgLgRgJIALgKQAQAHAQANIgLAKIAXAAQAKABAHgBIAAARQgIgBgJAAIgXAAIAAAaIAUAAIAPgBIAAARIgPAAIgUAAIAAAdIAZAAIARAAIAAASQgHgBgKgBgAgWgXgAhDgpQALgFAIgIQAJgIADgHIAOAJQAAABgHAHQgOAOgQALIgIgOg");
	this.shape_4.setTransform(135.5,30.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("AhFA3QAMgVAAgeIAAgEIAPACIgBANIgBAJQADAFAGAGIAAgpIgNAAIgQAAIAAgPIAQABIALAAIAAgOIgIAAIgPABIAAgPIAPAAIAIAAIAAgEQAAgJgBgEIARAAIAAANIAAAEIAHAAIAOAAIAAAPIgOgBIgHAAIAAAOIAJAAIANgBIAAAPIgNAAIgIAAIAAAPIAJAAIALAAIAAAPIgLAAIgJAAIAAAVQAKAFAZAAQAmAAARgEQgCAHgBAKIgPABIgjAAQgSAAgNgCQgWgEgLgSQgDAPgHALQgFgHgHgEgAAKAlQgFgCACgLIAAgeQAAgKgCgGQAFABAKAAIAYAAIAAgWIgZAAIgOAAIAAgQIAPABIAZAAIAPgBIgBAOIAAAXIABAQQgFgBgLAAIgWAAIAAAcIAAADQACACAKAAQAOAAACgDQACgCAAgHIAAgKQAIAEAIABQgBAUgEAFQgDAEgGABIgWABIgHAAQgNAAgCgDg");
	this.shape_5.setTransform(149.6,15.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("AhCAyQAWgKAIgPQAIgNAAgYIgTAAQgLAAgHACIAAgSIASABIBgAAIARgBIAAASQgJgCgIAAIgZAAIAAA0QgBAHAMgCQAPAAAAgFQABgFABgPQAHAEAJABQgCAagFADQgCAHgbAAQgRAAgDgEQgFgCABgIIAAg7IgUAAQAAAcgIARQgHAOgMAJQgFADgLAFQgFgIgGgGgAAkguIhIAAIgNAAIAAgRQADABAKAAIBIAAQALAAAEgBIAAARIgPAAg");
	this.shape_6.setTransform(135.3,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-28,233.4,90.1);


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
(lib._272x220 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{price:90,reshow:220,moveup:253,"no data":377});

	// timeline functions:
	this.frame_0 = function() {
		this.loop=1;
		window.cid = 0;
		
		//debug_price.call(this);
		
		//function debug_price(){
		//	window.is_all_data_error = false;
		//	window.PriceData = [
		//		{price: "3891", name: "罗马", is_error: false}, 
		//		{price: "4264", name: "伦敦", is_error: false}, 
		//		{price: "0", name: "布鲁塞尔", is_error: false}
		//	];
		//		
		//	window.PriceDataFiltered = [
		//		{"price":"3892","name":"罗马","is_error":false,"kf":2},
		//		{"price": "3990", "name": "布鲁塞尔", "is_error": false, "kf":0},
		//		{"price":"4264","name":"伦敦","is_error":false,"kf":1}
		//	];
		//		
		//	window.PriceDataDic = {
		//		"布鲁塞尔": {price: "0", name: "布鲁塞尔", is_error: true}, 
		//		"伦敦": {price: "4264", name: "伦敦", is_error: false}, 
		//		"罗马": {price: "3891", name: "罗马", is_error: false}
		//	};
		//	//this.gotoAndPlay("price");
		//}
	}
	this.frame_90 = function() {
		//console.log(window["is_data_error"])
		if(window.is_all_data_error==true){
			this.gotoAndPlay('no data');
		}else{
			//do nothing
		}
	}
	this.frame_91 = function() {
		window.cid=0;
	}
	this.frame_126 = function() {
		if(window.PriceDataFiltered.length<2){
			this.gotoAndPlay("moveup");
		}else{
			window.cid=1;
		}
	}
	this.frame_169 = function() {
		if(window.PriceDataFiltered.length<3){
			this.gotoAndPlay("reshow");
		}else{
			window.cid=2;
		}
	}
	this.frame_220 = function() {
		window.cid=0;
	}
	this.frame_366 = function() {
		if(this.loop>1){
			this.loop--;
			this.gotoAndPlay(2);
		}else{
			this.stop();
		}
	}
	this.frame_619 = function() {
		if(this.loop>1){
			this.loop--;
			this.gotoAndPlay(2);
		}else{
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(90).call(this.frame_90).wait(1).call(this.frame_91).wait(35).call(this.frame_126).wait(43).call(this.frame_169).wait(51).call(this.frame_220).wait(146).call(this.frame_366).wait(253).call(this.frame_619).wait(1));

	// =border=
	this.instance = new lib.biankuang();
	this.instance.parent = this;
	this.instance.setTransform(135.9,110,1,1,0,0,0,135.9,110);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(620));

	// =ss=
	this.instance_1 = new lib.xiaobiaoanniu2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(259.8,204,0.778,0.783,0,0,0,4,8.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(91).to({_off:false},0).to({_off:true},276).wait(253));

	// t7
	this.instance_2 = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(201.1,13.7,0.862,0.862,0,0,0,74.6,8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(526).to({_off:false},0).wait(1).to({regX:75.2,regY:7.9,x:201.6,y:13.5,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// t5
	this.instance_3 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(135.4,164.5,0.721,0.721,0,0,0,101,26.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(526).to({_off:false},0).to({alpha:1},9).wait(85));

	// t4
	this.instance_4 = new lib.yuding();
	this.instance_4.parent = this;
	this.instance_4.setTransform(136,166.3,0.723,0.723,0,0,0,100.9,25.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;
	new cjs.ButtonHelper(this.instance_4, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(463).to({_off:false},0).to({alpha:1},9).wait(46).to({alpha:0},8).wait(94));

	// t3
	this.instance_5 = new lib.t3swf("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(90.9,188.7,1,1,0,0,0,91,13.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(404).to({_off:false},0).to({alpha:1},8).wait(42).to({startPosition:0},0).to({alpha:0},8).to({_off:true},1).wait(157));

	// t2
	this.instance_6 = new lib.t2swf("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(123.9,154.8,1,1,0,0,0,88.3,19.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(377).to({_off:false},0).to({alpha:1},8).wait(69).to({startPosition:0},0).to({alpha:0},8).to({_off:true},1).wait(157));

	// t7
	this.instance_7 = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(201.1,13.7,0.862,0.862,0,0,0,74.6,8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(273).to({_off:false},0).wait(1).to({regX:75.2,regY:7.9,x:201.6,y:13.5,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(253));

	// t5
	this.instance_8 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(71,188.4,0.537,0.537,0,0,0,101,26.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(273).to({_off:false},0).wait(1).to({regX:101.8,x:71.4,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(253));

	// t4
	this.instance_9 = new lib.yuding();
	this.instance_9.parent = this;
	this.instance_9.setTransform(71.5,211.2,0.542,0.542,0,0,0,100.9,24.8);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;
	new cjs.ButtonHelper(this.instance_9, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(253).to({_off:false},0).wait(1).to({regY:25,y:197.9,alpha:0.143},0).wait(1).to({y:184.6,alpha:0.286},0).wait(1).to({y:171.2,alpha:0.429},0).wait(1).to({y:157.9,alpha:0.571},0).wait(1).to({y:144.5,alpha:0.714},0).wait(1).to({y:131.2,alpha:0.857},0).wait(1).to({y:117.8,alpha:1},0).wait(106).to({_off:true},1).wait(253));

	// Layer_7
	this.instance_10 = new lib.t2swf2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(132.4,173.9,1.301,1.301,0,0,0,88.9,19.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(220).to({_off:false},0).wait(1).to({regX:78.2,regY:9.6,x:118.4,y:160.8,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(27).to({y:145.1},0).wait(1).to({y:129.3},0).wait(1).to({y:113.5},0).wait(1).to({y:97.7},0).wait(1).to({y:81.9},0).wait(1).to({y:66.1},0).wait(1).to({y:50.3},0).wait(106).to({_off:true},1).wait(253));

	// Layer_7
	this.instance_11 = new lib.t2swf2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(132.4,173.9,1.301,1.301,0,0,0,88.9,19.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(177).to({_off:false},0).wait(1).to({regX:78.2,regY:9.6,x:118.4,y:160.8,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(35).to({_off:true},1).wait(400));

	// Layer_7
	this.instance_12 = new lib.t2swf2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(132.4,173.9,1.301,1.301,0,0,0,88.9,19.6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(134).to({_off:false},0).wait(1).to({regX:78.2,regY:9.6,x:118.4,y:160.8,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(29).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(443));

	// Layer_7
	this.instance_13 = new lib.t2swf2();
	this.instance_13.parent = this;
	this.instance_13.setTransform(132.4,173.9,1.301,1.301,0,0,0,88.9,19.6);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(91).to({_off:false},0).wait(1).to({regX:78.2,regY:9.6,x:118.4,y:160.8,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(29).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(486));

	// t1
	this.instance_14 = new lib.t1swf("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(72,157.9,0.781,0.781,0,0,0,41.6,23.9);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({_off:false},0).wait(1).to({regX:64.6,regY:1.8,x:90,y:140.6,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(529));

	// Layer_2
	this.instance_15 = new lib.Symbol1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(135.8,165.4,1,0.503,0,0,0,136,108);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(7).to({_off:false},0).wait(1).to({regY:110,y:166.3,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.58,y:158.2},0).wait(1).to({scaleY:0.65,y:150},0).wait(1).to({scaleY:0.73,y:141.9},0).wait(1).to({scaleY:0.8,y:133.7},0).wait(1).to({scaleY:0.88,y:125.5},0).wait(1).to({scaleY:0.95,y:117.3},0).wait(1).to({scaleY:1.02,y:109.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.5,y:166.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_1
	this.instance_16 = new lib.Symbol1("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(136,110,1,1,0,0,0,136,110);
	this.instance_16.alpha = 0.82;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3).to({_off:false},0).wait(1).to({alpha:0.765},0).wait(1).to({alpha:0.711},0).wait(1).to({alpha:0.656},0).wait(1).to({alpha:0.601},0).wait(1).to({alpha:0.547},0).wait(1).to({alpha:0.492},0).wait(1).to({alpha:0.437},0).wait(1).to({alpha:0.383},0).wait(1).to({alpha:0.328},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.219},0).wait(1).to({alpha:0.164},0).wait(1).to({alpha:0.109},0).wait(1).to({alpha:0.055},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// bg
	this.instance_17 = new lib.bg();
	this.instance_17.parent = this;
	this.instance_17.setTransform(137.3,132.3,0.76,0.76,0,0,0,250,167);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(3).to({_off:false},0).to({regX:249.8,regY:166.8,scaleX:0.5,scaleY:0.49,x:107.1,y:85.5},87,cjs.Ease.quartOut).wait(530));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(135.5,109.5,273,221);
// library properties:
lib.properties = {
	id: '9B223EFC8A5B471C91AC4845A2ACD4A9',
	width: 272,
	height: 220,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"img/bj.jpg?1574797718054", id:"diandi"}
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