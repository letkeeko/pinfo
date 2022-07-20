import { useState } from "react";
import Image from "next/image";
import SlidesWrapper from "./style";
import { SlideProps } from "../../../pages/index";
import { AnimatePresence, motion } from "framer-motion";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type SlidesProps = {
  slides: SlideProps[];
};

const Slides = (props: SlidesProps) => {
  const { slides } = props;

  const slides2 = [...slides, ...slides, ...slides];

  const [curSlide, setCurSlide] = useState(0);

  const handlePrev = () => {
    if (curSlide === 0) {
      // set to last item if zero
      setCurSlide(slides2.length - 1);
      return;
    }

    setCurSlide(curSlide - 1);
  };

  const handleNext = () => {
    if (slides2.length - 1 <= curSlide) {
      // set to first item if max
      setCurSlide(0);
      return;
    }

    setCurSlide(curSlide + 1);
  };

  const upcomingSlide = slides2.length - 1 <= curSlide ? 0 : curSlide + 1;

  const getActiveClassName = (idx: number) => {
    if (curSlide === idx) return "indicator__each indicator__each--active";

    return "indicator__each";
  };

  return (
    <SlidesWrapper>
      <div>
        <div className="slides">
          {slides2.map((slide: SlideProps, index: number) => (
            <AnimatePresence initial={false} key={index}>
              {curSlide === index && (
                <motion.div
                  className="slides__each"
                  initial={{ y: "100%", scale: 0.9 }}
                  animate={{
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    y: "-100%",
                    scale: 0.9,
                  }}
                >
                  <Image
                    src={"https:" + slide.fields.file.url}
                    alt={slide.fields.title}
                    width={slide.fields.file.details.image.width}
                    height={slide.fields.file.details.image.height}
                    placeholder="blur"
                    blurDataURL={"https:" + slide.fields.file.url}
                    priority
                  />
                </motion.div>
              )}
            </AnimatePresence>
          ))}

          <div
            className="slides__each slides__each--upcoming"
            aria-hidden="true"
            role="presentation"
          >
            <Image
              src={"https:" + slides2[upcomingSlide].fields.file.url}
              alt={slides2[upcomingSlide].fields.title}
              width={slides2[upcomingSlide].fields.file.details.image.width}
              height={slides2[upcomingSlide].fields.file.details.image.height}
            />
          </div>

          <div
            className="slides__each slides__each--hidden"
            aria-hidden="true"
            role="presentation"
          >
            <Image
              src={"https:" + slides[0].fields.file.url}
              alt={slides[0].fields.title}
              width={slides[0].fields.file.details.image.width}
              height={slides[0].fields.file.details.image.height}
            />
          </div>
        </div>

        <div className="indicator">
          {slides2.map((_, g) => (
            <span
              className={getActiveClassName(g)}
              key={g}
              onClick={() => setCurSlide(g)}
            ></span>
          ))}
        </div>
      </div>

      <button className="arrow arrow--prev" onClick={handlePrev}>
        <motion.span whileTap={{ scale: 1.1 }} className="icon">
          <BsChevronLeft />
        </motion.span>
      </button>
      <button className="arrow arrow--next" onClick={handleNext}>
        <motion.span whileTap={{ scale: 1.1 }} className="icon">
          <BsChevronRight />
        </motion.span>
      </button>
    </SlidesWrapper>
  );
};

export default Slides;
