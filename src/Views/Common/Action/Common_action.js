import axiosInstance from 'Services/axiosInstance';
import {
    updateModalShow,
    updateCanvasShow,
    updateLoginCredentials,
    updateEyeFunction,

    clearError,
    resetValidation,
    updateValidation,

    userAuthRequest,
    userAuthResponse,
    logout,

    updateResetAllMenus,
    userAuthFailure,

    updateRegisterData,
} from 'Views/Common/Slice/Common_slice';

export const handleUpdateModalShow = (dispatch) => {
    dispatch(updateModalShow())
}

export const handleUpdateCanvasShow = (dispatch) => {
    dispatch(updateCanvasShow())
}

export const handleLoginCredentials = (data) => (dispatch) => {
    dispatch(updateLoginCredentials(data))
}

export const handleEyeFunction = () => dispatch => {
    dispatch(updateEyeFunction())
}

export const handleClearErrors = dispatch => {
    dispatch(clearError())
}

export const handleValidation = dispatch => {
    dispatch(updateValidation())
}

export const handleResetValidation = dispatch => {
    dispatch(resetValidation())
}

//reset all 
export const handleResetAlMenus = dispatch => {
    dispatch(updateResetAllMenus())
}

//login api 
export const handleLogin = (params, navigate) => async (dispatch) => {
    try {
        dispatch(userAuthRequest())
        const res = await axiosInstance.post('/user/login', params);
        if (res.status === 200) {
            dispatch(userAuthResponse(res?.data))
            navigate('/dashboard/home')
        } else {
            dispatch(userAuthFailure({ message: res?.data?.message, type: "error" }))
        }
    } catch (err) {
        dispatch(userAuthFailure({ message: err?.response?.data?.detail, type: "error" }))
    }
}

//Logout api
export const handleLogout = () => dispatch => {
    dispatch(logout())
}

//Regsiter onchange function
export const handleRegisterOnChange = (params) => dispatch => {
    dispatch(updateRegisterData(params))
}

//Regsiter api 
export const handleRegistration = (params, navigate) => async (dispatch) => {
    try {
        dispatch(userAuthRequest())
        const res = await axiosInstance.post('/user/register', params);
        if (res.status === 200) {
            dispatch(userAuthResponse(res?.data))
            navigate('/dashboard/home')
        } else {
            dispatch(userAuthFailure({ message: res?.data?.message, type: "error" }))
        }
    } catch (err) {
        dispatch(userAuthFailure({ message: err?.response?.data?.detail, type: "error" }))
    }
}