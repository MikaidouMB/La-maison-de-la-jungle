import './../styles/Cart.css'


function Cart() {
    let monsteraPrice =  8;
    let lierrePrice = 10 ;              
    let fleursPrice = 15 ;
    let total = monsteraPrice + lierrePrice + fleursPrice;
     return(
       <div className="lmj-cart">
        <h2>Panier</h2>
              monstera : {monsteraPrice} € <br></br>
              lierre : {lierrePrice} €<br></br>
              fleurs : {fleursPrice} €<br></br>
            <p className='total-cart'>prix total : {total} €</p>
       </div>
         ) 
     }

     export default Cart