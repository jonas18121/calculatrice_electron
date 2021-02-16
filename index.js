let keys = document.querySelectorAll('#calculator span');
let operators = ['+', '-', '*', '/'];
let decimalAdd = false;

for (let index = 0; index < keys.length; index++) {
    
    keys[index].onclick = function(e){
        let input = document.querySelector('.screen');
        let inputVal = input.innerHTML;
        let btnVal = this.innerHTML;

        if(btnVal == 'C'){

            input.innerHTML = '';
            decimalAdd = false;
        }
        // calculate a result
        else if (btnVal == '=') {

            let equation = inputVal;
            let lastChar = equation[equation.length -1];
            equation = equation.replace(/x/g, '*');

            if(operators.indexOf(lastChar) >= -1 || (lastChar == '.')){

                // s'il y a point point ( . ) à la fin, on l'enlève 
                equation = equation.replace(/\.$/, '');
                console.log(equation);
                // equation;
            }
            if(equation){
                input.innerHTML = eval(equation);
            }
            decimalAdd = false;
            
        }
        else {
            input.innerHTML += btnVal;
        }
        
        e.preventDefault();
    }
    
}