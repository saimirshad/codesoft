let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0","."]
let operator = ["+", "-", "/", "*"]
let outputDiv = document.getElementById("calculator__output")
let outputDivSmall = document.getElementById("calculator__output2")
let answer
let num = ""
let str = ""
let numstr = ""
let num1


//pressing number
document.addEventListener("keydown", e => {
    if(numbers.includes(e.key)){
        numstr = e.key
        num += numstr
        num1 = num
        // console.log("num: ",num)
        str += numstr
        // console.log("str: ",str)
        outputDiv.innerText = num
    }
})
//pressing operator
document.addEventListener("keydown", e => {
    if(operator.includes(e.key)){
        op = e.key
        answer = eval(str)
        // console.log("answer: ",answer)
        outputDiv.innerText = answer 
        outputDivSmall.innerText = answer + op 
        str = eval(str)
        // console.log("str2: ",str)
        str += op
        numstr = ""
        num = ""
        // console.log("str3: ",str)
    }
})
//pressing =
document.addEventListener("keydown", e => {
    if(e.key == "Enter"){
        answer = eval(str)
        outputDiv.innerText = answer 
        outputDivSmall.innerText = str + "="
        str = eval(str)
        numstr = ""
        num = ""
    }
})
//pressing backspace
document.addEventListener("keydown", e => {
    if(e.key == "Backspace"){
        numstr = numstr.slice(0, -1);
        num = num.slice(0, -1);
        num1 = num
        // console.log("num: ",num)
        str = str.slice(0, -1);
        console.log("str: ",str)
        outputDiv.innerText = num
        // str = ""

    }
})
