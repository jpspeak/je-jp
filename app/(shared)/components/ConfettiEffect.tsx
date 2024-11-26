import { PropsWithChildren } from "react";
import Confetti from "react-confetti";

function ConfettiEffect({ children }: PropsWithChildren) {
  return (
    <div className="w-full lg:w-max h-max relative">
      {children}
      <div className="absolute top-0 left-0 w-full h-full">
        <Confetti
          recycle={true}
          numberOfPieces={10}
          gravity={0.01}
          initialVelocityX={1}
          initialVelocityY={2}
          width={567}
          height={114}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ConfettiEffect;
