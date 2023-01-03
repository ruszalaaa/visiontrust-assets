// Page successfully downloaded all assets
window.addEventListener("load", () => {
  // Safari fix for scaling on mobile devices.
  if (navigator.userAgent.indexOf("Safari") != -1 && navigator.userAgent.indexOf("Chrome") == -1) {
    if ($("#fixme").length) {
      document.getElementById("fixme").style.height = "100%";
    }
  }

  // Show Homepage
  $(".homepage").css("opacity", 100);

  // Go to Get Estiamte subpage
  $(".goto-getestimate").on("click", function (event) {
    event.preventDefault();
    $(".get-estimate").removeClass("hidden");
    $(".homepage").addClass("hidden");
    $(".get-estimate").animate({ opacity: 100 });
    $(".homepage").css("opacity", 0);
  });

  // Back to Homepage
  $(".backto-homepage").on("click", function (event) {
    event.preventDefault();

    if ($(".homepage").hasClass("hidden")) {
      // If going back to Homepage

      $(".get-estimate").addClass("hidden");
      $(".homepage").removeClass("hidden");
      $(".homepage").animate({ opacity: 100 });
      $(".get-estimate").css("opacity", 0);
    } else {
      // If already on Homepage
      $(".homepage").addClass("hidden");
      $(".homepage").css("opacity", 0);
      setTimeout(function () {
        $(".homepage").removeClass("hidden");
        $(".homepage").animate({ opacity: 100 });
      });
    }
  });
});
