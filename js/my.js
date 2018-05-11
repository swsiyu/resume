var keyWords = [];

jQuery(function($) {
	var sh;

	function zoumadeng() {
		sh = setInterval(function() {
			var title = $("title").text();
			$("title").text(title.substring(1, title.length) + title[0]);
		}, 500);
	}

		$("#header ul a").zclip({
			path: "./js/ZeroClipboard.swf",
			copy: function() {
				return $("#header ul li:last span").text();
			},
			afterCopy: function() { /* 复制成功后的操作 */
				alert("复制成功！请按ctrl+v粘贴");
			}
		});

 //     $("#header ul a").click(function(){
 //   		if(window.clipboardData){
 //   			window.clipboardData.setData("Text",$("#header ul li:last span").val());
 //   			alert("复制成功！请按ctrl+v粘贴");
 //   		}
 //   		else{
 //   			alert("您的浏览器不支持此功能，还是手动复制吧");
 //   		}
	// });

	$("#skin").click(function() {
		var $this = $(this);
		if ($("#skin").data().style == "cool") {
			$("#skin").data().style = "plain";
			$this.css("color", "red");
			clearInterval(sh);
			$("title").text("个人简历");
			$("body").css({
				"background": "#f1efef"
			});
			$("#header,#content").removeClass("panel");
			// $("#header ul li").unbind("mouseenter").unbind("mouseleave");
			$("*").unbind("mouseenter").unbind("mouseleave");
		} else if ($("#skin").data().style == "plain") {
			$("#skin").data().style = "cool";
			$this.css("color", "green");
			init();
		}

	});

	function tipMouseenter() {
		if ($("#tip").length == 0) {
			$("#header ul").append($("<div id='tip'></div>"));
			$("#tip").hide();
		}
		$this = $(this);
		$("#tip").css({
			"position": "absolute",
			"top": $this.position().top + $this.height + 5 + "px",
			"left": $this.position().left,
			"padding": "1px 5px",
			"border": "1px solid black",
			"background": "#ccc",
			"font-size": "20px",
			"font-weight": "bold",
			"opcity": "80%",
			"filter": "opcity(0.8)"
		}).text($this.text()).show(300);
	}

	function tipMouseleave() {
		$("#tip").stop(true, true).hide();
	}

	function bgHighlight() {
		$this = $(this);
		$this.css({
			'background-color': '#aaa'
		});
	}

	function bgPlain() {
		$this = $(this);
		$this.css({
			'background-color': 'transparent'
		});
	}

	function fontBlack() {
		$("#header h1").css({
			"color": "black",
			"text-shadow": "0 0 0 black"
		});
	}

	function fontWhite() {
		$("#header h1").css({
			"color": "white",
			"text-shadow": "-1px -1px 1px #000,1px 1px 1px #000"
		});
	}

	function init() {
		zoumadeng();
		$("body").css({
			"background": "url('./images/bg/mooning.png') repeat scroll 0 0 #f1efef"
		});
		$("#header h1").bind({
			'mouseenter': fontWhite,
			'mouseleave': fontBlack
		});
		$("#header ul li").bind({
			'mouseenter': tipMouseenter,
			'mouseleave': tipMouseleave
		});
		$(".bkg tr,.project .pros,.rwd .rwds").bind({
			'mouseenter': bgHighlight,
			'mouseleave': bgPlain
		});
		$("#skin").data("style", "cool");
		$("#header,#content").addClass("panel");
	}
	init();
});