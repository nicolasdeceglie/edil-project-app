
import Header from "../component/Home/Header/Header";
import HeroArea from "../component/About/HeroArea/HeroArea";
import { Footer } from "flowbite-react";
import LoginForm from "../component/Home/LoginForm/LoginForm";

export default function Login({ setToken }) {


  return (
    <div>
      <Header />
      <HeroArea slug="Accedi" title="Accesso consentito agli admin del sito" />
      <LoginForm setToken={setToken}/>
      <Footer />
    </div>
  );


}