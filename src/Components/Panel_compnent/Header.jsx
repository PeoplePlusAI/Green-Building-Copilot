import React, { Fragment, useEffect, useState } from 'react';
import HeaderCard from 'Components/Card/HeaderCard';
import Icons from 'Utils/Icons';
import Img from 'Components/Img/Img';
import Image from 'Utils/Image';
import { SearchComponent } from 'ResuableFunctions/SearchFun';
import { MdOutlineSupportAgent } from "react-icons/md";
import { BsInfoSquareFill } from "react-icons/bs";





const Header = ({ offcanvasOn, offcanvasOnButton, dispatch, navigate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);


  useEffect(() => {
    const isFirstVisit = sessionStorage.getItem("isSitePlanFirstVisit");
    if (!isFirstVisit) {
      setIsModalOpen(true)
      sessionStorage.setItem("isSitePlanFirstVisit", "true");
    }
  }, []);


  const headerContentFunc = () => {
    return (
      <Fragment>
        <div className="row align-items-center">
          <div className="col-12 col-sm-5">
            <Img
              src={Image?.CompanyLogo}
              alt="header_logo"
              width="160rem"
              height="30rem"
            />
          </div>

          <div className="col-12 col-sm-7 mt-sm-0 mt-3 d-flex align-items-center justify-content-end">
            <div className="d-flex justify-content-end  w-100">
              <div className="col-12 col-md-6 col-lg-5 d-flex align-items-center">
                 <div className='mb-0 cup' onClick={openModal}>
                  <BsInfoSquareFill size={35} style={{ color: '#fff' }} />
                </div> 
                <SearchComponent placeholder="Search..." className="ms-2 w-100" />
              </div>
            </div>

            {offcanvasOn && (
              <div
                className={`d-inline-block header-icon-tag-width ${offcanvasOn !== "" ? `d-${offcanvasOn}-none` : "d-none"
                  }`}
              >
                <button onClick={offcanvasOnButton} className="btn btn-secondary">
                  {Icons?.profileDefautUserIcon}
                </button>
              </div>
            )}
          </div>
        </div>

        {isModalOpen && (
          <div className="modal-overlay d-flex align-items-center justify-content-center">
            <div
              className="modal-content p-4 bg-white shadow-lg rounded"
              style={{
                maxWidth: "100%",
                width: "800px",
                maxHeight: "80vh",
                overflowY: "auto",
                margin: "15px"
              }}
            >
              <h3 className="text-center">Welcome to the People + AI Green Track App!</h3>
              <p>
                This platform allows you to upload site plans and automatically identify various structural and environmental components using AI-powered detection.
              </p>

              <h5>1. Upload/Selecting a Site Plan</h5>
              <ul>
                <li>Select a site plan from the list to view how our AI identifies elements.</li>
                <li>If you would like to try it out for your own site plan, Click "+ Add Site" to open the upload window.</li>
                <li>Choose a Component (e.g., Structural Elements, Boundaries, etc).</li>
                <li>Select a Sub-Component (e.g., Walls, Doors & Windows, etc).</li>
                <li>Click "Upload" to process the file.</li>
                <li>Confidence score denotes the level of certainty with which the model prediction is done. A confidence score between 30-60% is usually advised for accurate predictions.</li>
              </ul>

              <h5>2. Viewing AI-Detected Components</h5>
              <ul>
                <li>AI will analyze and classify elements within the site plan.</li>
                <li>Detected elements are displayed with bounding boxes and confidence scores.</li>
                <li>Click "View" on a component to inspect its details.</li>
              </ul>

              <h5>3. Navigating and Searching</h5>
              <ul>
                <li>Use the search bar to find specific site plans.</li>
                <li>Scroll through detected components to review AI predictions.</li>
              </ul>

              <div className="text-center mt-3 ">
                <button onClick={closeModal} className="btn" style={{ backgroundColor: "#5bad82", color: "white", width: "100%" }}>
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    );
  };

  return (
    <HeaderCard
      cardClassName='w-100 border-0 header-card py-2'
      cardTitleClassName="mb-0"
      cardContent={headerContentFunc()}
    />
  );
};

export default Header;

// CSS Styles
const styles = `
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.modal-content {
  background: whitesmoke;
  padding: 20px;
  border-radius: 10px;
  max-width: 800px;
  text-align: start;
  font-size:16px;
  line-height:28px;
}


.model-content li{
  list-style: none;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
