/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const FileDetails = () => {

    const location = useLocation();
    const { file} = location.state || {};
    const navigate = useNavigate();
    const [content, setContent] = useState('to be displayed...');

    // useEffect(() => {
    //     fetch(file)
    //       .then(response => response.text())
    //       .then(text => setContent(text))
    //       .catch(error => console.error('Error fetching text file:', error));
    //   }, [file]);


    return (
        <div className="flex h-screen items-center justify-center flex-col">
            <h1 className="text-center mb-4">File Content</h1>
            <pre className="text-center">{content}</pre>
        </div>
    );
}

export default FileDetails;
