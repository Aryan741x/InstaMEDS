
const Cards = (props) => {
  return <div className={`${props.bg} p-6 rounded-lg shadow-md`}>
    {props.children}
  </div>
}

export default Cards;