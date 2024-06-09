import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'


import Img1 from '../assets/1.png'
import Img2 from '../assets/2.png'
import Img3 from '../assets/3.png'
import Img4 from '../assets/4.png'
import Img5 from '../assets/5.png'
import Img6 from '../assets/6.png'

function Home() {
    useEffect(() => {
        document.title = "Home";
    }, []);

    const dishes = [
        {
            title: "Boiled Eggs",
            img: Img1,
            description: "lorem ipsum taken is hot. it is very healthy and i suggest that you eat this."
        },
        {
            title: "Ramen",
            img: Img2,
            description: "lorem ipsum taken is hot. it is very healthy and i suggest that you eat this."
        },
        {
            title: "Grilled Chicken",
            img: Img3,
            description: "lorem ipsum taken is hot. it is very healthy and i suggest that you eat this."
        },
        {
            title: "Cake",
            img: Img4,
            description: "lorem ipsum taken is hot. it is very healthy and i suggest that you eat this."
        },
        {
            title: "Burger",
            img: Img5,
            description: "lorem ipsum taken is hot. it is very healthy and i suggest that you eat this."
        },
        {
            title: "Pan Cake",
            img: Img6,
            description: "lorem ipsum taken is hot. it is very healthy and i suggest that you eat this."
        },
    ]

    return (
        <div className="w-full lg:h-screen bg-foody bg-cover bg-scroll overflow-hidden bg-no-repeat">
            <Navbar />

            <div className="w-full h-full bg-black/40 backdrop-blur-sm bg-scroll flex justify-center  md:overflow-hidden">
                <div className="my-10">
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-7">
                    {
                        dishes.map((dish) => <Card img={dish.img} price="25$" title={dish.title}>{dish.description}</Card>)
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home