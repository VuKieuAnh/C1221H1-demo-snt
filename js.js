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
function vehinhchunhat(){
    for (let i = 5; i >0; i--) {
        // viết 5-i dấu -
        for (let j = 0; j < (5-i); j++) {
            document.writeln("&ensp;")
        }
        //viết i dấu *
        for (let j = 0; j < i; j++) {
            document.writeln("*");
        }

        // viết dấu xuống dòng
        document.writeln("<br>")
    }
}
