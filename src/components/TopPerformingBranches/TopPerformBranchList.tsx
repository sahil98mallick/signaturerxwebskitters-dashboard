import {
    Box,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
  } from "@mui/material";
  import { Empty } from "antd";
  
  import CommonHeader from "components/CommonHeader/CommonHeader";
 
  import dayjs, { Dayjs } from "dayjs";
  import assest from "json/assest";
  import { useEffect, useMemo, useState } from "react";
  import { useQuery } from "react-query";
  import { HomeTableWrapper } from "styles/StyledComponents/HomeTableWrapper";
 import PaginationSection from "components/Pagination/Pagination";
  import { StyledCommonDatePicker } from "ui/Datepicker/CommonDatePicker";
  import CrossIcon from "ui/Icons/CrossIcon";
  
import { payoutTopPerformingBranches } from "api/functions/report.api";
import { ModalWrapper } from "styles/StyledComponents/ModalWrapper";
import TopPerformBranchListRow from "./TopPerformBranchListRow";
import useUrlState from "@ahooksjs/use-url-state";
import { useMemoizedFn } from "ahooks";
// import IpharmacyBranchListResponse from '../../../src/typescript/interface/pharmacy-branch.interface'
  
  const TopPerformBranchList = ({
    open,
    onClose,
    initialDate
  }: {
    open: boolean;
    onClose: () => void;
    initialDate?: Dayjs | null;
  }) => {
    const [limit, setLimit] = useState<number>(5);
    const [page, setPage] = useState<number>(1);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
      initialDate || dayjs()
    );
  
    useEffect(() => {
      if (open && initialDate) {
        setSelectedDate(initialDate);
      }
    }, [open]);
  
    const payload = useMemo(() => {
      return {
        desiredMonth: Number(selectedDate?.format("MM")) || 1,
        desiredYear: Number(selectedDate?.format("YYYY")) || 2000,
        length: limit,
        page: page
      };
    }, [selectedDate, limit, page]);

    const [filterParams, setFilterParams] = useUrlState(
      {
        search: "",
        length: 50,
        page: 1
      },
      {
        navigateMode: "replace",
        stringifyOptions: {
          skipEmptyString: true,
          strict: true,
          arrayFormat: "comma"
        }
      }
    );

    const pageNumber = Number(filterParams?.page) || 1;
    const lengthNumber = Number(filterParams?.length) || 5;
  
  
    const { data, isLoading } = useQuery({
      queryKey: ["payoutTopPerformingBrancheListAll", JSON.stringify(payload), lengthNumber, pageNumber],
      queryFn: () => payoutTopPerformingBranches(payload),
      refetchOnWindowFocus: false
    });


    
  
   
  
    const updateFilterParams = useMemoizedFn((newValues: typeof filterParams) => {
      setFilterParams((prevParams) => {
        return {
          ...prevParams,
          ...newValues
        };
      });
    });
  
  
    return (
      <ModalWrapper disableEnforceFocus fullScreen open={open} onClose={onClose}>
        <Box p={2}>
          <CommonHeader
            headerIcon={assest?.branchIcon}
            title="Top Performing Branches"
            secondaryHeader
          >
            <Stack
              direction="row"
              gap={1}
              alignItems="center"
              className="innerheader_right"
            >
              <Box>
                <StyledCommonDatePicker
                  views={["month", "year"]}
                  orientation="landscape"
                  value={selectedDate}
                  onChange={(newValue) => {
                    setSelectedDate(newValue);
                    setPage(1);
                  }}
                />
              </Box>
              <IconButton onClick={onClose}>
                <CrossIcon />
              </IconButton>
            </Stack>
          </CommonHeader>
          <HomeTableWrapper>
            <TableContainer>
              <Table
                sx={{
                  minWidth: "100%"
                }}
                aria-label="simple table"
              >
                <TableHead className="mainTable_header">
                  <TableRow>
                    <TableCell>Branch Code</TableCell>
                    <TableCell>Branch Name</TableCell>
                    <TableCell>Orders</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.data?.data?.data.map((branch) => (
                    <TopPerformBranchListRow
                      key={branch?.branchName}
                      info={branch}
                    />
                  ))}
                </TableBody>
              </Table>
  
              <Stack justifyContent="center" flex={1}>
                {!isLoading && data?.data?.data?.data.length === 0 ? (
                  <Empty
                    description={`No branch found for ${selectedDate?.format(
                      "MMMM, YYYY"
                    )}`}
                  />
                ) : null}
              </Stack>
              <PaginationSection
                // limit={limit}
                // count={data?.data.pagination?.totalPages}
                // onChangeLimit={(e) => {
                //   setLimit(e.target.value);
                //   setPage(1);
                // }}
                // setPage={(e, value) => setPage(value)}
                // page={page}

                limit={lengthNumber}
                count={data?.data?.pagination?.totalPages}
                onChangeLimit={(e) => {
                  updateFilterParams({ length: e.target.value, page: 1 });
                  
                }}
                setPage={(e, value) => updateFilterParams({ page: value })}
                page={pageNumber}
              />
            </TableContainer>
          </HomeTableWrapper>
        </Box>
      </ModalWrapper>
    );
  };
  
  export default TopPerformBranchList;
  