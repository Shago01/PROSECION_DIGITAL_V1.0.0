export default function SkeletonCardData() {
  return (
    <div className="w-full p-6 rounded-xl border border-gray-300 animate-pulse flex flex-col items-center">
      <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
      <div className="mt-4 w-full grid gap-4">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="h-4 bg-gray-300 rounded w-3/4 mx-auto"
          ></div>
        ))}
      </div>
    </div>
  );
}
