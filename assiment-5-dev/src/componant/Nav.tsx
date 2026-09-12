import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    
       <nav className="flex justify-between items-center bg-orange-400 container mx-auto">

     <img src={logo} alt="Logo"/>
     <ul className="flex items-center justify-center gap-8 text-sm forn-medium text-gray-600 flex-1"> 
     <li>Home</li>
     <li>Technologies</li>
     <li>Projects</li>
     <li>About</li>
     <li>Contact</li>
     </ul>

     <div className="flex items-center gap-4">
      <button>Sign In</button>
      <button>Sign Up</button>
     </div>



    </nav>

  )
}

export default Nav
