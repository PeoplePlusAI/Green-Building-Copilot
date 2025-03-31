import ModalComponent from "Components/Modal/Modal";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { Inputfunctions } from "./Inputfunctions";
import JsonData from "Utils/JsonData";
import ButtonComponent from "Components/Button/Button";

export function OverallModel() {
    const selectCommonState = (state) => state.commonState;
    const selectMemoizedStates = createSelector(
        [selectCommonState],
        (commonState) => ({ commonState })
    );
    const { commonState } = useSelector(selectMemoizedStates);
    // const dispatch = useDispatch();
    const { JsonJsx, jsxJson } = JsonData();
    // const navigate = useCustomNavigate();

    function modalHeaderFun() {
        switch (commonState?.modal_from) {
            case "home":
                switch (commonState?.modal_type) {
                    case "upload_site_plan":
                        return <h6 className='mb-0 '>Upload a site plan</h6>;

                    default:
                        break;
                }
                break;

            default:
                break;
        }
    }

    function modalBodyFun() {
        switch (commonState?.modal_from) {
            case "home":
                switch (commonState?.modal_type) {
                    case "upload_site_plan":
                        return Inputfunctions(jsxJson?.add_plan_modal)

                    default:
                        break;
                }
                break;

            default:
                break;
        }
    }

    function modalFooterFun() {
        switch (commonState?.modal_from) {
            case "home":
                switch (commonState?.modal_type) {
                    case "upload_site_plan":
                        return <div className="row w-100 border-top pt-2">
                            <div className="col p-1">
                                <ButtonComponent
                                    type="button"
                                    className="btn-secondary w-100"
                                    buttonName="cancel"
                                />
                            </div>
                            <div className="col p-1">
                                <ButtonComponent
                                    type="button"
                                    className="btn-brand-color w-100"
                                    buttonName="Upload"
                                />
                            </div>
                        </div>

                    default:
                        break;
                }
                break;

            default:
                break;
        }
    }

    return (
        <ModalComponent
            show={commonState?.modalShow}
            modalSize={commonState?.moalSize}
            modalCentered={true}
            modalCloseButton={commonState?.modal_close_btn}
            showModalHeader={true}
            modalHeaderClassname="border-0"
            modalHeader={modalHeaderFun()}
            modalBodyClassname="py-2"
            modalBody={<div className='d-flex flex-wrap p-3 py-0'>{modalBodyFun()}</div>}
            showModalFooter={true}
            modalFooterClassname="border-0"
            modalFooter={modalFooterFun()}
            modalClassname={["lg", "xl"].includes(commonState?.moalSize) ? "model_height_lg" : ''}
        />
    )
}