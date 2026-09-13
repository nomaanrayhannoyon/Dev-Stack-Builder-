


const Footer = () => {
  return (
              <footer className="bg-white border-t border-gray-100 mt-16 pt-12 pb-6">

                  <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12 border-b border-gray-100">
          
                    <div className="md:col-span-2 space-y-3">

                <div className="flex items-center gap-2">

              <span className="w-6 h-6 rounded bg-pink-500 text-white font-bold flex items-center justify-center text-xs">
                DS
              </span>
                    <span className="font-bold text-gray-900 text-base">Dev Stack</span>
            </div>
                     <p className="text-xs text-gray-400 max-w-sm leading-relaxed">

              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400 pt-2">

              <a href="#" className="hover:text-gray-600 transition-colors">GitHub</a>
              
                     <a href="#" className="hover:text-gray-600 transition-colors">Twitter</a>

              <a href="#" className="hover:text-gray-600 transition-colors">LinkedIn</a>
            </div>

          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xs uppe

            rcase tracking-wider mb-3">Product</h4>
                    <ul className="space-y-2 text-xs text-gray-500">


              <li><a href="#" className="hover:text-gray-800 transition-colors">Home</a></li>

              <li><a href="#" className="hover:text-gray-800 transition-colors">Technologies</a></li>
    
                      <li><a href="#" className="hover:text-gray-800 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
                           <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider mb-3">Company</h4>
            <ul className="space-y-2 text-xs text-gray-500">

                       <li><a href="#" className="hover:text-gray-800 transition-colors">About</a></li>

              <li><a href="#" className="hover:text-gray-800 transition-colors">Contact</a></li>
              
                       <li><a href="#" className="hover:text-gray-800 transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 text-xs uppercase tracking-wider mb-3">Legal</h4>
                             <ul className="space-y-2 text-xs text-gray-500">
                       <li><a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-800 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

                             <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-xs text-gray-400 gap-2">
          <p>© 2026 DevStack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>

                      <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;