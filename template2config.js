// ===========================task_3==================================
// Взяти файл template_2.html та працювати в ньому
// - Напишіть код, який :
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

let header = document.getElementById("main_header")
header.style.color = "gray"

// -- робить шириниу елементу ul 400 пікселів

let a = document.getElementsByTagName("ul")
for (const i of a) {
    i.style.width = "400px"
}

// -- робить шириниу всіх елементів з класом linkList шириною 50%

let b = document.getElementsByTagName("li")
for (const i of b) {
    i.style.width = "50%"
}

// -- отримує текст який зберігається в елементі з класом listElement2

let text = document.getElementsByClassName("listElement2")
for (const i of text) {
    console.log(i.innerText)
}

// -- отримує всі елементи li та змінює ім колір фону на сірий

let li = document.getElementsByTagName("li")
for (const i of li) {
    i.style.background = "gray"
}

// -- отримує всі елементи 'a' та додає їм клас anchor

let link = document.getElementsByTagName("a")
for (const i of link) {
    i.classList.add("anchor")
}

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

let all = document.getElementsByClassName("linkList")
for (const i of all) {
    if(i.innerText === "link3"){
        i.style.background = "red"
    }
    
}

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

let lel = document.getElementsByClassName("sub-header")
let ask = prompt()
for (const i of lel) {
    i.style.background = ask
}

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

let clas = document.getElementsByClassName("sub-header")
for (const i of clas) {
    if (i.innerText === "content 2 segment") {
        let lsls = prompt()
        i.style.color = lsls
    } else {
        i.style.color = "red"
    }
}

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

let content = document.getElementsByClassName("content_1")
let text1 = prompt()
for (const i of content) {
    i.innerText = text1
}

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

let tex = document.getElementsByClassName("text2")
for (const i of tex) {
    i.innerText = "hello world!"
}