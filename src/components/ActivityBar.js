import React from "react";

class ActivityBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description : this.props.description,
            duration : this.props.duration
        }
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleDurationChange = this.handleDurationChange.bind(this);
    }

    handleDescriptionChange(event) {
        // const {handleChange, index} = this.props ;
        // const newDescription = event.target.value;
        // handleChange(newDescription, 'description', index);
        this.setState({description : event.target.value})
    }

    handleDurationChange(event) {
        // const {handleChange, index} = this.props ;
        // const newDuration = event.target.value;
        // handleChange(newDuration, 'duration', index);
        this.setState({duration : event.target.value})
    }

    render() {
        const {index, activity, handleUpdating, handleDeleting, icon} = this.props;
        const {description, duration} = this.state;
        return (
            <div className='activity-bar'>
                <div className="input-group activity-bar__input-group row">
                    <div className="input-group-prepend activity-bar__tag col-xl-2">
                        <span className="input-group-text">
                            <img src={icon} alt={activity.type}/>
                        </span>
                        <span className="input-group-text">{activity.type}</span>
                    </div>

                        <input type="text"
                               placeholder='description'
                               value={description}
                               className="col-xl-7 form-control activity-bar__description"
                               aria-label="Large"
                               aria-describedby="inputGroup-sizing-sm"
                               onChange={this.handleDescriptionChange}
                        />

                        <input type="number"
                               placeholder='duration (hours)'
                               value={duration}
                               className="form-control activity-bar__duration col-xl-3"
                               aria-label="Large"
                               aria-describedby="inputGroup-sizing-sm"
                               onChange={this.handleDurationChange}
                        />

                    <div className="activity-bar__button-group input-group-append ">
                        <button className="btn btn-outline-secondary" type="button" onClick={() => handleUpdating(index, description, duration)}>UPDATE</button>
                        <button className="btn btn-outline-secondary" type="button" onClick={() => handleDeleting(index)}>DELETE</button>
                    </div>
                </div>
                {/*<div className='bar__type'> {activity.type} </div>*/}
                {/*<input className='bar__input' value={description} type='text' onChange={this.handleDescriptionChange}/>*/}
                {/*<input className='bar__input' value={duration} type='number' onChange={this.handleDurationChange}/>*/}
                {/*<button onClick={() => handleUpdating(index, description, duration)}>UPDATE</button>*/}
                {/*<button onClick={() => handleDeleting(index)}>DELETE</button>*/}
            </div>
        )
    }
}

export default ActivityBar;