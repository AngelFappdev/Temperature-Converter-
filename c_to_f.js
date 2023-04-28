function init(){
const run_button_two = document.getElementById("run_button_two")
    run_button_two.onclick = onrun_button_twoclicked;

    function onrun_button_twoclicked(){
        const celsius = document.getElementById("celsius") 
        let result = Number(celsius.value) * 18 + 32;
        fahrenheit_result.value = result
    }
}
window.onload= init;