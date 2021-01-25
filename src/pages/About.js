import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import "../App.css"
import famPic from "../famPic.JPG";

function About () {
    return (
        <>
        <Header />
        <main class="container">
        <div class="row">
            <div class="col-md-12" id = "para">
                <h1>
                    About Me
                </h1>
                <img src={famPic} alt="Picture" ID="mainPic" width="200" height="200" />
                <p>Hello, My name is Cyle (Kyle with a "c"). Your attitude towards achievement, success, accomplishment,
                    and any other term you can apply to a purposeful life, begins first with your daily
                    perspective. For those who find meaning, function, and pride, in what they do in their every day routine,
                    they will find achievement, success, and accomplishment in whatever they choose. Regardless
                    of your profession or roles, there is meaning in everything we do.
                </p>
                <p>
                    I apply these same basic principles to web development. From my previous career endeavors of working
                    in
                    the financial sector, to training users of mainstream software applications, I connected my daily
                    responsibilities to the end goal of making someone's life, a little more enjoyable, a little bit
                    better, in whatever capacity that may have been.
                    In the digital age, I am proud, to do my part, to the best of my ability, to improve the flow of
                    information,
                    to improve communication, and to make this more attainable for everyone. We all do better when we
                    live in a world
                    where we all have access to what we need. This is why I strive for the best in quality when it comes
                    to web
                    development. Check out my porfolio of previous work. Contact me with any requests and questions you
                    may have.
                </p>
            </div>
        </div>
    </main>
        <Footer />
        </>
    )
}

export default About;