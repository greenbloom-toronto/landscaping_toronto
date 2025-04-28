import { StyledContentBanner, StyledContentBannerShadow, StyledContentBannerTitle, StyledContentText, StyledServicePageContent } from "../styled"

interface IProps {
    service: any;
    currentLevel: "service" | "subService" | "subSubService"
}

export const ServicePageContent: React.FC<IProps> = ({ service, currentLevel }) => {

    return (
        <StyledServicePageContent
            sx={{
                width: currentLevel === "subSubService" ? 'calc(80% - 24px)' : service.subSubServices ? 'calc(80% - 24px)' : '100%'
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