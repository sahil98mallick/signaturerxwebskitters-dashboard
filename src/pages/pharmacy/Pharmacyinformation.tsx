import { Box, Button, Grid, LinearProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import Wrapper from 'Layout/Wrapper/Wrapper'

import { OrderOverviewWrapper } from 'styles/StyledComponents/OrderOverViewWrapper'
import InputFieldCommon from 'ui/CommonInput/CommonInput'
import BackupIcon from '@mui/icons-material/Backup';
import { useQuery } from 'react-query';
import { Fetchpharmacy } from 'api/functions/pharmacy.api';
import PharmacyMap from 'components/PharmacyMap/PharmacyMap';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import { useMemo } from 'react';
import { FullscreenControl } from 'react-leaflet-fullscreen';

const myIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/535/535137.png",
    iconSize: [50, 50]
});
type map = {
    longitude: number;
    latitude: number;
}
const Pharmacyinformation = () => {
    const { data: pharmacydetails, isLoading } = useQuery({
        queryKey: ["pharmachdetails"],
        queryFn: () => Fetchpharmacy()
    })

    const mapposition: LatLngExpression = useMemo(() => [pharmacydetails?.longitude || 54.989, pharmacydetails?.latitude || 73.369], [pharmacydetails]);
    if (isLoading) return <> <div><LinearProgress /></div> </>
    return (
        <>
            <Wrapper>
                <Box className="body_layout">
                    <OrderOverviewWrapper>
                        <Box className="header_wrapper">

                        </Box>
                    </OrderOverviewWrapper>
                    <Box className="main-contents">
                        <Box className="pharmacyinfo">
                            <Typography variant='h1'>Phamacy Details</Typography>
                            <Typography variant='body2'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, perspiciatis ipsam! Commodi consequatur non reiciendis tempore saepe. Minima, laboriosam perferendis!
                            </Typography>
                            <img src={pharmacydetails?.logo || "https://e7.pngegg.com/pngimages/748/441/png-clipart-logo-pharmacy-pills-miscellaneous-trademark.png"} alt="InfoImage"
                                className='pharmacyimage' />
                            <Button color='primary' variant='contained' size='large'
                                startIcon={<BackupIcon />} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                Upload
                            </Button>
                        </Box>
                        <Box className="pharmacyinformation">
                            <InputFieldCommon className='infoinputs' value={pharmacydetails?.name} disabled />
                            <InputFieldCommon className='infoinputs' value={pharmacydetails?.address} disabled />
                            <InputFieldCommon className='infoinputs' value={pharmacydetails?.city} disabled />
                            <InputFieldCommon className='infoinputs' value={pharmacydetails?.postcode} disabled />
                            <InputFieldCommon className='infoinputs' value={pharmacydetails?.phone} disabled />
                            <InputFieldCommon className='infoinputs' value={pharmacydetails?.country} disabled />
                        </Box>
                    </Box>
                    <br />
                    <Box className="pharmacypricetable">
                        <Typography variant='h2' style={{ paddingBottom: "5px" }}>Pharmacy Price Table</Typography>
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center">
                                            <Typography variant='h5'>Price Multiple</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant='h5'>Dispance Charges</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant='h5'>Minimum Item Charge</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center">
                                            <Typography variant='h6'> {pharmacydetails?.priceMultiple}</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant='h6'>{pharmacydetails?.dispensingFee}</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant='h6'>{pharmacydetails?.minimumItemCharge}</Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                    <br />
                    <Typography variant='h1'>Our Location</Typography>
                    <br />
                    <Box className="mapview">
                        <MapContainer center={mapposition} zoom={1} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"></a>'
                                url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=fXmTwJM642uPLZiwzhA1"
                            />
                            <Marker position={mapposition} icon={myIcon}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                            <FullscreenControl />
                        </MapContainer>
                    </Box>
                </Box>
            </Wrapper>
        </>
    )
}

export default Pharmacyinformation
