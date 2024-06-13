"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function Home() {
  const noOfStars = 5;

  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number>(0);

  const handleClick = (index: number): void => {
    setRating(index);
  };

  const handleMouseMove = (index: number): void => {
    setHover(index);
  };

  const handleMouseLeave = (): void => {
    setHover(rating);
  };

  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => (
        //const currIndex = index + 1;
        // return (
        <FaStar
          key={index}
          size={40}
          color={index + 1 <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
          onClick={() => handleClick(index + 1)}
          onMouseMove={() => handleMouseMove(index + 1)}
          onMouseLeave={handleMouseLeave}
          style={{ cursor: "pointer" }}
        />
        // );
      ))}
    </div>
  );
}
