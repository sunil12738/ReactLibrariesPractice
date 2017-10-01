export const I_AM_CLICKED = "I_AM_CLICKED"
export const I_AM_UNCLICKED = "I_AM_UNCLICKED"
export const INCREASE = "INCREASE"
export const DECREASE = "DECREASE"
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