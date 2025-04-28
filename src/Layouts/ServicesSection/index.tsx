import { ServicesQuoteButton, StyledServiceCell, StyledServiceCellTitle, StyledServiceIcon, StyledServicesSection, StyledServicesSectionList, StyledServicesSectionTitle, StyledServicesSectionTop, StyledSubServiceItem, StyledSubServices, StyledSubServicesList } from "./styled.tsx"
import expandIcon from '../../resources/icons/expand.svg';
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";

interface IProps {
    servicesList: any
};

export const ServicesSection: React.FC<IProps> = ({ servicesList }) => {
    const mobile = useMediaQuery('(max-width:1000px)');

    const [isOpened, setIsOpened] = useState(false);
    const [openedService, setOpenedService] = useState(0);

    useEffect(() => { }, [setIsOpened])

    return (
        <StyledServicesSection>
            <StyledServicesSectionTop>
                <StyledServicesSectionTitle>
                    Our Landscaping Services
                </StyledServicesSectionTitle>

                <ServicesQuoteButton>Get a Quote</ServicesQuoteButton>
            </StyledServicesSectionTop>

            <StyledServicesSectionList>
                {servicesList.map((item: any) => (
                    <StyledServiceCell
                        sx={{
                            padding: mobile ? '30px 16px' : '40px 20px',
                            minWidth: mobile ? 'calc(100% / 2 - 36px)' : 'calc(100% / 2 - 46px)',
                            maxWidth: mobile ? 'calc(100% / 2 - 36px)' : 'calc(100% / 2 - 46px)',
                            background: `url(${item.image})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        key={item.id}
                    >
                        <StyledSubServices style={{
                            overflow: isOpened && item.id === openedService ? 'visible' : 'hidden',
                            width: isOpened && item.id === openedService ? '100%' : 0,
                            height: isOpened && item.id === openedService ? 'calc(100% - 39px)' : 0,
                        }}>
                            <StyledSubServicesList>
                                {item.subServices.map((subService: any) => (
                                    <StyledSubServiceItem
                                        to={subService.link}
                                        key={subService.id}
                                    >
                                        - {subService.title}
                                    </StyledSubServiceItem>
                                ))}
                            </StyledSubServicesList>
                        </StyledSubServices>

                        <StyledServiceCellTitle>
                            {item.title}
                        </StyledServiceCellTitle>

                        <StyledServiceIcon
                            onClick={() => {
                                if (isOpened && item.id === openedService) {
                                    setOpenedService(0);
                                    setIsOpened(false)
                                } else {
                                    setOpenedService(item.id)
                                    setIsOpened(true)
                                }
                            }}
                            sx={{
                                cursor: 'pointer',
                            }}
                        >
                            {
                                isOpened && item.id === openedService ? <Close /> : <img loading="lazy" src={expandIcon} />
                            }

                        </StyledServiceIcon>
                        {/* <StyledServiceCellLeft>
                            <StyledServiceCellTitle>
                                {item.title}
                            </StyledServiceCellTitle>
                        </StyledServiceCellLeft>

                        <StyledServiceCellRight>
                            <StyledServiceIconLink
                                to={item.link}
                                onClick={() => window.scrollTo({ top: 0 })}
                                sx={{
                                    background: 'rgba(3, 150, 83, 0.35)',
                                    border: '2px solid rgba(0, 48, 46, 0.0)',
                                    cursor: 'pointer',
                                    [':hover']: {
                                        border: '2px solid rgb(3, 150, 83)',
                                        background: '#fff'
                                    }
                                }}
                            >
                                <img loading="lazy" src={expandIcon} />
                            </StyledServiceIconLink>
                        </StyledServiceCellRight> */}
                    </StyledServiceCell>
                ))}
            </StyledServicesSectionList>
        </StyledServicesSection>
    )
}