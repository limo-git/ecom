import './App.css'
import Cart from '../src/components/Cart.js'
import Card from '../src/components/Card.js'
import { useState } from 'react';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  const products =  [
    {
      img:'https://rukminim2.flixcart.com/image/850/1000/xif0q/cap/c/y/m/free-latest-side-ny-baseball-cap-highever-original-imagnm8fvyf9jbpv.jpeg?q=90&crop=false',
      name:'cap',
      price: 300

    },
    {
      img:'https://5.imimg.com/data5/SELLER/Default/2020/10/MD/ZJ/SY/36863503/m9160c-standard.jpg',
      name:'shoes',
      price: 80000

    },
    {
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaXx0ACtYca_cGguV-3oHVNS5h6szP7TzkuKwetssfkrd7W1s4SmALib0VNxnWdf5S0_I&usqp=CAU',
      name:'Tshirt',
      price: 500

    },
    {
      img:'https://cdn.pixelspray.io/v2/black-bread-289bfa/iix9pB/wrkr/t.resize(h:600,w:510)/data/gas/21072022/410316769_A222_1.jpg',
      name:'jeans',
      price: 1000

    },
  ]



  return (
    <div className="App">
      <Cart cartItems={cartItems}></Cart>
      <Card product={products} addToCart={addToCart}></Card>
    </div>
  );
}

export default App;
