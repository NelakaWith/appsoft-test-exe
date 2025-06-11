import MainLayout from "./layouts/MainLayout";
import Calendar from "./components/Calendar";
import Availability from "./components/Availability";
import BookingForm from "./components/BookingForm";
import {
  MdRestaurantMenu,
  MdBeachAccess,
  MdMedicalServices,
} from "react-icons/md";

function App() {
  return (
    <MainLayout>
      <div>
        <h1 className="text-3xl font-bold mb-2">The Lounge Suit</h1>
        <p className="text-gray-600 mb-4">
          The Majestic · 34A Long Beach Boulevard, Orient Park, BO
        </p>
        <div className="flex gap-4 text-sm text-accent mb-6">
          <span className="flex items-center gap-1">
            <MdRestaurantMenu /> On demand Meals
          </span>
          <span className="flex items-center gap-1">
            <MdBeachAccess /> Beach View
          </span>
          <span className="flex items-center gap-1">
            <MdMedicalServices /> 24/7 Medical Staff
          </span>
        </div>
        <Calendar />
        <Availability />
      </div>
      <BookingForm />
    </MainLayout>
  );
}

export default App;
