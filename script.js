function getHistory() {
    return document.getElementById("history-value").innerText;//get history
}

function printHistory(num) {
    return document.getElementById("history-value").innerHTML = num; // display hist
}

function getOutput() {
    return document.getElementById("output-value").innerHTML; // get output
}

function printOutput(num) {
    if (num == "") {
        document.getElementById("output-value").innerHTML = num;
    }

    else {
        document.getElementById("output-value").innerHTML = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    if (num == "-") {
        return ""
    }
    var n = Number(num);//"99"->9999
    var value = n.toLocaleString("en");//9,999
    return value;
}

function reverseNumberFormat(num) {
    returnNumber(num.replace(/,/g / ''));//9,999->999
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            printHistory("");
            printOutput("");
        }

        else if (this.id == "backspace") {

            var output = reverseNumberFormat(getOutput()).toString();//, removed

            if (output) {//if output has a value

                output = output.substr(0, output.length - 1);//sustr(3,7)->3 to 6 , (0 , 2)->0 to 1

                printOutput(output);

            }

        }

        else {

            var output = getOutput();

            var history = getHistory();

            if (output == "" && history != "") {

                if (isNaN(history[history.length - 1])) {//removes last op to add new

                    history = history.substr(0, history.length - 1);

                }

            }

            if (output != "" || history != "") {

                output = output == "" ? output : reverseNumberFormat(output);

                history = history + output;

                if (this.id == "=") {

                    var result = eval(history);

                    printOutput(result);

                    printHistory("");

                }

                else {

                    history = history + this.id;

                    printHistory(history);

                    printOutput("");

                }

            }

        }

    });

}

var number = document.getElementsByClassName("number");

for (var i = 0; i < number.length; i++) {

    number[i].addEventListener('click', function () {

        var output = reverseNumberFormat(getOutput());

        if (output != NaN) { //if output is a number

            output = output + this.id;

            printOutput(output);

        }

    });

}
