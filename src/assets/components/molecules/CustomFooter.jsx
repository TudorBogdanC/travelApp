import { Typography } from "@material-tailwind/react";
 
 const CustomFooter = () =>  {
  return (
    <footer className="flex w-50 flex-row flex-wrap items-center justify-between gap-y-6 gap-x-12 border-t border-zinc-900 py-6 text-center md:justify-between my-5 mx-5">
      <Typography color="blue-gray" className="font-normal">
        &copy; 2024 Wanderlust
      </Typography>
      <ul className="flex flex-wrap justify-between gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-teal-500 focus:text-teal-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-teal-500 focus:text-teal-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-teal-500 focus:text-teal-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="blue-gray"
            className="font-normal transition-colors hover:text-teal-500 focus:text-teal-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
    </footer>
  );
}

export default CustomFooter;