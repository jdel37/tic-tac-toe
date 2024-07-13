import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import confetti from 'canvas-confetti'
import {Square} from './components/Square'
import {TURNS} from './components/constants'
import { checkWinner } from './components/logic';
import { WinnerModal } from './components/winnerModal';
import { Counter } from './components/counter';
import { Turns } from './components/turns';
function App() {
  const [board, setBoard] = useState(()=>{
    
    const boardFromStorage=window.localStorage.getItem('board')
    return boardFromStorage ?JSON.parse(boardFromStorage):
    Array(9).fill(null)});
    const [turns, setTurns] = useState(() => {
      const turnFromStorage = window.localStorage.getItem('turn');
      if (turnFromStorage) {
        return turnFromStorage === 'X'? TURNS.X : TURNS.O;
      }
      return TURNS.X; // default to X if no storage value
    });
    
    useEffect(() => {
      window.localStorage.setItem('turn', turns === TURNS.X? 'X' : 'O');
    }, [turns]);
  const [winner, setWinner] = useState(null)
  const [countX, setCountX] = useState(() => {
    const countFromStorage1 = window.localStorage.getItem('countx');
    return parseInt(countFromStorage1) ?? 0;
  });
  
  const [countO, setCountO] = useState(() => {
    const countFromStorage2 = window.localStorage.getItem('counto');
    return parseInt(countFromStorage2) ?? 0;
  });
  
  useEffect(() => {
    window.localStorage.setItem('countx', countX);
    window.localStorage.setItem('counto', countO);
  }, [countX, countO]);
  
 
 
  const updateBoard = (index) => {
    if (board[index]||winner) return; // Do nothing if the square is already filled
    const newBoard = [...board];
    newBoard[index] = turns;
    setBoard(newBoard);
    const newTurn = turns === TURNS.X ? TURNS.O : TURNS.X;
    setTurns(newTurn);
    const newWinner = checkWinner(newBoard)
   window.localStorage.setItem('board',JSON.stringify(newBoard))
   window.localStorage.setItem('turn',turns)
   
    if(newWinner)
    {

   
      confetti()
      setWinner(newWinner)
   if(newWinner===TURNS.X)
   {
   
    setCountX(countX+1)
   
   }
   else if(newWinner === TURNS.O)
   {
   
setCountO(countO+1)

   }
    
    }
    else if(!newBoard.includes(null))
    {
setWinner(false)
    }
    
       
  };

  const deleteBoard=()=>
  {
    window.localStorage.setItem('counto',countO)
    window.localStorage.setItem('countx',countX)
    setBoard(Array(9).fill(null))
    setTurns(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }
  const restart = () => {
    window.localStorage.removeItem('countx');
    window.localStorage.removeItem('counto');
    setCountO(0);
    setCountX(0);
  }
  return (
    
    <main className='board'>
      <section>
      <h1 className="text-3xl font-bold underline">Tic Tac Toe</h1>
    
    <section className='game'>
      {board.map((_, index) => {
        return (
          <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
          >
            {board[index]}
          </Square>
        );
      })}
    </section>
   

    
   <Turns turns={turns}/>
 
    <WinnerModal winner={winner} deleteBoard={deleteBoard}/>

      </section>
     
  
      <aside className='ml-[40px] m-auto'>
    <button onClick={deleteBoard} className='mb-[20px] '>Restart</button>
    <button onClick={restart} className='mb-[20px] ml-[15px]'>Restart count</button>
    <Counter countO={countO} countX={countX}/>
    </aside>
   
    </main>
   
  );
}

export default App;