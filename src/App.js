import './App.css';
import { useState } from 'react';
import section2pic from './assets/eating a variety of foods-pana.png';
import pastapic from './assets/pasta.jpeg'
import pizzapic from './assets/pizza.jpeg'
import shrimppic from './assets/shrimp.jpeg'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <nav>
        <div className="logo">
          <h1>Foodco<span>.</span></h1>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>VOUCHERS</li>
          <li>FEATURES</li>
          <li>PRICING</li>
          <li>BLOG</li>
        </ul>
        <button className="signup-btn">Sign Up</button>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'rotate' : ''}`}></div>
        </div>
      </nav>

      <div className='second-section'>
        <div className='text-side'>
          <h1>All-time <span>Highest</span> Rated Recipes</h1>
          <p>We source sustainable & line caught seafood, as well as live crustaceans everyday</p>
        </div>
        <div className='image-side'>
          <img src={section2pic} alt="A variety of foods" />
        </div>
      </div>


      <div className='who-we-are'>
        <div className='who-we-are-text'>
          <p>Who We are</p>
          <h3>Creating Events to Remember</h3>
          <span>At White Table Catering, we are passionate about creating meaningful celebrations and memorable occasions.</span>
        </div>
        <div className='who-we-are-images'>
          <div className='who-we-are-image'>
            <img src={pizzapic} alt="" />
            <p>On branch level, you can specify which items and options to show as well as you can specify their prices</p>
            <button>Explore</button>
          </div>
          <div className='who-we-are-image'>
            <img src={shrimppic} alt="" />
            <p>On branch level, you can specify which items and options to show as well as you can specify their prices</p>
            <button>Explore</button>
          </div>
          <div className='who-we-are-image'>
            <img src={pastapic} alt="" />
            <p>On branch level, you can specify which items and options to show as well as you can specify their prices</p>
            <button>Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
