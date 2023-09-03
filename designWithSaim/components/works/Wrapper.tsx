import React, { ReactNode } from 'react'

interface WrapperProps {
    children: ReactNode
}

const Wrapper = ({ children }: WrapperProps) => {
    return (
        <div className='max-w-[2520px] mx-auto xl:px-20 mmd:px-10 sm:px-2 px-4'>
            {children}
        </div>
    )
}

export default Wrapper