import styled from "@emotion/styled";
import {
  Box,
  Grid,
  IconButton,
  MenuItem,
  Stack,
  Typography
} from "@mui/material";
import { primaryColors } from "Theme/_muiPalette";

import React, { LegacyRef, useRef, useState } from "react";
import InputFieldCommon from "ui/CommonInput/CommonInput";
import CustomButtonPrimary from "ui/CustomButtons/CustomButtonPrimary";
import CustomSwitch from "ui/CustomSwitch/CustomSwitch";
import CustomSelect from "ui/Filter/CustomSelect";
import CameraIcon from "ui/Icons/CameraIcon";
import CheckIcon from "ui/Icons/CheckIcon";

import DeleteIcon from "ui/Icons/DeleteIcon";
import DropDownIcon from "ui/Icons/DropDownIcon";

import UploadIcon from "ui/Icons/UploadIcon";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;
export default function UploadInfo() {
  const inputRef = useRef<LegacyRef<HTMLInputElement> | any>();

  const names = ["Ascending", "Descending"];
  const [fileInput, setfileInput] = useState<any>("");
  const handleUpload = () => {
    inputRef.current.click();
  };

  const fileSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0];

    if (file) {
      setfileInput(URL.createObjectURL(file));
    }
  };
  
  return (
    <Box className="cmn_block company_information_wrapper">
      <Grid container columnSpacing={{ lg: 10, md: 5, xs: 3 }} rowSpacing={2}>
        <Grid item lg={3} xl={4} xs={12}>
          <Box className="info_stack">
            <Typography variant="h2">Company Information</Typography>
            <Typography variant="body1">
              Fill in the following information to update your payment details.
            </Typography>
          </Box>
        </Grid>
        <Grid item lg={9} xl={8} xs={12}>
          <Box className="form_Sec">
            <Box className="form_group">
              <i className="company_logo">
                {fileInput ? (
                  <img src={fileInput} alt="" />
                ) : (
                  <CameraIcon
                    IconColor="#8F98A8"
                    IconHeight="40"
                    IconWidth="40"
                  />
                )}
              </i>
              <Typography variant="body1" className="label_txt">
                Company Logo
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                flexWrap="wrap"
                justifyContent={"flex-start"}
                className="option_stack"
              >
                <Box className="option_btn">
                  <CustomButtonPrimary
                    variant="contained"
                    color="primary"
                    buttonType="small"
                    onClick={handleUpload}
                    endIcon={
                      <UploadIcon
                        IconColor="#fff"
                        IconHeight="20"
                        IconWidth="20"
                      />
                    }
                  >
                    <Typography variant="body1">Upload</Typography>
                    <VisuallyHiddenInput
                      type="file"
                      ref={inputRef}
                      onChange={fileSubmit}
                    />
                  </CustomButtonPrimary>
                  <CustomButtonPrimary
                    variant="contained"
                    color="secondary"
                    buttonType="small"
                    endIcon={
                      <DeleteIcon
                        IconColor="#fff"
                        IconHeight="20"
                        IconWidth="20"
                      />
                    }
                  >
                    <Typography variant="body1">Delete</Typography>
                  </CustomButtonPrimary>
                </Box>
                <Box className="box_check">
                  <CustomSwitch
                    label="Apply logo for all branches"
                    defaultChecked
                  />
                </Box>
              </Stack>
            </Box>
            <Box className="form_group">
              <Typography variant="body1" className="label_txt">
                Company Name
              </Typography>
              <InputFieldCommon placeholder="Your company name" />
            </Box>
            <Box className="form_group">
              <Typography variant="body1" className="label_txt">
                Company Address
              </Typography>
              <InputFieldCommon
                placeholder="Your company address"
                multiline
                rows={4}
                maxRows={6}
              />
            </Box>

            <Box className="form_group">
              <Typography variant="body1" className="label_txt">
                Town / City
              </Typography>
              <CustomSelect
                IconComponent={(props) => {
                  return (
                    <IconButton {...props}>
                      <DropDownIcon />
                    </IconButton>
                  );
                }}
                className="form_select"
                defaultValue=""
                displayEmpty
              >
                <MenuItem value="">Select Town / City</MenuItem>
                {names.map((name) => (
                  <MenuItem key={name} value={name} className="menu_item">
                    {name}
                  </MenuItem>
                ))}
              </CustomSelect>
            </Box>
            <Box className="form_group">
              <Typography variant="body1" className="label_txt">
                Post Code
              </Typography>
              <InputFieldCommon placeholder="Your company post number" />
            </Box>
            <Box className="form_group">
              <Typography variant="body1" className="label_txt">
                Phone Number
              </Typography>
              <InputFieldCommon placeholder="Your company phone code" />
            </Box>
            <Box className="btn_otr">
              <CustomButtonPrimary
                variant="contained"
                color="primary"
                endIcon={
                  <CheckIcon
                    IconColor={`${primaryColors?.white}`}
                    IconHeight="24"
                    IconWidth="24"
                  />
                }
              >
                <Typography>Save Information</Typography>
              </CustomButtonPrimary>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
