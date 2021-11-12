let Display = document.getElementById('res');

function InPut(data) {
    console.log(data.target.innerHTML);
    Display.innerHTML += data.target.innerHTML;
   

}

document.addEventListener('keypress',function(event){
    console.log(event);
})

document.getElementById('btn0').addEventListener('click', InPut);

document.getElementById('btn1').addEventListener('click', InPut);

document.getElementById('btnSum').addEventListener('click', InPut);

document.getElementById('btnSub').addEventListener('click', InPut);

document.getElementById('btnMul').addEventListener('click', InPut);

document.getElementById('btnDiv').addEventListener('click', InPut);

document.getElementById('btnEql').addEventListener('click', function () {
    let ExPression = Display.innerText;
    if (Display.innerHTML.match(/\D{2,}/)){
        alert('Error!! dont use more than one operator ( + , - , x , /)');
    }
    let digits = ExPression.match(/\d{1,}/g);
    let length = digits.length;
    for (let i = 0; i < length; i++) {
        ExPression = ExPression.replace(digits[i], parseInt(digits[i], 2));
    }

    Display.innerHTML = Math.floor(eval(ExPression).toString(2));
    
});

document.getElementById('btnAclr').addEventListener('click', function(){

    Display.innerHTML = "";


});
document.getElementById('btnclr').addEventListener('click', function(){

    Display.innerHTML = Display.innerHTML.substr(0,Display.innerHTML.length-1)


});
