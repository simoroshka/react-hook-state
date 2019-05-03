import React, { useState } from "react";

export default function Profile({ profile }) {
  const [newName, setNewName] = useState("");

  if (profile.loading) return "loading....";
  return (
    <>
      <p>Hello, {profile.nickname}!</p>

      <label htmlFor="newname">Change nickname</label>
      <input
        id="newname"
        value={newName}
        onChange={e => setNewName(e.target.value)}
      />
      <button onClick={() => profile.changeNickname(newName)}>change</button>
      <br />
      <br />
      <button onClick={profile.fetch}>change profile</button>
    </>
  );
}
