import React from "react";
import {PieChart} from 'react-minimal-pie-chart';

class Summary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected : 0
        }
        this.setSelected = this.setSelected.bind(this);
    }

    setSelected(index) {
        this.setState({selected : index})
    }

    render() {
        const {activities, activityTypes} = this.props;
        let summaryByType = activityTypes.map((activityType, index) => {
            let activitiesOfTheSameType = activities.filter(activity => activity.type === activityType.type);
            let totalDurationByType = 0;
            activitiesOfTheSameType.forEach(activity => {totalDurationByType += parseInt(activity.duration)})
            return {
                value: totalDurationByType,
                title : activityType.type,
                color : activityType.color
            }
        })
        return (
            <div className='piechart'>
                <PieChart
                    data={summaryByType}
                    radius={PieChart.defaultProps.radius - 6}
                    lineWidth={60}
                    segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                    segmentsShift={(index) => (index === this.state.selected ? 6 : 0)}
                    animate
                    onClick={(_, index) => {
                        this.setSelected(index === this.state.selected ? undefined : index);
                    }}
                    animationDuration={2000}
                />
            </div>

        )
    }
}

export default Summary;