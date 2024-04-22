"use client"

import { signOut } from "next-auth/react";

interface LogoutButtonProps {
}

export function LogoutButton(props: LogoutButtonProps){
 return (
  <div onClick={()=> signOut()}>Sair</div>
 );
};
