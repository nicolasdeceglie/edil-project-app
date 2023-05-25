import React from "react";
import Header from "../Home/Header/Header";
import HeroArea from "../About/HeroArea/HeroArea";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "../Home/Footer/Footer";

const ContactPage = () => {
  return (
    <div>
      <Header />
      <HeroArea slug="Richiedi un preventivo" title="Richiedi un preventivo totalmente gratuito in pochi minuti" />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ContactPage;
