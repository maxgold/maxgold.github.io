      function flip() {
				//Makes the words readable i.e. flips them about the vertical axis
				$(".reverse").css("-moztransform", "scale(1,1)");
				$(".reverse").css("-webkittransform", "scale(1,1)");
                		$(".reverse").css("transform", "scale(1,1)");
				$("#vanish").fadeOut();			
			}
			function invert() {
				//inverts the colors of the page
				$("body").css("color", "blue")
				$("body").css("background-color", "white")
				$("img").css("-webkit-filter", "invert(100%)")
			}
			function uninvert() {
				//restores the colors of the page
				$("body").css("color", "orange")
				$("body").css("background-color", "black")
				$("img").css("-webkit-filter", "invert(0%)")
			}
