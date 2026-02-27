import Image from "next/image";
import Link from "next/link";

const getDetailsFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data.details;
};

const Page = async ({ params }) => {
  const { id } =await params;
  const food = await getDetailsFood(id);

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-red-500">
          Food not found
        </h2>
      </div>
    );
  }

  return (
     <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 gap-10 p-8">

        {/* Image Section */}
        <div className="relative w-full ">
          <img
            src={food.foodImg}
            alt={food.title}
            className="object-cover rounded-xl"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-between">

          <div>
            <h1 className="text-4xl font-bold mb-6">
              {food.title}
            </h1>

            <p className="text-gray-700 mb-3 text-lg">
              <span className="font-semibold">Category:</span> {food.category}
            </p>

            <p className="text-gray-700 mb-3 text-lg">
              <span className="font-semibold">Area:</span> {food.area}
            </p>

            <p className="text-3xl font-bold text-green-600 mt-6">
              ৳ {food.price}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">

            {food.video && (
              <a
                href={food.video}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition duration-300"
              >
                Watch Recipe
              </a>
            )}

            <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition duration-300">
              Add to Cart
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;