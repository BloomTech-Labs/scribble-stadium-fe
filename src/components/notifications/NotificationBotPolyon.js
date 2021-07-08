import styled from 'styled-components';

function NotificationBotPolygon(props) {
  // Sample props for now, once backend more complete we'll be able to pull the actual data from the reducers.
  const notificationColor = '#C6FD7E';
  const OuterColorDiv = styled.div`
    background: ${notificationColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 20rem;
    margin: 2rem auto;
    transform: matrix(1, -0.04, 0.02, 1, 0, 0);
    width: 43rem;
  `;
  const NotificationTextDiv = styled.div`
    background: #ffffff;
    border: 7px solid #2d2a2b;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    height: 17.5rem;
    left: 1.25rem;
    padding: 1.2rem;
    position: absolute;
    text-align: center;
    top: 1.25rem;
    width: 40.5rem;
  `;
  const CloseButton = styled.button`
    background-color: none;
    border: none;
    cursor: pointer;
    float: right;
    height: 1.5rem;
    padding: 0;
    width: 1.5rem;
  `;
  return (
    <section>
      <OuterColorDiv>
        <NotificationTextDiv>
          <CloseButton>X</CloseButton>
          <h2>{`Welcome ${username}`}</h2>
          <p>{`${message}`}</p>
        </NotificationTextDiv>
      </OuterColorDiv>
    </section>
  );
}
export default connect()(NotificationBotPolygon);
