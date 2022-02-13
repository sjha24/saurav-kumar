let n = 13;
let count = 0 ;
for(let i =2;i<n;i++){
if(n%i==0){

    count++;
}
}
    if(count==0){

        console.log(n+"prime no");
    }
    else{
        console.log(n+"Not a prime no");
        }