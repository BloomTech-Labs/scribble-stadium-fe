import React, { useEffect, useState } from 'react';
import matchup_bolt from '../../../assets/images/match_up_images/matchup_bolt.svg';

const FaceoffContent = props => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setContent(props.content);
    }, 1000);
  }, []);

  return (
    <div className="faceoff">
      {content && <FaceoffSubDisplay sub={content.Submission1} />}
      <img src={matchup_bolt} alt="lightning bolt" />
      {content && <FaceoffSubDisplay sub={content.Submission2} />}
    </div>
  );
};

const FaceoffSubDisplay = ({ sub }) => {
  return (
    <div className="sub">
      <img src={sub.ImgURL} alt="text" />
    </div>
  );
};

export default FaceoffContent;
