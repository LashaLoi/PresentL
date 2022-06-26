import { useState, useEffect } from "react";

import { ref, onValue } from "firebase/database";

import { database } from "../../firebase/init";

const stepRef = ref(database, "step");

export const useSlide = (defaultStep = 0) => {
  const [currentSlide, setCurrentSlide] = useState(defaultStep);

  useEffect(() => {
    onValue(stepRef, (snapshot) => {
      const step = snapshot.val();

      setCurrentSlide(step);
    });

    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentSlide((current) => {
          const newCurrentStep = current - 1;

          return newCurrentStep;
        });

        return;
      }

      if (e.key === "ArrowRight") {
        setCurrentSlide((current) => current + 1);

        return;
      }
    };

    document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  }, []);

  return currentSlide;
};
