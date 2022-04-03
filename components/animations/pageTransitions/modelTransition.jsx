import { motion } from "framer-motion"

const fadeBack = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    //  transition: { duration: 2 }
}


const ModelTransition = ({ children }) => {
    return (
        <motion.div variants={fadeBack}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: .5 }}
        >
            {children}
        </motion.div>
    )
}

export default ModelTransition

/**
 *
 * const fadeBack = {
  name: "Fade Back",
  variants: {
    initial: {
      opacity: 0,
      scale: 0.4
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    exit: {
      opacity: 0,
      scale: 0.4
    }
  },
  transition: {
    duration: 0.7
  }
};
 *
 */