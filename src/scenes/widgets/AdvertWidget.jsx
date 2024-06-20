import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";


const AdvertWidget = () => {
    const {palette} = useTheme();
    const dark = palette.neutral.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;
    
    return(
        <WidgetWrapper>
        <FlexBetween>
        <Typography color = {dark} variant= "h5" fontWeight="500">
        Sponsored
        </Typography>
        <Typography color = {medium}>
        Create ad
        </Typography>
        </FlexBetween>

        <img width= "100%"
        height="auto"
        alt="advert"
        src = "https://backend-6-whhh.onrender.com/assets/image.png"
        style={{borderRadius : "0.75rem" , margin: "0.75rem 0" }}
        /> 
        
        <FlexBetween>
        <Typography color={main}>BMW</Typography>
        <Typography color={medium}>BMW.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Experience the ultimate driving pleasure with the all-new BMW.
      </Typography>
        
        </WidgetWrapper>
    )
}

export default AdvertWidget;