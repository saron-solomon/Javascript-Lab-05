var btns = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decAdded = false;

for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (e) {
        var input = document.querySelector('.result');
        var inputVal = input.innerHTML;
        var btnVal = this.innerHTML;

        if (btnVal == 'C') {
            input.innerHTML = '';
            decAdded = false;
        }

        else if (btnVal == '=') {
            var exp = inputVal;
            var lastCh = exp[exp.length - 1];

            if (operators.indexOf(lastCh) > -1 || lastCh == '.')
                exp = exp.replace(/.$/, '');

            if (exp)
                input.innerHTML = eval(exp);

            decAdded = false;
        }

        else if (operators.indexOf(btnVal) > -1) {

            var lastCh = inputVal[inputVal.length - 1];

            if (inputVal != '' && operators.indexOf(lastCh) == -1)
                input.innerHTML += btnVal;

            else if (inputVal == '' && btnVal == '-')
                input.innerHTML += btnVal;

            if (operators.indexOf(lastCh) > -1 && inputVal.length > 1) {

                input.innerHTML = inputVal.replace(/.$/, btnVal);
            }

            decAdded = false;
        }


        else if (btnVal == '.') {
            if (!decAdded) {
                input.innerHTML += btnVal;
                decAdded = true;
            }
        }

        else {
            input.innerHTML += btnVal;
        }


        e.preventDefault();
    }
}