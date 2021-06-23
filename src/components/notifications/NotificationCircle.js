import styled from 'styled-components';

function NotificationCircle(props) {
  const { color } = props;
  const ProfileImgCircle = styled.button`
    background-color: ${color};
    border-radius: 1rem;
    border: 3px solid #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    cursor: pointer;
    height: 1.5rem;
    padding: 0;
    width: 1.5rem;
  `;
  return (
    <div>
      {/*onclick will show the NotificationBotPolygon if it was closed by the user*/}
      <ProfileImgCircle>!</ProfileImgCircle>
    </div>
  );
}

export default NotificationCircle;
