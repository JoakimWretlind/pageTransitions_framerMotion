import { motion } from "framer-motion"

const homePageTransition = {
    initial: { x: "90vw", opacity: 0.3 },
    animate: { x: 0, opacity: 1, },
    exit: { x: "-90vw", opacity: 0.3 }
}

const HomePageTransition = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: {
                    delay: 2,
                }
            }}
            transition={{
                default: { duration: .5 },
            }}
        >
            {children}
        </motion.div>
    )
}

export default HomePageTransition