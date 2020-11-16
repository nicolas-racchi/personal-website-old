import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Spinner = () => {
  return (
    <>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 0.4 }}
        style={{
          fontSize: '3rem',
          color: 'black',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <AiOutlineLoading />
      </motion.div>
    </>
  );
};

export default Spinner;
