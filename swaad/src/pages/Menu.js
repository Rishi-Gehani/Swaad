import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MenuListItem from '../components/MenuListItem';

const menuData = {
  sindhi: {
    image: 'https://images.unsplash.com/photo-1565557623262-b27e252489a4?auto=format&fit=crop&w=880&q=80',
    customize: {
      rice: [
        { id: 1, name: 'Jeera Rice', price: 120, description: 'Basmati rice tempered with cumin seeds.', image: 'https://via.placeholder.com/150' },
      ],
      dal: [
        { id: 3, name: 'Dal Tadka', price: 140, description: 'Yellow lentils cooked with herbs and spices.', image: 'https://via.placeholder.com/150' },
      ],
    },
    packages: [
      { id: 10, name: 'Sindhi Thali', price: 350, description: 'Dal Tadka, Jeera Rice, Roti, Salad', image: 'https://via.placeholder.com/150' },
      { id: 11, name: 'Family Sindhi Meal', price: 999, description: 'Dal Makhni, Plain Rice, Rotis, Sweet Dish', image: 'https://via.placeholder.com/150' },
    ],
  },
  gujarati: {
    image: 'https://images.unsplash.com/photo-1603894584379-38c4b18c5e67?auto=format&fit=crop&w=1170&q=80',
    customize: {
      snacks: [
        { id: 4, name: 'Dhokla', price: 100, description: 'Savory steamed cake made from gram flour.', image: 'https://via.placeholder.com/150' },
      ]
    },
    packages: [
        { id: 12, name: 'Gujarati Combo', price: 250, description: 'Dhokla, Thepla, Kadhi', image: 'https://via.placeholder.com/150' },
    ],
  },
  marathi: {
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=870&q=80',
    customize: {
      street_food: [
        { id: 8, name: 'Misal Pav', price: 90, description: 'A spicy curry of sprouted beans served with bread.', image: 'https://via.placeholder.com/150' },
      ]
    },
    packages: [
        { id: 13, name: 'Marathi Tiffin', price: 300, description: 'Misal Pav, Puran Poli, Batata Vada', image: 'https://via.placeholder.com/150' },
    ],
  },
};

const Menu = () => {
  const [searchParams] = useSearchParams();
  const [openCuisine, setOpenCuisine] = useState(null);
  // 1. REMOVED the openPackages state

  useEffect(() => {
    const cuisineFromURL = searchParams.get('cuisine');
    if (cuisineFromURL && menuData[cuisineFromURL]) {
      setOpenCuisine(cuisineFromURL);
    }
  }, [searchParams]);

  const toggleCuisine = (cuisine) => {
    setOpenCuisine(openCuisine === cuisine ? null : cuisine);
  };
  
  // 2. REMOVED the togglePackage function

  return (
    <div className="menu-page">
      <h1 className="section-title" style={{marginTop: '40px', marginBottom: '40px'}}>Explore Our Menu</h1>
      <div className="main-accordion">
        {Object.keys(menuData).map(cuisineKey => (
          <div key={cuisineKey}>
            <button 
              className="accordion-header creative-header" 
              style={{backgroundImage: `url(${menuData[cuisineKey].image})`}}
              onClick={() => toggleCuisine(cuisineKey)}
            >
              <span>{cuisineKey.charAt(0).toUpperCase() + cuisineKey.slice(1)} Cuisine</span>
            </button>
            {openCuisine === cuisineKey && (
              <div className="accordion-content">
                {/* 3. NEW two-column structure */}
                <div className="menu-columns">
                  {/* Column A: Customize Your Own */}
                  <div className="column customize-column">
                    <h3>Customize Your Own</h3>
                    {Object.keys(menuData[cuisineKey].customize).map(categoryKey => (
                      <div className="category-section" key={categoryKey}>
                        <h4 className="category-title">{categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}</h4>
                        <div className="menu-products-list">
                          {menuData[cuisineKey].customize[categoryKey].map(item => (
                            <MenuListItem key={item.id} item={item} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Column B: Our Packages */}
                  <div className="column packages-column">
                    <h3>Our Packages</h3>
                    <div className="menu-products-list">
                      {menuData[cuisineKey].packages.map(item => (
                        <MenuListItem key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;