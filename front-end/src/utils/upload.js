import axios from "axios";

const upload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "fiverr");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/akashmahto/image/upload",
        data
      );
      const {url} = response.data;
      return url;
    } catch (error) {
      console.log(error);
    }
  };

  export default upload