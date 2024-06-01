import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <nav className="fixed w-full bg-slate-100 py-4">
        <div className="w-11/12 mx-auto">
          <Link href="/" className="flex">
            <Image
              src="/assets/timeline.svg"
              alt="comment"
              width="28"
              height="30"
            />
            <p className="text-cyan-500 text-xl font-bold">IMELINE</p>
          </Link>
        </div>
      </nav>
      ;
    </>
  );
}
