let isNotified = false;
// 0 - никакое
// 1 - уведомления
// 2 - друзья
// 3 - события
let userId = "cocos";
let userAva = "../../../img/Lesha.jpg";
let userName = "Алексей";
// 0 - никто
// 1 - заявка подана
// 2 - друзья
let friendList = [
    {
        id: "banana",
        isActive: false,
        relationship: 0,
        name: "Владоооооосик",
        img: "../../../img/Vladosik.jpg"
    },
    {
        id: "banana",
        isActive: false,
        relationship: 1,
        name: "Владоооооосик",
        img: "../../../img/Vladosik.jpg"
    },
    {
        id: "banana",
        isActive: false,
        relationship: 2,
        name: "Владоооооосик",
        img: "../../../img/Vladosik.jpg"
    },
    {
        id: "banana",
        isActive: false,
        relationship: 2,
        name: "Владоооооосик",
        img: "../../../img/Vladosik.jpg"
    },
    {
        id: "banana",
        isActive: false,
        relationship: 2,
        name: "Владоооооосик",
        img: "../../../img/Vladosik.jpg"
    },
    {
        id: "banana",
        isActive: false,
        relationship: 2,
        name: "Владоооооосик",
        img: "../../../img/Vladosik.jpg"
    },
    {
        id: "banana",
        isActive: false,
        relationship: 2,
        name: "Владоооооосик",
        img: ""
    },
    {
        id: "banana",
        isActive: false,
        relationship: 2,
        name: "Владоооооосик",
        img: ""
    },
    {
        id: "banana",
        isActive: false,
        relationship: 2,
        name: "Владоооооосик",
        img: ""
    },
    {
        id: "banana",
        isActive: false,
        relationship: 2,
        name: "Владоооооосик",
        img: ""
    },
    {
        id: "banana",
        isActive: false,
        relationship: 2,
        name: "Владоооооосик",
        img: ""
    },
    {
        id: "banana",
        isActive: false,
        relationship: 2,
        name: "Владоооооосик",
        img: ""
    }
];

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

let menu = 0;
let isOpened = false;

export default function user(state = {isNotified, userId, userAva, userName, friendList, menu, menuList, isOpened}, action) {
    switch (action.type) {
        case "CHANGE_MENU":
            return {...state, isOpened : !state.isOpened};
        default:
            return state
    }
}