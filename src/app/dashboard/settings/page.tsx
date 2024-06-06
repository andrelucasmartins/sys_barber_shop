import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Settings() {
  const actionHours = async (formData: FormData) => {
    'use server'
    let data: { [key: string]: any } = {};

    for (const [key, value] of formData) {
      data[key] = value;
    }
  };
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Configurações</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav
            className="grid gap-4 text-sm text-muted-foreground"
            x-chunk="dashboard-04-chunk-0"
          >
            <Link href="#" className="font-semibold text-primary">
              Geral
            </Link>
            <Link href="#">Segurança</Link>
            <Link href="#">Integrações</Link>
            <Link href="#">Suporte</Link>
            <Link href="#">Organizações</Link>
            <Link href="#">Avançado</Link>
          </nav>
          <div className="grid gap-6">
            <form method="post">
              <Card x-chunk="dashboard-04-chunk-1">
                <CardHeader>
                  <CardTitle>Nome da loja</CardTitle>
                  <CardDescription>
                    Usado para identificar sua loja no marketplace.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Input placeholder="Nome da Loja" required />
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Salvar</Button>
                </CardFooter>
              </Card>
            </form>
            <form method="post" action={actionHours}>
              <Card x-chunk="dashboard-04-chunk-1">
                <CardHeader>
                  <CardTitle>Horário de funcionamento</CardTitle>
                  <CardDescription>
                    Usado para identificar sua loja no marketplace.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
                    <Input
                      placeholder="Horário de abertura"
                      required
                      name="open"
                      type="time"
                    />
                    <Input
                      placeholder="Horário de fechamento"
                      required
                      name="close"
                      type="time"
                    />
                      <RadioGroup defaultValue="30" className="flex flex-row gap-4" name="time" required>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="00:15" id="r1" />
                          <Label htmlFor="r1">15 min</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="00:30" id="r2" />
                          <Label htmlFor="r2">30 min</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="01:00" id="r3" />
                          <Label htmlFor="r3">1 hora</Label>
                        </div>
                      </RadioGroup>
                  </div>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                  <Button>Salvar</Button>
                </CardFooter>
              </Card>
            </form>
            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Plugins Directory</CardTitle>
                <CardDescription>
                  The directory within your project, in which your plugins are
                  located.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <Input
                    placeholder="Project Name"
                    defaultValue="/content/plugins"
                  />
                  <div className="flex items-center space-x-2">
                    <Checkbox id="include" defaultChecked />
                    <label
                      htmlFor="include"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Allow administrators to change the directory.
                    </label>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Salvar</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
