import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20"> {/* Add top padding for fixed header */}
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;