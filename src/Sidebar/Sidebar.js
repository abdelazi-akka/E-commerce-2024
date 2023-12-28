import Category from './Category'
import Price from '../Price/Price'
import Colors from '../Colors/Colors'
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import "../App.css"

 function Sidebar() {
  return (
    <>
        <section className="sidebar">
            <div className="logo-container">
                <h1>Akka-SHOP <PiShoppingCartSimpleDuotone /></h1>
            </div>
           
            <div className='containercatego'> 

           
            <Category/>
            <Price/> 
            <Colors/>
            </div>
        </section>
    </>
  )
}
export default Sidebar;
