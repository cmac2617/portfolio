import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import "../App.css"

function Portfolio () {
    return (
        <>
        <Header />
        <main class="container">
        <div class="col-md-12">
            <h1>Portfolio</h1>
            <div class="row">
                <div class="col-xl-4 pf-pic">
                    <a href = "https://cmac2617.github.io/6-Weather-Dashboard/">Weather Dashboard</a>
                </div>
                <div class="col-xl-4 pf-pic">
                    <a href = "https://cmac2617.github.io/5-Day-Planner/">Day Planner</a>
                </div>
                <div class="col-xl-4 pf-pic">
                    <a href = "https://cmac2617.github.io/Project-1/">Music Match</a>
                </div>
            </div>
        </div>
    </main>
        <Footer />
        </>
    )
}

export default Portfolio;