import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {onFetchAllActivities, onFetchActivity, onUpdateActivity, onDeleteActivity} from "../redux/actions";
import ActivityBar from "./ActivityBar";
import Summary from "./Summary";

class ActivityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activityTypes: [
                {
                    type: 'workout',
                    color: '#0cb074',
                    icon: '/images/gym.svg'
                },
                {
                    type: 'games',
                    color: '#178b79',
                    icon: '/images/game.svg'
                },
                {
                    type: 'study',
                    color: '#e2a013',
                    icon: '/images/study.svg'
                },
                {
                    type: 'music',
                    color: '#ca2544',
                    icon: '/images/guitar.svg'
                },
                {
                    type: 'painting',
                    color: '#d94d22',
                    icon: '/images/brush.svg'
                },
                {
                    type: 'coding',
                    color: '#09a9b7',
                    icon: '/images/keyboard.svg'
                }
            ],
            colors : ['red', 'orange', 'yellow'],
            activities: []
        };
        this.fetchActivityList = this.fetchActivityList.bind(this);
        this.addActivity = this.addActivity.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdating = this.handleUpdating.bind(this);
        this.handleDeleting = this.handleDeleting.bind(this);
    }

    componentDidMount() {
        this.fetchActivityList();
    }

    fetchActivityList() {
        axios
            .get('https://5ef734f82c0f2c001694a07e.mockapi.io/activities')
            .then(res => {
                const {dispatch} = this.props;
                dispatch(onFetchAllActivities(res.data));
            })
            .catch(err => {console.log(err)})
    }

    addActivity(type) {
        const requestPayload = {
            description: '',
            duration: 0,
            type
        }
        const postUrl = 'https://5ef734f82c0f2c001694a07e.mockapi.io/activities' ;
        axios
            .post(postUrl, requestPayload)
            .then(res => {
                const {dispatch} = this.props;
                dispatch(onFetchActivity(res.data));
            })
            .catch(err => {console.log(err)})
    }

    handleChange(value, inputType, index){

    }

    handleUpdating(id, updatedDescription, updatedDuration) {
        const requestPayload = {
            description: updatedDescription,
            duration: updatedDuration
        };
        const putUrl = 'https://5ef734f82c0f2c001694a07e.mockapi.io/activities/' + id ;
        axios
            .put(putUrl, requestPayload)
            .then(res => {
                const {dispatch} = this.props;
                dispatch(onUpdateActivity(res.data));
            })
            .catch(err => {console.log(err)})
    }

    handleDeleting(id) {
        const deleteUrl = 'https://5ef734f82c0f2c001694a07e.mockapi.io/activities/' + id ;
        axios
            .delete(deleteUrl)
            .then(res => {
                const {dispatch} = this.props;
                dispatch(onDeleteActivity(res.data));
            })
            .catch(err => {console.log(err)})
    }

    render() {
        const {activities} = this.props;
        const {activityTypes} = this.state;
        const activityOptions = activityTypes.map((activityType, index) =>(
            <div className='activity-list__activity-options-card'>
                <div className='activity-list__activity-options-separator'></div>
                <div className='activity-list__activity-options-icon'>
                    <img src={activityType.icon} alt={activityType.type}/>
                </div>
                <div className='activity-list__activity-options-label' key={index} onClick={() => this.addActivity(activityType.type)}>{activityType.type}</div>
            </div>
        ))
        const activityListItems = activities.map((activity, index) => (
            <ActivityBar
                key={activity.id}
                index={activity.id}
                activity={activity}
                handleChange={this.handleChange}
                handleUpdating={this.handleUpdating}
                description={activity.description}
                duration={activity.duration}
                handleDeleting={this.handleDeleting}
                icon={activityTypes.find(type => type.type === activity.type).icon}
            />
            ))
        return (
            <div className='activity-list'>
                <div className="activity-list__title">what have you done today ?</div>

                <div className='activity-list__activity-options'>
                    {activityOptions}
                </div>
                <div className='activity-list__list-items'>
                    {activityListItems}
                </div>
                <Summary
                    activities={activities}
                    activityTypes={activityTypes}
                />
            </div>
        )

    }
}

const mapStateToProps = function (state) {
    return {
        activities: state.activities
    }
}

export default connect(mapStateToProps)(ActivityList);