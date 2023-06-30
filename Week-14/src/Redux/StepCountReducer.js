import {createStore} from "redux";
const StepCountReducer=(state=0,action)=>{
    switch (action.type){
        case "ADD":
            return state+1;
    
        case "RESET":
            return 0;
        
        default:
            return 0;
        }
} 
export const reduxStore = createStore(StepCountReducer)
