import { useMediaQuery } from "@mui/material";
import { questionsList, servicesList } from "../../resources/data/arrays";
import { AppOuterContainer } from "../DesktopLayout/styled"
import { MainPageOptions } from "../MainPageOptions";
import { FAQPageQuoteButton, StyledFAQCellAnswer, StyledFAQCellTitle, StyledFAQIconCell, StyledFAQIconCellNumber, StyledFAQPage, StyledFAQPageCell, StyledFAQPageCellLeft, StyledFAQPageCellTop, StyledFAQPageContentTop, StyledFAQPageMain, StyledFAQPageQuestionsList, StyledFAQPageSubTitle, StyledFAQPageTip, StyledFAQPageTitle, StyledFAQPageTop, StyledFAQPageTopButton, StyledFAQPageTopLeft, StyledFAQPageTopRight } from "./styled"
import { Add, Close, PhoneIphoneOutlined } from "@mui/icons-material";
import { HeaderLink, HeaderIcon, HeaderPipe } from "../Header/styled";
import EmailIcon from '@mui/icons-material/EmailOutlined';
import { useState, useEffect } from "react";
import React from "react";
export const FAQPage: React.FC = () => {
    const [openedIds, setOpenedIds] = useState<any>([])
    const mobile = useMediaQuery('(max-width:1000px)');

    const addOpenedId = (newId: number) => {
        const newIds = [...openedIds, newId];

        setOpenedIds(newIds);
    }

    const removeOpenedId = (removeId: number) => {
        const newIds = openedIds.filter((id: number) => id != removeId)

        setOpenedIds(newIds);
    }

    useEffect(() => { }, [setOpenedIds])

    return (
        <AppOuterContainer>
            {!mobile && (
                <MainPageOptions servicesList={servicesList} />
            )}
            <StyledFAQPageMain>
                <StyledFAQPageTop>
                    <StyledFAQPageTitle>
                        Frequently Asked Questions
                    </StyledFAQPageTitle>

                    <StyledFAQPageSubTitle>
                        You can find answers to the most common questions on this page
                    </StyledFAQPageSubTitle>

                    {!mobile && (
                        <StyledFAQPageTopButton
                        >
                            Free quote
                        </StyledFAQPageTopButton>
                    )}
                </StyledFAQPageTop>
            </StyledFAQPageMain>

            <StyledFAQPage sx={{ height: 'fit-content' }}>
                <StyledFAQPageContentTop>
                    <StyledFAQPageTopLeft>
                        <StyledFAQPageTitle sx={{ color: 'black' }}>
                            FAQ
                        </StyledFAQPageTitle>

                        <StyledFAQPageSubTitle sx={{ color: 'black' }}>
                            Didn't find the answer to your quetion?
                            <br></br>
                            Call us or send us an e-mail
                            <br></br>
                            <StyledFAQPageTip>
                                * Scroll to see more
                            </StyledFAQPageTip>
                        </StyledFAQPageSubTitle>
                    </StyledFAQPageTopLeft>

                    <StyledFAQPageTopLeft
                        sx={{
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            height: '100%',

                            ['@media (max-width: 1000px)']: {
                                alignItems: 'flex-start',
                                flexDirection: 'column-reverse'
                            }
                        }}
                    >
                        <FAQPageQuoteButton>Get a quote</FAQPageQuoteButton>

                        <StyledFAQPageTopRight

                        >
                            <HeaderLink
                                onClick={() => window.location.href = 'mailto:info@fcmmovers.com'}
                                to=''
                            >
                                <HeaderIcon sx={{
                                    mr: 1,
                                    mb: '0px',
                                    ['@media (max-height: 799px) and (min-width: 1024px)']: {
                                        mr: 1
                                    }
                                }}>
                                    <EmailIcon />
                                </HeaderIcon>
                                info@fcmmovers.com
                            </HeaderLink>
                            {!mobile && (
                                <>
                                    <HeaderPipe />
                                    <HeaderLink
                                        to='tel:4378989777'
                                    >
                                        <HeaderIcon sx={{
                                            mr: 1,
                                            mb: '1px',
                                            ['@media (max-height: 799px) and (min-width: 1024px)']: {
                                                mr: 1
                                            }
                                        }}>
                                            <PhoneIphoneOutlined />
                                        </HeaderIcon>
                                        +1 (437) 898-9777
                                    </HeaderLink>
                                </>
                            )}
                        </StyledFAQPageTopRight>
                    </StyledFAQPageTopLeft>
                </StyledFAQPageContentTop>

                <StyledFAQPageQuestionsList>
                    {questionsList.map((item: any, index: number) => (
                        <StyledFAQPageCell
                            key={item.id}
                        >
                            <StyledFAQPageCellTop
                                key={item.id}
                            >
                                <StyledFAQPageCellLeft>
                                    {!mobile && (
                                        <StyledFAQIconCell>
                                            <StyledFAQIconCellNumber>
                                                {index + 1}
                                            </StyledFAQIconCellNumber>
                                        </StyledFAQIconCell>
                                    )}

                                    <StyledFAQCellTitle>
                                        {item.question}
                                    </StyledFAQCellTitle>
                                </StyledFAQPageCellLeft>

                                <StyledFAQIconCell
                                    onClick={() => {
                                        if (openedIds.some((id: number) => id === item.id)) {
                                            removeOpenedId(item.id)
                                        } else {
                                            addOpenedId(item.id)
                                        }
                                    }}
                                    sx={{
                                        background: openedIds.some((id: number) => id === item.id) ? '#fff' : '#02703d',
                                        cursor: 'pointer',
                                        border: '2px solid #02703d',
                                        alignSelf: 'center',
                                        ['svg']: {
                                            fill: openedIds.some((id: number) => id === item.id) ? '#02703d' : '#fff',
                                            width: '44px',
                                            height: '44px'
                                        },

                                        [':hover']: {
                                            background: '#fff',

                                            ['svg']: {
                                                fill: '#02703d',
                                            },
                                        },

                                        ['@media (max-width: 1000px)']: {
                                            width: '44px',
                                            height: '44px'
                                        }
                                    }}
                                >
                                    {openedIds.some((id: number) => id === item.id) ? (
                                        <Close />
                                    ) : (
                                        <Add />
                                    )}
                                </StyledFAQIconCell>
                            </StyledFAQPageCellTop>

                            {openedIds.some((id: number) => id === item.id) && (
                                <StyledFAQCellAnswer>
                                    {item.answer.split('\n').map((line: any, index: any) => (
                                        <React.Fragment key={index}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </StyledFAQCellAnswer>
                            )}
                        </StyledFAQPageCell>
                    ))}
                </StyledFAQPageQuestionsList>
            </StyledFAQPage>
        </AppOuterContainer>
    )
}