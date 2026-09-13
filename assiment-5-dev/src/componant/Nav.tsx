import logo from "../assets/logo-text.png";

const Nav = () => {
  return (
    
       <nav className="flex justify-between items-center mt-4" px-4 >

     <img src={logo} alt="Logo"className="h-8 object-contain ml-6"/>
     <ul className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-gray-600 flex-1"> 
     <li className="text-pink-600">Home</li>
     <li>Technologies</li>
     <li>Projects</li>
     <li>About</li>
     <li>Contact</li>
     </ul>

     <div className="flex items-center gap-4">
      <button className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors mr-3">Sign In</button>
      <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors mr-6">Sign Up</button>
     </div>



    </nav>

  )
}

export default Nav
