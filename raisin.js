const raisinAlarm = function (cookie) {
  //Loop through the array, check if the value is a raisin
  for (const ingredient of cookie) {
    if (ingredient === "🍇") {
      console.log("Raisin alert!");
      return;
    }
  }
  console.log("All good!");
};

const raisinAlarmArray = function (cookies) {
  let hasRaisins = false;
  const responseArray = [];
  for (let i = 0; i < cookies.length; i++) {
    for (let j = 0; j < cookies[i].length; j++) {
      if (cookies[i][j] === "🍇") {
        hasRaisins = true;
      }
    }
    if (!hasRaisins) {
      responseArray.push("All good!");
      hasRaisins = false;
    } else {
      responseArray.push("Raisin alert!");
      hasRaisins = false;
    }
  }
  return responseArray;
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
    ["🍫", "🍫", "🍫", "🍇"],
  ])
);
