// function con objeto iterable
function* gen() { //* permite identificar la estructura
    yield 1;     //Palabra reservada yield
    yield 2;
    yield 3;
  }
  
  const g = gen();
  console.log(g.next().value); //palabra reservada next, se puede obtener el primer valor
  console.log(g.next().value);
  console.log(g.next().value);
  
  // function con objeto iterable
  function* iterate(array) {
    for (let value of array) {
      yield value
    }
  }
  
  //iteradores 
  const it = iterate(['oscar', 'omar', 'ana', 'lucia', 'juan']);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);
  console.log(it.next().value);