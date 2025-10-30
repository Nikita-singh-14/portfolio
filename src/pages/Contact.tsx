
import Map from './Map';

const Contact = () => {



    return (
        <div className='about flex flex-col gap-10 h-full'>
            <div >
                <b className='text-2xl'>Contact</b>
                <div className='h-[0.4rem] bg-blue-500 w-[7.5rem] rounded-2xl'></div>
            </div>
            <div className='flex flex-col gap-15 '>
                <p className='flex-1'>
                    I'm passionate about solving real-world problems with Java and web development. Whether you want to
                    collaborate on a project, discuss design ideas, or offer internship and job opportunities – I'd love
                    to hear from you. 💻
                </p>
                <div className=" flex flex-col md:flex-row gap-26">

                    <Map />

                    <form className="w-[45%] contBox  flex flex-col gap-7">

                        <div className="flex flex-col gap-7">

                            <div className="w-[100%]  ">
                                <label htmlFor="name" className="block text-2xl font-medium text-gray-700 mb-1">Your Name</label>
                                <div className='flex items-center gap-5'>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-[100%] text-2xl h-12 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                    />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                                <label htmlFor="email" className="block text-2xl font-medium text-gray-700 mb-1">Email Address</label>
                                <div className='flex items-center gap-2'>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        // ✨ ADDED TAILWIND STYLES TO INPUT
                                        className="w-[100%] text-2xl h-12 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Subject Input */}
                        <div className="relative">
                            <label htmlFor="subject" className="block text-2xl font-medium text-gray-700 mb-1">Subject</label>
                            <div className='flex items-center gap-2'>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    required
                                    // ✨ ADDED TAILWIND STYLES TO INPUT
                                    className="w-[100%] text-2xl h-12 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                />
                            </div>
                        </div>

                        {/* Message Textarea */}
                        <div className="relative">
                            <label htmlFor="message" className="block text-2xl font-medium text-gray-700 mb-1">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                className="w-[100%] text-2xl p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 h-30"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className='flex justify-center'>
                            <button
                                type="submit"
                                disabled={status === 'Sending...'}
                                className="w-[12rem] h-[4rem] text-2xl flex items-center justify-center px-6 py-3 border border-transparent font-medium rounded-xl shadow-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 transform hover:scale-[1.01] disabled:bg-blue-400"
                            >
                                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>

                    </form>




                </div>
            </div>

        </div>
    )
}

export default Contact