import { Box, Button, Typography } from '@mui/material'
import Wrapper from 'Layout/Wrapper/Wrapper'
import { getAccountUserQuery } from 'api/functions/user.api'
import React from 'react'
import { useQuery } from 'react-query'
import { OrderOverviewWrapper } from 'styles/StyledComponents/OrderOverViewWrapper'
import InputFieldCommon from 'ui/CommonInput/CommonInput'

const Accountinformation = () => {
    const { data: personalinfo, isLoading, isError } = useQuery({
        queryKey: ["perosonal-info"],
        queryFn: () => getAccountUserQuery()
    })

    console.log("Account Info:-", personalinfo?.data?.data?.personal);
    if(isLoading) return <div>Loading....</div>
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
                        <Box className="personalmainbox">
                            <Box className="personalcard">
                                <Box className="personal-main">
                                    <Box className="personalinfo1">
                                        <Typography variant='h1'>Account Information</Typography>
                                        <br />
                                        <Typography variant='body1'>Status:-&nbsp;
                                            <Button size='small' style={{ borderRadius: "20px", color: "green" }} variant='outlined' color='info'>
                                                {personalinfo?.data?.data?.personal?.status === "active" ? (
                                                    <>Active</>
                                                ) : (
                                                    <>In-Active</>
                                                )
                                                }
                                            </Button>
                                        </Typography>
                                        <br />
                                        <Typography variant='body2'>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est laboriosam nulla nesciunt aliquam, fugit soluta!
                                        </Typography>
                                    </Box>
                                    <Box className="personalinfo2">
                                        <form action="#">
                                            <Box className="inputsform">
                                                <Typography variant='h3'>First Name</Typography>
                                                <InputFieldCommon className='contactinputs'
                                                    value={personalinfo?.data?.data?.personal?.name} />
                                            </Box>
                                            <Box className="inputsform">
                                                <Typography variant='h3'>last Name</Typography>
                                                <InputFieldCommon className='contactinputs'
                                                    value={personalinfo?.data?.data?.personal?.surname} />
                                            </Box>
                                            <Box className="inputsform">
                                                <Typography variant='h3'>Email Add.</Typography>
                                                <InputFieldCommon className='contactinputs'
                                                    value={personalinfo?.data?.data?.personal?.email} />
                                            </Box>
                                            <Button variant='contained' color='primary'>Save Changes</Button>
                                        </form>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className="personalcard">
                                <Box className="personal-main">
                                    <Box className="personalinfo3">
                                        <Typography variant='h1'>Change Password</Typography>
                                        <br />
                                        <Typography variant='body2'>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est laboriosam nulla nesciunt aliquam, fugit soluta!
                                        </Typography>
                                    </Box>
                                    <Box className="personalinfo4">
                                        <form action="#">
                                            <Box className="inputsform">
                                                <Typography variant='h3'>Old Password</Typography>
                                                <InputFieldCommon className='contactinputs' />
                                            </Box>
                                            <Box className="inputsform">
                                                <Typography variant='h3'>New Password</Typography>
                                                <InputFieldCommon className='contactinputs' />
                                            </Box>
                                            <Box className="inputsform">
                                                <Typography variant='h3'>Con. Password</Typography>
                                                <InputFieldCommon className='contactinputs' />
                                            </Box>
                                            <Button variant='contained' color='primary'>Save Changes</Button>
                                        </form>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Wrapper>
        </>
    )
}

export default Accountinformation