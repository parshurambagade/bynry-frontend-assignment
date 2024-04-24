import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteSingleUser } from '../../api/firestore-apis';

const UserTable = ({users}) => {
  return (
    <div className="relative w-full overflow-auto">
      <table className="w-full caption-bottom text-sm">
        <thead className="[&_tr]:border-b">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              ID
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Name
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Role
            </th>
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Email
            </th>
            {/* <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Phone
            </th> */}
            <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
          {Object.keys(users).map((id) => (
            <tr
              key={id}
              className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
            >
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
                {id}
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium">
          {users[id].name}
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              {users[id].role}
              </td>
              <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              {users[id]?.contactInfo?.email}
              </td>
              {/* <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
              {users[id]?.contactInfo?.phone}
              </td> */}
              <td className="p-4 flex gap-2 align-middle [&:has([role=checkbox])]:pr-0">
                <Link to={`/admin/edit-user/${id}`}  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 bg-blue-600 hover:bg-blue-600/90 text-white ">
                  Edit
                </Link>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-red-500 text-white hover:bg-red-500/90 h-10 px-4 py-2" onClick={() => deleteSingleUser(id)} >
                  Delete
                </button>
              </td>
            </tr>
          
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
