const uniprotUrl = "http://www.uniprot.org/uniprot/?query=";
const alphafoldUrl = "https://alphafold.ebi.ac.uk/entry/";

Promise.all([
    Promise.resolve(graphStyle),
    Promise.resolve(graphData),
    Promise.resolve(protInfos),
    Promise.resolve(protInteractors),
]).then(function (dataArray) {
    let h = function (tag, attrs, children) {
        let el = document.createElement(tag);

        Object.keys(attrs).forEach(function (key) {
            let val = attrs[key];

            el.setAttribute(key, val);
        });

        children.forEach(function (child) {
            el.appendChild(child);
        });

        return el;
    };

    let createLink = function (
        url,
        objId,
        linkName = "",
        linkClass = "",
        anchor = ""
    ) {
        if (!linkName) {
            linkName = objId;
        }
        return h(
            "a",
            {
                target: "_blank",
                href: url + objId + anchor,
                class: linkClass,
            },
            [t(linkName)]
        );
    };

    let t = function (text) {
        let el = document.createTextNode(text);

        return el;
    };

    let $ = document.querySelector.bind(document);

    let cy = cytoscape({
        container: document.getElementById("cy"),
        style: dataArray[0],
        elements: dataArray[1],
        autounselectify: true,
        maxZoom: 8,
        minZoom: 0.75,
        layout: { name: "preset" },
        boxSelectionEnabled: false,
    });

    let iniPositions = structuredClone(dataArray[1]);

    let clickedNode = "";

    const background = new Image();
    background.src = bg_image_src;

    const bottomLayer = cy.cyCanvas({
        zIndex: -1,
    });
    const canvas = bottomLayer.getCanvas();
    const ctx = canvas.getContext("2d");

    cy.on("render cyCanvas.resize", (evt) => {
        bottomLayer.resetTransform(ctx);
        bottomLayer.clear(ctx);
        bottomLayer.setTransform(ctx);

        ctx.save();
        // Draw a background
        ctx.scale(1.65, 1.65);
        ctx.drawImage(background, 0, 0);
    });

    let showNodeInfos = function (node) {
        let nodeId = node.data().id.split("_")[0];

        let tableStr = "";
        if (protInfos[nodeId]) {
            infos = protInfos[nodeId];

            infos["AlphaFold Structure:"] = infos["accession"].map(function (
                id,
                index
            ) {
                return createLink(alphafoldUrl, id, infos["protein_id"][index])
                    .outerHTML;
            });
        } else {
            infos = { description: protInfos[node.data().id].description };
        }

        if (protInteractors[nodeId]) {
            interactors = protInteractors[nodeId];

            infos["Extended Interactors:"] = interactors["accession"].map(
                function (id, index) {
                    return createLink(
                        uniprotUrl,
                        id,
                        interactors["protein_id"][index]
                    ).outerHTML;
                }
            );
        }

        for (const [key, value] of Object.entries(infos)) {
            if (key !== "graph_id") {
                let infoValue = value;
                if (key !== "reference") {
                    infoValue = value.toString().replaceAll(",", ", ");
                } else {
                    infoValue = value.toString().replaceAll(",", ",<br />");
                }

                tableStr =
                    tableStr +
                    `<div class='info-record'>
                        <div class='info-key'>${key.replace("_", " ")}</div>
                        <div class='info-value'>${infoValue}</div>
                    </div>`;
            }
        }
        return tableStr;
    };

    let hideNodeInfos = function () {
        table = document.getElementById("prot-infos");
        table.innerHTML = "Click on a protein for more details...";
    };

    let setHighlightEdge = function (edge) {
        removeHighlight();
        var connected = edge.connectedNodes();
        cy.elements().difference(connected).not(edge).addClass("semitransp");
        // ).animate({
        //     style: {
        //         borderOpacity: 0.4,
        //         lineOpacity: 0.4,
        //     },
        //     duration: 50,
        //     easing: "linear",
        //     // });
        // }
        connected.addClass("highlight");
        edge.addClass("highlight");
    };

    let setHighlightNode = function (node) {
        removeHighlight();
        cy.elements()
            .difference(node.outgoers())
            .difference(node.incomers())
            .not(node)
            .addClass("semitransp");
        // ).animate({
        //     style: {
        //         borderOpacity: 0.4,
        //         lineOpacity: 0.4,
        //     },
        //     duration: 50,
        //     easing: "linear",
        //     // });
        // }

        node.outgoers().addClass("highlight");
        node.incomers().addClass("highlight");
        node.addClass("highlight");
    };

    let removeHighlight = function () {
        cy.stop(true);
        cy.filter(".highlight").removeClass("highlight");
        cy.filter(".semitransp").removeClass("semitransp");
        // ).animate({
        //         style: {
        //             borderOpacity: 1,
        //             lineOpacity: 1,
        //         },
        //         duration: 50,
        //         easing: "linear",
        //     }
    };

    let makeTippy = function (node, html) {
        return tippy(node.popperRef(), {
            html: html,
            trigger: "manual",
            arrow: true,
            placement: "bottom",
            hideOnClick: false,
            interactive: true,
        }).tooltips[0];
    };

    let hideTippy = function (node) {
        let tippy = node.data("tippy");

        if (tippy != null) {
            tippy.hide();
        }
    };

    let hideAllTippies = function () {
        if (clickedNode) {
            hideTippy(cy.getElementById(clickedNode));
        }
    };

    cy.on("zoom pan", function (e) {
        hideAllTippies();
    });

    cy.on("grab", function (e) {
        hideAllTippies();
    });

    cy.nodes().forEach(function (n) {
        // TODO only add tippies for protein, not groups
        if (!n.classes().includes("complex")) {
            let nodeId = n.data("id").split("_")[0];
            if (protInfos[nodeId]) {
                proteinAccessions = protInfos[nodeId]["accession"];
                proteinIds = protInfos[nodeId]["protein_id"];
            } else {
                proteinAccessions = nodeId;
                proteinIds = nodeId;
            }

            let $links = proteinAccessions.map(function (id, index) {
                return createLink(
                    uniprotUrl,
                    id,
                    "UniProt: " + proteinIds[index],
                    "tip-link"
                );
            });

            let tippy = makeTippy(n, h("div", {}, $links));

            n.data("tippy", tippy);
        }
    });

    $("#toolbar-toggle").addEventListener("click", function () {
        $("body").classList.toggle("toolbar-closed");
        cy.resize();
    });

    cy.on("tap", function (event) {
        let elem = event.target;
        let resetGraphState = true;

        if (elem === cy) {
            removeHighlight();
        } else if (elem.isNode() && clickedNode !== elem.data().id) {
            // Set tippy
            hideAllTippies();
            if (elem.data().tippy) {
                elem.data().tippy.show();
            }

            // Set highlight
            setHighlightNode(elem);

            // Set Infos
            table = document.getElementById("prot-infos");
            table.innerHTML = showNodeInfos(elem);

            // Set new node as clicked
            clickedNode = elem.data().id;
            resetGraphState = false;
        } else if (elem.isEdge()) {
            setHighlightEdge(elem);
        }

        if (resetGraphState) {
            hideAllTippies();
            hideNodeInfos();
            clickedNode = "";
        }
    });

    cy.on("mouseover", "edge", function (event) {
        if (!clickedNode) {
            setHighlightEdge(event.target);
        }
    });

    cy.on("mouseout", "edge", function () {
        if (!clickedNode) {
            removeHighlight();
        }
    });

    cy.on("mouseover", "node", function (event) {
        if (!clickedNode) {
            setHighlightNode(event.target);
            table = document.getElementById("prot-infos");
            table.innerHTML = showNodeInfos(event.target);
        }
    });

    cy.on("mouseout", "node", function (event) {
        if (!clickedNode) {
            removeHighlight();
            hideNodeInfos();
        }
    });

    cy.on("dbltap", function (event) {
        cy.nodes().positions(function (node, i) {
            return iniPositions[i].position;
        });
        cy.fit();
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && clickedNode) {
            removeHighlight();
            hideAllTippies();
            hideNodeInfos();
            clickedNode = "";
        }
    });
});
