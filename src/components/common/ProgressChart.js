import React from 'react';
import Plot from 'react-plotly.js';
import { data } from '../../utils/dataTest';

const ProgressChart = () => {
  return (
    <div>
      <h2> Squad Score:</h2>
      <div>
        <Plot
          data={data.data}
          layout={{ width: 420, height: 340, title: 'Weekly Progress' }}
        />
      </div>
    </div>
  );
};

export default ProgressChart;
