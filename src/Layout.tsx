import { Outlet } from 'react-router-dom';
import Nav1 from './components/nav/Nav1';
import Footer from './components/footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const Layout = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <ScrollToTop/>
      <Nav1 />
      <main className="flex-grow bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
