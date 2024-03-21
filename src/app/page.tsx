import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { FaMaskFace } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";

export default function Home() {
  return (
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
            Sys Barber Shop
          </h1>
          <p className="text-2xl text-center">
            At SysDev Group, we are passionate about turning ideas into digital
            reality. As a leading development company systems, we combine our
            technical expertise with a Customer-centric to deliver solutions
            that drive success from our partners.
          </p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto p-4 md:p-24" id="about">
        <div className="flex flex-col space-y-14">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-3xl md:text-6xl font-bold text-center">
              About us
            </h1>
            <h2 className="text-3xl md:text-4xl text-center">SysDev Group</h2>
            <div className="min-w-20 h-1 bg-primary" />
            <p className="text-xl text-center">
              At SysDev Group, we are passionate about turning ideas into
              digital reality. As a leading development company systems, we
              combine our technical expertise with a Customer-centric to deliver
              solutions that drive success from our partners.
            </p>
            <p className="text-xl text-center">
              {
                "Our journey began with a vision to revolutionize the way businesses interact with technology. Since then, we have worked tirelessly to create innovative systems that not only meet today's needs, but also anticipate the demands of the future."
              }
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center text-center">
            <div className="flex flex-col justify-center items-center gap-4">
              <FaMaskFace size={100} />
              <div className="min-w-20 h-1 bg-secondary" />
              <h1 className="text-3xl font-bold">Biosafe</h1>
              <p className="text-xl ">
                Biosafe service with disposable gloves, mask, glasses
                protection, disposable cutting cover, equipment sanitized with
                each service, imported disposable blades and cleaning surfaces
                with Peroxy 4D (Disinfectant level hospital).
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <IoDiamond size={100} />
              <div className="min-w-20 h-1 bg-secondary" />
              <h1 className="text-3xl font-bold">Ideais</h1>
              <p className="text-xl ">
                If you like a different environment, professional work, class
                and style, schedule an appointment with us.
              </p>
            </div>
          </div>
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
  );
}
