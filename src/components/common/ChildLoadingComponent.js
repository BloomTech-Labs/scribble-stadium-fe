import { SmileFilled } from '@ant-design/icons';
import { Layout, Spin } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header.sample';

function ChildLoadingComponent(props) {
  const { message } = props;

  return (
    <div className="child-loader">
      <Header displayMenu={false} />
      <Layout>
        <Spin
          indicator={<SmileFilled className="spinner" spin />}
          size="large"
        />
        <span>{message}</span>
      </Layout>
    </div>
  );
}

export default ChildLoadingComponent;

ChildLoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
