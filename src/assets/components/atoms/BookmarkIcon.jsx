import { FcLike } from "react-icons/fc";
import { CiBookmarkPlus } from "react-icons/ci";

 const BookmarkIcon = () => {
    return (
        <>
           <div className="flex gap-2">
                <FcLike size={25}/>
                <CiBookmarkPlus size={25}  />
           </div>
        </>
    )
 }

 export default BookmarkIcon;