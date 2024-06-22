/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const FileDetails = () => {

    const location = useLocation();
    const { file} = location.state || {};
    const navigate = useNavigate();
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch(file)
          .then(response => response.text())
          .then(text => setContent(text))
          .catch(error => console.error('Error fetching text file:', error));
      }, [file]);


    return (
        <div>
            <h1>JD 1 - File Content</h1>
            <pre>{content}</pre>
        </div>
    );
}

export default FileDetails;
