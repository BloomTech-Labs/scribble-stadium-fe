import React from 'react';

import '../../styles/less/ChildFooter.less';

export default function ParentFooter(props) {
  // if no need to scroll go to the bottom of the page -> pass `no-scroll` by props
  const { layoutContainerCheck } = props;

  const curYear = new Date().getFullYear();

  return (
    <footer className={layoutContainerCheck}>
      <div className="inner-container">
        <div class="copyright">©{curYear} Story Squad HQ</div>
      </div>
    </footer>
  );
}
