import bannarimg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12">

    <div>
     <h1 className="text-4xl md:text-5xl  font-extrabold  text-gray-900 leading-tight">
         Build Your Ideal <br/>
         <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"
         >
           Development Stack
         </span>
     </h1>
        <p className="text-gray-600 text-base md:text-lg max-w-lg mt-4 m-6">
            Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
   <button type="button" className=" bg-orange-500 flex gap-4 text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-200">
    Explore Technologies
   </button>
   <button type="button"className="border border-gray flex gap-4 300 text- gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-200">
    Learn More
   </button>
    </div>
    
    </div>
    <div className="flex-1 flex justify-center">
      <img src={bannarimg} alt="banner" className="w-full max-w-md"/>

    </div>

  
  
    </section>
  )
}

export default Banner
