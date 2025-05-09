let input = document.querySelector("input");

const getValue = (e) => {

    let value = e.target.innerText;
    console.log(value)

    if(value == "AC"){
        input.value = "";
        return;
    }
    if(value == "X"){
        input.value = input.value.slice(0, -1);
        return;
    }
    if(value == "="){
        try{

            input.value = eval(input.value);
        }
        catch(err){
            input.value = "Error";

        }
        return;
    }
    input.value += value;

}
