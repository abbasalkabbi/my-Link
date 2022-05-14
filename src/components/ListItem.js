const ListItem = (props) => {
  const name=props.name,
        id=props.id
return(<tr>
  <th scope="row">{id}</th>
  <td>{name}</td>

  <td>
    <button type="submit" class="btn btn-outline-danger" >Delete</button>
    <a href="aa"  class="btn btn-outline-success ms-1" >Edit</a>
  </td>
  

</tr>
  )
}
export default ListItem
