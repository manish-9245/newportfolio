import { MdOutlineEmojiEvents } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { VscSymbolEvent } from "react-icons/vsc";
import { MdTimeline } from "react-icons/md";
import { RiMapPinTimeLine } from "react-icons/ri";
import { MdEventNote } from "react-icons/md";
import { SiHiveBlockchain } from "react-icons/si";
import { SiChainlink } from "react-icons/si";
import { IoIosRocket } from "react-icons/io";
import {TbPlant} from "react-icons/tb";
import {FcIdea} from "react-icons/fc";

const timelineDetails = [
  {
    timeline_title: "Code For Good Hackathon",
    timeline_description: "Recieved Summer Intern offer, and special mention for our prototy[e that solved problems for Youngistaan Foundation",
    timeline_icon: <SiChainlink />,
    timeline_place: "Bangalore/ Remote",
    timeline_date: "September 2021",
    timeline_day: "Saturday",
    timeline_hostedby: "JP Morgan Chase & Co.",
    timeline_tags: [
      { tag: "Social Good" },
      { tag: "Hackathon" },
      { tag: "Internship" },
    ],
    timeline_card_color: "orange.400",
  },
  {
    timeline_title: "Provision Hacks Global Hackathon",
    timeline_description: "Global Runner Up amongst 800+ teams for our project that narrowed the Dermatologist - patient gap during COVID-19",
    timeline_icon: <VscSymbolEvent />,
    timeline_place: "New York, USA/ Remote",
    timeline_date: "September 2021",
    timeline_day: "Saturday",
    timeline_hostedby: "Provision Hacks",
    timeline_tags: [
      { tag: "Social Good" },
      { tag: "Hackathon" },
      {tag: "Remote"},
      { tag: "Healthcare" },
    ],
    timeline_card_color: "red.400",
  },
  {
    timeline_title: "TCS TECHBYTES",
    timeline_description: "Secured a rank under Top 6 in Regional level and Secured second runner up position at State Finals",
    timeline_icon: <IoIosRocket />,
    timeline_place: "Remote",
    timeline_date: "Mar 2022",
    timeline_day: "Sunday",
    timeline_hostedby: "TATA CONSULTANCY SERVICES",
    timeline_tags: [
      { tag: "Quiz" },
      { tag: "All India" },
      { tag: "TCS" },
    ],
    timeline_card_color: "purple.400",
  },
  {
    timeline_title: "Smart India Hackathon",
    timeline_description: "Winner of College Level Smart India Hackathon",
    timeline_icon: <MdTimeline />,
    timeline_place: "Tumkur",
    timeline_date: "Mar 2022",
    timeline_day: "Saturday",
    timeline_hostedby: "MHRD Govt. of India",
    timeline_tags: [
      { tag: "SIH" },
      { tag: "Hackathon" },
      {tag: "MHRD"},
      { tag: "AICTE" },
    ],
    timeline_card_color: "blue.400",
  },
  {
    timeline_title: "AGRI Hackathon",
    timeline_description: "National Winner of AGRI Hackathon, for ideating a ML/AI based system design that could help farmers grow crops smartly",
    timeline_icon: <TbPlant />,
    timeline_place: "Tumkur",
    timeline_date: "Mar 2022",
    timeline_day: "Saturday",
    timeline_hostedby: "NaaViC",
    timeline_tags: [
      { tag: "Agriculture" },
      { tag: "Ministry of Agriculture" },
      { tag: "Hackathon" },
    ],
    timeline_card_color: "green.400",
  },
  {
    timeline_title: "INCEPTO Ideathon",
    timeline_description: "National Winner of INCEPTO Ideathon, presented our idea JoPlay.AI which could revolutionize the hockey viewership rates in India",
    timeline_icon: <FcIdea />,
    timeline_place: "Tumkur",
    timeline_date: "Jun 2022",
    timeline_day: "Saturday",
    timeline_hostedby: "SARK (Programming Club of SIT Tumkur)",
    timeline_tags: [
      { tag: "Hockey" },
      { tag: "Ideathon" },
    ],
    timeline_card_color: "red.600",
  },
  {
    timeline_title: "September Long Challenge",
    timeline_description: "Secured Global Rank 2 in Codechef September Long Challenge",
    timeline_icon: <MdEvent />,
    timeline_place: "Remote",
    timeline_date: "Sep 2022",
    timeline_day: "Saturday",
    timeline_hostedby: "CodeChef",
    timeline_tags: [
      { tag: "CodeChef" },
      { tag: "CP" },
    ],
    timeline_card_color: "purple.400",
  },
  {
    timeline_title: "National Hackathon",
    timeline_description: "Won Special award for Extraordinary Technical Expertise",
    timeline_icon: <MdTimeline />,
    timeline_place: "IISc, Bangalore",
    timeline_date: "Oct 2022",
    timeline_day: "Saturday",
    timeline_hostedby: "Bangalore Humanitarian Technology Conference(B-HTC 2022)",
    timeline_tags: [
      { tag: "hackathon" },
      { tag: "Social Good" },
    ],
    timeline_card_color: "blue.400",
  },
  
];

export { timelineDetails };
