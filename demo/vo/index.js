$(function(){
	jQuery.support.cors = true;
	function log(val){
		$("#status").text(val)
	}
	var recorder;
	var audio = $("#reply")[0];
	$("#start").click(function(){
		log("开始录音")
		HZRecorder.get(function (rec) {
                recorder = rec;
                recorder.start();
                //开始录音后就可以实时监视声音录制过程
                recorder.onProgress(function(vol){
					console.log(vol)
				})
            });
		//开始录音，其中replay是一个音频对象
	
	})
	$("#stop").click(function(){
		log("停止录音")
		//停止录音
		recorder.stop();
	})
	$("#play").click(function(){
		log("播放录音")
		//播放录音
		recorder.play(audio);
	})
	$("#token").click(function(){
		$.ajax({
			type:"post",
			url:"https://openapi.baidu.com/oauth/2.0/token", //grant_type=client_credentials&client_id=uSmMSjMWoDVssx0BEq9qewgy&client_secret=hyhXKQpXP0yaMONqdlvD9AfP4QxGF8a2
			data:{
				grant_type:"client_credentials",
				client_id:"uSmMSjMWoDVssx0BEq9qewgy",
				client_secret:"hyhXKQpXP0yaMONqdlvD9AfP4QxGF8a2"
			},
			crossDomain: true,
			dataType: 'jsonp',
//			dataType:'json',
			async:true,
			success:function(res){
				log("请求token:"+res);
			},
			error:function(err){
				var str = "请求token 失败："
				for(var k in err){
					str+=k+":"+err[k];
				}
				log(str)
			}
		});
	})
	$("#upload").click(function(){
		log("准备上传")
//			return;
		//上传音频数据，经过优化压缩过的
		recorder.upload(function (data) {
			log("传递参数")
		//data 对象为录音后的音频数据
            var fd = new FormData();
            fd.append("speech", data);
            fd.append("rate",16000);
            fd.append("format","wav");
            fd.append("channel","1");
            fd.append("cuid","xxxxxxxxxxxxxxxxxxxxxxxxx");
            fd.append("token","25.d1dd29f8e57d23d07e9d4c50b8d64c28.315360000.1887383419.282335-17620281");
            
//          console.log(data);
//          return;
            
            postData = {
            		speech:data,
            		rate:16000,
            		format:"wav",
            		channel:1,
            		cuid:"xxxxxxxxxxxxxxxxxxxxxxxxx",
            		token:"25.d1dd29f8e57d23d07e9d4c50b8d64c28.315360000.1887383419.282335-17620281"
            }
            $.ajax({
                url : "https://tsn.baidu.com/text2audio",
                type : 'POST',
                data : fd,
//          		contentType: "application/json",
//          		timeout: 5000,
//				crossDomain: true,
//				dataType: 'jsonp',
                // 告诉jQuery不要去处理发送的数据
                processData : false,
                // 告诉jQuery不要去设置Content-Type请求头
                contentType : false,
                success : function(res) {
	                	if(res.result == undefined || res.result == '') {
	                    log("转换失败：" + res.err_msg + "  err_no: " + res.err_no);
	                    return;
	                }
					var str = "请求文件成功："
					for(var k in res){
						str+=k+":"+res[k];
					}
					log(str)
                },
                error : function(err) {
					var str = "请求文件失败："
					for(var k in err){
						str+=k+":"+err[k];
					}
					log(str)
                }
            });
        });
	})

})