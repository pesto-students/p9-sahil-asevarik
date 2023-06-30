import CardWithInputFieldAndSearchBtn from "./CardComponent";
function BottomContainer({handleSearchBtnClick,handleCopyBtnClick,data=[]}){
return(
    <div class="bottom-container">
        <CardWithInputFieldAndSearchBtn urlObj={{isShortend:false}} onBtnClick={handleSearchBtnClick}/>
        {data.map(shorturlObj=>{
            console.log("url obj",shorturlObj);
          return  <CardWithInputFieldAndSearchBtn key={shorturlObj.id} urlObj={shorturlObj} onBtnClick={handleCopyBtnClick}/>
        })}
        
    </div>
);
}
export default BottomContainer;