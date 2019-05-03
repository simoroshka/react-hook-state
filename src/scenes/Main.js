import React, { useEffect } from "react";
import { useCurrentProfile } from "../store/hooks/useCurrentProfile";
import { useProfiles } from "../store/hooks/useProfiles";

// import useNotifications from '../hooks/useHistory';
import Profile from "../components/CurrentProfile";

export default function Main(props) {
  const profileContext = useCurrentProfile();
  //  const profilesContext = useProfiles();

  useEffect(() => profileContext.fetch(), []);
  // const notificationsContext = useNotifications();

  useEffect(() => {
    document.title = `(${/*notificationsContext.getTotal()*/ "ff"}) ${
      profileContext.nickname
    }`;
  }, [profileContext.nickname]);

  return (
    <div>
      <Profile profile={profileContext} />
    </div>
  );
}
