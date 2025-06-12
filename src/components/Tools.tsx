import Image from "next/image";
import React from "react";

const Tools = () => {
  return (
    <>
      <section>
        <div className="text-3xl text-black align-middle flex justify-center gap-2 mt-40">
          <span className="text-yellow-400">-</span>
          My Favorite Tools
        </div>
        <p className="text-5xl text-yellow-400 italic align-middle flex justify-center mt-4">
          {" "}
          Exploring The Tools
        </p>
        <p className="text-5xl text-black align-middle flex justify-center">
          {" "}
          Behind My Designs
        </p>
      </section>

      <div className="w-full px-4">
        <div className="flex justify-center items-center gap-4">
          <div className="flex-1">
            <Image
              src="/figma_icon.png"
              alt="figma"
              height={140}
              width={500}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/sketch_icon.png"
              alt="sketch"
              height={140}
              width={500}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/photoshop_icon.png"
              alt="photoshop"
              height={140}
              width={500}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/After_Effects_icon.png"
              alt="after effects"
              height={140}
              width={500}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/storybook_icon.png"
              alt="storybook"
              height={140}
              width={500}
              className="w-full h-auto"
            />
          </div>
          <div className="flex-1">
            <Image
              src="/InVision_icon.png"
              alt="InVision"
              height={140}
              width={500}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tools;
