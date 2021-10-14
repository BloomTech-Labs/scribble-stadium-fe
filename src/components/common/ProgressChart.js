import React, { useEffect, useState } from 'react';

import { getChildGraph } from '../../api';
import { useAuth0 } from '@auth0/auth0-react';

import { Spin } from 'antd';
import { SmileFilled } from '@ant-design/icons';

// import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(window.Plotly);

// const Plot = window.Plotly;

const ProgressChart = ({ ChildID }) => {
  const [graph, setGraph] = useState(null);
  const [error, setError] = useState(null);
  const { user } = useAuth0();

  useEffect(() => {
    if (ChildID)
      getChildGraph(user, ChildID)
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
  }, [ChildID, user]);

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
