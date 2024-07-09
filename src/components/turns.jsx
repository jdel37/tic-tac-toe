import { TURNS } from "./constants"
import { Square } from "./Square"
export function Turns({turns})
{
    return(

        <section className='turn'>
        <Square isSelected={turns === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turns === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    )
}