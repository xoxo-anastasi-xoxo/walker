const merits = [
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
    "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
];

let scrollHeight =   window.pageYOffset || document.documentElement.scrollTop;
let documentHeight = document.body.clientHeight;



export default function main_info(state = {merits, scrollHeight, documentHeight}, action) {
    switch (action.type) {
        case "CHANGE_ANCHOR":
            return {...state, scrollHeight: action.scrol, documentHeight: action.height};
        default:
            return state
    }
}