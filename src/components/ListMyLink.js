import ListItem from "./ListItem";

const ListMyLink = (props) => {
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
            <ListItem/>
              </tbody>
            </table>
      )
  }
export default ListMyLink;