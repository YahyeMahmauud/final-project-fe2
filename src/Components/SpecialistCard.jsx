import { Link } from "react-router-dom";
function SpecialistCard({ specialist }) {
  return (
    <>
      <div class="flex h-full items-center w-full px-2 ml-10 justify-center ">
        <div class=" overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl w-[290px] drop-shadow-2xl	 ">
          <img
            src={`http://localhost:8080/${specialist.image}`}
            alt="plant"
            class="h-auto w-full"
          />
          <div class="p-5">
            <p class="text-medium mb-5 text-gray-700 font-semibold flex justify-center">
              {specialist.name}
            </p>
            <p class="text-medium mb-5 text-gray-700">
              {specialist.name} is a pro {specialist.specialty} specialist. Book
              him Now!
            </p>
            <Link to={`/booking/${specialist._id}`}>
              <button class="w-full rounded-md bg-blue-500  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75 cursor-pointer">
                Book now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SpecialistCard;
