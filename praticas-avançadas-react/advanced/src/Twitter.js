import React, {useEffect,memo,useState} from 'react';

const areEqual = (prevProps,nextProps) => {
return prevProps.loading === nextProps.loading
}


function Twitter(props) {
const { loading, posts } = props;
const [tweet,setTweet] = useState('title');

   
 //Component Did Mount 
 useEffect(() => {
   const { posts,loading} = props;
   console.log(posts)
 },[])
  
 //Component Did Update
 useEffect(() => {
  console.log(loading);
 },[loading])


 //Component Will Mount
 useEffect(() => {
     return () => {
      console.log("componentWillUnMount: fui removido :(")
     }
 },[])

   const handleTweet = () => {
       setTweet('Tweet Atualizado!')
   }


  console.log("Tweet atualizado",tweet);
    
    return (
      <div>
          <button onClick={handleTweet}>Re render</button>
      tests
      </div>
    )
  
}


export default memo(Twitter,areEqual);