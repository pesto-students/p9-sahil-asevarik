
import "./CustomButtonStyles.css"
const CustomButton = ({isGrey,onclick,title})=>{
    return (<button className={isGrey?"greybutton":""} onClick={onclick}>{title}</button>);
}
export default CustomButton;