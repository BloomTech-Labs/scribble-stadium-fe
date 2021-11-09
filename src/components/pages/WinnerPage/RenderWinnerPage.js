import React from 'react';
import { Header } from '../../common';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

const RenderWinnerPage = () => {
  const { push } = useHistory();

  const goToPlayAgain = () => {
    push('/child/play-again');
  };

  return (
    <>
      <Header displayMenu={true} />
      {/* REMOVE ONCE DESIGN WORK BEGINS - START */}
      <div className={'under-construction'}>
        <div className={'rectangle-126'} style={{ margin: '3rem' }}>
          <h1>Coming Soon</h1>
        </div>
        <div className={'under-construction-content'}>
          <h1>Under Construction!</h1>
          <h1>Winner Page UI Coming Soon!</h1>
        </div>
        <Button
          style={{ margin: '1rem' }}
          className="back-btn"
          onClick={goToPlayAgain}
        >
          Next to Play Again
        </Button>
      </div>
      {/* REMOVE ONCE DESIGN WORK BEGINS - END */}
    </>
  );
};

export default connect(
  state => ({
    child: state.child,
    tasks: state.tasks,
  }),
  {}
)(RenderWinnerPage);
