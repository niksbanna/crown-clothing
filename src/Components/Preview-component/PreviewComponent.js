import React from 'react';
import { useNavigate } from 'react-router-dom';
import CollectionItem from '../Collection-item/CollectionItem';
import './PreviewComponent.scss'

export default function PreviewComponent({ collection }) {
    const navigate = useNavigate();
    const { title, items } = collection;
    return (
        <div className='collection-preview'>
            <h1 className="title" onClick={() => navigate(`${title.toLowerCase()}`)} >{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.filter((item, idx) => idx < 4).map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}
