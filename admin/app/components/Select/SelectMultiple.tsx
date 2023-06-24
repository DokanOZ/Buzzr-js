import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";

export const SelectMultiple = () => {
  const [teams, setTeams] = useState<String[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    const value = event.target.value

    setTeams(typeof value === 'string' ? value.split(',') : value);
  };

  return (
    <Box width={"20em"}>
      <TextField
        label={'Select Teams'}
        select
        value={teams}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true
        }}
      >
        <MenuItem value="1"> Team 1 </MenuItem>
        <MenuItem value="2"> Team 2 </MenuItem>
        <MenuItem value="3"> Team 3 </MenuItem>
      </TextField>
    </Box>
  );
};
