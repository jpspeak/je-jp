import { Metadata } from "next";
import Footer from "../(shared)/components/Footer";
import Header from "../(shared)/components/Header";
import FakePurchase from "../(shared)/components/fake-purchase/FakePurchase";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read what our customers have to say about our graphic design services, including logo design, vehicle wraps, and more.",
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
