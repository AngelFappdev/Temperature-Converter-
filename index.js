function init(){
    const run_button = document.getElementById("run_button")
    run_button.onclick = onrun_buttonclicked;

    function onrun_buttonclicked (){
        const fahrenheit = document.getElementById("fahrenheit") 
        let result = Number((fahrenheit.value) - 32) * .5556;
        celsius_result.value = result
    }
}



window.onload = init;