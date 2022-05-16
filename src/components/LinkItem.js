const LinkItem = (props) => {
  const url=props.url,
       name=props.name
    return(
        <a className="btn btn-outline-dark btn-lg" href={url} target='_blank'>
         {name}
        </a>
    )
}

export default LinkItem;