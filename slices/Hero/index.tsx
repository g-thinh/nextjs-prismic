import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

type HeroProps = SliceComponentProps<Content.HeroSlice>;

export default function HeroSlice({ slice }: HeroProps) {
  return (
    <section>
      <span className="title">
        {slice.primary.content ? (
          <PrismicRichText field={slice.primary.content} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </span>
    </section>
  );
}
