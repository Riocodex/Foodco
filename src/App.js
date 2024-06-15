import './App.css';
import { useState } from 'react';
import section2pic from './assets/eating a variety of foods-pana.png';
import pastapic from './assets/pasta.jpeg'
import pizzapic from './assets/pizza.jpeg'
import shrimppic from './assets/shrimp.jpeg'
import rosemuffin from './assets/rosemuffin.jpeg'
import chiffonchocolate from './assets/chiffon chocolate.jpeg'
import redvelvet from './assets/redvelvet.jpeg'
import chocolatesmoothie from './assets/chocolatesmoothie.jpeg'

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
          <button className="signup-btn">Sign Up</button>
        </ul>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'rotate' : ''}`}></div>
          <div className={`bar ${isOpen ? 'rotate' : ''}`}></div>
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
          <span className='span-orange'>Who We are</span>
          <h3>Creating Events to Remember</h3>
          <span className='span-grey'>At White Table Catering, we are passionate about creating <br/> meaningful celebrations and memorable occasions.</span>
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

      <div className='menu-section'>
  <div className='menu-texts who-we-are-text'>
    <span className='span-orange'>Menus</span>
    <h3>Explore our Best Menu</h3>
    <span className='span-grey'>
      We provide the best menus on each item and even we every month <br /> 
      provide the latest menus that can be an option for you.
    </span>
  </div>

  <div className='menu-images who-we-are-images '>
    <div className='menu-image who-we-are-image'>
      <img src={rosemuffin} alt='Rose Muffin' />
      <div className='menu-images-texts'>
        <p>Rose Muffin</p>
       <p><span>$45</span></p>
      </div>
    </div>
    <div className='menu-image who-we-are-image'>
      <img src={chocolatesmoothie} alt='Chocolate Smoothie' />
      <div className='menu-images-texts'>
        <p>Chocolate Smoothie</p>
        <p><span>$15</span></p>
      </div>
    </div>
    <div className='menu-image who-we-are-image'>
      <img src={redvelvet} alt='Red Velvet' />
      <div className='menu-images-texts'>
        <p>Red Velvet</p>
        <p><span>$25</span></p>
      </div>
    </div>
    <div className='menu-image who-we-are-image'>
      <img src={chiffonchocolate} alt='Chiffon Chocolate' />
      <div className='menu-images-texts'>
        <p>Chiffon Chocolate</p>
        <p><span>$35</span></p>
      </div>
    </div>
    <div className='menu-image who-we-are-image'>
      <img src={rosemuffin} alt='Rose Muffin' />
      <div className='menu-images-texts'>
        <p>Rose Muffin</p>
       <p><span>$45</span></p>
      </div>
    </div>
    <div className='menu-image who-we-are-image'>
      <img src={chocolatesmoothie} alt='Chocolate Smoothie' />
      <div className='menu-images-texts'>
        <p>Chocolate Smoothie</p>
        <p><span>$15</span></p>
      </div>
    </div>
    <div className='menu-image who-we-are-image'>
      <img src={redvelvet} alt='Red Velvet' />
      <div className='menu-images-texts'>
        <p>Red Velvet</p>
        <p><span>$25</span></p>
      </div>
    </div>
    <div className='menu-image who-we-are-image'>
      <img src={chiffonchocolate} alt='Chiffon Chocolate' />
      <div className='menu-images-texts'>
        <p>Chiffon Chocolate</p>
        <p><span>$35</span></p>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default App;
