import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { FaMaskFace } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col items-center justify-between">
        <section className=" bg-cover w-full bg-no-repeat p-4 md:p-24 min-h-screen grid content-center bg-blend-multiply relative">
          <Image
            src="/dread.webp"
            alt="image"
            width={200}
            height={200}
            className="w-full h-full absolute object-cover brightness-50"
          />
          <div className="max-w-7xl mx-auto grid grid-cols-1 items-center justify-center content-center h-full gap-y-8 brightness-200 text-white">
            <h1 className="text-3xl md:text-6xl font-bold text-center text-primary">
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
        <section className="max-w-7xl mx-auto p-4 md:p-24" id="about">
          <div className="flex flex-col space-y-14">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-3xl md:text-6xl font-bold text-center">
                Sobre nós
              </h1>
              <h2 className="text-3xl md:text-4xl text-center">SysDev Group</h2>
              <div className="min-w-20 h-1 bg-primary" />
              <p className="text-xl text-center">
                No SysDev Group, somos apaixonados por transformar ideias em
                realidade digital. Como empresa líder em desenvolvimento de
                sistemas, combinamos nosso conhecimento técnico com uma
                abordagem centrada no cliente para fornecer soluções que
                impulsionam o sucesso de nossos parceiros.
              </p>
              <p className="text-xl text-center">
                Nossa jornada começou com a visão de revolucionar a forma como
                as empresas interagem com a tecnologia. Desde então, temos
                trabalhado incansavelmente para criar sistemas inovadores que
                não apenas atendam às necessidades atuais, mas também antecipem
                as demandas do futuro.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center text-center gap-x-8">
              <div className="flex flex-col justify-center items-center gap-4">
                <FaMaskFace size={100} />
                <div className="min-w-20 h-1 bg-secondary" />
                <h1 className="text-3xl font-bold">Bioseguro</h1>
                <p className="text-xl hyphens-auto">
                  Atendimento Biosseguro com luvas descartáveis, máscara, óculos
                  de proteção, capa de corte descartável, equipamentos
                  higienizados a cada atendimento, lâminas descartáveis
                  importadas e limpeza de superfícies com Peroxy 4D
                  (Desinfetante nível hospitalar).
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <IoDiamond size={100} />
                <div className="min-w-20 h-1 bg-secondary" />
                <h1 className="text-3xl font-bold">Ideais</h1>
                <p className="text-xl hyphens-auto">
                  Se você gosta de um ambiente diferente, trabalho profissional,
                  classe e estilo, agende um horário conosco.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-foreground text-muted w-full" id="contact">
          <div className="flex flex-col  items-center py-20 max-w-7xl w-full mx-auto gap-4 px-4">
            <p className="text-3xl font-bold w-full flex-1 text-center mb-4">
              {"Em que posso te ajudar?"}
            </p>
            <form className="grid grid-cols-4 gap-4 w-full">
              <Input
                placeholder="Insira seu nome"
                type="text"
                className="  h-16 text-xl col-span-4"
              />
              <Input
                placeholder="Seu e-mail"
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
                placeholder="Assunto"
                type="text"
                className="  h-16 text-xl col-span-4 md:col-span-2"
              />
              <Textarea
                placeholder="Mensagem"
                className="  h-48 text-xl  col-span-4"
                rows={5}
              />
              <div className="grid grid-cols-subgrid h-16 text-xl col-span-4">
                <Button className=" h-16 text-xl col-span-4 sm:col-span-2 sm:col-end-6 auto-cols-auto">
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
