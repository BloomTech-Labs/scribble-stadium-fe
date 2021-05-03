import React from 'react';
import { Collapse } from 'antd';
import { useScroll } from './useScroll';
import { motion } from 'framer-motion';
import { CaretRightOutlined } from '@ant-design/icons';

function FAQComponent(props) {
  const [element, controls] = useScroll();
  const expandFAQ = React.createRef();
  const { Panel } = Collapse;

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
    <div className="FAQ-container" ref={expandFAQ}>
      <motion.div
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <h1>Frequently Asked Questions</h1>
        <Collapse
          bordered={false}
          defaultActiveKey={['0']}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          className="site-collapse-custom-collapse"
        >
          <Panel
            header={
              <h3>
                Question 1 goes here and this is just extra placeholder text?
              </h3>
            }
            key="1"
            className="site-collapse-custom-panel"
          >
            <p>Answer for 1 goes here and of course more placeholder text.</p>
          </Panel>
          <Panel
            header={
              <h3>
                Question 2 goes here and this is just extra placeholder text?
              </h3>
            }
            key="2"
            className="site-collapse-custom-panel"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint?
            </p>
          </Panel>
          <Panel
            header={
              <h3>
                Question 3 goes here and this is just extra placeholder text?
              </h3>
            }
            key="3"
            className="site-collapse-custom-panel"
          >
            <p>
              Answer for 3 goes here. Unfortunately, this is where the place-
              holder text has to stop.
            </p>
          </Panel>
          <Panel
            header={
              <h3>
                Question 4 goes here and this is just extra placeholder text?
              </h3>
            }
            key="4"
            className="site-collapse-custom-panel"
          >
            <p>
              Answer for 4 goes here. Unfortunately, this is where the place-
              holder text has to stop.
            </p>
          </Panel>
        </Collapse>
      </motion.div>
    </div>
  );
}

export default FAQComponent;
