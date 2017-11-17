export const ADD_PUBLICATION = 'publications/ADD_PUBLICATION'

export default (state = [1, 2], action = {}) => {
	switch (action.type) {
		case ADD_PUBLICATION:
			return [
				...state,
				action.data,
			]

		default:
			return state			
	}
}
