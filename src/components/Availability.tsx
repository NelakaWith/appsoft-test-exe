import { MdEmojiEvents, MdLightbulb } from "react-icons/md";
import { FaCarCrash } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";

const tips = [
  {
    icon: <MdLightbulb className="text-2xl" />,
    title: "This place is getting a lot of attention.",
    text: "This place has been viewed 200+ times in the past week...",
  },
  {
    icon: <FaCarCrash className="text-2xl" />,
    title: "Drive slow and safe.",
    text: "The roads around this area has witnessed 100+ accidents in the last 5 years.",
  },
  {
    icon: <TiWeatherPartlySunny className="text-2xl" />,
    title: "Pack your umbrella.",
    text: "Weather forecast predict partly cloudy or light showers around this time of the year.",
  },
  {
    icon: <MdEmojiEvents className="text-2xl" />,
    title: "You will be in good hands.",
    text: "This restaurant has won 8 awards for hospitality in the recent years.",
  },
];

const AvailabilityTips = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 text-sm text-gray-700">
    {tips.map((tip, i) => (
      <div key={i} className="flex gap-3">
        <div className="text-accent">{tip.icon}</div>
        <div>
          <div className="font-semibold">{tip.title}</div>
          <div>{tip.text}</div>
        </div>
      </div>
    ))}
  </div>
);

export default AvailabilityTips;
