import { useState} from "react";

interface wishListProps  {
  wishList: string[]
}
const WishList = ({wishList}: wishListProps) => {


  const [newItem, setNewItem] = useState("")
  const [list, setList] = useState(wishList)

  const handleSubmit = (event) => {
    event.preventDefault()
    const myWishList = [...list, newItem]
    setList(myWishList)
    setNewItem("")

  }
  const renderList = list.map((item, index) => {
    return <li key={index}>{item}</li>
  })

  const handleChange = (event) => {
    setNewItem(event.target.value)
  }

  return (
    <>
      <ul>
        {renderList}
      </ul>
      <form >
        <input type="text" placeholder="Enter wish" name="wish" onChange={handleChange} value={newItem}/>
        <button onClick={handleSubmit}>Add Item</button>
      </form>
    </>

  );
};

export default WishList;