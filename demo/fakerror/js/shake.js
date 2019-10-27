
var br = 100;
var SHAKE_THRESHOLD = 4000;
var last_update = 0;
var x, y, z, last_x = 0, last_y = 0, last_z = 0;
var shaketype = 0;
var shaketimes  = 0;
var shakewordfadeout = 0;
var shake_callback = function(times){
  console.log(times);
}

function shakeAllWord(strong, target){
	//return
  var controls = target? target : $("p,a,h1");
  var direction = Math.random()<.5?1:-1;
  for (let k = 0; k < controls.length; k++) {
    const element = controls[k];
    $(element).css("transform","rotate("+(Math.random()<.5?1:-1)*Math.random()*4*strong+"deg)")
    // $(element).animate({v:})
    // $(element).css({
    //   "rotation-point":"50% 50%",
    //   "rotation":"15deg"
    // })
    var j=(k%2>0?1:-1)*direction;
    for (var i=80;i>=0;i-=7) {
      j*=-1;
      // console.log(i);
      $(element).animate({
        paddingLeft:i*j,
      },40,null, i<=7? function(){
        if(target) $(element).css("transform","rotate(0deg)")
      }:null);
    }
  }
  // var j=k%2>0?1:-1;
}

function bindShake(){
	if (window.DeviceMotionEvent) {
		log("试试摇晃手机");
	    window.addEventListener('devicemotion',deviceMotionHandler,false);
	}else{
		log("不支持摇晃手机");
	}
}

function deviceMotionHandler(eventData) {
        var acceleration =eventData.accelerationIncludingGravity;
        var curTime = new Date().getTime();
        if ((curTime-last_update)> 10) {
            var diffTime = curTime -last_update;
            last_update = curTime;
            x = acceleration.x;
            y = acceleration.y;
            z = acceleration.z;
            var speed = Math.abs(x +y + z - last_x - last_y - last_z) / diffTime * 10000;
            if (speed > SHAKE_THRESHOLD) {
            		if(shaketype==0){
            			shaketype = 1;
                		vibration();  // Do something
                }else{
                		shaketype = 2;
                }
            }else if(shaketype>1){
            		shaketype = 0;
            }
            last_x = x;
            last_y = y;
            last_z = z;
        }
}
function vibration(){
	if(br<4000){
		log("再继续甩动");
	}else{
		log("你应该看到答案了");
	}
  shaketimes++;
	if(shaketimes%3==0){
	// 	fadeOut(shakewordfadeout);
		shakewordfadeout++
    shake_callback(shakewordfadeout);
	}
	// shakeAllWord();
//	console.log(shaketimes);
	if(shaketimes>5){
		if(br<8000){
			br*=1.2;
		}
		// modifyPhoto(br);
	}
//	console.log(br);
				
    navigator.vibrate = navigator.vibrate
               || navigator.webkitVibrate
               || navigator.mozVibrate
               || navigator.msVibrate;
		
       if (navigator.vibrate) {
           // 支持
//         console.log("支持设备震动！");
       }else{
       }
       //中括号里面的值标示[震动时间，停止时间，震动时间，停止时间………..]。没有错就是这种规律，简单明了
     navigator.vibrate([500, 300, 400,300]);
}