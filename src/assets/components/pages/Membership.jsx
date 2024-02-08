
import { PricingCard } from "../molecules/PricingCard";

const Membership = () => {
    return (
        <>
          <div className="my-5 flex flex-col lg:flex-row gap-10 items-center justify-center">
            <PricingCard
            color="gray"
            membership="Basic"
            price="50"
            insurance="basic insurance for lost items"
            bonus="5% discount on your next booking"
            cancel="cancel fee of 15%"
            welcome="welcome package"
            assistance="24/7 support"
            />
            <PricingCard
            color="red"
            membership="Premium"
            price="85"
            insurance="premium health insurance"
            bonus="10% discount on your next booking"
            cancel="cancel fee of 10%"
            welcome="welcome package"
            assistance="24/7 support"
            />
            <PricingCard
            color="teal"
            membership="Deluxe"
            price="120"
            insurance="deluxe health and trip insurance"
            bonus="15% discount on your next booking"
            cancel="cancel fee of 5%"
            welcome="welcome package"
            assistance="24/7 support"
            />
          </div>
        </>
    )
}

export default Membership;