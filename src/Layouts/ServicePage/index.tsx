import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { servicesList } from '../../resources/data/arrays';
import { MainPageOptions } from '../MainPageOptions';
import { useMediaQuery } from '@mui/material';
import { AppInnerContainer, AppOuterContainer } from '../DesktopLayout/styled';
import { StyledServicePageMain, StyledServicePageSidebar } from './styled';
import { ServicePageContent } from './Content';

const ServicePage = () => {
    const location = useLocation();
    const [currentService, setCurrentService] = useState<any>(null);
    const [currentSubService, setCurrentSubService] = useState<any>(null);
    const [currentSubSubService, setCurrentSubSubService] = useState<any>(null);
    const mobile = useMediaQuery('(max-width:1000px)');

    useEffect(() => {
        const pathParts = location.pathname.split('/').filter(Boolean); // ['services', 'general-services', 'maintenance', 'seeding']

        const service = servicesList.find((s) => s.link.includes(pathParts[1]));
        let subService = null;
        let subSubService = null;

        if (service?.subServices) {
            subService = service.subServices.find((ss) => ss.link.includes(pathParts[2]));
            if (subService?.subSubServices) {
                subSubService = subService.subSubServices.find((sss) =>
                    sss.link.includes(pathParts[3])
                );
            }
        }

        setCurrentService(service);
        setCurrentSubService(subService);
        setCurrentSubSubService(subSubService);
    }, [location.pathname]);

    return (
        <AppOuterContainer>
            {!mobile && (
                <MainPageOptions servicesList={servicesList} />
            )}
            {/* Sidebar */}

            {/* Main Content */}
            <div style={{ display: 'flex', gap: '30px', flexDirection: 'row-reverse' }}>
                {currentSubService?.subSubServices?.length > 0 && !mobile && (
                    <StyledServicePageSidebar
                        style={{
                            padding: '1rem',
                            background: '#e3e3e3',
                        }}
                    >
                        <Link
                            to={`/${currentSubService.link}`}
                            style={{
                                fontSize: '18px',
                                fontWeight: 'bold',
                                textDecoration: 'underline',
                                color: '#00302E',
                                display: 'inline-block',
                                marginBottom: '1rem',
                            }}
                        >
                            {currentSubService.title}
                        </Link>

                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {currentSubService.subSubServices.map((sub: any) => {
                                const isActive = location.pathname.includes(sub.link);
                                return (
                                    <li key={sub.id} style={{ marginBottom: '0.5rem' }}>
                                        <Link
                                            to={`/${sub.link}`}
                                            style={{
                                                textDecoration: 'none',
                                                color: isActive ? 'blue' : '#333',
                                                fontWeight: isActive ? 'bold' : 'normal',
                                            }}
                                        >
                                            {sub.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </StyledServicePageSidebar>
                )}

                {currentSubSubService ? (
                    <>
                        <ServicePageContent service={currentSubSubService} currentLevel={
                            "subSubService"
                        } />
                    </>
                ) : currentSubService ? (
                    <>
                        <ServicePageContent service={currentSubService} currentLevel={
                            "subService"
                        } />
                    </>
                ) : currentService ? (
                    <>
                        <ServicePageContent service={currentService} currentLevel={
                            "service"
                        } />
                    </>
                ) : (
                    <p>Service not found.</p>
                )}
            </div>
        </AppOuterContainer>
    );
};

export default ServicePage;
