function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    var fn = function fn() {   
        
    }
    return fn;
  };

  function returnsAnAnonymousFunction() {
    return () => 'anonymous function'
  }
  