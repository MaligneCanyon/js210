// pp12
let today = new Date();
let nextWeek = today;
console.log(today === nextWeek); // T; ref the same obj
nextWeek = new Date(today.getTime());
console.log(today === nextWeek); // F; ref dif objs


// pp13
todayStr = today.toDateString();
nextWeekStr = nextWeek.toDateString();
console.log(todayStr);
console.log(todayStr === nextWeekStr); // T; same content

nextWeek.setDate(today.getDate() + 7);
nextWeekStr = nextWeek.toDateString();
console.log(nextWeekStr);
console.log(todayStr === nextWeekStr); // F; dif content
