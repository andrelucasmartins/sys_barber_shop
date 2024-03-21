import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

interface PartnerProgramPageProps {
}

export default function PartnerProgramPage(props: PartnerProgramPageProps){
 return (
   <main className="bg-secondary text-secondary-foreground">
     <div className="flex flex-col py-20 max-w-7xl mx-auto gap-4 px-4">
       <Breadcrumb>
         <BreadcrumbList>
           <BreadcrumbItem>
             <BreadcrumbLink>
               <Link href="/">Home</Link>
             </BreadcrumbLink>
           </BreadcrumbItem>
           <BreadcrumbSeparator />
           <BreadcrumbItem>
             <BreadcrumbPage>Partner Program </BreadcrumbPage>
           </BreadcrumbItem>
         </BreadcrumbList>
       </Breadcrumb>
       <h1 className="text-3xl font-bold text-primary">Partner Program</h1>
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
   </main>
 );
};
