import cloudinary from 'cloudinary';

cloudinary.config({ 
  cloud_name: 'kcstoreapp', 
  api_key: '554376896927521', 
  api_secret: 'a9i07n_rDysThDpBg0zoOvBqTKY' 
});

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" },
  function (error, result) { console.log(result); });
