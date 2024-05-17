import { Box } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";

export function Settings() {
 


  return (
    <Box className={"settings"}>
      <Box className={"member-media-frame"}>
        <img src="" className={"mb-image"} />
        <div className={"media-change-box"}>
          <span>Upload image</span>
          <p>JPG, JPEG, PNG formats only!</p>
          <div className={"up-del-box"}>
            <Button component="label"
            
            >
              <CloudDownloadIcon />
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"long-input"}>
          <label className={"spec-label"}>Username</label>
          <input
            className={"spec-input mb-nick"}
            type="text"
           
            name="memberNick"
            
          />
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"short-input"}>
          <label className={"spec-label"}>Phone</label>
          <input
            className={"spec-input mb-phone"}
            type="text"
            placeholder=""
             
          />
        </div>
        <div className={"short-input"}>
          <label className={"spec-label"}>Address</label>
          <input
            className={"spec-input  mb-address"}
            type="text"
            placeholder=""
          />
        </div>
      </Box>
      <Box className={"input-frame"}>
        <div className={"long-input"}>
          <label className={"spec-label"}>Description</label>
          <textarea
            className={"spec-textarea mb-description"}
            placeholder=""
          />
        </div>
      </Box>
      <Box className={"save-box"}>
        <Button variant={"contained"} 
        
        >Save</Button>
      </Box>
    </Box>
  );
}
