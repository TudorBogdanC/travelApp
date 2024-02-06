import { Typography, Avatar, Rating } from "@material-tailwind/react";
 
const Review = (props) => {
  return (
    <div className="px-8 text-center mx-5 my-5">
      <Typography variant="h5" color="blue-gray" className="mb-6 font-medium">
        &quot;{props.review}&quot;
      </Typography>
      <Avatar
        src={props.photo}
        alt="image"
        size="lg"
      />
      <Typography variant="h6" className="mt-4">
        {props.name}
      </Typography>
      <Typography color="gray" className="mb-4 font-normal">
        {props.occupation}
      </Typography>
      <Rating value={props.value} readonly />
    </div>
  );
}

export default Review;