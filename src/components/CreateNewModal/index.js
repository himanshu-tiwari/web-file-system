import React, { Component } from 'react';
import './index.scss';
import close from '../../assets/icons/close.svg';

class CreateNewModal extends Component {
    state = {
        name: '',
        creator: '',
        size: '',
        date: ''
    };

    handleChange = (field, value) => {
        this.setState({
            ...this.state,
            [field]: value
        });
    };

    handleSubmit = () => {
        console.log(this.state);
    };

    render() {
        const { name, creator, size, date } = this.state;
        const { toggleCreateNewModal } = this.props;

        return(
            <div className="create-new-modal-overlay">
                <div className="create-new-modal">
                    <div className="text">
                        <p className="heading">Create New</p>
                        <img src={close} alt="close-icon" className="close" onClick={toggleCreateNewModal} />

                        <div className="details">

                        <p>
                            <span className="part left">File</span>
                            <span className="part right active">Folder</span>
                        </p>
                            <input type="text" required placeholder="Name" value={name} onChange={(e) => this.handleChange("name", e.target.value)} />

                            <input type="text" required placeholder="Creator" value={creator} onChange={(e) => this.handleChange("creator", e.target.value)} />

                            <input type="number" required placeholder="Size" value={size} onChange={(e) => this.handleChange("size", e.target.value)} />

                            <input type="date" required placeholder="Date" value={date} onChange={(e) => this.handleChange("date", e.target.value)} />

                            <button onClick={this.handleSubmit}>Create</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default CreateNewModal;