const input = document.getElementById("input")
const button = document.querySelectorAll("button")


button.forEach(button => {
    button.addEventListener("click" , () =>{
        let value = button.value
        if(value === 'del'){
            input.value = input.value.slice(0 , -1)
        }
        else if(value === 'all-clear'){
            input.value = ""
        }else if (value === '=') {
            try {
                input.value = eval(input.value);
            } catch {
                input.value = 'Error';
            }
        } else {
            input.value += value;
        }
    })
})