interface ExpProps{
  id: string; // or whatever type 'id' should be
}

const SKILLS_DATA = [
  {
    title: "AI & ML Development:",
    color: "text-red-600",
    bullets: [
      "Developed advanced ML models achieving 96.8% precision on medical imaging at **Technical University of Crete**, **Greece**, and improved traffic risk assessment accuracy by 28% at **IIT Roorkee** using **TensorFlow, PyTorch, OpenCV**.",
      "Built **Generative AI applications** using LangChain and agentic frameworks, reducing query latency by 35% for real-time automation and intelligent conversational systems.",
      "Optimized deep neural network architectures with advanced attention mechanisms for automated neuroimaging diagnosis, achieving superior performance in medical image analysis.",
    ],
  },
  {
    title: "Strategic Data Analysis & Research:",
    color: "text-blue-600",
    bullets: [
      "Conducted **trajectory-based analysis** on 10,000+ vehicle trajectories at **IIT Roorkee**, identifying collision hotspots for urban safety planning; co-authored research paper under review at **IEEE JBHI**.",
      "Research intern at **DRDO, Government of India**, applying AI/ML to 3D/4D printing processes, improving manufacturing efficiency by 22% and precision by 18% for defense applications.",
      "Selected for **Erasmus Short Mobility Program** (5% acceptance rate from 10K+ applicants) at Technical University of Crete for international research collaboration.",
    ],
  },
  {
    title: "Business Intelligence & Data Visualization:",
    color: "text-green-600",
    bullets: [
      "Created **Interactive dashboards** using **Power BI, Tableau, Streamlit** to monitor KPIs and support data-driven strategic decisions across research and business domains.",
      "Developed **MatData Platform** enabling 100+ users to visualize 10GB+ datasets with correlation heatmaps, regression analysis, and automated data pipelines using **Pandas/NumPy**.",
      "Built analytics solutions improving workflow efficiency by 60%, delivering actionable insights to technical and non-technical stakeholders.",
    ],
  },
  {
    title: "Leadership & Strategic Execution:",
    color: "text-yellow-600",
    bullets: [
      "**Gen AI Developer Intern** at **MadScientist, Inc** and **Founding Engineer** at **Byte Sky Technologies**, building Gen AI Applications, RIS Agent technology, and AI-driven computer vision solutions.",
      "Secured **6th global rank** with Team Phoenix at **SAE Aero Design West 2025, California**, leading technical design report against 75+ international teams representing India.",
      "Head Core Organizing Committee Member at **TEDxBistupur Jamshedpur**, managing 10+ speakers and 500+ attendees; led cross-functional international teams delivering production-ready AI systems.",
    ],
  },
];

// --- COMPONENTS ---

// Component for a single skill category
const SkillCategory = ({ title, bullets, color }) => (
  <div className="mb-8 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-gray-100" style={{ borderColor: color }}>
    <h2 className={`text-xl font-extrabold mb-4 tracking-tight ${color}`}>{title}</h2>
    <ul className="list-disc ml-5 space-y-3 text-gray-700">
      {bullets.map((bullet, index) => (
        <li key={index} className="text-sm leading-relaxed">
          {/* Note: In a real app, you'd use a parser (like dangerouslySetInnerHTML 
             or a dedicated Markdown library) if content contains inline HTML/bolding. 
             Here, we assume the bold tags render correctly in JSX. */}
          <span dangerouslySetInnerHTML={{ __html: bullet }} />
        </li>
      ))}
    </ul>
  </div>
);

const Exp : React.FC<ExpProps>= ({id}) => {
  return (
    <div id={id} className='about flex flex-col gap-10 '>
            <div >
                <b className='text-2xl'>Experiences</b>
                <div className='h-[0.4rem] bg-blue-500 w-[11.5rem] rounded-2xl'></div>
            </div>
            
                
            <header className="max-w-4xl mx-auto text-center mb-10 pt-4">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Technical & Strategic Expertise
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Combining deep research with practical execution in AI, Data Science, and Leadership.
        </p>
        <div className="h-1 bg-indigo-500 w-24 mx-auto mt-4 rounded-full"></div>
      </header>

      {/* Grid Layout for Skills */}
      <main className="max-w-6xl mx-auto">
        {/* Responsive grid for the categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              bullets={category.bullets}
              color={category.color}
            />
          ))}
        </div>
      </main>
    
    </div>
    
  )
}

export default Exp