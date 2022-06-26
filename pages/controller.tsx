import { useState, useCallback } from "react";
import type { NextPage, GetServerSideProps } from "next";

import { getStep, setStep } from "../firebase/api";

import Layout from "../lib/components/layout";

import { useMount } from "../lib/hooks";

interface ControllerPageProps {
  step: number;
}

const Controller: NextPage<ControllerPageProps> = ({ step }) => {
  const [currentStep, setCurrentStep] = useState(step);

  const handlePrev = useCallback(
    () => setCurrentStep((current) => current - 1),
    []
  );
  const handleNext = useCallback(
    () => setCurrentStep((current) => current + 1),
    []
  );

  useMount(() => {
    setStep(currentStep);
  }, [currentStep]);

  return (
    <Layout>
      <div className="h-screen w-screen">
        <button
          onClick={handlePrev}
          className="w-1/2 h-full relative inline-flex group items-center justify-center px-3.5 py-2 cursor-pointer border-l-2 active:border-blue-400 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-400 to-blue-400 border-blue-400 text-white"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white group-hover:w-full group-hover:h-full opacity-10"></span>
          <span className="relative">
            <svg
              className="w-5 h-5 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
        </button>
        <button
          onClick={handleNext}
          className="w-1/2 h-full relative inline-flex group items-center justify-center px-3.5 py-2 cursor-pointer border-l-2 active:border-blue-400 active:shadow-none shadow-lg bg-gradient-to-tr from-blue-400 to-blue-400 border-blue-400 text-white"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white group-hover:w-full group-hover:h-full opacity-10"></span>
          <span className="relative">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<
  ControllerPageProps
> = async () => {
  const step = await getStep();

  return { props: { step } };
};

export default Controller;
