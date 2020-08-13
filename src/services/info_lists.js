import React from "react";
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
    faGraduationCap,
    faUserTie,
    faDesktop,
    faCertificate,
    faTrophy
} from "@fortawesome/free-solid-svg-icons";
const AllInfoLists = [{
        id: "1",
        Icon: < FontAwesomeIcon icon = {
            faGraduationCap
        }
        />,
        colorCode: '#f97600',
        title: "EDUCATION",
        listItem: [{
                text1: "University, Location",
                text2: "Multimedia",
            },
            {
                text1: "University, Location",
                text2: "Graphic Design",
            },
            {
                text1: "University, Location",
                text2: "UI/UX Design",
            },
        ],
    },
    {
        id: "2",
        Icon: < FontAwesomeIcon icon = {
            faUserTie
        }
        />,
        colorCode: '#92c715',
        title: "EXPERIENCE",
        listItem: [{
                text1: "University, Location",
                text2: "Multimedia",
            },
            {
                text1: "University, Location",
                text2: "Graphic Design",
            },
            {
                text1: "University, Location",
                text2: "UI/UX Design",
            },
        ],
    },
    {
        id: "3",
        Icon: < FontAwesomeIcon icon = {
            faDesktop
        }
        />,
        colorCode: '#f40644',
        title: "SKILLS",
        listItem: [{
                text1: "gjhjgh",
                text2: "Multimedia",
                text3: 2
            },
            {
                text1: "University, Location",
                text2: "Graphic Design",
            },
            {
                text1: "University, Location",
                text2: "UI/UX Design",
            },
        ],
    },
    {
        id: "4",
        Icon: < FontAwesomeIcon icon = {
            faCertificate
        }
        />,
        colorCode: '#680094',
        title: "CERTIFICATIONS",
        listItem: [{
                text1: "Name of Certification",
                text2: "Expertise | Issued by",
            },
            {
                text1: "Name of Certification",
                text2: "Expertise | Issued by",
            },
            {
                text1: "Name of Certification",
                text2: "Expertise | Issued by",
            },
        ],
    },
    {
        id: "5",
        Icon: < FontAwesomeIcon icon = {
            faTrophy
        }
        />,
        colorCode: '#0ea1fe',
        title: "ACHIEVEMENTS",
        listItem: [{
                text1: "University, Location",
                text2: "Multimedia",
            },
            {
                text1: "University, Location",
                text2: "Graphic Design",
            },
            {
                text1: "University, Location",
                text2: "UI/UX Design",
            },
        ],
    },
];

export default AllInfoLists;