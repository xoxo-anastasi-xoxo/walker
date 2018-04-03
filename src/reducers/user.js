let lat = 55.761;
let lng = 37.653;
let zoom = 12;

let token;
let userId = -1;
let userAva = "../img/Lesha.jpg";
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
        description: "Моёёёё",
        date: 1521191760000,
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groupName: "Публичное событие"
    },
    {
        name: "Велосходка vip",
        date: 1521191760000,
        lat: 55.761,
        lng: 37.653,
        img: "../img/velo.png",
        type: "priv",
        groupName: "Публичное событие"
    },
    {
        name: "Велосходка_1",
        date: 1521191760000,
        lat: 55.763,
        lng: 37.62,
        img: "../img/velo.png",
        groupName: "Публичное событие"
    },
    {
        name: "Велосходка vip_2",
        date: 1521191760000,
        lat: 55.73,
        lng: 37.61,
        img: "../img/velo.png",
        type: "priv",
        groupName: "Публичное событие"
    },
    {
        name: "Велосходка_2",
        date: 1521191760000,
        lat: 55.74,
        lng: 37.61,
        img: "../img/velo.png",
        groupName: "F&F"
    }];

let userEventsOld = [
    {
        name: "Велосходка",
        description: "Примерный маршрут: набережная, Советская, Красная поляна. Выезд через 10 мнут после сбора. Не опаздывать!",
        date: 1521191760000,
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groupName: "Публичное событие"
    },
    {
        name: "Велосходка",
        description: "Примерный маршрут: набережная, Советская, Красная поляна. Выезд через 10 мнут после сбора. Не опаздывать!",
        date: 1521191760000,
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groupName: "Публичное событие"
    }
];
let userEventsAdmin = [
    {
        name: "Велосходка",
        description: "Моёёёё",
        date: 1521191760000,
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groupName: "Публичное событие"
    }
];
let eventMenu = 0;
// Какая вкладка открыта: карта, профиль, группы...
let menu = 0;
let isOpened = false;
let count = 0;

let userGroup = [
    {
        name: "F&F",
        img: "../img/default.jpg",
        isOpened: false,
        groups: [
            "Алексей Горбачев",
            "Михаил Затепякин",
            "Антон Пепеляев",
            "Анастасия Казанцева",
            "Владислава Вакуленко"
        ]
    }
];

export default function user(state = {
    userId, userAva, userName, menu, menuList,
    isOpened, userEvents, eventMenu, userEventsAdmin, userEventsOld, count,
    lat, lng, zoom, userGroup, token
}, action) {
    switch (action.type) {
        case "UPLOAD_USER_EVENTS":
            return {...state, userEvents: action.list};
        case "MOVE_TO_MAP":
            return {
                ...state, zoom: 20,
                lng: action.lng, lat: action.lat
            };
        case "OPEN_GROUPS_MENU":
            let newlist;
            switch (state.eventMenu) {
                case 0:
                    newlist = state.userEventsAdmin.slice();
                    newlist[action.index].isOpened = !newlist[action.index].isOpened;
                    return {...state, userEventsAdmin: newlist, count: state.count + 1};
                case 1:
                    newlist = state.userEvents.slice();
                    newlist[action.index].isOpened = !newlist[action.index].isOpened;
                    return {...state, userEvents: newlist, count: state.count + 1};
                case 2:
                    newlist = state.userEventsOld.slice();
                    newlist[action.index].isOpened = !newlist[action.index].isOpened;
                    return {...state, userEventsOld: newlist, count: state.count + 1};
            }
        case "START_EDIT":
            newlist = state.userEventsAdmin.slice();
            newlist[action.index].edit = true;
            return {...state, userEventsAdmin: newlist, count: state.count + 1};

        case "OPEN_USERS_MENU":
            newlist = state.userGroup.slice();
            newlist[action.index].isOpened = !newlist[action.index].isOpened;
            return {...state, userGroup: newlist, count: state.count + 1};
        case "CHANGE_EVENT_MENU":
            return {...state, eventMenu: action.data};
        case "CHANGE_MENU":
            return {...state, menu: action.data, isOpened: false, eventMenu: 0};
        case "OPEN_MENU":
            return {...state, isOpened: !state.isOpened};
        case "USER_LOGIN":
            return {...state, userId: action.id, userAva: action.ava, userName: action.name};
        default:
            return state
    }
}