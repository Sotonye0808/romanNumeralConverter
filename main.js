document.getElementById("convert-btn").addEventListener("click", function() {
    const inputNumber = parseInt(document.getElementById("number").value);
    const outputDiv = document.getElementById("output");

    // Check if input is empty
    if (isNaN(inputNumber)) {
        outputDiv.textContent = "Please enter a valid number";
        return;
    }

    // Check if input is less than 1
    if (inputNumber < 1) {
        outputDiv.textContent = "Please enter a number greater than or equal to 1";
        return;
    }

    // Check if input is greater than or equal to 4000
    if (inputNumber >= 4000) {
        outputDiv.textContent = "Please enter a number less than 4000";
        return;
    }

    // Function to convert Arabic numeral to Roman numeral
    function convertToRoman(num) {
        const romanNumerals = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC: 90,
            L: 50,
            XL: 40,
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        };
        let result = "";
        for (let key in romanNumerals) {
            while (num >= romanNumerals[key]) {
                result += key;
                num -= romanNumerals[key];
            }
        }
        return result;
    }

    // Convert input number to Roman numeral
    const romanNumeral = convertToRoman(inputNumber);
    outputDiv.textContent = romanNumeral;
});