const FoodCardSkeleton = () => {
  return (
    <div className="rounded-2xl bg-white shadow-md overflow-hidden border border-gray-100 animate-pulse">

      {/* Image Skeleton */}
      <div className="h-48 w-full bg-gray-200" />

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />

        {/* Price */}
        <div className="h-5 bg-gray-200 rounded w-1/4 mt-2" />

        {/* Buttons */}
        <div className="flex gap-2 mt-3">
          <div className="h-9 bg-gray-200 rounded-xl flex-1" />
          <div className="h-9 bg-gray-200 rounded-xl flex-1" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;