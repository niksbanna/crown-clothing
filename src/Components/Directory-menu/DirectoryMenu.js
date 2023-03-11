import React, { useMemo } from 'react'
import { connect } from 'react-redux';
import MenuItem from '../Menu-item/MenuItem';
import './DirectoryMenu.scss';

const DirectoryMenu = ({ sections }) => {
    const memoSections = useMemo(() => sections, [sections]);

    return (
        <div className='directory-menu'>
            {
                memoSections.map((section) => {
                    return <MenuItem key={section.id} section={section} />
                })
            }
        </div>
    )
};
const mapStateToProps = ({ directory: { sections } }) => ({
    sections
});

export default connect(mapStateToProps)(DirectoryMenu);
