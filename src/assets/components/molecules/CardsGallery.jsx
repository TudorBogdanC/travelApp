import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Container } from "react-bootstrap"
import Card from "../atoms/Card";
import Review from "../atoms/Review";

const CardsGallery = () => {
    return (
        <Container>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 500: 2 ,750: 2, 900: 3 }}
                style={{marginLeft:"2.5rem", marginTop:"5rem"}}
                >
                <Masonry>
                <Review
                    review="Wonderful stay in London. I had 5 days of such a wholesome adventure. Be it the Underground, the double-deckers, or just the freedom to walk down Carnaby Street, I would definetely travel again with Wanderlust"
                    photo="../src/assets/img/avatar-1.jpg"
                    name="Angel Dust"
                    occupation="Famous actor in adult movies"
                    value={5}
                    />
                    <Card
                        photo="https://cdn.pixabay.com/photo/2020/01/14/03/53/tokyo-4763976_1280.jpg"
                        alt="tokyo"
                        title="Tokyo"
                        description="Roam the busy streets of Shibuya at night or get lost on the sunny streets of Shinjuku. Wander off under the blossoming cherry trees in spring or stop and eat some hot Takoyaki in winter."
                        price="3600"
                        time="2 weeks"
                    />
                    
                    <Card
                        photo="https://cdn.pixabay.com/photo/2020/11/12/16/55/road-5736078_1280.jpg"
                        alt="london"
                        title="London"
                        description="Hop on the next bus to Piccadilly Circus. Then give in the shopping spree at Harrod's and to finish off, eat the traditional fish and chips by the pub near Saint Paul's Cathedral."
                        price="500"
                        time="3 days"
                    />
                    
                    <Card
                        photo="https://cdn.pixabay.com/photo/2017/02/01/16/15/colosseum-2030639_1280.jpg"
                        alt="rome"
                        title="Rome"
                        description="Enjoy a night at St. Peter's Square or take a walk around the Colosseum. Explore the beauty, the style and history of one the most ancient metropolis. After all, Italians do it better!"
                        price="750"
                        time="1 week"
                    />
                    <Review
                    review="What a delightful 2 weeks of bliss I had in Iceland, last year. Wanderlust managed to organize the ultimate getaway experience from work I badly needed. The tour was well organised and took us around 7 days to explore the region. I miss already the peace and beauty of those lands."
                    photo="../src/assets/img/avatar-2.jpg"
                    name="Carmilla Carmine"
                    occupation="CEO on vacation"
                    value={4}
                    
                    />
                    <Card
                        photo="https://images.unsplash.com/photo-1525218291292-e46d2a90f77c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBhcmlzfGVufDB8fDB8fHww"
                        alt="paris"
                        title="Paris"
                        description="Wether you are visiting the Eiffel Tower or the Louvre Museum, Paris is a must travelling destination. You can literally get lost through the city streets, since all streets resemble each other. Architecture at its finest but also a loving interest for all that it is beauty and food."
                        price="675"
                        time="4 days"
                    />
                    <Review
                    review="Just like in the 1953's 'Roman Holidays', I lived the most romantic vacation in the Eternal city of Rome. I enjoyed eating carbonara, exploring the Borghese Gallery of Art and watching in complete awe the sunset over the roman acqueducts. Will surely come back again!"
                    photo="../src/assets/img/avatar-3.jpg"
                    name="Vaggie Brave"
                    occupation="Wealthy heir"
                    value={5}
                    
                    />
                    <Card
                        photo="https://plus.unsplash.com/premium_photo-1688901653255-88753dbcb6ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="warsaw"
                        title="Warsaw"
                        description="Discover one of the most beautiful city of Eastern Europe and fall in love with its wonderful architecture and rich culture. The town centre has been completely rebuilt after the bombing of World War II."
                        price="300"
                        time="2 weeks"
                    />

                     <Review
                    review="As a bartender I usually go abroad and search for some inspiration for my next cocktail. I found this place and I was hooked. Berlin with its fantastic views and nightlife made me fall in love. And their cocktails are fantastic too."
                    photo="../src/assets/img/avatar-8.jpg"
                    name="Daniel Husk"
                    occupation="Bartender in search for new cocktails"
                    value={5}
                    
                    />
                    
                    <Card
                        photo="https://cdn.pixabay.com/photo/2020/06/12/09/15/berlin-5289802_1280.jpg"
                        alt="berlin"
                        title="Berlin"
                        description="Berlin's Wall has fallen more than 30 years ago but you can still savour what it was like to live in this city during the Communism era. Just wander off the far eastern neighborhood. If you can, pay a visit to the Stasi Museum."
                        price="750"
                        time="10 days"
                    />


                    <Card
                        photo="https://cdn.pixabay.com/photo/2017/02/25/17/38/george-washington-bridge-2098351_1280.jpg"
                        alt="new york"
                        title="New York"
                        description="Broadway shows, the Met, the Empire State, the Wall Street, and many more. New York is one of the most visited cities in the world. It is so iconic that most of its landmarks are well-known even by people who have never visited the city."
                        price="2250"
                        time="2 weeks"
                    />
                     
                  
                </Masonry>
            </ResponsiveMasonry>
        </Container>
    )
}

export default CardsGallery;