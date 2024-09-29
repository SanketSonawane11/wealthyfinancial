// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// import { IoMenu } from "react-icons/io5";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     setVisible(true);
//   }, []);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     if (typeof current === "number") {
//       const direction = current - scrollYProgress.getPrevious()!;
//       setVisible(direction < 0 || current <= 20);
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{
//           opacity: 1,
//           y: 0,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className={cn(
//           "flex w-full h-[4rem] lg:h-[5rem] fixed top-0 inset-x-0 border-2 border-transparent dark:border-white/[0.2] dark:bg-white bg-white shadow-none md:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-5 md:px-10 py-2 mx-0 items-center justify-center space-x-4",
//           className
//         )}
//       >
//         <div className="flex w-full text-black items-center justify-between">
//           <img
//             className="w-[11rem] md:w-[10rem] lg:w-[13rem] contain-content object-center"
//             src="/images/Logo.png"
//             alt="Logo"
//           />
//           <div className="hidden lg:flex relative -left-[4rem] text-black text-[1.4rem] items-center font-bold justify-center gap-8">
//             {navItems.map((navItem, idx: number) => (
//               <Link
//                 key={`link=${idx}`}
//                 href={navItem.link}
//                 className={cn(
//                   "relative dark:text-neutral-50 transition-all ease-out duration-150 items-center flex space-x-1 dark:hover:text-blue-300 hover:scale-105 hover:text-blue-500"
//                 )}
//               >
//                 <span className="block sm:hidden">{navItem.icon}</span>
//                 <span className="hidden md:flex items-center justify-center gap-3">
//                   {navItem.name}
//                 </span>
//               </Link>
//             ))}
//           </div>
//           <div className="hidden lg:flex text-[1.1rem] items-center justify-center gap-5">
//             <button className="rounded-lg py-2 px-3 font-semibold text-white bg-[#eab308] transition-all ease-out duration-150 hover:rounded-sm">
//               Call Now
//             </button>
//           </div>
//           <div className="text-[2rem] lg:hidden">
//             <IoMenu />
//           </div>
//         </div>
//       </motion.div>
//     </AnimatePresence>
//   );
// };

"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IoMenu, IoClose } from "react-icons/io5"; // Import IoClose for closing the menu

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // State to track mobile menu

  useEffect(() => {
    setVisible(true);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      setVisible(direction < 0 || current <= 20);
    }
  });

  // Toggle the menu
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: 0,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex w-full h-[4rem] lg:h-[5rem] fixed top-0 inset-x-0 border-2 border-transparent dark:border-white/[0.2] dark:bg-white bg-white shadow-none md:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-5 md:px-10 py-2 mx-0 items-center justify-center space-x-4",
            className
          )}
        >
          <div className="flex w-full text-black items-center justify-between">
            <img
              className="w-[11rem] md:w-[10rem] lg:w-[13rem] contain-content object-center"
              src="/images/Logo.png"
              alt="Logo"
            />
            <div className="hidden lg:flex relative -left-[4rem] text-black text-[1.4rem] items-center font-bold justify-center gap-8">
              {navItems.map((navItem, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className={cn(
                    "relative dark:text-neutral-50 transition-all ease-out duration-150 items-center flex space-x-1 dark:hover:text-blue-300 hover:scale-105 hover:text-blue-500"
                  )}
                >
                  <span className="block sm:hidden">{navItem.icon}</span>
                  <span className="hidden md:flex items-center justify-center gap-3">
                    {navItem.name}
                  </span>
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex text-[1.1rem] items-center justify-center gap-5">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg py-2 px-3 font-semibold text-white bg-[#eab308] transition-all ease-out duration-150 hover:rounded-sm"
              >
                Call Now
              </motion.button>
            </div>
            <div
              className="text-[2rem] lg:hidden cursor-pointer"
              onClick={toggleMenu}
            >
              {menuOpen ? <IoClose /> : <IoMenu />}{" "}
              {/* Toggle between IoMenu and IoClose */}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Menu with Frosted Glass Effect */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-[80%] bg-white/30 backdrop-blur-2xl border-l-[1px] border-gray-200 z-[4000] shadow-xl p-5 flex flex-col space-y-8"
          >
            {navItems.map((navItem, idx: number) => (
              <Link
                key={`mobile-link-${idx}`}
                href={navItem.link}
                className="text-xl font-medium text-black dark:text-neutral-50 hover:text-blue-500 transition-all"
                onClick={toggleMenu} // Close menu when link is clicked
              >
                {navItem.name}
              </Link>
            ))}
            {/* Call Now Button for Mobile */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-auto w-full rounded-lg py-3 px-5 font-semibold text-white bg-[#eab308] transition-all ease-out duration-150 hover:rounded-sm"
            >
              Call Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
