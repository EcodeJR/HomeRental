const Home= () => {
    return ( 
        <section className='w-fit h-fit'>
            <div className="w-screen min-h-screen bg-hero bg-fixed bg-cover grid grid-cols-1 place-items-center px-10 pt-[10vh] lg:flex lg:justify-around pb-3 relative">

                <nav className="absolute top-0 left-0 flex items-end justify-end px-10 w-screen min-h-[10vh] bg-transparent">
                    <a href="/" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent border-b-2 border-b-red-600 z-20 mx-3">Home</a>
                    <a href="/" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">About</a>
                    <a href="/" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">Services</a>
                    <a href="/" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">Contact</a>
                    <hr className="absolute bottom-0 left-0 w-screen bg-gray-400 h-[2px] border-none z-10" />
                </nav>



                <div className="lg:w-2/5">
                    <h2 className="text-3xl sm:text-5xl capitalize lg:text-6xl font-bold text-white">The most affortable place to stay in the san franciso bay area</h2>
                </div>
                <div className="w-fit flex flex-col items-center justify-center">
                    <img src="./map.png" alt="A map containing the root to our location" />
                    <div className="w-fit p-4 flex items-center justify-center bg-white rounded-md">
                        <select id="Type" className="border-[1px] rounded-tl-md rounded-bl-md font-bold p-2 lg:py-4 lg:px-5 outline-none">
                            <option value="all type">All Type</option>
                            <option value="1 bedroom">1 Bedroom</option>
                            <option value="self contain">Self Contain</option>
                            <option value="duplex">Duplex</option>
                        </select>
                        <select id="Location" className="border-[1px] font-bold p-2 lg:py-4 lg:px-5 outline-none">
                            <option value="all location">Location</option>
                            <option value="abuja">Abuja</option>
                            <option value="lagos">Lagos</option>
                            <option value="enuga">Enuga</option>
                        </select>
                        <button className="p-2 lg:py-4 lg:px-5 cursor-pointer rounded-tr-md rounded-br-md bg-blue-500 hover:bg-blue-400"><i className='bx bx-search text-white text-xl'></i></button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Home;