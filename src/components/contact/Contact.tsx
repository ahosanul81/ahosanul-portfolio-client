// import Button from "../../Components/Buttons/Button";
import { MdOutlineMailOutline } from "react-icons/md";
// import Button2 from "../../Components/Buttons/Button2";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import { AdvancedImage } from '@cloudinary/react';
// import useClodinaryImg from "../../Hooks/useClodinaryImg";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Button from "../customComponent/Button";

import { GrLocation } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa6";
// import { useState } from "react";

const Contact = () => {
  // const [axiosPublic] = useAxiosPublic()
  // const handleImage = useClodinaryImg()
  //   const [disableButton, setDisableButton] = useState(false);
  // const [preview, setPreview] = useState(null);
  // // const [fileName, setFileName] = useState('');
  // const [fileType, setFileType] = useState('');

  // const previewFile = (e) => {

  //     e.preventDefault()
  //     const image = e.target.files[0];

  //     if (image) {
  //         // setFileName(image.name)
  //         setFileType(image.type)

  //         const reader = new FileReader()

  //         if (image.type === 'application/pdf') {
  //             reader.onloadend = () => {
  //                 setPreview(reader.result);
  //                 // setFileName(image.name);
  //             };
  //             reader.readAsDataURL(image)
  //         } else if (image.type.startsWith('image/')) {
  //             reader.onloadend = () => {
  //                 setPreview(reader.result);
  //                 // setFileName(image.name);
  //             };
  //             reader.readAsDataURL(image)
  //         }

  //     }
  //     else {
  //         alert('please select valid file')
  //     }

  // }

  // const handleMessage = async (e) => {
  //     e.preventDefault()

  //     const form = e.target;
  //     const fullName = form.fullName.value;
  //     const email = form.email.value;
  //     const phone = form.phone.value;
  //     const budget = form.budget.value;
  //     const message = form.message.value;
  //     const image = form.image.files[0];

  //     console.log(image);

  //     // console.log(imageUrl);
  //     if (image) {
  //         const imageUrl = await handleImage(image)
  //         // console.log(fullName, email, phone, budget, message, imageUrl);
  //         const contactInfo = { fullName, email, phone, budget, message, imageUrl }

  //         const { data } = await axiosPublic.post('/contact', contactInfo)
  //         // console.log(data);

  //         if (data.acknowledged) {
  //             setDisableButton(data.acknowledged)
  //             toast('Successfully sent a message to Ahosanul.')
  //         }
  //         else {
  //             toast('Something went wrong')
  //         }
  //     }
  //     else {
  //         console.log(fullName, email, phone, budget, message);
  //         const contactInfo = { fullName, email, phone, budget, message }

  //         const { data } = await axiosPublic.post('/contact', contactInfo)
  //         console.log(data);

  //         if (data.acknowledged) {
  //             setDisableButton(data.acknowledged)
  //             toast("Successfully sent a message to Ahosanul. But You haven't attached any file")
  //         }
  //         else {
  //             toast('Something went wrong, Try again')
  //         }
  //     }

  // }

  return (
    <div className="flex items-center justify-between gap-10 mt-6">
      {/* left */}
      <div className=" mb-24 space-y-7">
        {/* <Button
        icon={<MdContactMail />}
        text={"Contact Me"}
        className={"px-4"}
      ></Button> */}
        <h1 className="text-title-color text-5xl">
          {`Let's Work `}
          <span className="text-span">Together!</span>
        </h1>

        <div>
          <form>
            <div className="grid grid-cols-2  gap-10 border border-border-color rounded-xl p-5 bg-[#1A0E26]">
              <div className="w-full">
                <label htmlFor="name" className="block mb-1 ml-1 text-title">
                  FULL NAME <span className="text-red-500 text-xl">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="w-full bg-background text-white focus:ring-violet-300 p-2"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="w-full">
                <label htmlFor="name" className="block mb-1 ml-1 text-title">
                  Email <span className="text-red-500 text-xl">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-background text-white focus:ring-violet-300 p-2"
                  placeholder="Your email address"
                />
              </div>

              <div className="w-full">
                <label htmlFor="name" className="block mb-1 ml-1 text-title">
                  PHONE (OPTIONAL)
                </label>
                <input
                  type="number"
                  name="phone"
                  className="w-full bg-background text-white focus:ring-violet-300 p-2"
                  placeholder="Your phone number"
                />
              </div>
              <div className="w-full">
                <label htmlFor="name" className="block mb-1 ml-1 text-title">
                  YOUR BUDGET (OPTIONAL)
                </label>
                <input
                  type="text"
                  name="budget"
                  className="w-full bg-background text-white focus:ring-violet-300 p-2"
                  placeholder="Your budget "
                />
              </div>
              <div className="w-full">
                <label htmlFor="name" className="block mb-1 ml-1 text-title">
                  MESSAGE
                </label>
                <input
                  type="text"
                  name="message"
                  className="w-full bg-background text-white focus:ring-violet-300 p-2"
                  placeholder="Your message write here"
                />
              </div>
              <br />

              <div className="relative flex flex-col  w-full col-span-2">
                {/* {preview && (
                <div className="absolute top-16 h-24 w-40  left-4 ">
                  {fileType === "application/pdf" ? (
                    <object
                      className="-mt-8"
                      type="application/pdf"
                      data={preview}
                      width={100}
                    ></object>
                  ) : (
                    <img
                      src={preview}
                      alt="Preview"
                      className="h-full w-full rounded-lg"
                    />
                  )}
                </div>
              )} */}

                <label className="block mb-1 ml-1 text-title">
                  ADD AN ATTACHMENT
                </label>
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-40 border-2 border-border border-dashed rounded-lg cursor-pointer bg-background dark:hover:bg-slate-300 dark:bg-gray-700 hover:bg-gray-800 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="disabled: mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG, PDF or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    //   onChange={previewFile}
                    name="image"
                    className="hidden"
                  />
                </label>
              </div>
            </div>
            {/* {disableButton ? (
            <p className="text-white">
              <span className="text-red-500">***</span> If you want to sent
              another message, please refresh the page.
            </p>
          ) : ( */}
            <Button
              text={"SEND MESSAGE"}
              className={"px-2 py-1 lg:px-4 lg:py-2 mt-4 w-4/5 lg:w-2/5"}
            ></Button>
            {/* )} */}
          </form>
        </div>

        {/* <ToastContainer
        position="top-center"
        closeOnClick={true}
        theme="dark"
      ></ToastContainer> */}
      </div>
      {/* right */}
      <div className="text-xl">
        <div className="flex items-center gap-3">
          <span className="text-green-500">
            <FaWhatsapp />
          </span>
          <span>+8801990631429</span>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="text-red-400">
            <MdOutlineMailOutline />
          </span>
          <span>ahosanul81@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 ">
          <span className="text-blue-500">
            <GrLocation />
          </span>
          <span>Cumilla, Chattogram, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
