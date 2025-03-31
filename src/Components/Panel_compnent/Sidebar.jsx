import React from 'react'
import Img from 'Components/Img/Img';
import OffCanvas from 'Components/Offcanvas/OffCanvas';
import ButtonComponent from 'Components/Button/Button';
import NavLinkComp from 'Components/Router_components/NavLink';
import Image from 'Utils/Image';
import Icons from 'Utils/Icons';

const Sidebar = ({
    menuOptions,
    responsiveOn,
    offCanvasShow,
    handleCanvasOpenOrClose,

    header,
    companyLogo,

    footer,
    footerClickFunction
}) => {

    const hanldeButton = (v) => {
        return <div className="col-12 pb-1 text-center">
            {v.icon}
        </div>
    }

    const headerFun = (width, height, image) => {
        return <Img
            src={image}
            alt='company logo'
            width={width}
            height={height}
        />
    }

    const bodyContent = () => {
        return menuOptions.map((v, i) => (
            <NavLinkComp
                componentFrom="sidebar menus"
                className='w-50 btn-dark mb-2 navlink-sidebar rounded p-2 text-decoration-none'
                title={hanldeButton(v)}
                to={v.route}
                key={i}
            />
        ))
    }

    const bodyFun = (ifOffcanvas) => {
        return ifOffcanvas ?
            <div className="row justify-content-center">
                <div className="col-11">
                    {bodyContent()}
                </div>
            </div>
            :
            bodyContent()
    }

    const footerContent = (type) => {
        return <div className="sidebar-footer">
            <div className={`row h-100 ${type === "offcanvas" ? "align-items-center" : "align-items-end"}`}>
                <ButtonComponent
                    componentFrom="sidebar menus"
                    className={`w-100 border-0 sign-out-button text-light`}
                    title={"log out"}
                    buttonName={
                        <div className="col-12 text-center">
                            {Icons?.logout_icon}
                            <p className='fs-12 mb-0 pt-2'>LOGOUT</p>
                        </div>
                    }
                    clickFunction={footerClickFunction}
                />
            </div>
        </div>
    }

    const footerFun = (ifOffcanvas) => {
        return ifOffcanvas ?
            <div className="row justify-content-center">
                <div className="col-10 ">
                    {footerContent("offcanvas")}
                </div>
            </div>
            :
            footerContent("sidebar")
    }

    return (
        <>
            <div className={`sidebar d-none ${responsiveOn ? `d-${responsiveOn}-block` : 'd-block'}`}>
                {/* header */}
                <div className="sidebar-header">
                    <div className="row h-100 align-items-center justify-content-center">
                        <div className="col">
                            {headerFun('75rem', '80rem', Image.sidebar_top_deign)}
                        </div>
                    </div>
                </div>


                {/* body */}
                <div className={footer ? "sidebar-body-with-footer row flex-column align-items-center gap-4" : "sidebar-body-without-footer"}>
                    {bodyFun()}
                </div>

                {/* footer */}
                {
                    footer ?
                        footerFun()
                        :
                        null
                }
            </div>

            <OffCanvas
                offCanvasShow={offCanvasShow}
                offcanvasPlacement="start"
                offcanvasClassname="rounded border-0"
                handleCanvasOpenOrClose={handleCanvasOpenOrClose}
                canvasHeader={headerFun('24%', '45px', companyLogo)}
                offcanvasHeaderClassname="sidebar-header ms-5"
                offcanvasHeaderTitleClassname="col-11"
                offcanvasBodyClassname={footer ? "sidebar-body-with-footer py-3" : "sidebar-body-without-footer"}
                canvasBody={bodyFun("offcanvas")}
                canvasFooter={footerFun("offcanvas")}
            />
        </>
    )
}

export default Sidebar