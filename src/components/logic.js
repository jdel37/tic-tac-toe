import { winnerCombos } from "./constants"
export const checkWinner=(boardToCheck)=>
    {
  
      for(const combos of winnerCombos)
      {
        
        const [a,b,c]=combos
  
        if(
  
          boardToCheck[a]&&
          boardToCheck[a]===boardToCheck[b]&&
          boardToCheck[a]===boardToCheck[c]
        )
        {
          return boardToCheck[a]
        }
       
      }
      return null
    }