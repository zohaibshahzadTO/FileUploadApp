import React, { Fragment, useState } from 'react'

const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name); 
    }

    return (
        <Fragment>
            <form>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" onChange={onChange} />
                    <label className="custom-file-label" htmlFor="customFile">
                        {filename}
                     </label>
                </div>
                <input type="submit" value="Upload" className="btn btn-primary btn block mt-4" />
            </form>
        </Fragment>
    )
}

export default FileUpload
