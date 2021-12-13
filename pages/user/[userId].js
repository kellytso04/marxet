import { useRouter } from 'next/router';
import UserProfile from '@screens/UserProfile';

const User = () => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <div>
      <UserProfile userId={userId} />
    </div>
  );
};

export default User;
