import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button asChild>
        <Link href={'/sign-up/step/info'}>
          go to main step
        </Link>
      </Button>
    </div>
  );
}
