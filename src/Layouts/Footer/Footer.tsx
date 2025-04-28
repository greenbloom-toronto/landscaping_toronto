import { Facebook, KeyboardArrowUp, Twitter, YouTube } from "@mui/icons-material"

import { StyledFooter, StyledFooterColumn, StyledFooterColumnContent, StyledFooterColumnFlexRow, StyledFooterColumnGreyText, StyledFooterColumnService, StyledFooterColumnTitle, StyledFooterContent, StyledFooterIconCell, StyletMobileFooterLogo } from "./styled"
import { HeaderLink, HeaderIcon, HeaderPipe } from "../Header/styled.tsx";
import EmailIcon from '@mui/icons-material/EmailOutlined';
import { PhoneIphoneOutlined } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import logo from '../../resources/images/greenbloom_logo.png'
import { Link } from "react-router-dom";
import { AppOuterContainer } from "../DesktopLayout/styled.tsx";


export const Footer: React.FC = () => {
    const mobile = useMediaQuery('(max-width:1000px)');

    return (
        <AppOuterContainer>
            <StyledFooter>
                <StyledFooterContent>
                    {mobile && (
                        <StyledFooterColumn
                            sx={{
                                ['@media (max-width: 1000px)']: {
                                    gridColumn: '1/13',
                                    alignItems: 'center'
                                }
                            }}
                        >
                            <StyletMobileFooterLogo sx={{ transform: 'scale(2)' }} src={logo} />
                        </StyledFooterColumn>
                    )}
                    <StyledFooterColumn
                        sx={{
                            gridColumn: '1/4',
                            height: '100%',

                            ['@media (max-width: 1000px)']: {
                                gridColumn: '1/13',
                            }
                        }}
                    >
                        <StyledFooterColumnTitle>
                            Greenbloom Landscape Design inc.
                        </StyledFooterColumnTitle>

                        <StyledFooterColumnContent
                            sx={{
                                justifyContent: 'space-between'
                            }}
                        >
                            <StyledFooterColumnGreyText>
                                © 2025 Greenbloom Landscape Design inc.
                            </StyledFooterColumnGreyText>
                        </StyledFooterColumnContent>
                    </StyledFooterColumn>

                    <StyledFooterColumn
                        sx={{
                            gridColumn: '4/7',

                            ['@media (max-width: 1000px)']: {
                                gridColumn: '1/13',
                            }
                        }}
                    >
                        <StyledFooterColumnTitle>
                            Other Links
                        </StyledFooterColumnTitle>

                        <StyledFooterColumnContent
                            sx={{
                                gap: '16px'
                            }}
                        >

                            <StyledFooterColumnService
                                to={'/blog'}
                                onClick={() => window.scrollTo({ top: 0 })}
                            >
                                Blog
                            </StyledFooterColumnService>
                            <StyledFooterColumnService
                                to={'/projects-gallery'}
                                onClick={() => window.scrollTo({ top: 0 })}
                            >
                                Projects Gallery
                            </StyledFooterColumnService>
                            <StyledFooterColumnService
                                to={'/terms-of-service'}
                                onClick={() => window.scrollTo({ top: 0 })}
                            >
                                Terms of Service
                            </StyledFooterColumnService>
                            <StyledFooterColumnService
                                to={'/faq-page'}
                                onClick={() => window.scrollTo({ top: 0 })}
                            >
                                FAQ Page
                            </StyledFooterColumnService>
                            <StyledFooterColumnService
                                to={'/employment'}
                                onClick={() => window.scrollTo({ top: 0 })}
                            >
                                Employment
                            </StyledFooterColumnService>
                        </StyledFooterColumnContent>
                    </StyledFooterColumn>

                    <StyledFooterColumn
                        sx={{
                            gridColumn: '7/8',

                            ['@media (max-width: 1000px)']: {
                                display: 'none'
                            }
                        }}
                    />

                    <StyledFooterColumn
                        sx={{
                            gridColumn: '8/13',

                            ['@media (max-width: 1000px)']: {
                                gridColumn: '1/13',
                            }
                        }}
                    >
                        <StyledFooterColumnTitle>
                            Contacts
                        </StyledFooterColumnTitle>

                        <StyledFooterColumnContent>
                            <StyledFooterColumnGreyText>
                                Have a question? We're here to help.
                            </StyledFooterColumnGreyText>

                            <StyledFooterColumnFlexRow
                                sx={{
                                    mt: 2,
                                    ['@media (max-width: 1000px)']: {
                                        mt: 1,
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        gap: '14px'
                                    }
                                }}
                            >
                                <HeaderLink
                                    onClick={() => window.location.href = 'mailto:info@greenbloom.ca'}
                                    to=''
                                >
                                    <HeaderIcon sx={{
                                        mr: 0.5,
                                        mb: '1px',
                                        ['@media (max-height: 799px) and (min-width: 1024px)']: {
                                            mr: 1
                                        }
                                    }}>
                                        <EmailIcon />
                                    </HeaderIcon>
                                    info@greenbloom.ca

                                </HeaderLink>
                                {!mobile && (
                                    <HeaderPipe sx={{ margin: '0 6px' }} />
                                )}
                                <HeaderLink
                                    to='tel:6475005263'
                                >
                                    <HeaderIcon sx={{
                                        mr: 0.5,
                                        mb: '1px',
                                        ['@media (max-height: 799px) and (min-width: 1024px)']: {
                                            mr: 1
                                        }
                                    }}>
                                        <PhoneIphoneOutlined />
                                    </HeaderIcon>
                                    +1(647)500-5263
                                </HeaderLink>
                            </StyledFooterColumnFlexRow>

                            <div
                                style={{
                                    display: 'flex',
                                    gap: mobile ? '24px' : '36px',
                                    alignItems: 'center',
                                    justifyContent: mobile ? 'center' : 'flex-start',
                                    marginTop: '24px'
                                }}
                            >
                                <HeaderLink
                                    to={'https://www.youtube.com/user/TheGreenbloom/videos'}
                                    target="_blank"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '18px'
                                    }}
                                >
                                    <YouTube style={{ transform: 'scale(2)', fill: '#02703d' }} />
                                    Youtube
                                </HeaderLink>

                                <HeaderLink
                                    to={'https://www.facebook.com/people/Greenbloom-Landscape-Design/100068007225688/#'}
                                    target="_blank"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '18px'
                                    }}
                                >
                                    <Facebook style={{ transform: 'scale(2)', fill: '#02703d' }} />
                                    Facebook
                                </HeaderLink>

                                <HeaderLink
                                    to={'https://x.com/GreenbloomLand'}
                                    target="_blank"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '18px'
                                    }}
                                >
                                    <Twitter style={{ transform: 'scale(2)', fill: '#02703d' }} />
                                    Twitter
                                </HeaderLink>
                            </div>
                        </StyledFooterColumnContent>
                    </StyledFooterColumn>

                    {!mobile && (
                        <StyledFooterIconCell onClick={() => window.scrollTo({ top: 0 })}>
                            <KeyboardArrowUp />
                        </StyledFooterIconCell>
                    )}
                </StyledFooterContent>
            </StyledFooter>
        </AppOuterContainer>
    )
}