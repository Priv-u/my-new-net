import React from 'react';

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    // debugger;
    // Если не использовать bind и использовать стрелочную функцию, то в дебагере не бутет отображаться this!!!
    this.setState({
      editMode: true
    });
  }
  deactivateEditMode() {
    this.setState({
      editMode: false
    })
    // чтобы изменения стейта отображались и реакт перерисовывал компонент нужно испльзовать setState
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div >
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
          </div >
        }
        {this.state.editMode &&
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status}></input>
          </div>
        }

      </div>

    )
  }

}
export default ProfileStatus;