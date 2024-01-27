import '../styles/Card.css'


function Card({product,addToCart}) {
    
return (
    <>
    <div className='cardFlex'>
        {
            product.map((productComp, productIndex) => {
                return(
                    
                        <div className='infoFlex' key={productIndex}>
                           <img src={productComp.img}></img>
                            <p>{productComp.name}</p>
                            <p>Rs {productComp.price}</p>
                            <button onClick={()=>addToCart(productComp)}>add to card</button>


                        </div>
                        
                )
            })
        }
    </div>
    </>
    
)
}

export default Card