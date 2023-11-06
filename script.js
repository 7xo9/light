// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener or Onclick and getElementById if you're doing it right...

let red = document.getElementById("stopLight")
let yellow = document.getElementById("slowLight")
let green = document.getElementById("goLight")

let redButton = document.getElementById("stopButton")
let yellowButton = document.getElementById("slowButton")
let greenButton = document.getElementById("goButton")

redButton.addEventListener("click" , ()=>{
    red.style.cssText = "background-color: red;"
    yellow.style.cssText = "background-color: none"

})

yellowButton.addEventListener("click", ()=>{
    yellow.style.cssText = "background-color: yellow"
    red.style.cssText = "background-color: none;"
    green.style.cssText = "background-color: none"

})

greenButton.addEventListener("click" ,()=>{
    green.style.cssText = "background-color: green"
    yellow.style.cssText = "background-color: nond"
    red.style.cssText = "background-color: none;"
})