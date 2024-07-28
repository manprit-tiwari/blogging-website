import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AnimationWrapper = ({
  keyValue,
  children,
  initial,
  animate,
  transition,
  className,
}) => {
  return (
    <motion.div
      key={keyValue}
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

AnimationWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  initial: PropTypes.object,
  animate: PropTypes.object,
  transition: PropTypes.object,
  keyValue: PropTypes.string,
  className: PropTypes.string,
};

AnimationWrapper.defaultProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1 },
};

export default AnimationWrapper;
