import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import disableScroll from "disable-scroll";
import logo from '../../resources/images/greenbloom_logo.png'
import {
    Box,
    Paper,
    IconButton,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    Collapse,
    Divider,
    Typography
} from "@mui/material";
import { Close, ExpandLess, ExpandMore, Menu } from "@mui/icons-material";
import { StyletMobileFooterLogo } from "../Footer/styled";

interface MobileHeaderMenuProps {
    servicesList: any[];
}

export const MobileHeader: React.FC<MobileHeaderMenuProps> = ({ servicesList }) => {
    const [open, setOpen] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({});
    const location = useLocation();

    // useEffect(() => {
    //     if (open) disableScroll.on();
    //     else disableScroll.off();
    //     return () => disableScroll.off();
    // }, [open]);

    const toggleDrawer = () => setOpen(!open);

    const handleSubmenuToggle = (id: string) => {
        setOpenSubmenus((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <>
            <IconButton edge="start" onClick={toggleDrawer} sx={{ color: "#2E7D32" }}>
                <Menu sx={{ fontSize: 28 }} />
            </IconButton>

            <Drawer anchor="right" open={open} onClose={toggleDrawer}>
                <Box sx={{ width: 320, p: 3, pt: 2, bgcolor: "#f5f5f5", height: "100%" }} role="presentation">
                    <Box display="flex" justifyContent="flex-end" mb={2}>
                        <IconButton onClick={toggleDrawer} sx={{ color: "#4B8B3B" }}>
                            <Close sx={{
                                transform: 'scale(1.5)'
                            }} />
                        </IconButton>
                    </Box>

                    {/* <Typography variant="h6" sx={{ mb: 2, color: "#2E7D32", fontWeight: 600, text: '24px' }}>
                        Menu
                    </Typography> */}

                    <List sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <ListItemButton
                            component={Link}
                            to="/"
                            selected={location.pathname === "/"}
                            onClick={toggleDrawer}
                            sx={{
                                borderRadius: 2,
                                fontSize: '20px'
                            }}
                        >
                            <div>Home</div>
                        </ListItemButton>

                        {servicesList.map((service) => (
                            <Box key={service.id} sx={{ mt: 1 }}>
                                <ListItemButton
                                    onClick={() => handleSubmenuToggle(service.id)}
                                    sx={{
                                        borderRadius: 2,
                                        bgcolor: location.pathname.includes(service.link) ? "#e8f5e9" : "transparent",
                                    }}
                                >
                                    <div
                                        style={{
                                            fontWeight: location.pathname.includes(service.link) ? "bold" : "normal",
                                            color: "#2E7D32",
                                            width: '100%',
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: 'center',
                                            fontSize: '20px'
                                        }}
                                    >{service.title}</div>
                                    {openSubmenus[service.id] ? <ExpandLess sx={{ fill: '#02703d' }} /> : <ExpandMore sx={{ fill: '#02703d' }} />}
                                </ListItemButton>

                                <Collapse in={openSubmenus[service.id]} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {service.subServices?.map((sub: any) => (
                                            <ListItemButton
                                                key={sub.id}
                                                component={Link}
                                                to={`/${sub.link}`}
                                                sx={{ pl: 5, py: 1, borderRadius: 2 }}
                                                selected={location.pathname === `/${sub.link}`}
                                                onClick={toggleDrawer}
                                            >
                                                <div

                                                    style={{ fontSize: 16, color: "#33691E" }}
                                                >
                                                    {sub.title}
                                                </div>
                                            </ListItemButton>
                                        ))}
                                    </List>
                                </Collapse>
                            </Box>
                        ))}

                        <Divider sx={{ my: 2, background: '#02703d' }} />

                        <ListItemButton component={Link} to="/projects-gallery" selected={location.pathname === "/projects-gallery"} onClick={toggleDrawer} sx={{
                            borderRadius: 2,
                            fontSize: '20px'
                        }}>
                            <div >Projects</div>
                        </ListItemButton>

                        <ListItemButton component={Link} to="/careers" selected={location.pathname === "/careers"} onClick={toggleDrawer} sx={{
                            borderRadius: 2,
                            fontSize: '20px'
                        }}>
                            <div>Careers</div>
                        </ListItemButton>

                        <ListItemButton component={Link} to="/faq-page" selected={location.pathname === "/faq-page"} onClick={toggleDrawer} sx={{
                            borderRadius: 2,
                            fontSize: '20px'
                        }}>
                            <div>FAQ</div>
                        </ListItemButton>

                        <img style={{ transform: 'scale(1)', margin: '30px auto' }} src={logo} />
                    </List>

                    
                </Box>
            </Drawer>
        </>
    );
};
