import  { use, useState } from 'react';
import type { Icard } from '../assets/types/Cardtyps';

interface CardProps {
  promiss: Promise<Icard[]>;
}

const Playcard = ({ promiss }: CardProps) => {
        const data = use(promiss);
  const [selectedStack, setSelectedStack] =  useState<Icard[]>([]);

      const handleAddToStack = (tech: Icard) => {
                  setSelectedStack((prev) => {
      const exists = prev.some((item) => item.id === tech.id);
                   if (exists) return prev;
      return [...prev, tech];
             });
  };

  
  const handleRemove = (id: string | number) => {


    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
  };

 
  const handleRemoveAll = () => {



    setSelectedStack([]);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">


      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
     
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((item) => {


            const { id, name, icon, description, category, badge, rating } = item;
            
            return (
              <article 

                key={id} 
                      className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  
                  <div className="flex items-start justify-between mb-4">


                     <div className="w-10 h-10 flex items-center justify-center text-3xl">
                      {icon}
                    </div>
                    {badge && (

                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-500">
                        {badge}

                      </span>
                    )}
                  </div>

                 
                  <h3 className="font-bold text-gray-900 text-base mb-1">{name}</h3>
                              <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">


                    {description}
                  </p>
                </div>

                <div>
                
                                <div className="flex items-center justify-between text-xs text-gray-500 mb-4 pt-2 border-t border-gray-50">
                    <div className="flex gap-2">

                      
                      <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{category}</span>
                     
                      <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">Beginner-Friendly</span>
                         </div>
                                <div className="flex items-center gap-1 font-semibold text-gray-700">
  
                      <span className="text-yellow-400">★</span>

                      <span>{rating || "4.8"}</span>
                    </div>
                  </div>

                
                  <button
                          onClick={() => handleAddToStack(item)}

                    className="w-full bg-slate-950 hover:bg-black text-white text-xs font-medium py-2.5 rounded-lg transition-colors"
                  >
                    Add to Stack
                  </button>

                </div>
                
                     </article>
            );

          })}
        </div>


        <aside className="lg:col-span-1 bg-white rounded-xl border border-gray-100 p-5 shadow-sm sticky top-6">
                       <h2 className="font-bold text-gray-900 text-base">Your Stack</h2>


          <p className="text-xs text-gray-400 mb-4">

            {selectedStack.length} Technology Selected
          </p>

        

          <div className="space-y-2 mb-6">
                         {selectedStack.length === 0 ? (

              <div className="text-xs text-gray-400 italic py-6 text-center border border-dashed rounded-lg">
                No items added yet

              </div>

            ) : (

                         selectedStack.map((stacked) => (
                <div 
                  key={stacked.id} 

                  className="flex items-center justify-between p-2.5 bg-gray-50 border border-gray-100 rounded-lg"
                >
                  <div className="flex items-center gap-2">

                          <span className="text-lg">{stacked.icon}</span>

                    <span className="text-xs font-semibold text-gray-700">{stacked.name}</span>
                  </div>
                  <button
                    onClick={() => handleRemove(stacked.id)}

                    className="text-gray-400 hover:text-red-500 text-xs px-1 font-bold"
                  >
                    

                  </button>
                </div>
              ))
            )}
          </div>

      
          <button
            onClick={handleRemoveAll}

            disabled={selectedStack.length === 0}
            
            className="w-full border border-red-200 hover:bg-red-50 text-red-500 disabled:opacity-40 text-xs font-medium py-2 rounded-lg transition-colors"
          >
            Remove All
          </button>
        </aside>

      </div>
    </div>
  );
};

export default Playcard;