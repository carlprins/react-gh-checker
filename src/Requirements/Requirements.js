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
        name: "Retailer",
        type: "dropdown",
        options: retailers.map(retailer => retailer.name)
    }, {
        id: 2,
        name: "Bill Start Date",
        type: "date",
        options: []
    }, {
        id: 3,
        name: "Bill End Date",
        type: "date",
        options: []
    }, {
        id: 4,
        name: "OpeningBalance",
        type: "number",
        options: []
    }, {
        id: 5,
        name: "ClosingBalance",
        type: "number",
        options: []
    },{
        id: 4,
        name: "Period Start Date",
        type: "date",
        options: []

    }, {
        id: 5,
        name: "Period End Date",
        type: "date",
        options: []
    }, {
        id: 6,
        name: "Peak Usage",
        type: "number",
        options: []
    }, {
        id: 7,
        name: "Peak Rate",
        type: "number",
        options: []
    }
]

export default reqFields;