import { useCallback, useRef } from "react";
import type { NextPage, GetServerSideProps } from "next";

import { motion, AnimatePresence } from "framer-motion";

import { getStep } from "../firebase/api";

import Layout from "../lib/components/layout";
import { fullScreenIcon } from "../lib/icons";

import { useSlide } from "../modules/index/hooks";
import { images, fadeAnimation } from "../modules/index/constants";

interface SlidesPageProps {
  step: number;
}

const Slides: NextPage<SlidesPageProps> = ({ step }) => {
  const currentSlide = useSlide(step);
  const ref = useRef<HTMLImageElement>(null);

  const handleClick = useCallback(() => {
    if (ref.current?.requestFullscreen) {
      ref.current.requestFullscreen();
      return;
    }

    // Safari support
    if ((ref.current as any).webkitRequestFullscreen) {
      // @ts-ignore
      ref.current.webkitRequestFullscreen();
    }
  }, []);

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        {images.map(
          (src, i) =>
            i === currentSlide && (
              <motion.img
                ref={ref}
                key={src}
                src={src}
                onDoubleClick={handleClick}
                className="object-cover h-screen w-screen cursor-pointer"
                alt={`slide ${i + 1}`}
                {...fadeAnimation}
              />
            )
        )}
      </AnimatePresence>
      <div
        className="absolute text-white cursor-pointer right-5 bottom-5"
        onClick={handleClick}
      >
        {fullScreenIcon}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<
  SlidesPageProps
> = async () => {
  const step = await getStep();

  return { props: { step } };
};

export default Slides;
