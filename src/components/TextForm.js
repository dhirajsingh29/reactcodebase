import { useState } from "react";

export default function TextForm(props) {

    const handleUppercaseClick = () => {
        // console.log("Uppercase was clicked");

        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowercaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    // without handleOnChange typing in textarea will be restricted
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    };

    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                        placeholder="Enter text here">
                    </textarea>
                </div>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleUppercaseClick}>
                    Convert to Uppercase
                </button>
                <button
                    className="btn btn-primary mx-1"
                    onClick={handleLowercaseClick}>
                    Convert to Lowercase
                </button>
            </div>
            <div className="container my-3">
                <h3>Your text summary</h3>
                <p>{text.length === 0 ? 0 : text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008 * (text.length === 0 ? 0 : text.split(' ').length)} Minutes read</p>
                <h5>Preview</h5>
                <p>{text}</p>
            </div>
        </>
    );
}
