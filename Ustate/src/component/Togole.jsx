import { useEffect } from "react";
import { useState } from "react";

const Togole = () => {
  const [incre, setIncre] = useState(0);

  function handleClick() {
    setIncre(incre + 1);
  }
  function handle() {
    setIncre(incre - 1);
  }
  useEffect(() => {
    document.title = incre;
  });
  return (
    <div className="flex flex-col items-center">
      <div className="mt-[170px] text-[2rem]">{incre}</div>
      <div className="flex justify-center mt-[100px] gap-4">
        <button
          onMouseLeave={handleClick}
          className="px-[40px] py-[10px] bg-sky-900 text-white active:scale-110 transition-all rounded-3xl"
        >
          Increment
        </button>
        <button
          onClick={handle}
          className="px-[40px] py-[10px] bg-sky-900 text-white active:scale-110 transition-all rounded-3xl"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Togole;
