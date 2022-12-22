/*screenValue is variable for*/
/*screen.value is the value entered on the calculator screen*/
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons)
{
    item.addEventListener('click', (e)=>{
buttonText = e.target.innerText;
console.log('Button text is', buttonText);
if(buttonText == 'X')
{
    buttonText = '*';
    screenValue += buttonText;
    screen.value = screenValue;
}
else if(buttonText == 'C')
{
    screenValue = '';
    screen.value = screenValue;
}
else if(buttonText == '=')
{
screen.value = eval(screenValue);
}
else if(buttonText == 'x^2')
{
screenValue = screen.value*screen.value;
screen.value = screenValue;
}

    else if(buttonText == "sin")
    {
        var i = screen.value;
        i = i * (Math.PI/180);
        screenValue = Math.sin(i);
        screen.value = screenValue;
    }
    else if(buttonText == "tan")
    {
        var i = screen.value;
        i = i * (Math.PI/180);
        screenValue = Math.tan(i);
        screen.value = screenValue;
    }
    else if(buttonText == "cos")
    {
        var i = screen.value;
        i = i * (Math.PI/180);
        screenValue = Math.cos(i);
        screen.value = screenValue;
    }

else{
    screenValue += buttonText;
    screen.value = screenValue;
}
    })
}