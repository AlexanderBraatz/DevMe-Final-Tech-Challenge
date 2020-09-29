import { connect } from "react-redux";
import App from "./App"

const mapStateToProps = ({startView, matchView}) => (
    {
        startView, 
        matchView, 
    }
);



export default connect(mapStateToProps)(App);