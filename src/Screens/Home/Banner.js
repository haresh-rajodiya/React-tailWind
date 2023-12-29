import Image from 'next/image'
import React from 'react'


const Banner = ({
    title,
    subtitle,
    btn1title,
    btn2title,
    btn1press,
    btn2press,
    imageSrc

}) => {
    return(
        <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9">
        <div className="flex md:flex-row flex-row-reverse  flex-col items-center gap-10">
          {/* banner */}
          <div className="md:w-3/5">
            <h3 className="md:text-6xl text-4xl font-bold text-white mb-6 leading-relaxed">
            {title}  
            </h3>
            <p className="font-medium text-custom-white mb-8 text-2xl">{subtitle}
              
            </p>
            <div className="space-x-5 space-y-5">
              {btn1press  &&
               <button onClick={btn1press} className='bg-secondary font-semibold text-white px-4 py-2 rounded transition-all duration-400 hover:bg-primary'>
               {btn1title} 
              </button>
              }
             {btn2press  && 
                <button onClick={btn2press} className='bg-secondary font-semibold text-white px-4 py-2 rounded transition-all duration-400 hover:bg-primary'>
                {btn2title}
              </button>
             }
            
            </div>
          </div>
          <div>
            <Image src={imageSrc} className="lg:h-[336px]" />
          </div>
        </div>
      </div>
    )
}
export default Banner