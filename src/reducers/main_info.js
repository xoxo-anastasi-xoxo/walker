let name = "Walker";
let year = 2018;
let main_menu = [{name:"Главная", href:"/"}, {name:"О нас", href:"/about"}, {name:"Скачать", href:"/download"}];
let about_walker = [
    {
        img: "img/img_1.jpg",
        name: "Коллеги",
        title: "Бизнес-встречи одним щелчком по карте"
    },
    {
        img: "img/img_2.jpg",
        name: "Новые знакомства",
        title: "Новые знакомства на публичных мероприятиях"
    },
    {
        img: "img/img_3.jpg",
        name: "Старые друзья",
        title: "Встречи с друзьями в один клик"
    }
];
let about_us = [
    {
        img: "img/Lesha.jpg",
        name: "Алексей Горбачев",
        responsibility: "Android-разработчик"
    },
    {
        img: "img/Anastasi.jpg",
        name: "Анастасия Казанцева",
        responsibility: "Frontend-разработчик"
    },
    {
        img: "img/Vladosik.jpg",
        name: "Владислава Вакуленко",
        responsibility: "Frontend-разработчик"
    },
    {
        img: "img/Antosha.jpg",
        name: "Антон Пепеляев",
        responsibility: "IOS-разработчик"
    },
    {
        img: "img/Misha.jpg",
        name: "Михаил Затепякин",
        responsibility: "Backend-разработчик"
    }
];
let isLogIn = false;

export default function main_info(state = {name, year, main_menu, about_us, about_walker, isLogIn}, action) {
    switch (action.type) {

        default:
            return state
    }
}