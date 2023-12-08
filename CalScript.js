function history(){

}
function test(){
var history = document.getElementById('history');
var title = document.getElementById('title');
title.style.fontSize='200%'
title.style.transition = "1s";
history.style.width='30%';
history.style.transition = "1s";
history.style.transform = "translateX(0)";
}


 const checkBox = document.getElementById('checkbox');
 checkBox.addEventListener("change", updateBackground);
 const buttons = document.querySelectorAll('.oper');
 const operButs = document.querySelectorAll('.operbut');
 
  
    function updateBackground() {
        document.Calculator.style.backgroundImage = checkBox.checked ? "url(darkbg.jpg)" : "url(lightbg.png)";
        document.Calculator.style.transition = checkBox.checked ? "1s" : "1s";
        document.Calculator.display2.style.backgroundImage = checkBox.checked ? "url(black.png)" : "url(black.png )";
        document.Calculator.display2.style.transition = checkBox.checked ? "1s" : "1s";
        document.getElementById('text').innerHTML = checkBox.checked ? "Disable Darkmode" : "Enable Darkmode";
        document.getElementById('text').style.color = checkBox.checked ? "orange" : "black";
        document.getElementById('text').style.transition = checkBox.checked ? "1s":"1s";
        buttons.forEach(button => {
          button.style.backgroundImage = checkBox.checked ? "url(black.png)" : "url(lightbutton.jpg)";
          button.style.backgroundSize = checkBox.checked ? "cover" : "cover";
         button.style.transition = checkBox.checked ? "1s" : "1s";
            button.style.color = checkBox.checked ? "orange" : "black";
        });
        operButs.forEach(button =>{
            button.style.backgroundImage=checkBox.checked ? "url(lightbutton.jpg)" : "url(black.png )";
            button.style.transition = checkBox.checked ? "1s" : "1s";
            button.style.color = checkBox.checked ? "black" : "orange";
        } );
    }
function adjustFontSize() {
    var myDisplay = document.getElementById('userInput');
    var myDisplay2 = document.getElementById('userInput2')
    
    var displayCount = myDisplay.value.length;
    if(displayCount>20){
        alert('Numbers Reached Maximum');
    }
    else if (displayCount >= 14) {
        myDisplay.style.fontSize = "1.5vw";
        myDisplay.style.color = 'orange';
        myDisplay2.style.fontSize = "1.5vw";
        myDisplay2.style.color = 'orange';
    }
    else if(displayCount >=10){
        myDisplay.style.fontSize = "2vw";
        myDisplay.style.color = 'orange';
        myDisplay2.style.fontSize = "2vw";
        myDisplay2.style.color = 'orange';
    } else {
        myDisplay.style.fontSize = "3vw";
        myDisplay.style.color = 'orange';
        myDisplay2.style.fontSize = "3vw";
        myDisplay2.style.color = 'orange';
    }
}

var dotAdded = false;


function InputResult(value) {
var result = document.Calculator.display;
var Fresult = document.Calculator.display2;
    
    var displayCount = result.value.length;
if (value ==='.'){
    if(dotAdded){
        return;   
    }
    var lastChar = result.value.slice(-1);
    if(result.value == ''|| '+-*/'.includes(lastChar)){
        result.value += '0'+value;
        Fresult.value+='0'+value;
        console.log(dotAdded)
        dotAdded=true
    }
    else if('.'.includes(lastChar)){
        result.value+='';
        Fresult.value+='';
        	dotAdded=true;
    }
    else{
        dotAdded=true
        result.value+='.';
        Fresult.value+='.'
       console.log('meow')
       if('.'.includes()){
        result.value+='';
        Fresult.value+='.'
       }
    }
   
    dotAdded = true;
}
else{
 
    if (displayCount>21){
        result.value+='';
        Fresult.value+='';
     }
    else if(displayCount<21){
        console.log('woof')
        result.value += value;
        Fresult.value+= value;  
        dotAdded=false
    }
   
      
}

adjustFontSize();
updateBackground();
}

var operAdded = false;
function controlOper(value){
    var Cresult = document.Calculator.display;
    var Fresult = document.Calculator.display2
    if(value ==='+' || value ==='-' || value ==='*' || value ==='/'){
        if(operAdded){
            return;
        }
        else if(Cresult.value == ''){
            if(value ==='+'){
                filloper='+';
            }
            if(value ==='-'){
                filloper='-';
            }
            if(value ==='*'){
                filloper='x';
            }
            if(value ==='/'){
                filloper='÷';
            }
            Cresult.value += '0'+value;
            Fresult.value+='0'+filloper;
        }

        var lastChar2 = Cresult.value.slice(-1);
        if('+-*/÷'.includes(lastChar2)){

            if(value ==='+'){
                filloper='+';
            }
            if(value ==='-'){
                filloper='-';
            }
            if(value ==='*'){
                filloper='x';
            }
            if(value ==='/'){
                filloper='÷';
            }
            Cresult.value = Cresult.value.substring(0, Cresult.value.length - 1)+value
            Fresult.value = Cresult.value.substring(0, Cresult.value.length - 1)+filloper
        }
        else if ('.'.includes(lastChar2)){

            if(value ==='+'){
                filloper='+';
            }
            if(value ==='-'){
                filloper='-';
            }
            if(value ==='*'){
                filloper='x';
            }
            if(value ==='/'){
                filloper='÷';
            }

            
            Cresult.value = Cresult.value.substring(0, Cresult.value.length - 1)+value
            Fresult.value = Cresult.value.substring(0, Cresult.value.length - 1)+filloper
        }
        else{
            
            if(value==='/'){
                Fresult.value+='÷';
                Cresult.value+=value;
            }
            else if(value==='*')
            {
                Fresult.value+='x';
                Cresult.value+=value;
            }
            else{
                Fresult.value+=value;
                Cresult.value+=value;
            }
        }
    }
    
}

function clearResult() {
    var result = document.Calculator.display;
    result.value = '';
    var history = document.getElementById('historyList');
    var hisbox = document.getElementById('history')
    var title = document.getElementById('title');
    hisbox.style.width='1px';
    title.style.fontSize='1px'
    dotAdded=false;
    history.innerHTML='';
    operAdded=false;
    adjustFontSize();
  
}

function FclearResult() {
    var result = document.getElementById('userInput2')
    var history = document.getElementById('historyList');
    var hisbox = document.getElementById('history')
    var title = document.getElementById('title');
    hisbox.style.width='1px';
    
    title.style.fontSize='1px'
    result.value='';
    history.innerHTML='';
    dotAdded=false;
    operAdded=false;
    adjustFontSize();
}


function tokenize(s) {
    const r = [];
    let token='';

    for (const character of s) {
        if ('*/+-'.includes(character)) {
            if (token === '' && character === '-') {
                token = '-';
            } 
            else {
                r.push(parseFloat(token), character);
                token = '';
            }
        } else {
            token += character;
        }
    }

    if (token !== '') {
        r.push(parseFloat(token));
    }
    return r;
}

function calculate(tokens) {
    const operatorPrecedence = [{'*': (a, b) => a * b,
                                 '/': (a, b) => a / b},
                                {'+': (a, b) => a + b,
                                 '-': (a, b) => a - b}];
    let operator;
    for (const operators of operatorPrecedence) {
        const newTokens = [];
        for (const token of tokens) {
            if (token in operators) {
                operator = operators[token];
            } else if (operator) {
                newTokens[newTokens.length - 1] = 
                    operator(newTokens[newTokens.length - 1], token);
                operator = null;
            } else {
                newTokens.push(token);
            }
        }
        tokens = newTokens;
    }
    if (tokens.length > 1) {
        console.log('Error: unable to resolve calculation');
        return tokens;
    } else {
        return tokens[0];
    }
}
function updateHistory() {
    historyList.innerHTML = '';
    for (var i = 0; i < history.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = history[i];
        listItem.style.fontSize='2vw'
        listItem.style.width='70%'
        listItem.style.listStyle='none'
        listItem.style.marginBottom = '2vw';
        listItem.style.marginLeft = '-2vw';
        historyList.appendChild(listItem);
    }
}
var history = [];

function answer() {
    var userInput = document.getElementById('userInput');
    var userInput2 = document.getElementById('userInput2');
    var value = userInput.value;
    var displayCount = history.length;

    if (!value) {
        alert("Please Enter what you want to calculate!");
    } else {
        var calculatedValue = calculate(tokenize(value));
        userInput.value = calculatedValue;
        userInput2.value = userInput2.value;
        userInput.style.display = 'block';
        userInput2.style.display = 'none';
        if(displayCount>=8){
            alert('History Fulled');return;
        }
        else{
            history.push(userInput2.value + ' = ' + calculatedValue);
        userInput2.value = '';
        updateHistory();
        console.log(history);
        }
        
    }
}

function clearHistory() {
    history = [];
    updateHistory();
}
