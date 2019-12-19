window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","S_Test_Scale_Logo":"resource/eui_skins/S_Test_Scale_Logo.exml","S_Test_Video":"resource/eui_skins/S_Test_Video.exml","LoadingPage":"resource/eui_skins/LoadingPage.exml","S_Major":"resource/eui_skins/S_Major.exml","Layer_Bg":"resource/eui_skins/Layer_Bg.exml","S_Index":"resource/eui_skins/S_Index.exml","S_P1":"resource/eui_skins/S_P1.exml","Layer_share":"resource/eui_skins/Layer_share.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Layer_Bg.exml'] = window.Layer_BgSkin = (function (_super) {
	__extends(Layer_BgSkin, _super);
	function Layer_BgSkin() {
		_super.call(this);
		this.skinParts = ["bg","logo"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this.bg_i(),this.logo_i()];
	}
	var _proto = Layer_BgSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_png";
		t.top = 0;
		return t;
	};
	_proto.logo_i = function () {
		var t = new eui.Image();
		this.logo = t;
		t.bottom = 0;
		t.source = "logo_png";
		t.x = 232;
		return t;
	};
	return Layer_BgSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/Layer_share.exml'] = window.Layer_shareSkin = (function (_super) {
	__extends(Layer_shareSkin, _super);
	function Layer_shareSkin() {
		_super.call(this);
		this.skinParts = ["bt_gift","bt_share"];
		
		this.height = 145;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Group1_i()];
	}
	var _proto = Layer_shareSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = .5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "layout_n1r_jpg";
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 145;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.bt_gift_i(),this.bt_share_i()];
		return t;
	};
	_proto.bt_gift_i = function () {
		var t = new eui.Image();
		this.bt_gift = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bt_gift_png";
		t.top = 10;
		t.x = 386.09;
		t.y = 10;
		return t;
	};
	_proto.bt_share_i = function () {
		var t = new eui.Image();
		this.bt_share = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bt_share_png";
		t.top = 10;
		t.x = 82.3;
		t.y = 10;
		return t;
	};
	return Layer_shareSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/LoadingPage.exml'] = window.LoadingPageSkin = (function (_super) {
	__extends(LoadingPageSkin, _super);
	function LoadingPageSkin() {
		_super.call(this);
		this.skinParts = ["person","bar","t1","t2","t3","t4","t5","t6","t7","t8","t9","t10","t11","t12"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this.person_i(),this.bar_i(),this._Group1_i()];
	}
	var _proto = LoadingPageSkin.prototype;

	_proto.person_i = function () {
		var t = new eui.Image();
		this.person = t;
		t.anchorOffsetX = 68.71;
		t.anchorOffsetY = 79.43;
		t.height = 145;
		t.horizontalCenter = 0;
		t.source = "loading_pile box_png";
		t.verticalCenter = -112.5;
		t.width = 130;
		return t;
	};
	_proto.bar_i = function () {
		var t = new eui.ProgressBar();
		this.bar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 32;
		t.horizontalCenter = 0;
		t.maximum = 100;
		t.minimum = 0;
		t.verticalCenter = -3;
		t.width = 382;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.left = 55;
		t.right = 55;
		t.verticalCenter = 49;
		t.elementsContent = [this.t1_i(),this.t2_i(),this.t3_i(),this.t4_i(),this.t5_i(),this.t6_i(),this.t7_i(),this.t8_i(),this.t9_i(),this.t10_i(),this.t11_i(),this.t12_i()];
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Image();
		this.t1 = t;
		t.source = "loading_txt_12_png";
		t.x = 438.67;
		t.y = 4.16;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Image();
		this.t2 = t;
		t.source = "loading_txt_11_png";
		t.x = 403.72;
		t.y = 4.16;
		return t;
	};
	_proto.t3_i = function () {
		var t = new eui.Image();
		this.t3 = t;
		t.source = "loading_txt_10_png";
		t.x = 371.04;
		t.y = 4.16;
		return t;
	};
	_proto.t4_i = function () {
		var t = new eui.Image();
		this.t4 = t;
		t.source = "loading_txt_09_png";
		t.x = 339.36;
		t.y = 4.16;
		return t;
	};
	_proto.t5_i = function () {
		var t = new eui.Image();
		this.t5 = t;
		t.source = "loading_txt_08_png";
		t.x = 309.01;
		t.y = 4.16;
		return t;
	};
	_proto.t6_i = function () {
		var t = new eui.Image();
		this.t6 = t;
		t.source = "loading_txt_07_png";
		t.x = 278.33;
		t.y = 4.16;
		return t;
	};
	_proto.t7_i = function () {
		var t = new eui.Image();
		this.t7 = t;
		t.source = "loading_txt_06_png";
		t.x = 245.32;
		t.y = 4.16;
		return t;
	};
	_proto.t8_i = function () {
		var t = new eui.Image();
		this.t8 = t;
		t.source = "loading_txt_05_png";
		t.x = 212.05;
		t.y = 4.16;
		return t;
	};
	_proto.t9_i = function () {
		var t = new eui.Image();
		this.t9 = t;
		t.source = "loading_txt_04_png";
		t.x = 180.37;
		t.y = 4.16;
		return t;
	};
	_proto.t10_i = function () {
		var t = new eui.Image();
		this.t10 = t;
		t.source = "loading_txt_03_png";
		t.x = 151.35;
		t.y = 4.16;
		return t;
	};
	_proto.t11_i = function () {
		var t = new eui.Image();
		this.t11 = t;
		t.source = "loading_txt_02_png";
		t.x = 118.34;
		t.y = 4.16;
		return t;
	};
	_proto.t12_i = function () {
		var t = new eui.Image();
		this.t12 = t;
		t.source = "loading_txt_01_png";
		t.x = 87;
		t.y = 4.16;
		return t;
	};
	return LoadingPageSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(24,22,398,2);
		t.source = "loading_bg_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 79;
		t.scale9Grid = new egret.Rectangle(17,14,389,3);
		t.source = "loading_bar_png";
		t.percentWidth = 97;
		t.x = 6.22;
		t.y = 3.85;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/S_Index.exml'] = window.S_IndexSkin = (function (_super) {
	__extends(S_IndexSkin, _super);
	function S_IndexSkin() {
		_super.call(this);
		this.skinParts = ["bg","t1","masker","p6","p5","p4","p3","p2","p1","area","arrawToLeft","arrawHole","arrawHand","grp_arraw","c1","c2","c3","contents"];
		
		this.height = 1330;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this.contents_i(),this._Image2_i()];
	}
	var _proto = S_IndexSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.contents_i = function () {
		var t = new eui.Group();
		this.contents = t;
		t.height = 1330;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.t1_i(),this.masker_i(),this.area_i(),this.grp_arraw_i(),this.c1_i(),this.c2_i(),this.c3_i()];
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Image();
		this.t1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "t1_png";
		t.x = 82;
		t.y = 156;
		return t;
	};
	_proto.masker_i = function () {
		var t = new eui.Rect();
		this.masker = t;
		t.fillColor = 0x0000ff;
		t.height = 629;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 584;
		t.x = 82;
		t.y = 348;
		return t;
	};
	_proto.area_i = function () {
		var t = new eui.Group();
		this.area = t;
		t.blendMode = "normal";
		t.height = 630;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 587;
		t.x = 80;
		t.y = 348;
		t.elementsContent = [this._Rect1_i(),this.p6_i(),this.p5_i(),this.p4_i(),this.p3_i(),this.p2_i(),this.p1_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xfd8942;
		t.height = 642;
		t.width = 610;
		t.x = -19.33;
		t.y = -6;
		return t;
	};
	_proto.p6_i = function () {
		var t = new eui.Image();
		this.p6 = t;
		t.anchorOffsetX = 408;
		t.anchorOffsetY = 574;
		t.horizontalCenter = -27.5;
		t.source = "s1_png";
		t.verticalCenter = -81;
		return t;
	};
	_proto.p5_i = function () {
		var t = new eui.Image();
		this.p5 = t;
		t.source = "p4_png";
		t.x = 274;
		t.y = 34;
		return t;
	};
	_proto.p4_i = function () {
		var t = new eui.Image();
		this.p4 = t;
		t.source = "p5_png";
		t.x = 73.67;
		t.y = 6.5;
		return t;
	};
	_proto.p3_i = function () {
		var t = new eui.Image();
		this.p3 = t;
		t.source = "p3_png";
		t.x = -24.33;
		t.y = 125;
		return t;
	};
	_proto.p2_i = function () {
		var t = new eui.Image();
		this.p2 = t;
		t.source = "p2_png";
		t.x = 277.67;
		t.y = 150;
		return t;
	};
	_proto.p1_i = function () {
		var t = new eui.Image();
		this.p1 = t;
		t.source = "p1_png";
		t.x = -50.41;
		t.y = 200;
		return t;
	};
	_proto.grp_arraw_i = function () {
		var t = new eui.Group();
		this.grp_arraw = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 110.61;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 116.67;
		t.x = 322;
		t.y = 1057;
		t.elementsContent = [this.arrawToLeft_i(),this.arrawHole_i(),this.arrawHand_i(),this._Image1_i()];
		return t;
	};
	_proto.arrawToLeft_i = function () {
		var t = new eui.Image();
		this.arrawToLeft = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hand_arraw_png";
		t.x = 21.670000000000016;
		t.y = 16.99000000000001;
		return t;
	};
	_proto.arrawHole_i = function () {
		var t = new eui.Image();
		this.arrawHole = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hand_hole_png";
		t.x = 28.089999999999975;
		t.y = 56.16999999999996;
		return t;
	};
	_proto.arrawHand_i = function () {
		var t = new eui.Image();
		this.arrawHand = t;
		t.anchorOffsetX = 15.15;
		t.anchorOffsetY = 65.15;
		t.height = 64.67;
		t.rotation = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "hand_png";
		t.width = 27.67;
		t.x = 54.91;
		t.y = 80.8;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "txt_slideLeft_png";
		t.x = -4;
		t.y = 84;
		return t;
	};
	_proto.c1_i = function () {
		var t = new eui.Image();
		this.c1 = t;
		t.anchorOffsetX = 82;
		t.anchorOffsetY = 82;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1c1_png";
		t.x = 205.84;
		t.y = 958.81;
		return t;
	};
	_proto.c2_i = function () {
		var t = new eui.Image();
		this.c2 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 96;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1c2_png";
		t.x = 380.99;
		t.y = 965.93;
		return t;
	};
	_proto.c3_i = function () {
		var t = new eui.Image();
		this.c3 = t;
		t.anchorOffsetX = 82;
		t.anchorOffsetY = 84;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "1c3_png";
		t.x = 548.84;
		t.y = 961.84;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.alpha = .5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "layout_major_png";
		t.top = 0;
		t.visible = false;
		return t;
	};
	return S_IndexSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/S_Major.exml'] = window.S_MajorSkin = (function (_super) {
	__extends(S_MajorSkin, _super);
	function S_MajorSkin() {
		_super.call(this);
		this.skinParts = ["card_bg0","card_color0","card0","card_bg1","card_color1","card1","card_bg5","card_color5","card5","card_bg2","card_color2","card2","card_bg4","card_color4","card4","toLeft","toRight","card_bg3","card_color3","video_frame","card3"];
		
		this.height = 1330;
		this.width = 750;
		this.elementsContent = [this.card0_i(),this.card1_i(),this.card5_i(),this.card2_i(),this.card4_i(),this.card3_i(),this._Image1_i()];
	}
	var _proto = S_MajorSkin.prototype;

	_proto.card0_i = function () {
		var t = new eui.Group();
		this.card0 = t;
		t.height = 943;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 532;
		t.elementsContent = [this.card_bg0_i(),this.card_color0_i()];
		return t;
	};
	_proto.card_bg0_i = function () {
		var t = new eui.Image();
		this.card_bg0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(80,138,481,832);
		t.source = "card_bg_png";
		t.top = 0;
		return t;
	};
	_proto.card_color0_i = function () {
		var t = new eui.Rect();
		this.card_color0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 37;
		t.fillColor = 0xBCE4FA;
		t.left = 33;
		t.right = 31;
		t.top = 23;
		return t;
	};
	_proto.card1_i = function () {
		var t = new eui.Group();
		this.card1 = t;
		t.height = 943;
		t.horizontalCenter = -109;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 532;
		t.elementsContent = [this.card_bg1_i(),this.card_color1_i()];
		return t;
	};
	_proto.card_bg1_i = function () {
		var t = new eui.Image();
		this.card_bg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(80,138,481,832);
		t.source = "card_bg_png";
		t.top = 0;
		return t;
	};
	_proto.card_color1_i = function () {
		var t = new eui.Rect();
		this.card_color1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 37;
		t.fillColor = 0xBCE4FA;
		t.left = 33;
		t.right = 31;
		t.top = 23;
		return t;
	};
	_proto.card5_i = function () {
		var t = new eui.Group();
		this.card5 = t;
		t.height = 947;
		t.horizontalCenter = 103.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 541;
		t.elementsContent = [this.card_bg5_i(),this.card_color5_i()];
		return t;
	};
	_proto.card_bg5_i = function () {
		var t = new eui.Image();
		this.card_bg5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(80,138,481,832);
		t.source = "card_bg_png";
		t.top = 0;
		return t;
	};
	_proto.card_color5_i = function () {
		var t = new eui.Rect();
		this.card_color5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 42;
		t.fillColor = 0xBCE4FA;
		t.left = 37;
		t.right = 34;
		t.top = 29;
		return t;
	};
	_proto.card2_i = function () {
		var t = new eui.Group();
		this.card2 = t;
		t.height = 1024;
		t.horizontalCenter = -59.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 579;
		t.elementsContent = [this.card_bg2_i(),this.card_color2_i()];
		return t;
	};
	_proto.card_bg2_i = function () {
		var t = new eui.Image();
		this.card_bg2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(80,138,481,832);
		t.source = "card_bg_png";
		t.top = 0;
		return t;
	};
	_proto.card_color2_i = function () {
		var t = new eui.Rect();
		this.card_color2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 43;
		t.fillColor = 0xBCE4FA;
		t.left = 37;
		t.right = 37;
		t.top = 31;
		return t;
	};
	_proto.card4_i = function () {
		var t = new eui.Group();
		this.card4 = t;
		t.height = 1022;
		t.horizontalCenter = 49.5;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 603;
		t.elementsContent = [this.card_bg4_i(),this.card_color4_i()];
		return t;
	};
	_proto.card_bg4_i = function () {
		var t = new eui.Image();
		this.card_bg4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(80,138,481,832);
		t.source = "card_bg_png";
		t.top = 0;
		return t;
	};
	_proto.card_color4_i = function () {
		var t = new eui.Rect();
		this.card_color4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 47;
		t.fillColor = 0xBCE4FA;
		t.left = 35;
		t.right = 37;
		t.top = 27;
		return t;
	};
	_proto.card3_i = function () {
		var t = new eui.Group();
		this.card3 = t;
		t.height = 1110;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.width = 640;
		t.elementsContent = [this.toLeft_i(),this.toRight_i(),this.card_bg3_i(),this.card_color3_i(),this.video_frame_i()];
		return t;
	};
	_proto.toLeft_i = function () {
		var t = new eui.Image();
		this.toLeft = t;
		t.source = "hand_left_png";
		t.x = -50;
		t.y = 524;
		return t;
	};
	_proto.toRight_i = function () {
		var t = new eui.Image();
		this.toRight = t;
		t.source = "hand_right_png";
		t.x = 623;
		t.y = 526;
		return t;
	};
	_proto.card_bg3_i = function () {
		var t = new eui.Image();
		this.card_bg3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(80,138,481,832);
		t.source = "card_bg_png";
		t.top = 0;
		return t;
	};
	_proto.card_color3_i = function () {
		var t = new eui.Rect();
		this.card_color3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 45;
		t.fillColor = 0xbce4fa;
		t.left = 39;
		t.right = 38;
		t.top = 23;
		return t;
	};
	_proto.video_frame_i = function () {
		var t = new eui.Rect();
		this.video_frame = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xBCE4FA;
		t.height = 443;
		t.width = 567;
		t.x = 39;
		t.y = 225;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = .5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "layout_n1r_jpg";
		t.top = 0;
		t.visible = false;
		return t;
	};
	return S_MajorSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/S_P1.exml'] = window.S_P1Skin = (function (_super) {
	__extends(S_P1Skin, _super);
	function S_P1Skin() {
		_super.call(this);
		this.skinParts = ["bg","masker","t1","v1","p1","t2","contents","bt_gift0","bt_share0","buttons"];
		
		this.height = 1330;
		this.width = 750;
		this.elementsContent = [this.bg_i(),this.contents_i(),this.buttons_i(),this._Image1_i()];
	}
	var _proto = S_P1Skin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Group();
		this.bg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.contents_i = function () {
		var t = new eui.Group();
		this.contents = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.masker_i(),this.t1_i(),this.v1_i(),this.p1_i(),this.t2_i()];
		return t;
	};
	_proto.masker_i = function () {
		var t = new eui.Rect();
		this.masker = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 398.79;
		t.left = 0;
		t.right = 0;
		t.y = 789.3;
		return t;
	};
	_proto.t1_i = function () {
		var t = new eui.Image();
		this.t1 = t;
		t.source = "t12_png";
		t.x = 99;
		t.y = 157.33;
		return t;
	};
	_proto.v1_i = function () {
		var t = new eui.Image();
		this.v1 = t;
		t.source = "v1_png";
		t.x = 78.47;
		t.y = 339.27;
		return t;
	};
	_proto.p1_i = function () {
		var t = new eui.Image();
		this.p1 = t;
		t.source = "p12_png";
		t.x = 54.46;
		t.y = 857.09;
		return t;
	};
	_proto.t2_i = function () {
		var t = new eui.Image();
		this.t2 = t;
		t.source = "t_walk_png";
		t.x = 189.59;
		t.y = 794.42;
		return t;
	};
	_proto.buttons_i = function () {
		var t = new eui.Group();
		this.buttons = t;
		t.bottom = 95;
		t.height = 145;
		t.horizontalCenter = 0;
		t.width = 750;
		t.elementsContent = [this.bt_gift0_i(),this.bt_share0_i()];
		return t;
	};
	_proto.bt_gift0_i = function () {
		var t = new eui.Image();
		this.bt_gift0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bt_gift_png";
		t.top = 10;
		t.x = 386.09;
		t.y = 10;
		return t;
	};
	_proto.bt_share0_i = function () {
		var t = new eui.Image();
		this.bt_share0 = t;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bt_share_png";
		t.top = 10;
		t.x = 82.3;
		t.y = 10;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = .5;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "layout_n1r_jpg";
		t.top = 0;
		t.visible = false;
		return t;
	};
	return S_P1Skin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/S_Test_Scale_Logo.exml'] = window.S_Test_Scale_LogoSkin = (function (_super) {
	__extends(S_Test_Scale_LogoSkin, _super);
	function S_Test_Scale_LogoSkin() {
		_super.call(this);
		this.skinParts = ["layout","img_logo","loadingbar"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this._Image1_i(),this.layout_i(),this.img_logo_i(),this._Group1_i()];
	}
	var _proto = S_Test_Scale_LogoSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg_png";
		t.top = 0;
		return t;
	};
	_proto.layout_i = function () {
		var t = new eui.Image();
		this.layout = t;
		t.alpha = 0.4;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1130;
		t.source = "layout_loading_jpg";
		t.width = 598.48;
		t.x = 20.76;
		t.y = -85;
		return t;
	};
	_proto.img_logo_i = function () {
		var t = new eui.Image();
		this.img_logo = t;
		t.bottom = 4;
		t.horizontalCenter = 0;
		t.source = "logo_png";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.height = 200;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 200;
		t.x = 96.74;
		t.y = 242;
		t.elementsContent = [this.loadingbar_i()];
		return t;
	};
	_proto.loadingbar_i = function () {
		var t = new eui.ProgressBar();
		this.loadingbar = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 36;
		t.maximum = 100;
		t.minimum = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.ProgressBarSkin";
		t.value = 0;
		t.width = 334;
		t.x = 57.5;
		t.y = 222.38;
		return t;
	};
	return S_Test_Scale_LogoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/S_Test_Video.exml'] = window.S_Test_VideoSkin = (function (_super) {
	__extends(S_Test_VideoSkin, _super);
	function S_Test_VideoSkin() {
		_super.call(this);
		this.skinParts = ["video_container"];
		
		this.height = 960;
		this.width = 640;
		this.elementsContent = [this.video_container_i(),this._Rect1_i(),this._Rect2_i(),this._Rect3_i(),this._Rect4_i()];
	}
	var _proto = S_Test_VideoSkin.prototype;

	_proto.video_container_i = function () {
		var t = new eui.Group();
		this.video_container = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 236;
		t.width = 414;
		t.x = 113;
		t.y = 128;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0x8aff00;
		t.height = 10;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0x8AFF00;
		t.left = 624;
		t.right = 0;
		t.top = 0;
		t.width = 10;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0x8AFF00;
		t.left = 0;
		t.top = 0;
		t.width = 10;
		return t;
	};
	_proto._Rect4_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.fillColor = 0x8AFF00;
		t.height = 10;
		t.left = 0;
		t.right = 0;
		return t;
	};
	return S_Test_VideoSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);