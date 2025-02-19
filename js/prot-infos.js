let protInfos = {
    GRIA: {
        graph_id: ["GRIA"],
        protein_id: ["GRIA1", "GRIA2", "GRIA3"],
        accession: ["P23818", "P23819", "Q9Z2W9"],
        description: [
            "Glutamate (AMPA-type) receptor 1, GluA1, 2, GluA2, 3, GluA3",
        ],
        gene_name: ["Gria1", "Gria2", "Gria3"],
        function: ["ion channel"],
        "mass_(kda)": [102, 99, 101],
        reference: [
            "Cull-Candy S et al. Curr Opin Neurobiol 2006;16(3):288\u201397.",
            "data published in Schwenk et al. 2012 (PMID: 22632720)",
        ],
    },
    CBLN: {
        graph_id: ["CBLN"],
        protein_id: ["CBLN1", "CBLN2"],
        accession: ["Q9R171", "Q8BGU2"],
        description: ["Cerebellin-1, 2"],
        gene_name: ["Cbln1", "Cbln2"],
        function: ["synaptic organizer"],
        "mass_(kda)": [21, 24],
        reference: [
            "Uemura T et al. Cell 2010;141(6):1068\u201379.",
            "TC. Curr Opin Neurobiol. 2023 Aug 1;81 ",
        ],
    },
    BRNP: {
        graph_id: ["BRNP"],
        protein_id: ["BRNP1", "BRNP2"],
        accession: ["Q920P3", "Q6DFY8"],
        description: [
            "BMP/retinoic acid-inducible neural-specific protein 1, 2",
        ],
        gene_name: ["Brinp1", "Brinp2"],
        function: ["neuronal development"],
        "mass_(kda)": [89, 89],
        reference: [
            "Terashima M et al. J Neurosci Res 2010;88(7):1387\u201393. ",
        ],
    },
    LRRT: {
        graph_id: ["LRRT"],
        protein_id: ["LRRT1", "LRRT2", "LRRT3"],
        accession: ["Q8K377", "Q8BGA3", "Q8BZ81"],
        description: [
            "Leucine-rich repeat transmembrane neuronal protein 1, 2, 3",
        ],
        gene_name: ["Lrrtm1", "Lrrtm2", "Lrrtm3"],
        function: ["cell adhesion"],
        "mass_(kda)": [59, 59, 66],
        reference: [
            "Soler-Llavina GJ et al. Neuron 2013;79(3):439\u201346.",
            "Um JW et al. Cell Rep 2016;14(4):808\u201322.",
        ],
    },
    LRFN: {
        graph_id: ["LRFN"],
        protein_id: ["LRFN1", "LRFN3"],
        accession: ["Q2WF71", "Q8BLY3"],
        description: [
            "Leucine-rich repeat and fibronectin type III domain-containing protein 1, 3",
        ],
        gene_name: ["Lrfn1", "Lrfn3"],
        function: ["cell adhesion"],
        "mass_(kda)": [82, 66],
        reference: ["Lie E et al. Front Mol Neurosci 2018;11:105."],
    },
    NRX1: {
        graph_id: ["NRX1"],
        protein_id: ["NRX1A", "NRX1B", "NRX1G"],
        accession: ["Q9CS84", "P0DI97", "Q9CS84-6"],
        description: ["Neurexin-1-alpha, -beta, -gamma"],
        gene_name: ["Nrxn1"],
        function: ["synaptic organizer"],
        "mass_(kda)": [166, 50, 15],
        reference: [
            "S\u00fcdhof TC. Cell. 2017;171(4):745\u201369.",
            "Sterky FH et al. Proc Natl Acad Sci U S A. 2017;114(7):E1253\u201362.",
        ],
    },
    NRX2: {
        graph_id: ["NRX2"],
        protein_id: ["NRX2A", "NRX2B"],
        accession: ["E9Q7X7", "E9PUN2"],
        description: ["Neurexin-2-alpha, -beta"],
        gene_name: ["Nrxn2"],
        function: ["synaptic organizer"],
        "mass_(kda)": [185, 70],
        reference: ["S\u00fcdhof TC. Cell. 2017;171(4):745\u201369."],
    },
    NRX3: {
        graph_id: ["NRX3"],
        protein_id: ["NRX3A", "NRX3B"],
        accession: ["Q6P9K9", "Q8C985"],
        description: ["Neurexin-3-alpha, -beta"],
        gene_name: ["Nrxn3"],
        function: ["synaptic organizer"],
        "mass_(kda)": [173, 62],
        reference: ["S\u00fcdhof TC. Cell. 2017;171(4):745\u201369."],
    },
    A4: {
        graph_id: ["A4"],
        protein_id: ["A4"],
        accession: ["P12023"],
        description: ["Amyloid-beta precursor protein, A4 protein"],
        gene_name: ["App"],
        function: ["axon growth"],
        "mass_(kda)": [87],
        reference: [
            "Aydin D et al. Exp brain Res. 2012;217(3\u20134):423\u201334.",
        ],
    },
    AGRB1: {
        graph_id: ["AGRB1"],
        protein_id: ["AGRB1"],
        accession: ["Q3UHD1"],
        description: ["Adhesion GPCR B1"],
        gene_name: ["Adgrb1"],
        function: ["adhesion GPCR"],
        "mass_(kda)": [173],
        reference: ["Wang J et al. Cell. 2021;184(24):5869-5885.e25."],
    },
    APLP2: {
        graph_id: ["APLP2"],
        protein_id: ["APLP2"],
        accession: ["Q06335"],
        description: ["Amyloid beta precursor like protein 2"],
        gene_name: ["Aplp2"],
        function: ["axon growth"],
        "mass_(kda)": [80],
        reference: [
            "Aydin D et al. Exp brain Res. 2012;217(3\u20134):423\u201334.",
        ],
    },
    ASTN1: {
        graph_id: ["ASTN1"],
        protein_id: ["ASTN1"],
        accession: ["Q61137"],
        description: ["Astrotactin-1"],
        gene_name: ["Astn1"],
        function: ["surface receptor"],
        "mass_(kda)": [145],
        reference: ["Fishell G et al. Development 1991; 113(3):755\u201365."],
    },
    ASTRB: {
        graph_id: ["ASTRB"],
        protein_id: ["ASTRB"],
        accession: ["Q80TI0"],
        description: ["Protein Aster-B"],
        gene_name: ["Gramd1b"],
        function: ["transporter"],
        "mass_(kda)": [85],
        reference: ["Sandhu J et al. Cell 2018 ;175(2):514-529.e20."],
    },
    CADM3: {
        graph_id: ["CADM3"],
        protein_id: ["CADM3"],
        accession: ["Q99N28"],
        description: ["Cell adhesion molecule 3"],
        gene_name: ["Cadm3"],
        function: ["cell adhesion"],
        "mass_(kda)": [43],
        reference: [
            "Frei JA, Stoeckli ET. Mol Cell Neurosci. 2017;81:41\u20138.",
        ],
    },
    CLUS: {
        graph_id: ["CLUS"],
        protein_id: ["CLUS"],
        accession: ["Q06890"],
        description: ["Clusterin"],
        gene_name: ["Clu"],
        function: ["cell adhesion"],
        "mass_(kda)": [52],
        reference: ["Silkensen JR et al. J Clin Invest 1995;96(6):2646."],
    },
    CNTN1: {
        graph_id: ["CNTN1"],
        protein_id: ["CNTN1"],
        accession: ["P12960"],
        description: ["Contactin-1"],
        gene_name: ["Cntn1"],
        function: ["cell adhesion"],
        "mass_(kda)": [113],
        reference: [
            "Dityatev A et al. Neuron Glia Biol 2008;4(3):197\u2013209.",
        ],
    },
    GRM4: {
        graph_id: ["GRM4"],
        protein_id: ["GRM4"],
        accession: ["Q68EF4"],
        description: ["Metabotropic glutamate receptor 4, mGluR4"],
        gene_name: ["Grm4"],
        function: ["GPCR"],
        "mass_(kda)": [101],
        reference: ["C et al. J Biol Chem. 2012;287(24):20176\u201386."],
    },
    GSLG1: {
        graph_id: ["GSLG1"],
        protein_id: ["GSLG1"],
        accession: ["Q61543"],
        description: ["Golgi apparatus protein 1"],
        gene_name: ["Glg1"],
        function: ["cell adhesion"],
        "mass_(kda)": [134],
        reference: ["Steegmaler M et al. Nature;373(6515):615\u201320."],
    },
    ITM2B: {
        graph_id: ["ITM2B"],
        protein_id: ["ITM2B"],
        accession: ["O89051"],
        description: ["Integral membrane protein 2B"],
        gene_name: ["Itm2b"],
        function: ["unknown(modulator of APP processing)"],
        "mass_(kda)": [30],
        reference: ["Matsuda S et al. J Biol Chem. 2005;280(32):28912\u20136."],
    },
    ITM2C: {
        graph_id: ["ITM2C"],
        protein_id: ["ITM2C"],
        accession: ["Q91VK4"],
        description: ["Integral membrane protein 2C"],
        gene_name: ["Itm2c"],
        function: ["unknown(modulator of APP processing)"],
        "mass_(kda)": [30],
        reference: ["Dinamarca MC et al. Nat Commun. 2019;10(1)."],
    },
    KCJ10: {
        graph_id: ["KCJ10"],
        protein_id: ["KCJ10"],
        accession: ["Q9JM63"],
        description: ["Inward rectifier potassium channel 10, Kir4.1"],
        gene_name: ["Kcnj10"],
        function: ["ion channel"],
        "mass_(kda)": [43],
        reference: ["Nwaobi SE et al. Acta Neuropathol 2016;132(1)."],
    },
    KCMA1: {
        graph_id: ["KCMA1"],
        protein_id: ["KCMA1"],
        accession: ["Q08460"],
        description: ["Ca2+-activated K+ channel alpha; BKCa"],
        gene_name: ["Kcnma1"],
        function: ["ion channel"],
        "mass_(kda)": [134],
        reference: ["Griguoli M et al. J Physiol. 2016;594(13):3489\u2013500."],
    },
    LRC4B: {
        graph_id: ["LRC4B"],
        protein_id: ["LRC4B"],
        accession: ["P0C192"],
        description: ["Leucine-rich repeat-containing protein 4B"],
        gene_name: ["Lrrc4b"],
        function: ["cell adhesion"],
        "mass_(kda)": [76],
        reference: ["Woo J et al. Nat Neurosci. 2009 Apr;12(4):428\u201337."],
    },
    MGLYR: {
        graph_id: ["MGLYR"],
        protein_id: ["MGLYR"],
        accession: ["Q8C419"],
        description: ["Metabotropic glycine receptor, mGlyR, GPCR 158"],
        gene_name: ["Gpr158"],
        function: ["GPCR"],
        "mass_(kda)": [134],
        reference: ["Laboute T et al. Science 2023;379(6639):1352\u20138."],
    },
    NSG2: {
        graph_id: ["NSG2"],
        protein_id: ["NSG2"],
        accession: ["P47759"],
        description: ["Neuronal vesicle trafficking-associated protein 2"],
        gene_name: ["Nsg2"],
        function: ["vesicle transport "],
        "mass_(kda)": [19],
        reference: ["Debaigt C et al. J Biol Chem 2004;279(34):35687\u201391."],
    },
    PCDH1: {
        graph_id: ["PCDH1"],
        protein_id: ["PCDH1"],
        accession: ["Q08174"],
        description: ["Protocadherin-1"],
        gene_name: ["PCDH1"],
        function: ["axon growth"],
        "mass_(kda)": [115],
        reference: ["Lu WC et al. Neural Regen Res 2018;13(3):427\u201333."],
    },
    PRRT1: {
        graph_id: ["PRRT1"],
        protein_id: ["PRRT1"],
        accession: ["O35449"],
        description: ["Proline-rich transmembrane protein 1"],
        gene_name: ["Prrt1"],
        function: ["synaptic plasticity"],
        "mass_(kda)": [31],
        reference: ["Matt L et al. Cell Rep. 2018;22(9):2246\u201353."],
    },
    R4RL1: {
        graph_id: ["R4RL1"],
        protein_id: ["R4RL1"],
        accession: ["Q8K0S5"],
        description: ["Reticulon-4 receptor-like 1"],
        gene_name: ["Rtn4rl1"],
        function: ["axon guidance"],
        "mass_(kda)": [50],
        reference: ["Yoo SW et al. J Comp Neurol 2017;525(2):291\u2013301."],
    },
    RGS7: {
        graph_id: ["RGS7"],
        protein_id: ["RGS7"],
        accession: ["O54829"],
        description: ["Regulator of G-protein signaling 7"],
        gene_name: ["Rgs7"],
        function: ["GPCR"],
        "mass_(kda)": [55],
        reference: ["Laboute T et al. Science 2023;379(6639):1352\u20138."],
    },
    RTN4R: {
        graph_id: ["RTN4R"],
        protein_id: ["RTN4R"],
        accession: ["Q99PI8"],
        description: ["Reticulon-4 receptor, NoGo-receptor"],
        gene_name: ["Rtn4r"],
        function: ["axon guidance"],
        "mass_(kda)": [51],
        reference: ["Yoo SW et al. J Comp Neurol 2017;525(2):291\u2013301."],
    },
    SLIT1: {
        graph_id: ["SLIT1"],
        protein_id: ["SLIT1"],
        accession: ["Q80TR4"],
        description: ["Slit homolog 1 protein"],
        gene_name: ["Slit1"],
        function: ["axon guidance"],
        "mass_(kda)": [167],
        reference: [
            "Nguyen-Ba-Charvet KT, Ch\u00e9dotal A. J Physiol Paris 2002;96(1\u20132):91\u20138.",
        ],
    },
    SLIT2: {
        graph_id: ["SLIT2"],
        protein_id: ["SLIT2"],
        accession: ["Q9R1B9"],
        description: ["Slit homolog 2 protein"],
        gene_name: ["Slit2"],
        function: ["axon guidance"],
        "mass_(kda)": [169],
        reference: [
            "Nguyen-Ba-Charvet KT, Ch\u00e9dotal A. J Physiol Paris 2002;96(1\u20132):91\u20138.",
        ],
    },
    SLIT3: {
        graph_id: ["SLIT3"],
        protein_id: ["SLIT3"],
        accession: ["Q9WVB4"],
        description: ["Slit homolog 3 protein"],
        gene_name: ["Slit3"],
        function: ["axon guidance"],
        "mass_(kda)": [168],
        reference: [
            "Nguyen-Ba-Charvet KT, Ch\u00e9dotal A. J Physiol Paris 2002;96(1\u20132):91\u20138.",
        ],
    },
    SO3A1: {
        graph_id: ["SO3A1"],
        protein_id: ["SO3A1"],
        accession: ["Q8R3L5"],
        description: [
            "Solute carrier organic anion transporter family member 3A1",
        ],
        gene_name: ["Slco3a1"],
        function: ["transporter"],
        "mass_(kda)": [77],
        reference: ["Pan Q et al. Gastroenterology 2018;155(5):1578-1592.e16."],
    },
    T132A: {
        graph_id: ["T132A"],
        protein_id: ["T132A"],
        accession: ["Q922P8"],
        description: ["Transmembrane protein 132A"],
        gene_name: ["Tmem132a"],
        function: ["unknown"],
        "mass_(kda)": [110],
        reference: ["Li B et al. Development 2022;149(17)."],
    },
    T178A: {
        graph_id: ["T178A"],
        protein_id: ["T178A"],
        accession: ["Q9CZ16"],
        description: ["Transmembrane protein 178A"],
        gene_name: ["Tmem178a"],
        function: ["unknown"],
        "mass_(kda)": [33],
    },
    T178B: {
        graph_id: ["T178B"],
        protein_id: ["T178B"],
        accession: ["H3BS89"],
        description: ["Transmembrane protein 178B"],
        gene_name: ["Tmem178b"],
        function: ["unknown"],
        "mass_(kda)": [33],
    },
    TRPV2: {
        graph_id: ["TRPV2"],
        protein_id: ["TRPV2"],
        accession: ["Q9WTR1"],
        description: ["Transient receptor potential channel TRPV2"],
        gene_name: ["Trpv2"],
        function: ["ion channel"],
        "mass_(kda)": [86],
        reference: [
            "Kojima I, Nagasawa M. Handb Exp Pharmacol 2014;222:247\u201372.",
        ],
    },
    VWA8: {
        graph_id: ["VWA8"],
        protein_id: ["VWA8"],
        accession: ["Q8CC88"],
        description: ["von Willebrand factor A domain-containing protein 8"],
        gene_name: ["Vwa8"],
        function: ["unknown"],
        "mass_(kda)": [213],
    },
    XKR4: {
        graph_id: ["XKR4"],
        protein_id: ["XKR4"],
        accession: ["Q5GH67"],
        description: ["XK-related protein 4"],
        gene_name: ["Xkr4"],
        function: ["scramblase "],
        "mass_(kda)": [72],
        reference: ["Suzuki J et al. J Biol Chem 2014;289(44):30257\u201367."],
    },
    XKR6: {
        graph_id: ["XKR6"],
        protein_id: ["XKR6"],
        accession: ["E9Q6C8"],
        description: ["XK-related protein 6"],
        gene_name: ["Xkr6"],
        function: ["unknown"],
        "mass_(kda)": [71],
    },
    C1QL3: {
        graph_id: ["C1QL3"],
        protein_id: ["C1QL3"],
        accession: ["Q9ESN4"],
        description: ["Complement C1q-like protein 3"],
        gene_name: ["C1ql3"],
        function: ["synaptic organizer"],
        "mass_(kda)": [27],
        reference: ["Matsuda K et al. Neuron 2016;90(4):752\u201367."],
    },
    CAH10: {
        graph_id: ["CAH10"],
        protein_id: ["CAH10"],
        accession: ["P61215"],
        description: ["Carbonic anhydrase-related protein 10"],
        gene_name: ["Ca10"],
        function: ["cell adhesion"],
        "mass_(kda)": [38],
        reference: [
            "Sterky FH et al. Proc Natl Acad Sci U S A. 2017;114(7):E1253\u201362.",
        ],
    },
    CAH11: {
        graph_id: ["CAH11"],
        protein_id: ["CAH11"],
        accession: ["O70354"],
        description: ["Carbonic anhydrase-related protein 11"],
        gene_name: ["Ca11"],
        function: ["cell adhesion"],
        "mass_(kda)": [36],
        reference: [
            "Sterky FH et al. Proc Natl Acad Sci U S A. 2017;114(7):E1253\u201362.",
        ],
    },
    CALR: {
        graph_id: ["CALR"],
        protein_id: ["CALR"],
        accession: ["P14211"],
        description: ["Calreticulin"],
        gene_name: ["Calr"],
        function: ["protein folding"],
        "mass_(kda)": [48],
        reference: ["Michalak M. J Cell Mol Med. 2024;28(5)."],
    },
    CBLN3: {
        graph_id: ["CBLN3"],
        protein_id: ["CBLN3"],
        accession: ["Q9JHG0"],
        description: ["Cerebellin-3"],
        gene_name: ["Cbln3"],
        function: ["synaptic organizer"],
        "mass_(kda)": [21],
        reference: ["TC. Curr Opin Neurobiol. 2023 Aug 1;81 "],
    },
    CBLN4: {
        graph_id: ["CBLN4"],
        protein_id: ["CBLN4"],
        accession: ["Q8BME9"],
        description: ["Cerebellin-4"],
        gene_name: ["Cbln4"],
        function: ["synaptic organizer"],
        "mass_(kda)": [22],
        reference: ["TC. Curr Opin Neurobiol. 2023 Aug 1;81 "],
    },
    LRRT4: {
        graph_id: ["LRRT4"],
        protein_id: ["LRRT4"],
        accession: ["Q80XG9"],
        description: ["Leucine-rich repeat transmembrane neuronal protein 4"],
        gene_name: ["Lrrtm4"],
        function: ["cell adhesion"],
        "mass_(kda)": [67],
        reference: ["DeWit J et al. Neuron 2013;79(4):696\u2013711."],
    },
    NLGN1: {
        graph_id: ["NLGN1"],
        protein_id: ["NLGN1"],
        accession: ["Q99K10"],
        description: ["Neuroligin-1"],
        gene_name: ["Nlgn1"],
        function: ["cell adhesion"],
        "mass_(kda)": [94],
        reference: ["Varoqueaux F et al. Neuron 2006;51(6):741\u201354."],
    },
    NLGN2: {
        graph_id: ["NLGN2"],
        protein_id: ["NLGN2"],
        accession: ["Q69ZK9"],
        description: ["Neuroligin-2\u00a0"],
        gene_name: ["Nlgn2"],
        function: ["cell adhesion"],
        "mass_(kda)": [91],
        reference: ["Varoqueaux F et al. Neuron 2006;51(6):741\u201354."],
    },
    NLGN3: {
        graph_id: ["NLGN3"],
        protein_id: ["NLGN3"],
        accession: ["Q8BYM5"],
        description: ["Neuroligin-3"],
        gene_name: ["Nlgn3"],
        function: ["cell adhesion"],
        "mass_(kda)": [91],
        reference: ["Varoqueaux F et al. Neuron 2006;51(6):741\u201354."],
    },
    NXPH1: {
        graph_id: ["NXPH1"],
        protein_id: ["NXPH1"],
        accession: ["Q61200"],
        description: ["Neurexophilin-1"],
        gene_name: ["Nxph1"],
        function: ["cell adhesion"],
        "mass_(kda)": [31],
        reference: ["Missler M et al. J Biol Chem 1998;273(52):34716\u201323."],
    },
    NXPH3: {
        graph_id: ["NXPH3"],
        protein_id: ["NXPH3"],
        accession: ["Q91VX5"],
        description: ["Neurexophilin-3"],
        gene_name: ["Nxph3"],
        function: ["cell adhesion"],
        "mass_(kda)": [28],
        reference: ["Missler M et al. J Biol Chem 1998;273(52):34716\u201323."],
    },
    NXPH4: {
        graph_id: ["NXPH4"],
        protein_id: ["NXPH4"],
        accession: ["O95158"],
        description: ["Neurexophilin-4"],
        gene_name: ["NXPH4"],
        function: ["cell adhesion"],
        "mass_(kda)": [33],
        reference: ["Missler M et al. J Biol Chem 1998;273(52):34716\u201323."],
    },
    PTPRD: {
        graph_id: ["PTPRD"],
        protein_id: ["PTPRD"],
        accession: ["Q64487"],
        description: ["Receptor-type tyrosine-protein phosphatase D"],
        gene_name: ["Ptprd"],
        function: ["synaptic organizer"],
        "mass_(kda)": [214],
        reference: ["Cornejo Fet al. Front cell Dev Biol 2021;9."],
    },
    PTPRF: {
        graph_id: ["PTPRF"],
        protein_id: ["PTPRF"],
        accession: ["A2A8L5"],
        description: ["Receptor-type tyrosine-protein phosphatase F"],
        gene_name: ["Ptprf"],
        function: ["synaptic organizer"],
        "mass_(kda)": [211],
        reference: ["Cornejo Fet al. Front cell Dev Biol 2021;9."],
    },
    PTPRS: {
        graph_id: ["PTPRS"],
        protein_id: ["PTPRS"],
        accession: ["B0V2N1"],
        description: ["Receptor-type tyrosine-protein phosphatase S"],
        gene_name: ["Ptprs"],
        function: ["synaptic organizer"],
        "mass_(kda)": [212],
        reference: ["Cornejo Fet al. Front cell Dev Biol 2021;9."],
    },
    SYT11: {
        graph_id: ["SYT11"],
        protein_id: ["SYT11"],
        accession: ["Q9R0N3"],
        description: ["Synaptotagmin-11"],
        gene_name: ["Syt11"],
        function: ["vesicle protein"],
        "mass_(kda)": [48],
        reference: [
            "L et al EMBO Rep 2024 (in press)",
            "data published in Trovo et al. 2024 (PMID: 38698221)",
        ],
    },
    TAFA1: {
        graph_id: ["TAFA1"],
        protein_id: ["TAFA1"],
        accession: ["Q7TPG8"],
        description: ["Chemokine-like protein TAFA-1, FAM19A"],
        gene_name: ["Tafa1"],
        function: ["cell adhesion"],
        "mass_(kda)": [15],
        reference: ["Khalaj AJ et al. J Cell Biol. 2020;219(9)."],
    },
    TAFA2: {
        graph_id: ["TAFA2"],
        protein_id: ["TAFA2"],
        accession: ["Q7TPG7"],
        description: ["Chemokine-like protein TAFA-2, FAM19B"],
        gene_name: ["Tafa2"],
        function: ["cell adhesion"],
        "mass_(kda)": [15],
        reference: ["Khalaj AJ et al. J Cell Biol. 2020;219(9)."],
    },
    LIN7B: {
        graph_id: ["LIN7B"],
        protein_id: ["LIN7B"],
        accession: ["O88951"],
        description: ["Protein lin-7 homolog B"],
        gene_name: ["Lin7b"],
        "mass_(kda)": [23],
    },
    CSKP: {
        graph_id: ["CSKP"],
        protein_id: ["CSKP"],
        accession: ["O70589"],
        description: ["Peripheral plasma membrane protein CASK"],
        gene_name: ["Cask"],
        "mass_(kda)": [105],
    },
    LIPA: {
        graph_id: ["LIPA"],
        protein_id: ["LIPA2", "LIPA3"],
        accession: ["Q8BSS9", "P60469"],
        description: ["Liprin-alpha-2", "Liprin-alpha-3"],
        gene_name: ["Ppfia2", "Ppfia3"],
        "mass_(kda)": [143, 133],
    },
    UN13B: {
        graph_id: ["UN13B"],
        protein_id: ["UN13B"],
        accession: ["Q9Z1N9"],
        description: ["Protein unc-13 homolog B"],
        gene_name: ["Unc13b"],
        "mass_(kda)": [182],
    },
    Cav2: {
        graph_id: ["Cav2"],
        protein_id: ["Cav2"],
        accession: ["Q9WVC3"],
        description: ["Caveolin-2"],
        gene_name: ["Cav2"],
        "mass_(kda)": [18],
    },
    GLRA1: {
        graph_id: ["GLRA1"],
        protein_id: ["GLRA1"],
        accession: ["Q64018"],
        description: ["Glycine receptor subunit alpha-1"],
        gene_name: ["Glra1"],
        "mass_(kda)": [53],
    },
    NLGN4: {
        graph_id: ["NLGN4"],
        protein_id: ["NLGN4"],
        accession: ["B0F2B4"],
        description: ["Neuroligin 4-like"],
        gene_name: ["Nlgn4l"],
        "mass_(kda)": [97],
    },
    "GBRA/G": {
        graph_id: ["GBRA/G"],
        protein_id: [
            "GBRA1",
            "GBRA2",
            "GBRA3",
            "GBRA4",
            "GBRA5",
            "GBRA6",
            "GBRG1",
            "GBRG2",
            "GBRG3",
        ],
        accession: [
            "P62812",
            "P26048",
            "P26049",
            "Q9D6F4",
            "Q8BHJ7",
            "P16305",
            "Q9R0Y8",
            "P22723",
            "P27681",
        ],
        description: [
            "Gamma-aminobutyric acid receptor subunits alpha 1-6, subunits gamma 1-3",
        ],
    },
    LHPL: {
        protein_id: ["LHPL3", "LHPL4"],
        accession: ["Q9CTN8", "Q5U4E0"],
        description: ["LHFPL tetraspan subfamily member 3, 4 proteins"],
        gene_name: ["Lhfpl3", "Lhfpl4"],
        "mass_(kda)": [25, 27],
    },
    GSG1L: {
        graph_id: ["GSG1L"],
        protein_id: ["GSG1L"],
        accession: ["D3Z7H4"],
        description: ["Germ cell-specific gene 1-like protein"],
        gene_name: ["Gsg1l"],
        "mass_(kda)": [36],
        reference: ["data published in Perozzo et al. 2023 (PMID: 37884493)"],
    },
    NOE1: {
        graph_id: ["NOE1"],
        protein_id: ["NOE1"],
        accession: ["O88998"],
        description: ["Noelin"],
        gene_name: ["Noelin"],
        "mass_(kda)": [55],
    },
    GRIK2: {
        graph_id: ["GRIK2"],
        protein_id: ["GRIK2"],
        accession: ["P39087"],
        description: ["NGlutamate receptor ionotropic, kainate 2"],
        gene_name: ["Grik2"],
        "mass_(kda)": [102],
    },
    NEGR1: {
        graph_id: ["NEGR1"],
        protein_id: ["NEGR1"],
        accession: ["Q80Z24"],
        description: ["Neuronal growth regulator 1"],
        gene_name: ["Negr1"],
        "mass_(kda)": [38],
    },
    SEM5B: {
        graph_id: ["SEM5B"],
        protein_id: ["SEM5B"],
        accession: ["Q60519"],
        description: ["Semaphorin-5B"],
        gene_name: ["Sema5b"],
        "mass_(kda)": [120],
    },
    UNC5A: {
        graph_id: ["UNC5A"],
        protein_id: ["UNC5A"],
        accession: ["Q8K1S4"],
        description: ["Netrin receptor UNC5A"],
        gene_name: ["Unc5a"],
        "mass_(kda)": [99],
    },
    XKR4: {
        graph_id: ["XKR4"],
        protein_id: ["XKR4"],
        accession: ["Q5GH67"],
        description: ["XK-related protein 4"],
        gene_name: ["Xkr4"],
        "mass_(kda)": [72],
    },
    NSG: {
        graph_id: ["NSG"],
        protein_id: ["NSG1", "NSG2"],
        accession: ["Q62092", "P47759"],
        description: ["Neuronal vesicle trafficking-associated protein 1, 2"],
        gene_name: ["Nsg1", "Nsg2"],
        "mass_(kda)": [21, 19],
    },
    central_complex: {
        description: ["Presynaptic NRX-T178-rPTP module"],
    },
    Glu_Gly_receptors: {
        description: ["Metabotropic Glutamate/Glycine receptors"],
    },
    gaba_receptors: {
        description: ["GABAA-receptors"],
    },
    glu_receptors: {
        description: ["Glutamate receptors"],
    },
    ampa_type_glu_receptors: {
        description: ["AMPA-type receptors"],
    },
    kainate_type_glu_receptors: {
        description: ["Kainate-type receptors"],
    },
    gly_receptors: {
        description: ["Glycine-receptors"],
    },
};
