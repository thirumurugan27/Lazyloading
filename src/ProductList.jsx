import React, { useEffect, useState } from 'react'
import './ProductList.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductList = () => {

  let [products, setProducts] = useState([])
  let [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json()
      })
      .then((product) => { setProducts(product) })
      .catch((error) => { setError(error.message) })
  }, [])

  return (
    <div className='whole'> 
      {error && <p>Error: {error}</p>}
      <div className="product-list">
        {
          products.map(product => (
            <Card key={product.id} style={{ width: '18rem' }} className='productcard'>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default ProductList