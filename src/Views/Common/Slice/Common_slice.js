import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'
import { decryptData, encryptData } from "Security/Crypto/Crypto";

const commonSlice = createSlice({
    name: 'commonSlice',
    initialState: {
        modalShow: false,
        moalSize: "md",
        modal_from: null,
        modal_type: null,
        modal_close_btn: true,

        canvasShow: false,
        isOnline: true,
        currentNavMenuIndex: 0,
        currentMenuName: '',
        innerWidth: 0,
        innerHeight: 0,
        buttonSpinner: false,

        //login states
        usernamee: '',
        passwordd: '',
        eyeOpen: false,
        validated: false,

        //token
        token: Cookies.get("log_data") ? decryptData(Cookies.get("log_data"))?.access_token : '',
        user_id: Cookies.get("log_data") ? decryptData(Cookies.get("log_data"))?.user_id : '',
        email: Cookies.get("log_data") ? decryptData(Cookies.get("log_data"))?.email : '',
        user_role: Cookies.get("user_role") || '',

        //Register data
        register_user: {},

        //Search
        search_clicked: false,
        search_value: "",

        site_plan_data: {}

    },
    reducers: {
        updateModalShow(state, actions) {
            return {
                ...state,
                modalShow: !state.modalShow
            }
        },
        updateCanvasShow(state, actions) {
            return {
                ...state,
                canvasShow: !state.canvasShow
            }
        },
        updateIsonline(state, action) {
            return {
                ...state,
                isOnline: action.payload
            }
        },
        updateCurrentNavMenuIndex(state, action) {
            return {
                ...state,
                currentMenuName: action.payload,
            }
        },
        updateScreenCurrentDimension(state, action) {
            return {
                ...state,
                innerWidth: action.payload?.innerWidth,
                innerHeight: action.payload?.innerHeight
            }
        },
        resetModalBox(state, action) {
            return {
                ...state,
                modalShow: false,
                moalSize: "md",
                modal_from: null,
                modal_type: null,
                modal_close_btn: true,
            }
        },
        updateModalFromCommonSlice(state, action) {
            return {
                ...state,
                modalShow: true,
                moalSize: action.payload?.modalSize || 'md',
                modal_from: action.payload?.modal_from,
                modal_type: action.payload?.modal_type,
                modal_close_btn: action.payload?.modal_close_btn || true,
            }
        },

        //Toast
        updateToast(state, action) {
            return {
                ...state,
                Err: action.payload.message,
                Toast_Type: action.payload.type,
                buttonSpinner: false
            }
        },
        clearError(state, actions) {
            return {
                ...state,
                Err: null,
                Toast_Type: null
            }
        },

        //Form validation
        updateValidation(state, actions) {
            return {
                ...state,
                validated: true
            }
        },
        resetValidation(state, action) {
            return {
                ...state,
                validated: false
            }
        },

        //Login states
        updateLoginCredentials(state, action) {
            const type = Object.keys(action.payload)[0];
            switch (type) {
                case "username":
                    return {
                        ...state,
                        usernamee: action.payload?.username
                    }
                case "password":
                    return {
                        ...state,
                        passwordd: action.payload?.password
                    }
                default:
                    return
            }
        },
        updateEyeFunction(state, actions) {
            return {
                ...state,
                eyeOpen: !state.eyeOpen
            }
        },

        //Login and Register Api 
        userAuthRequest(state, actions) {
            return {
                ...state,
                buttonSpinner: true,
                token: null
            }
        },
        userAuthResponse(state, action) {
            if (action.payload?.access_token) {
                const encryptedToken = encryptData(action.payload)
                Cookies.set("log_data", encryptedToken)
            }
            return {
                ...state,
                buttonSpinner: false,
                eyeOpen: !state.eyeOpen,
                token: action.payload?.access_token,
                user_id: action.payload?.user_id,
                email: action.payload?.email
            }
        },
        userAuthFailure(state, action) {
            return {
                ...state,
                Err: action.payload.message,
                Toast_Type: action.payload.type,
                buttonSpinner: false
            }
        },

        //Logout
        logout(state, actions) {
            Cookies.remove("token");
            Cookies.remove("user_id");
            return {
                ...state,
                token: '',
                usernamee: '',
                passwordd: '',
            }
        },

        //reset all menus
        updateResetAllMenus(state, action) {
            return {
                ...state,
                edited: false,
                validated: false,
                modalShow: false,
                pageSize: 10,
                currentPage: 1,
                entries_selected: false,
                search_value: '',
                search_clicked: false,
                apply_filter: false,
                apply_filter_clicked: false
            }
        },

        //Register data updating state
        updateRegisterEyeButtonOne(state, action) {
            return {
                ...state,
                registerEyeButtonOne: !state?.registerEyeButtonOne
            }
        },
        updateRegisterEyeButtonTwo(state, action) {
            return {
                ...state,
                registerEyeButtonTwo: !state?.registerEyeButtonTwo
            }
        },
        updateRegisterData(state, action) {
            return {
                ...state,
                register_user: {
                    ...state.register_user,
                    ...action.payload
                }
            }
        },

        //Search states 
        updateSearchClickedTrue(state, action) {
            return {
                ...state,
                search_clicked: !state.search_clicked
            }
        },
        updateSearchValue(state, action) {
            return {
                ...state,
                search_value: action.payload
            }
        },
        clearSearch(state, action) {
            return {
                ...state,
                search_clicked: false,
                search_value: ''
            }
        },

        updateSitePlanData(state, action) {
            let site_plan_data = {};
            if (action?.payload?.type === "site_data") site_plan_data = { ...state.site_plan_data, ...action.payload?.data }

            return {
                ...state,
                site_plan_data
            }
        }
    }, 
})

const { actions, reducer } = commonSlice;

export const {
    updateModalShow,
    updateCanvasShow,
    updateIsonline,
    updateCurrentNavMenuIndex,
    updateScreenCurrentDimension,
    updateLoginCredentials,
    updateEyeFunction,
    clearError,
    updateResetAllMenus,
    resetModalBox,
    updateModalFromCommonSlice,

    resetValidation,
    updateValidation,

    userAuthRequest,
    userAuthResponse,
    userAuthFailure,

    updateToast,
    logout,

    updateRegisterEyeButtonOne,
    updateRegisterEyeButtonTwo,
    updateRegisterData,

    getLanguagesRequest,
    getLanguagesResponse,
    getLanguagesFailure,
    updateSelectedLanguage,
    updateSearchClickedTrue,
    updateSearchValue,
    clearSearch,
    updateSitePlanData

} = actions;

export default reducer