var tasks = 10;
var checkmarks = 0;
var sessions = 0;
var minutes = 0;

function pomodoro() {
  console.log('Work.');

  console.log(minutes); // line X; undefined !
  while (minutes < 25) {
    minutes += 1;
    console.log('...' + minutes);
  }

  console.log('PLING!');

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  var rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log('Rest for ' + rest + ' minutes.');

  // re-defs 'minutes'; the declaration is hoisted, the init (or assignment) is not
  // so minutes is undefined at line X
  // var minutes = 0;
  minutes = 0;
  pomodoro();
}

pomodoro();
