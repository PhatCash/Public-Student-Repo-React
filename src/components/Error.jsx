export default function Error({ message }) {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <p className="text-2xl font-semibold text-red-500">
          Error Code: {message}
        </p>
      </div>
    </div>
  );
}
