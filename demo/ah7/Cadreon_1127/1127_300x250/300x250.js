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



(lib.bg = function() {
	this.initialize(img.bg);
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
	this.shape.graphics.f("#94292B").s().p("AAHAUIhVgMQAAAAgBAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAGgCIBWgUIAJgDIAkAAIAAAAIABAAIAIADQAHAEADAGQADAHgCAIIgDAHIAAAAIAAgCQADgHgCgEQgKgKg8Abg");
	this.shape.setTransform(165.5,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D91F05").s().p("AmPEBQAQgigDgmIgMAAIAAgOIAMAAIAAg8IASAAIAFgXIASADIgIAUIAbAAIAACGQAAAMgGADQgHAEgRgBQAAgIgFgHIAQAAQABAAABAAQABAAAAAAQAAgBAAAAQABgBgBgBIAAg8IgcAAQACArgSAmQgGgFgHgEgAlyCrIAcAAIAAgtIgcAAgAlGD/QAXgegDghIAAgoIA9AAIAABXQAAAGABACIACABIAEAAIADgBIACgGIAAgUQAGAEAGACQgBAQgBAIQgBAGgEADQgEACgFAAIgJAAQgGAAgFgEQgEgCAAgSIAAhGIgdAAIAAAYQADAngZAiQgGgGgIgEgAoyEIIAAhMQgOAggTATQgEgJgFgIQAYgYAOgkIgiAAIAAgQIAmAAIAAgdIgiAGIgGgOQAugHAggMIANANQgOAGgTAEIAAAhIAlAAIAAAQIglAAIAAAGQAVASAOAPIgKAPIgZgcIAABMgAubDbQgKAjhGAKQgDgIgFgHQA8gIAJgYIhCAAIAAgQIBHAAIACgKIATAAIgCAKIBPAAIAAAQIhCAAQATAbAzADQgHAIgEAJQg4gGgVgngAngEIQgCgJgFgKIAcABQAGAAAAgFIAAiWIARAAIAACWQABAQgKADQgJAEgVAAIgFAAgArdDnIAAg3IgOAGIgGgQIAUgIIAAgzIARAAIAAAsIAVgJIAAg1IARAAIAAAtIAUgIIAHgGIAMAFIgBADQABA4gDANQAAAMgJACQgJADgJgBQgBgIgEgHIALAAQAEABABgGQABgGAAgsIgVAKIAABEIgRAAIAAg9IgVAJIAAA+QgCAPAQgCIAqAAQANADAAgdQAIAFAIACQAAAmgdgDIgrAAIgFABQgcAAADgegAi9ECIAAgQIBHAAIAAgsIgxAAIAAgQIB3AAIAAAQIgzAAIAAAsIBIAAIAAAQgAspDaIAagKIAAg5IgYAAIAAgRIAYAAIAAgrIAQAAIAAArIAVAAIAAARIgVAAIAAAyIAUgIIAEAPIg7AcgAlwDDIALgFQAIAQAEANIgLAFQgEgOgIgPgAnuDYIAAhpIASAAIAABpgAtrDCIAAhLIhjAAIAABLIgQAAIAAhaIAzAAIAGgQIAUADIgHANIA+AAIAABagAvJC1QAOgGAMgNIgXAAIAAgNIAPAAIATAAIAAgaIAPAAIAAAaIAQAAIgKgFIAMgUIAOAGIgQATIATAAIAAANIgjAAIAAAYIgPAAIAAgSQgNAPgPAJQgEgGgFgFgAuSCsIAJgJIAYARIgJAJQgKgJgOgIgAi8CpQAhgNAYgTIAMALQgZAVghAPgAhiCWIAMgNQAgAQAaAQIgMANQgYgPgigRgAlwCJIALgEQAHAOAEAMIgLAFQgFgNgGgOgAi9CbIAAgsIBJAAIgIgTIATgFIALAYIBDAAIAAAoIgSAAIAAgYIh/AAIAAAcgAu3CVIgLgTIALgFIAMASIgMAGgAlBCHIAAgPIAoAAQgFgOgGgOIARgFIALAcIgNAFIA0AAIAAAPgAC3ATQgZAAgHgUIgBgCIgBACQgHAOgrAGQhBgIAHgrQAEhCBlADIABAAIAAgSQACgmggABQgZgBgdANIgCABIgIgWIACgBQAYgRAsgDQA+gBgCBDIAABbQgCASAOgBIAMABIAAAUQgKAEgMAAIgCAAgABRgjQAEAeAZgDQAjgCACghIAAgbIgCAAIgCAAQhCAAAEAjgAnOATQgsgCgSgMIAAgzIAaAAIAGAaQgDANAiABQAhAEAGghQgDgagigFIgLgDQgtgEgHgwQADg4BFgDQAjABAWAMIAAAwIgbAAIgGgWQACgLgcgBQgjAAgBAZQADAXAhAFIALADQAvAFAHAyQgBAigWANQgXAOgcAAIgBAAgAqeATQgjgBgLgUQgMgVABgYIAAhRQAAgWgQAAIgJgCIAAgYIA+AAIAAB9QAAAnAfAAQAWAAAZgPIAAAAIAAhlQAAgWgPAAIgLgCIAAgYIA/AAIAACUQAAAWAQAAIALABIAAAUIg4AAIgEgWIgBABQgeAZgeAAIgBAAgAlTggIAAh2IgbAAIAAgaIAdAAIAMgtIAXAAIAAAtIAuAAIAAAaIguAAIAABxQABAgATgEQAOAAAOgHIACgBIAKATIgCABQgPANgjADIgBAAQgsAAAAgzgAtOAQIAAgUIAcgEIgXhBIhfAAIgYBCIAdADIAAAUIhQAAIAAgUIAMgCQAOgCAFgVIBajsIAWAAIBWDpQAJAcAMgCIALACIAAAUgAuehjIBLAAIglhngAIBANIA2goQBmhUAagnIACgEIAAABIACgIQADgIgDgIQgEgGgGgDIgIgDIgBAAIAAgBIgkABQCygoC8gJQAAAAABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABgBAAQAAAAAAABQAAAAAAAAQgBAAAAABQjsBMi3CeIAAABIhPANQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBgAFdAPIAAgUIANgBQALADgBgcIAAhOQAAgngiABQgVAAgZAPIgBABIAABiQgCAeANgDIAMABIAAAUIhWAAIAAgUIANgCQAPAEgCgeIAAhfQAAgWgPAAIgJgCIAAgYIA2AAIADAXIACgBQAUgWAqgEQA5AAABBEIAABPQgCAdAOgDIAPACIAAAUgAhCAPIAAgUIANgCQAOAEgBgeIAAhgQAAgVgQAAIgJgCIAAgTIA+gHIAACRQgBAfAKgFIAQACIAAAUgAjcAPIAAgUIALgBQAOAEgBgfIAAhfQAAgWgQAAIgKgCIAAgYIA4AAIADAYIACgCQAVgaAaAAQAJAAAJADIAAArQgPgIgUAAQgRABgLAOIAABeQgCAfAMgFIAWADIAAATgAgxjsQAAgVAWgBQAXABABAVQgBAWgXAAQgWgBAAgVg");
	this.shape_1.setTransform(103.4,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.2,0.4,202.5,53.3);


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
	this.shape.graphics.f("#D71E04").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMgAgTgSQgHAIgBAKQABALAHAJQAJAHAKABQALgBAIgHQAIgJAAgLQAAgKgIgIQgIgIgLAAQgKAAgJAIg");
	this.shape.setTransform(150.7,13.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D71E04").s().p("Ag1BuQAXgaAHgmQAHgbAAgrIAAheIARAAIAABeQABAvgGAeQgIApgYAcQgHgGgKgGgABiB5IAAhtIgOAHQgHgZgTgiIAACcIgTAAIAAjmIATAAIAABHIAOgGQARAdAJAaIAAh8IATAAIAADvgAhwBsQAVgmARgwIAQALQgRAtgSAogAg8AQQAPgVAIgqIAOAEQgHAtgOAWgAACgmIAPgGQAPAgAEAZIgQAGQgEgbgOgegAh0gjIAKgOQAeAOAQAMIgLAQQgOgLgfgRgAhphrIAMgOQAdAQAOAMIgMAQQgPgOgcgQg");
	this.shape_1.setTransform(130.5,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D71E04").s().p("AgDBwIh0AAIAAjYIB0AAIAAATIhgAAIAAAeIAOgIQARAWATAdQANgeAKgeIASACQgNApgQAiQAWAjAKAYIgSAKQgIgVgQgcQgSAigVAXQgFgFgIgFIAAAVIBgAAIAAAOQAbgdALgpQAGgbAAglIAAgSIATAAIAAATIgBAWQAIAnANAaQANAaAaAUQgKAHgEAIQglgggPgxQgMAyghAhQgFgGgGgGgAhjBEQAXgYASglQgUgggVgcgABUgMQAGgQAIghIhFAAQgLAhgNAUIgQgKQAZgiAKhHIATACQgEAYgEASIBEAAIAEgCIAMAEQgIApgLAdg");
	this.shape_2.setTransform(104.6,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D71E04").s().p("Ah7BmQAXgaARgHIAAhGIglAAIAAgUIA6AAIAABbIATAPQAUANAyAAQA1AAAsgFQgGAMAAAJQgnADg0AAQgzAAgYgPIgOgMQgIgGgDAAQgLABgaAkgAgwA8QAggQAQgdQANgZAGgmIhBAAIAAgUIBDAAIACg0IAUAAIgDA0IBOAAIAAAUIhPAAIgDATQA3A0AbAmIgRANQgWghgxgxQgQA6gwAaQgGgJgIgHgAhwhqIARgJQAYAbALAYIgSAKQgKgWgYgeg");
	this.shape_3.setTransform(77.1,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D71E04").s().p("Ah5B3IAAgTIAnAAIAAiaIA/AAIADgWIhhAAIAAgTIBkAAIACgWIAVACIgDAUIBqAAIAAATIhuAAIgDAWIBVAAIAACaIAlAAIAAATgAg/BkICAAAIAAgYIiAAAgAg/A8ICAAAIAAgXIiAAAgAg/AVICAAAIAAgVIiAAAgAg/gPICAAAIAAgXIiAAAg");
	this.shape_4.setTransform(50.1,4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D71E04").s().p("AhOB7IAAh9QgPAxgTAbQgEgLgHgJQANgQAMgdQALgbAHgcIgnAAIAAgTIApAAIAAg5IATAAIAAA5IAiAAIAAATIgiAAIAAAKQAXAeAOAXIgOAQQgGgOgRgcIAACEgABdBiQhkANgJAEIAAgBIgHgTQAHgCAKgWQAHgOALgcQAPgjAHgeIAVAIQgUBBgcA1IBPgKQgMgbgKgQIARgHQAbAvAKAgIgSAJgAgdgMQAdgjANhCIAVADQgQBGgeAogAA7hwIATgEQAPA7AfAoQgLAHgFAJQgfgqgShFg");
	this.shape_5.setTransform(22.9,5.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D71E04").s().p("AhDB6IAAg3IgyAKIgFgUIA3gJIAAgmIgYAAQgQAAgEADQgDgLgDgGQAFgBAIgUQAHgRAHgdIgdAAIAAgTIAhAAQAFgSABgOIAUAFIgGAbIAwAAIAAATIg1AAQgJAhgNAeIAaAAIAAgpIATAAIAAApIAbAAIAAASIgbAAIAAAjIAdgGIABASIgeAHIAAA6gAgTB0IAAgSIA+AAIAAhCIgvAAIAAgTIByAAIAAATIgwAAIAABCIA8AAIAAASgAgUgMQAdgLAagUQAcgWAQgYIhVAAIAAgSIBhAAIAEgBIAOAHQgOAfgdAbQAmARATANIgMAPQgUgNgngUQgbAWggAMQgHgKgGgFg");
	this.shape_6.setTransform(-4,5.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-17.8,202,52.4);


(lib.t1swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D71E04").s().p("AiRCFQBFgXAAg1IAAgNQggAWgjANQgMgVgRgQQA6gRAqgiIg7AAIAAieIEHAAIAACeIg8AAQAqAhA7APQgRARgMAVQgjgLgcgTIAAB1IgtAAIAAiCIAbAAQgbgWgQgVIglAAQgRATgcAYIAfAAIAAAZQAABOhTAfQgLgSgUgRgAAVgtIBBAAIAAgbIhBAAgAhXgtIBBAAIAAgbIhBAAgAAVhpIBBAAIAAgaIhBAAgAhXhpIBBAAIAAgaIhBAAg");
	this.shape.setTransform(137,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D71E04").s().p("Ah1ChIAAjBIgyAAIAAgqIAyAAIAAhPIAuAAIAABPIAyAAIAAhXIArAAIAABXIAzAAIAAhTIAuAAIAABTIAxAAIAAAqIgxAAIAABtIiMAAIAAhtIgyAAIAACWIDlAAIAAArgAAWAkIAzAAIAAhEIgzAAg");
	this.shape_1.setTransform(99.9,-0.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D71E04").s().p("AibCqIAAgoICEAAIAAgsIhUAAIAAgnIBUAAIAAgqIhZAAIAAgXIgkASQgIgRgWgTQA0gWAtghQAvgkAbgqIAmASIgGAKQA8BABeAqQgWATgIARIgjgSIAAAWIhbAAIAAAqIBYAAIAAAnIhYAAIAAAsICHAAIAAAogABaghQgygggogsQgoAsgyAgIC0AAIAAAAg");
	this.shape_2.setTransform(62.9,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D71E04").s().p("AgfCtIAAisIiIAAIAAgqICGAAIAAiDIAuAAIAAAtIB3AAIAAApIh3AAIAAAtICbAAIAAAqIiZAAIAAA1IAPgYQBcAkAfAOIgYAoQgigShQgiIAABpg");
	this.shape_3.setTransform(26,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D71E04").s().p("AgCB7IA5ABQALAAAAgJIAAjWIhdAAIAAgsIDHAAIAAAsIg7AAIAADXQAAATgFALQgFALgNAGQgSAIg5ABQgEgXgNgagAiiCBIAjABQAHAAAAgIIAAhJIgnAKIgMgsIAzgLIAAg/IgvAAIAAgqIAvAAIAAhGIAtAAIAABGIAqAAIAAAqIgqAAIAAA1IArgLIAFApIgwANIAABVQAAAfgRAKQgOAHgrAAQgBgRgMgYg");
	this.shape_4.setTransform(-11.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.6,-30.7,189.2,58.8);


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


(lib.bg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(33,-7,2.09,2.09);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1, new cjs.Rectangle(33,-7,568.6,459.9), null);


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


(lib.yuding = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// li.swf
	this.instance = new lib.liswf("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(113.6,19.4,2.128,2.128,0,0,0,23.4,5.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhrB1IAAjaIBTAAIAACRQAAAQgKAEQgKAEgagBQgCgJgFgJIAdAAQAFAAgBgFIAAh/IgtAAIAADIgAAYB0QgDgJgEgJIAdAAQAFAAgBgEIAAhiIgpAAIAAgSIA9AAIgxgjIALgMIAWAQQAQgPANgSIhFAAIAAgRIBRAAIADgBIAMAHQgSAegYAWIAXAQIgFAHIATAAIAMADQgLAegKAYIgOgDIAOgkIgbAAIAABiQAAAOgJAFQgJADgSAAIgJAAgAC3BKIAMgLQAbAUAUAUIgNANQgSgUgcgWgAF/BeQAgACALgCQAHABAAgHIAAikIhOAAIAAgSICPAAIAAASIguAAIAACkQABASgMAFQgOAEgjAAQgEgKgFgLgABnBlQBOgjgMgsIAAgyIARAAIAAAyQANA1hUAoIgMgOgAEpBeQALgEADgTIAAhZIgsAAIAAgSIA+AAIAABqIAlgYQACAJADAIQg+AqgDAFQgEgJgFgHgAjvBZQAIgBACgOIAAiwIBhAAIAAB2IhOAAIAABAIAxgQIgQgaIARgIQAWAjAOAdIgRAKIgMgaQhMAbgDAEQgCgKgFgKgAjSAAIA8AAIAAgjIg8AAgAjSg0IA8AAIAAghIg8AAgAnxBqIAAgTIB8AAQAXg5APhAIAVAEQgSA+gVA3IBTAAIAAATgAnDgeIATgEQARA4AJAxIgVAFQgHgzgRg3gADWA6IAAhnIhGAAIAABnIgSAAIAAh3IAmAAIAGgaIg2AAIAAgRIB+AAIAAARIgyAAIgKAaIAyAAIAAB3gAnmgwIAAgTIDNAAIAAATgAEbhjIANgMQAYAWAPAUIgOAMQgPgTgXgXgAmShvIATgFIANAoIgTAGQgFgTgIgWg");
	this.shape.setTransform(113.6,19.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape}]},1).wait(3));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D81E05").ss(1.3,1,1).p("ARGCyIgFljQgBgdgmAAMgg5AAAQgmAAABAdIAFFjQAAAdAmAAMAg5AAAQAmAAAAgdg");
	this.shape_1.setTransform(112.4,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AQgDPMgg5AAAQgmAAgBgdIgEljQgBgdAmAAMAg5AAAQAmAAAAAdIAGFjQAAAdgmAAIAAAAg");
	this.shape_2.setTransform(112.4,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.1,-1,220.7,43.4);


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

	// Layer_5
	this.p3 = new lib.n1();
	this.p3.name = "p3";
	this.p3.parent = this;
	this.p3.setTransform(103.3,5.7,0.724,0.724,0,0,0,-4,-28.9);

	this.p2 = new lib.n1();
	this.p2.name = "p2";
	this.p2.parent = this;
	this.p2.setTransform(84.5,5.7,0.724,0.724,0,0,0,-4,-28.9);

	this.p1 = new lib.n1();
	this.p1.name = "p1";
	this.p1.parent = this;
	this.p1.setTransform(65.7,5.7,0.724,0.724,0,0,0,-3.9,-28.9);

	this.p0 = new lib.n1();
	this.p0.name = "p0";
	this.p0.parent = this;
	this.p0.setTransform(47,5.7,0.724,0.724,0,0,0,-3.8,-28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p0},{t:this.p1},{t:this.p2},{t:this.p3}]}).wait(1));

	// Layer_9
	this.cityName = new lib.Symbol3();
	this.cityName.name = "cityName";
	this.cityName.parent = this;
	this.cityName.setTransform(45,-12,1.015,1.015,0,0,0,48.1,18.9);

	this.timeline.addTween(cjs.Tween.get(this.cityName).wait(1));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AgGA3IABgPIAAgwIgZAAIAAAgIABAPIgPAAIABgPIAAggIgBgMIALAAIAcAAIAAgOIgFABIgiAAQgBgHgDgFIAIAAQAqgBAcgEIAMgEIAHAOIgHAAQgNADgWACIAAAPIAeAAIAKAAIgBAMIAAAgQACAPgSgBIgNgBQAAgGgDgHQAKADAGAAQAFAAgBgEIAAgfIgbAAIAAAwIAAAPg");
	this.shape.setTransform(30.4,13.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AAkA0QgNgBgNgQQgJgMgDgPIgeAAIAAAbIAfgJIABAOQgDAAgZAHIgRAFIgEgNQAFgCgBgGIAAhEIgBgOQAGABAIAAIA5AAQAJAAAEgBIAAAMIAAAOIAAALIgMgBIgUAAIACANIAZAAIANgBIAAAMIgNgBIgWAAQAEAMAIAJQAHAHAEAAQACACACgSQAGAFAGACQgEAZgJAAIgBAAgAgggCIAbAAIgBgNIgaAAgAgggaIA5AAIAAgNIg5AAg");
	this.shape_1.setTransform(18.9,13.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AAPAaQgKgNgFgSQgDALgFAMQgHAMgMALQgHAHgMAGQgCgHgHgFQARgJAKgKQAVgZABgpIgCgKIAPAAIgBALQAAAcAMATQAHANALAKQAKAIAKAFQgHAGgDAHQgTgNgMgPg");
	this.shape_2.setTransform(6.2,13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("Ag9AwIAJgIQAHgGAEAAIAAgeIgIAAIgJABIAAgNQAEABAGAAIALAAIAJgBIgBANIAAAdQACgCAFAGQAHAIAdgBQAbAAAWgCQgFAHAAAHIgtABQgVAAgJgCQgGgBgJgIQAAAAgBgBQAAAAAAAAQAAAAgBAAQAAAAgBAAQgEgBgGAIIgHAGgAgIAeQAOgFANgOIgTgLIAIgKIATANIALgRIgnAAQgBASgEAOQgCAKgHAKIgMgKQAHgIADgMQADgRAAgaIgBgPIAFAAQASgBAXgDIARgEIAKANIgHABQgVAGgfAAIABAEQgBACAAAHIAlAAIAMgBIAIAIQgDACgBADQgGAOgIAKIAUAQIgKAKIgSgQQgMAMgRAJQgEgHgFgFgAg6guIAKgKQANAMAJAMIgLAJQgJgNgMgKg");
	this.shape_3.setTransform(133.3,25.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("AguA9QACgGAAgJIAAgbIAAgMQgDAFgGAFIgHgOQAUgOAJgQIAMAHIgCADIgJALIAAA1IAAAOgAAuA4Ig2AAQgKAAgHABIAAgPIARAAIASAAIAAgaIgNAAIgOAAIAAgOQAFABAJAAIANAAIAAgXIgPAAIgOABIAAgBIAAgOIAOAAIAaAAQgKgKgPgHIAKgJQAOAFANAMIgJAJIAUAAQAJABAHgBIAAAPIgQgBIgUAAIAAAXIARAAQAIAAAGgBIAAAOIgOAAIgRAAIAAAaIAWAAIAPAAIAAAPQgGgBgJAAgAgTgUgAg7gkQAKgEAHgHIALgNIAMAIIgGAGQgMANgOAJIgIgMg");
	this.shape_4.setTransform(119.7,25.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("Ag8AwQALgSAAgaIAAgEIANACIgCALIgBAIQADAFAGAFIAAgkIgMAAIgOAAIAAgNIAOABIAKAAIAAgNIgHAAQgIAAgFACIAAgNIANAAIAHAAIAAgEIgBgMIAPAAIAAAMIAAAEIAFAAIANAAIAAANQgFgCgIAAIgFAAIAAANIAHAAIAMgBIAAANIgMAAIgGAAIAAAOIAIAAIAKAAIAAANIgKgBIgIAAIAAATQAJAEAVAAQAhAAAQgDQgEAFAAAKIgMAAIgfAAQgPAAgNgCQgSgEgKgPQgDANgFAKQgFgHgGgDgAAJAhQgFgCABgJIAAgbIgBgOQAFABAJAAIAUAAIAAgTIgVAAIgNAAIAAgNIAOAAIAVAAIANAAIAAALIAAAUIAAAOIgOgBIgSAAIAAAYIAAAEIAJAAQANAAACgCQACgCAAgGIAAgIIAMAFQABARgEAEQgDADgEABIgUABIgFAAQgNAAgBgCg");
	this.shape_5.setTransform(132.1,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("Ag6ArQAUgIAGgOQAHgLAAgUIgRAAQgJAAgFACIAAgQIAOAAIBUAAIAPAAIAAAQQgHgCgIAAIgWAAIAAAsQgBAHALgCQANAAAAgFIACgRQAGAEAIAAQgCAXgEADQgCAGgXAAQgQAAgCgEQgEgCAAgGIAAgzIgRAAQAAAYgHAPQgGAMgLAHQgDADgKAFQgEgHgGgGgAAfgoIg/AAIgLAAIAAgPQADACAIAAIA/AAQAJAAAEgCIAAAPIgNAAg");
	this.shape_6.setTransform(119.6,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-31.2,234.1,93.3);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{price:87,reshow:241,moveup:284,"no data":410});

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
	this.frame_87 = function() {
		//console.log(window["is_data_error"])
		if(window.is_all_data_error==true){
			this.gotoAndPlay('no data');
		}else{
			//do nothing
		}
	}
	this.frame_88 = function() {
		window.cid=0;
	}
	this.frame_131 = function() {
		if(window.PriceDataFiltered.length<2){
			this.gotoAndPlay("moveup");
		}else{
			window.cid=1;
		}
	}
	this.frame_183 = function() {
		if(window.PriceDataFiltered.length<3){
			this.gotoAndPlay("reshow");
		}else{
			window.cid=2;
		}
	}
	this.frame_241 = function() {
		window.cid=0;
	}
	this.frame_399 = function() {
		if(this.loop>1){
			this.loop--;
			this.gotoAndPlay(2);
		}else{
			this.stop();
		}
	}
	this.frame_664 = function() {
		if(this.loop>1){
			this.loop--;
			this.gotoAndPlay(2);
		}else{
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(87).call(this.frame_87).wait(1).call(this.frame_88).wait(43).call(this.frame_131).wait(52).call(this.frame_183).wait(58).call(this.frame_241).wait(158).call(this.frame_399).wait(265).call(this.frame_664).wait(1));

	// =border=
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(665));

	// t7
	this.instance = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(207.6,18.9,1.103,1.103,0,0,0,74.6,8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(561).to({_off:false},0).wait(1).to({regX:75.2,regY:7.9,x:208.2,y:18.7,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// t5
	this.instance_1 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(152.3,187.9,0.916,0.916,0,0,0,110.7,24.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(561).to({_off:false},0).wait(1).to({regX:103.4,regY:27,x:145.6,y:190,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// t4
	this.instance_2 = new lib.yuding();
	this.instance_2.parent = this;
	this.instance_2.setTransform(144,187.4,0.863,0.863,0,0,0,110.1,26.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(490).to({_off:false},0).wait(1).to({regX:112.4,regY:20.7,x:146,y:182.2,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(53).to({alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).wait(105));

	// t3
	this.instance_3 = new lib.t3swf("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(93.4,196.8,1,1,0,0,0,83.1,5.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(432).to({_off:false},0).wait(1).to({regX:107.8,regY:0.8,x:118.1,y:192.4,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(175));

	// t2
	this.instance_4 = new lib.t2swf("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(125.9,163.8,1,1,0,0,0,81.5,12.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(410).to({_off:false},0).wait(1).to({regX:69.2,regY:5.3,x:113.5,y:156.6,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(175));

	// =ss=
	this.instance_5 = new lib.xiaobiaoanniu2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(287.3,233.2,0.716,0.716,0,0,0,4,8.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(88).to({_off:false},0).to({_off:true},312).wait(265));

	// t7
	this.instance_6 = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(207.6,18.9,1.103,1.103,0,0,0,74.6,8);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(294).to({_off:false},0).wait(1).to({regX:75.2,regY:7.9,x:208.2,y:18.7,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(265));

	// t5
	this.instance_7 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(109,214.8,0.904,0.904,0,0,0,100.6,26.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(294).to({_off:false},0).wait(1).to({regX:103.4,regY:27,x:111.4,y:215,alpha:0.091},0).wait(1).to({alpha:0.182},0).wait(1).to({alpha:0.273},0).wait(1).to({alpha:0.364},0).wait(1).to({alpha:0.455},0).wait(1).to({alpha:0.545},0).wait(1).to({alpha:0.636},0).wait(1).to({alpha:0.727},0).wait(1).to({alpha:0.818},0).wait(1).to({alpha:0.909},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(265));

	// t4
	this.instance_8 = new lib.yuding();
	this.instance_8.parent = this;
	this.instance_8.setTransform(103.1,262.9,0.84,0.843,0,0,0,100.6,27.1);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(284).to({_off:false},0).wait(1).to({regX:112.4,regY:20.7,x:113,y:246,alpha:0.111},0).wait(1).to({y:234.5,alpha:0.222},0).wait(1).to({y:223,alpha:0.333},0).wait(1).to({y:211.5,alpha:0.444},0).wait(1).to({y:200,alpha:0.556},0).wait(1).to({y:188.5,alpha:0.667},0).wait(1).to({y:177,alpha:0.778},0).wait(1).to({y:165.5,alpha:0.889},0).wait(1).to({y:154,alpha:1},0).wait(106).to({_off:true},1).wait(265));

	// city 1st
	this.instance_9 = new lib.t2swf2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(149.2,197.2,1.45,1.45,0,0,0,88.7,19.4);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(241).to({_off:false},0).wait(1).to({regX:69.1,regY:5.3,x:120.8,y:176.7,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(37).to({y:165.4},0).wait(1).to({y:154},0).wait(1).to({y:142.7},0).wait(1).to({y:131.4},0).wait(1).to({y:120},0).wait(1).to({y:108.7},0).wait(1).to({y:97.4},0).wait(1).to({y:86},0).wait(1).to({y:74.7},0).wait(106).to({_off:true},1).wait(265));

	// city3
	this.instance_10 = new lib.t2swf2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(149.2,197.2,1.45,1.45,0,0,0,88.7,19.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(190).to({_off:false},0).wait(1).to({regX:69.1,regY:5.3,x:120.8,y:176.7,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(38).to({alpha:0.833},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(424));

	// city2
	this.instance_11 = new lib.t2swf2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(149.2,197.2,1.45,1.45,0,0,0,88.7,19.4);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(139).to({_off:false},0).wait(1).to({regX:69.1,regY:5.3,x:120.8,y:176.7,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(38).to({alpha:0.833},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(475));

	// city1
	this.instance_12 = new lib.t2swf2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(149.2,197.2,1.45,1.45,0,0,0,88.7,19.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(88).to({_off:false},0).wait(1).to({regX:69.1,regY:5.3,x:120.8,y:176.7,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(37).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(526));

	// t1
	this.instance_13 = new lib.t1swf("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(75.3,171.6,0.851,0.851,0,0,0,35.6,17.9);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(27).to({_off:false},0).wait(1).to({regX:63,regY:0.1,x:98.5,y:156.4,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(577));

	// Layer_2
	this.instance_14 = new lib.Symbol1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(136,182.3,1,0.503,0,0,0,136,108);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({_off:false},0).wait(1).to({regX:183,regY:150.5,x:183,y:203.6,alpha:0.167},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.55,y:196.5},0).wait(1).to({scaleY:0.6,y:189.2},0).wait(1).to({scaleY:0.65,y:182},0).wait(1).to({scaleY:0.7,y:174.8},0).wait(1).to({scaleY:0.74,y:167.6},0).wait(1).to({scaleY:0.79,y:160.3},0).wait(1).to({scaleY:0.84,y:153.1},0).wait(1).to({scaleY:0.89,y:145.9},0).wait(1).to({scaleY:0.94,y:138.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.5,y:203.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_1
	this.instance_15 = new lib.Symbol1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(136,110,1,1,0,0,0,136,110);
	this.instance_15.alpha = 0.82;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(3).to({_off:false},0).wait(1).to({regX:183,regY:150.5,x:183,y:150.5,alpha:0.757},0).wait(1).to({alpha:0.694},0).wait(1).to({alpha:0.631},0).wait(1).to({alpha:0.568},0).wait(1).to({alpha:0.505},0).wait(1).to({alpha:0.442},0).wait(1).to({alpha:0.378},0).wait(1).to({alpha:0.315},0).wait(1).to({alpha:0.252},0).wait(1).to({alpha:0.189},0).wait(1).to({alpha:0.126},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// bg
	this.instance_16 = new lib.bg_1();
	this.instance_16.parent = this;
	this.instance_16.setTransform(32.7,132.3,0.76,0.76,0,0,0,250,167);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3).to({_off:false},0).wait(1).to({regX:317.3,regY:222.9,scaleX:0.75,scaleY:0.75,x:87.1,y:172.5},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:90.2,y:170.4},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:93.1,y:168.3},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:95.9,y:166.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:98.5,y:164.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:101,y:162.7},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:103.5,y:161},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:105.7,y:159.5},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:107.9,y:158},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:109.9,y:156.5},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:111.9,y:155.1},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:113.8,y:153.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:115.6,y:152.5},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:117.2,y:151.3},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:118.9,y:150.2},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:120.4,y:149.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:121.9,y:148.1},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:123.3,y:147.1},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:124.7,y:146.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:126,y:145.2},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:127.2,y:144.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:128.4,y:143.5},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:129.6,y:142.7},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:130.7,y:141.9},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:131.8,y:141.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:132.8,y:140.4},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:133.7,y:139.8},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:134.7,y:139.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:135.5,y:138.5},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:136.4,y:137.9},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:137.2,y:137.3},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:138,y:136.8},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:138.8,y:136.2},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:139.5,y:135.7},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:140.2,y:135.2},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:140.9,y:134.8},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:141.5,y:134.3},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:142.2,y:133.9},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:142.8,y:133.4},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:143.3,y:133},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:143.9,y:132.7},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:144.4,y:132.3},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:145,y:131.9},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:145.4,y:131.6},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:145.9,y:131.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:146.3,y:130.9},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:146.8,y:130.6},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:147.2,y:130.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:147.6,y:130.1},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:148,y:129.7},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:148.4,y:129.5},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:148.7,y:129.3},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:149.1,y:129},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:149.4,y:128.8},0).wait(1).to({scaleX:0.56,x:149.7,y:128.5},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:150,y:128.3},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:150.3,y:128.1},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:150.6,y:127.9},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:150.9,y:127.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:151.1,y:127.6},0).wait(1).to({scaleY:0.56,x:151.4,y:127.4},0).wait(1).to({scaleX:0.56,x:151.6,y:127.2},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:151.8,y:127.1},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:152.1,y:126.9},0).wait(1).to({x:152.3,y:126.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:152.5,y:126.6},0).wait(1).to({x:152.7,y:126.5},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:152.9,y:126.4},0).wait(1).to({x:153,y:126.3},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:153.2,y:126.1},0).wait(1).to({x:153.4,y:126},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:153.5,y:125.9},0).wait(1).to({x:153.6,y:125.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:153.8,y:125.7},0).wait(1).to({x:153.9,y:125.6},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:154,y:125.5},0).wait(1).to({x:154.2,y:125.4},0).wait(1).to({x:154.3,y:125.3},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:154.4},0).wait(1).to({x:154.5,y:125.2},0).wait(1).to({x:154.6,y:125.1},0).wait(1).to({scaleY:0.55,x:154.7},0).wait(1).to({scaleX:0.55,x:154.8,y:125},0).wait(1).to({x:154.9,y:124.9},0).wait(1).to({regX:249.8,regY:166.8,x:118.2,y:94.3},0).wait(577));

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
		{src:"img/bj.jpg?1574793907903", id:"bg"}
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