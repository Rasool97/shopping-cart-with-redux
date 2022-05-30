import { Link } from "react-router-dom";


const Notfound = () => {
    return (
        <section className="w-full h-[calc(100vh-80px)] px-4 md:px-16 flex items-center justify-center">
            <div className="container relative flex items-center justify-center">
                <div className="text-[14rem] text-zinc-300 font-black font-mono">
                    404
                </div>
                <div className="absolute z-10 w-10/12 text-center flex flex-col gap-y-5">
                    <h2 className="text-4xl font-bold text-gray-900">WE ARE SORRY, PAGE NOT FOUND!</h2>
                    <p className="text-gray-900">
                        THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABE.
                    </p>
                    <Link to='/products' className="bg-blue-500 text-sm font-medium text-white self-center py-2 px-4 rounded-md">BACK TO HOMEPAGE</Link>
                </div>
            </div>
        </section>
    );
};

export default Notfound;