import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar sticky top-0 z-50 bg-sky-600 text-white p-5 shadow-md">
      <div className="container mx-auto flex justify-between">
        <div>
          <Link href="/" className="btn btn-ghost normal-case text-2xl">
            Home
          </Link>
        </div>

        <div className="flex gap-10">
          {/* <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 text-slate-700 md:w-auto"
            />
          </div> */}
          <div className="flex-none ">
            <Link href="/users" className="btn btn-ghost normal-case text-lg">
              User
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
