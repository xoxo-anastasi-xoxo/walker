let isNotified = false;
// 0 - никакое
// 1 - уведомления
// 2 - друзья
// 3 - события
let openedMenu = 0;
let userId = "cocos";
let userAva = "../../../img/Anastasi.jpg";
let userName = "Anastasia Kazantseva";
// 0 - никто
// 1 - заявка подана
// 2 - друзья
let friendList = [
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
let notList = [
    {
        title: "Приглашение на мероприятие!",
        type: 1,

    }
]

export default function user(state = {isNotified, openedMenu, userId, userAva, userName, friendList}, action) {
    switch (action.type) {
        case "CHANGE_MENU":
            let not = action.data === 1 ? false : state.isNotified;
            return {...state, openedMenu : action.data, isNotified : not};
        default:
            return state
    }
}