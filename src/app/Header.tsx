import Image from "next/image";
import React from "react";
import img from "../../public/—Pngtree—messenger logo icon_3595693.png";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const session = true;
  if (session)
    return (
      <div>
        <header className="sticky top-0 z-50 bg-slate-700 py-2 flex justify-between">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex space-x-2 items-center">
              <Image
                className="rounded-full mx-5 my-3"
                src="https://tse1.mm.bing.net/th?id=OIP.62vIM9Jk0un2ldc2g2u1ZAHaHa&pid=Api&P=0&h=180"
                alt="logo pic"
                height={100}
                width={50}
              />
              <p className="text-white-400 text-bold">Welcome Chandra</p>
            </div>
          </div>
          <LogoutButton />
        </header>
      </div>
    );
  return (
    <div>
      <header className="sticky top-0 z-50">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-2 items-center">
            <Image src={img} alt="logo pic" height={150} width={100} />
            <p className="text-blue-400">Welcome to Real Chat Messanger</p>
          </div>
          <Link
            href="/auth/signin"
            className="bg-blue-500 hover:bg-blue-800 text-white-300 font-bold py-2 px-4 rounded animate-bounce transition-colors duration-200 ease-in-out"
          >
            Sign In
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
