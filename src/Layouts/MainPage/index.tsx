import { useState } from "react";
import {
    StyledFormSubmit,
    StyledMainPage,
    StyledMainPageRewards,
    StyledMainPageRewardsIcon,
    StyledMainPageTitle,
    StyledMainPageTop
} from "./styled.tsx";
// import { format } from "date-fns";
// import { PhoneInput } from 'react-international-phone';
import './phoneStyles.scss';
import './style.scss';
import { Alert, Snackbar, useMediaQuery } from "@mui/material";
// import { CalendarDialog } from "../Dialogs/CalendarDialog/CalendarDialog";
import { ContactMailOutlined } from "@mui/icons-material";
import home_stars_verified from '../../resources/icons/home-stars-verified.png';
import best_of_houzz from '../../resources/icons/best-of-houzz.png';
import consumer_choice from '../../resources/icons/consumer-choice.png'

export const MainPage: React.FC = () => {
    const [error, setError] = useState('');
    const [isSucces, setIsSuccess] = useState(false);
    const mobile = useMediaQuery('(max-width:1000px)');

    return (
        <StyledMainPage>
            <StyledMainPageTop>
                <StyledMainPageTitle>
                    Award Winning Customer Service

                    {/* <h2 style={{ fontSize: mobile ? '14px' : '18px', fontWeight: 500 }}>
                        <br />
                        Stay loaded, stay paid, and stay compliant with our all-in-one dispatch service.
                    </h2> */}

                    <StyledMainPageRewards>
                        <StyledMainPageRewardsIcon src={home_stars_verified} />

                        <StyledMainPageRewardsIcon src={best_of_houzz} />

                        <StyledMainPageRewardsIcon sx={{
                            transform: 'scale(1.25)',
                            [':hover']: {
                                transform: 'scale(1.5)'
                            }
                        }} src={consumer_choice} />
                    </StyledMainPageRewards>
                </StyledMainPageTitle>

            </StyledMainPageTop>

            <StyledMainPageTop sx={{ gap: '40px', width: !mobile ? '900px' : '100%' }}>
                <StyledFormSubmit
                    sx={{
                        height: '90px',
                        fontSize: '28px',
                        borderRadius: mobile ? '0' : '20px',
                        width: '80%',
                        margin: 'auto'
                    }}
                    startIcon={<ContactMailOutlined sx={{ marginRight: '20px', transform: 'scale(1.5)' }} />}
                    onClick={() => {
                        const formElement = document.getElementById('form');
                        if (formElement) {
                            const yOffset = mobile ? -60 : -100; // scroll 70px above the element
                            const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                    }}
                >
                    Get a Free Quote
                </StyledFormSubmit>
                {mobile && (
                    <div style={{
                        width: '100%',
                        height: '2px',
                        background: 'white'
                    }} />
                )}
                {/* <StyledFormSubmit
                    startIcon={<ContactMailOutlined sx={{ marginRight: '10px' }} />}
                    sx={{
                        height: '70px',
                        fontSize: '22px',
                        borderTopLeftRadius: mobile ? '0' : '20px',
                        borderTopRightRadius: mobile ? '0' : '20px',
                        marginTop: mobile ? '0px !important' : '24px',
                    }}
                >
                    Contact Us
                </StyledFormSubmit> */}
            </StyledMainPageTop>

            {/* Snackbar for success or error */}
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={isSucces || !!error}
                autoHideDuration={6000}
                onClose={() => {
                    setIsSuccess(false);
                    setError('');
                }}
            >
                {isSucces ? (
                    <Alert
                        onClose={() => setIsSuccess(false)}
                        severity="success"
                        sx={{
                            borderRadius: '20px'
                        }}
                    >
                        Form submitted. Thank you!
                    </Alert>
                ) : (
                    <Alert
                        onClose={() => setError('')}
                        severity="error"
                        sx={{
                            borderRadius: '20px'
                        }}
                    >
                        {error}
                    </Alert>
                )}
            </Snackbar>
        </StyledMainPage>
    );
};
