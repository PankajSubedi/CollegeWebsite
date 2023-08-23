import "./App.css";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import FAQs from "./components/FAQs";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Courses from "./components/Courses";

function App() {
  return (
    <div className="container">
      <Topbar />
      <Navbar />

      <Hero />
      {/* events starts here
       */}

      <Events />

      {/* events ends here */}

      {/* courses */}

      <Courses />

      {/* courses ends
       */}

      <Team />

      {/* about */}
      <About />

      {/* testimonial  */}

      <Testimonial />

      {/* faqs */}

      <div className="faqsTop">
        <h1>FAQs</h1>
      </div>

      <FAQs />

      {/* contsct */}

      <Contact />

      {/* footer */}

      <Footer />
    </div>
  );
}

export default App;
