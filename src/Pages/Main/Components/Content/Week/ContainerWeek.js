import React from 'react';
import {connect} from "react-redux";
import Week from "./Week";

let mapStateToProps = (state) => {
    return {
        date:state.mainPage.date,
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {

    }
}*/
const ContainerWeek = connect(mapStateToProps)(Week)
export default ContainerWeek;