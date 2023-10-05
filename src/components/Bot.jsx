import { Icon } from '@iconify/react';

const Bot = () => {
  return (
    <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-4xl bg-cyan-600 
        w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
        <Icon icon="mdi:chat-processing" className='w-10 h-10' />

    </div>
  )
}

export default Bot