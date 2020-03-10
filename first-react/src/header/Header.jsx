import React from 'react';
import './Header.css';

function Header() {
    return (
        <header class="wrapper">
            <i class="material-icons">
                menu
            </i>
            <div>
                Bootcamp Ecommerce
            </div>
            <i class="material-icons">
                shopping_cart
            </i>
        </header>
    );
}

export default Header;