import { styled } from "@mui/system";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { Dayjs } from "dayjs";

interface CommonDatePickerProps extends DatePickerProps<Dayjs> {
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
}

const StyledDatePicker = styled(DateTimePicker)`
  .MuiInputBase-root {
    border-radius: 10px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.06);
    fieldset {
      border: 1px solid #dbe0e8;
    }
    input {
      color: #070707;
    }
  }
` as typeof DatePicker;

const CommonDateTimePicker = ({
  value,
  onChange,
  error,
  helperText,
  disabled,
  ...rest
}: CommonDatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledDatePicker
        disabled={disabled}
        value={value}
        onChange={onChange}
        slotProps={{
          textField: {
            fullWidth: true,
            helperText: helperText,
            error: error
          }
        }}
        {...rest}
      />
    </LocalizationProvider>
  );
};

export default CommonDateTimePicker;