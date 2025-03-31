import React, { useState, useEffect, useRef, useCallback } from "react";
import { Card, Modal } from "react-bootstrap";
import ButtonComponent from "Components/Button/Button";
import Img from "Components/Img/Img";
import Images from "Utils/Image";
import axios from "axios";
import { toast } from "react-toastify";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RxComponent1 } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";
import { FaPlus } from "react-icons/fa"
import heic2any from "heic2any";
// import { decode } from "@saschazar/wasm-heic";
import { useDropzone } from "react-dropzone";


const Home = ({ show, handleClose, setUploadedFile }) => {
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addSitePlanModalShow, setAddSitePlanModalShowShow] = useState(false);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [selectedComponent, setSelectedComponent] = useState("");
  const [selectedSubComponent, setSelectedSubComponent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const { search_value } = useSelector((state) => state.commonState);

  const [modalData, setModalData] = useState({
    heading: "",
    image: "",
    apiData: null,
  });

  // const imgList = [
  //   Images?.trees_and_vegetation,
  //   Images?.text_labels,
  //   Images?.north_arrow,
  //   Images?.scales,
  //   Images?.dimensions,
  //   Images?.building_footprint,
  //   Images?.site_boundary_lines,
  // ];

  const [sitePlans, setSitePlans] = useState([
    {
      img: Images?.trees_and_vegetation,
      component: "Landscape and Environmental Features",
      subComponent: "Trees and Vegetation",
    },
    {
      img: Images?.text_labels,
      component: "Annotations and Labels",
      subComponent: "Text Labels",
    },
    {
      img: Images?.north_arrow,
      component: "Annotations and Labels",
      subComponent: "North Arrow",
    },
    {
      img: Images?.scales,
      component: "Dimensions and Measurements",
      subComponent: "Scale",
    },
    {
      img: Images?.dimensions,
      component: "Dimensions and Measurements",
      subComponent: "Dimension Lines",
    },
    {
      img: Images?.building_footprint,
      component: "Boundaries and Site Layout",
      subComponent: "Building Footprint",
    },
    {
      img: Images?.site_boundary_lines,
      component: "Boundaries and Site Layout",
      subComponent: "Site Boundary Lines",
    },
    {
      img: Images?.doors,
      component: "Structural Elements",
      subComponent: "Doors and Windows",
    },
    {
      img: Images?.walls,
      component: "Structural Elements",
      subComponent: "Walls",
    }
  ]);

  const filtered = sitePlans.filter(
    (plan) =>
      plan.component.toLowerCase().includes(search_value.toLowerCase()) ||
      plan.subComponent.toLowerCase().includes(search_value.toLowerCase())
  );
  const reverseFillteredResults = filtered.reverse();

  const defaultComponentOptions = [
    { label: "Landscape and Environmental Features" },
    { label: "Annotations and Labels" },
    { label: "Directional Indicators" },
    { label: "Dimensions and Measurements" },
    { label: "Dimensions and Measurements" },
    { label: "Boundaries and Site Layout" },
    { label: "Boundaries and Site Layout" },
  ];
  const defaultSubComponentOptions = [
    { label: "Trees and Vegetation" },
    { label: "Text Labels" },
    { label: "North Arrow" },
    { label: "Scale" },
    { label: "Dimension Lines" },
    { label: "Building Footprint" },
    { label: "Site Boundary Lines" },
  ];

  const componentOptions = [
    { value: "type1", label: "Boundaries and Site Layout" },
    { value: "type2", label: "Dimensions and Measurements" },
    // { value: "type3", label: "Utility and Service Lines" },
    { value: "type4", label: "Landscape and Environmental Features" },
    { value: "type5", label: "Annotations and Labels" },
    { value: "type6", label: "Structural Elements" },
  ];

  const subComponentOptions = {
    type1: [
      { value: "sub1", label: "Building Footprint" },
      { value: "sub2", label: "Site Boundary Lines" },
    ],
    type2: [
      { value: "sub3", label: "Dimension Lines" },
      { value: "sub4", label: "Scale" },
    ],
    // type3: [
    //   { value: "sub6", label: "Water Supply and Drainage" },
    //   { value: "sub7", label: "Electrical Lines and Poles" },
    // ],
    type4: [{ value: "sub5", label: "Trees and Vegetation" }],
    type5: [
      { value: "sub6", label: "Text Labels" },
      { value: "sub7", label: "North Arrow" },
    ],
    type6: [
      { value: "sub8", label: "Doors and Windows" },
      { value: "sub9", label: "Walls" },
    ],
  };

  const [imageSrc, setImageSrc] = useState("");
  const [predictions, setPredictions] = useState([]);
  const canvasRef = useRef(null);

  const handleViewClick = async (
    subComponentLabel,
    imgSrc,
    confidenceValue
  ) => {
    try {
      const resizedBase64 = await resizeImage(imgSrc, 640, 640);
      setImageSrc(resizedBase64);
      fetchData(
        subComponentLabel,
        resizedBase64.split(",")[1],
        confidenceValue
      );

      setModalData({ heading: subComponentLabel, image: resizedBase64 });
      setModalShow(true);
    } catch (error) {
      console.error("Error processing image:", error);
    }
  };

  const resizeImage = (imgSrc, width, height) => {
    return new Promise((resolve, reject) => {
      const img = new window.Image();
      img.crossOrigin = "anonymous";
      img.src = imgSrc;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        resolve(canvas.toDataURL("image/jpeg"));
      };

      img.onerror = (error) => reject(error);
    });
  };

  const fetchData = async (
    subComponentLabel,
    base64String,
    confidenceValue
  ) => {
    setLoading(true);
    setPredictions([]);

    try {
      let apiUrl = "";

      switch (subComponentLabel) {
        case "Trees and Vegetation":
          apiUrl = "https://detect.roboflow.com/trees-and-vegetation/2";
          break;
        case "Text Labels":
          apiUrl = "https://detect.roboflow.com/dimensions/1";
          break;
        case "North Arrow":
          apiUrl = "https://detect.roboflow.com/north-arrow/1";
          break;
        case "Scale":
          apiUrl = "https://detect.roboflow.com/floorplan-roi-ytpo7-b80vj/1";
          break;
        case "Dimension Lines":
          apiUrl = "https://detect.roboflow.com/real-floor-plan-ib74g/1";
          break;
        case "Building Footprint":
          apiUrl = "https://detect.roboflow.com/perimeter-qrjh0-ihbdm/1";
          break;
        case "Site Boundary Lines":
          apiUrl = "https://detect.roboflow.com/boundaries-and-sitelayout/3";
          break;
        case "Doors and Windows":
          apiUrl = "https://detect.roboflow.com/windows-doors/1";
          break;
        case "Walls":
          apiUrl = "https://detect.roboflow.com/wallsdetection-gez90/4";
          break;

        default:
          apiUrl = null;
      }

      if (!apiUrl) {
        setLoading(false);
        return null;
      }

      const response = await axios.post(apiUrl, base64String, {
        params: {
          api_key: "SHjYPXAh95H33XrhPK9y",
          confidence: confidenceValue,
        },
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });

      if (
        !response.data.predictions ||
        response.data.predictions.length === 0
      ) {
        toast.error("Unable to Identify the Object");
        setModalShow(false);
        setImageSrc("");
        setPredictions([]);
        setLoading(false);
        return;
      }

      setLoading(false);
      setPredictions(response.data.predictions);

      setTimeout(() => {
        if (imageSrc) drawBoundingBoxes(response.data);
      }, 500);
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const [confidenceScores, setConfidenceScores] = useState({});

  // Function to update slider value for a specific index
  const handleSliderChange = (index, newValue) => {
    setConfidenceScores((prevScores) => ({
      ...prevScores,
      [index]: newValue, // Update only the relevant index
    }));
  };

  useEffect(() => {
    if (imageSrc && predictions.length > 0) {
      drawBoundingBoxes({ image: { width: 640, height: 640 }, predictions });
    }
  }, [imageSrc, predictions]);

  const drawBoundingBoxes = (data) => {
    const canvas = canvasRef.current;
    if (!canvas || !imageSrc || !data.image) return;

    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, img.width, img.height);

      const scaleX = canvas.width / data.image.width;
      const scaleY = canvas.height / data.image.height;

      data.predictions.forEach(
        ({ x, y, width, height, class: label, confidence }) => {
          const x1 = (x - width / 2) * scaleX;
          const y1 = (y - height / 2) * scaleY;
          const boxWidth = width * scaleX;
          const boxHeight = height * scaleY;

          ctx.strokeStyle = "red";
          ctx.lineWidth = 3;
          ctx.strokeRect(x1, y1, boxWidth, boxHeight);

          ctx.fillStyle = "red";
          ctx.font = "16px Arial";
          ctx.fillText(
            `${label} (${(confidence * 100).toFixed(1)}%)`,
            x1,
            y1 - 5
          );
        }
      );
    };

    img.onerror = () => console.error("Failed to load image:", img.src);
  };

  const cardStyle = {
    fontSize: "13px",
    padding: "8px 12px",
    backgroundColor: "#f1f1f1",
  };

  // const handleOnChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const allowedFormats = ["image/jpeg", "image/png", "image/gif", "image/webp"];

  //     if (allowedFormats.includes(file.type)) {
  //       const imageUrl = URL.createObjectURL(file);
  //       setImageName(file.name);
  //       setImage(imageUrl);
  //     } else {
  //       toast.warn("Only image files (jpg, png, gif, webp) are allowed.");
  //       e.target.value = ""; // Reset file input
  //     }
  //   }
  // };

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB


  const handleOnChange = async (e) => {
    const file = e.target.files[0];

    console.log(file)
    if (file) {
      // Allowed image formats
      const allowedFormats = ["image/jpeg", "image/png", "image/webp", "image/heif", "image/heic"];

      // Check file size
      if (file.size > MAX_FILE_SIZE) {
        toast.error("File size exceeds 5MB. Please upload a smaller image.");
        e.target.value = ""; // Reset file input
        setImage(null);
        setErrorMessage("File too large. Max size: 5MB.");
        return;
      }

      if (allowedFormats.includes(file.type)) {
        if (file.type === "image/heif") {
          try {
            // Convert HEIC to JPEG
            const blob = await heic2any({ blob: file, toType: "image/jpeg" });
            const convertedFile = new File([blob], file.name.replace(".heic", ".jpg"), {
              type: "image/jpeg",
            });

            // Create image preview
            const reader = new FileReader();
            reader.onload = () => {
              setImage(reader.result);
            };
            reader.readAsDataURL(convertedFile);

            setImageName(convertedFile.name);
            setErrorMessage("");
          } catch (error) {
            toast.error("Error converting HEIC file.");
            console.error("HEIC conversion error:", error);
          }
        } else {
          // Create image preview
          const reader = new FileReader();
          reader.onload = () => {
            setImage(reader.result);
          };
          reader.readAsDataURL(file);

          setImageName(file.name);
          setErrorMessage("");
        }
      } else {
        toast.error("Invalid file format! Only PNG, JPG, JPEG, WEBP, and HEIC are allowed.");
        e.target.value = ""; // Reset file input
        setImage(null);
        setErrorMessage("Invalid format. Please upload a valid image.");
      }
    }
  };
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      handleOnChange(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] }, // Accept all images, including HEIC
    maxSize: MAX_FILE_SIZE,
    multiple: false,
  });


  const handleSitePlanAdd = () => {
    if (!image || !selectedComponent || !selectedSubComponent) {
      toast.warn("Please select an image, component, and sub-component.");
      return;
    }

    const newSitePlan = {
      img: image,
      component:
        componentOptions.find((c) => c.value === selectedComponent)?.label ||
        "Unknown Component",
      subComponent:
        subComponentOptions[selectedComponent]?.find(
          (s) => s.value === selectedSubComponent
        )?.label || "Unknown Sub-Component",
    };

    setSitePlans([...sitePlans, newSitePlan]);
    setAddSitePlanModalShowShow(false);
    setImage(null);
    setSelectedComponent("");
    setSelectedSubComponent("");
  };


  return (
    <>
      <Card className="border-0">
        <Card.Header className="bg-transparent py-4">
          <div className="row align-items-center">
            <div className="col">
              <h5 className="mb-0">Green Track</h5>
            </div>
            <div className="col text-end">
              <div className="btn btn-brand-color" onClick={() => setAddSitePlanModalShowShow && setAddSitePlanModalShowShow(true)}>
                <FaPlus style={{ width: "0.6rem" }} />
                <ButtonComponent type="button" className="btn btn-brand-color btn-sm" buttonName="Add Site" />
              </div>
            </div>
          </div>
        </Card.Header>

        <Card.Body className="home_content_height">
          <div className="row">
            {reverseFillteredResults.length > 0 ? (
              reverseFillteredResults.map((plan, index) => {
                const componentLabel = plan.component || "N/A";
                const subComponentLabel = plan.subComponent || "N/A";
                const confidenceValue = confidenceScores[index] || 40; // Default value: 40

                return (
                  <div
                    key={index}
                    className="col-12 col-md-6 col-lg-4 col-xxl-3 p-1"
                  >
                    <Card>
                      <Card.Body>
                        <Img src={plan.img} width="100%" height="250rem" />

                        <div className="mb-3 mt-3">
                          <p className="mb-2">Component</p>
                          <Card style={cardStyle}>{componentLabel}</Card>
                        </div>

                        <div>
                          <p className="mb-2">Sub-component</p>
                          <Card style={cardStyle}>{subComponentLabel}</Card>
                        </div>

                        <div className="mt-2">
                          <Form.Label>
                            Confidence Score: {confidenceValue}
                          </Form.Label>
                          <Form.Range
                            className="custom-range"
                            min={10}
                            max={70}
                            value={confidenceValue}
                            onChange={(e) =>
                              handleSliderChange(index, e.target.value)
                            }
                          />
                        </div>

                        <br />

                        <ButtonComponent
                          type="button"
                          className="w-100 btn btn-brand-color text-center"
                          buttonName="View"
                          clickFunction={() =>
                            handleViewClick(
                              subComponentLabel,
                              plan.img,
                              confidenceValue
                            )
                          }
                        />
                      </Card.Body>
                    </Card>
                  </div>
                );
              })
            ) : (
              <div className="text-center mt-4">
                <h5>No Search Results Found</h5>
              </div>
            )}
          </div>
        </Card.Body>

        <Modal
          size="lg"
          centered
          show={modalShow}
          onHide={() => {
            setModalShow(false);
            setImageSrc("");
            setPredictions([]);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title >{modalData?.heading}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="mx-auto">
            {loading ? (
              <div className="text-center my-3">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              imageSrc && (
                <canvas ref={canvasRef} className="border mt-4" style={{ width: "100%" }}></canvas>
              )
            )}
          </Modal.Body>
        </Modal>

        {/* Add site plan modal */}
        <Modal
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={addSitePlanModalShow}
          onHide={() => {
            setAddSitePlanModalShowShow(false);
            setImage(null);
          }}
        >
          <Modal.Header className="border-0" closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <p className="mb-0" style={{ fontSize: "18px", fontWeight: "600" }}>
                Upload Site Plan
              </p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="border-0 mb-3 " style={{ overflow: "hidden" }}>
            {image ? (
              <>
                <div className="d-flex align-items-center dashed-border p-0 mx-3 p-3">
                  <div class="d-flex align-items-center card-body border border-grey rounded-3 p-3 me-3">
                    <Img
                      className="d-block me-2"
                      src={Images.imageFile}
                      width="50"
                    />
                    <p className="mt-2 mb-0 brand-color text-break">
                      {imageName}
                    </p>
                  </div>
                  <p
                    className="mb-0 text-danger cup"
                    onClick={() => setImage(null)}
                  >
                    <MdDeleteOutline className="fs-3 me-2 text-danger" />
                  </p>
                </div>
                <div className="mx-3 mt-4 mb-0 d-flex">
                  <RxComponent1 className="fs-4 me-2 text-secondary" />
                  <p className="mb-0 fw-bold">Component</p>
                </div>
                <div className="mx-3 my-3">
                  <select
                    className="form-select form-select"
                    value={selectedComponent}
                    onChange={(e) => {
                      setSelectedComponent(e.target.value);
                      setSelectedSubComponent("");
                    }}
                  >
                    <option value="">Select Component</option>
                    {componentOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={`mx-3`}>
                  <select
                    className="form-select form-select"
                    value={selectedSubComponent}
                    onChange={(e) => setSelectedSubComponent(e.target.value)}
                    disabled={!selectedComponent}
                  >
                    <option value="">Select Sub-Component</option>
                    {selectedComponent &&
                      subComponentOptions[selectedComponent]?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                  </select>
                </div>
              </>
            ) : (
              <div
                className="d-flex flex-column justify-content-center align-items-center upload-file-container cup  dashed-border "
                onClick={() => document.getElementById("upload-image").click()}
              >
                <input
                  type="file"
                  id="upload-image"
                  hidden
                  onChange={handleOnChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                >
                  <path
                    d="M20.25 38.25V24.75L15.75 29.25"
                    stroke="#66A682"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.25 24.75L24.75 29.25"
                    stroke="#66A682"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M49.5 22.5V33.75C49.5 45 45 49.5 33.75 49.5H20.25C9 49.5 4.5 45 4.5 33.75V20.25C4.5 9 9 4.5 20.25 4.5H31.5"
                    stroke="#66A682"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M49.5 22.5H40.5C33.75 22.5 31.5 20.25 31.5 13.5V4.5L49.5 22.5Z"
                    stroke="#66A682"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                {/* <Img className="d-block" src={Image.imageFile} width="50" /> */}
                <p className="mt-2 mb-0 text-secondary font-14">
                  Supporting image format <br />
                  PNG, JPG, JPEG, WEBP, HEIC.
                </p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer className="d-flex flex-nowrap justify-content-center gap-2 border-0">
            <ButtonComponent
              type="button"
              className="btn btn-secondary text-center w-50 d-inline-block"
              buttonName="Cancel"
              clickFunction={() => setAddSitePlanModalShowShow(false)}
            />
            <ButtonComponent
              type="button"
              className="btn btn-brand-color text-center w-50 d-inline-block"
              buttonName="Upload"
              clickFunction={handleSitePlanAdd}
            />

          </Modal.Footer>
        </Modal>
      </Card>
    </>
  );
};

export default Home;
