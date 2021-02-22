import './App.css';
import Header from "./Components/Header/Header";
import MainCarousel from "./Components/MainCarousel/MainCarousel";
import HighlightWeek from "./Components/HighlightWeek/HighlightWeek";
import Footer from "./Components/Footer/Footer";
function App() {
    return (
        <div className="container-fluid px-0">
            <Header></Header>
            <MainCarousel></MainCarousel>
            <HighlightWeek></HighlightWeek>
            <Footer></Footer>
        </div>
    );
}

export default App;
