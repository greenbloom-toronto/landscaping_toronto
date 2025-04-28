import MaintenanceService from '../../Layouts/ServicePage/Content/Services/MaintenanceService'
import service1 from '../images/service1.jpg';
import maintenance1 from '../images/maintenance1.jpg'
import lawn_maintenance1 from '../images/lawn_maintenance1.jpg'
import lawn_maintenance2 from '../images/lawn_maintenance2.jpeg'
import fall_cleanup1 from '../images/fall_cleanup1.jpg'
import fall_cleanup2 from '../images/fall_cleanup2.jpg'
import spring_cleanup2 from '../images/spring_cleanup1.jpg'
import aeration1 from '../images/aeration1.png'
import aeration2 from '../images/aeration2.png'
import fertilizer1 from '../images/fertilizer1.jpg'
import fertilizer2 from '../images/fertilizer2.jpg'
import seeding1 from '../images/seeding1.jpg'
import seeding2 from '../images/seeding2.jpeg'
import tree_removal1 from '../images/tree_removal1.webp'
import tree_removal2 from '../images/tree_removal2.jpg'
import landscape_maintenance1 from '../images/landscape_maintenance1.jpg'
import landscape_maintenance2 from '../images/landscape_maintenance2.jpg'
import landscape_maintenance3 from '../images/landscape_maintenance3.jpg'
import landscaping_services1 from '../images/landscaping_services1.jpg'
import landscaping_services2 from '../images/landscaping_services2.jpg'
import landscaping_services3 from '../images/landscaping_services3.jpg'
import garden_maintenance1 from '../images/garden_maintenance1.jpeg'
import garden_maintenance2 from '../images/garden_maintenance2.jpg'
import landscaping1 from '../images/landscaping1.jpg'
import landscaping2 from '../images/landscaping2.jpg'
import high_end1 from '../images/highEnd1.jpg'
import high_end2 from '../images/highEnd2.jpeg'
import rock_garden1 from '../images/rock_garden1.jpg'
import rock_garden2 from '../images/rock_garden2.jpg'
import rock_garden3 from '../images/rock_garden3.jpg'
import garden_beds1 from '../images/garden_beds1.jpg'
import garden_beds2 from '../images/garden_beds2.jpg'
import garden_beds3 from '../images/garden_beds3.jpg'
import garden_beds4 from '../images/garden_beds4.jpg'
import planting1 from '../images/planting1.jpg'
import planting2 from '../images/planting2.jpg'
import sod1 from '../images/sod1.jpg'
import sod2 from '../images/sod2.jpg'
import gardening1 from '../images/gardening1.webp'
import gardening2 from '../images/gardening2.jpg'
import landscaping_contractor1 from '../images/landscaping_contractor1.png'
import landscaping_contractor2 from '../images/landscaping_contractor2.jpg'
import landscape_design1 from '../images/landscape_design2.jpeg'
import landscape_design2 from '../images/landscape_design1.png'
import landscape_design3 from '../images/landscape_design3.jpg'
import plant_consultation2 from '../images/plant_consultation2.jpg'
import plant_consultation3 from '../images/plant_consultation3.jpg'
import plant_consultation4 from '../images/plant_consultation4.jpg'
import patio_design1 from '../images/patio_design1.jpg'
import patio_design2 from '../images/patio_design2.jpg'
import stone_work1 from '../images/stone_work1.jpg'
import stone_work2 from '../images/stone_work2.jpg'
import stone_work3 from '../images/stone_work3.jpg'
import stone_work4 from '../images/stone_work4.jpg'
import interlocking_pavers1 from '../images/interlocking_pavers1.jpg'
import interlocking_pavers2 from '../images/interlocking_pavers2.jpg'
import interlocking_pavers3 from '../images/interlocking_pavers3.jpg'
import flagstone_patio1 from '../images/flagstone_patio1.jpg'
import flagstone_patio2 from '../images/flagstone_patio2.jpg'
import flagstone_patio3 from '../images/flagstone_patio3.jpg'
import flagstone_patio4 from '../images/flagstone_patio4.jpg'
import flagstone_patio5 from '../images/flagstone_patio5.jpg'
import armour_stone1 from '../images/armour_stone1.jpg'
import armour_stone2 from '../images/armour_stone2.jpg'
import armour_stone3 from '../images/armour_stone3.jpg'
import power_washing_sanding1 from '../images/power_washing_sanding1.jpg'
import power_washing_sanding2 from '../images/power_washing_sanding2.jpg'

import service2 from '../images/service2.jpg'
import service3 from '../images/service3.jpg'
import service4 from '../images/service4.jpg'
import LawnMaintenance from '../../Layouts/ServicePage/Content/Services/LawnMaintenance';
import CleanUpServices from '../../Layouts/ServicePage/Content/Services/CleanUpServices';
import Aeration from '../../Layouts/ServicePage/Content/Services/Aeration';
import Fertilizer from '../../Layouts/ServicePage/Content/Services/Fertilizer';
import Seeding from '../../Layouts/ServicePage/Content/Services/Seeding';
import TreeRemoval from '../../Layouts/ServicePage/Content/Services/TreeRemoval';
import LandscapeMaintenance from '../../Layouts/ServicePage/Content/Services/LandscapeMaintenance';
import GardenMaintenance from '../../Layouts/ServicePage/Content/Services/GardenMaintenance';
import LandscapingServices from '../../Layouts/ServicePage/Content/Services/LandscapingServices';
import Landscaping from '../../Layouts/ServicePage/Content/Services/Landscaping';
import HighEndLandscaping from '../../Layouts/ServicePage/Content/Services/HighEndLandscaping';
import RockGarden from '../../Layouts/ServicePage/Content/Services/RockGarden';
import GardenBeds from '../../Layouts/ServicePage/Content/Services/GardenBeds';
import Planting from '../../Layouts/ServicePage/Content/Services/Planting';
import Sod from '../../Layouts/ServicePage/Content/Services/Sod';
import GardeningServices from '../../Layouts/ServicePage/Content/Services/GardeningServices';
import LandscapingContractor from '../../Layouts/ServicePage/Content/Services/LandscapingContractor';
import LandscapeDesign from '../../Layouts/ServicePage/Content/Services/LandscapeDesign';
import PlantConsultation from '../../Layouts/ServicePage/Content/Services/PlantConsultation';
import PatioDesign from '../../Layouts/ServicePage/Content/Services/PatioDesign';
import StoneWork from '../../Layouts/ServicePage/Content/Services/StoneWork';
import InterlockingPavers from '../../Layouts/ServicePage/Content/Services/InterlockingPavers';
import FlagstonePatio from '../../Layouts/ServicePage/Content/Services/FlagstonePatio';
import NaturalStone from '../../Layouts/ServicePage/Content/Services/NaturalStone';
import ArmourStone from '../../Layouts/ServicePage/Content/Services/ArmourStone';
import PowerWashingSanding from '../../Layouts/ServicePage/Content/Services/PowerWashingSanding';

export const servicesList = [
    {
        id: 1,
        title: "General Services",
        image: service1,
        link: 'services/general-services',
        subServices: [
            {
                id: 1,
                title: `Maintenance`,
                content: <MaintenanceService />,
                subTitle: "Maintenance",
                link: 'services/general-services/maintenance',
                images: [maintenance1, maintenance1],
                about: "Maintenance",
                subSubServices: [
                    {
                        id: 3,
                        title: `Lawn Maintenance`,
                        subTitle: "Lawn Maintenance",
                        link: 'services/general-services/maintenance/lawn-maintenance',
                        images: [lawn_maintenance1, lawn_maintenance2],
                        about: "Lawn Maintenance",
                        content: <LawnMaintenance />
                    },
                    {
                        id: 4,
                        title: `Clean Up Services`,
                        subTitle: "Clean Up Services",
                        link: 'services/general-services/maintenance/clean-up-services',
                        images: [fall_cleanup1, fall_cleanup2, spring_cleanup2],
                        about: "Clean Up Services",
                        content: <CleanUpServices />
                    },
                    {
                        id: 1,
                        title: `Aeration`,
                        subTitle: "Aeration",
                        link: 'services/general-services/maintenance/aeration',
                        images: [aeration1, aeration2],
                        about: "Aeration",
                        content: <Aeration />
                    },
                    {
                        id: 5,
                        title: `Fertilizer`,
                        subTitle: "Fertilizer",
                        link: 'services/general-services/maintenance/fertilizer',
                        images: [fertilizer1, fertilizer2],
                        about: "Fertilizer",
                        content: <Fertilizer />
                    },
                    {
                        id: 2,
                        title: `Seeding`,
                        subTitle: "Seeding",
                        link: 'services/general-services/maintenance/seeding',
                        images: [seeding1, seeding2],
                        about: "Seeding",
                        content: <Seeding />
                    },
                    {
                        id: 6,
                        title: `Tree Removal`,
                        subTitle: "Tree Removal",
                        link: 'services/general-services/maintenance/tree-removal',
                        images: [tree_removal1, tree_removal2],
                        about: "Tree Removal",
                        content: <TreeRemoval />
                    },
                    {
                        id: 7,
                        title: `Landscape Maintenance`,
                        subTitle: "Landscape Maintenance",
                        link: 'services/general-services/maintenance/landscape_maintenance',
                        images: [landscape_maintenance1, landscape_maintenance2, landscape_maintenance3],
                        about: "Landscape Maintenance",
                        content: <LandscapeMaintenance />
                    },
                    {
                        id: 8,
                        title: `Garden Maintenance`,
                        subTitle: "Garden Maintenance",
                        link: 'services/general-services/maintenance/garden_maintenance',
                        images: [garden_maintenance1, garden_maintenance2],
                        about: "Garden Maintenance",
                        content: <GardenMaintenance />
                    },
                ]
            },
            {
                id: 2,
                title: "Landscaping services",
                content: <LandscapingServices />,
                subTitle: "Landscaping services",
                link: 'services/general-services/toronto-landscaping-services',
                images: [landscaping_services1, landscaping_services2, landscaping_services3],
                about: "Landscaping services",
            },
            {
                id: 4,
                title: "Landscaping",
                content: <Landscaping />,
                subTitle: "Landscaping",
                link: 'services/general-services/toronto_landscaping',
                images: [landscaping1, landscaping2],
                about: "Landscaping",
                subSubServices: [
                    {
                        id: 1,
                        title: `High End Landscaping`,
                        subTitle: "High End Landscaping",
                        link: 'services/general-services/toronto_landscaping/high-end-landscaping',
                        images: [high_end1, high_end2],
                        about: "High End Landscaping",
                        content: <HighEndLandscaping />
                    },
                    {
                        id: 2,
                        title: `Rock Garden`,
                        subTitle: "Rock Garden",
                        link: 'services/general-services/toronto_landscaping/rock-garden',
                        images: [rock_garden1, rock_garden2, rock_garden3],
                        about: "Rock Garden",
                        content: <RockGarden />
                    },
                    {
                        id: 3,
                        title: `Garden Beds`,
                        subTitle: "Garden Beds",
                        link: 'services/general-services/toronto_landscaping/garden-beds',
                        images: [garden_beds1, garden_beds2, garden_beds3, garden_beds4],
                        about: "Garden Beds",
                        content: <GardenBeds />
                    },
                    {
                        id: 4,
                        title: `Planting`,
                        subTitle: "Planting",
                        link: 'services/general-services/toronto_landscaping/planting',
                        images: [planting1, planting2],
                        about: "Planting",
                        content: <Planting />
                    },
                    {
                        id: 5,
                        title: `Sod`,
                        subTitle: "Sod",
                        link: 'services/general-services/toronto_landscaping/sod',
                        images: [sod1, sod2],
                        about: "Sod",
                        content: <Sod />
                    },
                    {
                        id: 6,
                        title: `Gardening Services`,
                        subTitle: "Gardening Services",
                        link: 'services/general-services/toronto_landscaping/gardening-services',
                        images: [gardening1, gardening2],
                        about: "Gardening Services",
                        content: <GardeningServices />
                    },
                    {
                        id: 7,
                        title: `Landscaping Contractor Toronto`,
                        subTitle: "Landscaping Contractor Toronto",
                        link: 'services/general-services/toronto_landscaping/landscaping-contractor-toronto',
                        images: [landscaping_contractor1, landscaping_contractor2],
                        about: "Landscaping Contractor Toronto",
                        content: <LandscapingContractor />
                    },
                ]
            },
            {
                id: 5,
                title: "Landscape Design",
                subTitle: "Landscape Design",
                content: <LandscapeDesign />,
                link: 'services/general-services/landscape_design',
                images: [landscape_design1, landscape_design2, landscape_design3],
                about: "Landscape Design",
                subSubServices: [
                    {
                        id: 1,
                        title: `Plant Consultation`,
                        subTitle: "Plant Consultation",
                        link: 'services/general-services/landscape_design/plant-consultation',
                        images: [high_end1, plant_consultation2, plant_consultation3, plant_consultation4],
                        about: "Plant Consultation",
                        content: <PlantConsultation />
                    },
                    // {
                    //     id: 2,
                    //     title: `Rock Garden`,
                    //     subTitle: "Rock Garden",
                    //     link: 'services/general-services/toronto_landscaping/rock-garden',
                    //     images: [rock_garden1, rock_garden2, rock_garden3],
                    //     about: "Rock Garden",
                    //     content: <RockGarden />
                    // },
                    {
                        id: 3,
                        title: `Patio Design`,
                        subTitle: "Patio Design",
                        link: 'services/general-services/landscape_design/patio-design',
                        images: [patio_design1, patio_design2],
                        about: "Patio Design",
                        content: <PatioDesign />
                    },
                ]
            },
            {
                id: 6,
                title: "Stone Work",
                subTitle: "Stone Work",
                link: 'services/general-services/stone-work',
                images: [stone_work1, stone_work2, stone_work3, stone_work4],
                about: "Stone Work",
                content: <StoneWork />,
                subSubServices: [
                    {
                        id: 1,
                        title: `Interlocking pavers`,
                        subTitle: "Interlocking pavers",
                        link: 'services/general-services/stone-work/interlocking-pavers',
                        images: [interlocking_pavers1, interlocking_pavers2, interlocking_pavers3],
                        about: "Interlocking pavers",
                        content: <InterlockingPavers />
                    },
                    {
                        id: 3,
                        title: `Flagstone patio and paths`,
                        subTitle: "Flagstone patio and paths",
                        link: 'services/general-services/stone-work/flagstone-patio-paths',
                        images: [flagstone_patio1, flagstone_patio2, flagstone_patio3, flagstone_patio4, flagstone_patio5],
                        about: "Flagstone patio and paths",
                        content: <FlagstonePatio />
                    },
                    {
                        id: 2,
                        title: `Natural stone landscaping`,
                        subTitle: "Natural stone landscaping",
                        link: 'services/general-services/stone-work/natural-stone-landscaping',
                        images: [flagstone_patio1, flagstone_patio2, flagstone_patio3, flagstone_patio4, flagstone_patio5],
                        about: "Natural stone landscaping",
                        content: <NaturalStone />
                    },
                    {
                        id: 4,
                        title: `Armour Stone Landscaping`,
                        subTitle: "Armour Stone Landscaping",
                        link: 'services/general-services/stone-work/armour-stone-landscaping',
                        images: [armour_stone1, armour_stone2, armour_stone3],
                        about: "Armour Stone Landscaping",
                        content: <ArmourStone />
                    },
                    {
                        id: 5,
                        title: `Power washing & Sanding`,
                        subTitle: "Power washing & Sanding",
                        link: 'services/general-services/stone-work/power-washing-sanding',
                        images: [power_washing_sanding1, power_washing_sanding2],
                        about: "Power washing & Sanding",
                        content: <PowerWashingSanding />
                    },
                ]
            },
            {
                id: 7,
                title: "Wood Work",
                subTitle: "Subservice 1",
                link: '/',
                images: [service1, service1],
                about: "Subservice 1"
            },
            {
                id: 8,
                title: "Lighting & Irrigation",
                subTitle: "Subservice 1",
                link: '/',
                images: [service1, service1],
                about: "Subservice 1"
            },
            {
                id: 9,
                title: "Garden Supplies",
                subTitle: "Subservice 1",
                link: '/',
                images: [service1, service1],
                about: "Subservice 1"
            },

        ]
    },
    {
        id: 2,
        title: "Commercial",
        image: service2,
        link: 'services/commercial-services',
        subServices: [
            {
                id: 1,
                title: "Subservice 2",
                subTitle: "Subservice 2",
                link: '/',
                images: [landscaping_services1, landscaping_services2, landscaping_services3],
                about: "Subservice 2"
            }
        ]
    },
    {
        id: 3,
        title: "Clean Up",
        image: service3,
        link: 'services/clean-up-services',
        subServices: [
            {
                id: 1,
                title: "Subservice 3",
                subTitle: "Subservice 3",
                link: 'services/clean-up-services/spring-clean-up',
                images: [service1, service1],
                about: "Subservice 3"
            },
            {
                id: 2,
                title: "Subservice 3",
                subTitle: "Subservice 3",
                link: 'services/clean-up-services/fall-clean-up',
                images: [service1, service1],
                about: "Subservice 3"
            },
            {
                id: 3,
                title: "Subservice 3",
                subTitle: "Subservice 3",
                link: 'services/clean-up-services/garden-clean-up',
                images: [service1, service1],
                about: "Subservice 3"
            },
            {
                id: 4,
                title: "Subservice 3",
                subTitle: "Subservice 3",
                link: 'services/clean-up-services/yard-clean-up',
                images: [service1, service1],
                about: "Subservice 3"
            },
        ]
    },
    {
        id: 4,
        title: "Specials",
        image: service4,
        link: 'services/special-services',
        subServices: [
            {
                id: 1,
                title: "Subservice 4",
                subTitle: "Subservice 4",
                link: '/',
                images: [service1, service1],
                about: "Subservice 4"
            }
        ]
    }
]

export const projectsGallery = [
    {
        id: 1,
        title: "Project 1",
        images: [service1, service2, service3, service4]
    },
    {
        id: 2,
        title: "Project 2",
        images: [service1, service2, service3, service4]
    },
    {
        id: 3,
        title: "Project 3",
        images: [service1, service2, service3, service4]
    },
    {
        id: 4,
        title: "Project 4",
        images: [service1, service2, service3, service4]
    },
    {
        id: 5,
        title: "Project 5",
        images: [service1, service2, service3, service4]
    },
    {
        id: 6,
        title: "Project 6",
        images: [service1, service2, service3, service4]
    },
    {
        id: 7,
        title: "Project 7",
        images: [service1, service2, service3, service4]
    },
    {
        id: 7,
        title: "Project 7",
        images: [service1, service2, service3, service4]
    },
]

export const questionsList = [
    {
        id: 1,
        question: 'What Are Dry Laid and Wet Laid Methods?',
        answer: 'When building a patio, you and your landscaper have the option between wet laid and dry laid hardscapes. Dry laid refers to a process that tends to use a sand base (or other dry base) on top of gravel, with the stones laid out on top. Wet laid is when the hardscape is laid on top of concrete slabs that are placed on top of the gravel. \n\n Wet laid tends to be more expensive, and it can be costly to repair should they get damaged, but it does tend to last longer against the elements. Dry laid is much more affordable – including repairs – but breaks down slightly more often in bad weather.',
    },
    {
        id: 2,
        question: 'Should I seed or sod my lawn?',
        answer: 'While seeding may appear to be a less expensive option than sodding, the long run, which includes periodical maintenance and repair – proves otherwise. Over time, sodding proves to be the less costly choice – a fact that has made it the preferable solution for many homes, parks, golf courses and various athletic fields.\n\nWhen you choose to use sod, you’re paying for a product that has been grown under expert supervision, and made from quality seed blends. Sod can be installed within hours, and you can expect healthy and mature lawn within two weeks, no matter what season you choose, and no matter what terrain you install it on.',
    },
    {
        id: 3,
        question: 'How Often Should I Cut the Grass?',
        answer: 'While the general answer is “once per week,” the reality is that it’s not how often you cut the grass but the length of the grass blade itself. You want the grass to be between 2 ½ and 3 ½ inches, and you should never cut more than 1/3rd the length of the blade at any given time (otherwise you damage the grass).\n\nFor most homeowners in most weather conditions, this is usually about once per week, but for some it may be a little more and for others a little less depending on the length of the grass and the climate.',
    },
    {
        id: 4,
        question: 'Curb grass what do I do with it?',
        answer: 'Grass clippings are one of your lawn’s most underutilized resources. Far too often, homeowners take their grass clippings and remove them with the yard waste, never to be seen again. But grass clippings are loaded with healthy nutrients that are perfect for keeping your lawn lush and green. In general, it’s a good idea to leave the grass clippings on your lawn and allow them to act like natural feed.\n\nHowever, if you are afraid of people tracking them in the house or there is already a buildup of grass clippings on your lawn, you should consider composting them or using them in other parts of your garden. Otherwise, leaving them in the grass after you mowed the lawn is the best solution.',
    },
    {
        id: 5,
        question: 'Fertilizing: How Often and What Types Should I Use?',
        answer: 'Like with mowing, it‘s difficult to give a definitive answer when it comes to how often you should fertilize. If you have a time release fertilizer, you can often wait until the fertilizer’s time has run out. Most fertilizers should say how long they last and when the best time to fertilize again is. However, it’s recommended that you fertilize at minimum twice per year, and up to 5 times. \n\nFertilizers all have their own usage time and schedule, depending on the type of grass and time of year, and tend to come combined with other ingredients to help you with your lawn maintenance needs. \n\nFertilizers are equipped with three ingredients: \n\n > Nitrogen\n> Phosphorus\n> Potassium\n\nThese ingredients are always listed in that order (sometimes known as NPK). Nitrogen is the most important, as this provides the most nourishment, but it can increase the growth of weeds and encourage excess growth if too much is used too early. Phosphorus and Potassium are also useful for nourishment. It is recommended you choose fertilizers that have a 3:1:2 NPK ratio. 4:1:2 may also be acceptable.\n\nYou can also choose fast release or controlled release. Fast release helps your grass grow quickly, but may lead to grass burn or too much growth at once. Controlled release does a better job obtaining even grass but is more expensive and takes longer.',
    },
    {
        id: 6,
        question: 'Should I use Interlocking brick or natural stone?',
        answer: 'Using either interlocking brick or natural stone to pave your driveway, patio, pool deck or walkways really comes down to a slight difference in cost, and your own personal taste. While natural stone may require wall ties and footings which can increase installation fees, it’s important to understand that both options are durable, safe and require little to no maintenance.\n\nThe reason is that the roughness of the bricks, the joints and the sand that fill the gaps in between are what gives them their strength. As far as personal taste goes, natural stone is obviously the preferable choice as far as appearance, as it adds a unique, delicate feel and natural beauty to any type of landscape.',
    },
    {
        id: 7,
        question: 'What Are Interlocking Bricks?',
        answer: 'Bricks are one of the most reliable, sturdy ways to help build a landscape. Yet they can also be a bit unstable. If the cement loosens, the brick is unlikely to stay in place, and the structure may become unstable. Similarly, depending on the design, the cement mortar itself may not complement the architecture.\n\nInterlocking bricks help solve this problem. They are designed in such a way that each piece connects with its adjacent one, so that structurally they are all dependent on each other and able to stay in place. This makes these bricks much longer lasting, and often they can be interlocked without the use of any bonding agents. Overall, they are a good choice to use in landscaping.',
    },
    {
        id: 8,
        question: 'Should I choose concrete or stone / brick pavers?',
        answer: 'Bricks are one of the most reliable, sturdy ways to help build a landscape. Yet they can also be a bit unstable. If the cement loosens, the brick is unlikely to stay in place, and the structure may become unstable. Similarly, depending on the design, the cement mortar itself may not complement the architecture.\n\nInterlocking bricks help solve this problem. They are designed in such a way that each piece connects with its adjacent one, so that structurally they are all dependent on each other and able to stay in place. This makes these bricks much longer lasting, and often they can be interlocked without the use of any bonding agents. Overall, they are a good choice to use in landscaping.',
    },
    {
        id: 9,
        question: 'Retaining Walls: Natural Stone or Precast?',
        answer: 'When you or your landscapers are building retaining walls, you have the option of using natural stone or precast concrete. On its face, both are based on personal preference, but in many ways natural stone has the upper hand. It’s less expensive than precast concrete and more interesting to the eye (due to the natural differences between stones). It’s also easier to maintain and easier to replace should any damage occur.\n\nIt also looks far more natural when surrounded by plants and greenery. Precast certainly has a nice look, and it may compliment some decors, but for many landscapes natural stone will be preferable.',
    },
    {
        id: 10,
        question: 'How High Should I Cut My Grass?',
        answer: 'Creating a great lawn is almost an art form. You need to cut your grass at the perfect length to help it not only look great, but also remain healthy. If you plan on cutting the grass yourself, you need to know a few things. First, different types of grass have different ideal lengths. Get to know your specific type of grass to help ensure you’re cutting it off at the right spot.\n\nSecond, never cut more than 1/3rd of the grass at a time, no matter how long your grass is now and how short you want it to be. Any shorter and you risk damaging the grass stalks and opening them up for disease. Ideal grass height is, on average, somewhere between 2 and 3 inches.',
    },
]