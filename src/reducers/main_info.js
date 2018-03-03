const merits = [
    "Бизнес-встречи в один клик",
    "Возможность найти единомышленников",
    "Организация публичных мероприятий и вечеринок одним щелчком",
    "Карта всегда покажет события рядом с тобой"
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
        case "UPLOAD_EVENTS":
            for (let el of action.list) {
                fetch('http://walkerapp.ru:8080/events/get_public?event_id=' + el.id, {
                    method: 'GET'
                }).then(function (response) {
                    return response.json();
                }).then((value => {
                    console.log(value);
                    el.name = value.name;
                    if (value.pathToThePicture && value.pathToThePicture!=="Error")
                    el.pathToThePicture = "http://walkerapp.ru:8080/events/get_picture?path=" + value.pathToThePicture;
                    else el.pathToThePicture = "/img/default.jpg";
                            el.date = value.date;
                }));
            }
            return {...state, pubEvents: action.list};

        case "CHANGE_ANCHOR":
            return {...state, scrollHeight: action.scrol, documentHeight: action.height};
        default:
            return state
    }
}