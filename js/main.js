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
});
