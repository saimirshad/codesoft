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
        console.log("answer=: ",answer)
        outputDivSmall.innerText = str + "="
        str = eval(str)
        console.log("str=: ",str)
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

//clicking num keys
let numberKeys = document.getElementsByClassName("calculator__key")
console.log(Array.from(numberKeys))
Array.from(numberKeys).forEach(e=>{
    if(e.value ===  "AC"){
        e.onclick = () => { 
            console.log(e.className , e.value  , e.tagName)
            console.log("sdasadsad")
            answer = ""
            num = ""
            str = ""
            numstr = ""
            num1 = ""
            outputDiv.innerText = "0" 
            outputDivSmall.innerText = "0"
        }
    }
    else if((e.value !==   "AC") && (e.value !==   "enter")){
        e.onclick = () => {
            console.log(e.innerText)
            numstr = e.innerText
            num += numstr
            num1 = num
            console.log("num: ",num)
            str += numstr
            console.log("str: ",str)
            outputDiv.innerText = num
    }}
})

let operatorKeys = document.getElementsByClassName("calculator__key_operator calculator__key--operator")
Array.from(operatorKeys).forEach(e=>{
    e.onclick = () => {
        op = e.value
        console.log(op)
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

let enterKey = document.getElementById("enter")
enterKey.onclick = () => {
    answer = eval(str)
    outputDiv.innerText = answer
    console.log("answer=: ", answer)
    outputDivSmall.innerText = str + "="
    str = eval(str)
    console.log("str=: ", str)
    numstr = ""
    num = ""
}






