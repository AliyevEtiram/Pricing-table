$(document).ready(() => {
  $monthlyBtn = $("#monthly");
  $yearlyBtn = $("#yearly");
  $chooseSimpleBtn = $("#chooseSimple");
  $chooseBestBtn = $("#chooseBest");
  $soundForPopup = $("#soundForPopup");
  $popup = $(".popup");
  $heart = $(".fa-heart");
  $heart.css("cursor", "pointer");

  $baseURL = "http://localhost:3000";

  $.get($baseURL + "/period", function showData(data) {
    $monthlyBasic = data[0].monthly[0];
    $monthlyStandart = data[0].monthly[1];
    $yearlyBasic = data[0].yearly[0];
    $yearlyStandart = data[0].yearly[1];

    getData($monthlyBasic, $monthlyStandart);

    $monthlyBtn.click(
      { param1: $monthlyBtn, param2: $monthlyBasic, param3: $monthlyStandart },
      periodTypeEvent
    );

    $yearlyBtn.click(
      { param1: $yearlyBtn, param2: $yearlyBasic, param3: $yearlyStandart },
      periodTypeEvent
    );
  });

  $chooseSimpleBtn.click(() => {
    chooseEvent($chooseSimpleBtn);
  });

  $chooseBestBtn.click(() => {
    chooseEvent($chooseBestBtn);
  });

  $heart.click(() => {
    if ($heart.hasClass("fa-regular")) {
      $heart.removeClass("fa-regular");
      $heart.toggleClass("fa-solid");
    } else {
      $heart.removeClass("fa-solid");
      $heart.toggleClass("fa-regular");
    }
  });

  // functions for prevent code repetition
  function toggle() {
    $yearlyBtn.toggleClass("active");
    $monthlyBtn.toggleClass("active");
  }

  function getData(basicType, standartType) {
    $("#simpleOffer").text(basicType.id);
    $("#simplePrice").text(basicType.price);
    $("#simpleAccess").text(basicType.acces);
    $("#simpleSize").text(basicType.size);
    $("#simpleAvailability").text(basicType.availability);

    $("#bestOffer").text(standartType.id);
    $("#bestPrice").text(standartType.price);
    $("#bestAcces").text(standartType.acces);
    $("#bestSize").text(standartType.size);
    $("#bestAvailability").text(standartType.availability);
  }

  function periodTypeEvent(e) {
    $pType = e.data.param1;
    $pTypeBasic = e.data.param2;
    $pTypeStandart = e.data.param3;

    if ($pType.hasClass("active")) {
      return;
    } else {
      toggle();
      getData($pTypeBasic, $pTypeStandart);
    }
  }

  function chooseEvent(a) {
    $textOfPlanType = a.parent().children(":first").text();

    $soundForPopup[0].play();

    $popup.css({
      left: "4%",
    });
    $popup.text("you've choosed " + $textOfPlanType);

    setTimeout(() => {
      $popup.css("left", "-150%");
    }, 1300);
  }
});
