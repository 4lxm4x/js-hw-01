let input;
let total=0;
do {
     input = prompt("Введите число:");
     const num = Number(input);  
     if (Number.isNaN(num)) { 
      alert('Это не число!');
      } 
        else {
         total=total+num;  
        }
   } while (input!==null);

  
console.log(`Сумма введенных чисел ${total}`);
