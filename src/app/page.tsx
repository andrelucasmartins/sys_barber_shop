import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center justify-between">
        <section className=" bg-cover w-full bg-no-repeat p-4 md:p-24 min-h-screen grid content-center bg-blend-multiply relative">
          <Image
            src="/ee6lnbhr.bmp"
            alt="image"
            width={200}
            height={200}
            className="w-full h-full absolute object-cover brightness-50"
          />
          <div className="max-w-7xl mx-auto grid grid-cols-1 items-center justify-center content-center h-full gap-y-8 brightness-200 text-white">
            <h1 className="text-3xl md:text-6xl font-bold text-center">
              Salon Sys Shop
            </h1>
            <p className="text-2xl text-center">
              No SysDev Group, somos apaixonados por transformar ideias em
              digital realidade. Como empresa líder em desenvolvimento de
              sistemas, combinamos nossos conhecimento técnico com foco no
              cliente para fornecer soluções que impulsionam o sucesso de nossos
              parceiros.
            </p>
          </div>
        </section>
        <section className="bg-foreground text-muted w-full">
          <div className="flex flex-col  items-center py-20 max-w-7xl w-full mx-auto gap-4 px-4">
            <p className="text-3xl font-bold w-full flex-1 text-center mb-4">
              {"Let's talk about your project?"}
            </p>
            <form className="grid grid-cols-4 gap-4 w-full">
              <Input
                placeholder="Insert your name"
                type="text"
                className="  h-16 text-xl col-span-4"
              />
              <Input
                placeholder="Insert your e-mail"
                type="email"
                className="  h-16 text-xl col-span-4"
              />
              <Input
                placeholder="(xx) xxxxx-xxxx"
                type="tel"
                className="  h-16 text-xl  col-span-4 md:col-span-2"
                maxLength={15}
              />
              <Input
                placeholder="Subject"
                type="text"
                className="  h-16 text-xl col-span-4 md:col-span-2"
              />
              <Textarea
                placeholder="Type your message here."
                className="  h-48 text-xl  col-span-4"
                rows={5}
              />
              <div className="grid grid-cols-subgrid h-16 text-xl col-span-4">
                <Button className=" h-16 text-xl col-span-4 sm:col-span-2 sm:col-end-6 auto-cols-auto">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
