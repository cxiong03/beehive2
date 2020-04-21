import React from 'react';

// This is a quicker way then the const resource below
const Resource = ({resource}) => {
    
    // const {resource} = props; 
    return (
        <div className ={'box'}>
            <h2>{resource.title}</h2>
            <p>{resource.resourceAuthor}</p>
            <p>Published on :{resource.datePublished}</p>
            { resource.videoLength ? (<p>Length: {resource.videoLength} minutes</p>) : null }
            {/* tenery function
             conditional ? true code : false code */}
            <p>Comments: {resource.comments.length}</p>
        </div>
    )
}

export default Resource; 