const LinkItem = (props) => {
  const url=props.url,
       name=props.name
    return(
        <a className="btn btn-outline-dark" href={url}>
         {name}
        </a>
    )
}

export default LinkItem;