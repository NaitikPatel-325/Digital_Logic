var b;
var k;

function handleConversionType1() //for to
{
    var selectElement = document.getElementById("conversion-type1").value;

    if (selectElement === "other") {
        b = prompt("Enter the custom base");
        b = parseInt(b, 10);
    }
}

function handleConversionType2() //for from
{
    var selectElement = document.getElementById("conversion-type2").value;

    if (selectElement === "other") {
        k = prompt("Enter the custom base");
        k = parseInt(k, 10);
    }
}



function conversion() {
    var selectElement1 = document.getElementById("conversion-type1").value;
    var selectElement2 = document.getElementById("conversion-type2").value;
    
    if (selectElement1 === "binary") {
        b = 2;
    } else if (selectElement1 === "octal") {
        b = 8;
    } else if (selectElement1 === "hexadecimal") {
        b = 16;
    }else if (selectElement2 === "decimal"){
        b = 10;
    }else{}

    if (selectElement2 === "binary") {
        k = 2;
    } else if (selectElement2 === "octal") {
        k = 8;
    } else if (selectElement2 === "hexadecimal") {
        k = 16;
    }else if (selectElement2 === "decimal"){
        k = 10;
    }else{}

    // console.log(k);

    if( document.getElementById('base-input').value == ''){
        alert("Please enter the number")
    }
    else{
        var num = parseFloat(document.getElementById('base-input').value);

        if (isNaN(num)) {
            alert("Invalid input. Please enter a valid number.");
            return;
        }

        var n1 = num - parseInt(num);

        var p = parseInt(num) 
        if(k===10){

            if (n1 === 0) {
                const a = [];
                var i = 0;
                while (num !== 0) {
                    var temp = num % b;
                    if(temp<10){
                        a[i]=temp;
                    }
                    else if(temp===10){
                        a[i]='A';
                    }
                    else if(temp===11){
                        a[i]='B';
                    }
                    else if(temp===12){
                        a[i]='C';
                    }
                    else if(temp===13){
                        a[i]='D';
                    }
                    else if(temp===14){
                        a[i]='E';
                    }
                    else{
                        a[i]='f';
                    }
                    num = Math.floor(num / b);
                    i++;
                }
                let ans = "";
                while(i--){
                    ans = ans + String(a[i]);
                }
                var p = document.getElementById('converted-number');
                p.innerHTML = `The Number is converted into ${ans}`;

            }   
            else 
            {
                const a = [];
                var i = 0;
                while (p !== 0) {
                    var temp = p % b;

                    // console.log(typeof temp);

                    if(temp<10){
                        a[i]=temp;
                        console.log("hii",temp);
                        }
                    else if(temp===10){
                        a[i]='A';
                    }
                    else if(temp===11){
                        a[i]='B';
                    }
                    else if(temp===12){
                        a[i]='C';
                    }
                    else if(temp===13){
                        a[i]='D';
                    }
                    else if(temp===14){
                        a[i]='E';
                    }
                    else{
                        a[i]='f';
                    }
                    p = Math.floor(p/ b);
                    i++;
                
                }

                var ans = "";               
                while (i--) {
                    ans = ans + String(a[i]);
                }

                var f = num - Math.floor(num);
                var ansf = "";
            
                while (f !== 0 && ansf.length < 4) {
                    f = f * b;

                    // console.log(typeof f);
                    // console.log(typeof temp);

                    f1 = parseInt(f);

                    var n2;
                    if(f1<10){
                        n2 = f1;
                        // console.log(n2);
                    }
                    else if(f1===10){
                        n2='A';
                    }
                    else if(f1===11){
                        n2='B';
                    }
                    else if(f1===12){
                        n2='C';
                    }
                    else if(f1===13){
                        n2='D';
                    }
                    else if(f1===14){
                        n2='E';
                    }
                    else{
                        n2='F';
                    }
                    ansf = ansf + n2 

                    f = f - f1;
                }
            
                // console.log(ans);
                // console.log(ansf);

                var p = document.getElementById('converted-number');

                p.innerHTML = `The Number is converted into ${ans} . ${ansf}`;
            }
        }   


    }
   
}
