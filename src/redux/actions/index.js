export function onFetchAllActivities(fetchedActivites){
    return {
        type: "FETCH_ALL",
        activities: fetchedActivites
    }
}

export function onFetchActivity(activity){
    return {
        type: "FETCH_ACTIVITY",
        activity
    }
}

export function onUpdateActivity(updatedActivity){
    return {
        type: "UPDATE_ACTIVITY",
        updatedActivity
    }
}

export function onDeleteActivity(deletedActivity){
    return {
        type: "DELETE_ACTIVITY",
        deletedActivity
    }
}