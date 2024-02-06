
import { Button } from "@material-tailwind/react";
import BookmarkIcon from "./BookmarkIcon";



const Card = (props) => {
    return (
        <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg mx-5 my-5" style={{backgroundColor:"white"}}>
            <img className="w-full" src={props.photo} alt={props.alt} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base">
                    {props.description}
                </p>
            </div>
            <div className="flex items-center justify-between w-full px-6 pt-5 pb-4 gap-5">
                <Button color="teal" variant="gradient" size="sm" className="rounded-3xl"> € {props.price} / {props.time}</Button>
                <BookmarkIcon />
            </div>
        </div>
    )
}

export default Card;