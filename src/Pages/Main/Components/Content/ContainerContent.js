import React from 'react';
import {connect} from "react-redux";
import Content from "./Content";





let mapStateToProps = (state) => {
    return {
        selectDate:state.mainPage.selectDate,

    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        onSetDate: (date) => {
            dispatch(dateDayAC(date))
        }
    }
}*/
const ContainerContent = connect(mapStateToProps)(Content);
export default ContainerContent;