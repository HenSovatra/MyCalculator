document.body.addEventListener("keydown",(ev)=>{
    if(ev.key==='Backspace'){
        Backspace();
    }
    else if(ev.key==='Enter'){
        answer(); adjustFontSize();
    }
    else if(ev.key==='1'){
        InputResult('1');
    }
    else if(ev.key==='2'){
        InputResult('2');
    }
    else if(ev.key==='3'){
        InputResult('3');
    }
    else if(ev.key==='4'){
        InputResult('4');
    }
    else if(ev.key==='5'){
        InputResult('5');
    }
    else if(ev.key==='6'){
        InputResult('6');
    }
    else if(ev.key==='7'){
        InputResult('7');
    }
    else if(ev.key==='8'){
        InputResult('8');
    }
    else if(ev.key==='9'){
        InputResult('2');
    }
    else if(ev.key==='0'){
        zero('0');
    }
    else if(ev.key==='+'){
        controlOper('+');
    }
    else if(ev.key==='-'){
        controlOper('-');
    }
    else if(ev.key==='*'){
        controlOper('*');
    }
    else if(ev.key==='/'){
        controlOper('/');
    }
    else if(ev.key==='.'){
        InputResult('.');
    }
    else if(ev.key==='Escape'){
        clearResult()
        FclearResult()
    }
})
function test(){
    var history = document.getElementById('history');
    var title = document.getElementById('title');
    var listItem = document.getElementById('historyList')
    title.style.fontSize='200%'
    title.style.transition = "1s";
    history.style.width='30%';
    history.style.transition = "1s";
    history.style.transform = "translateX(0)";
    listItem.style.fontSize='2vw'
}
function Backspace(){
    var result = document.getElementById('userInput')
    var result2 = document.getElementById('userInput2')
    var result3 = document.getElementById('userInput3')
var lastChar = result.value.slice(-1);
console.log(lastChar)
if('.'.includes(lastChar)){
    result.value =result.value.substring(0, result.value.length - 1); result2.value = result2.value.substring(0, result2.value.length - 1); adjustFontSize();
    result3.value = result3.value.substring(0, result3.value.length - 1);
    dotAdded=false
    havezero=true;
}
else if('0'.includes(lastChar)){
    result.value =result.value.substring(0, result.value.length - 1); result2.value = result2.value.substring(0, result2.value.length - 1); adjustFontSize();
    result3.value = result3.value.substring(0, result3.value.length - 1);
    havezero=true
}
else{
    result.value =result.value.substring(0, result.value.length - 1); result2.value = result2.value.substring(0, result2.value.length - 1); adjustFontSize();
    result3.value = result3.value.substring(0, result3.value.length - 1);
}
}
 const checkBox = document.getElementById('checkbox');
 checkBox.addEventListener("change", updateBackground);
 const buttons = document.querySelectorAll('.oper');
 const operButs = document.querySelectorAll('.operbut');
function updateBackground() {
    document.Calculator.style.background = checkBox.checked ? "rgb(45, 45, 143)" : "rgb(206, 231, 255)";
    document.Calculator.style.transition = checkBox.checked ? "1s" : "1s";
    document.Calculator.display2.style.backgroundImage = checkBox.checked ? "url(black.png)" : "url(black.png )";
    document.Calculator.display2.style.transition = checkBox.checked ? "1s" : "1s";
    document.getElementById('text').innerHTML = checkBox.checked ? "Disable Darkmode" : "Enable Darkmode";
    document.getElementById('text').style.color = checkBox.checked ? "black" : "black";
    document.getElementById('text').style.transition = checkBox.checked ? "1s":"1s";
    document.body.style.background= checkBox.checked? "rgb(68, 68, 68)":"rgb(188, 188, 188)";
    buttons.forEach(button => {
        button.style.background = checkBox.checked ? "rgb(51, 51, 130)" : "white";
        button.style.backgroundSize = checkBox.checked ? "cover" : "cover";
        button.style.transition = checkBox.checked ? "1s" : "1s";
        button.style.color = checkBox.checked ? "white" : "black";
    });
    operButs.forEach(button =>{
        button.style.background=checkBox.checked ? "rgb(135, 135, 232)" : "rgb(135, 135, 232)";
        button.style.transition = checkBox.checked ? "1s" : "1s";
        button.style.color = checkBox.checked ? "black" : "black";
    } );
}
function adjustFontSize() {
    var myDisplay = document.getElementById('userInput');
    var myDisplay2 = document.getElementById('userInput2')
    var myDisplay3 = document.getElementById('userInput3')
    
    var displayCount = myDisplay.value.length;
    if(displayCount>20){
        alert('Numbers Reached Maximum');
    }
    else if (displayCount >= 14) {
        myDisplay.style.fontSize = "1.5vw";
        myDisplay.style.color = 'rgb(135, 135, 232)';
        myDisplay2.style.fontSize = "1.5vw";
        myDisplay2.style.color = 'rgb(135, 135, 232)';
        myDisplay3.style.fontSize = "1.5vw";
        myDisplay3.style.color = 'rgb(135, 135, 232)';
    }
    else if(displayCount >=10){
        myDisplay.style.fontSize = "2vw";
        myDisplay.style.color = 'rgb(135, 135, 232)';
        myDisplay2.style.fontSize = "2vw";
        myDisplay2.style.color = 'rgb(135, 135, 232)';
        myDisplay3.style.fontSize = "2vw";
        myDisplay3.style.color = 'rgb(135, 135, 232)';
    } else {
        myDisplay.style.fontSize = "3vw";
        myDisplay.style.color = 'rgb(135, 135, 232)';
        myDisplay2.style.fontSize = "3vw";
        myDisplay2.style.color = 'rgb(135, 135, 232)';
        myDisplay3.style.fontSize = "3vw";
        myDisplay3.style.color = 'rgb(135, 135, 232)';
    }
}

var dotAdded = false;
function InputResult(value) {
    havezero = false;
    var result = document.Calculator.display;
    var resultValue = result.value;
    
    var last = resultValue[resultValue.length-2];
    var Fresult = document.Calculator.display2;  
    var Fresult2= document.Calculator.display3;
    var displayCount = result.value.length;
    var before = resultValue[resultValue.length-1];
    if('r'.includes(before)||'y'.includes(before)){
        result.value = ''
        Fresult.value=''
        Fresult2.value=''
    }
if (value ==='.'){
    if(dotAdded){
        return;   
    }
    var lastChar = result.value.slice(-1);
    if(result.value == ''|| '+-*/'.includes(lastChar)){
        result.value += '0'+value;
        Fresult.value+='0'+value;
        Fresult2.value+='0'+value;
        console.log(dotAdded)
        dotAdded=true
    }
    else if(resultValue=''){
        result.value+='0.';
        Fresult.value+='0.'
        Fresult2.value+='0.'
        console.log('4')
    }
    else if('.'.includes(lastChar)){
        result.value+='';
        Fresult.value+='';
        Fresult2.value+='';
        	dotAdded=true;
    }
    else{
        dotAdded=true
        result.value+='.';
        Fresult.value+='.'
        Fresult2.value+='.'
       console.log('meow')
       console.log('2')
    }
    dotAdded = true;
}
else if(resultValue==='0'){
    result.value = result.value.substring(0, result.value.length - 1)+value
    Fresult.value = Fresult.value.substring(0, Fresult.value.length - 1)+value
    Fresult2.value = Fresult2.value.substring(0, Fresult2.value.length - 1)+value
}
else{
 
    if (displayCount>21){
        result.value+='';
        Fresult.value+='';
        Fresult2.value+=''
     }
    else if(displayCount<21){
        console.log('woof')
        if('0'.includes(before)&&'+-*/'.includes(last)){
            result.value = result.value.substring(0, result.value.length - 1)+value
            Fresult.value = Fresult.value.substring(0, Fresult.value.length - 1)+value
            Fresult2.value = Fresult2.value.substring(0, Fresult2.value.length - 1)+value
            console.log('1')
        }
        else{
            result.value += value;
            Fresult.value+= value;  
            Fresult2.value+= value;  
        }
       
    }
   
      
}

adjustFontSize();
updateBackground();
}

var operAdded = false;
function controlOper(value){
    havezero = false;
    var Cresult = document.Calculator.display;
    var Fresult = document.Calculator.display2
    var Fresult2= document.Calculator.display3;
    
    if(value ==='+' || value ==='-' || value ==='*' || value ==='/'){
        var before = Cresult.value[Cresult.value.length-1];
        
        
        if(operAdded){
            return;
        }
        else if('r'.includes(before)||'y'.includes(before)){
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
            Cresult.value = '0'+value;
            Fresult.value='0'+filloper;
            Fresult2.value='0'+filloper;
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
            Fresult2.value+='0'+filloper;
           
        }
       
        dotAdded = false
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
            Fresult.value = Fresult.value.substring(0, Fresult.value.length - 1)+filloper
            Fresult2.value = Fresult2.value.substring(0, Fresult2.value.length - 1)+filloper
           
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
            Fresult.value = Fresult.value.substring(0, Fresult.value.length - 1)+filloper
            Fresult2.value = Fresult2.value.substring(0, Fresult2.value.length - 1)+filloper
            console.log('here')
        }
        else{
            
            if(value==='/'){
                Fresult.value+='÷';
                Fresult2.value+='÷';
                Cresult.value+=value;
            }
            else if(value==='*')
            {
                Fresult.value+='x';
                Fresult2.value+='x';
                Cresult.value+=value;
            }
            else{
                Fresult.value+=value;
                Fresult2.value+=value;
                Cresult.value+=value;
            }
        }
    }
    
}

function clearResult() {
    var result = document.Calculator.display;
    result.value = '';
    dotAdded=false;
    operAdded=false;
    adjustFontSize();
}

function FclearResult() {
    var result = document.getElementById('userInput2')
    var Fresult= document.getElementById('userInput3')
    result.value='';
    Fresult.value='';
    dotAdded=false;
    operAdded=false;
    adjustFontSize();
}
function hideHistory(){
    var hisbox = document.getElementById('history')
    var title = document.getElementById('title');
    var listItem = document.getElementById('historyList');
    hisbox.style.width='1px';
    listItem.style.fontSize='1px'
    title.style.fontSize='1px'
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

const history = new Array();
function answer() {

    var userInput = document.getElementById('userInput');
    var userInput2 = document.getElementById('userInput2');
    var userInput3 = document.getElementById('userInput3');
    
    var value = userInput.value;
    var Fvalue = userInput3.value;
    var resultValue = userInput.value;
    var displayCount = history.length;
    var before = resultValue[resultValue.length-1];
    var before = resultValue[resultValue.length-1];
    if('r'.includes(before)||'y'.includes(before)){
        result.value = ''
        Fresult.value=''
        Fresult2.value=''
    }

    if (!value) {
        userInput.value = '';
        userInput2.value = '';
    }
    else {
            var calculatedValue = calculate(tokenize(value));
         
            console.log('Original input:', Fvalue);
            console.log('Calculated value:', calculatedValue);
            console.log(typeof(calculatedValue))
            userInput.value = calculatedValue;
            userInput2.value = value;
            userInput3.value=calculatedValue;
            var check3 = userInput3.value.includes('.',1);
        if(check3==true){
            dotAdded=true
        }
        else{
            dotAdded=false
        }
            
            if (displayCount >= 8) {
                alert('History Full');
                return;
            } else {
                var lastChar = userInput2.value.slice(-1);
                
                if('+-'.includes(lastChar)){
                    history.push(Fvalue + '0 = ' + calculatedValue);
                    console.log('History Before push:', history);
                    userInput2.value = '';
                updateHistory();
                return
                }
                else if('.'.includes(lastChar)){
                    var Fvalue = Fvalue.substring(0, value.length - 1);
                    history.push(Fvalue + ' = ' + calculatedValue);
                    updateHistory();
                }
                else if('*/'.includes(before)){
                    let check = resultValue.includes('+',1);
                    let check2 = resultValue.includes('-',1);
                    if('*'.includes(before) && check==true){
                        console.log('jol')
                        resultValue = resultValue.substring(0, resultValue.length - 1);
                        var firstCal = calculate(tokenize(resultValue));
                        console.log(firstCal)
                        calculatedValue = firstCal*firstCal;
                        userInput.value = calculatedValue;
                        userInput2.value = value;
                        userInput3.value=calculatedValue;
                        history.push(Fvalue + resultValue+' = ' + calculatedValue);
                        updateHistory();
                    }
                    else if('*'.includes(before) && check2==true){
                        resultValue = resultValue.substring(0, resultValue.length - 1);
                        var firstCal = calculate(tokenize(resultValue));
                        console.log(firstCal)
                        calculatedValue = firstCal*firstCal;
                        userInput.value = calculatedValue;
                        userInput2.value = value;
                        userInput3.value=calculatedValue;
                        history.push(Fvalue + resultValue+' = ' + calculatedValue);
                        updateHistory();
                    }
                    else if('*'.includes(before)){
                        resultValue = resultValue.substring(0, resultValue.length - 1);
                        calculatedValue = resultValue*resultValue;
                        userInput.value = calculatedValue;
                        userInput2.value = value;
                        userInput3.value=calculatedValue;
                        history.push(Fvalue + resultValue +' = ' + calculatedValue);
                        updateHistory();
                    }
                    else if('/'.includes(before) && check==true){
                        resultValue = resultValue.substring(0, resultValue.length - 1);
                        var firstCal = calculate(tokenize(resultValue));
                        console.log(firstCal)
                        calculatedValue = firstCal/firstCal;
                        userInput.value = calculatedValue;
                        userInput2.value = value;
                        userInput3.value=calculatedValue;
                        history.push(Fvalue + resultValue+' = ' + calculatedValue);
                        updateHistory();
                    }
                    else if('/'.includes(before) && check2==true){
                        resultValue = resultValue.substring(0, resultValue.length - 1);
                        var firstCal = calculate(tokenize(resultValue));
                        console.log(firstCal)
                        calculatedValue = firstCal/firstCal;
                        userInput.value = calculatedValue;
                        userInput2.value = value;
                        userInput3.value=calculatedValue;
                        history.push(Fvalue + resultValue+' = ' + calculatedValue);
                        updateHistory();
                    }
                    else if('/'.includes(before)){
                        resultValue = resultValue.substring(0, resultValue.length - 1);
                        if(resultValue==0){
                            calculatedValue='Error'
                        }
                        else{
                            calculatedValue = resultValue/resultValue;
                        }
                        
                        userInput.value = calculatedValue;
                        userInput2.value = value;
                        userInput3.value=calculatedValue;
                        history.push(Fvalue + resultValue+' = ' + calculatedValue);
                        updateHistory();
                    }
                    
                    
               
                    return

                }
                    else{
                    var results = Function(`'use strict'; return (${value});`)();
                    if(Number.isNaN(results)){
                        calculatedValue='Error'
                    }
                    
                    history.push(Fvalue + ' = ' + calculatedValue);
                userInput2.value = '';
                updateHistory();
                console.log('History Before push:', history);
                }

            }
         
            var results = Function(`'use strict'; return (${value});`)();
            if (Number.isNaN(results)) {
                userInput.value = 'Error';
                userInput2.value = 'Error';
                userInput3.value = 'Error';
                console.log('mork');
                return
            }
        }
        
    }

let havezero = false;
function zero(value){
    var result = document.Calculator.display;
    var resultValue = result.value;
    var Fresult = document.Calculator.display2;   
    var Fresult2 = document.Calculator.display3; 
    var before = resultValue[resultValue.length-1]
    var last = resultValue[resultValue.length-2];
    if('+-*/'.includes(last)&&'0'.includes(before)){
        return
    }
    var before = resultValue[resultValue.length-1];
    if('r'.includes(before)||'y'.includes(before)){
        result.value = ''
        Fresult.value=''
        Fresult2.value=''
    }
    if(result.value==''){
        result.value+=''
        Fresult.value+=''
        Fresult2.value+=''
    }
    else if('+-*/'.includes(before)&&value==='00'){
        result.value+='0'
        Fresult.value+='0'
        Fresult2.value+='0'
    }
    else{
        result.value+=value;
        Fresult.value+=value;
        Fresult2.value+=value;
    }
    if(havezero){
        result.value ='';
        Fresult.value='';
        Fresult2.value='';
    }
    adjustFontSize()
}

function updateHistory() {
    historyList.innerHTML = '';
    for (var i = 0; i < history.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = history[i];
        listItem.style.fontFamily='Calibri'
        listItem.style.width='70%'
        listItem.style.listStyle='none'
        listItem.style.marginBottom = '2vw';
        listItem.style.marginLeft = '-2vw';
        historyList.appendChild(listItem);
    }
}
function clearHistory() {
    history = [];
    updateHistory();
}