let a = prompt()
let b = prompt()
let c = prompt()
let d = prompt()
let e = prompt()
let mas = [+a,+b,+c,+d,+e]
let sum = 0
let aN = 0
function qq(){
    for(let i = 0;i<mas.length;i++){
        sum = (sum + mas[i])
        aN = sum / mas[i] 
    }
    console.log(sum, aN);
}
qq()