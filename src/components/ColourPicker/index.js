import { connect } from "react-redux";
import ColourPicker from "./ColourPicker"


const mapStateToProps = ({colours},{color, onChoiceComplete}) => ({colours,color,onChoiceComplete});



export default connect(mapStateToProps)(ColourPicker);