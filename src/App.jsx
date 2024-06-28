import './App.css'
import './tailwind.css';
import './assets/css/main.css'
import $ from "jquery";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Project from './pages/Project';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import Cpage from './pages/Cpage';
import Pricing from './pages/Pricing';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Hireing from './pages/Hireing';
import Blogdetails from './pages/Blogdetails';
import Blog from './pages/Blog';
import Get_quote from './pages/Get_quote';
import ServiceAndro from './pages/ServiceAndro';
import ServiceDM from './pages/ServiceDM'
import ServiceIt from './pages/ServiceIt'
import ServiceSMK from './pages/ServiceSMK'
import ServiceGd from './pages/ServiceGd'
import ServiceG from './pages/ServiceG'
import ServiceIm from './pages/ServiceIm'
import ServiceMata from './pages/ServiceMata'
import Serviceseo from './pages/Serviceseo'
import ServiceWeb from './pages/ServiceWeb'
import Wordpress from './pages/Wordpress';
import Shopify from './pages/Shopify';
import Commerce from './pages/Commerce';
import PrivacyPolicy from './components/PrivacyPolicy';
import Refundpolicy from './components/Refundpolicy';
import Termsandconditions from './components/Termsandconditions';
import Team_Details from './pages/Team_Details';

function App() {

  return (
    <>

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog-details' element={<Blogdetails />} />
          <Route path='/hire' element={<Hireing />} />
          <Route path='/other' element={<Cpage />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/project' element={<Project />} />
          <Route path='/team' element={<Team />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/error' element={<Error />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/get-quote' element={<Get_quote />} />
          <Route path='/android-development' element={<ServiceAndro />} />
          <Route path='/team-details' element={<Team_Details />} />
          <Route path='/digital-marketing' element={<ServiceDM />} />
          <Route path='/graphic-designing' element={<ServiceGd />} />
          <Route path='/google' element={<ServiceG />} />
          <Route path='/influencer-marketing' element={<ServiceIm />} />
          <Route path='/it-service' element={<ServiceIt />} />
          <Route path='/meta' element={<ServiceMata />} />
          <Route path='/seo' element={<Serviceseo />} />
          <Route path='/social-media' element={<ServiceSMK />} />
          <Route path='/web-development' element={<ServiceWeb />} />
          <Route path='/wordpress' element={<Wordpress />} />
          <Route path='/shopify' element={<Shopify />} />
          <Route path='/e-commerce' element={<Commerce />} />
          <Route path='/Privacy-Policy' element={<PrivacyPolicy />} />
          <Route path='/Refund-Policy' element={<Refundpolicy />} />
          <Route path='/terms-conditionas' element={<Termsandconditions />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
