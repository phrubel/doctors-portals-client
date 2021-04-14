import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';




const AddDoctor = () => {
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)



    const handleBlur = event => {
        const newInfo = { ...info }
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo)
    }


    const handleFileChange = (event) => {
        const newFile = event.target.files[0]
        setFile(newFile)
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

        fetch('http://localhost:5000/addADoctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <div className='container-fluid row' >
            <Sidebar></Sidebar>
            <div className='col-md-10 p-4 pr-5' style={{ position: "absolute" }}>
                <h4 className='text-brand'>Add Doctor</h4>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="Name" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Upload Image</label>
                        <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="Image" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;