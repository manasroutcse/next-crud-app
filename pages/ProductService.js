import React from 'react';

  function getProducts() {
    return(
      <>
      <div>
        { fetch('demo/data/products.json').then(res => res.json()).then(d => d.data)}
        </div>
      </>

     
    ) 
}
export default  getProducts;
