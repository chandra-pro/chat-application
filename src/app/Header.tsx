import Image from "next/image";
import React from "react";
import img from "../../public/—Pngtree—messenger logo icon_3595693.png";
import Link from "next/link";

const Header = () => {
  const session = false;
  if (session)
    return (
      <div>
        <header>
          <div>
            <div></div>
          </div>
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
            className="bg-blue-500 hover:bg-blue-800 text-white-300 font-bold py-2 px-4 rounded"
          >
            Sign In
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
