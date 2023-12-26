// bt1:	e^x=1+x/1!+x^2/2!+x^3/3!+… ; 𝑥 ∈ (−∞, +∞)
    var x = 0.5
    var eps = 0.001
    var first = 1
    var mu = 1
    var second = first + Math.pow(x, mu) / factorial(mu)

    while(Math.abs(first - second) > eps){
        mu++
        first = second
        second = first + Math.pow(x, mu) / factorial(mu)
    }
    document.write(`kết quả bài 1: ${first.toFixed(4)} <br> `)
    function factorial(n){
        if(n == 1) return 1
        return n * factorial(n-1)
    }



// bt2:	1/〖(1+x)〗^3 =1-(2*3)/2 x+(3*4)/2 x^2-(4*5)/3 x^3+⋯; x∈(-1,1)

    function baitap2(x, terms) {
        let result = 1;
        let sign = -1;
        let numerator = 2;
        let denominator = 2;

        for (let i = 1; i < terms; i++) {
            sign *= -1;
            result += (sign * numerator) / denominator * Math.pow(x, i);
            numerator++;
            denominator++;
        }

        return result;
    }

    // Test với x = 0.5 và 5 terms
    const xValue = 0.5;
    const numberOfTerms = 5;
    const result = baitap2(xValue, numberOfTerms);

    document.write(`kết quả bài 2: ${result.toFixed(4)} <br>`);


// bt3:	ln⁡(1-x)=-x-x^2/2-x^3/3-x^4/4-…; x∈[-1,1)

    function baitap3() {
        const x = parseFloat(document.getElementById('inputX3').value);
        const terms = 10; // You can adjust the number of terms as needed

        if (isNaN(x) || Math.abs(x) >= 1) {
            document.getElementById('result3').innerHTML = "Invalid value for x. The function is defined only for x in the range [-1, 1).";
            return;
        }

        let result3 = -x;
        let termSign3 = -1;

        for (let i = 2; i <= terms; i++) {
            termSign3 *= -1;
            result3 -= Math.pow(x, i) / i;
        }

        document.getElementById('result3').innerHTML = `kết quả bài 3: ${result3.toFixed(4)} <br>`;
    }

// bt4:	√(1+x)=1+1/2 x+(1*3)/(2*4) x^2+(1*3*5)/(2*4*6) x^3-…;x ∈(-1,1)

function baitap4() {
    const x = parseFloat(document.getElementById('inputX4').value);
    const terms = 10; // You can adjust the number of terms as needed

    if (isNaN(x) || Math.abs(x) >= 1) {
        document.getElementById('result4').innerHTML = "Invalid value for x. The function is defined only for x in the range (-1, 1).";
        return;
    }

    let result4 = 1;
    let numerator4 = 1;
    let denominator4 = 2;

    for (let i = 1; i < terms; i++) {
        numerator4 *= (2 * i - 1);
        denominator4 *= (2 * i);
        result4 += (numerator4 / denominator4) * Math.pow(x, i);
    }

    document.getElementById('result4').innerHTML = `kết quả bài 4: ${result4.toFixed(4)} <br>`;
}

// bt5:1/√(1+x)=1-1/2 x+(1*3)/(2*4) x^2-(1*3)/(2*4*6) x^3+⋯;x∈(-1,1)

function baitap5() {
    const x = parseFloat(document.getElementById('inputX5').value);
    const terms = 10; // You can adjust the number of terms as needed

    if (isNaN(x) || Math.abs(x) >= 1) {
        document.getElementById('result5').innerHTML = "Invalid value for x. The function is defined only for x in the range (-1, 1).";
        return;
    }

    let result5 = 1;
    let termSign5 = -1;
    let numerator5 = 1;
    let denominator5 = 2;

    for (let i = 1; i < terms; i++) {
        termSign5 *= -1;
        numerator5 *= (2 * i - 1);
        denominator5 *= (2 * i);
        result5 += (termSign5 * numerator5 / denominator5) * Math.pow(x, i);
    }

    document.getElementById('result5').innerHTML = `kết quả bài 5: ${result5.toFixed(4)} <br>`;
}


// bt6:	sin⁡〖x=〗  x-x^3/3!+x^5/5!-x^7/7!+⋯; 𝑥 ∈ (−∞, +∞)

    function factorial6(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial6(n - 1);
    }

    function baitap6() {
        const x = parseFloat(document.getElementById('inputX6').value);
        const terms = 10; // You can adjust the number of terms as needed

        let result6 = 0;

        for (let i = 0; i < terms; i++) {
            result6 += (i % 2 === 0 ? 1 : -1) * Math.pow(x, 2 * i + 1) / factorial6(2 * i + 1);
        }

        document.getElementById('result6').innerHTML = `kết quả bài 6: ${result6.toFixed(4)}<br>`;
    }

// bt7:	cos⁡〖x= 〗 x-x^2/2!+x^4/4!-x^6/6!+⋯; 𝑥 ∈ (−∞, +∞)

    function factorial7(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }

    function baitap7() {
        const x = parseFloat(document.getElementById('inputX7').value);
        const terms = 10; // You can adjust the number of terms as needed

        let result7 = 0;

        for (let i = 0; i < terms; i++) {
            result7 += (i % 2 === 0 ? 1 : -1) * Math.pow(x, 2 * i) / factorial7(2 * i);
        }

        document.getElementById('result7').innerHTML = `kết quả bài 7: ${result7.toFixed(4)} <br>`;
    }

// bt8:	arcssin x=x+1/2*x^3/3+(1*3)/(2*4)*x^5/5+(1*3*5)/(2*4*6)*x^7/7+⋯;x ∈ (-1,+1)

function factorial8(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial8(n - 1);
}

function baitap8() {
    const x = parseFloat(document.getElementById('inputX8').value);
    const terms = 10; // You can adjust the number of terms as needed

    if (isNaN(x) || Math.abs(x) > 1) {
        document.getElementById('result8').innerHTML = "Invalid value for x. The function is defined only for x in the range [-1, 1].";
        return;
    }

    let result8 = x;

    for (let i = 1; i < terms; i++) {
        const numerator8 = factorial8(2 * i - 1);
        const denominator8 = Math.pow(2, 2 * i - 1) * factorial8(i) * factorial(i);
        result8 += (numerator8 / denominator8) * Math.pow(x, 2 * i + 1) / (2 * i + 1);
    }

    document.getElementById('result8').innerHTML = `kết quả bài 8: ${result8.toFixed(4)}<br>`;
}

// bt9:	sin⁡x/x=1-x^2/3!+x^4/5!-x^6/7!+⋯;x ∈ (-∞,+∞) 

    function factorial9(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial9(n - 1);
    }

    function baitap9() {
        const x = parseFloat(document.getElementById('inputX9').value);
        const terms = 10; // You can adjust the number of terms as needed

        let result9 = 1;

        for (let i = 1; i < terms; i++) {
            result9 += (i % 2 === 1 ? -1 : 1) * Math.pow(x, 2 * i) / factorial9(2 * i);
        }

        document.getElementById('result9').innerHTML = `kết quả bài 9: ${result9.toFixed(4)}<br>`;
    }

// bt10:	arctan⁡〖x=x〗-x^3/4+x^5/5-x^7/7+⋯;x ∈ (-1,+1) 

    function baitap10() {
        const x = parseFloat(document.getElementById('inputX10').value);
        const terms = 10; // You can adjust the number of terms as needed

        if (isNaN(x) || Math.abs(x) > 1) {
            document.getElementById('result10').innerHTML = "Invalid value for x. The function is defined only for x in the range [-1, 1].";
            return;
        }

        let result10 = x;

        for (let i = 1; i < terms; i++) {
            result10 += (i % 2 === 0 ? -1 : 1) * Math.pow(x, 2 * i + 1) / (2 * i + 1);
        }

        document.getElementById('result10').innerHTML = `kết quả bài 10: ${result10.toFixed(4)}<br>`;
    }

// bt11:	ln⁡(1+n)=x-x^2/2+x^3/3-x^4/4+⋯;x ∈ (-1,+1]

    function baitap11() {
        const x = parseFloat(document.getElementById('inputX11').value);
        const terms = 10; // You can adjust the number of terms as needed

        if (isNaN(x) || x <= -1 || x > 1) {
            document.getElementById('result11').innerHTML = "Invalid value for x. The function is defined only for x in the range (-1, 1].";
            return;
        }

        let result11 = x;
        let termSign11 = -1;

        for (let i = 2; i <= terms; i++) {
            termSign11 *= -1;
            result11 += (termSign11 * Math.pow(x, i)) / i;
        }

        document.getElementById('result11').innerHTML = `kết quả bài 11: ${result11.toFixed(4)} <br>`;
    }

// bt12:	ln⁡((1+x)/(1-x))=2(x+x^3/3+x^5/5+x^7/7+⋯);x ∈ (-1,+1)

    function baitap12() {
        const x = parseFloat(document.getElementById('inputX12').value);
        const terms = 10; // You can adjust the number of terms as needed

        if (isNaN(x) || Math.abs(x) >= 1) {
            document.getElementById('result12').innerHTML = "Invalid value for x. The function is defined only for x in the range (-1, 1).";
            return;
        }

        let result12 = 2 * x;
        let termSign12 = 1;

        for (let i = 3; i <= terms; i += 2) {
            termSign12 *= -1;
            result12 += (termSign12 * Math.pow(x, i)) / i;
        }

        document.getElementById('result12').innerHTML = `kết quả bài 12: ${result12.toFixed(4)}<br>`;
    }

// bt13:sinh⁡x=(e^x-e^(-x))/2=x+x^2/2!+x^4/4!+⋯;x ∈ (-∞,+∞)

    function factorial13(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial13(n - 1);
    }

    function baitap13() {
        const x = parseFloat(document.getElementById('inputX13').value);
        const terms = 10; // You can adjust the number of terms as needed

        let result13 = x;
        let termSign13 = 1;

        for (let i = 2; i <= terms; i += 2) {
            termSign13 *= -1;
            result13 += (termSign13 * Math.pow(x, i) / factorial13(i));
        }

        document.getElementById('result13').innerHTML = `kết quả bài 13: ${result13.toFixed(4)}<br>`;
    }

// bt14:	cosh⁡x=(e^x-e^(-x))/2=x+x^2/2!+x^4/4!+⋯;x ∈ (-∞,+∞)

    function factorial14(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial14(n - 1);
    }

    function baitap14() {
        const x = parseFloat(document.getElementById('inputX14').value);
        const terms = 10; // You can adjust the number of terms as needed

        let result14 = 1;
        let termSign14 = 1;

        for (let i = 2; i <= terms; i += 2) {
            termSign14 *= -1;
            result14 += (termSign14 * Math.pow(x, i) / factorial14(i));
        }

        document.getElementById('result14').innerHTML = `kết quả bài 14: ${result14.toFixed(4)}<br>`;
    }