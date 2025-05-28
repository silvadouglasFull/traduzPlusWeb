import type { Direction } from "@pages/home/layouts/secoundSection/components/horizontalScroll/types";
import { styles } from "@pagesHome/layouts/secoundSection/components/horizontalScroll/styles";
import type React from "react";
import { useRef } from "react";
import { ButtonLeft } from "./butons/left";
import { ButtonRight } from "./butons/right";

export const HorizontalScrollSection: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (direction: Direction): void => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  return (
    <div className="d-none d-md-block" style={styles.wrap}>
      <ButtonLeft scroll={scroll} />
      <section ref={scrollRef} style={styles.horizontalSection}>
        {children}
      </section>
      <ButtonRight scroll={scroll} />
    </div>
  )
}