var React = require('react');

var MaterialInput = require('./material-input.jsx');

class Jumbo extends React.Component {
    
    constructor() {
        super();

        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            teken_hours : "",
            already_hours : "",
            already_days : "",
            more_days : ""
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        console.log(name, 'changed to :', value);

        this.setState({
            [name]: value
        });
    }

    finCalc () {

        if(!this.state.more_days || this.state.more_days < 0) return "...";

        var calc = ((this.state.teken_hours * 0.8) - this.state.already_hours) / this.state.more_days;

        if(!isNaN(calc)) return calc.toFixed(2);

        else return "...";
    }
    
    average () {
        
        if(!this.state.already_days || this.state.already_days < 0) return "...";

        return (this.state.already_hours / this.state.already_days).toFixed(2);
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

                    <MaterialInput addon="Month teken" name="teken_hours" placeholder="Hours" handle={this.handleInputChange} />

                    <MaterialInput addon="Already worked" name="already_hours" placeholder="Hours" handle={this.handleInputChange} />

                    <MaterialInput addon="Days worked" name="already_days" placeholder="Days" handle={this.handleInputChange} />

                    <MaterialInput addon="Days plan" name="more_days" placeholder="Days" handle={this.handleInputChange} />

                </form>
                <p>
                    Average: {this.average()}
                </p>
                <p>
                    Need to work: {this.finCalc()}
                </p>
            </div>
        );
    }
}

module.exports = Jumbo;