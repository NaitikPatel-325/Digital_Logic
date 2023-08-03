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
        b = parseInt(b, 10);
    }
    else if (selectElement === "octal") {
        b = 8;
        b = parseInt(b, 10);
    }
    else if (selectElement === "hexadecimal") {
        b = 16;
        b = parseInt(b, 10);
    }

    var num = parseInt(document.getElementById('base-input').value);

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
    p.innerHTML ="The Number is converted into " + ans; 
}
