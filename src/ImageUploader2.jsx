import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const ImageUploader2 = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [predictions, setPredictions] = useState([]);
    const canvasRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                const img = new Image();
                img.src = reader.result;

                img.onload = () => {
                    const resizedBase64 = resizeImage(img, 640, 640); // Resize to 640x640
                    setImageSrc(resizedBase64);
                    uploadImage(resizedBase64.split(",")[1]); // Send base64 without metadata
                };
            };
        }
    };

    const resizeImage = (img, width, height) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);

        return canvas.toDataURL("image/jpeg"); // Convert to Base64
    };

    const uploadImage = async (base64String) => {
        try {
            const response = await axios.post(
                "https://detect.roboflow.com/trees-and-vegetation/2",
                base64String,
                {
                    params: { api_key: "dummy" },
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                }
            );

            setPredictions(response.data.predictions);

            setTimeout(() => {
                if (imageSrc) drawBoundingBoxes(response.data);
            }, 500);
        } catch (error) {
            console.error("Error:", error.message);
        }
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

            data.predictions.forEach(({ x, y, width, height, class: label, confidence }) => {
                const x1 = (x - width / 2) * scaleX;
                const y1 = (y - height / 2) * scaleY;
                const boxWidth = width * scaleX;
                const boxHeight = height * scaleY;

                ctx.strokeStyle = "red";
                ctx.lineWidth = 3;
                ctx.strokeRect(x1, y1, boxWidth, boxHeight);

                ctx.fillStyle = "red";
                ctx.font = "16px Arial";
                ctx.fillText(`${label} (${(confidence * 100).toFixed(1)}%)`, x1, y1 - 5);
            });
        };

        img.onerror = () => console.error("Failed to load image:", img.src);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Upload an Image</h2>
            <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2"/>
            {imageSrc && <canvas ref={canvasRef} className="border mt-4"></canvas>}
        </div>
    );
};

export default ImageUploader2;
