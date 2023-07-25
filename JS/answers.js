let x = new XMLHttpRequest();
x.open("GET","/JSON/question.json")
x.onload = function (){



const y = JSON.parse(x.responseText);

let e_questions = document.getElementById("e_questions")
let iq_questions = document.getElementById("e_questions")
let tech_questions = document.getElementById("e_questions")
for (let i = 0; i <= 4 ; i++) {
    
    let e_div = document.createElement("div")
    e_questions.appendChild(e_div)
   
     let qNumber = document.createElement("h2")
    e_div.appendChild(qNumber)
    qNumber.innerHTML = `Question ${i+1}`
    
    let q = document.createElement("p")
    e_div.appendChild(q)
    q.innerHTML=`${y.English[i].question}`

    let ul = document.createElement("ul")
    e_div.appendChild(ul)
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    li1.innerHTML = `<span class="letter a yousef">A</span><span class="ans yousef">${y.English[i].firstAnswer}</span`
    let spanli1 = document.getElementsByClassName("yousef")
    
    if(y.English[i].firstAnswer === y.English[i].trueAnswer){
        spanli1[z].style.backgroundColor = "green"
    }else{
        spanli1[z].style.backgroundColor = "red"
    }

    li2.innerHTML = `<span class="letter b">B</span><span class="ans">${y.English[i].secondAnswer}</span`
    li3.innerHTML = `<span class="letter c">C</span><span class="ans">${y.English[i].thirdAnswer}</span`




}




for (let j = 0; j <= 4 ; j++) {
    
    let iq_div = document.createElement("div")
    iq_questions.appendChild(iq_div)
   
     let qNumber = document.createElement("h2")
    iq_div.appendChild(qNumber)
    qNumber.innerHTML = `Question ${j+6}`
    
    let q = document.createElement("p")
    iq_div.appendChild(q)
    q.innerHTML=`${y.IQ[j].question}`

    let ul = document.createElement("ul")
    iq_div.appendChild(ul)
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    li1.innerHTML = `<span class="letter a">A</span><span class="ans">${y.IQ[j].firstAnswer}</span`
    li2.innerHTML = `<span class="letter b">B</span><span class="ans">${y.IQ[j].secondAnswer}</span`
    li3.innerHTML = `<span class="letter c">C</span><span class="ans">${y.IQ[j].thirdAnswer}</span`




}
for (let w = 0; w <= 9 ; w++) {
    
    let tech_div = document.createElement("div")
    tech_questions.appendChild(tech_div)
   
     let qNumber = document.createElement("h2")
    tech_div.appendChild(qNumber)
    qNumber.innerHTML = `Question ${w+11}`
    
    let q = document.createElement("p")
    tech_div.appendChild(q)
    q.innerHTML=`${y.technical[w].question}`

    let ul = document.createElement("ul")
    tech_div.appendChild(ul)
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    li1.innerHTML = `<span class="letter a">A</span><span class="ans">${y.technical[w].firstAnswer}</span`
    li2.innerHTML = `<span class="letter b">B</span><span class="ans">${y.technical[w].secondAnswer}</span`
    li3.innerHTML = `<span class="letter c">C</span><span class="ans">${y.technical[w].thirdAnswer}</span`




}






















}













x.send()