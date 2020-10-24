import React, { useEffect, useState } from 'react';

import { getChildGraph } from '../../api';
import { useOktaAuth } from '@okta/okta-react';

import { Spin } from 'antd';
import { SmileFilled } from '@ant-design/icons';

// import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(window.Plotly);

// const Plot = window.Plotly;

const ProgressChart = ({ ChildID }) => {
  const [graph, setGraph] = useState(null);
  const [error, setError] = useState(null);
  const { authState } = useOktaAuth();

  useEffect(() => {
    if (ChildID)
      getChildGraph(authState, ChildID)
        .then(res => {
          setGraph(res.data);
          setError(null);
        })
        .catch(err => {
          if (err.response && err.response.status === 404)
            setError("Your child hasn't submitted any writing yet!");
          else
            setError(
              "An unexpected error occurred while loading your child's progress."
            );
        });
  }, [ChildID, authState]);

  return (
    <div>
      <h2> Squad Score Over Time:</h2>
      <div>
        {graph ? (
          <Plot
            data={graph.data}
            layout={graph.layout}
            config={{ staticPlot: true }}
          />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Spin indicator={SmileFilled} />
        )}
      </div>
    </div>
  );
};

export default ProgressChart;
