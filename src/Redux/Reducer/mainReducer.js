import moment from "moment";

const DATE_DAY="DATE_DAY";


let initialState = {
    date:"08.01.2022"
}

const mainReducer = (state = initialState, action) => { //используем в нвчале

    switch (action.type) {

        case DATE_DAY:
         /*   action.date=moment(action.date).format('DD MMMM YYYY - dddd')*/
            return {...state, date: action.date} /*каждый раз будет добовлять новых юзеров*/


        default:
            return state;
    }
}


export const dateDayAC = (date) => ({type: DATE_DAY, date})

export default mainReducer;

