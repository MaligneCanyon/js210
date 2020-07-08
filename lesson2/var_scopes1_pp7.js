console.log(a);

function hello() {
  a = 1;
}

// the fn dec is hoisted; however, it is never called
// JS can't find 'a' in the scope hierarchy, so line1 raises a ReferenceError
