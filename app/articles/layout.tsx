import { Metadata } from "next";
import FakePurchase from "../(shared)/components/fake-purchase/FakePurchase";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Read our latest articles on branding, graphic design, vehicle wraps, and more.",
};

export default function ArticlesLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {modal}
      {children}
      <div className="hidden lg:block">
        <FakePurchase />
      </div>
    </>
  );
}
