import Nav from "./componant/Nav";
import Bannar from "./componant/Bannar";
import Techsection from "./componant/Techsection";
import Playcard from "./componant/Playcard";
import { Suspense } from "react";
import type { Icard } from "./assets/types/Cardtyps";
import Footer from"./componant/Footer";

 const promissFetch=async(): Promise<Icard[]>=>{
  const res=await fetch('../data.json');
  const data=await res.json();
  return data;
 }
function App() {
 const promiss=promissFetch();
  return (
    <>
      <Nav/>
      <Bannar/>
      <Techsection />
      <Suspense fallback={<h2>loading....</h2>}>
         <Playcard promiss={promiss}/>
      </Suspense>
      <Footer />
      

      </>
  );
}

export default App
