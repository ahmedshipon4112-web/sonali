import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import ProductsPage from '@/pages/ProductsPage';
import WholesalePage from '@/pages/WholesalePage';
import OrderPage from '@/pages/OrderPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import { useRouter } from '@/router';

function App() {
  const { route, navigate } = useRouter();

  const renderPage = () => {
    switch (route) {
      case 'home':
        return <HomePage onNavigate={navigate} />;
      case 'products':
        return <ProductsPage onNavigate={navigate} />;
      case 'wholesale':
        return <WholesalePage onNavigate={navigate} />;
      case 'order':
        return <OrderPage />;
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      case 'contact':
        return <ContactPage onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-cream-50 font-bengali">
      <Navbar currentRoute={route} onNavigate={navigate} />
      {renderPage()}
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
