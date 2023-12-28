import{FiHeart}from'react-icons/fi'
import{AiOutlineUser ,AiOutlineUserAdd}from'react-icons/ai'
import "../App.css"
function Nav() {
  return (
   <div className='containerAllnav'>

      <div className="nav-container">
        <input
         type="text" 
         className="search-input"
        placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">
      <a href="#">
      <FiHeart className='nav-icons'/>
      </a>

      <a href="#">
      <AiOutlineUser  className='nav-icons'/>
      </a>

      <a href="#">
      <AiOutlineUserAdd className='nav-icons'/>
      </a>

      </div>
    </div>
  )
}
export default Nav;
