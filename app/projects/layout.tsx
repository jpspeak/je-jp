import { Metadata } from "next";
import FakePurchase from "../(shared)/components/fake-purchase/FakePurchase";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore a collection of creative works, including logo designs and vehicle wraps.",
};

export default function ProjectsLayout({
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
