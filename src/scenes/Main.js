import React, { useEffect } from "react";
import { useCurrentProfile } from "../store/hooks/useCurrentProfile";
// import useNotifications from '../hooks/useHistory';
import Profile from "../components/Profile";

export default function Main(props) {
  const profileContext = useCurrentProfile();
  //profileContext.fetch();
  // const notificationsContext = useNotifications();

  useEffect(() => {
    document.title = `(${/*notificationsContext.getTotal()*/ "ff"}) ${
      profileContext.nickname
    }`;
  });

  return <div>{<Profile profile={profileContext} />}</div>;
}
