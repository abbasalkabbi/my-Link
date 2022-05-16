const LinkItem = (props) => {
  const url=props.url,
       name=props.name
    return(
        <a className="btn btn-outline-dark btn-lg" href={url} target='_blank' rel="noreferrer">
         {name}
        </a>
    )
}

export default LinkItem;