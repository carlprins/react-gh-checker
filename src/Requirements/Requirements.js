const retailers = [
    {
        name: "Origin Energy",
        key: "origin"
    }, {
        name: "AGL",
        key: "agl"
    }, {
        name: "EnergyAustralia",
        key: "energyaustralia"
    }
]

const reqFields = [
    {
        id: 1,
        name: "retailer",
        alias: "Retailer",
        type: "dropdown",
        options: retailers.map(retailer => retailer.name)
    }, {
        id: 2,
        name: "billStartDate",
        alias: "Bill Start Date",
        type: "date",
        options: []
    }, {
        id: 3,
        name: "billEndDate",
        alias: "Bill End Date",
        type: "date",
        options: []
    }, {
        id: 4,
        name: "openingBalance",
        alias: "Opening Balance",
        type: "number",
        options: []
    }, {
        id: 5,
        name: "closingBalance",
        alias: "Closing Balance",
        type: "number",
        options: []
    },{
        id: 4,
        name: "periodStartDate",
        alias: "Period Start Date",
        type: "date",
        options: []

    }, {
        id: 5,
        name: "periodEndDate",
        alias: "Period End Date",
        type: "date",
        options: []
    }, {
        id: 6,
        name: "peakUsage",
        alias: "Peak Usage",
        type: "number",
        options: []
    }, {
        id: 7,
        name: "peakRate",
        alias: "Peak Rate",
        type: "number",
        options: []
    }
]

export default reqFields;