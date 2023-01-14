const ContentTwo = () => {
    return ( 
        <section className="h-fit w-screen bg-white p-20">
            <h1 className="text-2xl sm:text-4xl font-bold capitalize"><span className="border-b-4 border-b-[#F4511E]">minimum living cost</span> takes care of everything</h1>
            <div className="w-full h-fit flex flex-col lg:flex-row items-center justify-center">
                <img src="./contentTwoImg.png" alt="It contains a property" />
                <div className="grid grid-cols-3 gap-5 w-full lg:h-[50vh]">
                    <div className="">
                        <img src="./icons/vector.png" alt="" className="p-3 rounded-md shadow-lg"/>
                        <p className="font-bold text-xs sm:text-xl mt-1">Pay as Little as possible!</p>
                    </div>

                    <div className="">
                        <img src="./icons/vector1.png" alt="" className="p-3 rounded-md shadow-lg"/>
                        <p className="font-bold text-xs sm:text-xl mt-1">Enjoy wisdom of community!</p>
                    </div>

                    <div className="">
                        <img src="./icons/vector2.png" alt="" className="p-3 rounded-md shadow-lg"/>
                        <p className="font-bold text-xs sm:text-xl mt-1">Let's somebody else take care of Landlord!</p>
                    </div>

                    <div className="">
                        <img src="./icons/vector3.png" alt="" className="p-3 rounded-md shadow-lg"/>
                        <p className="font-bold text-xs sm:text-xl mt-1">Enjoy peaceful Environment!</p>
                    </div>

                    <div className="">
                        <img src="./icons/vector4.png" alt="" className="p-3 rounded-md shadow-lg"/>
                        <p className="font-bold text-xs sm:text-xl mt-1">Stay Safe! Save Money!</p>
                    </div>

                    <div className="">
                        <img src="./icons/vector5.png" alt="" className="p-3 rounded-md shadow-lg"/>
                        <p className="font-bold text-xs sm:text-xl mt-1">Pay for what you use !</p>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ContentTwo;