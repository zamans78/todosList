$("ul").on("click", "li", function (e) {
	$(this).toggleClass("completed");
	e.preventDefault();
});

$("ul").on("click", "span", function (e) {
	$(this)
		.parent()
		.fadeOut(500, function () {
			$(this).remove();
		});
	e.preventDefault();
	e.stopPropagation();
});

$('input[type="text"').on("keypress", function (e) {
	if (e.which === 13) {
		if ($(this).val() == "") {
			alert("Please provide a vlaue.");
			return;
		} else {
			const userValue = $(this).val();
			$(this).val("");
			$("ul").append(
				"<li><span><i class='fa fa-trash'></i></span>" + userValue + "</li>"
			);
		}
	}
});

$(".fa-plus").on("click", function (e) {
	$('input[type="text"').fadeToggle();
	e.preventDefault();
});
