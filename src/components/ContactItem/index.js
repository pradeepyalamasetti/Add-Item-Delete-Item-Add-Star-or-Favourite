import './index.css'

const ContactItem = props => {
  const {contactDetails, toggleIsFavorite, onDeleteUser} = props
  const {name, mobileNo, isFavorite, id} = contactDetails

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  const onDelete = () => {
    onDeleteUser(id)
  }

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'
  const crsImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/cross-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/cross-img.png'

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        <button
          type="button"
          className="favorite-icon-container"
          onClick={onClickFavoriteIcon}
        >
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
        <button type="button" className="delete-button" onClick={onDelete}>
          <img src={crsImgUrl} className="delete-img" alt="crs" />
        </button>
          
      </div>
    </li>
  )
}

export default ContactItem
