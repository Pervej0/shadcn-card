import Image from "next/image";
import React from "react";

const TabCard = ({ item }: Record<string, any>) => {
  return (
    <div className="border rounded-lg">
      <h2 className="text-md text-right px-2">0% funded</h2>
      <div
        style={{
          position: "relative",
          left: "0",
          right: "0",
          top: 0,
          bottom: 0,
          overflow: "hidden",
          borderRadius: "10px",
          height: "450px",
        }}
      >
        <Image
          width={500}
          height={200}
          style={{ borderRadius: "10px 0px 0px 10px", objectFit: "cover" }}
          objectFit="cover"
          src={item.poster}
          alt="Ocean"
        />
        <div
          style={{
            width: "100%",
            height: "100%",
            margin: "auto",
            position: "absolute",
            bottom: 0,
            left: 0,
            background: "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, 0))",
          }}
          className="absolute w-full h-full left-0 top-0 bg-[rgba(0, 0, 0, .6)]"
        ></div>
        <div
          style={{
            width: "100%",
            height: "80px",
            position: "absolute",
            bottom: "0",
            left: "0",
            borderRadius: "10px",
            background: "black",
            boxShadow: "6px -35px 47px 46px rgba(0,0,0, 1)",
            // backdropFilter: "blur(10px)",
          }}
        ></div>
        <div className="px-2">
          <div className="absolute left-0 bottom-0 w-full">
            <h1 className="text-2xl text-white font-bold pl-3">
              {item?.title}
            </h1>
            <div className="flex text-white gap-x-3 mb-4 pl-3">
              <h1>Image</h1>
              <h2>World</h2>
            </div>
            <div className="flex justify-between text-white pb-4">
              <div className="px-5">
                <div className="mb-4">
                  <h3 className="text-md font-thin mb-2">Price Per MPC</h3>
                  <h1 className="text-xl">$667</h1>
                </div>
                <div className="font-thin">
                  <h2 className="font-thin">Total MPC raised</h2>
                  <span className="font-bold inline-block mt-3">-</span>
                </div>
              </div>
              {/* card right content */}
              <div className="pr-4 text-right">
                <div className="pb-2">
                  <h3 className="text-md font-thin pb-2">Project Budget</h3>
                  <h1 className="text-2xl">$111.7k</h1>
                </div>
                <div className="text-right">
                  <h2 className="font-thin">Accepted Currencies</h2>
                  <div className="font-bold text-black ml-auto w-9 h-9 flex justify-center items-center rounded-full bg-white mt-1">
                    $
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
