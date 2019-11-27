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
p.nominalBounds = new cjs.Rectangle(0,0,912,90);// helper functions:

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
	this.shape_17.graphics.f("#FFFFFF").s().p("AGDAyQATgCAAgNIAEAAQAAAEgCADIAJADIAMAEIgCAEIgUgIQgEAGgQACgAC+A1IAAgHIgLACIgBgDIADgBIAAgcIgCAAIAAgDIASAAIAAADIgDAAIAAAaIADgBIABAEIgEAAIAAAIgAC4ArIAGgBIAAgHIgGAAgAC4AhIAGAAIAAgHIgGAAgAC4AXIAGAAIAAgHIgGAAgABtA1IAAgDIATAAIAAgLIgNAAIAAgDIAfAAIAAADIgOAAIAAALIATAAIAAADgAFbAuIAAgBIgJAIIgCgDIAJgJQgCgJAAgLIgSAAIAAAHIAMAAIAAAMQAAAHgFAAIgGAAIAAgDIAFAAQADAAAAgEIAAgJIgJAAQAAAMgEAKIgEgCQADgHABgDQABgCAAgJIAAgMIAUAAIAAgJIAEAAIAAAJIAPAAIAAADIgPAAQABAIACAJQADgGADgHIAEACQgEAIgFAHQACAHACAAQABAAAAgBQABAAAAAAQAAAAABgBQAAAAAAgBIABgGIADAAQABACgCAGQgBAFgEAAIgBAAQgEAAgDgHgADFAyQAKgHABgJIgKAAIAAgDIAKAAIAAgJIgJAAIAAgDIALAAIABAAIAFgJIADABIgEAIIAHAAIAAADIgLAAIAAAJIAMAAIAAADIgLAAQADALAIAFIgDACQgIgEgDgJQgCAJgIAFgAAmA1IAAgDIAWAAIAAgFIgPAAIAAgCIAPAAIAAgFIgOAAIgFAGIgDgCQAGgFABgFIADABIgBACIANAAIAAgEIADAAIAAAEIARAAIAAADIgRAAIAAAFIAQAAIAAACIgQAAIAAAFIATAAIAAADgAD5A0IAAgDIAEAAIAAgLIAjAAIAAALIAEAAIAAADgAEWAxIAHAAIAAgIIgHAAgAELAxIAHAAIAAgIIgHAAgAEAAxIAIAAIAAgIIgIAAgAGFAsIAAgPIAkAAIAAAOIgDAAIAAgLIgdAAIAAAMgAEMAiQAEgEAAgJIAAgJIASAAIAAASQAAAGgFgBIgHAAIAAgDIAFAAQABAAABAAQAAAAABAAQAAgBAAAAQABgBAAAAIAAgBIgNAAIgBADIgCAEIgDgCgAETAaIAMAAIAAgEIgMAAgAETATIAMAAIAAgEIgMAAgACGAZIACgDIAIAFIAIAEIgCADIgQgJgAD7AiIAAgVIAOAAIAAAVgAD+AfIAIAAIAAgHIgIAAgAD+AWIAIAAIAAgHIgIAAgABtAfIAQgJIACADIgRAJgAArAdIAAgRIAjAAIAAARgAAuAaIAcAAIAAgEIgcAAgAAuATIAcAAIAAgEIgcAAgAGHAYIAAgMIAgAAIAAAMgAGLAVIAZAAIAAgGIgZAAgACUAWIAAgGIgiAAIAAAGIgEAAIAAgIIATAAIgBgFIAEgBIACAGIASAAIAAAIgADJALIADgBIAEAGIgDACIgEgHgAFfAMIACgCIAGAEIgDADIgFgFgAGngMIgBgBQgBAAAAgJQABgIgKABIgPAAIAAARIgEAAIAAgmIAUAAQANAAgBAKQAAAGgFADQAFACAAAGIAAAJIABACgAGNghIAPAAQAKAAAAgHQgBgGgIgBIgQAAgAFggMIAAgmIAdAAIAAADIgaAAIAAANIAZAAIAAAEIgZAAIAAAOIAbAAIAAAEgADMgMIAAgmIAeAAIAAADIgaAAIAAANIAZAAIAAAEIgZAAIAAAOIAaAAIAAAEgAmKgMIgFgMIgTAAIgFAMIgFAAIASgmIAEAAIARAmgAmggcIAPAAIgIgRIgHARgAldgNQgKAAgFgEQgDgDAAgGIAEAAQAAAEACADQADADAJAAQAEABAGgEQABAAAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgFgEgBQgEgCgEAAQgOABgDgLQAAgEADgCQAFgFAJAAQAHAAAFAEQADADAAAFIgEAAQAAgDgCgCQgFgEgEABIgJABQgEACABAEQAAAHAMAAQAOgBACAMQgFAKgIAAIgDAAgAEwgNIAAgmIAVAAQALABAAAJQAAAGgGACQAHACAAAHQgCALgKAAgAE0gQIAQAAQAJAAAAgIQgBgHgHAAIgRAAgAE0giIAQAAQAHAAABgHQgBgHgGABIgRAAgAEfgNIAAggIgRAgIgDAAIgRggIAAAgIgEAAIAAgmIAGAAIARAhIARghIAFAAIAAAmgAC6gNIAAggIgRAgIgEAAIgRghIAAAhIgEAAIAAgmIAGAAIARAhIARghIAFAAIAAAmgAAlggQAAgRAUgDQAPABAEAMIAAABIgEAAIAAgBQgDgJgMAAQgPABgBAPQAAAOAQACQANAAADgMIAAAAIADAAIAAAAQgBAOgSABQgTAAgBgTgABWgNIAAgmIAfAAIAAAEIgbAAIAAANIAaAAIAAADIgaAAIAAAOIAbAAIAAAEgAAWgNIgNgPIgOgRIAAAgIgDAAIAAgmIAEAAIAMAPIAOAQIAAgfIAEAAIAAAmgAgWgNIgFgMIgTAAIgGAMIgEAAIASgmIADAAIASAmgAgsgcIAQAAIgIgSIgIASgAhGgNIAAgmIAFAAIAAAmgAhpgNIAAgmIAFAAIAAAiIAWAAIAAAEgAiMgNIAAgmIAEAAIAAAiIAXAAIAAAEgAiagNIgGgMIgTAAIgFAMIgEAAIASgmIADAAIARAmgAixgcIAQAAIgIgSIgIASgAjagNIAAgBQgCAAAAgIQABgJgKABIgPAAIAAARIgEAAIAAgmIAUAAQANAAAAALQAAAFgGADQAFACAAAGQAAAIABACIABABgAj0ghIAPAAQAJAAAAgIQABgGgJAAIgQAAgAkFgNIgGgMIgTAAIgGAMIgEAAIASgmIADAAIASAmgAkdgcIAQAAIgHgSIgJASgAk6gNIAAgiIgPAAIAAgEIAhAAIAAAEIgOAAIAAAig");
	this.shape_17.setTransform(76,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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


(lib.t3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D61E05").s().p("AAhB5IgsAAQgxAEAEgwIAAh9IAhAAIAAB9QgCARARgDIAmAAQARAHABg5QAOAJAQAEQAABDgoAAIgFAAgAh+BIQAQgvAFg5IAgAGQgGA6gOA1gAA+gcIAdgMQAZA0AKAvIggAOQgJgwgXg1gAgvhiIAWgWQAqAbAfAdIgXAZQgbgdgtgeg");
	this.shape.setTransform(496,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D61E05").s().p("AAGgMQgfBchIArQgMgNgRgNQBVgrAWhsQgSgYgYgRIATgcQA6AxAaA7QAZA7A8ArQgKASgGATQhJg2gghSg");
	this.shape_1.setTransform(468.9,13.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D61E05").s().p("Ah+BuQAQgrABgzIgRAAIAAgbIASAAIAAhWIAcAAQAEgPADgOIAgAEIgKAZIApAAIAAA+IAAB+IAAAHQAagIAUgNQgWgYgNghIARgFIgTAAIAAgbIBdAAIAGgBIASAHQgKAygZAeQAUAOAaAHQgMAMgIAPQgcgKgVgPQgYASgeAKQgFgLgKgMQgBAMgKAEQgNAHgdgBQgCgOgGgOIAcABQAGAAgBgGIAAhLIgqAAQgBA8gUAyQgLgJgNgHgAA7A3QANgQAJgYIgyAAQAKAXASARgAhQgLIApAAIAAg9IgpAAIAAARIASgJQANATAIARIgUALQgHgQgMgUgAhRAhIAUgKQAOAVAIASIgVAMQgIgUgNgVgAgKgjQAWgSgDgWIAAgmIBZAAIAAA1QgBALAEgBIAKAAQAHAAAGgCIACAZQgGACgJAAIgNAAQgiABAEglIAAgYIgeAAIAAALQAEAigdAZQgKgKgNgKgAgKgjIAAAAg");
	this.shape_2.setTransform(441.9,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D61E05").s().p("AA1B9QgDgRgIgQIAoABQAIAAAAgHIAAjPIAfAAIAADPQABAbgPAGQgPAGgfAAIgIAAgAg/B9IAAhfQgTAmgWAYQgHgRgJgPQAfgfAUgtIgtAAIAAgdIAzAAIAAgiIgtAIQgDgNgGgMQBAgKAsgSIAWAYQgTAIgZAGIAAApIAwAAIAAAdIgwAAIAAAKIAuAoIgRAbQgMgOgRgTIAABhgAAgA5IAAiWIAgAAIAACWg");
	this.shape_3.setTransform(414.1,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D61E05").s().p("AgUBMIAAhFIgPAGIgMgcIAbgLIAAhHIAdAAIAAA6IAXgJIAAhLIAeAAIAAA+IAWgJIALgIIAWAIIgBAFQAABNgCARQgBASgNAEQgNAFgPgBQgBgOgFgNIAMABQAFAAACgGQABgGAAg4IgYALIAABeIgeAAIAAhRIgXAJIAABTQgCAVAVgDIA0AAQAUAEAAgmQANAIAQAEQgDA1gqgCIg6AAIgHAAQgrAAAEgwgAh/A6IAjgNIAAhLIggAAIAAgeIAgAAIAAg7IAdAAIAAA7IAcAAIAAAeIgcAAIAAA/IAagLIAHAdIhVAog");
	this.shape_4.setTransform(387.7,12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D61E05").s().p("AABBGQgOArhhAOQgGgPgKgNQBTgJANgdIhaAAIAAgbIBiAAIACgNIAhAAIgCANIBsAAIAAAbIhYAAQAaAgBGADQgMAOgHARQhPgIgcgxgABBAYIAAhmIiDAAIAABmIgeAAIAAiBIBIAAIAHgVIAjAFIgHAQIBVAAIAACBgAhAADQARgHAPgOIgbAAIAAgVIATAAIgOgYIAUgKQAJAOAGALIgRAJIAXAAIAAgkIAaAAIAAAkIAUAAIgQgIQAJgNAGgOIAXALIgTAYIAWAAIAAAVIgdAAQASALAMAJIgQARQgMgMgSgLIAPgOIgPAAIAAAgIgaAAIAAgTQgQAQgSALQgHgKgKgJg");
	this.shape_5.setTransform(360.8,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D61E05").s().p("AAEBjIAHg6IghAAIgHA6IgYAAIAHg6IgXAAIAAgaIAaAAIAFgkIgZAAIAAgZIAcAAIAHg0IAXAAIgGA0IAhAAIAHg0IAWAAIgFA0IAYAAIAAAZIgcAAIgEAkIAZAAIAAAaIgcAAIgHA6gAgTAPIAhAAIAFgkIghAAg");
	this.shape_6.setTransform(339.4,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t3, new cjs.Rectangle(332.4,0.4,176.2,25.5), null);


(lib.t2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D71E04").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMgAgSgSQgJAIABAKQgBAMAJAHQAHAJALgBQALABAIgJQAIgHAAgMQAAgKgIgIQgIgIgLAAQgLAAgHAIg");
	this.shape.setTransform(330.4,43.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D71E04").s().p("Ag1BuQAWgaAIgmQAHgbAAgrIAAheIASAAIAABeQAAAvgGAdQgJApgYAdQgGgGgKgGgABiB6IAAhtIgOAHQgHgbgTggIAACaIgTAAIAAjlIATAAIAABHIAOgFQAQAcAKAaIAAh8IAUAAIAADwgAhwBrQAUglASgwIAQAKQgRAvgSAogAg7APQAOgTAHgsIAPAFQgHAtgOAWgAADgnIAOgFQAOAfAFAaIgQAGQgEgbgNgfgAh0giIALgPQAdANARANIgMAQQgOgLgfgQgAhphqIAMgPQAeAQAOAMIgNAQQgPgOgcgPg");
	this.shape_1.setTransform(310.2,35.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D71E04").s().p("AgDBwIh0AAIAAjXIB0AAIAAASIhgAAIAAAdIAOgHQARAVAUAfQANgeAIggIASAEQgMAogQAiQAVAjALAYIgRAKQgJgVgQgdQgTAjgTAXQgHgFgHgFIAAAWIBgAAIAAAMQAbgcAKgpQAHgbAAglIAAgSIATAAIAAASIgBAYQAIAnANAZQAOAaAZAUQgKAHgEAJQglghgPgxQgMAygiAhQgEgGgGgGgAhjBEQAXgZATgkQgVghgVgcgABUgMQAGgQAHgiIhDAAQgMAigNAUIgQgLQAZghAKhHIATADQgEAXgFARIBGAAIACgBIAOAFQgJApgLAcg");
	this.shape_2.setTransform(284.3,35.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D71E04").s().p("Ah7BmQAXgaARgHIAAhGIglAAIAAgUIA5AAIAABbIAUAPQAUANAyAAQA1AAAsgFQgGAMAAAJQgnADg1AAQgyAAgXgPIgQgMQgGgGgEAAQgKABgbAkgAgwA8QAggQAQgdQANgZAFgmIhAAAIAAgUIBDAAIACg0IAUAAIgCA0IBNAAIAAAUIhPAAIgDATQA2A0AbAmIgRANQgWghgvgxQgRA6gxAaQgFgJgIgHgAhvhqIARgJQAXAbAKAYIgSAKQgIgWgYgeg");
	this.shape_3.setTransform(256.8,35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D71E04").s().p("Ah5B2IAAgSIAnAAIAAibIA/AAIADgVIhhAAIAAgSIBkAAIACgYIAVACIgDAWIBqAAIAAASIhuAAIgDAVIBVAAIAACbIAlAAIAAASgAg/BkICAAAIAAgYIiAAAgAg/A9ICAAAIAAgYIiAAAgAg/AWICAAAIAAgWIiAAAgAg/gPICAAAIAAgXIiAAAg");
	this.shape_4.setTransform(229.8,34.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D71E04").s().p("AhOB7IAAh9QgQAxgSAbQgFgLgGgJQANgQAMgdQALgbAHgcIgnAAIAAgTIApAAIAAg5IATAAIAAA5IAiAAIAAATIgiAAIAAAKQAWAeAPAXIgOAQQgGgOgRgcIAACEgABdBiQhkANgIAEIAAgBIgIgTQAHgCALgWQAGgOALgcQAPgjAHgeIAVAIQgUBBgcA1IBPgKQgNgbgIgQIAQgHQAbAvALAgIgSAJgAgegMQAegjANhCIAUADQgPBGgeAogAA7hwIATgEQAQA7AeAoQgKAHgGAJQgfgqgShFg");
	this.shape_5.setTransform(202.6,35.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D71E04").s().p("AhDB7IAAg4IgyAKIgFgTIA3gKIAAgnIgYAAQgQAAgEAFQgDgMgDgFQAFgCAIgUQAHgRAHgdIgdAAIAAgTIAhAAQAFgTABgMIAUADIgGAcIAwAAIAAATIg1AAQgJAhgNAeIAaAAIAAgpIATAAIAAApIAbAAIAAARIgbAAIAAAkIAdgFIABASIgeAFIAAA8gAgTB0IAAgTIA+AAIAAhBIgvAAIAAgSIByAAIAAASIgwAAIAABBIA8AAIAAATgAgUgMQAdgLAagVQAcgUAQgZIhVAAIAAgTIBhAAIAEgBIAOAIQgOAfgdAaQAmATATANIgMAOQgUgNgngTQgbAUggAOQgHgKgGgGg");
	this.shape_6.setTransform(175.7,35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t2, new cjs.Rectangle(160.3,12.4,201.1,52.4), null);


(lib.t1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D71E04").s().p("AhzBpQA3gSAAgqIAAgKQgZARgdAKQgJgPgNgOQAugNAhgcIgvAAIAAh9IDRAAIAAB9IgwAAQAhAbAwAMQgOANgKARQgbgJgXgPIAABdIgkAAIAAhnIAWAAQgWgRgMgSIgdAAQgNAQgXATIAZAAIAAAUQAAA+hDAZQgIgPgQgOgAARgkIA0AAIAAgVIg0AAgAhFgkIAzAAIAAgVIgzAAgAARhTIA0AAIAAgVIg0AAgAhFhTIAzAAIAAgVIgzAAg");
	this.shape.setTransform(278.4,36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D71E04").s().p("AhdCBIAAiaIgoAAIAAgiIAoAAIAAg/IAlAAIAAA/IAoAAIAAhFIAhAAIAABFIApAAIAAhCIAlAAIAABCIAnAAIAAAiIgnAAIAABWIhvAAIAAhWIgoAAIAAB3IC2AAIAAAjgAARAdIApAAIAAg2IgpAAg");
	this.shape_1.setTransform(248.8,34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D71E04").s().p("Ah8CIIAAggIBqAAIAAgkIhDAAIAAgeIBDAAIAAgiIhHAAIAAgTIgdAPQgGgNgRgQQApgRAjgaQAngdAVghIAeAOIgGAIQAwAzBLAhQgRAPgHAOIgcgPIAAASIhIAAIAAAiIBGAAIAAAeIhGAAIAAAkIBsAAIAAAggABHgaQgngagggjQggAjgnAaICOAAIAAAAg");
	this.shape_2.setTransform(219.4,35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D71E04").s().p("AgZCKIAAiJIhrAAIAAgiIBqAAIAAhoIAkAAIAAAkIBfAAIAAAhIhfAAIAAAjIB7AAIAAAiIh5AAIAAAqIAMgTQBKAcAYAMIgTAgQgbgPhAgbIAABUg");
	this.shape_3.setTransform(190,35.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D71E04").s().p("AgBBiIAtABQAIAAAAgIIAAiqIhKAAIAAgiICfAAIAAAiIgvAAIAACrQAAAQgEAIQgEAIgKAGQgOAGgvAAQgCgSgKgUgAiBBnIAdAAQAFAAAAgGIAAg6IgfAIIgKgjIApgJIAAgyIgmAAIAAghIAmAAIAAg4IAjAAIAAA4IAiAAIAAAhIgiAAIAAAqIAjgIIADAgIgmAKIAABEQAAAZgNAHQgLAHgigBQgBgOgKgSg");
	this.shape_4.setTransform(160.5,35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.t1, new cjs.Rectangle(144.2,10.9,150.6,46.8), null);


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


(lib.Symbol3_1 = function(mode,startPosition,loop) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D71E04").s().p("AgzBPIAjABQAGAAAAgFIAAhrIAbAAIAABsQAAALgDAHQgDAFgIADQgKAFgiABQgCgMgIgRgAhkA9QAZgZANgpIAcAFQgQAwgaAdQgJgHgPgJgAAjADIAYgJQAfAtAKAaIgbALQgKgdgcgsgAhogXQAfgdATg2IAcAHIgLAZIB0AAIAFgBIAVAHQgNAjgQAVIgYgKQAHgKAIgQIh1AAQgPAbgOAQQgMgLgNgHg");
	this.shape_1.setTransform(82.5,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D71E04").s().p("AhXBrIAAgXIBLAAIAAgOIgnAAIAAgNQgSAMgVAHQgGgLgLgKQAfgIAWgSIguAAIAAgWIA4AAIAAgKIgfAAIAAgTIAfAAIAAgKIgiAAIAAgMIgWAAIAAgtIBXAAIgGgLIAdgFIAJAQIBRAAIAAAtIgWAAIAAAMIggAAIAAAKIAfAAIAAATIgfAAIAAAKIA3AAIAAAWIgtAAQAVAQAfAJQgLAJgHAMQgTgGgRgMIAAANIgpAAIAAAOIBMAAIAAAXgAArAxQgNgKgHgKIgsAAQgIAKgNAKIAeAAIAAgOIAZAAIAAAOIAeAAIAAAAgAgSAHIAmAAIAAgKIgmAAgAgSgWIAmAAIAAgKIgmAAgAAug9IAAAKIAaAAIAAgPIiRAAIAAAPIAdAAIAAgKIAaAAIAAAKIAmAAIAAgKg");
	this.shape_2.setTransform(59.5,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D71E04").s().p("AhBBsIAAhRICNAAIAABRIgcAAIAAgHIhWAAIAAAHgAgmBTIBWAAIAAgKIhWAAgAgmA4IBWAAIAAgKIhWAAgAhdAVIAAgSIDFAAIAAASgAhJgCIAAgoIgNAIQgIgNgJgGQArgVAVghIAbAFIgGAJIAsAAIAFgCIASAKQgEAJgHAJIAvAAIAABBgAARgSIApAAIAAgJIgpAAgAgwgSIApAAIAAgJIgpAAgAARgqIApAAIAAgJIgpAAgAgwgqIApAAIAAgJIgpAAgAgphDIAxAAIAHgJIgvAAg");
	this.shape_3.setTransform(36,19.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D71E04").s().p("AACBsIAAhfIgjAAIAABKIgcAAIAAhCQgOAOgQALQgGgMgIgMQAjgWAXgvIgyAAIAAgaIA/AAQAGgRAEgRIAbAHIgIAbIBvAAIAAAaIh5AAQgLAUgIAPIAkAAIAAgbIAbAAIAAAbIBCAAIAABGQABASgMAGQgKAEgdAAQgCgMgGgNIAaAAQAEAAAAgEIAAgsIgmAAIAABfg");
	this.shape_4.setTransform(13.2,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D71E04").s().p("AgIBYQAcgPARgaQgKgXgHgcIgMAPQgFgJgHgJIAAAEIhXAAIAAgwIBXAAIAAAjQAWggALg6IAaAGQgGAZgFAPIA7AAIAAAZIgNAAQgHAygRAgQARAZAaAMQgKAIgIAPQgYgNgQgXQgRAXgaAOQgFgJgLgLgAAzATQAJgWAEggIgcAAQAGAhAJAVgAhFgVIApAAIAAgMIgpAAgAhWBUIAYAAQABAAABAAQABAAAAgBQABAAAAgBQAAAAAAgBIAAgNIgvAEIgDgWIAygFIAAgLQAJgEAJgFIg4AAIAAgUIBSAAIAFgCIAOAMQgRARgVAKIAAABIAngEIAAAWIgnAEIAAAQQAAAQgKAGQgJADgaAAQgCgLgGgLgAhng6IAAgYIAtAAIgHgUIAYgGIAKAaIAnAAIAAAYg");
	this.shape_5.setTransform(36.7,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D71E04").s().p("AhRBsIAAhzIgOAOQgHgPgIgMQAigiARg0IAaAIQgJAZgNAYIAAAaQA1ggAYg0IAeAGIgHAMQAMASASASQASAQASALQgKAIgJAOQgjgYgbgnQgTAagZAVIASAAIAAAoQAmgRAWgPIASAXQgpAWglANIAAAVQAAAHADADQACACAKAAIAnAAQAIAAADgGQADgGABgUQAKAHAOADQgCAbgIAKQgHAKgUgBIgsAAQgWAAgIgHQgIgHAAgWIAAhQIgQAMQgGgMgLgKIAACDg");
	this.shape_6.setTransform(13.5,19.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D71E04").s().p("AAVBmQAAgPgIgLIAhABQAIAAADgDQAIgHAGg3IiPAAQAEgfAEgsIAbACIgFAwIBMAAIAGg9Ih8AAIAAgaICBAAIAEgBIAVACQgCAggGA2IAnAAIgBAMQgHBPgMANQgJAJgPABIgSABIgSAAgAhkA7IAAgaICWAAIAAAag");
	this.shape_7.setTransform(36.4,20.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D71E04").s().p("AheBPQAugHAggNQgMgNgUgQIAVgOQAWASAMAMQAagPAPgWIhQAAQgVARgXALQgIgNgJgIQATgIASgMQASgOAKgOIg7AAIAAhGIC2AAIAABGIhsAAIAOAFIgIANIBGAAIAFgBIASALQgmBVh+AWQgGgOgKgKgAAog3IAbAAIAAgYIgbAAgAgKg3IAZAAIAAgYIgZAAgAg9g3IAaAAIAAgYIgaAAg");
	this.shape_8.setTransform(13.2,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,96.2,38.1);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.diandi();
	this.instance.parent = this;
	this.instance.setTransform(-62,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg, new cjs.Rectangle(-62,0,912,90), null);


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
	this.cityName = new lib.Symbol3_1();
	this.cityName.name = "cityName";
	this.cityName.parent = this;
	this.cityName.setTransform(-1.6,-19.5,0.843,0.843,0,0,0,3.8,9.7);

	this.timeline.addTween(cjs.Tween.get(this.cityName).wait(1));

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

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D81E05").s().p("AgGA7IABgRIAAgzIgbAAIAAAiIABAQIgQAAQACgHAAgJIAAgiQAAgGgCgGIAMAAIAeAAIAAgQIgFABIglABQgBgIgDgGIAIAAQAugBAdgEIAMgEIAIAPIgIAAIglAFIAAARIAgAAIAMAAIgBAMIAAAjQACAPgUgBIgOgBQAAgHgCgGIAQACQAFAAgBgEIAAghIgdAAIAAAzIABARg");
	this.shape.setTransform(28.2,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D81E05").s().p("AAmA3QgOgBgOgRQgJgNgEgPIgfAAIAAAcQAUgEANgFIABAPQgEAAgZAIIgTAEIgFgNQAGgCgBgHIAAhIIgBgPQAGABAJAAIA8AAQAKAAAFgBIgBANIAAAOIABAMIgOgBIgVAAIACAOIAaAAIAPgBIAAANIgPgBIgXAAQAEANAJAKQAIAHAEAAQACABADgSQAGAEAGADQgEAagKAAIgBAAgAgigCIAdAAIgCgOIgbAAgAgigcIA8AAIAAgNIg8AAg");
	this.shape_1.setTransform(16,9.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D81E05").s().p("AARAbQgLgNgGgUQgCAMgHAMQgGAOgNALQgIAHgMAIQgDgIgHgGQASgJAKgLQAXgaAAgsIgBgLIAQAAIgBAMQAAAeANAUQAHANAMALQAKAJAKAFQgGAHgEAIQgVgPgLgQg");
	this.shape_2.setTransform(2.5,9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D81E05").s().p("Ag9AvIAJgHQAIgHADgBIAAgcIgHAAIgIABIAAgOQACACAHAAIAKAAQAFAAAFgCIgBAOIAAAbQABAAAGAGQAGAGAdAAQAbAAAVgCQgEAGAAAIIguABQgUAAgJgCQgGgBgJgIQAAgBAAAAQgBAAAAAAQAAgBgBAAQAAAAgBAAQgDAAgGAHIgIAHgAgIAdQAOgFANgNIgTgMIAIgJIATANIALgRIgnAAQgBARgEAOQgCAKgHALQgEgGgIgFQAHgIACgMQAEgQAAgbQAAgIgBgFIAGAAIAogEIAQgEIAJAMIgGABQgUAFgfABIABAEIgBAJIAkAAIAMgBIAHAHIgDAGQgFANgIAKIASAQIgJAKIgSgPQgMALgRAJIgIgMgAg6guIALgJQANAMAJAMIgLAJQgKgOgMgKg");
	this.shape_3.setTransform(151.3,25.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D81E05").s().p("AgtA8IABgPIAAgaIAAgMQgDAFgGAEIgGgNQAUgOAIgQIAMAHIgCACIgIANIAAAzIAAAOgAAtA3Ig2AAQgJAAgHACIAAgQIAQAAIATAAIAAgZIgMAAIgPAAIAAgOIAPABIAMAAIAAgXIgPAAIgOABIAAgBIAAgNIAOAAIAaAAQgKgKgPgHIAKgJQANAFAOAMIgJAJIATAAQAJABAHgBIAAAOIgQgBIgTAAIAAAXIARAAIANgBIAAAOIgNAAIgRAAIAAAZIAVAAIAPAAIAAAQQgGgCgJAAgAgTgUgAg6gjQAKgEAHgIQAHgGADgGIAMAIQAAABgGAFQgMANgNAJIgIgMg");
	this.shape_4.setTransform(135.7,26);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D81E05").s().p("Ag7AvQALgSAAgZIAAgEIAMABIgBAMIAAAHQACAFAFAFIAAgjIgLAAIgNAAIAAgNIANABIAKAAIAAgMIgHAAIgNABIAAgNIANAAIAHAAIAAgDQAAgIgCgEIAPAAIAAAMIAAADIAGAAIAMAAIAAANIgMgBIgGAAIAAAMIAIAAIALgBIAAANIgLAAIgHAAIAAANIAIAAIAJAAIAAANIgJgBIgIAAIAAATQAJAEAVAAQAhAAAOgDQgCAFgBAJIgNABIgdAAQgPAAgMgCQgTgDgJgPQgDAMgFAKQgFgHgGgDgAAIAgQgDgCABgJIAAgaIgBgOIAMABIAVAAIAAgTIgWAAIgMAAIAAgNIANAAIAVAAIANAAIAAAMIAAATIAAAOQgEgBgJAAIgTAAIAAAYIAAADQABABAJAAQAMAAACgCQABgCAAgGIAAgIQAHADAHABQgBARgDAEQgDADgEACIgTABIgEAAQgOAAgCgDg");
	this.shape_5.setTransform(150,10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D81E05").s().p("Ag5ArQAUgJAHgNQAGgKAAgVIgRAAIgOABIAAgPIAOABIBTAAIAOgBIAAAPIgOgBIgWAAIAAAsQAAAGAKgBQANAAAAgFQABgEAAgNQAGADAIABQgCAXgDACQgCAGgYAAQgOAAgDgDQgEgCABgGIAAgzIgRAAQAAAYgIAPQgFALgLAIQgDADgJAEQgFgHgGgFgAAggnIg+AAIgMAAIAAgPQADABAJAAIA+AAQAIAAAEgBIAAAPIgMAAg");
	this.shape_6.setTransform(135.5,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-27.7,235.2,89.7);


// stage content:
(lib._912x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{price:86,reshow:230,moveup:267,"no data":421});

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
	this.frame_86 = function() {
		//console.log(window["is_data_error"])
		if(window.is_all_data_error==true){
			this.gotoAndPlay('no data');
		}else{
			//do nothing
		}
	}
	this.frame_95 = function() {
		window.cid=0;
	}
	this.frame_132 = function() {
		if(window.PriceDataFiltered.length<2){
			this.gotoAndPlay("moveup");
		}else{
			window.cid=1;
		}
	}
	this.frame_177 = function() {
		if(window.PriceDataFiltered.length<3){
			this.gotoAndPlay("reshow");
		}else{
			window.cid=2;
		}
	}
	this.frame_230 = function() {
		window.cid=0;
	}
	this.frame_410 = function() {
		if(this.loop>1){
			this.loop--;
			this.gotoAndPlay(2);
		}else{
			this.stop();
		}
	}
	this.frame_650 = function() {
		if(this.loop>1){
			this.loop--;
			this.gotoAndPlay(2);
		}else{
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(86).call(this.frame_86).wait(9).call(this.frame_95).wait(37).call(this.frame_132).wait(45).call(this.frame_177).wait(53).call(this.frame_230).wait(180).call(this.frame_410).wait(240).call(this.frame_650).wait(1));

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("EhHPgHBMCOfAAAIAAODMiOfAAAg");
	this.shape.setTransform(456,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},349).wait(302));

	// =border=
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,0,3).p("EhHPgHBMCOfAAAIAAODMiOfAAAg");
	this.shape_1.setTransform(456,45);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).wait(648));

	// =ss=
	this.instance = new lib.xiaobiaoanniu2();
	this.instance.parent = this;
	this.instance.setTransform(828.7,75.2,0.778,0.783,0,0,0,4,8.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(95).to({_off:false},0).to({_off:true},316).wait(240));

	// t6
	this.instance_1 = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(141.8,32.4,1.379,1.379,0,0,0,74.6,8.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(559).to({_off:false},0).wait(1).to({regX:85.8,regY:-1.6,x:157.2,y:19,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// t7
	this.instance_2 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(568.1,49.1,0.832,0.832,0,0,0,100.9,26.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(559).to({_off:false},0).wait(1).to({regX:100.2,x:567.4,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// t4
	this.instance_3 = new lib.yuding();
	this.instance_3.parent = this;
	this.instance_3.setTransform(568.3,47.1,1.036,1.036,0,0,0,79.7,20.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(507).to({_off:false},0).wait(1).to({regX:79.6,regY:19.5,x:568.1,y:46.3,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(38).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(92));

	// t3
	this.instance_4 = new lib.t3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(194,49.8,1,1,0,0,0,84.7,17.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(453).to({_off:false},0).wait(1).to({regX:420.5,regY:13.1,x:529.7,y:45.3,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(39).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(144));

	// t2
	this.instance_5 = new lib.t2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(319,26,1,1,0,0,0,231.5,16.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(421).to({_off:false},0).wait(1).to({regX:248.9,regY:35.5,x:336.3,y:45,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(68).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(144));

	// t6
	this.instance_6 = new lib.VektorSmartobjekt2swf("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(136.8,32,1.379,1.379,0,0,0,74.6,8.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(319).to({_off:false},0).wait(1).to({regX:85.8,regY:-1.6,x:152.2,y:18.6,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(240));

	// t7
	this.instance_7 = new lib.VektorSmartobjektswf("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(673,45.4,0.832,0.832,0,0,0,100.9,26.8);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(319).to({_off:false},0).wait(1).to({regX:100.2,x:672.4,y:45.3,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(240));

	// t4
	this.instance_8 = new lib.yuding();
	this.instance_8.parent = this;
	this.instance_8.setTransform(671.3,47.1,1.036,1.036,0,0,0,79.7,20.2);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;
	new cjs.ButtonHelper(this.instance_8, 0, 1, 2, false, new lib.yuding(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(267).to({_off:false},0).wait(1).to({regX:79.6,regY:19.5,x:671.1,y:46.3,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(38).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(332));

	// Layer_9
	this.instance_9 = new lib.t2swf2();
	this.instance_9.parent = this;
	this.instance_9.setTransform(362.6,60.2,1.196,1.196,0,0,0,89.2,19.6);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(230).to({_off:false},0).wait(1).to({regX:77,regY:6.5,x:348,y:44.5,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(173).to({_off:true},1).wait(240));

	// Layer_9
	this.instance_10 = new lib.t2swf2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(362.6,60.2,1.196,1.196,0,0,0,89.2,19.6);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(185).to({_off:false},0).wait(1).to({regX:77,regY:6.5,x:348,y:44.5,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(31).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(421));

	// Layer_9
	this.instance_11 = new lib.t2swf2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(362.6,60.2,1.196,1.196,0,0,0,89.2,19.6);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(140).to({_off:false},0).wait(1).to({regX:77,regY:6.5,x:348,y:44.5,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(31).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(466));

	// Layer_9
	this.instance_12 = new lib.t2swf2();
	this.instance_12.parent = this;
	this.instance_12.setTransform(362.6,60.2,1.196,1.196,0,0,0,89.2,19.6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(95).to({_off:false},0).wait(1).to({regX:77,regY:6.5,x:348,y:44.5,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(31).to({alpha:0.857},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(511));

	// t1
	this.instance_13 = new lib.t1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(287.2,38.1,0.877,0.877,0,0,0,184.7,27.7);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31).to({_off:false},0).wait(1).to({regX:219.5,regY:35.4,x:317.7,y:44.8,alpha:0.111},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:1},0).wait(47).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(556));

	// Layer_3
	this.instance_14 = new lib.Symbol1("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(540,45,0.5,1,0,0,0,455.9,45);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(19).to({_off:false},0).wait(1).to({regX:456,alpha:0.1},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.9},0).wait(1).to({alpha:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_1
	this.instance_15 = new lib.Symbol1("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(455.9,45,1,1,0,0,0,455.9,45);
	this.instance_15.alpha = 0.852;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(3).to({_off:false},0).wait(1).to({regX:456,x:456,alpha:0.797},0).wait(1).to({alpha:0.744},0).wait(1).to({alpha:0.691},0).wait(1).to({alpha:0.637},0).wait(1).to({alpha:0.584},0).wait(1).to({alpha:0.531},0).wait(1).to({alpha:0.478},0).wait(1).to({alpha:0.425},0).wait(1).to({alpha:0.372},0).wait(1).to({alpha:0.319},0).wait(1).to({alpha:0.266},0).wait(1).to({alpha:0.213},0).wait(1).to({alpha:0.159},0).wait(1).to({alpha:0.106},0).wait(1).to({alpha:0.053},0).wait(1).to({alpha:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer_8
	this.instance_16 = new lib.Symbol3("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(503,46.5,1,1,0,0,0,266.4,90.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3).to({_off:false},0).wait(648));

	// bg
	this.instance_17 = new lib.bg();
	this.instance_17.parent = this;
	this.instance_17.setTransform(456,45,1,1,0,0,0,456,45);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(3).to({_off:false},0).wait(648));

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
		{src:"img/bj.jpg", id:"diandi"}
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