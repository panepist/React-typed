import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import {Typed} from './typed';

function App() {
  const [msg,setMsg]=useState(" ");
  useEffect(()=>{
    setMsg(` The 1964 European Nations' Cup final was held at the Santiago Bernabéu Stadium (pictured) in Madrid on 21 June 1964 to decide the winner of the 1964 European Nations' Cup (now the UEFA European Football Championship). The match was contested by Spain and the Soviet Union, the defending champions. En route to the final, Spain defeated Romania, Northern Ireland and the Republic of Ireland over two-legged ties before beating Hungary in the semi-final. The Soviet Union received a bye in the qualifying round before beating Italy, Sweden and Denmark. In the sixth minute, Marcelino dispossessed Valentin Ivanov and crossed for Chus Pereda, who scored to give Spain a 1–0 lead. Two minutes later, Viktor Anichkin passed to Galimzyan Khusainov, who equalised. With six minutes remaining, Pereda beat Anichkin and played in a cross which Viktor Shustikov failed to clear, before Marcelino headed the winning goal inside the near post. Spain won 2–1 to claim their first European Championship title.`);
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <Typed msg={msg}/>
      </header>
    </div>
  );
}

export default App;
