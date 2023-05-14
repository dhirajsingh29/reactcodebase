import { useState } from "react";

export default function TextForm(props) {

    const handleUppercaseClick = () => {
        // console.log("Uppercase was clicked");

        let newText = text.toUpperCase();
        setText(newText);
    };

    // without handleOnChange typing in textarea will be restricted
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    };

    const [text, setText] = useState('Enter text here');

    return (
        <div>
            <h3>{props.heading}</h3>
            <div className="mb-3">
                <textarea 
                    className="form-control" 
                    value={text} 
                    onChange={handleOnChange}
                    id="myBox" 
                    rows="8">
                </textarea>
            </div>
            <button 
                className="btn btn-primary"
                onClick={handleUppercaseClick}
            >
                Convert to Uppercase
            </button>
        </div>
    );
}
