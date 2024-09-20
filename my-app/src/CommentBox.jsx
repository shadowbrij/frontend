import { useRef } from "react"

export function CommentBox(){
    const commentRef = useRef("");
    const pRef = useRef("");
    const max = 200;

    const handleChange = (event)=>{
        commentRef.current.valueOf = event.target.value;
        pRef.current.innerText = (max - commentRef.current.valueOf.length) + "character left"
    }

    return(
        <div>
            <textarea ref={commentRef} onChange={handleChange} maxLength={max}></textarea>
            <p ref={pRef} >200 character left</p>
        </div>
    )
}