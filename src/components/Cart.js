function Cart() {
    let monsteraPrice =  8;
    let lierrePrice = 10 ;              
    let fleursPrice = 15 ;
    let total = monsteraPrice + lierrePrice + fleursPrice;
     return(
       <div>
        <h2>Panier</h2>
            <ul>
              <li>monstera : {monsteraPrice} € </li>
              <li>lierre : {lierrePrice} €</li>
              <li>fleurs : {fleursPrice} €</li>
             </ul>
            <p>prix total : {total} €</p>
       </div>
         ) 
     }

     export default Cart