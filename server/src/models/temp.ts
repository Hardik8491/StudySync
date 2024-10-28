import cloudinary from "cloudinary";
import formidable from "formidable";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: "Form parsing error" });
      }

      const file = files.thumbnail;
      try {
        const uploadResponse = await cloudinary.v2.uploader.upload(file.filepath, {
          folder: "course",
        });

        return res.status(200).json({
          url: uploadResponse.secure_url,
          public_id: uploadResponse.public_id,
        });
      } catch (uploadError) {
        console.error("Upload error:", uploadError);
        return res.status(500).json({ error: "Image upload failed" });
      }
    });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
