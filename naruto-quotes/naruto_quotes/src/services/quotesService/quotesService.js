
export const getQuote = () => {
fetch(process.env.REACT_APP_API)
.then(res => res.json())
}