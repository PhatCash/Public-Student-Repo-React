export default function Error({ message }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-2xl font-semibold text-red-500">
        Error Code: {message}
      </p>
    </div>
  );
}
