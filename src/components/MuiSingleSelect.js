import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
function MuiSingleSelect() {
  const [value, setValue] = useState('');
  return (
    <>
      <Select
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>

      <br />
      <br />
      <FormControl
        sx={{minWidth: 120}}
        // fullWidth
        size="small"
        variant="standard" //filled
      >
      {/* <InputLabel id="testValue">Select Age</InputLabel> */}
      <Select
        labelId="testValue"
        value={value}
        label="Select Age"
        onChange={(e) => {
          setValue(e.target.value);
        }}
        // inputProps={{readOnly: true}}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      </FormControl>
    </>
  );
}

export default MuiSingleSelect;
