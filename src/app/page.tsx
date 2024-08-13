import Image from "next/image";
import Card from "./component/card";

export default function Home() {
  return (
    <main>
      <div className="container flex justify-center items-center mx-auto h-screen">
        <Card />
      </div>
      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Jan Eris M. saludo</a>.
      </footer>
    </main>
  );
}
