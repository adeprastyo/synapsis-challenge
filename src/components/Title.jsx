export default function Title({ children, title }) {
  return (
    <div className="container mx-auto py-10 px-5">
      <div className="text-lg font-semibold border-b-2 pb-3">
        <p>{title}</p>
      </div>
      {children}
    </div>
  );
}
