import React from 'react';
import { Layout, Typography } from 'antd';

import ParentNavSider from '../../common/ParentNavSider';

const { Title } = Typography;

const ParentDashboard = props => {
  return (
    <>
      <Layout className="container">
        <ParentNavSider />

        <Layout>
          <div className="Contact">
            <Title
              className="help-title"
              style={{ color: '#0267C1' }}
              level={1}
            >
              Help
            </Title>
            <h1>Contact US</h1>
            <h3>Email us: email@storysquad.com</h3>
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default ParentDashboard;

// import React from 'react';
// import '../../../styles/HelpPage.less';
// import { Typography } from 'antd';
// const { Title } = Typography;

// const Help = () => {
//   return (
//     <>
//       <div className="Contact">
//         <Title className="help-title" style={{ color: '#0267C1' }} level={1}>
//           HELP
//         </Title>
//         <h1>Contact US</h1>
//         <h3>Email us: email@storysquad.com</h3>
//       </div>
//     </>
//   );
// };

// export default Help;
