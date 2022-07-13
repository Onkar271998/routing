import {Link} from "react-router-dom"


function Navbar (){
    return(
        <div>
           <Link to="/Home" >
          Home
        </Link>
      
        <Link to="/AllProducts" >
          Products
        </Link>
        </div>
    )
}
export default Navbar;