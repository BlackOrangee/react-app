import React from 'react';

const AddItemForm = () => {
    return (
        <div>
            <form id="add_item_form">
                <label htmlFor="add_item_form">Add item</label>
                <br/>

                <label htmlFor="image_url" id="image_url_label">Image url</label>
                <input type="text" id="image_url" />

                <label htmlFor="title" id="title_label">Title</label>
                <input type="text" id="title" />

                <label htmlFor="price" id="price_label">Price</label>
                <input type="text" id="price" />

                <label htmlFor="url" id="url_label">Url</label>
                <input type="text" id="url" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddItemForm;
