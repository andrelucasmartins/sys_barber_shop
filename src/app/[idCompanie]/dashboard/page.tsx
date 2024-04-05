import { redirect } from "next/navigation";

interface DashboardPageProps {
}

export default function DashboardPage(props: DashboardPageProps){

  const login = true

  if (login) {
    redirect("/")
  }
  
 return (
  <main>
    <h1>Dashboard</h1>
  </main>
 );
};
