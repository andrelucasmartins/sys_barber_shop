"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaX,
} from "react-icons/fa6";

interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className="bg-foreground text-muted  scroll-mt-10" id="contact">
      <div className="bg-background text-secondary-foreground px-4">
        <div className="grid grid-flow-row auto-rows-max sm:grid-flow-col sm:auto-cols-max justify-center  sm:justify-between items-center py-4 max-w-7xl md:mx-auto ">
          <p className="text-center mt-4 md:self-end">
            © {new Date().getFullYear()} AE Digi Solutions. All rights reserved
          </p>
          <div className="flex flex-col justify-center space-x-4 mt-4 items-center sm:items-end">
            <nav className="flex flex-row gap-2">
              <Link
                href={
                  "https://wa.me/5519993028888?text=Olá%20como%20posso%20te%20ajudar?%20Somos%20AE%20Digi%20Solutions%20especialistas%20em%20desenvolvimento%20de%20Landing%20Pages,%20websites%20sistemas%20para%20aplicações%20web,%20Aplicativos."
                }
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp size={24} />
              </Link>

              <Link href={"https://www.linkedin.com/in/andreezequiel/"}>
                <FaLinkedin size={24} />
              </Link>

              <Link href="#">
                <FaFacebook size={24} />
              </Link>
              <Link href="#">
                <FaInstagram size={24} />
              </Link>
              <Link href="#">
                <FaX size={24} />
              </Link>
            </nav>
            <p className="text-center mt-4">developed by: André Ezequiel</p>
          </div>
        </div>
      </div>
      <Link
        type="button"
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-full text-sm p-4 text-center  mb-2 fixed bottom-2 right-6"
        href="https://api.whatsapp.com/send?phone=5519993028888&text=Olá, sou André, gostaria de saber mais sobre o sistema Sys Baber Shop?"
      >
        <span className="sr-only">Whatsapp</span>
        <FaWhatsapp size={30} />
      </Link>
    </footer>
  );
}
