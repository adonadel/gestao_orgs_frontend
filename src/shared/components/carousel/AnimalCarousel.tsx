import { IconButton, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CardEvent } from "../cardEvent/CardEvent";
import { ChevronLeft, ChevronRight, EventAvailable } from "@mui/icons-material";
import { useEffect, useState } from "react";
import TagTitle from "../tagTitle/TagTitle";


export const AnimalCarousel = () => {

    const getCenterSlidePercentage = () => {
        if (window.innerWidth < 400) {
            return 100;
        } else if (window.innerWidth < 600) {
            return 80;
        } else if (window.innerWidth < 960) {
            return 50;
        } else {
            return 30;
        }
    };

    const [centerSlidePercentage, setCenterSlidePercentage] = useState(getCenterSlidePercentage());

    useEffect(() => {
        const handleResize = () => {
            setCenterSlidePercentage(getCenterSlidePercentage());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const arrowStyles = {
        position: 'absolute',
        zIndex: 999,
        top: 'calc(50% - 15px)',
        width: 30,
        height: 30,
        cursor: 'pointer',
        background: '#fff',
        border: '1px solid #e0e0e0',
        boxShadow: '0 2px 2px rgba(0, 0, 0, 0.1)',
    };

    const indicatorStyles = {
        background: '#15b6b135',
        cursor: 'pointer',
        width: 10,
        height: 10,
        borderRadius: '50%',
        display: 'inline-block',
        margin: '0 8px',
        bottom: '-2rem',
        transition: 'width 0.5s ease',
    };


    return (
        <>
            <Typography variant="h2" color="secondary.dark" fontWeight={600} display={'flex'} alignItems={'center'} gap={2} sx={{
                fontSize: { xs: '1.2rem', sm: '1.5rem' }
            }}>
                <TagTitle backgroundColor="#15b6b125" icon={EventAvailable} iconColor="secondary.light" />
                
                Eventos
            </Typography>

            <Typography variant="body1" color="grey.600" mt={2} sx={{
                fontSize: { xs: '0.8rem', sm: '1rem'},
                mb: {xs: '1rem', sm: '2rem'}

            }}>
                Fique por dentro de todos nossos eventos, lives, sorteios e feirinhas!
            </Typography>


            <Carousel

                centerMode
                centerSlidePercentage={centerSlidePercentage}
                showThumbs={false}
                showStatus={false}
                infiniteLoop


                renderArrowPrev={(onClickHandler, hasPrev) =>
                    hasPrev && (
                        <IconButton color="secondary" onClick={onClickHandler} aria-label="left" sx={{
                            ...arrowStyles, left: 15,
                            '&:hover': {
                                backgroundColor: 'primary.dark',
                            },
                        }}>
                            <ChevronLeft />
                        </IconButton>
                    )
                }

                renderArrowNext={(onClickHandler, hasNext) =>
                    hasNext && (
                        <IconButton color="secondary" onClick={onClickHandler} aria-label="right" sx={{
                            ...arrowStyles, right: 15, '&:hover': {
                                backgroundColor: 'primary.dark',
                            },
                        }}>
                            <ChevronRight />
                        </IconButton>
                    )
                }

                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    if (isSelected) {
                        return (
                            <li
                                style={{ ...indicatorStyles, background: '#15b6b1' }}
                                aria-label={`Selected: ${label} ${index + 1}`}
                                title={`Selected: ${label} ${index + 1}`}
                            />
                        );
                    }
                    return (
                        <li
                            style={indicatorStyles}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            title={`${label} ${index + 1}`}
                            aria-label={`${label} ${index + 1}`}
                        />
                    );
                }}
            >
                <CardEvent location="Braço do Norte - SC" schedule="17 de julho - 10h" srcImage="public\background-header-mobile.png" />
                <CardEvent location="Braço do Norte - SC" schedule="17 de julho - 10h" srcImage="public\background-header-mobile.png" />
                <CardEvent location="Braço do Norte - SC" schedule="17 de julho - 10h" srcImage="public\background-header-mobile.png" />
                <CardEvent location="Braço do Norte - SC" schedule="17 de julho - 10h" srcImage="public\background-header-mobile.png" />
                <CardEvent location="Braço do Norte - SC" schedule="17 de julho - 10h" srcImage="public\background-header-mobile.png" />
                <CardEvent location="Braço do Norte - SC" schedule="17 de julho - 10h" srcImage="public\background-header-mobile.png" />
                <CardEvent location="Braço do Norte - SC" schedule="17 de julho - 10h" srcImage="public\background-header-mobile.png" />            
            </Carousel >
        </>

    )
};