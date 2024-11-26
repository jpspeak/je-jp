import { Suspense } from "react";

export default function ConfirmationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense>{children}</Suspense>;
}
