import { Layout, Spin } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import ParentNavSider from './ParentNavSider';

function ParentLoadingComponent(props) {
  const { message } = props;

  return (
    <div className="parent-loader">
      <ParentNavSider key={null} />
      <Layout>
        <Spin size="large" />
        <span>{message}</span>
      </Layout>
    </div>
  );
}

export default ParentLoadingComponent;

ParentLoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
