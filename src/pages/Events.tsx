
interface EventProps{
  id: string; // or whatever type 'id' should be
}

export const Events : React.FC<EventProps>= ({id}) => {
  return (
    <div id={id} className='about flex flex-col gap-10'>
            <div >
                <b className='text-2xl'>Events</b>
                <div className='h-1 bg-blue-500 w-[4.5rem] rounded-2xl mt-1'></div>
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
