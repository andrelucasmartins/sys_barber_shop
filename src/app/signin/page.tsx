"use client"

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function SignIn() {

  const { status } = useSession();

  if (status === "authenticated") {
    redirect("/");
  }
  async function login(formData: FormData) {
    const rawFormData = {
      email: formData.get('email'),
      password: formData.get('password')
    }
    signIn("credentials", {
      ...rawFormData,
      callbackUrl: `/dashboard`,
    });    
  }

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Digite seu e-mail abaixo para fazer login em sua conta
            </p>
          </div>
          <form className="grid gap-4" action={login}>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
              name="email"
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
              <Input
              name="password"
                id="password"
                type="password"
                required
                placeholder="********"
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login com Google
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Não tem uma conta?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/ee6lnbhr.bmp"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
