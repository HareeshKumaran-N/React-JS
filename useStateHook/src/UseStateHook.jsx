import {useState} from 'react';

let UseStateHook=()=>
{
    const [getEmoji,setEmoji]=useState("");
      function randomEmojiAssigner()
      {
          let emoji_arr=["😀","😆","😂","😊","😲","😞","🥳","🤬","👽","💀","🤡"];
           let index=Math.floor(Math.random()*emoji_arr.length);
        //   console.log(index);
           console.log(emoji_arr[index]);
           setEmoji(emoji_arr[index]);
      }

      return(
        <>
        <button onClick={randomEmojiAssigner}>
            Click to generate random emoji
        </button >


        <h3>Your emoji {getEmoji} </h3>
        </>
      )

}

export default UseStateHook;