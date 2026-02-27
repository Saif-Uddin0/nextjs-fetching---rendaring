const loading = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Image Skeleton */}
      <div className="w-full h-64 bg-gray-200 rounded-2xl relative overflow-hidden shimmer"></div>

      {/* Title & Info Skeleton */}
      <div className="space-y-3">
        <div className="h-6 bg-gray-200 rounded w-3/4 shimmer"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 shimmer"></div>
        <div className="h-5 bg-gray-200 rounded w-1/4 shimmer"></div>
      </div>

      {/* Buttons Skeleton */}
      <div className="flex gap-4 mt-4">
        <div className="flex-1 h-10 bg-gray-200 rounded-xl shimmer"></div>
        <div className="flex-1 h-10 bg-gray-200 rounded-xl shimmer"></div>
      </div>
    </div>
  );
};

export default loading;