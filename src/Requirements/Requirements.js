const screens = {
    screen1: {
        head: "Welcome to Bill Checker",
        par: "Fill out your details and we'll start checking",
        questions: [
            {
                name: 'fuelType',
                label: 'Is this an electricity or gas bill?',
                type: 'dropdown',
                options: ["Please select","Electricity","Natural Gas"]
            },{
                name: 'retailer',
                label: 'Who is your service provider?',
                type: 'dropdown',
                options: ["Please select","EnergyAustralia","AGL","Origin Energy"]
            }
        ],
        buttons: [
            {
                name: 'backButton',
                label: 'Back',
                type: 'Left Nav Button',
                newScreenState: 'screen1',
                options: []
            },{
                name: 'nextButton',
                label: 'Next',
                type: 'Right Nav Button',
                newScreenState: 'screen2',
                options: []
            }
        ]
    },
    screen2: {
        head: "What period does this bill cover?",
        par: "We'd like to understand the time period for your bill",
        questions: [
            {
                name: 'billStartDate',
                label: 'Bill start date',
                type: 'date',
                options: []
            },{
                name: 'billEndDate',
                label: 'Bill end date',
                type: 'date',
                options: []
            }
        ],
        buttons: [
            {
                name: 'backButton',
                label: 'Back',
                type: 'Left Nav Button',
                newScreenState: "screen1",
                options: []
            },{
                name: 'nextButton',
                label: 'Next',
                type: 'Right Nav Button',
                newScreenState: 'screen3',
                options: []
            }
        ]
    },
    screen3: {
        head: "Opening and Closing Balance",
        par: "Let's work out what charges you incurred during this bill",
        questions: [
            {
                name: 'openingBalance',
                label: 'What was the opening balance on this bill?',
                type: 'number',
                options: []
            },{
                name: 'netClosingBalance',
                label: 'What is the net amount owed if you pay before Due date?',
                type: 'number',
                options: []
            },{
                name: 'grossClosingBalance',
                label: 'What is the amount owed if you miss your due date?',
                type: 'number',
                options: []
            }
        ],
        buttons: [
            {
                name: 'backButton',
                label: 'Back',
                type: 'Left Nav Button',
                newScreenState: "screen2",
                options: []
            },{
                name: 'nextButton',
                label: 'Next',
                type: 'Right Nav Button',
                newScreenState: 'screen3',
                options: []
            }
        ]
    }
}

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

export { reqFields, screens }