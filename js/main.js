$(document).ready(() => {
  let monthlyBtn = $("#monthly");
  let yearlyBtn = $("#yearly");

  let baseURL = "http://localhost:3000";

  $.get(baseURL + "/period", function showData(data) {
    let monthlyBasic = data[0].monthly[0];
    let monthlyStandart = data[0].monthly[1];

    getData(monthlyBasic, monthlyStandart);

    monthlyBtn.click(() => {
      if (monthlyBtn.hasClass("active")) {
        return;
      } else {
        toggle();
        getData(monthlyBasic, monthlyStandart);
      }
    });

    yearlyBtn.click(() => {
      if (yearlyBtn.hasClass("active")) {
        return;
      } else {
        toggle();
        let yearlyBasic = data[0].yearly[0];
        let yearlyStandart = data[0].yearly[1];

        getData(yearlyBasic, yearlyStandart);
      }
    });
  });

  // functions for prevent code repetition
  function toggle() {
    yearlyBtn.toggleClass("active");
    monthlyBtn.toggleClass("active");
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
  let chooseSimpleBtn = $("#chooseSimple");
  chooseSimpleBtn.click(() => {
    let simpleOffer = chooseSimpleBtn.parent().children(":first").text();

    let popup = $(".popup");
    popup.css({
      left: "4%",
    });
    popup.text("you've choosed " + simpleOffer);
    setTimeout(() => {
      popup.css("left", "-150%");
    }, 1300);
  });
  let chooseBestBtn = $("#chooseBest");
  chooseBestBtn.click(() => {
    let bestOffer = chooseBestBtn.parent().children(":first").text();

    let popup = $(".popup");
    popup.css({
      left: "4%",
    });
    popup.text("you've choosed " + bestOffer);
    setTimeout(() => {
      popup.css("left", "-150%");
    }, 1300);
  });

  let heart = $(".fa-heart");
  heart.css("cursor", "pointer");

  heart.click(() => {
    if (heart.hasClass("fa-regular")) {
      heart.removeClass("fa-regular");
      heart.toggleClass("fa-solid");
    } else {
      heart.removeClass("fa-solid");
      heart.toggleClass("fa-regular");
    }
  });
});
