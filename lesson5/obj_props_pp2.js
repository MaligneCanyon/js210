function incrementProperty(obj, str) {
  // if (Object.keys(obj).includes(str)) obj[str]++;
  if (obj[str]) obj[str]++; // inaccurate
  else obj[str] = 1;

  return obj[str];
}

var wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }

var losses = {
  tom: 5,
  tim: undefined,
};
console.log(incrementProperty(losses, 'tim'));   // 1
console.log(losses);                             // { tom: 5, tim: 1 }
