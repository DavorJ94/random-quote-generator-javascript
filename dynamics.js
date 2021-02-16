// prettier-ignore
const colorArray = ['#FF6633', '#ff9999', '#FF33FF', '#AABBAA', '#00B3E6',
  '#E6B333', '#3366E6', '#999966', '#99AAFF', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
  '#FF99E6', '#ffbb99', '#FF1A66', '#a6225a', '#33aaCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#995b85',
  '#4D8066', '#809980', '#E6AA80', '#1AAA33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
  '#E64D66', '#4DB380', '#FF4D4D', '#66aae9', '#6666FF']

async function getQuote() {
  const result = await fetch("https://type.fit/api/quotes");
  const data = await result.json();

  let randNum = Math.floor(Math.random() * data.length + 1);
  let randColNum = Math.floor(Math.random() * colorArray.length + 1);
  let randCol = colorArray[randColNum]; // random color value

  document.querySelector("body").style.background = randCol;

  let authorAPI = data[randNum].author;
  let authorElement = document.querySelector("#author");
  let quoteElement = document.querySelector("#text");
  let tweetFbElements = [].slice.call(document.querySelectorAll(".tweetfb"));

  let buttonElement = document.querySelector(".button");
  let quoteChars = [].slice.call(document.querySelectorAll(".quotes"));

  let tweetQuoteElement = document.querySelector("#tweet-quote");

  let quoteText = data[randNum].text;

  quoteElement.innerText = quoteText;

  if (authorAPI == null) {
    authorElement.style.innerText = "- Unknown author";
  } else {
    authorElement.style.innerText = "- " + data[randNum].author;
  }
  authorElement.style.color = randCol;
  quoteElement.style.color = randCol;
  tweetFbElements.forEach((item) => (item.style.backgroundColor = randCol));
  tweetFbElements.forEach(
    (item) => (item.style.border = "2px solid " + randCol)
  );
  buttonElement.style.border = "2px solid " + randCol;
  buttonElement.style.backgroundColor = randCol;
  quoteChars.forEach((item) => (item.style.color = randCol));

  tweetQuoteElement.setAttribute(
    "href",
    `https://twitter.com/intent/tweet?text="${quoteText}" - ${author}`
  );

  // $("#new-quote").click(function () {
  //   var randColNum = Math.floor(Math.random() * $colorArray.length);
  //   var randCol = $colorArray[randColNum];

  //   $(".quotes").fadeOut(1000);
  //   $("#text").fadeOut(1000);
  //   $("#author").fadeOut(1000, function somefunc() {
  //     let randNum = Math.floor(Math.random() * data.length + 1);
  //     $("#text").text(data[randNum].text);
  //     let author = data[randNum].author;
  //     if (author == null) {
  //       $("#author").text("- Unknown author");
  //     } else {
  //       $("#author").text("- " + data[randNum].author);
  //     }
  //     $("body").css("background", randCol);
  //     $(".button").css("border", "2px solid" + " " + randCol);
  //     $(".button").css("background-color", randCol);
  //     $("#tweet-quote").attr(
  //       "href",
  //       "https://twitter.com/intent/tweet?text=" +
  //         '"' +
  //         data[randNum].text +
  //         '"' +
  //         " - " +
  //         data[randNum].author
  //     );
  //     $("#author").css("color", randCol);
  //     $("#text").css("color", randCol);
  //     $(".quotes").css("color", randCol);
  //     $(".tweetfb").css("background-color", randCol);
  //     $(".tweetfb").css("border", "2px solid " + randCol);
  //     $("#text").fadeIn(2000);
  //     $(".quotes").fadeIn(2000);
  //     $("#author").fadeIn(2000);
  //   });
  // });
}
getQuote();
