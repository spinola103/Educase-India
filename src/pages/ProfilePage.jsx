import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const [name, setName] = useState("Spinola");
  const [email, setEmail] = useState("spin@gmail.com");
  useEffect(() => {
    const storedUser = localStorage.getItem("reactInternship");

    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setEmail(parsedUser.email || "spin@gmail.com");
      setName(parsedUser.fullName || "Spinola");
    } else {
      setEmail("spin@gmail.com");
      setName("Spinola");
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-[#F7F8F9] flex flex-col min-h-[812px] gap-5 w-[375px]"
    >
      <div className="flex items-center text-[18px] h-[68px] pl-4 bg-white">
        Account Settings
      </div>

      <div className="pl-[20px] flex gap-5">
        <div className="relative">
          <img
            src="./Ellipse 114@2x.png"
            className="h-[76px] w-[76px]"
            alt="Profile IMG"
          />
          <img
            src="./Group 1585@2x.png"
            className="absolute h-[23px] w-[23px] right-0 bottom-0"
            alt=""
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-[15px]">{name}</h3>
          <h3 className="text-[14px]">{email}</h3>
        </div>
      </div>

      <div className="px-[20px] text-[14px] font-300 border-dashed border-gray-300 border-b pb-7">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </div>
    </motion.div>
  );
};

export default ProfilePage;
