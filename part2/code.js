"use strict";
function handleButtonClick() {
  let textarea = document.getElementById("textarea");
  let text = textarea.value;
  let parseResult = parseText(text);
  textarea.value = parseResult;
    console.log(parseResult);
}

function parseText(inputText){

  let textArray = inputText
      .split("\n")
      .map((item) => {
          item = item.split(",");
          return {
              x: +item[0],
              y: +item[1],
              name: item[2],
              population: +[item[3]],
          };
      })
      .filter((item) => item.name !== undefined && !isNaN(item.x))
      .sort((a,b) => b.population - a.population )
      .slice(0,10)
      .reduce((acc, curr, index) => {
          acc[curr.name] = { population: curr.population, rating: index + 1 };
          return acc;
      }, {});

      let outputText = inputText;
      let temporary = "";
      Object.keys(textArray).forEach((cityName) => {
          if (outputText.includes(cityName)) {
              temporary += outputText.replace(
                outputText,
                  `${cityName} (${textArray[cityName].rating} місце в ТОП-10 найбільших міст України, населення ${textArray[cityName].population} людей)`
              );
              temporary += "\n\n";
          }
      });
      outputText = temporary;
      console.log(outputText);
      return outputText;
  }