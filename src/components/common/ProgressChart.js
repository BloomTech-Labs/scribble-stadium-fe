import React, { useEffect, useState } from 'react';

import { getChildGraph } from '../../api';
import { useOktaAuth } from '@okta/okta-react';

import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import { Spin } from 'antd';
import { SmileFilled } from '@ant-design/icons';
const Plot = createPlotlyComponent(Plotly);

const ProgressChart = ({ ChildID }) => {
  const [graph, setGraph] = useState(null);
  const { authState } = useOktaAuth();

  useEffect(() => {
    try {
      getChildGraph(authState, ChildID).then(res => {
        setGraph(res);
      });
    } catch (err) {}
  }, [ChildID, authState]);

  return (
    <div>
      <h2> Squad Score Over Time:</h2>
      <div>
        {graph ? (
          <Plot
            data={graph.data}
            layout={graph.layout}
            config={{ staticPlot: true, responsive: true, autosizable: true }}
          />
        ) : (
          <Spin indicator={SmileFilled} />
        )}
      </div>
    </div>
  );
};

export default ProgressChart;
