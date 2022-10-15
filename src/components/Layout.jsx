import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PasswordIcon from "@mui/icons-material/Password";
import Grid from "@mui/material/Grid";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import Logic from "../utils/Logic";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";

function Layout() {
  const [response, setResponse] = useState("");
  const [load, setLoad] = useState(false);
  const [visible, setVisible] = useState(false);
  const [widths, setWidths] = useState();
  const [options, setOptions] = useState({
    special: true,
    lowercase: true,
    numeric: true,
    uppercase: true,
    length: 0,
  });
  const matches = useMediaQuery("(min-width:600px)");
  useEffect(() => {
    matches ? setWidths(2 / 5) : setWidths(4 / 5);
  });

  const handleGenerator = () => {
    setLoad(false);
    setVisible(true);
    let result = Logic(options);
    setResponse(result.join(""));
    setTimeout(() => {
      setVisible(false);
      setLoad(true);
    }, 1000);
  };

  const handleChange = ({ target }) => {
    let { name, value, checked } = target;
    if (name === "length") {
      setOptions({ ...options, [name]: value });
    } else {
      setOptions({ ...options, [name]: checked });
    }
  };

  const handleCopy = ({ target }) => {
    navigator.clipboard.writeText(target.textContent);
  };

  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: 20,
        width: `${widths}`,
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
          height: 60,
        }}
      >
        {visible ? (
          <img style={{ width: "10%" }} src="Pulse.gif" alt="loading" />
        ) : null}
        {load ? (
          <Tooltip title={"Click to copy"}>
            <Button onClick={handleCopy} variant="text">
              {response} <ContentCopyIcon sx={{ marginLeft: 2 }} />
            </Button>
          </Tooltip>
        ) : null}
      </Box>
    </Box>
  );
}

export default Layout;
