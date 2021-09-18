import { data } from "./meditations";
import { useState, useEffect } from "react";

export const Aurelius = () => {
  const [aureliusBook, setAureliusBook] = useState(data);
  const [meditationObject, setMeditationObject] = useState(
    aureliusBook[Math.floor(Math.random() * data.length)]
  );

  return (
    <div className="meditation">
      <p>
        book {meditationObject.book} section {meditationObject.section}
        {" : "}
        {meditationObject.text}
      </p>
    </div>
  );
};
