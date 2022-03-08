import React from "react";

class FormInput extends React.Component {

    state = {inputData:""}

    handleChangeData = (event) => {
        this.setState({inputData : event.target.value})
        console.log("Contents of input: ", this.state.inputData)
        this.props.onChange(this.state.inputData)
    }

    render() {
        return (
            <div>
                <label form={this.props.id}>{this.props.title}</label>
                <input onChange={this.handleChangeData} value={this.props.value} type="text" className="form-control" id={this.props.id} placeholder={this.props.placeholder}/>
            </div>
        );
    }
}
export default FormInput