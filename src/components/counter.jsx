import { Square } from "./Square";
import { TURNS } from "./constants";
export function Counter({countO,countX}){


    return(
<section className='flex gap-[15px] justify-center '>
<Square className='flex  '>
<span className=' text-[50px]'>{TURNS.X}</span>
{countX  }
</Square >
<Square >
<span className=' text-[50px]'>{TURNS.O}</span>
{countO}
</Square>
  </section> 

    );
}