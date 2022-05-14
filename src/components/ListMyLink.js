import ListItem from "./ListItem";

const ListMyLink = (props) => {
  const  links=props.links
      console.log(links)
  function mapping(){
    let count=0;
    let data=links.map(link=> <ListItem name={link.name} id={count=+1}/>)
    console.log(count)
    return data
  }
      return(
        <table class="table mb-4">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mapping()}
              </tbody>
            </table>
      )
  }
export default ListMyLink;