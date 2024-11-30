import React from "react";

export function BreakableText({
  text,
  breakLineClass,
}: {
  text: string;
  breakLineClass?: string;
}) {
  return (
    <>
      {text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br className={breakLineClass} />
        </React.Fragment>
      ))}
    </>
  );
}
