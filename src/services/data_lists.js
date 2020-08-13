import React from "react";
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
    faMobileAlt,
    faEnvelope,
    faMapMarkedAlt,
    faGlobe,
    faAddressCard,
    faLanguage,
    faPalette,
} from "@fortawesome/free-solid-svg-icons";

const AllDataLists = [{
        id: "1",
        Icon: < FontAwesomeIcon icon = {
            faAddressCard
        }
        />,
        title: "CONTACT",
        listItem: [{
                img: < FontAwesomeIcon icon = {
                    faMobileAlt
                }
                />,
                text: "09 123456789",
            },
            {
                img: < FontAwesomeIcon icon = {
                    faEnvelope
                }
                />,
                text: "example@example.com",
            },
            {
                img: < FontAwesomeIcon icon = {
                    faMapMarkedAlt
                }
                />,
                text: "No.20, New Yay Thar Shay Street, Bahan Township, Yangon.",
            },
            {
                img: < FontAwesomeIcon icon = {
                    faGlobe
                }
                />,
                text: "www.google.com",
            },
        ],
    },
    {
        id: "2",
        Icon: < FontAwesomeIcon icon = {
            faLanguage
        }
        />,
        title: "LANGUAGE",
        listItem: [{
                text: "Native",
            },
            {
                text: "Conversational",
            },
            {
                text: "Basic",
            },
        ],
    },
    {
        id: "3",
        Icon: < FontAwesomeIcon icon = {
            faPalette
        }
        />,
        title: "HOBBIES",
        listItem: [{
                text: "Your Hobby Here",
            },
            {
                text: "Your Hobby Here",
            },
            {
                text: "Your Hobby Here",
            },
            {
                text: "Your Hobby Here",
            },
            {
                text: "Your Hobby Here",
            },
            {
                text: "Your Hobby Here",
            },
        ],
    },
];

export default AllDataLists;