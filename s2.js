let a = [1,312,523,2342,42,4,32]
let c = []
function b(){
    for(let i = 0;i<a.length;i++){
        if(a[i]%2 == 0){
            c.push(a[i])
        }
    }
    console.log(c);
}
b()
