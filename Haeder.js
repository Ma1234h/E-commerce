function header_adj() {
	if ($(window).width() < 767) {
		var header_height = $(".header").outerHeight();
		$(".nav-wrap .nav-list");
	} else {
		$(".nav-wrap .nav-list");
	}
}
function submenu_toggle() {
	if ($(window).width() < 767) {
		$(".nav-list li.with-submenu")
			.off()
			.click(function () {
				$(this).toggleClass("is-open");
				$(".submenu").slideToggle("slow");
			});
	}
}
$(document).ready(function () {
	header_adj();
	submenu_toggle();
	if ($(window).width() < 767) {
		$(".hamburger").click(function () {
			$(this).toggleClass("is-active");
			$("body,html").toggleClass("sidebar-open");
			$(".nav-wrap").toggleClass("is-open");
		});

		$(".overlay").click(function () {
			$(".hamburger").removeClass("is-active");
			$("body,html").removeClass("sidebar-open");
			$(".nav-wrap").removeClass("is-open");
		});
	} else {
		$(".hamburger").removeClass("is-active");
		$("body,html").removeClass("sidebar-open");
		$(".nav-wrap").removeClass("is-open");
	}
});
$(window).on("resize", function () {
	header_adj();
	submenu_toggle();
	if ($(window).width() < 767) {
		$(".hamburger").click(function () {
			$(this).toggleClass("is-active");
			$("body,html").toggleClass("sidebar-open");
			$(".nav-wrap").toggleClass("is-open");
		});

		$(".overlay").click(function () {
			$(".hamburger").removeClass("is-active");
			$("body,html").removeClass("sidebar-open");
			$(".nav-wrap").removeClass("is-open");
		});
	} else {
		$(".hamburger").removeClass("is-active");
		$("body,html").removeClass("sidebar-open");
		$(".nav-wrap").removeClass("is-open");
	}
});
