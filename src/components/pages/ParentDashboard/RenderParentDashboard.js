import React from 'react';
import { Layout, Typography, Card } from 'antd';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import FAQComponent from './FAQ';
import tempImg3 from './temp-img-3.png';
import ContactUs from '../SupportPage/ContactUsForm';
import Children from './Children';
import Footer from './Footer';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const { Title } = Typography;

const ParentDashboard = props => {
  const [element, view] = useInView({ threshold: 0.3 });
  const userInfo = useSelector(state => state.parent);
  const expandFAQ = React.createRef();

  const controls = useAnimation();

  if (view) {
    controls.start('show');
  } else {
    controls.start('hidden');
  }

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
    <>
      <Layout className="parent-dashboard">
        <Layout>
          <header className="parent-dash-header">
            <Title className="title" style={{ color: 'white' }} level={1}>
              STORY SQUAD
            </Title>
            <h4 className="welcome-back-text">Welcome Back {userInfo.name} </h4>
          </header>

          <div className="stats-container">
            <div className="progress-charts-text">
              <h3 className="progress-charts-text">Progress Charts</h3>
            </div>
            <div className="empty-stats-box"></div>
          </div>
          <Children />
          <motion.div
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
          >
            <img src={tempImg3} alt="temp-img" style={{ width: '100vw' }} />
          </motion.div>
        </Layout>
        <FAQComponent />
        <ContactUs />
      </Layout>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default ParentDashboard;
