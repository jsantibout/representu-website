import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About"

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20"> {/* Add top padding for fixed header */}
        <About /> 
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;