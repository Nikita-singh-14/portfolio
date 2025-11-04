interface ResumeProps {
    id: string; // or whatever type 'id' should be
}

interface BulletPoint {
    id: number;
    text: string;
}

interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    dateRange: string;
    description: string;
    bullets: BulletPoint[];
}

interface EducationItem {
    degree: string;
    institution: string;
    location: string;
    dateRange: string;
    grade: string;
    relevantCourses: string[];
}

interface SummaryData {
    paragraph: string;
    bullets: BulletPoint[];
}

// --- MOCK DATA BASED ON IMAGE CONTENT ---
const CV_DATA = {
    name: "Nikita Kumari",
    title: "FullStack Developer",
    summary: {
        paragraph: "Experienced Machine Learning Researcher and AI Engineer with proven expertise in deep learning, computer vision, and agentic AI systems. Recognized internationally for technical excellence with publications under review at IEEE JBHI and competitive achievements representing India globally. Proven ability to communicate complex findings to both technical and non-technical stakeholders.",
        bullets: [
            { id: 1, text: "Final year Bachelor of Technology student at National Institute of Technology Jamshedpur, India." },
            { id: 2, text: "I have worked in areas like Machine Learning, Data Analysis, Data Visualization, Generative AI, Computer Vision and deployment of the projects." },
            { id: 3, text: "Selected for prestigious Erasmus Short Mobility Program (from July-August 2025) at Technical University of Crete, Greece, where I co-authored research on efficient channel attention mechanisms for automated neuroimaging diagnosis." },
            { id: 4, text: "Research Intern at IIT Roorkee's Safe Trip Lab (April-June 2025), engineered trajectory-based conflict detection models achieving 28% accuracy improvement and 35% reduction in false positives across 50+ intersection scenarios." },
            { id: 5, text: "AI/ML Research Intern at Defence Research and Development Organisation (DRDO), Government of India (May-July 2024), contributed to AI-powered materials R&D using TensorFlow and Python, improving manufacturing efficiency by 22% and precision by 18%. Received a LOR for my technical findings from the scientist KNS Pavan Kumar (Scientist-C, DYSL-5M)." },
            { id: 6, text: "Secured 6th rank globally in Design Report with Team Phoenix at SAE Aero Design West 2025, California, competing against 75+ international teams and leading technical design initiatives." },
            { id: 7, text: "Developed production-ready AI systems including modular conversational platforms with LangGraph and Groq API (35% latency reduction) and materials analytics tools serving 100+ researchers with 10GB+ datasets." },
            { id: 8, text: "Keen to explore the latest advancements in machine learning and data science, aiming to expand my knowledge and contribute to the growth of the ML community worldwide." },
        ],
    },
    experience: [
        {
            title: "GEN AI DEVELOPER INTERN",
            company: "MadScientist, Inc, DE, USA",
            location: "August 2025 - Present",
            dateRange: "", // Location is used here
            description: "",
            bullets: [
                { id: 1, text: "Playing a critical role in shaping MadScientist's mission of accelerating innovation through building Gen AI applications and new technology for RIS Agent platform." },
                { id: 2, text: "Developing and deploying generative AI applications using advanced language models and agentic AI frameworks, integrating cutting-edge AI solutions for real-time information processing and intelligent automation." },
            ],
        },
        {
            title: "MACHINE LEARNING RESEARCHER",
            company: "Digital Image & Sensing Lab, Technical University of Crete, Chania, Greece",
            location: "June 2025 - July 2025",
            dateRange: "", // Location is used here
            description: "",
            bullets: [
                { id: 1, text: "Selected for Erasmus Short Mobility Program and co-authored research paper “The Role of Efficient Channel Attention in Deep Learning for Classifying FCD-II in MRI,” currently under review at IEEE JBHI." },
                { id: 2, text: "Optimized VGG16, VGG19, and DenseNet201 architectures with channel attention mechanisms for automated neuroimaging diagnosis, achieving 96.8% classification precision on 15,000+ multi-planar MRI datasets." },
            ],
        },
        {
            title: "RESEARCH INTERN",
            company: "Safe Trip Lab, IIT Roorkee (Remote)",
            location: "April 2025 - June 2025",
            dateRange: "", // Location is used here
            description: "",
            bullets: [
                { id: 1, text: "Engineered trajectory-based conflict detection models using AI and machine learning algorithms, improving accuracy in traffic risk assessment by 28% and reducing false positives by 35% across 50+ intersection scenarios." },
                { id: 2, text: "Analyzed driver behavior data from 10,000+ vehicle trajectories to identify high-risk zones and collision hotspots, contributing to evidence-based urban safety planning initiatives for 4 metropolitan areas with 60% faster response times." },
            ],
        },
        {
            title: "AI/ML RESEARCH INTERN",
            company: "Defence Research and Development Organisation (DRDO), Government of India, Hyderabad",
            location: "May 2024 - July 2024",
            dateRange: "", // Location is used here
            description: "",
            bullets: [
                { id: 1, text: "Researched Al and ML techniques for 3D and 4D printing processes using Python and TensorFlow, improving manufacturing efficiency by 22% and precision by 18%." },
                { id: 2, text: "Contributed to testing of AMDAD (Accelerated Materials Design & Development), an in-house tool for Al-powered materials R&D, advancing defense manufacturing capabilities and received letter of recommendation for research contributions." },
            ],
        },
    ],
    education: [
        {
            degree: "BACHELOR OF TECHNOLOGY",
            institution: "National Institute of Technology Jamshedpur, Jharkhand, India",
            location: "2022 - 2026",
            dateRange: "2022 - 2026",
            grade: "Grade: 3.0/4.0",
            relevantCourses: [
                "Data Mining", "Data Management for Analytics", "Computation & Visualization",
                "Engineering Probability & Statistics", "Machine Learning & Artificial Intelligence"
            ],
        },
    ],
};

// --- COMPONENTS ---

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-xl font-bold text-gray-800 pb-1 border-b-2 border-gray-400 mb-4 tracking-wider uppercase">{children}</h2>
);

const BulletList: React.FC<{ items: BulletPoint[] }> = ({ items }) => (
    <ul className="list-disc ml-5 space-y-2 text-gray-700">
        {items.map(item => (
            <li key={item.id} className="text-sm pl-2">
                {item.text}
            </li>
        ))}
    </ul>
);

const Summary: React.FC<{ data: SummaryData }> = ({ data }) => (
    <section className="mb-8">
        <SectionTitle>Summary</SectionTitle>
        <p className="text-sm mb-4 text-gray-700 leading-relaxed">{data.paragraph}</p>
        <BulletList items={data.bullets} />
    </section>
);

const Education: React.FC<{ data: EducationItem[] }> = ({ data }) => (
    <section className="mb-8">
        <SectionTitle>Education</SectionTitle>
        {data.map((edu, index) => (
            <div key={index} className="mb-4">
                <div className="flex justify-between items-start">
                    <h3 className="text-md font-bold text-gray-800 uppercase">{edu.degree}</h3>
                    <span className="text-sm font-semibold text-gray-600">{edu.dateRange}</span>
                </div>
                <p className="text-sm font-medium text-gray-700 italic">{edu.institution}, {edu.location}</p>
                <p className="text-sm mt-1 mb-2">
                    <span className="font-semibold">Grade:</span> {edu.grade}
                </p>
                <p className="text-xs text-gray-600">
                    <span className="font-semibold">Relevant Coursework:</span> {edu.relevantCourses.join(', ')}.
                </p>
            </div>
        ))}
    </section>
);

const Experience: React.FC<{ data: ExperienceItem[] }> = ({ data }) => (
    <section className="mb-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="space-y-6">
            {data.map((exp, index) => (
                <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
                    {/* Header Row */}
                    <div className="flex justify-between items-start">
                        <h3 className="text-md font-bold text-gray-800">{exp.title}</h3>
                        <span className="text-sm font-semibold text-gray-600">{exp.location}</span>
                    </div>

                    {/* Company and Date Row */}
                    <div className="flex justify-between items-start mb-2">
                        <p className="text-sm font-medium text-gray-700 italic">{exp.company}</p>
                        <span className="text-xs text-gray-500">{exp.dateRange || exp.location.split(' - ')[0]}</span>
                    </div>

                    {/* Description / Bullets */}
                    {exp.description && <p className="text-sm text-gray-700 mb-2">{exp.description}</p>}
                    <BulletList items={exp.bullets} />
                </div>
            ))}
        </div>
    </section>
);

const Resume: React.FC<ResumeProps> = ({ id }) => {
    return (
        <div id={id} className='about flex flex-col gap-10 w-full'>
            <div >
                <b className='text-2xl'>Resume</b>
                <div className='h-1 bg-blue-500 w-[8rem] rounded-2xl mt-1'></div>
            </div>


            <div className='flex flex-col items-center  gap-10'>
                <div className="font-['Inter']  bg-gray-50 p-4 sm:p-8">
                    {/* Load Tailwind CSS from CDN - assumed to be available in this environment */}
                    <script src="https://cdn.tailwindcss.com"></script>

                    <div className="bg-white rounded-sm p-6 sm:p-10 ">

                        {/* Name and Title Header */}
                        <header className="text-center mb-8 pb-4 border-b border-gray-300">
                            <h1 className="text-3xl font-extrabold tracking-widest text-gray-900 uppercase">
                                {CV_DATA.name}
                            </h1>
                            <p className="text-base font-semibold text-indigo-600 mt-1 uppercase tracking-wider">
                                {CV_DATA.title}
                            </p>
                        </header>

                        <div className="flex flex-col lg:flex-row gap-15">

                            {/* Left Column: Summary & Education (Wider) */}
                            <div className="lg:w-2/4">
                                <Summary data={CV_DATA.summary} />
                                <Education data={CV_DATA.education} />
                            </div>

                            {/* Right Column: Experience (Narrower) */}
                            <div className="lg:w-2/5 border-l-2 lg:pl-6 border-gray-100">
                                <Experience data={CV_DATA.experience} />
                            </div>
                        </div>
                    </div>
                </div>




                {/* Download Button - Download functionality ke liye 'a' tag aur 'download' attribute zaroori hai */}
                <a
                    href="resume.jpg"
                    // 'download' attribute file ko download karne ke liye trigger karta hai
                    download="Nikita_Singh_Resume.jpg" // Download hone par is naam se file save hogi
                    className="
            bg-blue-600 hover:bg-blue-700 text-white font-semibold 
            py-3 px-8 rounded-full shadow-xl 
            transition duration-300 ease-in-out transform hover:-translate-y-1
            flex items-center justify-center space-x-2
            text-lg
          "
                    aria-label="Download the full resume document"
                >
                    {/* Lucide icon for better visual appeal */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download-cloud"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" /><path d="M12 15v6" /><path d="m15 18-3 3-3-3" /></svg>
                    <span className="resumeD">Download Resume</span>
                </a>
            </div>

        </div>
    )
}

export default Resume