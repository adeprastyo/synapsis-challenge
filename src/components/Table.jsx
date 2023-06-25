import { useState } from "react";

export default function Table({ users }) {
  const [selectedUser, setSelectedUser] = useState(null);
  console.log(selectedUser);

  const handleEditClick = (index) => {
    setSelectedUser(users[index]);
    window.my_modal_4.showModal();
  };

  return (
    <div className="overflow-x-auto">
      <dialog id="my_modal_4" className="modal">
        <form method="dialog" className="modal-box w-1/2 max-w-5xl p-8">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">Edit User</h3>
          {selectedUser && (
            <div>
              <div className="w-4/5 mx-auto flex justify-between items-center px-4 mt-3">
                <label>Name</label>
                <input
                  className="input input-bordered input-info input-md w-2/3"
                  type="text"
                  placeholder="Type here"
                  value={selectedUser.name}
                  onChange={(e) => {
                    const updatedUser = {
                      ...selectedUser,
                      name: e.target.value,
                    };
                    setSelectedUser(updatedUser);
                  }}
                />
              </div>
              <div className="w-4/5 mx-auto flex justify-between items-center px-4 mt-3">
                <label>Email</label>
                <input
                  className="input input-bordered input-info input-md w-2/3"
                  type="text"
                  placeholder="Type here"
                  value={selectedUser.email}
                  onChange={(e) => {
                    const updatedUser = {
                      ...selectedUser,
                      email: e.target.value,
                    };
                    setSelectedUser(updatedUser);
                  }}
                />
              </div>

              <div className="w-4/5 mx-auto flex justify-between items-center px-4 mt-3">
                <label>Gender</label>
                <select
                  className="select select-info w-2/3"
                  value={selectedUser.gender}
                  onChange={(e) => {
                    const updatedUser = {
                      ...selectedUser,
                      gender: e.target.value,
                    };
                    setSelectedUser(updatedUser);
                  }}
                >
                  <option disabled selected>
                    {selectedUser.gender}
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="w-4/5 mx-auto flex justify-between items-center px-4 mt-3">
                <label>Status</label>
                <select
                  className="select select-info w-2/3"
                  value={selectedUser.status}
                  onChange={(e) => {
                    const updatedUser = {
                      ...selectedUser,
                      status: e.target.value,
                    };
                    setSelectedUser(updatedUser);
                  }}
                >
                  <option disabled selected>
                    {selectedUser.status}
                  </option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>

              <div className="w-4/5 mx-auto flex justify-end items-center px-4 mt-3">
                <button className="btn btn-accent text-white">
                  Update Data
                </button>
              </div>
            </div>
          )}
        </form>
      </dialog>
      <table className="table">
        <thead className="text-center">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {users.map((data, index) => {
            return (
              <tr key={data.id}>
                <th>{index + 1}</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.gender}</td>
                <td>{data.status}</td>
                <td>
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleEditClick(index)}
                      className="w-20 text-white bg-blue-600 p-2 rounded-lg font-medium"
                    >
                      Edit
                    </button>

                    <button className="w-20 text-white bg-red-600 p-2 rounded-lg font-medium">
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
