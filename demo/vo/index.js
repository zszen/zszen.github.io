$(function(){
		var recorder;
		var audio = $("#reply")[0];
		$("#start").click(function(){
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
			//停止录音
			recorder.stop();
		})
		$("#play").click(function(){
			//播放录音
			recorder.play(audio);
		})
		$("#upload").click(function(){
			//上传音频数据，经过优化压缩过的
			recorder.upload(function (data) {
			//data 对象为录音后的音频数据
                var fd = new FormData();
                fd.append("audioData", data);
                $.ajax({
                    url : param.api.voiceUrl,
                    type : 'POST',
                    data : fd,
                    // 告诉jQuery不要去处理发送的数据
                    processData : false,
                    // 告诉jQuery不要去设置Content-Type请求头
                    contentType : false,
                    success : function(res) {},
                    error : function(error) {
                        console.log("error");
                    }
                });
            });
		})

	})