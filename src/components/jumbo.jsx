var React = require('react');

class Jumbo extends React.Component {
    
    constructor() {
        super();
        this.state = {

        }
        this.mose = {
            selected_tab : 8
        }
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">{ this.props.title }</h1>
                <p className="lead">
                    This is a simple test for react.
                    Installed without install tools
                </p>
                <hr className="my-4" />
                <div className="lead text-center" style={{marginBottom : "2em"}}>
                    <p>Select one tab</p>
                    <p>Tab selected:{this.state.selected_tab}</p>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <a className="btn btn-primary btn-lg" href="#" onClick={() => this.setState({selected_tab : 1})}>Learn more</a>
                    </div>
                    <div className="col text-center">
                        <a className="btn btn-primary btn-lg" href="#" onClick={() => this.setState({selected_tab : 2})}>Learn more</a>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Jumbo;