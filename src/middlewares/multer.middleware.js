import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  export const upload = multer({ 
    storage,
  })

  //file ka access sirf multer ke pass hi hota hai
  //cb is callback, and we will save that in public-->temp
  //8 pe joh file hai in cb usko console.log krke dekhiye
  //ye code multer - npm se liya hai