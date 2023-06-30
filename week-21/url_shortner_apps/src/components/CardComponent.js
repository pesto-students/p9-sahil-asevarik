import { Button, Card, TextField } from "@mui/material";
import { useRef } from "react";

function CardWithInputFieldAndSearchBtn({ onBtnClick, urlObj }) {
    const textref = useRef(urlObj.shoternedUrl);
    return (
        <Card variant="outlined" sx={{
            backgroundColor:'rgba(98 , 158 , 245, 0.5)',
            height: "15vh",
            width: "50vw",
            alignSelf: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px"
        }}>
            <TextField id="standard-basic" label={urlObj.isShortend ? "" : "shorten the link here..."} variant="outlined" sx={{
                width: "35vw"
            }}
                inputRef={textref}
                defaultValue={urlObj.shoternedUrl}
                disabled={urlObj.isShortend ? true : false}
            />
            <Button variant="outlined" onClick={() => {

                onBtnClick(textref.current.value)
                if(!urlObj.isShortend){
                    textref.current.value = "";
                }
               
            }

            }

            >{urlObj.isShortend ? "copy" : "Shorten it!"}</Button>
        </Card >
    );
}
export default CardWithInputFieldAndSearchBtn;