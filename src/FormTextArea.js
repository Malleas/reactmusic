import React from "react";

class FormTextArea extends React.Component {
    render() {
        return (
            <div>
                <label form={this.props.id}>{this.props.title}</label>
                <textarea onChange={this.handleChangeData} value={this.props.value} type="text" className="form-control" id={this.props.id} placeholder={this.props.placeholder}/>
            </div>
        );
    }
}
export default FormTextArea