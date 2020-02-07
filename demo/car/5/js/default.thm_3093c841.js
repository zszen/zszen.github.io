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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
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
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
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
})(eui.Skin);generateEUI.paths['resource/ui/board_end.exml'] = window.board_endSkin = (function (_super) {
	__extends(board_endSkin, _super);
	function board_endSkin() {
		_super.call(this);
		this.skinParts = ["bt_close","bt_bonus","bt_revivo","bt_rank"];
		
		this.height = 1136;
		this.width = 640;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.bt_close_i(),this.bt_bonus_i(),this.bt_revivo_i(),this.bt_rank_i()];
	}
	var _proto = board_endSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "board_end_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.bt_close_i = function () {
		var t = new eui.Button();
		this.bt_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.horizontalCenter = 195;
		t.label = "";
		t.verticalCenter = -163;
		t.width = 60;
		return t;
	};
	_proto.bt_bonus_i = function () {
		var t = new eui.Button();
		this.bt_bonus = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = 3;
		t.label = "";
		t.verticalCenter = 44;
		t.width = 224;
		return t;
	};
	_proto.bt_revivo_i = function () {
		var t = new eui.Button();
		this.bt_revivo = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = 1;
		t.label = "";
		t.verticalCenter = 125;
		t.width = 224;
		return t;
	};
	_proto.bt_rank_i = function () {
		var t = new eui.Button();
		this.bt_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.horizontalCenter = 0;
		t.label = "";
		t.verticalCenter = 211;
		t.width = 224;
		return t;
	};
	return board_endSkin;
})(eui.Skin);generateEUI.paths['resource/ui/ui_road.exml'] = window.ui_roadSkin = (function (_super) {
	__extends(ui_roadSkin, _super);
	function ui_roadSkin() {
		_super.call(this);
		this.skinParts = ["mov_road_def","mov_car1","mov_car2","mov_cloudy","mov_chest_def","mov_chest_wave","mov_chest_shake","ly_pots_planet","ly_cloudy","road","road_masker","road_speed1","road_speed2","ly_road_speedup","sign3","sign4","sign5","sign6","sign7","sign8","ly_road_lines","fog","ly_pots_trap","fog_small","car","mcAbsorbTarget","mcDetectTarget","txtCoinCount","ly_txtCoinCount","ly_car","p_start1","p_start2","p_start3","p_start4","p_start5","p_start6","p_end1","p_end2","p_end3","p_end4","p_end5","p_end6","p_end7","ly_pots","ly_animations","txt_hp","ly_bottom_simbols","txt_distance","ly_top_simbols","ly_blocks","ly_popboard","bt_d_close","bt_d_water","bt_d_well","bt_d_hole","bt_d_ship","bt_d_whale","bt_d_coin","bt_d_popboard","bt_d_glassroad","bt_d_infokm","bt_d_gameover","bt_d_chest1red","bt_d_chest2green","bt_d_chest3orange","bt_d_chest4yellow","bt_d_chest5blue","bt_d_chest6purple","bt_d_chest7tree","bt_d_chest8girl","ly_debug_btns","txt_pop_km","tkm0","ly_pop_km","ly_board"];
		
		this.height = 1136;
		this.width = 640;
		this.mov_road_def_i();
		this.mov_car1_i();
		this.mov_car2_i();
		this.mov_cloudy_i();
		this.mov_chest_def_i();
		this.mov_chest_wave_i();
		this.mov_chest_shake_i();
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.ly_pots_planet_i(),this.ly_cloudy_i(),this.road_i(),this.road_masker_i(),this.ly_road_speedup_i(),this.ly_road_lines_i(),this.fog_i(),this.ly_pots_trap_i(),this.fog_small_i(),this.ly_car_i(),this.ly_pots_i(),this.ly_animations_i(),this.ly_bottom_simbols_i(),this.ly_top_simbols_i(),this.ly_blocks_i(),this.ly_popboard_i(),this.ly_debug_btns_i(),this.ly_pop_km_i(),this.ly_board_i()];
		
		eui.Binding.$bindProperties(this, ["sign3"],[0],this._TweenItem1,"target");
		eui.Binding.$bindProperties(this, [1.31],[],this._Object1,"scaleX");
		eui.Binding.$bindProperties(this, [1.36],[],this._Object1,"scaleY");
		eui.Binding.$bindProperties(this, [260.43],[],this._Object1,"x");
		eui.Binding.$bindProperties(this, [566.71],[],this._Object1,"y");
		eui.Binding.$bindProperties(this, [1.74],[],this._Object2,"scaleX");
		eui.Binding.$bindProperties(this, [1.86],[],this._Object2,"scaleY");
		eui.Binding.$bindProperties(this, [213.43],[],this._Object2,"x");
		eui.Binding.$bindProperties(this, [805.71],[],this._Object2,"y");
		eui.Binding.$bindProperties(this, ["sign4"],[0],this._TweenItem2,"target");
		eui.Binding.$bindProperties(this, [1.31],[],this._Object3,"scaleX");
		eui.Binding.$bindProperties(this, [1.36],[],this._Object3,"scaleY");
		eui.Binding.$bindProperties(this, [386.29],[],this._Object3,"x");
		eui.Binding.$bindProperties(this, [567.19],[],this._Object3,"y");
		eui.Binding.$bindProperties(this, [1.74],[],this._Object4,"scaleX");
		eui.Binding.$bindProperties(this, [1.86],[],this._Object4,"scaleY");
		eui.Binding.$bindProperties(this, [441.29],[],this._Object4,"x");
		eui.Binding.$bindProperties(this, [806.86],[],this._Object4,"y");
		eui.Binding.$bindProperties(this, ["sign5"],[0],this._TweenItem3,"target");
		eui.Binding.$bindProperties(this, [1.74],[],this._Object5,"scaleX");
		eui.Binding.$bindProperties(this, [1.86],[],this._Object5,"scaleY");
		eui.Binding.$bindProperties(this, [213.43],[],this._Object5,"x");
		eui.Binding.$bindProperties(this, [805.71],[],this._Object5,"y");
		eui.Binding.$bindProperties(this, [2.18],[],this._Object6,"scaleX");
		eui.Binding.$bindProperties(this, [2.36],[],this._Object6,"scaleY");
		eui.Binding.$bindProperties(this, [166.43],[],this._Object6,"x");
		eui.Binding.$bindProperties(this, [1044.71],[],this._Object6,"y");
		eui.Binding.$bindProperties(this, ["sign6"],[0],this._TweenItem4,"target");
		eui.Binding.$bindProperties(this, [1.74],[],this._Object7,"scaleX");
		eui.Binding.$bindProperties(this, [1.86],[],this._Object7,"scaleY");
		eui.Binding.$bindProperties(this, [441.29],[],this._Object7,"x");
		eui.Binding.$bindProperties(this, [806.86],[],this._Object7,"y");
		eui.Binding.$bindProperties(this, [2.18],[],this._Object8,"scaleX");
		eui.Binding.$bindProperties(this, [2.36],[],this._Object8,"scaleY");
		eui.Binding.$bindProperties(this, [496.29],[],this._Object8,"x");
		eui.Binding.$bindProperties(this, [1046.52],[],this._Object8,"y");
		eui.Binding.$bindProperties(this, ["sign7"],[0],this._TweenItem5,"target");
		eui.Binding.$bindProperties(this, [1.31],[],this._Object9,"scaleX");
		eui.Binding.$bindProperties(this, [1.36],[],this._Object9,"scaleY");
		eui.Binding.$bindProperties(this, [260.43],[],this._Object9,"x");
		eui.Binding.$bindProperties(this, [566.71],[],this._Object9,"y");
		eui.Binding.$bindProperties(this, ["sign8"],[0],this._TweenItem6,"target");
		eui.Binding.$bindProperties(this, [1.31],[],this._Object10,"scaleX");
		eui.Binding.$bindProperties(this, [1.36],[],this._Object10,"scaleY");
		eui.Binding.$bindProperties(this, [386.29],[],this._Object10,"x");
		eui.Binding.$bindProperties(this, [567.19],[],this._Object10,"y");
		eui.Binding.$bindProperties(this, ["car"],[0],this._TweenItem7,"target");
		eui.Binding.$bindProperties(this, [8],[],this._Object11,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object12,"rotation");
		eui.Binding.$bindProperties(this, ["car"],[0],this._TweenItem8,"target");
		eui.Binding.$bindProperties(this, [-8],[],this._Object13,"rotation");
		eui.Binding.$bindProperties(this, [0],[],this._Object14,"rotation");
		eui.Binding.$bindProperties(this, ["ly_cloudy"],[0],this._TweenItem9,"target");
		eui.Binding.$bindProperties(this, [-2681],[],this._Object15,"x");
		eui.Binding.$bindProperties(this, ["p_start1"],[0],this._TweenItem10,"target");
		eui.Binding.$bindProperties(this, [358],[],this._Object16,"x");
		eui.Binding.$bindProperties(this, [3],[],this._Object17,"scaleX");
		eui.Binding.$bindProperties(this, [3],[],this._Object17,"scaleY");
		eui.Binding.$bindProperties(this, [579],[],this._Object17,"x");
		eui.Binding.$bindProperties(this, [980],[],this._Object17,"y");
		eui.Binding.$bindProperties(this, ["hostComponent.chest"],[0],this._TweenItem11,"target");
		eui.Binding.$bindProperties(this, [60],[],this._Object18,"y");
		eui.Binding.$bindProperties(this, [52],[],this._Object19,"y");
		eui.Binding.$bindProperties(this, [60],[],this._Object20,"y");
		eui.Binding.$bindProperties(this, ["hostComponent.chest"],[0],this._TweenItem12,"target");
		eui.Binding.$bindProperties(this, [1],[],this._Object21,"alpha");
		eui.Binding.$bindProperties(this, [60],[],this._Object21,"y");
		eui.Binding.$bindProperties(this, [45],[],this._Object22,"y");
		eui.Binding.$bindProperties(this, [1],[],this._Object23,"alpha");
		eui.Binding.$bindProperties(this, [60],[],this._Object23,"y");
		eui.Binding.$bindProperties(this, [0],[],this._Object24,"alpha");
		eui.Binding.$bindProperties(this, [45],[],this._Object24,"y");
	}
	var _proto = ui_roadSkin.prototype;

	_proto.mov_road_def_i = function () {
		var t = new egret.tween.TweenGroup();
		this.mov_road_def = t;
		t.items = [this._TweenItem1_i(),this._TweenItem2_i(),this._TweenItem3_i(),this._TweenItem4_i(),this._TweenItem5_i(),this._TweenItem6_i()];
		return t;
	};
	_proto._TweenItem1_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem1 = t;
		t.paths = [this._Set1_i(),this._To1_i()];
		return t;
	};
	_proto._Set1_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object1_i();
		return t;
	};
	_proto._Object1_i = function () {
		var t = {};
		this._Object1 = t;
		return t;
	};
	_proto._To1_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object2_i();
		return t;
	};
	_proto._Object2_i = function () {
		var t = {};
		this._Object2 = t;
		return t;
	};
	_proto._TweenItem2_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem2 = t;
		t.paths = [this._Set2_i(),this._To2_i()];
		return t;
	};
	_proto._Set2_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object3_i();
		return t;
	};
	_proto._Object3_i = function () {
		var t = {};
		this._Object3 = t;
		return t;
	};
	_proto._To2_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object4_i();
		return t;
	};
	_proto._Object4_i = function () {
		var t = {};
		this._Object4 = t;
		return t;
	};
	_proto._TweenItem3_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem3 = t;
		t.paths = [this._Set3_i(),this._To3_i()];
		return t;
	};
	_proto._Set3_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object5_i();
		return t;
	};
	_proto._Object5_i = function () {
		var t = {};
		this._Object5 = t;
		return t;
	};
	_proto._To3_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object6_i();
		return t;
	};
	_proto._Object6_i = function () {
		var t = {};
		this._Object6 = t;
		return t;
	};
	_proto._TweenItem4_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem4 = t;
		t.paths = [this._Set4_i(),this._To4_i()];
		return t;
	};
	_proto._Set4_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object7_i();
		return t;
	};
	_proto._Object7_i = function () {
		var t = {};
		this._Object7 = t;
		return t;
	};
	_proto._To4_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object8_i();
		return t;
	};
	_proto._Object8_i = function () {
		var t = {};
		this._Object8 = t;
		return t;
	};
	_proto._TweenItem5_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem5 = t;
		t.paths = [this._Set5_i(),this._To5_i()];
		return t;
	};
	_proto._Set5_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To5_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object9_i();
		return t;
	};
	_proto._Object9_i = function () {
		var t = {};
		this._Object9 = t;
		return t;
	};
	_proto._TweenItem6_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem6 = t;
		t.paths = [this._Set6_i(),this._To6_i()];
		return t;
	};
	_proto._Set6_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To6_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object10_i();
		return t;
	};
	_proto._Object10_i = function () {
		var t = {};
		this._Object10 = t;
		return t;
	};
	_proto.mov_car1_i = function () {
		var t = new egret.tween.TweenGroup();
		this.mov_car1 = t;
		t.items = [this._TweenItem7_i()];
		return t;
	};
	_proto._TweenItem7_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem7 = t;
		t.paths = [this._Set7_i(),this._To7_i()];
		return t;
	};
	_proto._Set7_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object11_i();
		return t;
	};
	_proto._Object11_i = function () {
		var t = {};
		this._Object11 = t;
		return t;
	};
	_proto._To7_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object12_i();
		return t;
	};
	_proto._Object12_i = function () {
		var t = {};
		this._Object12 = t;
		return t;
	};
	_proto.mov_car2_i = function () {
		var t = new egret.tween.TweenGroup();
		this.mov_car2 = t;
		t.items = [this._TweenItem8_i()];
		return t;
	};
	_proto._TweenItem8_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem8 = t;
		t.paths = [this._Set8_i(),this._To8_i()];
		return t;
	};
	_proto._Set8_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object13_i();
		return t;
	};
	_proto._Object13_i = function () {
		var t = {};
		this._Object13 = t;
		return t;
	};
	_proto._To8_i = function () {
		var t = new egret.tween.To();
		t.duration = 350;
		t.props = this._Object14_i();
		return t;
	};
	_proto._Object14_i = function () {
		var t = {};
		this._Object14 = t;
		return t;
	};
	_proto.mov_cloudy_i = function () {
		var t = new egret.tween.TweenGroup();
		this.mov_cloudy = t;
		t.items = [this._TweenItem9_i()];
		return t;
	};
	_proto._TweenItem9_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem9 = t;
		t.paths = [this._Set9_i(),this._To9_i()];
		return t;
	};
	_proto._Set9_i = function () {
		var t = new egret.tween.Set();
		return t;
	};
	_proto._To9_i = function () {
		var t = new egret.tween.To();
		t.duration = 400000;
		t.props = this._Object15_i();
		return t;
	};
	_proto._Object15_i = function () {
		var t = {};
		this._Object15 = t;
		return t;
	};
	_proto.mov_chest_def_i = function () {
		var t = new egret.tween.TweenGroup();
		this.mov_chest_def = t;
		t.items = [this._TweenItem10_i()];
		return t;
	};
	_proto._TweenItem10_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem10 = t;
		t.paths = [this._Set10_i(),this._To10_i()];
		return t;
	};
	_proto._Set10_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object16_i();
		return t;
	};
	_proto._Object16_i = function () {
		var t = {};
		this._Object16 = t;
		return t;
	};
	_proto._To10_i = function () {
		var t = new egret.tween.To();
		t.duration = 1000;
		t.props = this._Object17_i();
		return t;
	};
	_proto._Object17_i = function () {
		var t = {};
		this._Object17 = t;
		return t;
	};
	_proto.mov_chest_wave_i = function () {
		var t = new egret.tween.TweenGroup();
		this.mov_chest_wave = t;
		t.items = [this._TweenItem11_i()];
		return t;
	};
	_proto._TweenItem11_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem11 = t;
		t.paths = [this._Set11_i(),this._To11_i(),this._To12_i()];
		return t;
	};
	_proto._Set11_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object18_i();
		return t;
	};
	_proto._Object18_i = function () {
		var t = {};
		this._Object18 = t;
		return t;
	};
	_proto._To11_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "cubicInOut";
		t.props = this._Object19_i();
		return t;
	};
	_proto._Object19_i = function () {
		var t = {};
		this._Object19 = t;
		return t;
	};
	_proto._To12_i = function () {
		var t = new egret.tween.To();
		t.duration = 500;
		t.ease = "cubicInOut";
		t.props = this._Object20_i();
		return t;
	};
	_proto._Object20_i = function () {
		var t = {};
		this._Object20 = t;
		return t;
	};
	_proto.mov_chest_shake_i = function () {
		var t = new egret.tween.TweenGroup();
		this.mov_chest_shake = t;
		t.items = [this._TweenItem12_i()];
		return t;
	};
	_proto._TweenItem12_i = function () {
		var t = new egret.tween.TweenItem();
		this._TweenItem12 = t;
		t.paths = [this._Set12_i(),this._To13_i(),this._To14_i(),this._To15_i()];
		return t;
	};
	_proto._Set12_i = function () {
		var t = new egret.tween.Set();
		t.props = this._Object21_i();
		return t;
	};
	_proto._Object21_i = function () {
		var t = {};
		this._Object21 = t;
		return t;
	};
	_proto._To13_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object22_i();
		return t;
	};
	_proto._Object22_i = function () {
		var t = {};
		this._Object22 = t;
		return t;
	};
	_proto._To14_i = function () {
		var t = new egret.tween.To();
		t.duration = 100;
		t.props = this._Object23_i();
		return t;
	};
	_proto._Object23_i = function () {
		var t = {};
		this._Object23 = t;
		return t;
	};
	_proto._To15_i = function () {
		var t = new egret.tween.To();
		t.duration = 50;
		t.props = this._Object24_i();
		return t;
	};
	_proto._Object24_i = function () {
		var t = {};
		this._Object24 = t;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "res01_json.bg";
		t.top = 0;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.enabled = true;
		t.fillColor = 0x5aa3d8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.ly_pots_planet_i = function () {
		var t = new eui.Group();
		this.ly_pots_planet = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.ly_cloudy_i = function () {
		var t = new eui.Group();
		this.ly_cloudy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 686.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 3320;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90.21;
		t.source = "res01_json.cloud_1";
		t.width = 205.91;
		t.x = 383.18;
		t.y = 97.41;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 174.91;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "res01_json.cloud_2";
		t.width = 508.33;
		t.x = 383.18;
		t.y = 238.97;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 107.81;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "res01_json.cloud_3";
		t.width = 247.79;
		t.x = 52.68;
		t.y = 218.62;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90.21;
		t.source = "res01_json.cloud_1";
		t.width = 205.91;
		t.x = 3065.83;
		t.y = 96.66;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 174.91;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "res01_json.cloud_2";
		t.width = 508.33;
		t.x = 3065.83;
		t.y = 238.22;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 107.81;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "res01_json.cloud_3";
		t.width = 247.79;
		t.x = 2735.33;
		t.y = 217.87;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 143.54;
		t.source = "res01_json.cloud_1";
		t.width = 285.91;
		t.x = 1085.05;
		t.y = 253.91;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 223.54;
		t.source = "res01_json.cloud_1";
		t.width = 419.24;
		t.x = 2142.49;
		t.y = 38.8;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 214.91;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "res01_json.cloud_2";
		t.width = 441.66;
		t.x = 1582.46;
		t.y = 78.79;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 147.81;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "res01_json.cloud_3";
		t.width = 354.46;
		t.x = 1228;
		t.y = 61.19;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 147.81;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "res01_json.cloud_3";
		t.width = 354.46;
		t.x = 2174.88;
		t.y = 343.33;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 147.81;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "res01_json.cloud_3";
		t.width = 354.46;
		t.x = 719.6;
		t.y = 409.1;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 241.14;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "res01_json.cloud_3";
		t.width = 567.79;
		t.x = 1660;
		t.y = 325.68;
		return t;
	};
	_proto.road_i = function () {
		var t = new eui.Image();
		this.road = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 721;
		t.horizontalCenter = 5;
		t.source = "res01_json.road_bg";
		t.width = 1112;
		return t;
	};
	_proto.road_masker_i = function () {
		var t = new eui.Image();
		this.road_masker = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 721;
		t.horizontalCenter = 5;
		t.source = "res01_json.road_bg";
		t.visible = false;
		t.width = 1031;
		return t;
	};
	_proto.ly_road_speedup_i = function () {
		var t = new eui.Group();
		this.ly_road_speedup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.road_speed1_i(),this.road_speed2_i()];
		return t;
	};
	_proto.road_speed1_i = function () {
		var t = new eui.Image();
		this.road_speed1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 693;
		t.horizontalCenter = 15.5;
		t.source = "res01_json.road_speedon_1";
		t.width = 1055;
		return t;
	};
	_proto.road_speed2_i = function () {
		var t = new eui.Image();
		this.road_speed2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.height = 693;
		t.horizontalCenter = 15.5;
		t.source = "res01_json.road_speedon_2";
		t.width = 1055;
		return t;
	};
	_proto.ly_road_lines_i = function () {
		var t = new eui.Group();
		this.ly_road_lines = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 81.82;
		t.width = 66.67;
		t.x = 0;
		t.y = 30.3;
		t.elementsContent = [this.sign3_i(),this.sign4_i(),this.sign5_i(),this.sign6_i(),this.sign7_i(),this.sign8_i()];
		return t;
	};
	_proto.sign3_i = function () {
		var t = new eui.Image();
		this.sign3 = t;
		t.height = 57;
		t.rotation = 10.66;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "res01_json.road_line";
		t.width = 6;
		t.x = 294;
		t.y = 396;
		return t;
	};
	_proto.sign4_i = function () {
		var t = new eui.Image();
		this.sign4 = t;
		t.height = 57;
		t.rotation = -10.66;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "res01_json.road_line";
		t.width = 6;
		t.x = 347;
		t.y = 396;
		return t;
	};
	_proto.sign5_i = function () {
		var t = new eui.Image();
		this.sign5 = t;
		t.height = 57;
		t.rotation = 10.66;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "res01_json.road_line";
		t.width = 6;
		t.x = 294;
		t.y = 396;
		return t;
	};
	_proto.sign6_i = function () {
		var t = new eui.Image();
		this.sign6 = t;
		t.height = 57;
		t.rotation = -10.66;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "res01_json.road_line";
		t.width = 6;
		t.x = 347;
		t.y = 396;
		return t;
	};
	_proto.sign7_i = function () {
		var t = new eui.Image();
		this.sign7 = t;
		t.height = 57;
		t.rotation = 10.66;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "res01_json.road_line";
		t.width = 6;
		t.x = 294;
		t.y = 396;
		return t;
	};
	_proto.sign8_i = function () {
		var t = new eui.Image();
		this.sign8 = t;
		t.height = 57;
		t.rotation = -10.66;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "res01_json.road_line";
		t.width = 6;
		t.x = 347;
		t.y = 396;
		return t;
	};
	_proto.fog_i = function () {
		var t = new eui.Image();
		this.fog = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "res01_json.lighter";
		t.x = -49.21;
		t.y = 17.93;
		return t;
	};
	_proto.ly_pots_trap_i = function () {
		var t = new eui.Group();
		this.ly_pots_trap = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.fog_small_i = function () {
		var t = new eui.Image();
		this.fog_small = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 123.89;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "res01_json.lighter";
		t.width = 137.12;
		t.x = 191.44;
		t.y = 296.67;
		return t;
	};
	_proto.ly_car_i = function () {
		var t = new eui.Group();
		this.ly_car = t;
		t.anchorOffsetX = 96;
		t.anchorOffsetY = 85;
		t.height = 270;
		t.width = 188;
		t.x = 330;
		t.y = 815;
		t.elementsContent = [this.car_i(),this.mcAbsorbTarget_i(),this.mcDetectTarget_i(),this.ly_txtCoinCount_i()];
		return t;
	};
	_proto.car_i = function () {
		var t = new eui.Image();
		this.car = t;
		t.anchorOffsetX = 59.73;
		t.anchorOffsetY = 43.97;
		t.horizontalCenter = 0;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "res01_json.car_masaka";
		t.top = 16;
		return t;
	};
	_proto.mcAbsorbTarget_i = function () {
		var t = new eui.Rect();
		this.mcAbsorbTarget = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillColor = 0xff0000;
		t.height = 367;
		t.horizontalCenter = 1;
		t.top = -207;
		t.width = 910;
		return t;
	};
	_proto.mcDetectTarget_i = function () {
		var t = new eui.Rect();
		this.mcDetectTarget = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.horizontalCenter = 0;
		t.top = 33;
		t.width = 136;
		return t;
	};
	_proto.ly_txtCoinCount_i = function () {
		var t = new eui.Group();
		this.ly_txtCoinCount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 193;
		t.x = 19;
		t.y = 204;
		t.elementsContent = [this._Image15_i(),this.txtCoinCount_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "res01_json.coin_1";
		t.x = 10;
		t.y = 5;
		return t;
	};
	_proto.txtCoinCount_i = function () {
		var t = new eui.BitmapLabel();
		this.txtCoinCount = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.font = "fnt_score_fnt";
		t.height = 45.76;
		t.scaleX = 0.65;
		t.scaleY = 0.65;
		t.text = "99";
		t.width = 168.48;
		t.x = 63;
		t.y = -23;
		return t;
	};
	_proto.ly_pots_i = function () {
		var t = new eui.Group();
		this.ly_pots = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.p_start1_i(),this.p_start2_i(),this.p_start3_i(),this.p_start4_i(),this.p_start5_i(),this.p_start6_i(),this.p_end1_i(),this.p_end2_i(),this.p_end3_i(),this.p_end4_i(),this.p_end5_i(),this.p_end6_i(),this.p_end7_i()];
		return t;
	};
	_proto.p_start1_i = function () {
		var t = new eui.Group();
		this.p_start1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 716;
		t.height = 90;
		t.width = 90;
		t.x = 291.76;
		return t;
	};
	_proto.p_start2_i = function () {
		var t = new eui.Group();
		this.p_start2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 716;
		t.height = 90;
		t.width = 90;
		t.x = 323.52;
		return t;
	};
	_proto.p_start3_i = function () {
		var t = new eui.Group();
		this.p_start3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 716;
		t.height = 90;
		t.width = 90;
		t.x = 353.55;
		return t;
	};
	_proto.p_start4_i = function () {
		var t = new eui.Group();
		this.p_start4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.top = 95;
		t.width = 90;
		t.x = 42;
		return t;
	};
	_proto.p_start5_i = function () {
		var t = new eui.Group();
		this.p_start5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.top = 80;
		t.width = 90;
		t.x = 677;
		return t;
	};
	_proto.p_start6_i = function () {
		var t = new eui.Group();
		this.p_start6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 437;
		t.height = 90;
		t.width = 90;
		t.x = 280;
		return t;
	};
	_proto.p_end1_i = function () {
		var t = new eui.Group();
		this.p_end1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -279;
		t.height = 90;
		t.scaleX = 4;
		t.scaleY = 4;
		t.width = 90;
		t.x = -191;
		return t;
	};
	_proto.p_end2_i = function () {
		var t = new eui.Group();
		this.p_end2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -279;
		t.height = 90;
		t.scaleX = 4;
		t.scaleY = 4;
		t.width = 90;
		t.x = 77;
		return t;
	};
	_proto.p_end3_i = function () {
		var t = new eui.Group();
		this.p_end3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -279;
		t.height = 90;
		t.scaleX = 4;
		t.scaleY = 4;
		t.width = 90;
		t.x = 342;
		return t;
	};
	_proto.p_end4_i = function () {
		var t = new eui.Group();
		this.p_end4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -279;
		t.height = 90;
		t.scaleX = 4;
		t.scaleY = 4;
		t.width = 90;
		t.x = 605;
		return t;
	};
	_proto.p_end5_i = function () {
		var t = new eui.Group();
		this.p_end5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = -279;
		t.height = 90;
		t.scaleX = 4;
		t.scaleY = 4;
		t.width = 90;
		t.x = 876;
		return t;
	};
	_proto.p_end6_i = function () {
		var t = new eui.Group();
		this.p_end6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 57;
		t.height = 90;
		t.scaleX = 3;
		t.scaleY = 3;
		t.width = 90;
		t.x = -468;
		return t;
	};
	_proto.p_end7_i = function () {
		var t = new eui.Group();
		this.p_end7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 32;
		t.height = 90;
		t.scaleX = 3;
		t.scaleY = 3;
		t.width = 90;
		t.x = 1104;
		return t;
	};
	_proto.ly_animations_i = function () {
		var t = new eui.Group();
		this.ly_animations = t;
		t.height = 200;
		t.width = 200;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.ly_bottom_simbols_i = function () {
		var t = new eui.Group();
		this.ly_bottom_simbols = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.left = 0;
		t.right = 0;
		t.y = 1140;
		t.elementsContent = [this._Image16_i(),this.txt_hp_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.bottom = 27;
		t.horizontalCenter = 11;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "res01_json.txt_power";
		return t;
	};
	_proto.txt_hp_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_hp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 42;
		t.font = "fnt_score_fnt";
		t.right = 299;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.text = "490";
		return t;
	};
	_proto.ly_top_simbols_i = function () {
		var t = new eui.Group();
		this.ly_top_simbols = t;
		t.height = 10;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image17_i(),this._Image18_i(),this.txt_distance_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.right = 18;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "res01_json.txt_distance";
		t.top = 19;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.left = 22;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "res01_json.logo";
		t.top = 17;
		return t;
	};
	_proto.txt_distance_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_distance = t;
		t.font = "fnt_score_fnt";
		t.right = 100;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.text = "6606";
		t.top = -30;
		return t;
	};
	_proto.ly_blocks_i = function () {
		var t = new eui.Group();
		this.ly_blocks = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this._Image19_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "res01_json.blur_face";
		t.top = 0;
		return t;
	};
	_proto.ly_popboard_i = function () {
		var t = new eui.Group();
		this.ly_popboard = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 648;
		t.height = 278.79;
		t.left = 0;
		t.right = 0;
		return t;
	};
	_proto.ly_debug_btns_i = function () {
		var t = new eui.Group();
		this.ly_debug_btns = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 655;
		t.left = 0;
		t.width = 212.85;
		t.y = 0;
		t.elementsContent = [this.bt_d_close_i(),this.bt_d_water_i(),this.bt_d_well_i(),this.bt_d_hole_i(),this.bt_d_ship_i(),this.bt_d_whale_i(),this.bt_d_coin_i(),this.bt_d_popboard_i(),this.bt_d_glassroad_i(),this.bt_d_infokm_i(),this.bt_d_gameover_i(),this.bt_d_chest1red_i(),this.bt_d_chest2green_i(),this.bt_d_chest3orange_i(),this.bt_d_chest4yellow_i(),this.bt_d_chest5blue_i(),this.bt_d_chest6purple_i(),this.bt_d_chest7tree_i(),this.bt_d_chest8girl_i()];
		return t;
	};
	_proto.bt_d_close_i = function () {
		var t = new eui.Button();
		this.bt_d_close = t;
		t.anchorOffsetX = 0;
		t.label = "开始";
		t.width = 132;
		t.x = 6;
		t.y = 2;
		return t;
	};
	_proto.bt_d_water_i = function () {
		var t = new eui.Button();
		this.bt_d_water = t;
		t.label = "水坑";
		t.x = 6;
		t.y = 58;
		return t;
	};
	_proto.bt_d_well_i = function () {
		var t = new eui.Button();
		this.bt_d_well = t;
		t.label = "井盖";
		t.x = 6;
		t.y = 111.57;
		return t;
	};
	_proto.bt_d_hole_i = function () {
		var t = new eui.Button();
		this.bt_d_hole = t;
		t.label = "深坑";
		t.x = 6;
		t.y = 167.14;
		return t;
	};
	_proto.bt_d_ship_i = function () {
		var t = new eui.Button();
		this.bt_d_ship = t;
		t.label = "飞船";
		t.x = 6;
		t.y = 222.71;
		return t;
	};
	_proto.bt_d_whale_i = function () {
		var t = new eui.Button();
		this.bt_d_whale = t;
		t.label = "鲸鱼";
		t.x = 6;
		t.y = 278.28;
		return t;
	};
	_proto.bt_d_coin_i = function () {
		var t = new eui.Button();
		this.bt_d_coin = t;
		t.label = "金币";
		t.x = 6;
		t.y = 333.85;
		return t;
	};
	_proto.bt_d_popboard_i = function () {
		var t = new eui.Button();
		this.bt_d_popboard = t;
		t.label = "信息";
		t.x = 6;
		t.y = 444.99;
		return t;
	};
	_proto.bt_d_glassroad_i = function () {
		var t = new eui.Button();
		this.bt_d_glassroad = t;
		t.label = "玻璃地面";
		t.x = 6;
		t.y = 500.99;
		return t;
	};
	_proto.bt_d_infokm_i = function () {
		var t = new eui.Button();
		this.bt_d_infokm = t;
		t.label = "km信息";
		t.x = 6;
		t.y = 556.99;
		return t;
	};
	_proto.bt_d_gameover_i = function () {
		var t = new eui.Button();
		this.bt_d_gameover = t;
		t.label = "结束";
		t.x = 6;
		t.y = 612.99;
		return t;
	};
	_proto.bt_d_chest1red_i = function () {
		var t = new eui.Button();
		this.bt_d_chest1red = t;
		t.label = "宝.变清晰";
		t.x = 112;
		t.y = 56.82;
		return t;
	};
	_proto.bt_d_chest2green_i = function () {
		var t = new eui.Button();
		this.bt_d_chest2green = t;
		t.label = "宝.绿色";
		t.x = 112;
		t.y = 112;
		return t;
	};
	_proto.bt_d_chest3orange_i = function () {
		var t = new eui.Button();
		this.bt_d_chest3orange = t;
		t.label = "宝.橙色";
		t.x = 112;
		t.y = 168;
		return t;
	};
	_proto.bt_d_chest4yellow_i = function () {
		var t = new eui.Button();
		this.bt_d_chest4yellow = t;
		t.label = "宝.黄色";
		t.x = 112;
		t.y = 224;
		return t;
	};
	_proto.bt_d_chest5blue_i = function () {
		var t = new eui.Button();
		this.bt_d_chest5blue = t;
		t.label = "宝.蓝色";
		t.x = 112;
		t.y = 280;
		return t;
	};
	_proto.bt_d_chest6purple_i = function () {
		var t = new eui.Button();
		this.bt_d_chest6purple = t;
		t.label = "宝.？？";
		t.x = 112;
		t.y = 336;
		return t;
	};
	_proto.bt_d_chest7tree_i = function () {
		var t = new eui.Button();
		this.bt_d_chest7tree = t;
		t.label = "宝.植树节";
		t.x = 112;
		t.y = 392;
		return t;
	};
	_proto.bt_d_chest8girl_i = function () {
		var t = new eui.Button();
		this.bt_d_chest8girl = t;
		t.label = "宝.女神节";
		t.x = 112;
		t.y = 446;
		return t;
	};
	_proto.ly_pop_km_i = function () {
		var t = new eui.Group();
		this.ly_pop_km = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 769;
		t.height = 120;
		t.horizontalCenter = 2;
		t.width = 244;
		t.elementsContent = [this.txt_pop_km_i(),this.tkm0_i()];
		return t;
	};
	_proto.txt_pop_km_i = function () {
		var t = new eui.BitmapLabel();
		this.txt_pop_km = t;
		t.font = "fnt_score2_fnt";
		t.right = 76;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.text = "-22";
		t.top = -10;
		return t;
	};
	_proto.tkm0_i = function () {
		var t = new eui.Image();
		this.tkm0 = t;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "res01_json.txt_km";
		t.x = 158;
		t.y = 64;
		return t;
	};
	_proto.ly_board_i = function () {
		var t = new eui.Group();
		this.ly_board = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	return ui_roadSkin;
})(eui.Skin);generateEUI.paths['resource/ui/ui_test.exml'] = window.ui_testSkin = (function (_super) {
	__extends(ui_testSkin, _super);
	function ui_testSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
	}
	var _proto = ui_testSkin.prototype;

	return ui_testSkin;
})(eui.Skin);