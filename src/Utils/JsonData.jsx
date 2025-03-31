import ISO6391 from "iso-639-1";
import Icons from './Icons';
import useCommonState, { useCustomNavigate, useDispatch } from 'ResuableFunctions/CustomHooks';
import { handleRegisterOnChange } from 'Views/Common/Action/Common_action';
import { updateRegisterEyeButtonOne, updateRegisterEyeButtonTwo, updateSitePlanData } from 'Views/Common/Slice/Common_slice';

export const validateEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

export const languageMap = code => {
    return ISO6391.getName(code)
};

export const languageCodeFinder = language => {
    return ISO6391.getCode(language)
};

const JsonData = () => {
    //main selectors
    const dispatch = useDispatch();
    const navigate = useCustomNavigate();
    const { commonState } = useCommonState();

    const jsonOnly = {
        sidebarMenus: [
            {
                icon: Icons?.sideBar_menu_one,
                route: "/dashboard/home"
            },
            {
                icon: Icons?.sideBar_menu_two,
                route: "/dashboard/conversation"
            },
            {
                icon: Icons?.sideBar_menu_three,
                route: "/dashboard/new"
            },
            {
                icon: Icons?.sideBar_menu_four,
                route: "/dashboard/settings"
            },
        ],
        gender: [
            "Male",
            "Female"
        ],
        navigation_menubar: [
            {
                icon: Icons?.sideBar_menu_one,
                click: () => navigate('/dashboard/settings'),
            },
            {
                icon: Icons?.sideBar_menu_two,
                click: () => navigate('/dashboard/settings'),
            },
            {
                icon: Icons?.sideBar_menu_three,
                click: () => navigate('/dashboard/home'),
            },
            {
                icon: Icons?.sideBar_menu_four,
                click: () => navigate('/dashboard/transcription'),
            },
            {
                icon: Icons?.sideBar_menu_five,
                click: () => navigate('/dashboard/conversation'),
            },
        ]
    }

    const jsxJson = {
        register_inputs: [
            {
                placeholder: "Email",
                type: "email",
                category: "input",
                className: 'col-12 input_padding_new mt-2',
                value: commonState?.register_user?.email || '',
                change: (e) => dispatch(handleRegisterOnChange({ email: e.target.value })),
                isMandatory: true,
                Err: commonState?.validated ?
                    commonState?.register_user?.email ?
                        !validateEmail(commonState.register_user.email) ?
                            "Invalid Email"
                            :
                            null
                        :
                        "Email required"
                    :
                    null
            },
            {
                category: "input",
                type: "password",
                placeholder: "Password",
                className: 'col-12 input_padding_new mt-2',
                value: commonState?.register_user?.password || '',
                change: (e) => dispatch(handleRegisterOnChange({ password: e.target.value })),
                eyeState: !commonState?.registerEyeButtonOne,
                eyeFunctionClick: () => dispatch(updateRegisterEyeButtonOne()),
                isMandatory: true,
                Err: commonState?.validated && !commonState?.register_user?.password ? "Password required" : null
            },
            {
                placeholder: "Confirm Password",
                type: "password",
                category: "input",
                className: 'col-12 input_padding_new mt-2',
                value: commonState?.register_user?.confirm_password || '',
                change: (e) => dispatch(handleRegisterOnChange({ confirm_password: e.target.value })),
                eyeState: !commonState?.registerEyeButtonTwo,
                eyeFunctionClick: () => dispatch(updateRegisterEyeButtonTwo()),
                isMandatory: true,
                Err: commonState?.validated ?
                    commonState?.register_user?.confirm_password ?
                        commonState?.register_user?.password === commonState?.register_user?.confirm_password ?
                            null
                            :
                            "Password and Confirm password incorrect"
                        :
                        "Confirm password required"
                    :
                    null
            },
        ],

        add_plan_modal: [
            {
                category: "input",
                type: "file",
                divClassName: 'col-12',
                className: 'col-12 input_padding_new mt-2',
                design: 'site_plan_upload',
                value: commonState?.site_plan_data?.file || '',
                change: (e) => dispatch(updateSitePlanData({ type: 'site_data', data: { file: e.target.files[0] } })),
                isMandatory: true,
                Err: commonState?.validated && !commonState?.site_plan_data?.file ? "File required" : null,
                delete_file: () => dispatch(updateSitePlanData({ type: 'site_data', data: { file: null } })),
            },
            {
                category: "select",
                type: 'normal_select',
                name: 'Component',
                options: [],
                divClassName: `col-12 mt-2 ${!commonState?.site_plan_data?.file ? 'd-none' : ''}`,
                value: commonState?.site_plan_data?.component || '',
                change: (e) => dispatch(updateSitePlanData({ type: 'site_data', data: { component: e.target.value } })),
            }
        ],

        component_select: [
            {
                category: "select",
                type: 'normal_select',
                name: 'Component',
                options: [],
                divClassName: `col-12 mt-2`,
                value: commonState?.site_plan_data?.component || '',
                change: (e) => dispatch(updateSitePlanData({ type: 'site_data', data: { component: e.target.value } })),
            }
        ]
    }

    return {
        "jsonOnly": jsonOnly,
        "jsxJson": jsxJson
    }
}

export default JsonData