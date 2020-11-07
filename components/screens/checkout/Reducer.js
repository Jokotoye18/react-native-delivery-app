export const DeliveryOptionReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE_OPTION':
            const options = [...state.deliveryOptions]
            return {
                deliveryOptions: options.map(option => {
                    if(option.id == action.payload) {
                        return {
                            ...option,
                            active: true
                        }
                    }else {
                        return {
                            ...option,
                            active: false
                        }
                    }
                })
            }
        default:
            return state
    }
}