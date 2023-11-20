import bg from "../../images/bg3.jpg"
import aboutImg from '../../images/apple.png';
import { FaAppleAlt } from "react-icons/fa";

const Home = () => {
    return <div>
        <img className="w-full h-screen" src={bg} alt="" />
        <div className="mx-28">   
            {/* about section */}
            <section className="w-2/3 flex items-center mx-auto gap-28 py-20">
                <img src={aboutImg} alt="" />
                <div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-5xl font-bold text-green-500">About</h1>
                        <p className="text-xl text-green-800">Natural Fruit is a new 
                         online platform that sells fresh,     
                            natural fruits. We offer a wide variety of fruits, all 
                             of which are grown without the use of pesticides or 
                            herbicides. Our fruits are also hand-picked and 
                            carefully packed to ensure that they arrive fresh and 
                            delicious. We believe that Natural Fruits is the best 
                             way to buy fresh, natural fruits online....</p>
                    </div>
                    <div className="flex justify-end">
                        <button className="btn btn-primary text-white text-xl 
                        mt-8 hover:bg-white hover:text-green-500 transition 
                         duration-700 ease-in-out">Read 
                        More</button>
                    </div>
                </div>
            </section>

            <section>
                <div></div>
            </section>
            {/* fruits Section */}
            <section className="w-9/12 mx-auto pb-20">
                <div className="flex flex-col items-center gap-3 text-green-500">
                    <FaAppleAlt className="text-2xl text-green-600"/>
                    <span className="text-5xl font-bold">Our 
                     Fruits</span>
                </div>
                <div className="grid grid-cols-3 gap-10 my-16">
                    <div className="card w-96 bg-base-100 shadow-xl border-2 
                    hover:border-green-600 rounded-none transition duration-700
                    ease-in-out hover:scale-105">
                        <figure>
                            <img src="https://world5.commonsupport.com/2017/warsaw/images/gallery/2.jpg" />
                        </figure>
                        <div className="card-body">
                            <div className="flex flex-col items-center gap-2">    
                                <h2 className="card-title">Kiwi Fruits</h2>
                                <p className="text-lg text-green-600 
                                font-semibold">400 
                                Tk</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary text-white 
                                text-base mt-8 hover:bg-white hover:text-green-500 
                                transition duration-700 ease-in-out">Add To 
                                 Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2 
                    hover:border-green-600 rounded-none transition duration-700
                    ease-in-out hover:scale-105">
                        <figure>
                            <img src="https://world5.commonsupport.com/2017/warsaw/images/gallery/3.jpg" />
                        </figure>
                        <div className="card-body">
                            <div className="flex flex-col items-center gap-2">    
                                <h2 className="card-title">Tomatoes</h2>
                                <p className="text-lg text-green-600 
                                font-semibold">100
                                Tk</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary text-white 
                                text-base mt-8 hover:bg-white hover:text-green-500 
                                transition duration-700 ease-in-out">Add To 
                                 Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2 
                    hover:border-green-600 rounded-none transition duration-700
                    ease-in-out hover:scale-105">
                        <figure>
                            <img src="https://world5.commonsupport.com/2017/warsaw/images/gallery/1.jpg" />
                        </figure>
                        <div className="card-body">
                            <div className="flex flex-col items-center gap-2">    
                                <h2 className="card-title">Passion Fruits</h2>
                                <p className="text-lg text-green-600 
                                font-semibold">700 
                                Tk</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary text-white 
                                text-base mt-8 hover:bg-white hover:text-green-500 
                                transition duration-700 ease-in-out">Add To 
                                 Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2 
                    hover:border-green-600 rounded-none transition duration-700
                    ease-in-out hover:scale-105">
                        <figure>
                            <img src="https://world5.commonsupport.com/2017/warsaw/images/gallery/2.jpg" />
                        </figure>
                        <div className="card-body">
                            <div className="flex flex-col items-center gap-2">    
                                <h2 className="card-title">Kiwi Fruits</h2>
                                <p className="text-lg text-green-600 
                                font-semibold">400 
                                Tk</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary text-white 
                                text-base mt-8 hover:bg-white hover:text-green-500 
                                transition duration-700 ease-in-out">Add To 
                                 Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2 
                    hover:border-green-600 rounded-none transition duration-700
                    ease-in-out hover:scale-105">
                        <figure>
                            <img src="https://world5.commonsupport.com/2017/warsaw/images/gallery/3.jpg" />
                        </figure>
                        <div className="card-body">
                            <div className="flex flex-col items-center gap-2">    
                                <h2 className="card-title">Tomatoes</h2>
                                <p className="text-lg text-green-600 
                                font-semibold">100
                                Tk</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary text-white 
                                text-base mt-8 hover:bg-white hover:text-green-500 
                                transition duration-700 ease-in-out">Add To 
                                 Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl border-2 
                    hover:border-green-600 rounded-none transition duration-700
                    ease-in-out hover:scale-105">
                        <figure>
                            <img src="https://world5.commonsupport.com/2017/warsaw/images/gallery/1.jpg" />
                        </figure>
                        <div className="card-body">
                            <div className="flex flex-col items-center gap-2">    
                                <h2 className="card-title">Passion Fruits</h2>
                                <p className="text-lg text-green-600 
                                font-semibold">700 
                                Tk</p>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary text-white 
                                text-base mt-8 hover:bg-white hover:text-green-500 
                                transition duration-700 ease-in-out">Add To 
                                 Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary text-white 
                    text-lg hover:bg-white hover:text-green-500 
                    transition duration-700 ease-in-out">View All</button>
                </div>
            </section>
        </div>
    </div>
}

export default Home;