import {useState} from 'react';

let UseStateHook=()=>
{
    const [Emoji,setEmoji]=useState("⚛️");
    const [count,setCount]=useState(0);
      function randomEmojiAssigner()
      {
          let emoji_arr=["😀","😆","😂","😊","😲","😞","🥳","🤬","👽","💀","🤡"];
           let index=Math.floor(Math.random()*emoji_arr.length);
        //   console.log(index);
           console.log(emoji_arr[index]);
           setEmoji(emoji_arr[index]);
           setCount(count+1);
      }

      return(
        <>
        <button onClick={randomEmojiAssigner}>
            click to generate random emoji
        </button >

            
        <p>Emoji : {Emoji} </p>
        <p>Count: {count}</p>
        </>
      )

}

export default UseStateHook;