import { data } from "./meditations";

export const Aurelius = () => {
  const meditationObject = data[Math.floor(Math.random() * data.length)];

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
