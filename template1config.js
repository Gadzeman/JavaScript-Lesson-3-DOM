// =================================task_3=================================
// // Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// // отримує текст з параграфа з id "content"

let text1 = document.getElementById("content")
console.log(text1.innerText)
console.log("===================================")

// // отримує текст з блоку з id "rules"

let rules = document.getElementById("rules")
console.log(rules.innerText)
console.log("===================================")

// // замініть текст параграфа з id 'content' на будь-який інший

let content = document.getElementById("content")
text2 = content.innerText = "It's my first text"
console.log(text2)
console.log("===================================")

// // замініть текст параграфа з id 'rules' на будь-який інший

let rule = document.getElementById("rules")
text3 = rule.innerText = "It's my second text"
console.log(text3)
console.log("===================================")

// // змініть кожному елементу колір фону на червоний (в цьому випадку з окремим елементом)

let rul = document.getElementById("rules")
rul.style.background = "red"

// // отримати весь список класів елемента з id=rules і вивести їх в console.log

let a = document.getElementsByClassName("fcbp")
console.log(a)
console.log("===================================")

// // отримати всі елементи з класом fc_rules

let fc = document.getElementsByClassName("fc_rules")
console.log(fc)
console.log("===================================")

// // поміняти колір тексту у всіх елементів fc_rules на червоний

// =================================task.3=================================
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let cars = [{
        model: "BMW",
        engine: "3,8",
        color: "white",
        theDriver: {
            name: "Oleh",
            age: 23
        }
    },
    {
        model: "OPEL",
        engine: "1,7",
        color: "silver",
        theDriver: {
            name: "Viktor",
            age: 50
        }
    },
    {
        model: "Audi",
        engine: "3,0",
        color: "black",
        theDriver: {
            name: "Alex",
            age: 30
        }
    }
]

// - проитерировать каждый массив из задания 5 при помощи for .

document.write("<hr>")
for (let i = 0; i < cars.length; i++) {
    let container = document.createElement("div")
    container.classList.add("item")

    let model = document.createElement("h4")
    model.innerText = `${cars[i].model}`
    container.appendChild(model)

    let info = document.createElement("p")
    info.innerText = `Engine: ${cars[i].engine}`
    container.appendChild(info)

    document.body.appendChild(container)

}
document.write("<hr>")

// - проитерировать каждый массив из задания 5 при помощи  for of.

for (const car of cars) {
    let container = document.createElement("div")

    let title = document.createElement("h3")
    title.innerText = `${car.model}`
    container.appendChild(title)

    let info = document.createElement("h4")
    info.innerHTML = `Engine: ${car.engine} `
    info.innerText += `Driver: ${car.theDriver.name}`
    container.appendChild(info)

    document.body.appendChild(container)

}
document.write("<hr>")

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.

let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    skills: ['java', 'js']
}, {
    name: 'petya',
    age: 30,
    status: true,
    skills: ['java', 'js', 'html']
}, {
    name: 'kolya',
    age: 29,
    status: true,
    skills: ['mysql', ',mongo']
}, {
    name: 'olya',
    age: 28,
    status: false,
    skills: ['java', 'js']
}, {
    name: 'max',
    age: 30,
    status: true,
    skills: ['mysql', ',mongo']
}];

for(const user of users){
    let wrap = document.createElement("div")
    wrap.classList.add("wrap")

    let name = document.createElement("h4")
    name.innerText = `Name: ${user.name}`
    wrap.appendChild(name)

    let skills = document.createElement("p")
    skills.innerText = `Skills: ${user.skills}`
    wrap.appendChild(skills)


    document.body.appendChild(wrap)
}

// - З масиву users за допомогою циклу витягнути name користувачів і записати (скопіювати) їх в інший порожній масив.

let usersName = []

for (const user of users) {
    usersName.push(user.name)
}

console.log(usersName)

// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

document.write("<hr/>")

let container = document.createElement("div")
container.classList.add("item2")

let text = document.createElement("p")
text.innerText = "Hello World!"
container.appendChild(text)

document.body.appendChild(container)

// - змінити цей текст використовуючи селектори id, class,  tag

let y = document.getElementsByClassName("item2")
for (const i of y) {
    i.style.background = "red"
}

let x = document.getElementsByTagName("p")
for (const i of x) {
    i.style.color = "blue"
}

// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

for (const i of y) {
    i.style.height = "200px"
    i.style.width = "300px"
}

for (const i of x) {
    i.style.background = "silver"
}

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

//             			let users = [{
//             				name: 'vasya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//             			}, {
//             				name: 'petya',
//             				age: 30,
//             				status: true,
//             				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//             			}, {
//             				name: 'kolya',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//             			}, {
//             				name: 'olya',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//             			}, {
//             				name: 'max',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//             			}, {
//             				name: 'anya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//             			}, {
//             				name: 'oleg',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//             			}, {
//             				name: 'andrey',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//             			}, {
//             				name: 'masha',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//             			}, {
//             				name: 'olya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//             			}, {
//             				name: 'max',
//             				age: 31,
//             				status: true,
//             				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//             			}];


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]