import { use } from "react";
import { DataContext } from "../context/DataContext";

const usePaymentData = () => {
  const { priceData } = use(DataContext);

  const {
    firstHourRate,
    secondHourRate,
    additionalHoursRate,
    firstHourMinuteRate = 10,
    secondHourMinuteRate = 10,
    additionalMinutesRate = 10,
  } = priceData;

  const getTotalCost = (startTime?: Date, endTime?: Date) => {
    const timeEnd = endTime?.getHours() ?? 0;
    const timeStart = startTime?.getHours() ?? 0;

    const durationInHours = timeEnd - timeStart;
    const durationInMinutes =
      (endTime?.getMinutes() ?? 0) - (startTime?.getMinutes() ?? 0);

    const totalCostHours =
      durationInHours === 0
        ? 0
        : durationInHours === 1
        ? firstHourRate
        : durationInHours === 2
        ? firstHourRate + secondHourRate
        : firstHourRate +
          secondHourRate +
          (durationInHours - 2) * additionalHoursRate;

    const totalCostMinutes =
      durationInHours === 0
        ? durationInMinutes * firstHourMinuteRate
        : durationInHours === 2
        ? durationInMinutes * secondHourMinuteRate
        : durationInMinutes * additionalMinutesRate;

    const totalCost = totalCostHours + totalCostMinutes;
    return totalCost;
  };

  return { priceData, getTotalCost };
};
export default usePaymentData;
