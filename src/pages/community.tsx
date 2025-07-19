import { AuthProvider } from "../context/authContext";
import CommunityPage from "../components/community";

export const Community: React.FC = () => {

  return (
    <AuthProvider>
      <CommunityPage />
    </AuthProvider>
  );
};

export default Community;
