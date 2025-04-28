import { ArrowLeft, ArrowRight, KeyboardArrowLeft, KeyboardArrowRight, StarRateRounded } from "@mui/icons-material"
import { StyledReviewCell, StyledReviewCellBottom, StyledReviewCellBottomLeft, StyledReviewCellBottomRight, StyledReviewCellBottomRightPlaceholder, StyledReviewCellDate, StyledReviewCellName, StyledReviewCellReview, StyledReviewCellTop, StyledReviewsIconCell, StyledReviewsRow, StyledReviewsSection, StyledReviewsSectionRight, StyledReviewsSectionTitle, StyledReviewsSectionTop } from "./styled"
import { useEffect, useRef, useState } from "react";
import { Rating, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

export const ReviewsSection: React.FC = () => {
    const reviewsList = [
        {
            id: 1,
            name: "Stephen J",
            review: "Shir worked artistically and efficiently to create a lovely oasis in our back garden. We trusted his judgment about selection of plants to maximize the potential of our shade garden. The results were beautiful.",
            photo: null,
            rating: 5,
            date: 'a year ago',
            link: 'https://maps.app.goo.gl/cCnNPT9VU8UsaapZ7'
        },
        {
            id: 2,
            name: "Leah Oates",
            review: "We recently worked with Greenbloom Landscaping and we are very happy with the beautiful work that they did for us. Their designs are lush, classic and delightful and we’ll have lots of happiness from the plantings designed by Greenbloom Landscaping.  Many thanks to Shir and crew and to Ohad.",
            photo: null,
            rating: 5,
            date: '2 years ago',
            link: 'https://maps.app.goo.gl/fdwfAtKB8mD4HR5N6'
        },
        {
            id: 3,
            name: "Allena Nguyen",
            review: "Shir and his team did an outstanding job. We had a disaster of a front yard that desperately needed a soil reset and a retaining wall. At my initial consultation with Shir, he carefully listened to my concerns and was very understanding of my budget and explained what could be feasibly done immediately and what could be done in the future once budget allowed. He was very patient with me as I had many questions both at the consultation and through follow-up emails. Shir and his team were extremely punctual and worked quickly, and Shir was extremely accommodating and maintained excellent communication throughout to keep me up to date on the project's progress. The retaining wall looks incredible, and our front yard looks amazing now. They even repurposed rocks we had and re-did a pathway that looks better than it did before. I look forward to working with Shir again for future projects and highly recommend him.",
            photo: null,
            rating: 5,
            date: '10 month ago',
            link: 'https://maps.app.goo.gl/1X7rL8rkF1JQ9J6b6'
        },
        {
            id: 4,
            name: "Paul Barber",
            review: "I have nothing but good things to say about Greenbloom.  They responded to  my request for service promptly, and have been nothing but professional in providing service and responding to subsequent requests. Their knowledge of plants and their characteristics has been most helpful. Count me as a satisfied customer.",
            photo: null,
            rating: 5,
            date: '2 years ago',
            link: 'https://maps.app.goo.gl/oAB5gD75xkWBb98G7'
        },
        {
            id: 5,
            name: "Matt Wakefield",
            review: "Shir was fantastic and great to work with. My wife and I were thoroughly impressed with the team's professionalism and Shir's vision. We're extremely pleased with the work they performed removing our thick ivy ground cover and look forward to continuing our working relationship as our yard project develops.",
            photo: null,
            rating: 5,
            date: '11 month ago',
            link: 'https://maps.app.goo.gl/BypXj7VM7NR32K1g7'
        },
        {
            id: 6,
            name: "Kathryn Witt",
            review: "Absolutely delighted with the service Greenbloom provided. They worked so hard putting mulch down and went over and above in making our garden look good. I would highly recommend them.",
            photo: null,
            rating: 5,
            date: 'a year ago',
            link: 'https://maps.app.goo.gl/ys73uH9CmxY8cTHF9'
        },
        {
            id: 7,
            name: "I Wright",
            review: "Exceptional job!  Shir worked wonders on our neglected flowerbeds, transforming them from weed-infested chaos to beautifully pristine spaces. With meticulous attention to detail, he cleared away debris, unruly branches, and winter leaves, breathing new life into our garden. His professionalism shone through as he tidied up around our patio, always seeking our input and explaining his strategy every step of the way. Couldn't be happier with the results!",
            photo: null,
            rating: 5,
            date: '10 month ago',
            link: 'https://maps.app.goo.gl/1EVQu6p6YfpB5r1T6'
        },
        {
            id: 8,
            name: "Andrea Pugliese",
            review: "Greenbloom team has installed the new lawn a week ago and it is looking great! I would recommend them.",
            photo: null,
            rating: 5,
            date: '7 month ago',
            link: 'https://maps.app.goo.gl/Ps51NjpAWxrE4s8z7'
        },
        {
            id: 9,
            name: "Charlene",
            review: "Shir and his team do fantastic work and were so pleasant to work with. After meeting with a couple of other landscapers that were more expensive and not as kind, we decided to go with Greenbloom and they did not disappoint. One of the more complex things we asked them to do was to install terracing on a steep slope that was eroding.  We also trusted Shir to make plant recommendations and he assessed the soil, the sunlight, and my design preferences - the results turned out great - they very obviously take pride in their work and are true professionals!",
            photo: null,
            rating: 5,
            date: '6 month ago',
            link: 'https://maps.app.goo.gl/jvS3GpVdrGFZ2YpB8'
        },
        {
            id: 10,
            name: "Anthony Murray",
            review: "I cannot recommend this company enough! Very punctual and professional company to deal with. I’ll definitely be recommending them to friends and family and are officially my new go to landscapers.",
            photo: null,
            rating: 5,
            date: '10 month ago',
            link: 'https://maps.app.goo.gl/isrKxEt8eRbdHLeG7'
        },
    ];

    const mobile = useMediaQuery('(max-width:1000px)');

    const scrollableRef = useRef<HTMLDivElement | null>(null);
    const [isScrollVisible, setIsScrollVisible] = useState<boolean>(false);
    const [itemWidth, setItemWidth] = useState<number>(0);
    const [isAtStart, setIsAtStart] = useState<boolean>(true);
    const [isAtEnd, setIsAtEnd] = useState<boolean>(false);

    useEffect(() => {
        checkScroll();
        calculateItemWidth();
        window.addEventListener('resize', calculateItemWidth);

        if (scrollableRef.current) {
            scrollableRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('resize', calculateItemWidth);
            if (scrollableRef.current) {
                scrollableRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const calculateItemWidth = (): void => {
        if (scrollableRef.current && scrollableRef.current.firstElementChild) {
            const firstItem = scrollableRef.current.firstElementChild as HTMLElement;
            setItemWidth(firstItem.offsetWidth);
        }
    };

    const checkScroll = (): void => {
        if (
            scrollableRef.current &&
            scrollableRef.current.scrollWidth > scrollableRef.current.clientWidth
        ) {
            setIsScrollVisible(true);
        } else {
            setIsScrollVisible(false);
        }
    };

    // Check if scroll is at start or end and update button styles accordingly
    const handleScroll = (): void => {
        if (scrollableRef.current) {
            const scrollLeft = scrollableRef.current.scrollLeft;
            const maxScrollLeft = scrollableRef.current.scrollWidth - scrollableRef.current.clientWidth;

            setIsAtStart(scrollLeft === 0);
            setIsAtEnd(scrollLeft >= maxScrollLeft);
        }
    };

    const onScroll = (offsetMultiplier: number): void => {
        if (scrollableRef.current) {
            scrollableRef.current.scrollBy({
                left: itemWidth * offsetMultiplier,
                behavior: 'smooth',
            });
        }
    };

    return (
        <StyledReviewsSection>
            <StyledReviewsSectionTop>
                <StyledReviewsSectionTitle>
                    Our customers say
                </StyledReviewsSectionTitle>

                {mobile && (
                    <div style={{ color: 'grey' }}>Scroll to the side to see more*</div>
                )}

                {!mobile && (
                    <StyledReviewsSectionRight>
                        {isAtEnd && (
                            <StyledReviewsIconCell
                                onClick={() => onScroll(1)}
                                style={{
                                    backgroundColor: '#02703d',
                                    border: '2px solid #02703d',
                                    color: '#fff',
                                    width: '120px',
                                    fontWeight: 600
                                }}
                            >
                                <Link
                                    to="https://maps.app.goo.gl/mzLm5oZTzHsHjWov7"
                                    target="_blank"
                                    style={{
                                        color: '#fff',
                                        textDecoration: 'none'
                                    }}
                                >
                                    See More
                                </Link>
                            </StyledReviewsIconCell>
                        )}
                        <StyledReviewsIconCell
                            onClick={() => onScroll(-1)}
                            style={{
                                backgroundColor: isAtStart ? 'gray' : '#02703d',
                                border: isAtStart ? '2px solid gray' : '2px solid #02703d',
                            }}
                        >
                            <KeyboardArrowLeft />
                        </StyledReviewsIconCell>
                        <StyledReviewsIconCell
                            onClick={() => onScroll(1)}
                            style={{
                                backgroundColor: isAtEnd ? 'gray' : '#02703d',
                                border: isAtEnd ? '2px solid gray' : '2px solid #02703d'
                            }}
                        >
                            <KeyboardArrowRight />
                        </StyledReviewsIconCell>
                    </StyledReviewsSectionRight>
                )}
            </StyledReviewsSectionTop>

            <StyledReviewsRow ref={scrollableRef}>
                {reviewsList.map((item: any) => {
                    return (
                        <StyledReviewCell
                            to={item.link}
                            key={item.id}
                            target="_new"
                        >
                            <StyledReviewCellTop>
                                <StyledReviewCellDate>
                                    {item.date}
                                </StyledReviewCellDate>
                                <StyledReviewCellReview>
                                    {item.review}
                                </StyledReviewCellReview>
                            </StyledReviewCellTop>

                            <StyledReviewCellBottom>
                                <StyledReviewCellBottomLeft>
                                    <StyledReviewCellName>
                                        {item.name}
                                    </StyledReviewCellName>

                                    <Rating
                                        name="read-only"
                                        value={item.rating}
                                        readOnly
                                        icon={<StarRateRounded fontSize="inherit" style={{ transform: 'scale(1.2)', fill: '#02703d' }} />}
                                        emptyIcon={<StarRateRounded fontSize="inherit" style={{ transform: 'scale(1.2)' }} />}
                                    />
                                </StyledReviewCellBottomLeft>

                                <StyledReviewCellBottomRight
                                    sx={{
                                        background: item.photo ? `url(${item.photo})` : '#02703d',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'contain',
                                    }}
                                >
                                    {!item.photo && (
                                        <StyledReviewCellBottomRightPlaceholder>
                                            {item.name[0]}
                                        </StyledReviewCellBottomRightPlaceholder>
                                    )}
                                </StyledReviewCellBottomRight>
                            </StyledReviewCellBottom>
                        </StyledReviewCell>
                    );
                })}
            </StyledReviewsRow>
        </StyledReviewsSection>
    )
}