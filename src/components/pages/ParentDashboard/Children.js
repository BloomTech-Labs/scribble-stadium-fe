import React from 'react';
import { Link } from 'react-router-dom';
import tempImg from './temp-img.png';
import tempImg2 from './temp-img-2.png';
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import { Layout, Typography, Card } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

function Children(props) {
  const [element, controls] = useScroll();
  const scrollReveal = {
    hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div>
      <div className="master-children-container">
        <div className="children-container-1">
          <div className="players-text">
            <h2>Players</h2>
          </div>
          <Layout className="children">
            <img src={tempImg} alt="temp-img" />
          </Layout>
        </div>

        <div className="children-container-2">
          <div className="add-a-child-2">
            <h2>
              <Link to="/parent/add-child">
                <PlusCircleFilled /> Add a Child
              </Link>
            </h2>
          </div>
          <Layout className="children" style={{ flexFlow: 'row wrap' }}>
            <img src={tempImg2} alt="temp-img" />
          </Layout>
        </div>

        <motion.div
          className="children-container-3"
          variants={scrollReveal}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <Layout className="children">
            <img src={tempImg} alt="temp-img" />
          </Layout>
        </motion.div>

        <motion.div
          className="children-container-4"
          variants={scrollReveal}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <Layout className="children" style={{ flexFlow: 'row wrap' }}>
            <img src={tempImg2} alt="temp-img" />
          </Layout>
        </motion.div>
      </div>
    </div>
  );
}

export default Children;
