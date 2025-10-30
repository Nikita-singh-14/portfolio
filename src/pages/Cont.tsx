import React, { FC, useState, FormEvent, SVGProps } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet'; // Import LatLngExpression for typing

// --- Leaflet Icon Fix (TS2339 fix) ---
// This is the correct standard polyfill for react-leaflet icon issues
// We use 'as any' here to safely delete the protected property without strict type errors.
delete (L.Icon.Default.prototype as any)._getIconUrl; 

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
// ------------------------

// --- Custom Icon Component Interfaces ---
// Fixed: Applied SVGProps typing (TS7006 fix)
type IconProps = SVGProps<SVGSVGElement>;

const UserIcon: FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
);
const MailIcon: FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.83 1.83 0 0 1-2.06 0L2 7" />
    </svg>
);
const SendIcon: FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
    </svg>
);

const MessageCircleIcon: FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M7.9 20A9.9 9.9 0 1 0 4 16.1L2 22Z" />
    </svg>
);

// --- UPDATED MAP COMPONENT ---
// FC used for typing the functional component
const LocationMap: FC = () => {
    // Coordinates for Guru Ghasidas Vishwavidyalaya, Bilaspur
    // Fixed: Explicitly typed position as LatLngExpression (TS2322 fix)
    const position: LatLngExpression = [22.1287782, 82.1377255]; 
    const initialZoom = 14; 

    return (
        <div className="flex-[2] bg-gray-200 rounded-xl shadow-inner border border-gray-300 overflow-hidden">
            <MapContainer 
                // Fixed: The type is correct now (TS2322 fix)
                center={position} 
                zoom={initialZoom} 
                scrollWheelZoom={false}
                className="w-full h-full min-h-[300px]"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <b className="font-semibold">Guru Ghasidas Vishwavidyalaya</b>, <br /> Bilaspur, Chhattisgarh.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
// --- Main Contact Component ---
const Contact: FC = () => {
    // Fixed: Using useState and defined Status type (TS6133 fix)
    const [status, setStatus] = useState<'Idle' | 'Sending...' | 'Sent!' | 'Failed'>('Idle'); 

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        // Simple client-side validation
        const form = e.currentTarget as HTMLFormElement;
        if (!form.checkValidity()) {
            return;
        }

        setStatus('Sending...');

        // In a real application, you would send data to a backend endpoint here.
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success simulation
            setStatus('Sent!');
            form.reset(); // Clear the form on success

        } catch (error) {
            console.error("Contact form simulation failed:", error);
            setStatus('Failed');
        } finally {
             // Reset status after a short period (e.g., 5 seconds)
            setTimeout(() => setStatus('Idle'), 5000);
        }
    };
    
    // Determine button text and style based on status
    const getButtonContent = () => {
        switch (status) {
            case 'Sending...':
                return 'Sending...';
            case 'Sent!':
                return 'Message Sent!';
            case 'Failed':
                return 'Sending Failed';
            default:
                return 'Send Message';
        }
    };

    const getButtonStyle = () => {
        switch (status) {
            case 'Sending...':
                return 'bg-blue-400 cursor-not-allowed';
            case 'Sent!':
                return 'bg-green-600 hover:bg-green-700';
            case 'Failed':
                return 'bg-red-600 hover:bg-red-700';
            default:
                return 'bg-blue-600 hover:bg-blue-700';
        }
    };


    return (
        <div className='about flex flex-col gap-5'>
            <div>
                <b className='text-2xl'>Contact</b>
                <div className='h-[0.4rem] bg-blue-500 w-[5.5rem] '></div>
            </div>
            <div className='flex flex-col gap-8 '>
                <p className='flex-1'>
                    I'm passionate about solving real-world problems with Java and web development. Whether you want to
                    collaborate on a project, discuss design ideas, or offer internship and job opportunities – I'd love
                    to hear from you. 💻
                </p>
                <div className=" flex flex-col md:flex-row gap-16">
                    <LocationMap />
                    
                    {/* Fixed: Added onSubmit handler to use setStatus (TS6133 fix) */}
                    <form className="flex-1 space-y-6" onSubmit={handleSubmit}>
                        
                        {/* Status Message Display */}
                        {status === 'Sent!' && (
                             <div className="p-3 bg-green-100 text-green-700 rounded-lg font-medium text-center shadow-md">
                                 Thank you! Your message has been sent successfully.
                             </div>
                        )}
                         {status === 'Failed' && (
                             <div className="p-3 bg-red-100 text-red-700 rounded-lg font-medium text-center shadow-md">
                                 Error sending message. Please try again or contact me directly via LinkedIn.
                             </div>
                        )}

                        {/* Name and Email Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            
                            {/* Name Input */}
                            <div className="relative">
                                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Your Name</label>
                                <div className='mt-1 flex items-center border-b border-gray-300 focus-within:border-blue-500'>
                                    <UserIcon className="text-gray-400 flex-shrink-0" />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Jane Doe"
                                        required
                                        className="flex-1 block w-full p-2 outline-none border-none bg-transparent placeholder:text-gray-500"
                                    />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email Address</label>
                                <div className='mt-1 flex items-center border-b border-gray-300 focus-within:border-blue-500'>
                                    <MailIcon className="text-gray-400 flex-shrink-0" />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        required
                                        className="flex-1 block w-full p-2 outline-none border-none bg-transparent placeholder:text-gray-500"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        {/* Subject Input */}
                        <div className="relative">
                            <label htmlFor="subject" className='block text-sm font-medium text-gray-700'>Subject</label>
                            <div className='mt-1 flex items-center border-b border-gray-300 focus-within:border-blue-500'>
                                <MessageCircleIcon className="text-gray-400 flex-shrink-0" />
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Regarding a collaboration opportunity..."
                                    required
                                    className="flex-1 block w-full p-2 outline-none border-none bg-transparent placeholder:text-gray-500"
                                />
                            </div>
                        </div>

                        {/* Message Textarea */}
                        <div className="relative">
                            <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Tell me more about the project or role."
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 h-32 mt-1 placeholder:text-gray-500"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                // Disabled while sending or after success
                                disabled={status === 'Sending...' || status === 'Sent!'} 
                                className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg text-white transition duration-300 transform hover:scale-[1.01] ${getButtonStyle()}`}
                            >
                                <SendIcon className="mr-3" />
                                {getButtonContent()}
                            </button>
                        </div>
                    </form>
                    
                    
                </div>
            </div>
    
        </div>
    )
}

export default Contact;
