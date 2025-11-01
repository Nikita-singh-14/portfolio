import { useState, useEffect } from 'react';

const Home = ({id}) => {
    const roles = ["FullStack Developer", "Graphics Designer"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const ANIMATION_DURATION = 200; 
        const DISPLAY_DURATION = 2000; 

        const fadeOutTimer = setTimeout(() => {
            setIsFading(true);
        }, DISPLAY_DURATION);

        const changeRoleTimer = setTimeout(() => {
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
            setIsFading(false); 
        }, DISPLAY_DURATION + ANIMATION_DURATION);


        return () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(changeRoleTimer);
        };
    }, [currentRoleIndex, roles.length]); 

    
    const currentRole = roles[currentRoleIndex];

    return (
        <div id={id} className=" h-[21%] flex flex-col   p-10 bg-[url('pic.jpg')] bg-cover  w-full justify-center items-center">
            <h1 className="text-6xl font-bold text-gray-800">Nikita Singh</h1>
            
            <p className="text-2xl text-gray-600 mt-2">
                I'm a{' '}
                <span 
                    className={`

                        text-blue-600 
                        font-semibold 
                        inline-block 
                        min-w-64     
                        text-left   
                        transition-opacity 
                        duration-200 
                        ease-in-out
                        ${isFading ? 'opacity-0' : 'opacity-100'}
                    `}
                >
                    {currentRole}
                </span>
            </p>
        </div>
    )
}

export default Home;