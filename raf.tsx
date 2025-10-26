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

    <label className="block mb-1 ml-1 text-title">ADD AN ATTACHMENT</label>
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
          <span className="font-semibold">Click to upload</span> or drag and
          drop
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
</div>;
