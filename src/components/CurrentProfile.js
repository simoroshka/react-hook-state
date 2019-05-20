import React, { useState } from "react";
import useEnhancedProfile from "../store/Profiles/useEnhancedProfile";

export default function Profile({ profile }) {
  const [newName, setNewName] = useState("");
  const p = useEnhancedProfile(profile);

  return (
    <>
      <p>Hello, {p.nickname}!</p>

      <label htmlFor="newname">Change nickname</label>
      <input
        id="newname"
        value={newName}
        onChange={e => setNewName(e.target.value)}
      />
      <button onClick={() => p.changeNickname(newName)} disabled={p.isUpdating}>
        change
      </button>
      <br />
      <br />
    </>
  );
}
