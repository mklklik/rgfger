function perfect(number) {
    let temp = 0;
       for(let i=1;i<=number/2;i++) {
             if(number%i === 0) {
                temp += i;
              }
         }
      
         if(temp === number && temp !== 0) {
           document.writeln("Это идеальное число.");
            }  
          else {
           document.writeln("Это не идеальное число.");
            }  
     }
perfect(28);