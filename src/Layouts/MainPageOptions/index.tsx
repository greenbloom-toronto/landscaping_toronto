import { useLocation } from "react-router-dom"
import { useState, useRef } from "react"
import { Box, Paper } from "@mui/material"
import {
    MainPageOptionsList,
    MainPageOptionsListItem,
    MainPageOptionsListItemText,
    MainPageOptionsMenuItem,
    MainPageOptionsMenuLink,
    StyledMainPageOptions
} from "./styled"

interface IProps {
    servicesList: any
}

export const MainPageOptions: React.FC<IProps> = ({ servicesList }) => {
    const location = useLocation()
    const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null)

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const handleEnter = (serviceId: string) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        setHoveredServiceId(serviceId)
    }

    const handleLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setHoveredServiceId(null)
        }, 150)
    }

    return (
        <StyledMainPageOptions>
            <MainPageOptionsList>
                <MainPageOptionsListItem
                    sx={{
                        textDecoration: location.pathname === '/' ? 'underline' : 'none',
                        textUnderlineOffset: '8px'
                    }}
                    to="/"
                >
                    Home
                </MainPageOptionsListItem>

                {servicesList.map((service: any) => {
                    const isServiceActive = location.pathname.includes(service.link)

                    return (
                        <Box
                            key={service.id}
                            onMouseEnter={() => handleEnter(service.id)}
                            onMouseLeave={handleLeave}
                            sx={{ position: 'relative', display: 'inline-block' }}
                        >
                            <MainPageOptionsListItemText
                                sx={{
                                    textUnderlineOffset: '8px',
                                    cursor: 'pointer',
                                    textDecoration: isServiceActive ? 'underline' : 'none',
                                }}
                            >
                                {service.title}
                            </MainPageOptionsListItemText>

                            {hoveredServiceId === service.id && (
                                <Paper
                                    elevation={3}
                                    sx={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        zIndex: 10,
                                        minWidth: 300,
                                        paddingY: 1,
                                    }}
                                >
                                    {service.subServices?.map((sub: any) => {
                                        const isSubActive = location.pathname === `/${sub.link}`

                                        return (
                                            <MainPageOptionsMenuItem key={sub.id}>
                                                {isSubActive ? (
                                                    <Box
                                                        sx={{
                                                            color: 'black',
                                                            fontWeight: 'bold',
                                                            opacity: 1,
                                                            pointerEvents: 'none',
                                                        }}
                                                    >
                                                        {sub.title}
                                                    </Box>
                                                ) : (
                                                    <MainPageOptionsMenuLink to={`/${sub.link}`}>
                                                        {sub.title}
                                                    </MainPageOptionsMenuLink>
                                                )}
                                            </MainPageOptionsMenuItem>
                                        )
                                    })}
                                </Paper>
                            )}
                        </Box>
                    )
                })}

                <MainPageOptionsListItem
                    sx={{
                        textDecoration: location.pathname === '/projects-gallery' ? 'underline' : 'none',
                        textUnderlineOffset: '8px'
                    }}
                    to="/projects-gallery"
                >
                    Projects
                </MainPageOptionsListItem>

                {/* <MainPageOptionsListItem
                    sx={{
                        textDecoration: location.pathname === '/blog' ? 'underline' : 'none',
                        textUnderlineOffset: '8px'
                    }}
                    to="/blog"
                >
                    Blog
                </MainPageOptionsListItem> */}

                <MainPageOptionsListItem
                    sx={{
                        textDecoration: location.pathname === '/careers' ? 'underline' : 'none',
                        textUnderlineOffset: '8px'
                    }}
                    to="/careers"
                >
                    Careers
                </MainPageOptionsListItem>

                <MainPageOptionsListItem
                    sx={{
                        textDecoration: location.pathname === '/faq-page' ? 'underline' : 'none',
                        textUnderlineOffset: '8px'
                    }}
                    to="/faq-page"
                >
                    FAQ Page
                </MainPageOptionsListItem>
            </MainPageOptionsList>
        </StyledMainPageOptions>
    )
}
