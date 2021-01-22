

export default function SmallMessage(props) {
  // props.title,
  // props.body,
  // props.message,
  // props.id,
  // props.sender,
  // props.receiver

  return(
    <li className="ListItem">
      <p>{props.title}</p>
      <button>Delete</button>
    </li>
  )
}

