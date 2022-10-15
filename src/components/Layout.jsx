import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PasswordIcon from "@mui/icons-material/Password";
import Grid from "@mui/material/Grid";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import Logic from "../utils/Logic";

function Layout() {
  const [response, setResponse] = useState("");
  const [options, setOptions] = useState({
    special: true,
    lowercase: true,
    numeric: true,
    uppercase: true,
    length: 0,
  });

  const handleGenerator = () => {
    let result = Logic(options);
    setResponse(result.join(""));
  };

  const handleChange = ({ target }) => {
    let { name, value, checked } = target;
    if (name === "length") {
      setOptions({ ...options, [name]: value });
    } else {
      setOptions({ ...options, [name]: checked });
    }
  };

  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: 20,
        width: 2 / 5,
        minHeight: 300,
        paddingTop: 2,
        boxShadow: 2,
        backgroundColor: "white",
        borderRadius: 3,
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Grid item>
          <PasswordIcon />
        </Grid>

        <Grid item>
          <h2>Password Generator</h2>
        </Grid>
      </Grid>

      <hr />
      <Box
        sx={{
          margin: "auto",
          paddingTop: 2,
          width: 4 / 5,
          textAlign: "center",
        }}
      >
        <TextField
          error={+options.length > 20}
          id="standard-number"
          label="Length"
          type="number"
          name="length"
          helperText={
            +options.length > 20 ? "Length should be less than 20" : ""
          }
          variant="standard"
          onChange={handleChange}
        />
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Grid container justifyContent={"center"}>
            <Grid item>
              <FormControlLabel
                control={<Checkbox defaultChecked size="small" />}
                label="Uppercase"
                name="uppercase"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked size="small" />}
                name="numeric"
                label="Numeric"
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <FormControlLabel
                control={<Checkbox defaultChecked size="small" />}
                name="lowercase"
                label="Lowercase"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox defaultChecked size="small" />}
                name="special"
                label="Special Characters"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
        </Box>
        <Button
          sx={{ marginY: 1 }}
          onClick={handleGenerator}
          variant="contained"
        >
          Generate!
        </Button>
      </Box>

      <Box
        sx={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Button sx variant="text">
          {response}
        </Button>
      </Box>
    </Box>
  );
}

export default Layout;
