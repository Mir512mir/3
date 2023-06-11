
let table = document.getElementById("tab1");
let arr = [];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        arr = json;
        sortData();
    });

// сначала сортируем массив, потом выводим на экран

function sortData() {
    document.getElementById('tab_body').innerHTML = ""; // обнуляем таблицу
    for (let i = 0; i < arr.length; i++) {
        let tr = '<tr>'; // создаем строку таблицы
        tr += '<td>' + arr[i].id + '</td>'; // добавляем столб 1 в строку
        tr += '<td>' + arr[i].name +'</td>'; // добавляем столб 2 в строку
        tr += '</td>'; // закрываем строку таблицы
        document.getElementById('tab_body').innerHTML += tr; // добавляем полученную строку в дом
    }
}


function sortAskID() {
    // сортируем в этом месте по возрастанию
    document.getElementById('sortAskID').style.display = "none";
    document.getElementById('sortDeskID').style.display = "inherit";

    arr.sort((a,b) => a.id - b.id);
    // скрыть текущпю кнопку
    // показать обратную кнопк
    sortData();
}
function sortDeskID() {
    // сортируем в этом месте по убыванию
    document.getElementById('sortDeskID').style.display = "none";
    document.getElementById('sortAskID').style.display = "inherit";
    arr.sort((a,b) => -(a.id - b.id));
    
    sortData();
}

function sortAskName() {
    document.getElementById('sortAskName').style.display = "none";
    document.getElementById('sortDeskName').style.display = "inherit";
    arr.sort((a, b) => a.username.localeCompare(b.username));
    // arr.sort(compare);
    sortData();
}

function sortDeskName() {
    document.getElementById('sortDeskName').style.display = "none";
    document.getElementById('sortAskName').style.display = "inherit";
    arr.sort((a, b) => -a.username.localeCompare(b.username));

    // arr.sort(compare);
    sortData();
}