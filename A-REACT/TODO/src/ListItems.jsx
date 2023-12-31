import { useState } from "react";
import { v4 as uuid4 } from "uuid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ListTable from "./ListTable.jsx";

export default function ListItems() {
    const [items, setItems] = useState({
        item: "",
        description: "",
        price: "",
        id: uuid4()
    });

    const [itemList, setItemList] = useState([]);

    const addItems = (event) => {
        setItems((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    const handelSubmit = (event) => {
        event.preventDefault();
        setItemList([...itemList, items]);
        setItems({
            item: "",
            description: "",
            price: "",
            id: uuid4()
        });
    };

    return (
        <div className="items">
            <form action="" onSubmit={handelSubmit}>
                <TextField id="filled-basic"
                    label="Item Name"
                    variant="filled"
                    size="small"
                    value={items.item}
                    required
                    onChange={addItems}
                    name="item"
                />
                <br /><br />
                <TextField id="filled-basic"
                    label="Add Description"
                    variant="filled"
                    size="small"
                    value={items.description}
                    required
                    onChange={addItems}
                    name="description"
                />
                <br /><br />
                <TextField id="filled-basic"
                    label="Item Price"
                    variant="filled"
                    size="small"
                    value={items.price}
                    required
                    onChange={addItems}
                    name="price"
                />
                <br /><br />
                <Button variant="contained"
                    size="large"
                    type="submit">
                    Add
                </Button>
            </form>
            <ListTable itemList={itemList}/>
        </div>
    );
}
