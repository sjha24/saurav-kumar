// task 11 ..1 to n prime no
function f2(num){
    let count1 = 0;
for(let j=1;j<=num;j++){
    if(isPrime(j)==true){
       count1++;
       console.log(j);
    }
}
console.log("total prime no="+count1);
}
function isPrime(str){
for(let i=2;i<str;i++){
    if(str%i==0){
        return false;
    }
}
return true;
}
f2(100);