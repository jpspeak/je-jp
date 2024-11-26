import { Article } from "@/sanity.types";
import PortableText from "react-portable-text";

function SectionOneText({ article }: { article: Article }) {
  return (
    <section>
      <h1 className="lg:px-[calc(117px+58px)] font-portlin uppercase tracking-[0.5px] text-[40px] lg:text-[80px] leading-[.9]">
        {article.title}
      </h1>
      <PortableText
        className="lg:px-[calc(117px+58px)] mt-6 lg:mt-[40px] text-[15px] leading-[26px] lg:text-lg lg:leading-[30px] [&_a]:underline [&_a]:text-blue-500"
        content={article.body as any}
      />
    </section>
  );
}

export default SectionOneText;
