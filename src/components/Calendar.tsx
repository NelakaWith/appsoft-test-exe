// src/components/Calendar.tsx
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function Calendar() {
  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Availability</h2>
      <p className="text-sm text-gray-500 mb-4">
        Check availability for your check in and check out dates
      </p>
      <div className="flex gap-6 flex-wrap">
        <DayPicker
          mode="range"
          numberOfMonths={2}
          defaultMonth={new Date(2020, 3)} // April 2020
          disabled={{ before: new Date(2020, 3, 23) }}
        />
      </div>
    </div>
  );
}
