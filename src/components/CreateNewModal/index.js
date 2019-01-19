import React, { Component } from 'react';
import './index.scss';
import close from '../../assets/icons/close.svg';

class CreateNewModal extends Component {
    state = {
        name: '',
        creator: '',
        size: '',
        created_at: '',
        type: 'folder',
        path: this.props.path
    };

    handleChange = (field, value) => {
        this.setState({
            ...this.state,
            [field]: value
        });
    };

    handleSubmit = () => {
        if (this.state.type === 'folder') {
            this.props.createFolder(this.state);
        } else {
            this.props.createFile(this.state);
        }
        
        this.resetModal();
        this.props.toggleCreateNewModal();
    };

    resetModal = () => {
        this.setState({
            name: '',
            creator: '',
            size: '',
            created_at: '',
            type: 'folder',
            path: this.props.path
        });
    };

    render() {
        const { name, creator, size, created_at, type } = this.state;
        const { toggleCreateNewModal } = this.props;

        return(
            <div className="create-new-modal-overlay">
                <div className="create-new-modal">
                    <div className="text">
                        <p className="heading">Create New</p>
                        <img src={close} alt="close-icon" className="close" onClick={toggleCreateNewModal} />

                        <div className="details">
                            <p>
                                <span
                                    className={`part left ${type==="file" && 'active'}`}
                                    onClick={() => this.handleChange("type", "file")}
                                >File</span>
                                <span
                                    className={`part right ${type==="folder" && 'active'}`}
                                    onClick={() => this.handleChange("type", "folder")}
                                >Folder</span>
                            </p>
                            
                            <input
                                type="text"
                                required
                                placeholder="Name"
                                value={name}
                                onChange={(e) => this.handleChange("name", e.target.value)}
                            />

                            <input
                                type="text"
                                required
                                placeholder="Creator"
                                value={creator}
                                onChange={(e) => this.handleChange("creator", e.target.value)}
                            />

                            <input
                                type="text"
                                required
                                placeholder="Size"
                                value={size}
                                onChange={(e) => this.handleChange("size", e.target.value)}
                            />

                            <input
                                type="date"
                                required
                                placeholder="Date"
                                value={created_at}
                                onChange={(e) => this.handleChange("created_at", e.target.value)}
                            />

                            <button onClick={this.handleSubmit}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default CreateNewModal;