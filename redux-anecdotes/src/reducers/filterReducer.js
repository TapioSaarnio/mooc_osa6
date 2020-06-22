const filterReducer = (state = '', action) => {

    console.log('jotain pitäs tapahtuu')
    switch (action.type) {

        case 'SET_FILTER':
        console.log('setfilter')
        return action.filter

       default: return state
    }
}

export const filterChange = (filter) => {

    return {
        type: 'SET_FILTER',
        filter,
    }
}

export default filterReducer