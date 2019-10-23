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
        name: "period1StartDate",
        alias: "Period 1 Start Date",
        type: "date",
        options: []
    }, {
        id: 3,
        name: "period1EndDate",
        alias: "Period 1 End Date",
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
        id: 6,
        name: "peakUsage",
        alias: "Peak Usage (kWh)",
        type: "number",
        options: []
    }, {
        id: 7,
        name: "peakRate",
        alias: "Peak Rate (c/kWh)",
        type: "number",
        options: []
    }, {
        id: 8,
        name: "dailySupplyCharge",
        alias: "Daily Supply Charge (c/day)",
        type: "number",
        options: []
    }
]

export default reqFields;