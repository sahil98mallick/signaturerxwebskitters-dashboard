import { Skeleton, Stack, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Table } from 'antd'
import React from 'react'
import { HomeTableWrapper } from 'styles/StyledComponents/HomeTableWrapper'

const HomeTableSkeleton = () => {
    return (
        <>
            <HomeTableWrapper>
                <TableContainer>
                    <Table
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell>Branch Code.</TableCell>
                                <TableCell>Branch Name</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Prescriptions</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[1, 2, 2, 2]?.map((row, index) => (
                                <TableRow
                                    key={index}
                                >
                                    <TableCell>
                                        <Skeleton height={20} variant="rectangular" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton height={20} variant="rectangular" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton height={20} variant="rectangular" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton height={20} variant="rectangular" />
                                    </TableCell>
                                    <TableCell>
                                        <Skeleton height={20} variant="rectangular" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </HomeTableWrapper>
        </>
    )
}

export default HomeTableSkeleton