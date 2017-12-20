export const I_AM_CLICKED = "I_AM_CLICKED"
export const I_AM_UNCLICKED = "I_AM_UNCLICKED"
export const INCREASE = "INCREASE"
export const DECREASE = "DECREASE"
export const INITIATE = "INITIATE"
export const PROGRESS = "PROGRESS"
export const SUCCESS = "SUCCESS"
export function iAmClicked(value){
	return {
		type: I_AM_CLICKED,
		value
	}
}

export function increase() {
	return {
		type: INCREASE,
	}
}

export function decrease() {
	return {
		type: DECREASE,
	}
}

export function initiate() {
	return {
		type: INITIATE
	}
}

export function progress() {
	return {
		type: PROGRESS
	}
}

export function success(data) {
	return {
		type: SUCCESS,
		data
	}
}
export function getGithubData() {
	return (dispatch) => {
		dispatch(initiate())
		return fetch("https://api.github.com/users")
			.then((response) => {
				if(response.status === 200) return response.json()
			})
			.then((data) => {
				dispatch(success(data))
			})
			.catch((error) => {
				//dispatch failure
			})
	}
}
