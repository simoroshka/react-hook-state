import React from "react";
import useEnhancedProfile from "../store/Profiles/useEnhancedProfile";

export default function ProfileList({ profiles }) {
  return (
    <ul>
      {Object.values(profiles).map(p => (
        <Profile data={p} />
      ))}
    </ul>
  );
}

const Profile = ({ data }) => {
  const p = useEnhancedProfile(data);

  return (
    <li key={p.id}>
      {p.nickname}{" "}
      {p.isCurrent ? null : (
        <button onClick={p.setAsCurrent} disabled={p.isUpdating}>
          switch
        </button>
      )}
    </li>
  );
};
