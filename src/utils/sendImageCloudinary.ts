/* eslint-disable @typescript-eslint/no-explicit-any */
export const sendImageCloudinary = async (file: any) => {
  const formdata = new FormData();
  const uploadPreset = "ahosanul-portfolio";
  formdata.append("file", file.originFileObj);
  formdata.append("upload_preset", uploadPreset);
  formdata.append("public_id", `blogs/${file.name}`);
  formdata.append("folder", "ahosanul-portfolio");
  const uploadUrl = "https://api.cloudinary.com/v1_1/dgs2ywdd6/image/upload";
  try {
    const response = await fetch(uploadUrl, {
      method: "POST",
      body: formdata,
    });

    const data = await response.json();
    return data.secure_url || null;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    return null;
  }
};
