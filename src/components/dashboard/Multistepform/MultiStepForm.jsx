import React, { useState } from "react";
import { Steps } from "antd";
import { Provider } from "./MultiStepFormContext";
import Details from "./Details";
import Address from "./Address";
import Review from "./Review";
import Faculty from "./Faculty";


const { Step } = Steps;

const detailsInitialState = {
    name: "",
    age: "",
    profession: ""
};

const addressInitialState = {
    address1: "",
    address2: "",
    city: ""
};
const galleryInitislState = {
    address1: "",
    address2: "",
    city: ""
};

const renderStep = (step) => {
    switch (step) {
        case 0:
            return <Details />;
        case 1:
            return <Address />;
        case 2:
            return <Review />;
        case 3:
            return <Faculty />;
        default:
            return null;
    }
};

const MultiStepForm = () => {
    const [details, setDetails] = useState(detailsInitialState);
    const [address, setAddress] = useState(addressInitialState);
    const[gallery,setGallery]=useState(galleryInitislState);
    const [currentStep, setCurrentStep] = useState(0);
    console.log(currentStep)

    const next = () => {
        if (currentStep === 3) {
            setCurrentStep(0);
            setDetails(detailsInitialState);
            setAddress(addressInitialState);
            setGallery(galleryInitislState)
            return;
        }
        setCurrentStep(currentStep + 1);
    };
    const prev = () => setCurrentStep(currentStep - 1);
    return (
        <Provider value={{ details, setDetails, next, prev, address, setAddress ,gallery,setGallery}}>
            <Steps current={currentStep} className="Multistep_form">
                <Step title={"College Info"} />
                <Step title={"Courses & Fee"} />
                <Step title={"Gallery"} />
                <Step title={"Faculty"} />

            </Steps>
            <main>{renderStep(currentStep)}</main>
        </Provider>
    );
};
export default MultiStepForm;
