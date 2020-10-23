import React, { useEffect, useState } from 'react';
import matchup_bolt from '../../../assets/images/match_up_images/matchup_bolt.svg';

const FaceoffContent = props => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setContent(props.content);
    }, 1000);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="faceoff">
      {content && <FaceoffSubDisplay sub={content.Submission1} />}
      <img src={matchup_bolt} alt="lightning bolt" />
      {content && <FaceoffSubDisplay sub={content.Submission2} />}
      {content && <div className="points">{content.Points}</div>}
    </div>
  );
};

const FaceoffSubDisplay = ({ sub }) => {
  return (
    <div className="sub">
      <div className="child-info">
        <img src={sub.AvatarURL} alt="text" />
        <span className="name">{sub.Name}</span>
      </div>
      <div className="submission-preview">
        <img src={sub.ImgURL} alt="text" />
      </div>
    </div>
  );
};

export default FaceoffContent;
