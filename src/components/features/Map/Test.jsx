import React from 'react'
import { BabysitterContext } from "../../../context/BabySitterContext";
import { useContext,useState,useRef } from "react";

export default function Test() {
    const [text,setText]=useState()
    const postTxt = useRef(null)
    const [dangerousText,setDangerousText]=useState({data:"",lastIndex:null})
    const [teg1,setTeg]=useState(false)
    const [matchedArr,setMatchedArr]=useState(null)
const {babySitterArray,setBabySitterArray}=useContext(BabysitterContext)
console.log(babySitterArray);

const testHandler =(e) =>{

  
    console.log('-------');
console.log(e.currentTarget.textContent[e.currentTarget.textContent.length-1]);
console.log(e.currentTarget.textContent[e.currentTarget.textContent.length-1]==" ");
console.log('-------');
if(teg1===false||e.currentTarget.textContent[teg1]!="@"){

     if ( e.currentTarget.textContent[e.currentTarget.textContent.length-1]==="@") {
        setTeg(e.currentTarget.textContent.length-1)
        console.log("mnknsd");
    }else setTeg(false)
 }else{
    const tag=e.currentTarget.textContent.slice(teg1+1) 
if(tag.match(/\\/)||tag[tag.length-1]==" "||tag=="")return setMatchedArr(false) 
    let name=new RegExp("^"+tag)
let newArr=[]
for (let i = 0; i <babySitterArray.length; i++) {
    const element =babySitterArray[i];
    if (babySitterArray[i].name.match(name)){
        newArr.push(babySitterArray[i])
    }

}   
if (newArr.length)
return setMatchedArr(newArr)
setMatchedArr(false)
 }
}
function assignTag(e){
alert(1)
const axc=document.createElement('a')
let linkText = document.createTextNode(e.target.id);
axc.appendChild(linkText)
axc.href="https://mui.com/"
postTxt.current.appendChild(axc)
setDangerousText(null)
}
console.log(postTxt.current);

return (
    <div>
  
    <div
      ref={postTxt}
      contenteditable="true" 
      style={{outline:"0px"}}
      onInput={e => testHandler(e)}
      >
        

    </div>
   
    <ul>
    {matchedArr?matchedArr.map((e,i)=>{
        return<li>
            <button id={e.name} onClick={assignTag} ><h6 className='tagName'>{e.name}</h6><img src={e.photo} style={{height:'10px',width:"10px"}}/></button>
            </li>
    }):""}
    </ul> 
    </div>
    
  )

}