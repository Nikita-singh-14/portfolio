
const Footer = () => {
  return (
    <div className="p-8 bg-gray-900 text-gray-400 text-center h-24 items-center foot ">
        <h6 className="text-sm">&copy; {new Date().getFullYear()} Copyright Nikita Singh</h6>
        <p className='text-xs'>Designed by <span className='text-blue-400'>Nikita Singh</span></p>
    </div>
  )
}

export default Footer