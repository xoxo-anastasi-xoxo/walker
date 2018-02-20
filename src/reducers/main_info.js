const name = "Walker";
const year = 2018;
const main_menu = [{name:"Главная", href:"/"}, {name:"О нас", href:"/about"}, {name:"Скачать", href:"/download"}];
const about_walker = [
    {
        img: "img/img_1.jpg",
        name: "",
        title: "Простота и понятность"
    },
    {
        img: "img/img_2.jpg",
        name: "",
        title: "Только интересующие Вас события"
    },
    {
        img: "img/img_3.jpg",
        name: "",
        title: "Доступ в любой точке мира с доступом к Интернету"
    },
    {
        img: "img/img_1.jpg",
        name: "",
        title: "Возможность использования без регистрации"
    },
    {
        img: "img/img_2.jpg",
        name: "",
        title: "Своевременные уведомленияо предстоящих мероприятиях"
    },
    {
        img: "img/img_3.jpg",
        name: "",
        title: "Безопасность ваших данных и открытая политика"
    }
];
const about_what = [
    {
        img: "img/img_1.jpg",
        name: "",
        title: "Самые интересные события поблизости"
    },
    {
        img: "img/img_2.jpg",
        name: "",
        title: "Бизнес-встречи в один клик"
    },
    {
        img: "img/img_3.jpg",
        name: "",
        title: "Организация масштабных мероприятий одним щелчком"
    },
    {
        img: "img/img_1.jpg",
        name: "",
        title: "Новые способы провести время с друзьями"
    },
    {
        img: "img/img_2.jpg",
        name: "",
        title: "Шанс найти единомышленников"
    },
    {
        img: "img/img_3.jpg",
        name: "",
        title: "Частные мероприятия для особенных гостей"
    }
];
const about_us = [
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
let isLogIn = true;
const footer = [
    {
        title: "Компания",
        isLink: true,
        list: [
            {title: "О нас", href: "/about"},
            {title: "FAQ", href: "/faq"},
            {title: "Сотрудничество", href: "/"},
            {title: "Техническая поддержка", href: "/"}
            ]
    },
    {
        title: "Скачать",
        isLink: true,
        list: [
            {title: "IOS", href: "/download"},
            {title: "Android", href: "/download"}
        ]
    },
    {
        title: "Помощь",
        isLink: false,
        list: [
            {title: "+7(888) 888 88 88"},
            {title: "Ежедневно"},
            {title: "10:00-20:00 (Мск)"},
            {title: "Whatsapp: 7 (888) 888 88 88"},
            {title: "Telegram: @WalkerHelp"}
        ]
    }
];
const socialNetworks = [
    {
    key: 1,
    name: "VK",
    to: "https://oauth.vk.com/authorize?client_id="
    + 6278299 + "&display=popup&redirect_uri="
    // + "https://nkwalker.herokuapp.com/"
    + "http://localhost:3000/login"
    + "&scope=offline,friends,photos&response_type=token&v=5.69",
    src: "img/vk.svg"
}, {
    key: 2,
    name: "Twitter",
    to: "/web/account",
    src: "img/twitter.svg"
}, {
    key: 3,
    name: "Google",
    to: "/web/account",
    src: "img/google.svg"
}, {
    key: 4,
    name: "Facebook",
    to: "/web/account",
    src: "img/facebook.svg"
}];


const merits = [
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
];

const scrollHeigh = window.pageYOffset;


export default function main_info(state = {name, year, main_menu,
    about_us,about_what, about_walker, isLogIn, footer, socialNetworks, merits, scrollHeigh}, action) {
    switch (action.type) {

        default:
            return state
    }
}