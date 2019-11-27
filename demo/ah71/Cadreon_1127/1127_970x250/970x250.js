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



(lib.bg1 = function() {
	this.initialize(img.bg1);
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

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAFAFIAAgIIgFAIIAAAAIgEgIIAAAIIgBAAIAAgJIABAAIAEAIIAFgIIABAAIAAAJg");
	this.shape.setTransform(137.8,-6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAFIAAgIIgDAAIAAgBIAIAAIAAABIgEAAIAAAIg");
	this.shape_1.setTransform(136.4,-6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E4E4D").s().p("AgGgJIAYgCQgIAHgJAGQgIAFgKAFg");
	this.shape_2.setTransform(133.1,-1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9D9DA").s().p("AgGAAQgBgKABgKIANAUIgKAVQgCgKgBgLg");
	this.shape_3.setTransform(131.7,-2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#989999").s().p("AgTgJQALADAIAFQALADAIAHIgXABg");
	this.shape_4.setTransform(133,-3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4E4E4D").s().p("AAAABQgIgFgIgIIAYADIAJAWIgRgMg");
	this.shape_5.setTransform(130.9,2.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9D9DA").s().p("AgTAGIATgJQAJgEALgCIgPATg");
	this.shape_6.setTransform(131.2,0.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#989999").s().p("AgHAAIAOgUQABAKgCAKQgBALgEAKg");
	this.shape_7.setTransform(132.5,1.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9D9DA").s().p("AgCAAQACgKAGgJIADAXIgSAQQACgKAFgKg");
	this.shape_8.setTransform(126.4,1.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#989999").s().p("AgJAIIgEgXQAIAGAGAJIANARg");
	this.shape_9.setTransform(128.3,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4E4E4D").s().p("AgBgHIAWAHQgKAEgLACIgUACg");
	this.shape_10.setTransform(127.5,3.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9D9DA").s().p("AgVgFQALgBAKAAQALABAKACIgVAKg");
	this.shape_11.setTransform(125.2,-2.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4E4E4D").s().p("AgKgGIAVgLQgEAKgGAIQgFAJgGAIg");
	this.shape_12.setTransform(126.3,-1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#989999").s().p("AgBABQgFgJgEgKIAVANIgCAYIgKgSg");
	this.shape_13.setTransform(124.1,-1.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#989999").s().p("AgIADIAGgXIAGAUIAFAVg");
	this.shape_14.setTransform(129.3,-5.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4E4E4D").s().p("AAAAFQgKgDgKgDIAXgHIASARIgVgEg");
	this.shape_15.setTransform(128.1,-3.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D9D9DA").s().p("AAAAAQAHgIAIgGIgGAWIgXAHQAGgJAIgGg");
	this.shape_16.setTransform(127.5,-5.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AGAAyQATgCAAgNIAEAAQAAAEgBADIAIADIALAEIgBAEIgUgIQgEAGgQACgAC9A1IAAgHIgMACIAAgDIADgBIAAgcIgDAAIAAgDIASAAIAAADIgDAAIAAAaIADgBIABAEIgEAAIAAAIgAC2ArIAHgBIAAgHIgHAAgAC2AhIAHAAIAAgHIgHAAgAC2AXIAHAAIAAgHIgHAAgABsA1IAAgDIASAAIAAgLIgMAAIAAgDIAfAAIAAADIgPAAIAAALIAUAAIAAADgAFYAuIAAgBIgJAIIgCgDIAJgJQgCgJAAgLIgRAAIAAAHIALAAIAAAMQABAHgHAAIgEAAIAAgDIADAAQAEAAAAgEIAAgJIgIAAQAAAMgGAKIgCgCQACgHAAgDQABgCAAgJIAAgMIAVAAIAAgJIAEAAIAAAJIAPAAIAAADIgPAAQAAAIACAJQAFgGACgHIAEACQgDAIgHAHQAEAHABAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBIABgGIAEAAQAAACgCAGQgBAFgEAAIgBAAQgEAAgDgHgADEAyQAJgHABgJIgJAAIAAgDIAKAAIAAgJIgJAAIAAgDIALAAIAAAAIAGgJIACABIgEAIIAHAAIAAADIgKAAIAAAJIAMAAIAAADIgMAAQADALAJAFIgDACQgIgEgDgJQgDAJgHAFgAAlA1IAAgDIAVAAIAAgFIgOAAIAAgCIAOAAIAAgFIgNAAIgGAGIgCgCQAFgFACgFIADABIgBACIAMAAIAAgEIADAAIAAAEIASAAIAAADIgSAAIAAAFIAQAAIAAACIgQAAIAAAFIAUAAIAAADgAD2A0IAAgDIAEAAIAAgLIAjAAIAAALIAEAAIAAADgAESAxIAIAAIAAgIIgIAAgAEIAxIAHAAIAAgIIgHAAgAD9AxIAIAAIAAgIIgIAAgAGDAsIAAgPIAkAAIAAAOIgEAAIAAgLIgdAAIAAAMgAEJAiQAEgEAAgJIAAgJIASAAIAAASQAAAGgFgBIgHAAIAAgDIAFAAQABAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAgBIgMAAIAAADIgDAEIgDgCgAEQAaIALAAIAAgEIgLAAgAEQATIALAAIAAgEIgLAAgACFAZIACgDIAIAFIAIAEIgDADIgPgJgAD4AiIAAgVIAOAAIAAAVgAD8AfIAIAAIAAgHIgIAAgAD8AWIAIAAIAAgHIgIAAgABsAfIAPgJIACADIgQAJgAAqAdIAAgRIAiAAIAAARgAAtAaIAcAAIAAgEIgcAAgAAtATIAcAAIAAgEIgcAAgAGEAYIAAgMIAgAAIAAAMgAGIAVIAYAAIAAgGIgYAAgACSAWIAAgGIgiAAIAAAGIgEAAIAAgIIAUAAIgCgFIAEgBIACAGIASAAIAAAIgADHALIADgBIAFAGIgDACIgFgHgAFcAMIADgCIAEAEIgCADIgFgFgAGigMIgBgBQAAAAgBgJQABgIgKABIgOAAIAAARIgFAAIAAgmIAUAAQANAAAAAKQAAAGgGADQAFACABAGIAAAJIABACgAGJghIAOAAQAKAAAAgHQAAgGgJgBIgPAAgAFbgMIAAgmIAeAAIAAADIgaAAIAAANIAZAAIAAAEIgZAAIAAAOIAbAAIAAAEgADKgMIAAgmIAeAAIAAADIgaAAIAAANIAZAAIAAAEIgZAAIAAAOIAbAAIAAAEgAmHgMIgFgMIgTAAIgGAMIgDAAIARgmIADAAIASAmgAmdgcIAQAAIgIgRIgIARgAldgNQgKAAgFgEQgDgDAAgGIAEAAQAAAEACADQADADAIAAQAFABAGgEQABAAAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgFgEgBQgEgCgFAAQgNABgDgLQAAgEADgCQAFgFAIAAQAIAAAFAEQADADAAAFIgEAAQAAgDgCgCQgFgEgEABIgJABQgEACABAEQAAAHAMAAQAOgBACAMQgFAKgIAAIgDAAgAEtgNIAAgmIAWAAQAKABAAAJQAAAGgHACQAIACAAAHQgBALgLAAgAExgQIARAAQAHAAACgIQgBgHgIAAIgRAAgAExgiIAQAAQAHAAABgHQAAgHgHABIgRAAgAEcgNIAAggIgQAgIgFAAIgQggIAAAgIgEAAIAAgmIAGAAIAQAhIARghIAGAAIAAAmgAC4gNIAAggIgQAgIgFAAIgQghIAAAhIgEAAIAAgmIAFAAIARAhIARghIAGAAIAAAmgAAlggQAAgRAUgDQAQABADAMIAAABIgEAAIAAgBQgDgJgMAAQgPABgBAPQAAAOAQACQANAAACgMIAAAAIAEAAIAAAAQgBAOgSABQgTAAgBgTgABWgNIAAgmIAfAAIAAAEIgbAAIAAANIAaAAIAAADIgaAAIAAAOIAbAAIAAAEgAAWgNIgMgPIgPgRIAAAgIgDAAIAAgmIAEAAIAMAPIAOAQIAAgfIAEAAIAAAmgAgWgNIgFgMIgTAAIgGAMIgEAAIASgmIAEAAIARAmgAgsgcIAQAAIgIgSIgIASgAhGgNIAAgmIAFAAIAAAmgAhpgNIAAgmIAFAAIAAAiIAWAAIAAAEgAiMgNIAAgmIAEAAIAAAiIAXAAIAAAEgAiagNIgGgMIgTAAIgFAMIgEAAIASgmIADAAIARAmgAixgcIAQAAIgIgSIgIASgAjagNIAAgBQgCAAAAgIQABgJgKABIgPAAIAAARIgEAAIAAgmIAUAAQANAAAAALQAAAFgGADQAFACAAAGQAAAIABACIAAABgAj0ghIAPAAQAJAAAAgIQABgGgJAAIgQAAgAkFgNIgGgMIgTAAIgGAMIgEAAIASgmIADAAIASAmgAkdgcIAQAAIgHgSIgJASgAk6gNIAAgiIgPAAIAAgEIAhAAIAAAEIgOAAIAAAig");
	this.shape_17.setTransform(76.5,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(33.9,-7.1,104.5,11.2);


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


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D71E05").s().p("AA8DeIhSAAQhZAGAHhYIAAjlIA+AAIAADlQgEAfAfgEIBGAAQASACAHgTQAGgTACg5QAaARAdAIQgBB8hIAAIgKgBgAjnCEQAbhWALhqIA5ALQgFAxgJA4QgJA4gNAsgACWAqQgRgygUgtIA3gXQAVAuASAxQARAxAIAoIg8AZQgGgogQgzgAgNh/QgmgfgkgYIAogoQAjAWAmAcQAnAcAYAYIgrAuQgWgXglgeg");
	this.shape.setTransform(271.7,-4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D71E05").s().p("ABYB0QgqhEgkhHQg4CqiEBPQgYgYgegXQCbhQAojHQgfgtgugfIAkgzQBMA7AnBGIBQCLQAoBEBMAzQgTAhgJAjQhKgsgrhEg");
	this.shape_1.setTransform(222,-4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D71E05").s().p("AjpDLQAfhQABheIgfAAIAAgyIAgAAIAAieIAzAAQAJgbAFgaIA7AHIgSAuIBLAAIAAFbQAAAHgBAFQAxgOAlgaQgogsgZg7IAfgKIgiAAIAAgzICrAAIAKgBIAiANQgTBbguA4QAmAZAwAOQgXAWgQAbQgygRgmgdQgsAig4ARQgKgUgSgUQgDAVgRAIQgZALg0gCQgEgZgLgYIA0ABQAKgBgBgJIAAiLIhNAAQgDBvgkBdQgVgTgYgLgABsBmQAZgfAPgsIhcAAQASAqAiAhgAiUgVIBMAAIAAhwIhMAAIAAAgIAigRQAYAiAOAfIgmAVQgMgegWgjgAiWA8IAlgSQAZAmAPAiIgnAVQgOgjgYgogAgThBQApgggGgrIAAhDICkAAIAABgQgCATAIAAIASAAQAMAAAMgEQABAYADAWQgMAFgQgBIgYAAQg+ABAHhDIAAgtIg2AAIAAATQAGBBg1AuQgTgVgYgRg");
	this.shape_2.setTransform(172.4,-4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D71E05").s().p("ABhDmQgFgfgPgfQA1ACAVAAQAOAAgBgNIAAl8IA7AAIAAF8QABAygcALQgcAMg6AAIgNAAgAh1DmIAAivQgiBFgpAtQgMgfgSgbQA5g6AlhTIhTAAIAAg3IBeAAIAAg8QgqAIgoAFQgFgYgMgWQA3gJA1gNQA2gNAlgQIApAtQglAPgtALIAABJIBZAAIAAA3IhZAAIAAARQAVAQAbAYIAmAjIghAyQgVgagggjIAACzgAA7BpIAAkUIA7AAIAAEUg");
	this.shape_3.setTransform(121.4,-3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D71E05").s().p("AgmCMIAAh/IgbALIgWg0IAxgUIAAiCIA4AAIAABqIApgRIAAiJIA3AAIAABxIAngRIAVgOIApAOIgCAKQAACOgEAfQgCAhgXAIQgZAJgbgCQgCgagKgXQAPABAJAAQAIABADgMQABgLAAhnIgqATIAACuIg3AAIAAiWIgpASIAACXQgGAnAogFIBgAAQAjAHAChFQAWAPAdAHQgEBihPgFIhqAAIgOAAQhOAAAHhXgAjrBrIBAgYIAAiLIg6AAIAAg4IA6AAIAAhrIA3AAIAABrIAyAAIAAA4IgyAAIAAB0IAugTIANA0QhSAphIAhg");
	this.shape_4.setTransform(73,-4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D71E05").s().p("AjoC2QBQgJAogRQAogSAPgaIikAAIAAgyIC1AAIADgYIA9AAIgDAYIDGAAIAAAyIijAAQAwA6CBAHQgXAYgNAgQiPgPg0haQgQAogxAaQgvAaheAOQgJgdgTgXgAB3AsIAAi9IjyAAIAAC9Ig3AAIAAjtICEAAQAJgVAFgTIBBAKIgOAeICdAAIAADtgAh2AGQAegOAbgaIgxAAIAAgnIAjAAQgLgWgOgWIAkgRQASAYALAVIghAQIAqAAIAAhBIAxAAIAABBIAmAAIgegPQAQgXAMgZIAqATIgkAsIApAAIAAAnIg1AAQAgAVAXARIgdAeQgXgUgggWIAbgaIgcAAIAAA8IgxAAIAAglQgdAfggAUQgMgSgTgQg");
	this.shape_5.setTransform(23.6,-4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D71E05").s().p("AAIC3IAMhsIg9AAIgNBsIgrAAIANhsIgrAAIAAgvIAwAAIAJhDIgtAAIAAgwIAzAAIAMhfIAqAAIgLBfIA9AAIANhfIAqAAIgLBfIAsAAIAAAwIgyAAIgIBDIAvAAIAAAvIg1AAIgNBsgAgkAcIA+AAIAIhDIg9AAg");
	this.shape_6.setTransform(-15.8,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(-28.6,-27.3,323.5,46.8), null);


(lib.t2swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D71E04").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWgAgigiQgPAOAAAUQAAAUAPAPQAPAPATAAQAVAAAOgPQAPgOAAgVQAAgUgPgOQgOgPgVAAQgTAAgPAPg");
	this.shape.setTransform(214.7,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D71E04").s().p("AhhDJQApgwAPhFQALgyAAhOIAAirIAhAAIAACrQAABVgKA2QgRBMgrAzQgMgMgSgJgACzDdIAAjGIgaANQgMgxgjg8IAAEcIgiAAIAAmjIAiAAIAACBIAYgKQAgAzARAxIAAjiIAjAAIAAG0gAjLDEQAkhFAghXIAdATQgeBUgiBJgAhsAdQAaglANhPIAbAIQgNBSgaApgAAFhGIAagKQAaA4AIAwIgcALQgIgygYg3gAjVg/IAVgbQA1AZAeAWIgWAeQgZgVg5gdgAjAjDIAWgaQA2AdAaAWIgXAdQgbgag0gcg");
	this.shape_1.setTransform(178.1,8.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D71E04").s().p("AgGDMIjTAAIAAmJIDTAAIAAAiIiwAAIAAA1IAagOQAeAoAlA2QAXg3AQg4IAiAGQgWBJgeBAQAmA/AUAsIgfASQgQgmgdg0QgiA+glArQgLgKgOgJIAAAoICxAAIAAAXQAxg0AThKQAMgyAAhEIAAghIAjAAIAAAiIgBAqQANBIAYAuQAYAvAuAlQgRANgHAPQhEg8gchXQgVBZg+A9QgGgKgNgMgAi2B8QAqgtAihCQglg8gngzgACZgXQALgcANg+Ih8AAQgUA9gYAlQgKgJgUgKQAug+ATiBIAiAFQgHAqgIAgIB9AAIAGgCIAYAIQgQBKgUA1g");
	this.shape_2.setTransform(131.1,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D71E04").s().p("AjhC7QAqgxAggMIAAiAIhEAAIAAgkIBoAAIAACmQAKAGAbAUQAlAZBaAAQBhAABQgJQgKAWgBAQQhHAGhgAAQhdAAgqgdIgbgVQgNgKgHAAQgTAAgvBCgAhYBuQA7geAdg1QAZgtAJhHIh3AAIAAgjIB7AAQACgWAChJIAlAAQgCA/gDAgICNAAIAAAjIiQAAIgGAjQBlBgAwBFIgfAYQgog8hXhaQgfBrhYAuQgKgQgPgMgAjLjDIAfgOQAqAwATAsIggASQgRgpgrg3g");
	this.shape_3.setTransform(80.9,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D71E04").s().p("AjcDYIAAghIBFAAIAAkbIBzAAIAHgnIixAAIAAghIC2AAIAEgrIAnAEIgGAnIDBAAIAAAhIjIAAIgHAnICbAAIAAEbIBEAAIAAAhgAh0C3IDqAAIAAgsIjqAAgAh0BuIDqAAIAAgqIjqAAgAh0AnIDqAAIAAgnIjqAAgAh0gcIDqAAIAAgpIjqAAg");
	this.shape_4.setTransform(31.8,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D71E04").s().p("AiPDgIAAjlQgcBbgiAwQgIgTgMgQQAYgdAVg2QAVgxAMg0IhHAAIAAgiIBLAAIAAhpIAjAAIAABpIA9AAIAAAiIg9AAIAAAUQApA1AaAqIgZAeQgMgagegzIAADxgACpCxQi2AZgQAIIAAAAIAAgDIgOgiQANgEATgnQANgZAVg0QAZhAAOg3IAlAOQgkB3gyBgICQgSQgXgwgQgeIAegNQAxBWATA7IghAPgAg3gXQA3hAAYh4IAlAHQgdB/g3BIgABsjMIAigIQAcBsA3BIQgSANgLARQg4hNggh9g");
	this.shape_5.setTransform(-17.7,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D71E04").s().p("Ah6DfIAAhlIhcASIgIgjIBkgRIAAhGIgsAAQgdAAgHAHQgFgWgGgKQAJgDAOgkQAMgfANg1Ig1AAIAAgiIA9AAQAIgiADgYIAkAHIgLAzIBXAAIAAAiIhhAAQgQA8gXA3IAwAAIAAhLIAiAAIAABLIAyAAIAAAhIgyAAIAABAIA1gKIACAhIg3AKIAABsgAgkDUIAAgjIByAAIAAh3IhWAAIAAghIDQAAIAAAhIhWAAIAAB3IBsAAIAAAjgAgkgWQA0gVAwgkQA0gnAcgtIibAAIAAgiICxAAIAHgBIAZANQgZA5g0AwQBEAhAiAXIgVAcQgkgZhIgkQgxAng6AYQgNgTgKgJg");
	this.shape_6.setTransform(-66.8,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94.8,-34,367.3,95.4);


(lib.t1swf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D71E04").s().p("AjnDTQBuglAAhTIAAgVQgzAig5AVQgRgfgcgbQBdgbBCg4IheAAIAAj6IGjAAIAAD6IhgAAQBDA3BeAYQgbAagTAiQg3gSgsgeIAAC6IhKAAIAAjPIAsAAQgrgjgagjIg7AAQgaAhgtAkIAyAAIAAApQAAB8iGAxQgQgdgggbgAAihIIBnAAIAAgrIhnAAgAiLhIIBnAAIAAgrIhnAAgAAiinIBnAAIAAgqIhnAAgAiLinIBnAAIAAgqIhnAAg");
	this.shape.setTransform(183.6,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D71E04").s().p("Ai7EBIAAk1IhPAAIAAhDIBPAAIAAh8IBJAAIAAB8IBQAAIAAiJIBEAAIAACJIBSAAIAAiEIBJAAIAACEIBOAAIAABDIhOAAIAACvIjfAAIAAivIhQAAIAADxIFuAAIAABEgAAiA6IBSAAIAAhuIhSAAg");
	this.shape_1.setTransform(124.6,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D71E04").s().p("Aj4EPIAAg/IDUAAIAAhHIiHAAIAAg9ICHAAIAAhEIiPAAIAAgmIg4AeQgOgbgjgfQBTgjBHg1QBMg6AqhCIA+AdIgLAQQBgBmCWBCQgkAfgMAcIg4geIAAAkIiRAAIAABEICMAAIAAA9IiMAAIAABHIDYAAIAAA/gACPg0QhPg0hAhHQhABHhQA0IEfAAIAAAAg");
	this.shape_2.setTransform(65.8,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D71E04").s().p("AgyETIAAkRIjYAAIAAhEIDVAAIAAjQIBJAAIAABGIC/AAIAABDIi/AAIAABHID3AAIAABEIj0AAIAABUIAZgmQCTA5AxAXIgnA/Qg2gdiAg2IAACng");
	this.shape_3.setTransform(6.9,19.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D71E04").s().p("AgDDFQAaABBBAAQARAAAAgOIAAlWIiVAAIAAhFIE+AAIAABFIhdAAIAAFXQAAAfgIARQgJARgUAJQgdAOhcAAQgFgkgVgogAkCDOIA4ABQALAAAAgMIAAh0Ig/APIgThFIBSgTIAAhlIhMAAIAAhCIBMAAIAAhvIBIAAIAABvIBCAAIAABCIhCAAIAABVIBDgRIAIBBIhLAUIAACKQAAAwgcAPQgXANhDgBQgDgbgSgmg");
	this.shape_4.setTransform(-52.1,19.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.7,-29.6,301.2,93.5);


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


(lib.mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egl4ATiMAAAgnDMBLxAAAMAAAAnDg");
	this.shape.setTransform(242.5,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,485,250);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.bg1();
	this.instance.parent = this;
	this.instance.setTransform(26,-46,1.717,1.717);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(26,-46,467.1,377.8), null);


(lib.an = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AABAdIAFgIQAVAGALAEIgEAJQgNgFgUgGgAglAgQARgCAJgFQAHgEABgOIAHAAQgBAMgCADQgFAOgcAEQgCgFgDgDgAAUAYIAAgFIAAgPIglAAIAAAMIAAACIAAAGIgKAAIABgJIAAgLIgIADIAAgCIgDgFQAMgCAHgFIgKAAIgHAAQAEgIACgJIAHABIALAAIAAgEIgOAAIgIAAIAAgHIAIABIAOAAIAAgGIAJAAIAAAGIAIAAIAAgGIAJAAIAAAGIAKAAIAJgBIAAAHIAAAEIAAAGIgJgBIgKAAIAAAEIAQAAIAHAAIAAABIgBAFQAAAIgJAAIAAAQIABAIgAAPgCIAIAAIgBgDIAEAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBIgOAAgAgMgCIASAAIAAgFIgNAAIgFAFgAgFgOIALAAIAAgEIgKAAIgBAEgAgWgQIgCACIALAAIAAgCIABgCIgKAAIAAACgAAPgXIAKAAIAAgEIgKAAgAgDgXIAJAAIAAgEIgJAAIAAAEg");
	this.shape.setTransform(-4.8,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgmAeQAIgJAEgMQADgJAAgOIgEAAQgFgBgDABIAAgKIAJABIAEAAIAAgFIgBgKIALAAIgBAGIAAAJIAHAAIAJAAQgBAAABAPQgBAYgCALQgBAKgJgBIgJAAQAAgFgBgEIAIABQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBQABgGABgPIAAgSIgIAAQgBAPgDAMQgEAOgJAMQgDgGgEgDgAAHAlIABgKIAAgvIAAgJIAHABIAQAAIAIgBIAAAJIAAAvIAAAJIgKAAIAAgFIgMAAIAAAGgAARAWIAMAAIAAgqIgMAAg");
	this.shape_1.setTransform(-13.5,11.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgGAnIABgLIAAgVIAAgJIgEAGIgFgIQAIgIAEgOIACgMIAKADIgCAFIgGAPIAAArIABALgAglAnIABgKIAAg4IgBgIIAHAAIAMAAIAGAAIAEAEIAAABIgBABQgEALgFAKQAHAIAAAJQAAAJgFACQgCACgFAAIgCAAIAAgBQAAgEgCgEIAEABQAEAAAAgFQAAgGgCgDIgFgHIAHgUIgIAAIAAAoIAAAQIAAAKgAAKAnQAAgGgCgEIAKABQABAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAIAAgnIgJAAIgIAAIAAgJQADABAFgBIAJAAIAAgHIgBgKIAKAAIAAAKIAAAHIAHAAIAAAKIgHgBIAAAoQAAAFgCACQgCACgIABIgJAAgAAEgCIAHgEQAFAIAEALIgHAFQgEgMgFgIgAgbANIAAAAg");
	this.shape_2.setTransform(-21.8,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgkAgIACgEQAGgIADgOIAIAGQgEAOgGALIgBACgAAcAnIAAgFIgfAAIAAAFIgKAAIABgKIAAgsIgBgIIAIAAIAMAAIAAgHIgBgIIAKAAQAAADAAAGIAAAGIANAAIAIgBIAAAKIAAAqIAAALgAAQAZIAMAAIAAgQIgMAAgAgDAZIAKAAIAAgQIgKAAgAAQAAIAMAAIAAgPIgMAAgAgDAAIAKAAIAAgPIgKAAgAglgJIAGgHQAHAEAIAGIgFAHQgIgFgIgFgAgigfIAGgGQAIAEAHAHIgGAIQgHgIgIgFg");
	this.shape_3.setTransform(-30.8,11.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgTAhQAFgFADgHIABgFIAIADQgDALgGAJgAAYASIAHgEQAFAKAEAKIgIAFQgDgNgFgIgAALASIAIgBQADAHACAMIgIADQgCgMgDgJgAgBATIAHgCIADAVIgJABQAAgJgBgLgAgnAfQAEgFADgGQAFgJgBgfQAAgPgBgDIAKAAIgBATIAEgIIAFAGIgBABIgIAMIgBAQIAKANIgHAGIgFgJQgDAMgHAJQgDgGgDgCgAABAKQAHgFAEgHQADgEABgGIgDAAIgDAAQgDAIgFAHQgFAHgHAGQgCgEgEgDQAIgEAEgGIgGgDIgCACQgCgCgEgDQAIgIAEgMIACgLIAHABIgBAFIAAABIACAAIAFAAIAEADIgBAGIAAABIAFAAIAAgKIAAgGIAJAAQgBAAABAKIgBAGIAGAAIAIAAIAAAJIgIAAIgGAAQABAFAEAFQAEAFAGAFIgFAIQgKgJgEgKQgEAMgLAHIgFgGgAgGgKIABAAIAEAFIABgFIgEgEIgCAEgAgBgUIAEAEIACgHIgFAAIgBADgAgnAAQADgGgBgQIAHABQAAARgCAHgAAaggIAGgEIAHAKIgGAFQgCgGgFgFg");
	this.shape_4.setTransform(-39.2,12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgVAnIABgLIAAgOIAAgKIgGANIgGAIQgBgFgEgDIAKgMIAFgLIAAAAIgFAAIgIAAIAAgJIAIAAIAHAAIAAgIIgMACQgBgFgCgEQAVgCALgGIAEAIIgBABIAAAAIgBABIgKADIAAAKIAEAAIAHAAIAAAJIgHAAIgEAAIAAACQAGAFAGAIIgFAHIgHgLIAAAXIAAALgAAcAlIAAgGIgRAAIAAAGIgJAAIAAgKIAAgxIAAgJIAIAAIATAAIAJAAIgBAJIAAAwIABALgAALAWIARAAIAAgsIgRAAg");
	this.shape_5.setTransform(-48.1,11.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAgQAPgHgBgUIgBAAIgFAAIAAgFIAAgPIAAgGIAFAAIADAAQgDgJgDgEIAHgEQAFAGACAHIgIAEIANAAQAFgIADgJIAJADIgHAOIACAAIAHAAIAAAGIAAAPIAAAFIgHAAIgEAAIAAAXQAAAAABABQAAAAAAABQABAAAAAAQABAAABAAQAEACAAgOQAFADADAAQAAANgDACQgBACgLAAQgKABABgIIAAgaIgGAAQAAAMgEAHQgEAKgKAFQgCgDgDgEgAACgCIAYAAIAAgLIgYAAgAgaAnIABgKIAAgPIAAgKQgDAKgHAJQgBgFgDgEQAGgGAEgIIACgHIgDAAQgFgBgDABIAAgJQADAAAFAAIAFAAIAAgJIgJABIgDgIQANgBAJgDIAEgDIAFAHIgCACIgIADIAAALIADAAIAFAAIAAAJIgFAAIgDAAIAAABQAFAGAEAHIgEAHIgFgJIAAAYIAAAKg");
	this.shape_6.setTransform(-56.4,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAUAlIgJAAIgCgJIALABQAGABAAgKIADgYIgDAAIgDAJQgFAMgJAJQgGAGgJAFIgFgGQAOgJAGgKQAFgGACgGIACgEIgFAAIgGAKQgEAGgJAGIgFgFIAAAGQgKAFgKAEIgEABIgCgJIAKgDIAAgaIgCAAIgHABIAAgJIAHAAIACAAIAAgLIAAgJIAJAAQgBADABAGIAAALIACAAIAHAAIAAAJIgHgBIgCAAIAAAXIADgCIAEgCIAAACQALgIAEgIIgEAAIgHABIgCgIQAFgBAFgFIAOgJIgOAAIgJABIAAgKQAFABAEAAIARAAIAIgBIAGAGIgCABIgBABIgVAQIAHgBIANAAIAKgBIgBAOQAAAlgMAAIgFgBg");
	this.shape_7.setTransform(-65.2,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNAgQAFgFADgHQAEgLgBggQABgJgBgCIAHAAIAPAAIAIAAIgBAIIAAA2QAAAAAAAAQAAAAABABQAAAAAAAAQABAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAAAIAAgQQADACAFABQAAARgCACQAAAAgBABQAAAAgBABQAAAAgBAAQAAABgBAAIgGABQgHgBgBgBQgCgBAAgGIAAg3IgLAAQAAAcgCAKQgCARgIAKIgIgHgAgZAnIABgJIAAgRIAAgMQgDALgHAIQgCgFgDgDQAJgLAFgPIgGAAIgGAAIAAgJIAGAAIAHAAIAAgIQAAgEgBgDIAKAAQgBADABAEIAAAIIAEAAIAGAAIAAAJIgGAAIgEAAIAAACIALAPIgGAIIgFgLIAAAeQgBAGABADg");
	this.shape_8.setTransform(-73.7,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAUAnIAAgDIgnAAIAAADIgKAAIABgHIAAgQIgBgHIAHABIAYAAIAKgKIgfAAIgJAAIAAgHIAHAAIAkAAIAHAAIAGAEIgEADIgLAKIAJAAIAHgBIAAAIIAAAPIAAAHgAgTAcIAnAAIAAgKIgnAAgAAAgdQgGAIgKAGIgSAKQgCgFgEgEQANgEAIgGQALgHAFgIIAJADIgCABQAIAHAFAEQAKAGANAEIgDAGIgBADQgXgIgNgQgAgLgOIAFgHQANAEAFACIgDAIQgJgFgLgCg");
	this.shape_9.setTransform(-82.2,11.9);

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
p.nominalBounds = new cjs.Rectangle(-92.6,-2,112.2,19.3);


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
		console.log(window.PriceDataFiltered);
		console.log(this.unitdata);
		this.num = this.unitdata.price;
		this.nums = [Math.floor(this.num/1000)%10, Math.floor(this.num/100)%10,Math.floor(this.num/10)%10, this.num%10];
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_5
	this.p3 = new lib.n1();
	this.p3.name = "p3";
	this.p3.parent = this;
	this.p3.setTransform(114.9,9.5,0.812,0.812,0,0,0,-4,-29.1);

	this.p2 = new lib.n1();
	this.p2.name = "p2";
	this.p2.parent = this;
	this.p2.setTransform(93.4,9.5,0.812,0.812,0,0,0,-4,-29.1);

	this.p1 = new lib.n1();
	this.p1.name = "p1";
	this.p1.parent = this;
	this.p1.setTransform(71.9,9.5,0.812,0.812,0,0,0,-4,-29.1);

	this.p0 = new lib.n1();
	this.p0.name = "p0";
	this.p0.parent = this;
	this.p0.setTransform(50.5,9.5,0.812,0.812,0,0,0,-4,-29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.p0},{t:this.p1},{t:this.p2},{t:this.p3}]}).wait(1));

	// citys
	this.cityName = new lib.Symbol3();
	this.cityName.name = "cityName";
	this.cityName.parent = this;
	this.cityName.setTransform(38.2,-13.4,0.875,0.875,0,0,0,47.9,18.8);

	this.timeline.addTween(cjs.Tween.get(this.cityName).wait(1));

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AgGA7IABgRIAAgzIgbAAIAAAiIABAQIgQAAQACgHAAgJIAAgiQAAgGgCgGIAMAAIAeAAIAAgQIgFABIglABQgBgIgDgGIAIAAQAugBAdgEIAMgEIAIAPIgIAAIglAFIAAARIAgAAIAMAAIgBAMIAAAjQACAPgUgBIgOgBQAAgHgCgGIAQACQAFAAgBgEIAAghIgdAAIAAAzIABARg");
	this.shape.setTransform(28.2,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AAmA3QgOgBgOgRQgJgNgEgPIgfAAIAAAcQAUgEANgFIABAPQgEAAgZAIIgTAEIgFgNQAGgCgBgHIAAhIIgBgPQAGABAJAAIA8AAQAKAAAFgBIgBANIAAAOIABAMIgOgBIgVAAIACAOIAaAAIAPgBIAAANIgPgBIgXAAQAEANAJAKQAIAHAEAAQACABADgSQAGAEAGADQgEAagKAAIgBAAgAgigCIAdAAIgCgOIgbAAgAgigcIA8AAIAAgNIg8AAg");
	this.shape_1.setTransform(16,15.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AARAbQgLgNgGgUQgCAMgHAMQgGAOgNALQgIAHgMAIQgDgIgHgGQASgJAKgLQAXgaAAgsIgBgLIAQAAIgBAMQAAAeANAUQAHANAMALQAKAJAKAFQgGAHgEAIQgVgPgLgQg");
	this.shape_2.setTransform(2.5,15.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("Ag9AvIAJgHQAIgHADgBIAAgcIgHAAIgIABIAAgOQACACAHAAIAKAAQAFAAAFgCIgBAOIAAAbQABAAAGAGQAGAGAdAAQAbAAAVgCQgEAGAAAIIguABQgUAAgJgCQgGgBgJgIQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQgDAAgGAHIgIAHgAgIAdQAOgFANgNIgTgMIAIgJIATANIALgRIgnAAQgBARgEAOQgCAKgHALQgEgGgIgFQAHgIACgMQAEgQAAgbQAAgIgBgFIAGAAIAogEIAQgEIAJAMIgGABQgUAFgfABIABAEIgBAJIAkAAIAMgBIAHAHIgDAGQgFANgIAKIASAQIgJAKIgSgPQgMALgRAJIgIgMgAg6guIALgJQANAMAJAMIgLAJQgKgOgMgKg");
	this.shape_3.setTransform(151.3,32.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("AgtA9IABgQIAAgaIAAgMQgDAEgGAGIgGgOQAUgOAIgQIAMAIIgCACIgIALIAAA0IAAAPgAAtA3Ig2AAQgJAAgHABIAAgPIAQAAIATAAIAAgZIgMAAIgPAAIAAgOIAPABIAMAAIAAgWIgPAAIgOABIAAgBIAAgPIAOAAIAaAAQgKgJgPgHIAKgKQANAHAOALIgJAIIATAAQAJACAHgCIAAAQIgQgBIgTAAIAAAWIARAAIANgBIAAAOIgNAAIgRAAIAAAZIAVAAIAPAAIAAAPQgGgBgJAAgAgTgTgAg6giQAKgFAHgHQAHgHADgHIAMAIQAAACgGAFQgMANgNAJIgIgLg");
	this.shape_4.setTransform(135.7,32.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("Ag7AvQALgSAAgZIAAgEIAMABIgBAMIAAAHQACAFAFAFIAAgjIgLAAIgNAAIAAgNIANABIAKAAIAAgMIgHAAIgNABIAAgNIANAAIAHAAIAAgDQAAgIgCgEIAPAAIAAAMIAAADIAGAAIAMAAIAAANIgMgBIgGAAIAAAMIAIAAIALgBIAAANIgLAAIgHAAIAAANIAIAAIAJAAIAAANIgJgBIgIAAIAAATQAJAEAVAAQAhAAAOgDQgCAFgBAJIgNABIgdAAQgPAAgMgCQgTgDgJgPQgDAMgFAKQgFgHgGgDgAAIAgQgDgCABgJIAAgaIgBgOIAMABIAVAAIAAgTIgWAAIgMAAIAAgNIANAAIAVAAIANAAIAAAMIAAATIAAAOQgEgBgJAAIgTAAIAAAYIAAADQABABAJAAQAMAAACgCQABgCAAgGIAAgIQAHADAHABQgBARgDAEQgDADgEACIgTABIgEAAQgOAAgCgDg");
	this.shape_5.setTransform(150,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("Ag5ArQAUgJAHgNQAGgKAAgVIgRAAIgOABIAAgPIAOABIBTAAIAOgBIAAAPIgOgBIgWAAIAAAsQAAAGAKgBQANAAAAgFQABgEAAgNQAGADAIABQgCAXgDACQgCAGgYAAQgOAAgDgDQgEgCABgGIAAgzIgRAAQAAAYgIAPQgFALgLAIQgDADgJAEQgFgHgGgFgAAggnIg+AAIgMAAIAAgPQADABAJAAIA+AAQAIAAAEgBIAAAPIgMAAg");
	this.shape_6.setTransform(135.5,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.7,-29.9,234.1,91.9);


// stage content:
(lib._970x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{price:73,reshow:215,moveup:251,"no data":409});

	// timeline functions:
	this.frame_0 = function() {
		this.loop=1;
		window.cid = 0;
		
		//debug_price.call(this);
		
		//function debug_price(){
		//	window.is_all_data_error = true;
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
	this.frame_73 = function() {
		console.log(window.is_all_data_error)
		if(window.is_all_data_error==true){
			this.gotoAndPlay('no data');
		}else{
			//do nothing
		}
	}
	this.frame_74 = function() {
		window.cid=0;
	}
	this.frame_112 = function() {
		if(window.PriceDataFiltered.length<2){
			this.gotoAndPlay("moveup");
		}else{
			window.cid=1;
		}
	}
	this.frame_159 = function() {
		if(window.PriceDataFiltered.length<3){
			this.gotoAndPlay("reshow");
		}else{
			window.cid=2;
		}
	}
	this.frame_215 = function() {
		window.cid=0;
	}
	this.frame_380 = function() {
		if(this.loop>1){
			this.loop--;
			this.gotoAndPlay(2);
		}else{
			this.stop();
		}
	}
	this.frame_692 = function() {
		if(this.loop>1){
			this.loop--;
			this.gotoAndPlay(2);
		}else{
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(73).call(this.frame_73).wait(1).call(this.frame_74).wait(38).call(this.frame_112).wait(47).call(this.frame_159).wait(56).call(this.frame_215).wait(165).call(this.frame_380).wait(312).call(this.frame_692).wait(1));

	// =border=
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,0,3).p("EBLygThMAAAAnDMiXjAAAMAAAgnDg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(693));

	// t6
	this.instance = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(96.7,49.1,2.272,2.272,0,0,0,74.7,8.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(606).to({_off:false},0).wait(1).to({regX:86.2,regY:-1.6,x:122.8,y:26.6,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// t7
	this.instance_1 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(618.5,125.7,1.356,1.356,0,0,0,100.9,26.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(606).to({_off:false},0).wait(1).to({regX:100.2,x:617.5,y:125.6,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// t4
	this.instance_2 = new lib.yuding();
	this.instance_2.parent = this;
	this.instance_2.setTransform(616.2,127.7,1.72,1.72,0,0,0,79.7,19.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(545).to({_off:false},0).wait(1).to({regX:78.7,regY:19.7,x:614.4,y:127.9,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(44).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(87));

	// t3
	this.instance_3 = new lib.t3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(385.9,184.5,1,1,0,0,0,87.1,19.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(485).to({_off:false},0).wait(1).to({regX:133.1,regY:-4,x:431.9,y:160.6,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(43).to({alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(148));

	// t2
	this.instance_4 = new lib.t2swf("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(444.4,105.8,1,1,0,0,0,81,11.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(455).to({_off:false},0).wait(1).to({regX:66.5,regY:8.1,x:429.8,y:102.1,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(148));

	// 图层_12
	this.instance_5 = new lib.xiaobiaoanniu();
	this.instance_5.parent = this;
	this.instance_5.setTransform(955.4,230.2,1,1,0,0,0,4,8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(74).to({_off:false},0).to({_off:true},307).wait(312));

	// t6
	this.instance_6 = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(124.2,41.2,1.755,1.755,0,0,0,74,8.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(312).to({_off:false},0).wait(1).to({regX:86.2,regY:-1.6,x:145.7,y:23.6,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(312));

	// t7
	this.instance_7 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(772.5,123.2,1.045,1.045,0,0,0,100.8,26.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(312).to({_off:false},0).wait(1).to({regX:100.2,regY:26.8,x:771.8,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(312));

	// t4
	this.instance_8 = new lib.yuding();
	this.instance_8.parent = this;
	this.instance_8.setTransform(775,125.5,1.366,1.366,0,0,0,79.7,19.6);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(251).to({_off:false},0).wait(1).to({regX:78.7,regY:19.7,x:773.6,y:125.6,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(47).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).wait(69).to({_off:true},1).wait(312));

	// city1st
	this.instance_9 = new lib.t2swf2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(452.7,145.1,1.958,1.958,0,0,0,89.5,19.9);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(215).to({_off:false},0).wait(1).to({regX:77,regY:8.9,x:428.1,y:123.6,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(157).to({_off:true},1).wait(312));

	// city3
	this.instance_10 = new lib.t2swf2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(452.7,145.1,1.958,1.958,0,0,0,89.5,19.9);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(168).to({_off:false},0).wait(1).to({regX:77,regY:8.9,x:428.1,y:123.6,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(32).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(478));

	// city2
	this.instance_11 = new lib.t2swf2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(452.7,145.1,1.958,1.958,0,0,0,89.5,19.9);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(121).to({_off:false},0).wait(1).to({regX:77,regY:8.9,x:428.1,y:123.6,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(32).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(525));

	// city1
	this.instance_12 = new lib.t2swf2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(452.7,145,1.958,1.958,0,0,0,89.5,19.8);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(74).to({_off:false},0).wait(1).to({regX:77,regY:8.9,x:428.2,y:123.6,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(32).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(572));

	// t1
	this.instance_13 = new lib.t1swf("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(359.4,129.3,0.745,0.745,0,0,0,41.6,24.1);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(18).to({_off:false},0).wait(1).to({regX:65.8,regY:19.4,x:377.4,y:125.8,alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(619));

	// Layer_2
	this.instance_14 = new lib.mask("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(485.2,125,2,1,0,0,0,242.6,125);
	this.instance_14.alpha = 0.84;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({_off:false},0).wait(1).to({regX:242.5,x:485,alpha:0.775},0).wait(1).to({alpha:0.711},0).wait(1).to({alpha:0.646},0).wait(1).to({alpha:0.582},0).wait(1).to({alpha:0.517},0).wait(1).to({alpha:0.452},0).wait(1).to({alpha:0.388},0).wait(1).to({alpha:0.323},0).wait(1).to({alpha:0.258},0).wait(1).to({alpha:0.194},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.065},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_1
	this.instance_15 = new lib.mask("single",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(609.1,125,1.505,1,0,0,0,242.5,125);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// bg
	this.instance_16 = new lib.bg();
	this.instance_16.parent = this;
	this.instance_16.setTransform(164,129,0.824,0.824,0,0,0,255.2,133.7);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3).to({_off:false},0).wait(1).to({regX:259.6,regY:142.9,x:167.6,y:136.5},0).wait(689));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(484,124,972,252);
// library properties:
lib.properties = {
	id: 'D891C625F78F44A1A7470454287C1FE9',
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
an.compositions['D891C625F78F44A1A7470454287C1FE9'] = {
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