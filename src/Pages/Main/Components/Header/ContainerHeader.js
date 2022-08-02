import React from "react";
import {connect} from "react-redux";

import Header from "./Header";
import {selectDateAC} from "../../../../Redux/Reducer/mainReducer";




let mapStateToProps = (state) => {
    return {
        date:state.mainPage.date,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSetSelectDate: (value) => {
            dispatch(selectDateAC(value))
        }
    }
}
const ContainerHeader = connect(mapStateToProps,mapDispatchToProps)(Header);
export default ContainerHeader;