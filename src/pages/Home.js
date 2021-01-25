import "../App.css"
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import Reactlogo from "../components/Reactlogo/Reactlogo.js";
import pic from "../pic.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home () {
    return(
        <>
        <Header />
        <img src={pic} alt="picture" className="pic"/>
        <Reactlogo />
        <Footer />
        </>
        

    )
}

export default Home;