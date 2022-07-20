import FeaturedWrapper from "./style";
import { motion } from "framer-motion";
import { FeaturedProps } from "../../../pages/index";
import Image from "next/image";
import { BsChevronRight } from "react-icons/bs";

const Featured = (props: FeaturedProps) => {
  const { heading, description, image, ctaLink } = props.fields;

  // to alternate left and right style and animation
  const isOddNum = props.index % 2;

  return (
    <FeaturedWrapper>
      <motion.div
        className="flex-row"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="col col--one">
          <div className={`img-wrap img-wrap--${props.index}`}>
            <motion.div
              className="decoration"
              variants={getItem(isOddNum)}
            ></motion.div>

            <span className="img-wrap__absolute-number">
              <motion.span className="label" variants={getItem(isOddNum)}>
                0{props.index}
              </motion.span>
            </span>

            <motion.div className="img" variants={getItem(isOddNum)}>
              <Image
                src={"https:" + image.fields.file.url}
                alt={image.fields.title}
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
                blurDataURL={"https:" + image.fields.file.url}
                placeholder="blur"
                priority
              />
            </motion.div>
          </div>
        </div>

        <motion.div className="col col--two" variants={getItem(isOddNum)}>
          <h2 className="heading">{heading}</h2>
          <p className="description">{description}</p>

          <a
            className="link"
            href={ctaLink}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View demo"
          >
            <span>See demo</span> <BsChevronRight />
          </a>
        </motion.div>
      </motion.div>
    </FeaturedWrapper>
  );
};

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const getItem = (odd: number) => ({
  hidden: {
    opacity: 0,
    x: !!odd ? "-20%" : "20%",
  },
  show: {
    opacity: 1,
    x: 0,
  },
});

export default Featured;
