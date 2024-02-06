import { Button } from "@material-tailwind/react";



const Jumbotron = () => {
    return (
        <>


            <section
                class="relative bg-[url(https://cdn.pixabay.com/photo/2015/03/19/19/27/iceland-681334_1280.jpg)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    class="absolute inset-0 bg-teal-700 mix-blend-multiply"
                    aria-hidden="true"
                ></div>

                <div
                    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div class="max-w-xl text-center">
                        <h1 class="text-3xl font-extrabold sm:text-5xl text-white">
                            Surrender to your

                            <strong class="block font-extrabold text-rose-700 text-red-700"> Wanderlust. </strong>
                        </h1>

                        <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                            Choose today your next adventure.
                        </p>

                        <div class="mt-8 flex flex-wrap gap-8 justify-center text-center">
                            <Button color="teal" variant="gradient" size="md" className="rounded-3xl">Start exploring</Button>
                            <Button color="red" variant="filled" size="md" className="rounded-3xl">Learn More</Button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Jumbotron;