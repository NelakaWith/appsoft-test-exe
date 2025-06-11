import { FiInfo, FiFlag, FiHelpCircle } from "react-icons/fi";

const BookingForm = () => (
  <div className="p-6 border rounded-lg shadow-sm flex flex-col">
    <div className="flex-1 space-y-4">
      <div className="w-full flex flex-row justify-between flex-wrap items-center">
        <div className="text-2xl font-semibold">
          $178{" "}
          <span className="text-base font-normal text-gray-600">per night</span>
        </div>
        <div className="text-sm text-gray-500">⭐ 4.7 · 234 reviews</div>
      </div>
      <div className="border rounded-md overflow-hidden text-sm">
        <div className="grid grid-cols-2 border-b">
          <div className="p-2 border-r">
            Check In
            <br />
            <span className="text-gray-400">Date Time</span>
          </div>
          <div className="p-2">
            Check Out
            <br />
            <span className="text-gray-400">Date Time</span>
          </div>
        </div>
        <div className="p-2 border-t">
          Guests
          <br />
          <span className="text-gray-400">1 guest</span>
        </div>
      </div>
      <input
        type="text"
        placeholder="Enter Coupon Code"
        className="w-full border rounded p-2 text-sm"
      />
      <div className="text-sm space-y-3">
        <div className="flex justify-between border-b pb-2">
          <span>$178 x 0 nights</span>
          <span>$0</span>
        </div>
        <div className="flex justify-between border-b pb-2">
          <span className="flex items-center gap-1">
            Service Fee <FiInfo className="text-gray-400" aria-hidden="true" />
          </span>
          <span>$0</span>
        </div>
        <div className="flex justify-between font-medium border-b pb-2">
          <span>Subtotal</span>
          <span>$0</span>
        </div>
        <div className="flex justify-between text-green-600 border-b pb-2">
          <span>Disc count</span>
          <span>-$0</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Grand Total</span>
          <span>$0</span>
        </div>
      </div>
      <button className="w-full bg-primary text-white py-3 rounded hover:bg-red-600 transition">
        Book Suite Now
      </button>
      <div className="text-center text-xs text-gray-500">
        Your Credit Card won’t be charged for booking
      </div>
    </div>
    <div className="flex justify-between items-center text-xs text-gray-500 underline mt-6">
      <button className="flex items-center gap-1 hover:text-primary transition">
        <FiFlag className="text-base" /> Report this booking
      </button>
      <button className="flex items-center gap-1 hover:text-primary transition">
        <FiHelpCircle className="text-base" /> Help
      </button>
    </div>
  </div>
);

export default BookingForm;
