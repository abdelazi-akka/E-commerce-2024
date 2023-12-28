import Navigation from "./Navigation/Nav";
import Products from "./Products/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./App.css"
 function App() {
  return (
   
    <div className="containerAll">  
     
      <div className="contenall"> 
        <Navigation/>  
        <Recommended/> 
        <Products/> 
        </div>  
        <Sidebar/>
      
    </div> 
  );
}
export default App;

