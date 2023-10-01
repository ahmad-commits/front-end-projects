import { Carousel, Datepicker} from "flowbite-react";
import API from "./tripadvisor";
export default function Home() {
  return (
    <div className="p-16">
      <div className="h-96">
        <CarouselComp />
      </div>
      <div className="m-16"></div>
      <div className="mb-6">
        <label
          for="large-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Enter TripAdvisor ID:
        </label>
        <input
          type="text"
          className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
      </div>
      <API />
      </div>
  );
}

function CarouselComp() {
  return (
    <Carousel>
      <img alt="..." src="./src/images/flight_1.jpg" />
      <img alt="..." src="./src/images/flight_2.jpg" />
    </Carousel>
  );
}
