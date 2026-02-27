import React from "react";

const ReviewCard = ({ review }) => {
  const { user, photo, rating, review: message, likes, date } = review;

  const formattedDate = new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-5 border border-gray-100">
      {/* User Info */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={photo}
          alt={user}
          className="w-12 h-12 rounded-full object-cover border"
        />
        <div>
          <h3 className="text-sm font-semibold text-gray-800">{user}</h3>
          <p className="text-xs text-gray-400">{formattedDate}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={`text-lg ${index < rating ? "text-yellow-400" : "text-gray-300"}`}>
            ★
          </span>
        ))}
        <span className="text-xs text-gray-500 ml-2">({rating}.0)</span>
      </div>

      {/* Review Message */}
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        {message}
      </p>

      {/* Likes */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span>❤️ {likes.length} Likes</span>
        <button className="hover:text-red-500 transition">Like</button>
      </div>
    </div>
  );
};

export default ReviewCard;