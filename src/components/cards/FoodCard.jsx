import Link from "next/link";
import CartButton from "../buttons/CartButton";

const FoodCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food;

  return (
    <div className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">

      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={foodImg}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />

        <span className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full bg-white/90 text-gray-700 shadow-sm">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-800 line-clamp-1">
          {title}
        </h3>

        <div className="mt-2 mb-4">
          <p className="text-lg font-bold text-indigo-600">
            ৳ {price}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 justify-between w-full">
          <CartButton food={food}></CartButton>

          <Link
            href={`/foods/${id}`}
            className="btn-secondary transition duration-300 w-1/2"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;