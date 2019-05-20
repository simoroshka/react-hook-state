import React, { useEffect } from "react";
import { useCurrentProfile } from "../store/Profiles/useCurrentProfile";
import { useProfileList } from "../store/Profiles/useProfileList";
import { useAuthenticatedUser } from "../store/User/useAuthenticatedUser";

// import useNotifications from '../hooks/useHistory';
import Profile from "../components/CurrentProfile";
import ProfileList from "../components/ProfileList";

export default function Main(props) {
  const user = useAuthenticatedUser();
  const profileContext = useCurrentProfile();
  const profilesContext = useProfileList();

  useEffect(
    () => {
      document.title = `(${/*notificationsContext.getTotal()*/ "ff"}) ${
        profileContext.nickname
      }`;
    },
    [profileContext.nickname]
  );

  if (!user.isLoggedIn) {
    return (
      <button
        onClick={() => user.login /*add username and password from a form*/()}
      >
        log in
      </button>
    );
  }

  return (
    <div>
      return <button onClick={user.logout}>log out</button>;
      <Profile profile={profileContext} />
      <ProfileList profiles={profilesContext} />
    </div>
  );
}
