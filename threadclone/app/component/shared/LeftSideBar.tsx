"use client";
import React from "react";
import { sidebarLinks } from "@/constans";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { SignOutButton, SignedIn } from "@clerk/nextjs";

function LeftSideBar() {
  const router=useRouter()
  const pathName = usePathname();
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((x) => {
          const active =
            (pathName.includes(x.route) && x.route.length > 1) ||
            x.route === pathName;
          return (
            <div className="">
              <Link
                href={x.route}
                key={x.label}
                className={`leftsidebar_link ${active && " bg-primary-500"}`}
              >
                <Image src={x.imgURL} alt="sideBar" width={24} height={24} />
                <p className=" text-light-1 mx-lg:hidden">{x.label}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton signOutCallback={() => {
            router.push("/sign-in")
          }}>
            <div className="flex cursor-pointer gap-4 p-4">
              <Image src="/logout.svg" alt="logout" width={24} height={24} />
            <p className="text-light-2 mx-lg-hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}

export default LeftSideBar;
