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
            a[i] = temp;
            num = Math.floor(num / b);
            i++;
        }

        var ans = "";
        while (i--) {
            ans = ans + String(a[i]);
        }

        var p = document.getElementById('converted-number');
        p.innerHTML = "The Number is converted into " + ans;
    } else {


        const a = [];
        var i = 0;
        while (p !== 0) {
            var temp = p % b;
            a[i] = temp;
            p = Math.floor(p / b);
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
            ansf = ansf + Math.floor(f);
            f = f - Math.floor(f);
        }

        // console.log(ans);
        // console.log(ansf);

        var p = document.getElementById('converted-number');
        
        p.innerHTML = "The Number is converted into " + ans + "." + ansf;
    }
}
