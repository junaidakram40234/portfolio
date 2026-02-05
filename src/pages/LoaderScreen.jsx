import { AnimatePresence, motion } from "framer-motion";
import RippleLoader from "../components/lightswind/ripple-loader";
import Logo from "../assets/logo/logo.svg";

export default function LoaderScreen({ open }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black text-white"
        >
          <RippleLoader
            size={260}
            duration={2}
            logoColor="#229db0"
            icon={<img src={Logo} alt="Logo" />}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

