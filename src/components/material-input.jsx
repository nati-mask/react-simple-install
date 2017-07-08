var React = require('react');

class InputGroupWithAddon extends React.Component {
    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-addon">{this.props.addon}</div>
                {this.props.children}
            </div>
        )
    }
}

class Input extends React.Component {
    render() {
        return (
            <input type="number"
                className={"form-control" + (this.props.wrapped ? "" : " mb-3")}
                name={this.props.name}
                onChange={this.props.handle}
                placeholder={this.props.placeholder}
                value={this.props.value}/>
        )
    }
}

class MaterialInput extends React.Component {

    render() {

        // Look here

        if(this.props.addon) return (

            <InputGroupWithAddon addon={this.props.addon}>
                <Input {...this.props} wrapped={true}/>
            </InputGroupWithAddon>

        ); else return <Input {...this.props} />

        // <Input name={this.props.name} handle={this.props.handle} placeholder={this.props.placeholder} value={this.props.value} wrapped={true}/>
    }
}

module.exports = MaterialInput;