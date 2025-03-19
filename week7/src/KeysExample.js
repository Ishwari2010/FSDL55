import React from "react";

export default function KeysExample() {
  const users = [
    { id: 1, name: "Ishwari" },
    { id: 2, name: "Mayoogh" },
    { id: 3, name: "Pranati" }
  ];

  return (
    <div>
      <h2>👥 User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> 
        ))}
      </ul>
    </div>
  );
}
