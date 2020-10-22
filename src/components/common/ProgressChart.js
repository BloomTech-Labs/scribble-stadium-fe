import React from 'react';
import { data } from '../../utils/dataTest';

import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

const ProgressChart = () => {
  return (
    <div>
      <h2> Squad Score Over Time:</h2>
      <div>
        <Plot
          data={data.data}
          layout={data.layout}
          config={{ staticPlot: true }}
        />
      </div>
    </div>
  );
};

export default ProgressChart;
