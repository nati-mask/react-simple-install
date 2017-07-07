var React = require('react');

class MaterialInput extends React.Component {
    render() {
        const addon = this.props.addon || "%";
        return (
            <div className="input-group mb-3">
                <div className="input-group-addon">{addon}</div>
                <input type="text"
                       className="form-control"
                       name={this.props.name}
                       onChange={this.props.handle}
                       placeholder={this.props.placeholder} />
            </div>
        )
    }
}

module.exports = MaterialInput;