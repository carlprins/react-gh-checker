import { billCalc } from '../Data/Data'

export const dateDiff = (startDate,endDate) => {
    let a = new Date(startDate);
    let b = new Date(endDate);
    let days = (b-a)/(1000 * 60 * 60 *24)+1
    return days
}