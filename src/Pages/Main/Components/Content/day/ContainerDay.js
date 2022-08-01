import React, {useState} from 'react';
import {connect} from "react-redux";
import Day from "./Day";




let mapStateToProps = (state) => {
    return {
        date:state.mainPage.date,
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {

    }
}*/
const ContainerDay=connect(mapStateToProps)(Day)
export default ContainerDay;