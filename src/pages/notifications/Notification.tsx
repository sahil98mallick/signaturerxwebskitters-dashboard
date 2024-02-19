import { Box, Divider, Typography } from '@mui/material';
import Wrapper from 'Layout/Wrapper/Wrapper'
import { Button, Card } from 'antd';
import { Getnotificationdetails } from 'api/functions/notification.api';
import dayjs from 'dayjs';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { OrderOverviewWrapper } from 'styles/StyledComponents/OrderOverViewWrapper';
import { NoticationDocs } from 'typescript/interface/notification.interface';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import { useState } from 'react';
const Notification = () => {

    // Notification API Handle
    const [loadmore, setloadmore] = useState(5)
    const { data: notificationlists, isLoading: notifyloading, isError: notifyError } = useQuery({
        queryKey: ["notificationlists"],
        queryFn: () => Getnotificationdetails({
            page: 1,
            length: loadmore,
            onlyUnread: true
        })
    })

    const handleloadmore = () => {
        setloadmore(loadmore + 5)
    }
    return (
        <>
            <Wrapper>
                <Box className="body_layout">
                    <OrderOverviewWrapper>
                        <Box className="header_wrapper">
                        </Box>
                    </OrderOverviewWrapper>
                    <Box className="notificationlist-container">
                        <Card className="notifylists">
                            {
                                notifyloading ? (
                                    <>
                                        <Typography variant='h3'>Loading....</Typography>
                                    </>
                                ) : (
                                    <>{
                                        notificationlists?.docs?.map((item: NoticationDocs, key: number) => {
                                            return (
                                                <>
                                                    <Link to={`/dashboard/branch/${item?.pharmacyBranchId}/order/details/${item?.id}`}>
                                                        <Box className="itemlists">
                                                            <MarkUnreadChatAltIcon />
                                                            <Typography variant='h4' className='notifylistsdetails'>
                                                                {item?.message} <br />
                                                                {dayjs(item?.createdAt).format("LL")}&nbsp;
                                                                {item?.isRead ? (
                                                                    <>
                                                                        <sup style={{ color: "green" }}>
                                                                            Viewed
                                                                        </sup>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <sup style={{ color: "red" }}>
                                                                            New
                                                                        </sup>
                                                                    </>
                                                                )}
                                                            </Typography>
                                                            <Divider />
                                                        </Box>
                                                    </Link>
                                                </>
                                            )
                                        })
                                    }</>
                                )
                            }
                        </Card>
                    </Box>
                </Box>
            </Wrapper>
        </>
    )
}

export default Notification