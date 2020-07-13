$(document).ready(function() {

	$(".diseases-list li").on("click", function(event) {
		let id = $(this).attr("data-id");
		$(".diseases-map").find(".active-tab").removeClass("active-tab").hide();
		$(".diseases-list").find(".active-tab").removeClass("active-tab");
		$(this).addClass("active-tab");
		$(".tab-item-" + id).addClass("active-tab").fadeIn();
	});

	$(".review-tab").on("click", function(event) {
		let id = $(this).attr("data-id");
		$(".reviews-tabs").find(".active-tab").removeClass("active-tab");
		$(this).addClass("active-tab");
		$(".reviews-content").find(".active-tab").removeClass("active-tab");
		$("#" + id + "-content").addClass("active-tab");
	});

});