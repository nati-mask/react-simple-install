var React = require('react');

var MaterialInput = require('./material-input.jsx');

class Jumbo extends React.Component {
    
    constructor() {
        super();

        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            number_1 : 0,
            number_2 : 0
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log('Changed to :', value);

        this.setState({
            [name]: value
        });
    }

    // Find me here!

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">{ this.props.title }</h1>
                <p className="lead">
                    This is a simple test for react.
                    Installed without install tools
                </p>
                <hr className="my-4" />
                <form className="form">

                    <MaterialInput name="number_1" placeholder="Grisha" handle={this.handleInputChange} />

                    <MaterialInput name="number_2" addon="@" placeholder="Name" handle={this.handleInputChange} />

                </form>
                <p>
                    {this.state.number_1 * this.state.number_2}
                </p>
            </div>
        );
    }
}

module.exports = Jumbo;