import React from 'react';
import './ProductList.css';

function ProductList(props) {
    const productList = props.products.map((product) => {
        return (
            <li key={product.id}>
                <h2>{product.name}</h2>
                <img src={product.image} alt={product.name}/>
                <p>
                    {product.description.length > 150 ? (product.description.slice(0, 150)) + '...' : product.description}
                </p>
                <div className="price">{product.price} €</div>
                <div>
                <button className="button">Add to cart</button>
                </div>
            </li>
            );
    });

    return (
        <div>
            <div class="views">
            <i class="material-icons" appTooltip="list view" >
                view_list
            </i>
            <i class="material-icons" appTooltip="grid view" >
                view_module
            </i>
        </div>
        <ul>
            {productList}
        </ul>
        </div>
    );
}

export default ProductList;