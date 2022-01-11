function checkPrime(n) {
    let check=true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n%i==0){
            check=false;
            break;
        }
    }
    return check;
}

function demo3() {
    let x=2;
    let count=0;
    while (count<6){
        if (checkPrime(x)){
            document.writeln(x);
            count++;
        }
        x++;
    }
}
