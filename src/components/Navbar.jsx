export default function Navbar() {
  return (
    <div className="navbar bg-sky-600 text-white p-7 shadow-md">
      <div className="container mx-auto flex justify-between">
        <div>
          <a className="btn btn-ghost normal-case text-2xl">Home</a>
        </div>

        <div className="flex gap-10">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 text-slate-700 md:w-auto"
            />
          </div>
          <div className="flex-none ">
            <a className="btn btn-ghost normal-case text-lg">User</a>
          </div>
        </div>
      </div>
    </div>
  );
}
