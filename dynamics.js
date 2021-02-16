$(document).ready(function () {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://type.fit/api/quotes",
    method: "GET",
  };

  // prettier-ignore
  var $colorArray = ['#FF6633', '#ff9999', '#FF33FF', '#AABBAA', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99AAFF', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
  '#FF99E6', '#ffbb99', '#FF1A66', '#a6225a', '#33aaCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#995b85',
  '#4D8066', '#809980', '#E6AA80', '#1AAA33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
  '#E64D66', '#4DB380', '#FF4D4D', '#66aae9', '#6666FF'];

  $.ajax(settings).done(function (response) {
    var data = JSON.parse(response);
    var randNum = Math.floor(Math.random() * data.length);
    var randColNum = Math.floor(Math.random() * $colorArray.length);
    var randCol = $colorArray[randColNum];
    $("body").css("background", randCol);
    var $forIfStatement = data[randNum].author;
    $("#text").text(data[randNum].text);
    if ($forIfStatement == null) {
      $("#author").text("- Unknown author");
    } else {
      $("#author").text("- " + data[randNum].author);
    }
    $("#author").css("color", randCol);
    $("#text").css("color", randCol);
    $(".tweetfb").css("background-color", randCol);
    $(".tweetfb").css("border", "2px solid " + randCol);
    $(".button").css("border", "2px solid " + randCol);
    $(".button").css("background-color", randCol);
    $(".quotes").css("color", randCol);
    $("#tweet-quote").attr(
      "href",
      "https://twitter.com/intent/tweet?text=" +
        '"' +
        data[randNum].text +
        '"' +
        " - " +
        data[randNum].author
    );

    $("#new-quote").click(function () {
      var randColNum = Math.floor(Math.random() * $colorArray.length);
      var randCol = $colorArray[randColNum];

      $(".quotes").fadeOut(1000);
      $("#text").fadeOut(1000);
      $("#author").fadeOut(1000, function somefunc() {
        var randNum = Math.floor(Math.random() * data.length);
        $("#text").text(data[randNum].text);
        var $forIfStatement = data[randNum].author;
        if ($forIfStatement == null) {
          $("#author").text("- Unknown author");
        } else {
          $("#author").text("- " + data[randNum].author);
        }
        $("body").css("background", randCol);
        $(".button").css("border", "2px solid" + " " + randCol);
        $(".button").css("background-color", randCol);
        $("#tweet-quote").attr(
          "href",
          "https://twitter.com/intent/tweet?text=" +
            '"' +
            data[randNum].text +
            '"' +
            " - " +
            data[randNum].author
        );
        $("#author").css("color", randCol);
        $("#text").css("color", randCol);
        $(".quotes").css("color", randCol);
        $(".tweetfb").css("background-color", randCol);
        $(".tweetfb").css("border", "2px solid " + randCol);
        $("#text").fadeIn(2000);
        $(".quotes").fadeIn(2000);
        $("#author").fadeIn(2000);
      });
    });
  });
});
