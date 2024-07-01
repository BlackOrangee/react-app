import React from 'react';
import './AddItemForm.css';
import { itemList } from '../hw-1-shop-cards/itemList.js';
const AddItemForm = () => {
    const [formVisible, setFormVisible] = React.useState(false);

    const toggleForm = () => setFormVisible(!formVisible);

    const onSubmit = () => {
        const image_url = document.getElementById('image_url').value;
        const title = document.getElementById('title').value;
        const price = document.getElementById('price').value;
        const url = document.getElementById('url').value;
        const details = document.getElementById('details').value;

        itemList.push({ id: itemList.length + 1, img: image_url, title, price, url, details });
        console.log(itemList);
    };

    return (
        <div>
            <button type="button" onClick={toggleForm}>Add item</button>

            {formVisible && (
                <form id="add_item_form" onSubmit={(e) => {
                    e.preventDefault();
                    onSubmit();
                }}>
                    <label htmlFor="image_url" id="image_url_label">Image url</label>
                    <input type="text" id="image_url" />

                    <label htmlFor="title" id="title_label">Title</label>
                    <input type="text" id="title" />

                    <label htmlFor="price" id="price_label">Price</label>
                    <input type="text" id="price" />

                    <label htmlFor="url" id="url_label">Url</label>
                    <input type="text" id="url" />

                    <label htmlFor="details" id="details_label">Details</label>
                    <input type="text" id="details" />
                    <button type="submit" >Add</button>
                </form>
            )}
        </div>
    );
}

export default AddItemForm;
