import { BsCloudCheck } from 'react-icons/bs'

export default function () {
  return (
    <div className='flex items-center gap-2'>
      <span className='cursor-pointer truncate px-1.5 text-lg'>
        Untitled Document
      </span>

      <BsCloudCheck />
    </div>
  )
}
