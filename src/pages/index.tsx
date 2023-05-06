import Image from "next/image";
import { Montserrat, Fraunces } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-montserrat",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-fraunces",
});

export default function Home() {
  return (
    <main className="md:h-screen md:v-screen md:flex md:items-center md:justify-center">
      <div className="bg-white my-7 mx-4 rounded-10px pb-6 md:pb-0 md:flex md:w-150">
        <Image
          alt="Perfume"
          src="/images/image-product-mobile.jpg"
          width={686}
          height={480}
          className="object-fill h-60 w-full rounded-t-10px md:hidden"
          priority
        />
        <Image
          alt="Perfume"
          src="/images/image-product-desktop.jpg"
          width={300}
          height={450}
          className="object-fill rounded-lg hidden md:block"
          priority
        />
        <div className="mx-6 mt-6 md:mx-8 md:mt-8">
          <div
            className={`${montserrat.variable} font-monserrat text-xs mb-5 text-aurometal`}
          >
            PERFUME
          </div>
          <div
            className={`${fraunces.variable} font-fraunces text-32 text-gunmetal md:mb-6`}
          >
            Gabrielle Essence Eau De Parfum
          </div>
          <div
            className={`${montserrat.variable} font-monserrat text-14 mt-5 text-aurometal md:mt-6`}
          >
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </div>
          <div className="flex flex-row mt-6 items-center md:mt-7 md:mb-7.5">
            <div
              className={`${fraunces.variable} font-fraunces text-32  text-aquamarine`}
            >
              $149.99
            </div>

            <div
              className={`${montserrat.variable} font-monserrat ml-4.75 line-through text-13 text-aurometal`}
            >
              $169.99
            </div>
          </div>
          <button className="w-full text-white text-14 bg-aquamarine rounded-lg h-12 mt-5 flex items-center justify-center hover:bg-deep-aquamarine">
            <Image
              alt="Perfume"
              src="/images/icon-cart.svg"
              width={14.39}
              height={16}
              className="mr-2.5"
              priority
            />
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
