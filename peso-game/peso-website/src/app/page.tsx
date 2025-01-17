"use client";
import { fallbackLng } from "@/app/i18n/settings";
import PreloaderSite from "@/components/shared/PreloaderSite/PreloaderSite";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push(`/${fallbackLng}`);
    }, 0);
  }, [router]);

  return (
    <>
      <PreloaderSite />
    </>
  );
}
