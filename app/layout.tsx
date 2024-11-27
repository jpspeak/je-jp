/* eslint-disable jsx-a11y/alt-text */
import type { Metadata } from "next";
import { Toaster } from "./(shared)/components/ui/sonner";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Slide, ToastContainer } from "react-toastify";
import IntercomMessenger from "./(shared)/components/IntercomMessenger";
import NavbarMobile from "./(shared)/components/NavbarMobile";
import CalComModal from "./(shared)/components/CalComModal";
import localFont from "next/font/local";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
import { Dictionary, getDictionary, Locale } from "./[lang]/dictionaries";
import { createContext } from "react";
import { DictionaryProvider } from "./(shared)/context/DictionaryContext";
import { headers } from "next/headers";

const MonaSans = localFont({
  variable: "--font-mona-sans",
  src: [
    {
      path: "./(shared)/fonts/mona-sans-regular-font.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./(shared)/fonts/mona-sans-medium-font.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./(shared)/fonts/mona-sans-semibold-font.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./(shared)/fonts/mona-sans-bold-font.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

const GuthenBlootsPersonalUse = localFont({
  variable: "--font-guthen-bloots-personal-use",
  src: [
    {
      path: "./(shared)/fonts/guthen-bloots-personal-use.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

const Portlin = localFont({
  variable: "--font-portlin",
  src: [
    {
      path: "./(shared)/fonts/portlin-normal-font.woff2",
      weight: "400",
      style: "normal",
    },
  ],
});

const GreycliffJapaneseCF = localFont({
  variable: "--font-greycliffjpcd",
  src: [
    {
      path: "./(shared)/fonts/GreycliffJapaneseCF-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./(shared)/fonts/GreycliffJapaneseCF-DemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./(shared)/fonts/GreycliffJapaneseCF-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jedesigns.com"),
  title: {
    template: "%s - Jeremy Ellsworth Designs",
    default: "Jeremy Ellsworth Designs",
  },
  description:
    "Elevate your brand with our comprehensive creative solutions. We specialize in crafting eye-catching logos, developing cohesive brand identities, and designing head-turning vehicle wraps that make your business stand out on the streets. Our expert team also delivers stunning visual assets, from marketing materials to digital graphics, ensuring your brand shines across all platforms. Transform your vision into reality and leave a lasting impression with our innovative design services tailored to your unique business needs.",
  openGraph: {
    title: "Jeremy Ellsworth Designs",
    description:
      "Elevate your brand with our comprehensive creative solutions. We specialize in crafting eye-catching logos, developing cohesive brand identities, and designing head-turning vehicle wraps that make your business stand out on the streets. Our expert team also delivers stunning visual assets, from marketing materials to digital graphics, ensuring your brand shines across all platforms. Transform your vision into reality and leave a lasting impression with our innovative design services tailored to your unique business needs.",
    siteName: "Jeremy Ellsworth Designs",
    url: "https://jedesigns.com", // Replace with your website URL
    images: [
      {
        url: "https://jedesigns.com/assets/images/je-banner.png",
        width: 1200,
        height: 630,
        alt: "Jeremy Ellsworth Designs Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jnellsworth_", // Replace with your Twitter handle
    title: "Jeremy Ellsworth Designs",
    description:
      "Elevate your brand with our comprehensive creative solutions. We specialize in crafting eye-catching logos, developing cohesive brand identities, and designing head-turning vehicle wraps that make your business stand out on the streets. Our expert team also delivers stunning visual assets, from marketing materials to digital graphics, ensuring your brand shines across all platforms. Transform your vision into reality and leave a lasting impression with our innovative design services tailored to your unique business needs.",
    images: ["https://jedesigns.com/assets/images/je-banner.png"],
  },
};

export default async function RootLayout({
  children,
  project,
}: Readonly<{
  children: React.ReactNode;
  project: React.ReactNode;
}>) {
  const headersList = headers();
  const lang = (headersList.get("x-lang") || "ja") as Locale;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <GoogleTagManager gtmId="GTM-PZFW2MLS" />
      <GoogleAnalytics gaId="G-PBHNXEKEYG" />
      <body
        className={`${MonaSans.variable} ${Portlin.variable} ${GuthenBlootsPersonalUse.variable} ${GreycliffJapaneseCF.variable} ${lang === "ja" ? "font-greycliffjpcd" : "font-mona-sans"} group lang-${lang} lang-${lang}-family lang-${lang}-weight`}
      >
        <DictionaryProvider initialDictionary={dict}>
          {children}
          {project}
        </DictionaryProvider>

        <Toaster
          toastOptions={{ className: "w-max right-0" }}
          visibleToasts={1}
        />
        <ToastContainer
          position="bottom-left"
          transition={Slide}
          autoClose={10000}
          closeOnClick={false}
          pauseOnHover={true}
          hideProgressBar={true}
          closeButton={false}
          limit={1}
          style={{
            padding: 0,
            // @ts-ignore
            "--toastify-toast-width": "max-content",
            "--toastify-toast-bottom": "30px",
            "--toastify-toast-left": "30px",
          }}
        />
        <CalComModal />
        <NavbarMobile dict={dict} />
        <IntercomMessenger />
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1501275917193892');
          fbq('track', 'PageView');
        `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=1501275917193892&ev=PageView&noscript=1`}
          />
        </noscript>
      </body>
    </html>
  );
}
