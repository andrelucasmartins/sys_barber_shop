import { FaMaskFace } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";

interface AboutUsProps {
}

export default function AboutUs({...props }: AboutUsProps){
 return (
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
           realidade digital. Como empresa líder em desenvolvimento de sistemas,
           combinamos nosso conhecimento técnico com uma abordagem centrada no
           cliente para fornecer soluções que impulsionam o sucesso de nossos
           parceiros.
         </p>
         <p className="text-xl text-center">
           Nossa jornada começou com a visão de revolucionar a forma como as
           empresas interagem com a tecnologia. Desde então, temos trabalhado
           incansavelmente para criar sistemas inovadores que não apenas atendam
           às necessidades atuais, mas também antecipem as demandas do futuro.
         </p>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-center text-center gap-x-8">
         <div className="flex flex-col justify-center items-center gap-4">
           <FaMaskFace size={100} />
           <div className="min-w-20 h-1 bg-secondary" />
           <h1 className="text-3xl font-bold">Bioseguro</h1>
           <p className="text-xl hyphens-auto">
             Atendimento Biosseguro com luvas descartáveis, máscara, óculos de
             proteção, capa de corte descartável, equipamentos higienizados a
             cada atendimento, lâminas descartáveis importadas e limpeza de
             superfícies com Peroxy 4D (Desinfetante nível hospitalar).
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
 );
};
