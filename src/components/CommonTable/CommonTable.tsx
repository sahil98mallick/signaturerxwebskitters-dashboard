import { Box, Table, TableContainer } from "@mui/material";
import { CommonTableWrppper } from "styles/StyledComponents/CommonTableWrapper";

interface commontableProps {
  children: JSX.Element | JSX.Element[];
}

function CommonTable({ children }: commontableProps) {
  return (
    <CommonTableWrppper>
      <Box className="commontableSection">
        <TableContainer>
          <Table sx={{ minWidth: 1200 }} aria-label="simple table">
            {children}
          </Table>
        </TableContainer>
      </Box>
    </CommonTableWrppper>
  );
}

export default CommonTable;
