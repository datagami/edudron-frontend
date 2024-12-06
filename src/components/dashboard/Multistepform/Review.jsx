import { Button, Col, Row } from "antd";
import { useDropzone } from 'react-dropzone';
import React, { useContext, useEffect, useState } from "react";
import MultiStepFormContext from "./MultiStepFormContext";
import { IoIosArrowBack } from 'react-icons/io';
import { MdOutlineNavigateNext } from 'react-icons/md';
import gallery_img from '../assets/images/1.jpg';



const Review = () => {
  const { gallery, setGallery, next, prev } = useContext(MultiStepFormContext);


  const steps = () => {
    next()
  }

  const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16

  };

  const thumb = {
    display: 'inline-flex',
    borderRadius: 20,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: '200px',
    height: '200px',
    padding: 0,
    boxSizing: 'border-box'
  };

  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };

  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);



  return (
    <div className={"details__wrapper"}>


      <div className="row">



        <section className="container">
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <aside style={thumbsContainer} className="gallery_preview_img">
            {thumbs}
          </aside>
        </section>


        <h1 className="gallery_images_heading">Campus</h1>
        <div className="col-lg-4 col-md-6 col-sm-12 gallery_img">
          <img className="img-fluid" src={gallery_img} />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 gallery_img">
          <img className="img-fluid" src={gallery_img} />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 gallery_img">
          <img className="img-fluid" src={gallery_img} />
        </div>


        <h1 className="gallery_images_heading">Convocation</h1>
        <div className="col-lg-4 col-md-6 col-sm-12 gallery_img">
          <img className="img-fluid" src={gallery_img} />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 gallery_img">
          <img className="img-fluid" src={gallery_img} />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 gallery_img">
          <img className="img-fluid" src={gallery_img} />
        </div>
      </div>




      <div className="col-lg-12 col-md-12 col-sm-12 mt-5">
        <div className={"form__item button__items d-flex justify-content-between"}>
          <Button type={"default"} onClick={prev} className="form_back_btn">
            <IoIosArrowBack className="form_icon" />   Back
          </Button>
          <Button type={"primary"} onClick={steps} className="form_next_btn">
            Next <MdOutlineNavigateNext />
          </Button>
        </div>
      </div>


    </div>
  );
};
export default Review;
