import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    EmpName: "",
    designation: "",
    empId: "",
    img_url: ""
  });

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addData = async () => { // Make the outer function async
    try {
      const response = await axios.post("http://localhost:3001/add", inputs);
      console.log(response.data);
      navigate("/"); // Navigate to the home page or wherever you want after success
    } catch (error) {
      console.error("There was an error adding the employee data:", error);
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "600px",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Employee Name"
            onChange={inputHandler}
            name="EmpName"
            value={inputs.EmpName}
            fullWidth
          />
          <TextField
            variant="outlined"
            placeholder="Designation"
            onChange={inputHandler}
            name="designation"
            value={inputs.designation}
          />
          <TextField
            variant="outlined"
            placeholder="Employee Id"
            onChange={inputHandler}
            name="empId"
            value={inputs.empId}
          />
          <TextField
            variant="outlined"
            placeholder="Photo (paste any link from the browser)"
            onChange={inputHandler}
            name="img_url"
            value={inputs.img_url}
          />
          <Button variant="contained" color="secondary" onClick={addData}>
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Add;
