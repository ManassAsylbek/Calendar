import React from "react";
import {connect} from "react-redux";

import Header from "./Header";




let mapStateToProps = (state) => {
    return {
        date:state.mainPage.date,
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {

    }
}*/
const ContainerHeader = connect(mapStateToProps)(Header);
export default ContainerHeader;