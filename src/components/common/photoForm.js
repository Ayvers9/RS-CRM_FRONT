import React, {useState} from "react";
import api from "../../services/api";

const PhotoUpload = () => {
    const [selectFile, setSelectFile] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleFileChange = (event) => {
        const file= event.target.files[0];
        setSelectFile(file);
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('photo', selectFile);

        try{
            const response = await api.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('File uploaded successfully', response.data);
        }catch(error){
            console.error('Error uploading file:', error)
        }
    };

    return(
        <div>
            <form className="photoForm" onSubmit={handleSubmit}>
                <input className="photoFormInput" type="file" onChange={handleFileChange}/>
                {preview && <img src={preview} alt="Preview" width="100"/>}
                <button className="photoFormBtn" type="submit">Upload photo</button>
            </form>
        </div>
    );
};

export default PhotoUpload;