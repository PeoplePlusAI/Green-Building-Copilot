import Header from 'Components/Panel_compnent/Header'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import useCommonState, { useCustomNavigate, useDispatch } from 'ResuableFunctions/CustomHooks'
import JsonData from 'Utils/JsonData'
import { updateToast } from 'Views/Common/Slice/Common_slice'

const Layout = () => {
    const { commonState } = useCommonState();
    const { jsonOnly } = JsonData();
    const dispatch = useDispatch();
    const navigate = useCustomNavigate();

    // useEffect(() => {
    //     if (!commonState?.token || !commonState?.user_id || !commonState?.email) {
    //         dispatch(updateToast({ message: "Login first to access sunva platform", type: "error" }))
    //         navigate("/")
    //         return
    //     }
    // }, [])

    return (
        <main>
            <div className="container-fluid main_layout">
                <Header dispatch={dispatch} />

                <div className="h-100 mt-3">
                    <section className='full_description_bg'>
                        <Outlet />
                    </section>
                </div>

            </div>
        </main>
    )
}

export default Layout