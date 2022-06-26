import type { NextPage, GetServerSideProps } from "next";

import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";

import Layout from "../lib/components/layout";

import { useSlide } from "../modules/index/hooks";
import { images, fadeAnimation } from "../modules/index/constants";
import { getStep } from "../firebase/api";

interface HomePageProps {
  step: number;
}

const Home: NextPage<HomePageProps> = ({ step }) => {
  const currentSlide = useSlide(step);

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        {images.map(
          (src, i) =>
            i === currentSlide && (
              <motion.img
                key={src}
                src={src}
                className="object-cover h-screen w-screen"
                alt={`slide ${i + 1}`}
                {...fadeAnimation}
              />
            )
        )}
      </AnimatePresence>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const step = await getStep();

  return { props: { step } };
};

export default Home;
