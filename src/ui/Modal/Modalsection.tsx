import { Box, Dialog, DialogContent } from "@mui/material";

interface MuiModalWrapperProps {
  open: boolean;
  onClose?: () => void;
  className: string;
  children: JSX.Element | JSX.Element[];
}

function Modalsection({
  open,
  onClose,
  children,
  className
}: MuiModalWrapperProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      className={className}
    >
      <Box className="modalsectionBox">
        <DialogContent>{children}</DialogContent>
      </Box>
    </Dialog>
  );
}

export default Modalsection;
