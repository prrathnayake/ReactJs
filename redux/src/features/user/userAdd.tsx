import React, { useRef } from "react";
import { addUser } from "./userSlice";
import { useAppDispatch } from "../../app/hooks";

export default function UserAdd() {
  const first_name = useRef<string>("");
  const last_name = useRef<string>("");

  const dispatch = useAppDispatch();
  return (
    <div className="border rounded-md p-2 shadow-md m-2">
      <label htmlFor="">Person First Name:</label>
      <input
        className="border rounded-md p-2 mx-2"
        onChange={(e) => (first_name.current = e.target.value)}
      />

      <label htmlFor="">Person Last Name:</label>
      <input
        className="border rounded-md p-2 mx-2"
        onChange={(e) => (last_name.current = e.target.value)}
      />
      <button
        onClick={() =>
          dispatch(
            addUser({
              first_name: first_name.current,
              last_name: last_name.current,
            })
          )
        }
        className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
      >
        Add
      </button>
    </div>
  );
}
