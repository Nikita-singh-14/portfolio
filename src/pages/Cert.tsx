interface CertProps{
  id: string; // or whatever type 'id' should be
}
const Cert : React.FC<CertProps>= ({id}) => {
  return (
    <div id={id} className='about flex flex-col gap-10 '>
            <div >
                <b className='text-2xl'>Certifications</b>
                <div className='h-1 bg-blue-500 w-[12.5rem] rounded-2xl mt-1'></div>
            </div>
            <div className='flex flex-wrap justify-evenly gap-5 cert'>
      
                
                <img src="oracelGenAi.jpg" alt=""/>
                <img src="Khokho.jpg" alt="" />
                <img src="Sih.jpg" alt="" />
                <img src="Sih.jpg" alt="" />
                <img src="Sih.jpg" alt="" />
                <img src="Sih.jpg" alt="" />
 
            </div>
    
     </div>
  )
}

export default Cert