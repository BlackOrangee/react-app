import React, { useState } from 'react';
import './AddItemForm.css';
import { itemList } from '../../resources/itemList.js';

const AddItemForm = ({ addItem }) => {

    const [formVisible, setFormVisible] = useState(false);

    const toggleForm = () => setFormVisible(!formVisible);

    const [image_url, setImage_url] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [url, setUrl] = useState('');
    const [details, setDetails] = useState('');

    const onSubmit = () => {
        addItem({ id: itemList.length + 1, img: image_url, title, price, url, details });
        console.log(itemList);

        setImage_url('');
        setTitle('');
        setPrice('');
        setUrl('');
        setDetails('');
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
                    <input 
                        type="text" 
                        id="image_url" 
                        value={image_url} 
                        onChange={(e) => setImage_url(e.target.value)} 
                    />

                    <label htmlFor="title" id="title_label">Title</label>
                    <input 
                        type="text" 
                        id="title" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                    />

                    <label htmlFor="price" id="price_label">Price</label>
                    <input 
                        type="text" 
                        id="price" 
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)} 
                    />

                    <label htmlFor="url" id="url_label">Url</label>
                    <input 
                        type="text" 
                        id="url" 
                        value={url} 
                        onChange={(e) => setUrl(e.target.value)} 
                    />

                    <label htmlFor="details" id="details_label">Details</label>
                    <input 
                        type="text" 
                        id="details" 
                        value={details} 
                        onChange={(e) => setDetails(e.target.value)} 
                    />
                    <button type="submit">Add</button>
                </form>
            )}
        </div>
    );
}

export default AddItemForm;
