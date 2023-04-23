import React from "react";
import { useAppSelector } from "../../app/hooks";

export default function Users() {
    const users = useAppSelector((state) => state.user.users);
  return (
    <div className="rounded-md shadow border m-2 p-2">
    <p>This is List Components</p>
    <table className="rounded-md">
      <thead>
        <tr className="bg-gradient-to-b from-sky-400 to-sky-600 text-white  ">
          <th className="p-2 border rounded">First Name</th>
          <th className="p-2 border rounded">Last Name</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr className="even:bg-slate-50" key={user.id}>
            <td className="p-2">{user.first_name}</td>
            <td className="p-2">{user.last_name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}
