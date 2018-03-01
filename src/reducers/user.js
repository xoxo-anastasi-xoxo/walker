let lat = 55.76;
let lng = 37.64;
let zoom = 12;

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
        isOpened: false,
        groups: [
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум"
        ],
        description: "dfggkh gvhb bhvh vghbjiu gv nb hg jhjyhjgjnuhjb bhb hg jh  bj k  yfgjgj.dfggkh gvhb bhvh vghbjiu gv nb hg jhjyhjgjnuhjb bhb hg jh  bj k  yfgjgj.dfggkh gvhb bhvh vghbjiu gv nb hg jhjyhjgjnuhjb bhb hg jh  bj k  yfgjgj.dfggkh gvhb bhvh vghbjiu gv nb hg jhjyhjgjnuhjb bhb hg jh  bj k  yfgjgj."
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groups: [
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум"
        ]
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groups: [
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум"
        ]
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groups: [
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум"
        ]
    }
];

let userEventsOld = [
    {
        name: "уже не Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",

        isOpened: false,
        groups: [
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум"
        ]
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groups: [
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум"
        ]
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",

        isOpened: false,
        groups: [
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум"
        ]
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groups: [
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум"
        ]
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groups: [
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум"
        ]
    }
];
let userEventsAdmin = [
    {
        name: "неВелосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groups: [
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум"
        ]
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groups: [
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум"
        ]
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groups: [
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум"
        ]
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groups: [
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум"
        ]
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groups: [
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум"
        ]
    },
    {
        name: "Велосходка",
        date: "2 дек. 18:00",
        lat: 55.771,
        lng: 37.653,
        img: "../img/velo.png",
        isOpened: false,
        groups: [
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум",
            "Nana",
            "Пуум"
        ]
    }
];
let eventMenu = 0;
let menu = 0;
let isOpened = false;
let count = 0;

export default function user(state = {
    userId, userAva, userName, menu, menuList,
    isOpened, userEvents, eventMenu, userEventsAdmin, userEventsOld, count,
    lat, lng, zoom
}, action) {

    console.log("user");
    switch (action.type) {
        case "MOVE_TO_MAP":
            return {
                ...state, menu: 0, isOpened: false, eventMenu: 0,
                lng: action.lng, lat: action.lat, zoom: 15
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
        case "CHANGE_EVENT_MENU":
            return {...state, eventMenu: action.data};
        case "CHANGE_MENU":
            return {...state, menu: action.data, isOpened: !state.isOpened, eventMenu: 0};
        case "OPEN_MENU":
            return {...state, isOpened: !state.isOpened};
        case "USER_LOGIN":
            console.log(action.id);

            return {...state, userId: action.id, userAva: action.ava, userName: action.name};
        default:
            return state
    }
}