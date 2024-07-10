let graphData = [
    {
        data: {
            id: "central_complex",
            label: "",
        },
        classes: ["complex", "primary-complex", "red-edge"],
        position: {
            x: 470,
            y: 335,
        },
    },
    {
        data: {
            id: "PTPRD",
            label: "PTPRD",
            parent: "central_complex",
        },
        position: {
            x: 405,
            y: 312,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "T178B",
            label: "T178B",
            parent: "central_complex",
        },
        position: {
            x: 470,
            y: 300,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "PTPRS",
            label: "PTPRS",
            parent: "central_complex",
        },
        position: {
            x: 535,
            y: 312,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "NRX1",
            label: "NRX1",
            parent: "central_complex",
        },
        position: {
            x: 405,
            y: 358,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "NRX2",
            label: "NRX2",
            parent: "central_complex",
        },
        position: {
            x: 470,
            y: 370,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "NRX3",
            label: "NRX3",
            parent: "central_complex",
        },
        position: {
            x: 535,
            y: 358,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "LIN7B",
            label: "LIN7B",
        },
        position: {
            x: 525,
            y: 250,
        },
        classes: [],
    },
    {
        data: {
            id: "C1QL3",
            label: "C1QL3",
        },
        position: {
            x: 600,
            y: 415,
        },
        classes: [],
    },
    {
        data: {
            id: "XKR6",
            label: "XKR6",
        },
        position: {
            x: 620,
            y: 375,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "CAH10",
            label: "CAH10",
        },
        position: {
            x: 636,
            y: 473,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "NXPH1",
            label: "NXPH1",
        },
        position: {
            x: 555,
            y: 475,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "CBLN",
            label: "CBLN\n1/2",
        },
        position: {
            x: 720,
            y: 440,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "Cav2",
            label: "Cav2",
        },
        position: {
            x: 687,
            y: 365,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "KCMA1",
            label: "KCMA1",
        },
        position: {
            x: 760,
            y: 351,
        },
        classes: [],
    },
    {
        data: {
            id: "Glu_Gly_receptors",
            label: "Metabotropic\nGlutamate/Glycine\nreceptors",
        },
        classes: ["complex", "secondary-complex"],
        position: {
            x: 841,
            y: 297.5,
        },
    },
    {
        data: {
            id: "GRM4",
            label: "GRM4",
            parent: "Glu_Gly_receptors",
        },
        position: {
            x: 830,
            y: 325,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "MGLYR",
            label: "MGLYR",
            parent: "Glu_Gly_receptors",
        },
        position: {
            x: 895,
            y: 295,
        },
        classes: [],
    },
    {
        data: {
            id: "RGS7",
            label: "RGS7",
            parent: "Glu_Gly_receptors",
        },
        position: {
            x: 862,
            y: 270,
        },
        classes: [],
    },
    {
        data: {
            id: "CSKP",
            label: "CSKP",
        },
        position: {
            x: 610,
            y: 235,
        },
        classes: [],
    },
    {
        data: {
            id: "LIPA",
            label: "LIPA2/3",
        },
        position: {
            x: 610,
            y: 275,
        },
        classes: [],
    },
    {
        data: {
            id: "LRC4B",
            label: "LRC4B",
        },
        position: {
            x: 498,
            y: 585,
        },
        classes: [],
    },
    {
        data: {
            id: "LRRT",
            label: "LRRT\n1/2/3",
        },
        position: {
            x: 438,
            y: 585,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "LRFN",
            label: "LRFNs",
        },
        position: {
            x: 557,
            y: 585,
        },
        classes: [],
    },
    {
        data: {
            id: "gaba_receptors",
            label: "GABAA-receptors",
        },
        classes: ["complex", "secondary-complex", "red-edge"],
        position: {
            x: 592.5,
            y: 582.5,
        },
    },
    {
        data: {
            id: "NLGN2",
            label: "NLGN2",
            parent: "gaba_receptors",
        },
        position: {
            x: 625,
            y: 580,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "NLGN3",
            label: "NLGN3",
            parent: "gaba_receptors",
        },
        position: {
            x: 660,
            y: 550,
        },
        classes: ["primary-node", "black-edge"],
    },
    {
        data: {
            id: "NLGN4",
            label: "NLGN4",
            parent: "gaba_receptors",
        },
        position: {
            x: 725,
            y: 545,
        },
        classes: [],
    },
    {
        data: {
            id: "NLGN1",
            label: "NLGN1",
            parent: "gaba_receptors",
        },
        position: {
            x: 750,
            y: 580,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "GBRA/G",
            label: "GBRA/G",
            parent: "gaba_receptors",
        },
        position: {
            x: 690,
            y: 605,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "LHPL",
            label: "LHPL\n3/4",
            parent: "gaba_receptors",
        },
        position: {
            x: 640,
            y: 620,
        },
        classes: [],
    },
    {
        data: {
            id: "gly_receptors",
            label: "Glycine-receptors",
        },
        classes: ["complex", "secondary-complex"],
        position: {
            x: 845,
            y: 590,
        },
    },
    {
        data: {
            id: "GLRA1",
            label: "GLRA1",
            parent: "gly_receptors",
        },
        position: {
            x: 845,
            y: 582,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "glu_receptors",
            label: "Glutamate receptors",
        },
        classes: ["complex", "secondary-complex"],
        position: {
            x: 272.5,
            y: 576.25,
        },
    },
    {
        data: {
            id: "ampa_type_glu_receptors",
            label: "AMPA-type",
            parent: "glu_receptors",
        },
        classes: ["complex", "tertiary-complex"],
        position: {
            x: 322.5,
            y: 570,
        },
    },
    {
        data: {
            id: "kainate_type_glu_receptors",
            label: "Kainate-type",
            parent: "glu_receptors",
        },
        classes: ["complex", "tertiary-complex"],
        position: {
            x: 202.5,
            y: 590,
        },
    },
    {
        data: {
            id: "LRRT4",
            label: "LRRT4",
            parent: "ampa_type_glu_receptors",
        },
        position: {
            x: 370,
            y: 570,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "NOE1",
            label: "NOE1",
            parent: "ampa_type_glu_receptors",
        },
        position: {
            x: 315,
            y: 545,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "GSG1L",
            label: "GSG1L",
            parent: "ampa_type_glu_receptors",
        },
        position: {
            x: 320,
            y: 595,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "PRRT1",
            label: "PRRT1",
            parent: "kainate_type_glu_receptors",
        },
        position: {
            x: 210,
            y: 595,
        },
        classes: [],
    },
    {
        data: {
            id: "GRIA",
            label: "GRIA",
            parent: "ampa_type_glu_receptors",
        },
        position: {
            x: 265,
            y: 585,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "GRIK2",
            label: "GRIK2",
            parent: "kainate_type_glu_receptors",
        },
        position: {
            x: 140,
            y: 600,
        },
        classes: [],
    },
    {
        data: {
            id: "CAH10_2",
            label: "CAH10",
        },
        position: {
            x: 350,
            y: 440,
        },
        classes: ["primary-node", "black-edge"],
    },
    {
        data: {
            id: "NXPH3",
            label: "NXPH3",
        },
        position: {
            x: 265,
            y: 465,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "BRNP",
            label: "BRNP\n1/2",
        },
        position: {
            x: 200,
            y: 445,
        },
        classes: [],
    },
    {
        data: {
            id: "TAFA1",
            label: "TAFA1",
        },
        position: {
            x: 160,
            y: 415,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "XKR4",
            label: "XKR4",
        },
        position: {
            x: 260,
            y: 365,
        },
        classes: [],
    },
    {
        data: {
            id: "NEGR1",
            label: "NEGR1",
        },
        position: {
            x: 200,
            y: 340,
        },
        classes: [],
    },
    {
        data: {
            id: "ASTN1",
            label: "ASTN1",
        },
        position: {
            x: 150,
            y: 285,
        },
        classes: [],
    },
    {
        data: {
            id: "UNC5A",
            label: "UNC5A",
        },
        position: {
            x: 167,
            y: 245,
        },
        classes: [],
    },
    {
        data: {
            id: "RTN4R",
            label: "RTN4R",
        },
        position: {
            x: 210,
            y: 201,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "R4RL1",
            label: "R4RL1",
        },
        position: {
            x: 240,
            y: 175,
        },
        classes: [],
    },
    {
        data: {
            id: "ITM2B",
            label: "ITM2B",
        },
        position: {
            x: 305,
            y: 145,
        },
        classes: [],
    },
    {
        data: {
            id: "A4",
            label: "A4",
        },
        position: {
            x: 323,
            y: 116,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "APLP2",
            label: "APLP2",
        },
        position: {
            x: 333,
            y: 87,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "SYT11",
            label: "SYT11",
        },
        position: {
            x: 450,
            y: 130,
        },
        classes: ["primary-node"],
    },
    {
        data: {
            id: "T132A",
            label: "T132A",
        },
        position: {
            x: 495,
            y: 175,
        },
        classes: [],
    },
    {
        data: {
            id: "NSG",
            label: "NSG1/2",
        },
        position: {
            x: 420,
            y: 200,
        },
        classes: [],
    },
    {
        data: {
            id: "central_complex-CAH10_2",
            source: "central_complex",
            target: "CAH10_2",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "PTPRD-NRX1",
            source: "PTPRD",
            target: "NRX1",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "PTPRD-NRX2",
            source: "PTPRD",
            target: "NRX2",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "PTPRD-NRX3",
            source: "PTPRD",
            target: "NRX3",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "T178B-NRX1",
            source: "T178B",
            target: "NRX1",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "T178B-NRX2",
            source: "T178B",
            target: "NRX2",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "T178B-NRX3",
            source: "T178B",
            target: "NRX3",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "PTPRS-NRX1",
            source: "PTPRS",
            target: "NRX1",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "PTPRS-NRX2",
            source: "PTPRS",
            target: "NRX2",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "PTPRS-NRX3",
            source: "PTPRS",
            target: "NRX3",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "T178B-PTPRS",
            source: "T178B",
            target: "PTPRS",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "T178B-PTPRD",
            source: "T178B",
            target: "PTPRD",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "LIN7B-central_complex",
            source: "LIN7B",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "C1QL3-central_complex",
            source: "C1QL3",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "C1QL3-XKR6",
            source: "C1QL3",
            target: "XKR6",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "XKR6-central_complex",
            source: "XKR6",
            target: "central_complex",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "XKR6-CBLN",
            source: "XKR6",
            target: "CBLN",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "XKR6-CAH10",
            source: "XKR6",
            target: "CAH10",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "CAH10-central_complex",
            source: "CAH10",
            target: "central_complex",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "CAH10-CBLN",
            source: "CAH10",
            target: "CBLN",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "CAH10-NXPH1",
            source: "CAH10",
            target: "NXPH1",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "CBLN-central_complex",
            source: "CBLN",
            target: "central_complex",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "CBLN-GRM4",
            source: "CBLN",
            target: "GRM4",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "central_complex-KCMA1",
            source: "central_complex",
            target: "KCMA1",
            label: "",
        },
        classes: ["primary-edge"],
    },
    {
        data: {
            id: "KCMA1-Cav2",
            source: "KCMA1",
            target: "Cav2",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "KCMA1-CAH10",
            source: "KCMA1",
            target: "CAH10",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "NXPH1-central_complex",
            source: "NXPH1",
            target: "central_complex",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "NXPH1-CAH10",
            source: "NXPH1",
            target: "CAH10",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "Cav2-central_complex",
            source: "Cav2",
            target: "central_complex",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "GRM4-central_complex",
            source: "GRM4",
            target: "central_complex",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "MGLYR-central_complex",
            source: "MGLYR",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "MGLYR-RGS7",
            source: "MGLYR",
            target: "RGS7",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "LIPA-central_complex",
            source: "LIPA",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "CSKP-central_complex",
            source: "CSKP",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "CSKP-GRM4",
            source: "CSKP",
            target: "GRM4",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "LRRT-central_complex",
            source: "LRRT",
            target: "central_complex",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "LRC4B-central_complex",
            source: "LRC4B",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "LRFN-central_complex",
            source: "LRFN",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "gaba_receptors-central_complex",
            source: "gaba_receptors",
            target: "central_complex",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "NLGN2-GBRA/G",
            source: "NLGN2",
            target: "GBRA/G",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "NLGN3-NLGN2",
            source: "NLGN3",
            target: "NLGN2",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "NLGN3-NLGN1",
            source: "NLGN3",
            target: "NLGN1",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "NLGN4-NLGN1",
            source: "NLGN4",
            target: "NLGN1",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "NLGN4-GBRA/G",
            source: "NLGN4",
            target: "GBRA/G",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "NLGN1-GBRA/G",
            source: "NLGN1",
            target: "GBRA/G",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "GBRA/G-NLGN3",
            source: "GBRA/G",
            target: "NLGN3",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "GBRA/G-LHPL",
            source: "GBRA/G",
            target: "LHPL",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "GLRA1-NLGN1",
            source: "GLRA1",
            target: "NLGN1",
            label: "",
        },
        classes: ["primary-edge"],
    },
    {
        data: {
            id: "GLRA1-CAH10",
            source: "GLRA1",
            target: "CAH10",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "LRRT4-central_complex",
            source: "LRRT4",
            target: "central_complex",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "LRRT4-GSG1L",
            source: "LRRT4",
            target: "GSG1L",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "NOE1-central_complex",
            source: "NOE1",
            target: "central_complex",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "NOE1-GRIA",
            source: "NOE1",
            target: "GRIA",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "NOE1-CAH10_2",
            source: "NOE1",
            target: "CAH10_2",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "GRIA-GSG1L",
            source: "GRIA",
            target: "GSG1L",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "GRIA-PRRT1",
            source: "GRIA",
            target: "PRRT1",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "GRIK2-NXPH3",
            source: "GRIK2",
            target: "NXPH3",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "NXPH3-central_complex",
            source: "NXPH3",
            target: "central_complex",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "NXPH3-CAH10_2",
            source: "NXPH3",
            target: "CAH10_2",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "CAH10_2-LRRT",
            source: "CAH10_2",
            target: "LRRT",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "BRNP-central_complex",
            source: "BRNP",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "BRNP-TAFA1",
            source: "BRNP",
            target: "TAFA1",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "TAFA1-central_complex",
            source: "TAFA1",
            target: "central_complex",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "NEGR1-central_complex",
            source: "NEGR1",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "XKR4-central_complex",
            source: "XKR4",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "NEGR1-NXPH3",
            source: "NEGR1",
            target: "NXPH3",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "NEGR1-RTN4R",
            source: "NEGR1",
            target: "RTN4R",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "ASTN1-central_complex",
            source: "ASTN1",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "ASTN1-TAFA1",
            source: "ASTN1",
            target: "TAFA1",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "UNC5A-central_complex",
            source: "UNC5A",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "RTN4R-central_complex",
            source: "RTN4R",
            target: "central_complex",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "RTN4R-R4RL1",
            source: "RTN4R",
            target: "R4RL1",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "R4RL1-central_complex",
            source: "R4RL1",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "ITM2B-central_complex",
            source: "ITM2B",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "A4-central_complex",
            source: "A4",
            target: "central_complex",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "A4-SYT11",
            source: "A4",
            target: "SYT11",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "A4-APLP2",
            source: "A4",
            target: "APLP2",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "A4-ITM2B",
            source: "A4",
            target: "ITM2B",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "APLP2-SYT11",
            source: "APLP2",
            target: "SYT11",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "SYT11-central_complex",
            source: "SYT11",
            target: "central_complex",
            label: "",
        },
        classes: "primary-edge",
    },
    {
        data: {
            id: "T132A-central_complex",
            source: "T132A",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "T132A-SYT11",
            source: "T132A",
            target: "SYT11",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "NSG-central_complex",
            source: "NSG",
            target: "central_complex",
            label: "",
        },
        classes: [],
    },
    {
        data: {
            id: "NSG-A4",
            source: "NSG",
            target: "A4",
            label: "",
        },
        classes: [],
    },
];
