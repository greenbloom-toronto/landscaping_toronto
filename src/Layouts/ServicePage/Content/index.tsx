import { useMediaQuery } from "@mui/material";
import { StyledContentBanner, StyledContentBannerShadow, StyledContentBannerTitle, StyledContentText, StyledServicePageContent } from "../styled"

interface IProps {
    service: any;
    currentLevel: "service" | "subService" | "subSubService"
}

export const ServicePageContent: React.FC<IProps> = ({ service, currentLevel }) => {
    const mobile = useMediaQuery("(max-width:1000px)");

    return (
        <StyledServicePageContent
            sx={{
                width: mobile ? '100%' : currentLevel === "subSubService" ? 'calc(80% - 24px)' : service.subSubServices ? 'calc(80% - 24px)' : '100%',
                marginTop: service.subServices ? 0 : service.subSubServices ? '0' : currentLevel === "subSubService" ? 0 : '50px'
            }}
        // dangerouslySetInnerHTML={{
        //     __html:
        //         service.content
        // }}
        >
            <StyledContentBanner sx={{
                background: `url(${service.images[0]})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <StyledContentBannerShadow />
                <StyledContentBannerTitle>{service.title}</StyledContentBannerTitle>
            </StyledContentBanner>

            <StyledContentText>
                {service.content}
            </StyledContentText>
        </StyledServicePageContent>
    )
}