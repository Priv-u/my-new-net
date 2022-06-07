import React from 'react';

class ProfileStatus extends React.Component {

  state = {
    editMode: false
  }

  activateEditMode = () => {
    // debugger;
    // Если не использовать bind и использовать стрелочную функцию, то в дебагере не бутет отображаться this!!!
    this.setState({
      editMode: true
    });
  }
  deactivateEditMode() {
    // debugger;
    this.setState({
      editMode: false
    })
    // чтобы изменения стейта отображались и реакт перерисовывал компонент нужно испльзовать setState


  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div >
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div >
        }
        {this.state.editMode &&
          <div>
            <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}></input>
          </div>
        }

      </div>

    )
  }

}
export default ProfileStatus;