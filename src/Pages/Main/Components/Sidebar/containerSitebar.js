import {eventAC} from "../../../../Redux/Reducer/mainReducer";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";


let mapStateToProps = (state) => {
    return {
        date:state.mainPage.date,
        newEventActive:state.mainPage.newEventActive
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setActive: (boolean) => {
            dispatch(eventAC(boolean))
        },
        /*onChangeDate: (date) => {
            dispatch(dateDayAC(date))
        }*/
    }
}
const ContainerSidebar = connect(mapStateToProps,mapDispatchToProps)(Sidebar)
export default ContainerSidebar;