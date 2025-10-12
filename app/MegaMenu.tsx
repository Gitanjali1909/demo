import React from 'react';

export default function MegaMenu() {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '24px', padding: '16px', flexWrap: 'wrap' }}>
        <li style={{ position: 'relative' }}>
          <button>Products</button>
          <div className="mega-menu">
            <div>
              <h3>Electronics</h3>
              <ul>
                <li>Phones</li>
                <li>Laptops</li>
                <li>Cameras</li>
              </ul>
            </div>
            <div>
              <h3>Clothing</h3>
              <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
              </ul>
            </div>
            <div>
              <h3>Home</h3>
              <ul>
                <li>Furniture</li>
                <li>Kitchen</li>
                <li>Decor</li>
              </ul>
            </div>
          </div>
        </li>
        <li><button>About</button></li>
        <li><button>Contact</button></li>
      </ul>
    </nav>
  );
}
