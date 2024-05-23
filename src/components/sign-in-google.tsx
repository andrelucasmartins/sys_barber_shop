import { signInGoogleAction } from "@/app/actions/sign-in-google";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";

export function SignInGoogle() {

  return (
    <form action={signInGoogleAction}>
      <Button variant={"outline"} className="w-full flex gap-2" type="submit">
        <FcGoogle className="size-5" /> Login com Google
      </Button>
    </form>
  );
}
