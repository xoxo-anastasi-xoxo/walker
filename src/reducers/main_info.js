const merits = [
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
];

let scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
let documentHeight = document.body.clientHeight;

let pubEvents = [
    {
        name: "Велосходка vip",
        date: "2 дек. 18:00",
        lat: 55.761,
        lng: 37.653,
        img: "../img/velo.png",
        type: "priv"
    },
    {
        name: "Велосходка_1",
        date: "2 дек. 18:00",
        lat: 55.763,
        lng: 37.62,
        img: "../img/velo.png"
    },
    {
        name: "Велосходка vip_2",
        date: "2 дек. 18:00",
        lat: 55.73,
        lng: 37.61,
        img: "../img/velo.png",
        type: "priv"
    },
    {
        name: "Велосходка_2",
        date: "2 дек. 18:00",
        lat: 55.74,
        lng: 37.61,
        img: "../img/velo.png"
    }
]


export default function main_info(state = {merits, scrollHeight, documentHeight, pubEvents}, action) {
    switch (action.type) {
        case "CHANGE_ANCHOR":
            return {...state, scrollHeight: action.scrol, documentHeight: action.height};
        default:
            return state
    }
}