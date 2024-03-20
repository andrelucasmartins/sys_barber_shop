"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaX,
} from "react-icons/fa6";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <footer className="bg-black text-white  scroll-mt-10" id="contact">
      <div className="flex flex-col  items-center py-20 max-w-7xl mx-auto gap-4 px-4">
        <p className="text-3xl font-bold w-full flex-1 text-center mb-4">
          {"Let's talk about your project?"}
        </p>
        <form className="grid grid-cols-4  dark gap-4 w-full">
          <Input
            placeholder="Insert your name"
            type="text"
            className=" bg-black border-white h-16 text-xl col-span-4"
          />
          <Input
            placeholder="Insert your e-mail"
            type="email"
            className=" bg-black border-white h-16 text-xl col-span-4"
          />
          <Input
            placeholder="(xx) xxxxx-xxxx"
            type="tel"
            className=" bg-black border-white h-16 text-xl  col-span-4 md:col-span-2"
            maxLength={15}
          />
          <Input
            placeholder="Subject"
            type="text"
            className=" bg-black border-white h-16 text-xl col-span-4 md:col-span-2"
          />
          <Textarea
            placeholder="Type your message here."
            className=" bg-black border-white h-48 text-xl  col-span-4"
            rows={5}
          />
          <div className="grid grid-cols-subgrid h-16 text-xl col-span-4">
            <Button className=" h-16 text-xl col-span-4 sm:col-span-2 sm:col-end-6 auto-cols-auto">
              Send
            </Button>
          </div>
        </form>
      </div>
      <div className="bg-white text-black px-4">
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
