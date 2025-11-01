
interface EventProps{
  id: string; // or whatever type 'id' should be
}

export const Events : React.FC<EventProps>= ({id}) => {
  return (
    <div id={id} className='about flex flex-col gap-10'>
            <div >
                <b className='text-2xl'>Events</b>
                <div className='h-[0.4rem] bg-blue-500 w-[4.5rem] '></div>
            </div>
            <div>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
    
        </div>
  )
}
