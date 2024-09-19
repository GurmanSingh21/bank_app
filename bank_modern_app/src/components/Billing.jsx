import React from 'react';
import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';
const Billing = () => {
  return (
    <section id = "product" className={`${layout.sectionReverse} justify-space-between`}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bill" className={`w-[100%] h-[100%] relative z-[5]`} />
        <div className='absolute z-[3] rounded-full -left-1/2 top-0 w-[50%] h-[50%] white__gradient'/>
        <div className='absolute z-[0] rounded-full -left-1/2 bottom-0 w-[50%] h-[50%] pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden'/> billing & invoicing.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et rem consequuntur eligendi nihil, facilis fugit, incidunt temporibus dolorem reiciendis cumque soluta cum necessitatibus? Recusandae voluptatem harum quia? Dolores, quo.</p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
          <img src={apple} alt="apple" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>
          <img src={google} alt="android" className='w-[128px] h-[42px] object-contain cursor-pointer'/>
        </div>
      </div>
    </section>
  )
}

export default Billing