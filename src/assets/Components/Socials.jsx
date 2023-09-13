import React from "react";
import { FaGithub, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="mx-auto pb-5 max-w-[492px] flex flex-col justify-center items-center">
      {/* Icon links */}
      <div className="flex justify-between flex-row w-[240px]">
        {/* github */}
        <a href="https://github.com/nosaemma21" target="blank">
          <FaGithub
            className="hover:text-rose duration-75"
            style={{
              width: "24px",
              height: "24px",
            }}
          />

          {/* Twitter */}
        </a>
        <a href="https://x.com/nosakhareemman5?s=21">
          <FaTwitter
            className="hover:text-rose duration-75"
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </a>

        {/* Instagram */}
        <a href="#">
          <FaInstagram
            className="hover:text-rose duration-75"
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </a>

        {/* Youtube */}
        <a href="#">
          <FaYoutube
            className="hover:text-rose duration-75"
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </a>
      </div>

      {/* Typed links */}
      <div className="mt-4  flex flex-col md:flex-row justify-center items-center md:gap-5">
        <a href="#" className="text-asset font-title hover:text-rose">
          Conditions of Use
        </a>
        <a href="#" className="text-asset font-title hover:text-rose">
          Privacy & Policy
        </a>
        <a href="#" className="text-asset font-title hover:text-rose">
          Press Room
        </a>
      </div>

      {/* copyright */}
      <p className="mt-4 text-gray-500 font-title">
        © 2021 MovieBox by Adriana Eka Prayudha{" "}
      </p>
    </div>
  );
};

export default Socials;
