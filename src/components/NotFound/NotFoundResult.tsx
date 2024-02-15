import { Stack, Typography } from "@mui/material";
import { lazy } from "react";
import notfound from "../../json/lottie/notfound.json";
const Lottie = lazy(() => import("lottie-react"));
const NotFoundResult = ({ text }: { text: string }) => (
    <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={1}
    >
        <Lottie
            animationData={notfound}
            loop
            style={{
                height: 200,
                width: 200
            }}
            height={200}
            width={200}
        />
        <Typography variant="h3">{text}</Typography>
    </Stack>
);

export default NotFoundResult;