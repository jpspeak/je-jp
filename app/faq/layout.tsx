import { Metadata } from "next";
import Footer from "../(shared)/components/Footer";
import Header from "../(shared)/components/Header";
import FakePurchase from "../(shared)/components/fake-purchase/FakePurchase";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers to commonly asked questions about our graphic design services, including logo design, vehicle wraps, pricing, and more.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <div className="hidden lg:block">
        <FakePurchase />
      </div>
    </>
  );
}
