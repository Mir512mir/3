//  Level 1 
// Используя ресурс json placeholder получите всех юзеров и отправьте в консоль только 
// 1) username-ы отсортированный по алфавиту
// 2) Количество постов каждого из юзеров в параметре: post_count
// 👉👉👉 Для получения всех юзеров: https://jsonplaceholder.typicode.com/users
// 👉👉👉 Для получения всех постов: https://jsonplaceholder.typicode.com/posts

// Level 2
// Выведите всю информацию в виде таблицы на экран и предоставьте функции сортировки 
//по каждой из двух колонок: 
// а) username (default sort by alphabetical) 
// b) post_count
// 👉👉👉 Название функций, названия переменных, названия самих колонок в HTML выберите так,
// чтобы было понятно что они из себя представляют! 


// Level 3
// 3.1. Создайте страницу, которая отображает ID, City, Country полученные из запроса по ссылке: https://random-data-api.com/api/address/random_address
// Создайте функцию, которая каждые полторы секунды проверяет - если в ответе на GET запрос поменялся  ID, то вызываем другую функцию, цель которой получить новые данные и обновить HTML, а если данные не изменились - ничего не делаем.


// 3.2. Выполните GET запрос на ресурс: https://api.twitter.com/1.1/statuses/update.json
// Обработайте все возможные ошибки, а в случае именно этой: Введите в консоль русскими буквами и словами сообщение о том, что именно произошло?


function getUsers() {
    //here is API call
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.sort((a, b) => a.username > b.username ? 1 : -1);
            data.map((item) => {
                console.log(item.username)
            });

        });
}
getUsers();
 
function getUsers1() {
    //here is API call
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.sort((a, b) => a.username < b.username ? 1 : -1);
            data.map((item) => {
                console.log(item.username)
            });

        });
}
getUsers1();
function getPostsCount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            return response.json()
        })
        .then((posts) => {
            let resultArray = [];
            posts.map((item) => {
                resultArray.push(item.userid);
            });
            let counts = {}
            resultArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
            console.log("Posts counts: ", counts);
        });
}
getPostsCount();

// Level 3
// 3.1. Создайте страницу, которая отображает ID, City, Country полученные из запроса по ссылке: 
// https://random-data-api.com/api/address/random_address
// Создайте функцию, которая каждые полторы секунды проверяет -
//если в ответе на GET запрос поменялся  ID, 
//то вызываем другую функцию, цель которой получить новые данные и обновить HTML,
// а если данные не изменились - ничего не делаем.
// let currentID = null;
// function getRandomadress() {
//     fetch("https://random-data-api.com/api/address/random_address")
//         .then((response) => {
//             return response.json();
//         })
//         .then((randomAdress) => {
//             if (currentID !== randomAdress.id) {
//                 document.getElementById("id").innerText = randomAdress.id;
//                 document.getElementById("city").innerText = randomAdress.city;
//                 document.getElementById("country").innerText = randomAdress.country;

//             }

//             currentID = randomAdress.id;

//         })
// }

//getRandomadress();
//setInterval(getRandomadress, 1500);

let serverUrl = "http://65.109.13.139:9191/signup";
let userData = {
    "username": "Miroslaw1987",
    "password": "0105",
    "confirm_password": "0105"
};

fetch(serverUrl + "signup", {
    "headers": {
        "content-type": "application/json"
    },
    "body": JSON.stringify(userData),
    "method": "POST",
});

let userLogin = {
    "username": "Miroslaw1987",
    "password": "0105"
}


fetch(serverUrl + "signin", {
    "headers": {
        "content-type": "application/json",
    },
    "body": JSON.stringify(userLogin),
    "method": "POST",

});
//отправляли данные
