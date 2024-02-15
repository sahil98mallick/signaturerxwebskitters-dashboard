import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect } from "react";
import { CustomTabWrapper } from "styles/StyledComponents/CustomTabWrapper";

interface toggleProps {
  dataset: string[];
  onDataCallback?: (data: string | any) => void;
}
const OnlineToggleTab = ({ dataset, onDataCallback }: toggleProps) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (value !== null) {
      if (onDataCallback !== undefined) {
        onDataCallback(value);
      }
    }
  }, [onDataCallback, value]);
  return (
    <CustomTabWrapper>
      <Box
        sx={{ width: "100%", bgcolor: "background.paper" }}
        className="main_tabWrapper"
      >
        <Tabs value={value} onChange={handleChange} centered>
          {dataset.map((value) => (
            <Tab label={value} />
          ))}
        </Tabs>
      </Box>
    </CustomTabWrapper>
  );
};

export default OnlineToggleTab;
