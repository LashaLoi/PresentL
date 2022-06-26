import Link from "next/link";
import type { NextPage, GetServerSideProps } from "next";

import { motion } from "framer-motion";

import { getStep } from "../firebase/api";

import Layout from "../lib/components/layout";
import { fadeAnimation, images } from "../modules/index/constants";
import { useSlide } from "../modules/index/hooks";

interface HomePageProps {
  step: number;
}

const Home: NextPage<HomePageProps> = ({ step }) => {
  const currentSlide = useSlide(step);

  return (
    <Layout withHeader>
      <div className="md:max-w-[1200px] w-full sm:p-12 p-6 flex md:flex-row flex-col sm:justify-start justify-center text-gray-600">
        <div className="h-full w-full bg-gray-400 rounded-lg mr-12 sm:mt-0 mt-[100px]">
          <Link href="/slides">
            <div>
              {images.map(
                (src, i) =>
                  i === currentSlide && (
                    <motion.img
                      key={src}
                      src={src}
                      alt="img"
                      className="h-[460px] object-cover w-full rounded-lg cursor-pointer"
                      {...fadeAnimation}
                    />
                  )
              )}
            </div>
          </Link>
        </div>
        <div className="h-full sm:w-[500px] w-full py-4">
          <h1
            className="lg:text-3xl sm:text-2xl text-lg font-extrabold mb-4 truncate"
            title="Дела угодные Богуvqwef qwef qwef qw "
          >
            Дела угодные Богу
          </h1>
          <p className="md:text-lg text-md mb-4">
            Номер слайда -{" "}
            <span className="font-bold">{currentSlide + 1} / 12</span>
          </p>
          <p className="md:text-lg text-md mb-6">
            Продолжительность - <span className="font-bold">50 минут</span>
          </p>
          <Link href="/slides">
            <button className="sm:mb-0 mb-10 px-5 py-2.5 relative rounded group font-medium text-gray-200 hover:text-white font-medium inline-block">
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
              <span className="relative">Присоедениться</span>
            </button>
          </Link>
        </div>
      </div>
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
