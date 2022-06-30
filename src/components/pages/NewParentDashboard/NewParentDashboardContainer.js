import RenderNewParentDashboard from './RenderNewParentDashboard';
import { useAuth0 } from '@auth0/auth0-react';

function NewParentDashboardContainer({ LoadingComponent, ...props }) {
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      {isAuthenticated && !user && (
        <LoadingComponent message="Fetching Parent Profile..." />
      )}
      {isAuthenticated && user && <RenderNewParentDashboard {...props} />}
    </>
  );
}

export default NewParentDashboardContainer;
