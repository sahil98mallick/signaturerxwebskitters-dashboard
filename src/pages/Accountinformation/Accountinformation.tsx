import { Box, Button, Typography } from '@mui/material'
import Wrapper from 'Layout/Wrapper/Wrapper'
import React from 'react'
import { OrderOverviewWrapper } from 'styles/StyledComponents/OrderOverViewWrapper'
import InputFieldCommon from 'ui/CommonInput/CommonInput'

const Accountinformation = () => {
    return (
        <>
            <Wrapper>
                <Box className="body_layout">
                    <OrderOverviewWrapper>
                        <Box className="header_wrapper">
                        </Box>
                    </OrderOverviewWrapper>
                    {/* Personal Information Design */}
                    <Box className="personalcontainer">
                        <Typography variant='h1'>Perosonal Information</Typography>

                    </Box>
                </Box>
            </Wrapper>
        </>
    )
}

export default Accountinformation