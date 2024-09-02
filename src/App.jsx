import "./App.css";
import DetermineSection from "./components/DetermineSection/DetermineSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import GetSmarterSection from "./components/GetSmarterSection/GetSmarterSection.jsx";
import Main from "./components/Main/Main.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import ReadOrListenSection from "./components/ReadOrListenSection/ReadOrListenSection.jsx";
import ReviewsSection from "./components/ReviewsSection/ReviewsSection.jsx";
import SummarySection from "./components/SummarySection/SummarySection.jsx";

function App() {
  return (
    <>
      <Navigation />
      <Main />
      <GetSmarterSection />
      <SummarySection />
      <DetermineSection />
      <ReadOrListenSection />
      <ReviewsSection />
      <Footer/>
    </>
  );
}

export default App;
