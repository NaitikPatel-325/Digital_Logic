var b;

function handleConversionType() {
    var selectElement = document.getElementById("conversion-type").value;

    if (selectElement === "other") {
        b = prompt("Enter the custom base");
        b = parseInt(b, 10);
    }
}

function conversion() {
    var selectElement = document.getElementById("conversion-type").value;

    if (selectElement === "binary") {
        b = 2;
    } else if (selectElement === "octal") {
        b = 8;
    } else if (selectElement === "hexadecimal") {
        b = 16;
    } else {
        b = 10;
    }

    var num = parseFloat(document.getElementById('base-input').value);

    var n1 = num - parseInt(num);

    var p = parseInt(num) //for fractional
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
        
            var ans = "";
            
            while (i--) {
                ans = ans + String(a[i]);
            }

            var p = document.getElementById('converted-number');
            p.innerHTML = "The Number is converted into " + ans;
        }
    } 
    else 
    {
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
        
            var ans = "";
            
            while (i--) {
                ans = ans + String(a[i]);
            }
        }
        var f = num - Math.floor(num);
        var ansf = "";

        while (f !== 0 && ansf.length < 4) {
            f = f * b;
            var n2;
            if(f<10){
                n2 = f;
            }
            if(f===10){
                n2='A';
            }
            else if(f===11){
                n2='B';
            }
            else if(f===12){
                n2='C';
            }
            else if(f===13){
                n2='D';
            }
            else if(f===14){
                n2='E';
            }
            else{
                n2='F';
            }
            ansf = ansf + n2 
            f = f - Math.floor(f);
        }

        console.log(ans);
        console.log(ansf);

        var p = document.getElementById('converted-number');
        
        p.innerHTML = "The Number is converted into " + ans + "." + ansf;
    }
}
