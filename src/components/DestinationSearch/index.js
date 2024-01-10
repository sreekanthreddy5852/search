import './index.css'

const DestinationSearch = props => {
  const {searchDetails} = props
  const {name, imgUrl} = searchDetails

  return (
    <li>
      <div className="items-container">
        <img src={imgUrl} alt={name} className="image" />
        <h1 className="heading">{name}</h1>
      </div>
    </li>
  )
}
export default DestinationSearch
