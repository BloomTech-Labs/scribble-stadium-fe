import { SmileFilled } from '@ant-design/icons';
import { Layout, Spin } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

function ParentLoadingComponent(props) {
  const { message } = props;

  return (
    <div className="parent-loader">
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

export default ParentLoadingComponent;

ParentLoadingComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
