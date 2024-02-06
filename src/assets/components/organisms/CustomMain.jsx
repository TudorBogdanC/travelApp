import CardsGallery from "../molecules/CardsGallery";
import CustomFooter from "../molecules/CustomFooter";
import CustomNavbar from "../molecules/CustomNavbar";
import Jumbotron from "../molecules/Jumbotron";



const CustomMain = () => {
    return (
        <>
           <CustomNavbar/>
           <Jumbotron/>
           <CardsGallery/>
           <CustomFooter/>
        </>
    )
}

export default CustomMain;