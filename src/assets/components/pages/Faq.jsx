import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { Container } from "react-bootstrap";

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const Faq = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Container className="my-5 mx-5">
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="mx-10 w-auto">
                    <AccordionHeader onClick={() => handleOpen(1)}>What is Wanderlust?</AccordionHeader>
                    <AccordionBody>
                        Wanderlust is a travel agency that specialises in booking vacation packages all over the world. 
                        With a subscription fee, you can choose from thousands of destinations and experience incredible discounts.
                        We&apos;re constantly trying to express
                        ourselves and actualize your ideal adventure.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className="my-5 mx-10 w-auto">
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        Do you offer Premium packages too?
                    </AccordionHeader>
                    <AccordionBody>
                        We have that covered too. With a subscription fee, you can access all of our premium packages taking advantage of exclusive offers on discount. There&apos;s plenty to see and do.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className="my-5 mx-10 w-auto">
                    <AccordionHeader onClick={() => handleOpen(3)}>
                        What does your average bundle do?
                    </AccordionHeader>
                    <AccordionBody>
                        We&apos;re offering bundles that include everything you need to book a vacation. 
                        From your trip to your destination, be it be plane or by train, to the hotel or the private house you'&apos;ve chosen, 
                        and sight-seeing tours and activities. We offer the maximum value for your money and organise everything so that you can enjoy
                        your vacation without worrying about anyhting.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} icon={<Icon id={4} open={open} />} className="my-5 mx-10 w-auto">
                    <AccordionHeader onClick={() => handleOpen(4)}>Can I use Paypal? What if I don&apos;t have one? Can I pay when I check out?</AccordionHeader>
                    <AccordionBody>
                        We accept credit cards, debit cards, and PayPal. We don't accept cash or checks. American Express is also accepted.
                        Payment is due upon booking.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} icon={<Icon id={5} open={open} />} className="my-5 mx-10 w-auto">
                    <AccordionHeader onClick={() => handleOpen(5)}>I can&apos;t travel anymore but I already booked. Can I still cancel?</AccordionHeader>
                    <AccordionBody>
                        Yes, you can cancel your booking but we will refund 80% of your payment. 
                        We will charge a fee that represents the remaing 20%.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} icon={<Icon id={6} open={open} />} className="my-5 mx-10 w-auto">
                    <AccordionHeader onClick={() => handleOpen(6)}>Do you offer an insurance plan?</AccordionHeader>
                    <AccordionBody>
                        All of our packages include an insurance plan that cover the cost of your trip and health related issues that may arise during your vacation.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 7} icon={<Icon id={7} open={open} />} className="my-5 mx-10 w-auto">
                    <AccordionHeader onClick={() => handleOpen(7)}>I don&apos;t have a Visa or passport. Can I still travel?</AccordionHeader>
                    <AccordionBody>
                        Be aware that in some countries we require you to have a passport or a visa in order to travel. 
                        Upon booking, a valid form of identification is required.
                        Be sure to check with your local authorities.
                        We don&apos;t take further responsability if you happen to lose your passport or visa.
                    </AccordionBody>
                </Accordion>
            </Container>
        </>
    );
}

export default Faq;