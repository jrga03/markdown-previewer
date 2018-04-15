import React, { Component } from "react";
import marked from "marked";

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({text: defaultText});
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    renderMarkedText(text) {
        let rawMarkup = marked(text, { sanitize: true });
        return { __html: rawMarkup };
    }

    render() {
        return (
            <div id="container">
                <div className="column">
                    <textarea
                        id="textarea"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="column">
                    <span
                        dangerouslySetInnerHTML={this.renderMarkedText(
                            this.state.text
                        )}
                    />
                </div>
            </div>
        );
    }
}

const defaultText = "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain."