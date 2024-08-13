"use client";
import React, { useCallback, useState } from "react";
import Button from "./button";
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  weight: ["800"],
  subsets: ["latin"],
});

export interface Quote {
  id: string;
  advice: string;
}

export default function Card() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const GenerateQuote = useCallback(async () => {
    setLoading(true);

    try {
      const res = await fetch("https://api.adviceslip.com/advice");

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setQuote(data.slip);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [disabled]);

  return (
    <div
      className={`w-[400px] mx-4 bg-dark-grayish-blue text-center rounded-md p-4 pb-8 relative ${manrope.className}`}
    >
      <h1 className="text-neon-green my-2 text-xs font-bold tracking-[4px]">
        {quote ? `ADVICE #${quote.id}` : "Advice"}
      </h1>
      <div className="flex flex-col justify-center items-center flex-grow">
        <p className="text-light-cyan text-[28px] my-2 mx-3 font-bold text-center">
          {loading
            ? "Loading..."
            : quote
            ? `“${quote.advice}”`
            : "Need some inspiration? Click below to get advice."}
        </p>
      </div>
      <div className="flex items-center mx-8">
        <hr className="flex-grow border-t border-light-cyan" />
        <p className="mx-4 text-bold text-light-cyan ">| |</p>
        <hr className="flex-grow border-t border-light-cyan" />
      </div>
      <Button
        className={`absolute bottom-[-16px] left-1/2 transform -translate-x-1/2 ${
          !loading ? "bg-neon-green" : "bg-blue-200"
        }`}
        onClick={GenerateQuote}
        isDisable={loading}
      >
        <Image
          src={"images/icon-dice.svg"}
          alt="dice-button"
          width={18}
          height={18}
        />
      </Button>
    </div>
  );
}
