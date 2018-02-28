let isNotified = false;
// 0 - никакое
// 1 - уведомления
// 2 - друзья
// 3 - события
let userId = 0;
let userAva = "../../../img/Lesha.jpg";
let userName = "Алексей";

let menuList = [
    {
        title: "Карта",
        href: "/web"
    },

    {
        title: "Профиль",
        href: "/web/profile"
    },

    {
        title: "Группы",
        href: "/web/groups"
    },

    {
        title: "Выйти",
        href: "/"
    }
];
let userEvents = [
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        description: "dfggkh gvhb bhvh vghbjiu gv nb hg jhjyhjgjnuhjb bhb hg jh  bj k  yfgjgj."
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png"
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png"
    }
];

let userEventsOld = [
    {
        name: "уже не Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png"
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png"
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png"
    }
];
let userEventsAdmin = [
    {
        name: "неВелосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png"
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png"
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png"
    }
];
let eventMenu = 0;
let menu = 0;
let isOpened = false;

export default function user(state = {isNotified, userId, userAva, userName, menu, menuList,
    isOpened, userEvents, eventMenu, userEventsAdmin, userEventsOld}, action) {
    switch (action.type) {
        case "CHANGE_EVENT_MENU":
            return {...state, eventMenu : action.data};
        case "CHANGE_MENU":
            return {...state, menu : action.data, isOpened : !state.isOpened, eventMenu: 0};
        case "OPEN_MENU":
            return {...state, isOpened : !state.isOpened};
        case "USER_LOGIN":
            console.log(action.id);

            return {...state, userId: action.id, userAva: action.ava, userName: action.name};
        default:
            return state
    }
}