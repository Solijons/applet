export default function getWeekNumber(d) {
  let dateConverter = new Date(d);
  // Copy date so don't modify original
  dateConverter = new Date(Date.UTC(dateConverter.getFullYear(), dateConverter.getMonth(), dateConverter.getDate()));
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  dateConverter.setUTCDate(dateConverter.getUTCDate() + 4 - (dateConverter.getUTCDay() || 7));
  // Get first day of year
  var yearStart = new Date(Date.UTC(dateConverter.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  var weekNo = Math.ceil((((dateConverter - yearStart) / 86400000) + 1) / 7);
  // Return array week number
  return weekNo;
}