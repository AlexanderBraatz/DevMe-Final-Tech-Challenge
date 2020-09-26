import { connect } from "react-redux";
import SideBar from "./SideBar"

const mapStatetoProps = ({players}) => ({players});


export default connect(mapStatetoProps)(SideBar);