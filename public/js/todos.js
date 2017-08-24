//Check off
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	$(this).closest('form').submit();
	event.stopPropagation();
});

$("#newTask").keypress(function(event){
	if(event.which === 13){
		$(this).closest('form').submit();
	}
});

$(".fa-plus").click(function(){
	$(this).closest('form').submit();
});