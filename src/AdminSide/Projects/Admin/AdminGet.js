
import { useGetToken } from "../../../_Utils/Hooks";
import Hero from "../../../UsersSIde/HeroSection/Hero";

import Nav from "../../../UsersSIde/navbar/Navbar";

export default function AdminGet ({token}) {
const url = 'http://localhost:8080/admin/projects'

const {data, isLoading, mutate} = useGetToken(url, token);

if (isLoading) {
  return <div>Caricamento in corso...</div>;
}
if(data){

  return (
  <>
   <section className="flex flex-col min-h-screen bg-slate-800 text-white bg-center bg-cover bg-blend-overlay bg-fixed bg-black/30">
        <Nav />
        <Hero />


    </section>
  </>
  )
}
}