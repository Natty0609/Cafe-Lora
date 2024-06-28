import React from 'react';
import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Header } from '../components/Header/header.jsx';
import { Banner } from '../components/Banner/Banner.jsx';
import { Menu } from '../components/Menu/Menu.jsx';
import { Gallery } from '../components/Gallery/Gallery.jsx';
import { Contact } from '../components/Contact/contact.jsx';
import { Footer } from '../components/Footer/footer.jsx';

const App = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <Banner />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const showHideNavigation = () => {
  const navBtn = document.querySelector('.nav-btn');
  const rolloutNav = document.querySelector('.rollout-nav');

  const toggleNav = () => {
    rolloutNav.classList.toggle('nav-closed');
  };

  navBtn.addEventListener('click', toggleNav);

  return () => {
    navBtn.removeEventListener('click', toggleNav);
  };
};

document.addEventListener('DOMContentLoaded', () => {
  render(<App />, document.getElementById('root'));
  showHideNavigation();
});