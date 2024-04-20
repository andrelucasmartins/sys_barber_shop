import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

interface DashboardPageProps {
}

export default async function DashboardPage(props: DashboardPageProps){
  const session = await getServerSession()


  if (!session) {
    redirect("/")
  }
  
 return (
  <main>
    <div>Olá, {session?.user?.name}</div>
    <h1>Dashboard</h1>
  </main>
 );
};
