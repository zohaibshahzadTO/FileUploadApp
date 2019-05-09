import React, { Fragment, useState } from 'react';
import axios from 'axios';

const InputBar = () => {

    const [keywords, useKeywords] = useState([]);


    const onSubmit = e => {
        e.preventDefault();
        const keywordData = new FormData();
        keywordData.append('keywords', JSON.stringify(keywords));
    
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <div className="form-group col-md-6">
                    <label htmlFor="userInput">Please enter the keywords or phrases you want redacted from the document</label>
                    <input type="text" className="form-control" id="keywordForm" aria-describedby="keywordCensor" placeholder="Keywords or Phrases" />
                </div>
                <input type="submit" value="Submit" className="btn btn-primary btn-block mt-4 col-md-6" />
            </form>
        </Fragment>
    );
}

export default InputBar

