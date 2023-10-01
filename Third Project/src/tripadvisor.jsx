import { Card } from "flowbite-react";
async function getReviews(location_id) {
  const options = { method: "GET", headers: { accept: "application/json" } };
  const response = await fetch(
    `https://api.content.tripadvisor.com/api/v1/location/${location_id}/reviews?key=3ABF6B6646854A10B928AED11195973C&language=en`,
    options
  );
  return response.json();
}

const data = await getReviews(20328828);
export default function API() {
  console.log(data.data);
  return data.data.map((review) => {
    return (
      <Card className="m-16" href="#">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <p>{review.title}</p>
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <p>{review.text}</p>
        </p>
        <p className="font-semibold text-slate-700 dark:text-gray-400 text-right">
          - {review.user.username}
        </p>
        <img
          className="rounded-lg pc:w-64 mobile:w-16"
          src={review.user.avatar.medium}
          alt=""
        />
      </Card>
    );
  });
}
