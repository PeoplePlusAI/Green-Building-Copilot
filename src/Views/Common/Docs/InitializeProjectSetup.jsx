import React, { Fragment, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { handleClearErrors } from 'Views/Common/Action/Common_action';
import { toast } from 'react-toastify';
import useCommonState, { CustomUseLocationHook, useSize } from 'ResuableFunctions/CustomHooks';
import { Outlet } from 'react-router-dom';
import { updateCurrentNavMenuIndex, updateIsonline, updateScreenCurrentDimension } from 'Views/Common/Slice/Common_slice';
import { OverallModel } from 'ResuableFunctions/OverallModal';
import MetaData from 'Components/Helmet/MetaData';

export const InitializeProjectSetup = () => {
    //                                                                     Redux memorized states                                                            //
    const { commonState } = useCommonState();
    const sizer = useSize();
    const dispatch = useDispatch();
    const location = CustomUseLocationHook();

    //                                                                     Screen size and online offline Handler                                             //
    useEffect(() => {
        dispatch(updateIsonline(navigator.onLine))
        dispatch(updateScreenCurrentDimension(sizer))
    }, [])


    //                                                                      Online or Offline                                                                  //
    window.addEventListener('online', () => {
        dispatch(updateIsonline(true))
    });
    window.addEventListener('offline', () => {
        dispatch(updateIsonline(false))
    });


    //                                                                       Toast Handler                                                                      //
    useEffect(() => {
        if (commonState?.Err) {
            toast(commonState?.Err, {
                position: "top-right",
                type: commonState?.Toast_Type,
                onOpen: () => dispatch(handleClearErrors),
                autoClose: 1600
            })
            return
        }
    }, [commonState?.Toast_Type, commonState?.Err, dispatch])


    //                                                                      Current page name handler                                                            //
    useEffect(() => {
        const currentLocation = location[location.length - 1]
        if (location?.length) {
            const filterEmptyStr = location?.filter((v) => v !== '')
            if (currentLocation) {
                if (commonState?.currentMenuName !== currentLocation) {
                    dispatch(updateCurrentNavMenuIndex(currentLocation))
                }
            } else {
                if (filterEmptyStr?.length) {
                    const filteredCurrentLocation = filterEmptyStr[filterEmptyStr.length - 1]
                    if (commonState?.currentMenuName !== filteredCurrentLocation) {
                        dispatch(updateCurrentNavMenuIndex(filteredCurrentLocation))
                    }
                }
            }
        }
    }, [location])


    return commonState?.isOnline ?
        <Fragment>
            <MetaData title={commonState?.currentMenuName ?
                commonState.currentMenuName.charAt(0).toUpperCase() + commonState.currentMenuName.slice(1).toLowerCase()
                :
                ""
            }/>
            
            <Outlet />
            <OverallModel />
        </Fragment>
        :
        <p>No internet connection</p>
}