gWK)3wf*e@var basket = 'empty';

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  console.log(basket); //-> 'empty' // shop1() hasn't been called yet

  function shop2() {
    basket = 'computer';
  }

  function shop3() {
    var basket = 'play station';
    console.log(basket); //-> 'play station' // scoped locally
  }

  shop1(); // basket === 'tv'
  shop2(); // basket === 'computer'
  shop3();

  console.log(basket); //-> 'computer'
}

goShopping();

// logs 'empty', 'play station', 'computer'
