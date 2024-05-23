"use server"

import { signIn } from "@/lib/authGoogle"

export async function signInGoogleAction() {
  "use server"
  await signIn("google")
}