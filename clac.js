const inputNumber= document.getElementById('number');
const errormessage= document.getElementById('errormessage');
const c = document.getElementById('c');
// adding number
function addNumber(digital){
    inputNumber.value = inputNumber.value + digital
//    errormessage.textContent = '';
};
// to add the thing on input
function calc(add_operation){
    inputNumber.value = inputNumber.value + add_operation
};
// delete button
function delet(delte){

    inputNumber.value = inputNumber.value.slice(0, -1);
}
        // for to get ==
c.addEventListener ('click',function (){;
     if (inputNumber.value === '') {
        // console.log('Please input your field');  //
        errormessage.textContent = `Please input your field `;
        errormessage.style.color= 'red'
    }
    return;
});
function result(retrn){
 inputNumber.value = eval(inputNumber.value)
}
