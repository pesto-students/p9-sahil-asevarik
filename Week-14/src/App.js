import CustomButton from "./components/CustomButton";
import {connect} from "react-redux";
import "./App.css";
import { add, reset } from "./Redux/action";
import { useEffect } from "react";
import ReactGA from 'react-ga';


function App({steps,dispatch}) {
  useEffect(()=>{
    //testing google analytics in react app
    ReactGA.pageview(window.location.pathname)
  },[])
  
  
  return (
    <div>
      You've have walked {steps} Steps today!
    <CustomButton title={"Add a Step"} isGrey={true} onclick={()=>dispatch(add())}/>

    <CustomButton title={"Reset Steps"} onclick={()=>dispatch(reset())}/>
    </div>
  );
}
function mapStateToProps(state){
  return {
    steps:state
  }
}
const ReduxApp = connect(mapStateToProps)(App)
export default ReduxApp;
