import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header.jsx';
import { Banner } from '../components/Banner/Banner.jsx';
import { Menu } from '../components/Menu/Menu.jsx';
import { Gallery } from '../components/Gallery/Gallery.jsx';
import { Contact } from '../components/Contact/contact.jsx';
import { Footer } from '../components/Footer/footer.jsx';


document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
     <Banner />   
     <Menu />
     <Gallery />
     <Contact/>
    </main>
    <Footer/>
    </div>
);
