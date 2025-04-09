// Inverser une chaine
function inverserChaine(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(inverserChaine("bonjour"));  // "ruojnob"

  // Compter les caracteres
  function compterCaracteres(str) {
    return str.length;
  }
  
  console.log(compterCaracteres("bonjour"));  

  // Mettre des mots en majuscule
  function mettreMajuscule(str) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  
  console.log(mettreMajuscule("bonjour tout le monde"));  


  // Trouver le maximum et le minimum
  function trouverMax(arr) {
    return Math.max(...arr);
  }
  
  function trouverMin(arr) {
    return Math.min(...arr);
  }
  
  console.log(trouverMax([1, 2, 3, 4, 5]));  
  console.log(trouverMin([1, 2, 3, 4, 5]));  

  // Somme d'un tableau
  function sommeTableau(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
  console.log(sommeTableau([1, 2, 3, 4, 5]));  

  // Filter un tableau
  function filtrerTableau(arr, condition) {
    return arr.filter(condition);
  }
  
  console.log(filtrerTableau([1, 2, 3, 4, 5], num => num > 2)); 


  // Factorielle 
  function factorielle(n) {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * factorielle(n - 1);
  }
  
  console.log(factorielle(5));


  // Vérification des nombres premiers
  function estPremier(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  console.log(estPremier(7));  
  console.log(estPremier(10)); 
  
  // Suite de Fibonacci
  function suiteFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
  }
  
  console.log(suiteFibonacci(10)); 