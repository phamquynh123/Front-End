
$(document).ready(function(){
			$(".add").click(function(){
				var text =$(".text").val();
				$("li").append('<p> <i class="fa fa-check check"  ></i>'+text+ '<i class="fa fa-times delete"></i></p>');//prepend()
				$(".text").val("");
			});
		});
		$(document).on("click",".delete",function(){
			$(this).parent().remove();
		});