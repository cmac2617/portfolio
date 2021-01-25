import '../../App.css';
import './Footer.css';
import linkedInLogo from "./linkedIn.png";
import github from "./github.PNG";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer () {
    return (<footer className="footer navbar-fixed-bottom mt-auto py-3">
    <div className="container">
    <div className="row">
    <div className="col-md-12 dflex">
    <h2 className="text-center">
                        Professional Links:
                        <a href = "https://www.linkedin.com/in/cyle-mcgregor-40098313a/"><img src={linkedInLogo} id="liLink"
                            alt="Linked In" width="75" height="49"/></a>
                            <a href = "https://github.com/cmac2617"><img src={github} id="liLink"
                            alt="Github" width="75" height="49"/></a>
                    </h2>
                </div>
            </div>
        </div>
</footer>)
}

export default Footer;