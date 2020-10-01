import { connect } from "react-redux";
import App from "./App"

const mapStateToProps = ({startView, matchView, endView}) => (
    {
        startView, 
        matchView,
        endView,
    }
);



export default connect(mapStateToProps)(App);