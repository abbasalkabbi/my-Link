import Context from "../Context"
import { useContext } from "react"
import React from "react"
const ListItem = (props) => {
  let url_delete= useContext(Context).delete
  const name=props.name,
        id=props.id,
        count=props.count
  function delete_link(id_link){
     fetch(`${url_delete}${id_link}`)
     .then((res)=>res.json())
     .then((json)=>{
      window.location.reload()
     })
    console.log(id_link)
  }
return(<tr>
  <th scope="row">{count}</th>
  <td>{name}</td>

  <td>
    <button  class="btn btn-outline-danger"  onClick={()=>delete_link(id)} >Delete</button>
    <a href="s"  class="btn btn-outline-success ms-1" >Edit</a>
  </td>
</tr>
  )
}
export default ListItem
