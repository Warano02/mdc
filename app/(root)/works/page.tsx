import CustomScrollbar from "@/components/custom-scroll"
import SignupDialog from "@/components/SignupDialog"
import Accordilon from "@/components/works/faq-jobs-accordilon"
import SingleOffer from "@/components/works/single-offer"
import Link from "next/link"

export const metadata = {
  title: "Find & Apply for Jobs - MDC Canada",
}

interface IJobName {
  name: string
  cover: string
}

const PopularJobs: IJobName[] = [
  {
    name: "Registered Nurse",
    cover: "/img/de4f26ef-8b7e-409b-b1d8-fe6cf84b4b46.png",
  },
  {
    name: "Cleaner",
    cover:
      "/img/67898598-d04e-4500-bd3e-d4f062ed38fc.png",
  },
  {
    name: "Caregiver",
    cover: "/img/4a21613c-1ffa-4f52-9a08-6203e65cf112.png",
  },
  {
    name: "Personal Support Worker",
    cover: "/img/f6f2e745-87ba-4135-a63d-65e76ae5d025.png",
  },
  {
    name: "Accounting Specialist",
    cover: "/img/52b778fb-fe79-4149-9b05-b0224edcdd05.png",
  },
  {
    name: "Private Tutor",
    cover: "/img/fbac4a57-d8dd-495b-b0cf-87cc2e4552c7.png",
  },
]
export const jobOffers= [
  {
    id: "job-001",
    title: "Commercial Cleaner",
    company: "CleanPro Services",
    cover: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&auto=format&fit=crop",
    contraint: ["Driver's License", "Flexible Hours", "Standing All Day"],
    price: "$14.50/hr"
  },
  {
    id: "job-002",
    title: "Warehouse Handler",
    company: "LogiLogistics Inc",
    cover: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&auto=format&fit=crop",
    contraint: ["Heavy Lifting (50lbs)", "Saturday Shifts", "Safety Boots Required"],
    price: "$16.00/hr"
  },
  {
    id: "job-003",
    title: "Retail Cashier",
    company: "Metro Supermarket",
    cover: "https://images.unsplash.com/photo-1556742049-0ae708730793?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&auto=format&fit=crop",
    contraint: ["Friendly Attitude", "Cash Handling", "Team Player"],
    price: "$13.75/hr"
  },
  {
    id: "job-004",
    title: "Bicycle Courier",
    company: "FastByte Delivery",
    cover: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop",
    contraint: ["Own Bicycle", "Working Smartphone", "City Navigation"],
    price: "$18.00/hr"
  },
  {
    id: "job-005",
    title: "Night Shift Crew Member",
    company: "Burger Spot",
    cover: "https://images.unsplash.com/photo-1581349485608-9469926a8e5e?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop",
    contraint: ["Night Shifts", "Fast-Paced", "Strict Hygiene Rules"],
    price: "$15.00/hr"
  },
  {
    id: "job-006",
    title: "Forklift Operator",
    company: "Express Cargo",
    cover: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
    contraint: ["Forklift License", "Good Vision", "Cold Storage Environment"],
    price: "$17.25/hr"
  },
  {
    id: "job-007",
    title: "Sanitation Worker",
    company: "EcoCollect City",
    cover: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop",
    contraint: ["4 AM Shift Start", "Outdoors", "Physical Stamina"],
    price: "$19.50/hr"
  },
  {
    id: "job-008",
    title: "Hotel Housekeeper",
    company: "Grand Plaza Hotel",
    cover: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop",
    contraint: ["Attention to Detail", "Fast Efficiency", "Weekend Shifts"],
    price: "$14.00/hr"
  },
  {
    id: "job-009",
    title: "Prep Cook",
    company: "French Bistro",
    cover: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
    contraint: ["Food Safety Cert", "Knife Skills", "Evening Shifts"],
    price: "$15.50/hr"
  },
  {
    id: "job-010",
    title: "Restaurant Server",
    company: "Ocean Grill",
    cover: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop",
    contraint: ["Professional Appearance", "Basic English", "Tray Carrying"],
    price: "$12.50/hr + tips"
  },
  {
    id: "job-011",
    title: "Farmhand Worker",
    company: "Green Farm Corp",
    cover: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop",
    contraint: ["Outdoor Work", "Heat Tolerance", "Repetitive Tasks"],
    price: "$13.50/hr"
  },
  {
    id: "job-012",
    title: "Security Guard",
    company: "SecureGuard Systems",
    cover: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop",
    contraint: ["Security License", "Night/Weekend Shift", "Foot Patrols"],
    price: "$18.50/hr"
  },
  {
    id: "job-013",
    title: "Furniture Mover",
    company: "Swift Movers",
    cover: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop",
    contraint: ["Physical Strength", "Stair Climbing", "Driver's License Plus"],
    price: "$17.00/hr"
  },
  {
    id: "job-014",
    title: "Order Picker",
    company: "ShopExpress Hub",
    cover: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop",
    contraint: ["Barcode Scanner Use", "Standing Shift", "Hourly Target Rates"],
    price: "$14.20/hr"
  },
  {
    id: "job-015",
    title: "Delivery Driver",
    company: "ParcelToGo",
    cover: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=200&auto=format&fit=crop",
    contraint: ["Valid License 2+ Yrs", "60+ Stops/Day", "Clean Driving Record"],
    price: "$16.80/hr"
  },
  {
    id: "job-016",
    title: "Window Cleaner",
    company: "ClearVision Services",
    cover: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop",
    contraint: ["No Fear of Heights", "Lift Equipment Handling", "Chemical Safety"],
    price: "$20.00/hr"
  },
  {
    id: "job-017",
    title: "Groundskeeper / Landscaper",
    company: "Green Spaces 360",
    cover: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&auto=format&fit=crop",
    contraint: ["Power Tool Handling", "Trailer Driving Cert", "All Weather"],
    price: "$15.00/hr"
  },
  {
    id: "job-018",
    title: "Assembly Line Worker",
    company: "Precision Parts Corp",
    cover: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop",
    contraint: ["Repetitive Motion", "Manual Dexterity", "Quality Control"],
    price: "$14.80/hr"
  },
  {
    id: "job-019",
    title: "Construction Laborer",
    company: "BuildRight Construction",
    cover: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop",
    contraint: ["Safety Card Required", "Hard Hat Mandate", "Heavy Equipment Use"],
    price: "$17.50/hr"
  },
  {
    id: "job-020",
    title: "Hospital Stretcher Bearer",
    company: "St. Jude Hospital",
    cover: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
    contraint: ["Rotational Shifts", "Empathy & Composure", "Extensive Walking"],
    price: "$16.50/hr"
  },
  {
    id: "job-021",
    title: "Fast Food Team Member",
    company: "Taco Express",
    cover: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop",
    contraint: ["Cashier & Kitchen Duties", "Daily Cleaning", "Lunch Rush Hours"],
    price: "$13.00/hr"
  },
  {
    id: "job-022",
    title: "Night Gas Station Attendant",
    company: "FuelUp Station",
    cover: "https://images.unsplash.com/photo-1527016021513-b09758b777bd?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&auto=format&fit=crop",
    contraint: ["Solo Shift", "10 PM - 6 AM Hours", "Register Operation"],
    price: "$15.20/hr"
  },
  {
    id: "job-023",
    title: "Car Wash Attendant",
    company: "AutoShine Wash",
    cover: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=200&auto=format&fit=crop",
    contraint: ["Pressure Washer Use", "Vacuuming", "Driver's License Required"],
    price: "$14.00/hr"
  },
  {
    id: "job-024",
    title: "Street Sweeper / Cleaner",
    company: "City Clean Services",
    cover: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&auto=format&fit=crop",
    contraint: ["5 AM Start Time", "Outdoors Work", "Safety Protocol"],
    price: "$18.20/hr"
  },
  {
    id: "job-025",
    title: "Data Entry Clerk",
    company: "DataEntry Direct",
    cover: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop",
    contraint: ["Fast Typing (50+ WPM)", "High Accuracy", "Desk Position"],
    price: "$15.00/hr"
  },
  {
    id: "job-026",
    title: "Front Desk Receptionist",
    company: "Corporate Host",
    cover: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&auto=format&fit=crop",
    contraint: ["Professional Presentation", "Visitor Badge Check", "Phone Switchboard"],
    price: "$16.00/hr"
  },
  {
    id: "job-027",
    title: "Call Center Representative",
    company: "CallCenter Pro",
    cover: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop",
    contraint: ["Headset Usage", "Handling Complaints", "Stress Management"],
    price: "$14.50/hr"
  },
  {
    id: "job-028",
    title: "Building Caretaker",
    company: "Habitat Property Mgmt",
    cover: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
    contraint: ["On-Site Housing", "Trash Management", "Basic Repairs"],
    price: "$2,200/mo"
  },
  {
    id: "job-029",
    title: "Dog Walker",
    company: "Paws & Walk",
    cover: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop",
    contraint: ["Love for Animals", "Physical Stamina", "Large Dog Experience"],
    price: "$15.00/hr"
  },
  {
    id: "job-030",
    title: "Coffee Shop Barista",
    company: "Bean & Brew",
    cover: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop",
    contraint: ["Coffee Passion", "6 AM Early Start", "Morning Rush Handling"],
    price: "$13.80/hr + tips"
  },
  {
    id: "job-031",
    title: "Tire Technician",
    company: "QuickFit Auto",
    cover: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop",
    contraint: ["Pneumatic Tool Use", "Heavy Wheel Lifting", "Workshop Environment"],
    price: "$16.00/hr"
  },
  {
    id: "job-032",
    title: "Stock Clerk / Stocker",
    company: "SupplyChain Direct",
    cover: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&auto=format&fit=crop",
    contraint: ["Shelf Organization", "Inventory Audits", "Safety Footwear"],
    price: "$15.50/hr"
  },
  {
    id: "job-033",
    title: "Auto Detailer",
    company: "ShinyCars Studio",
    cover: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop",
    contraint: ["High Attention to Detail", "Polishing Equipment", "Standing Position"],
    price: "$15.00/hr"
  },
  {
    id: "job-034",
    title: "Flyer Distributor",
    company: "PromoFlyers Media",
    cover: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop",
    contraint: ["Extensive Walking", "Autonomous Work", "Door-to-Door Delivery"],
    price: "$12.00/hr"
  },
  {
    id: "job-035",
    title: "Laundry Attendant",
    company: "LinenClean Pro",
    cover: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop",
    contraint: ["Hot/Humid Environment", "Linen Folding", "Industrial Pace"],
    price: "$14.00/hr"
  },
  {
    id: "job-036",
    title: "Hotel Valet / Bellhop",
    company: "Luxury Suites",
    cover: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=200&auto=format&fit=crop",
    contraint: ["Valid License Required", "Suit & Tie Uniform", "Heavy Luggage"],
    price: "$13.50/hr + tips"
  },
  {
    id: "job-037",
    title: "Airport Baggage Handler",
    company: "Airport Ground Handling",
    cover: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&auto=format&fit=crop",
    contraint: ["Security Clearance", "Heavy Luggage Lifting", "Irregular Hours"],
    price: "$18.00/hr"
  },
  {
    id: "job-038",
    title: "Landscape Maintenance Worker",
    company: "Nature Maintenance",
    cover: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop",
    contraint: ["Brushcutter Operation", "Teamwork", "Outdoor All Season"],
    price: "$14.75/hr"
  },
  {
    id: "job-039",
    title: "Dishwasher / Kitchen Helper",
    company: "La Trattoria",
    cover: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&auto=format&fit=crop",
    contraint: ["Commercial Dishwasher", "Slippery Floors", "Full Kitchen Cleaning"],
    price: "$14.00/hr"
  },
  {
    id: "job-040",
    title: "Grocery Store Clerk",
    company: "FreshMarket",
    cover: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&auto=format&fit=crop",
    contraint: ["Stocking Shelves", "Expiration Checks", "Backup Register"],
    price: "$13.50/hr"
  },
  {
    id: "job-041",
    title: "Packaging Operator",
    company: "Pack&Ship Factory",
    cover: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop",
    contraint: ["Conveyor Belt Pace", "Box Sealing", "Standing All Day"],
    price: "$15.00/hr"
  },
  {
    id: "job-042",
    title: "Masonry Helper",
    company: "BTP Concrete Ltd",
    cover: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&auto=format&fit=crop",
    contraint: ["Mixing Cement", "Cinderblock Carrying", "Outdoor Site"],
    price: "$16.50/hr"
  },
  {
    id: "job-043",
    title: "Night Stocker",
    company: "HyperMarket 24/7",
    cover: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop",
    contraint: ["10 PM - 6 AM Shift", "Unloading Pallets", "Autonomous Work"],
    price: "$16.00/hr"
  },
  {
    id: "job-044",
    title: "Newspaper Carrier",
    company: "Morning Press",
    cover: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&auto=format&fit=crop",
    contraint: ["3 AM Start Time", "Vehicle Required", "Fixed Delivery Route"],
    price: "$14.00/hr"
  },
  {
    id: "job-045",
    title: "Quality Control Inspector",
    company: "Quality Assembly Ltd",
    cover: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&auto=format&fit=crop",
    contraint: ["Visual Inspection", "Defect Sorting", "High Patience"],
    price: "$14.20/hr"
  },
  {
    id: "job-046",
    title: "Coat Check Attendant",
    company: "Nightclub VIP",
    cover: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=200&auto=format&fit=crop",
    contraint: ["Night Hours", "Fast Cash Register", "Friendly Attitude"],
    price: "$13.50/hr"
  },
  {
    id: "job-047",
    title: "Seasonal Camp Counselor",
    company: "Camp&Sun Holidays",
    cover: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&auto=format&fit=crop",
    contraint: ["Seasonal Job", "On-Site Housing", "First Aid Cert Plus"],
    price: "$1,900/mo"
  },
  {
    id: "job-048",
    title: "Event Waiter / Extra",
    company: "Central Catering",
    cover: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=200&auto=format&fit=crop",
    contraint: ["Fast Pace", "Terrace & Banquet", "Immediate Availability"],
    price: "$16.00/hr"
  },
  {
    id: "job-049",
    title: "Kennel Cleaning Attendant",
    company: "PetCare Shelter",
    cover: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop",
    contraint: ["Kennel Washing", "Comfortable with Dogs", "Basic Animal Care"],
    price: "$14.00/hr"
  },
  {
    id: "job-050",
    title: "Rope Access Window Cleaner",
    company: "HighRope Services",
    cover: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop",
    logo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&auto=format&fit=crop",
    contraint: ["Rope Access Cert", "Extreme Height Work", "Peak Physical Fitness"],
    price: "$21.00/hr"
  }
]

function Page() {
  return (
    <main className="w-full">
      <section
        className="w-full h-[32em] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "url('/img/bg/4ce6c4ce-c134-4ce1-bb46-01a188f53bce.png')",
        }}
      >
        <div className="absolute inset-0 bg-linear-to-l from-[rgba(20,4,92,0.23)] to-[rgba(3,8,59,0.57)]" />

        <div className="container relative z-10 h-full flex flex-col justify-center">
          <div className="ml-12 flex flex-col justify-center w-[50em] max-w-full text-white max-md:ml-0 max-md:items-center max-md:w-full">

            <h1 className="text-white text-5xl font-bold mb-6 max-sm:text-4xl max-sm:text-center max-[450px]:text-3xl">
              Find your next opportunity
            </h1>

            <p className="text-lg font-bold mb-10 max-sm:w-[95%] max-sm:text-center">
              Discover the right jobs and apply easily with MDC Canada.
            </p>

            <SignupDialog>
              <button className="w-[10em] h-10 font-bold border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors duration-300 cursor-pointer">
                GET STARTED
              </button>
            </SignupDialog>

          </div>
        </div>
      </section>

      <section className="container space-y-12 mt-12">

        <h1 className="text-4xl max-w-3xl container">
          Explore jobs
          <br />
          <span className="font-bold">
            in high-demand fields
          </span>
        </h1>

        <CustomScrollbar>
          {PopularJobs.map((job) => (
            <SingleJobName
              key={job.cover}
              {...job}
            />
          ))}
        </CustomScrollbar>

      </section>

      <section className="container my-18 space-y-18">

        <h1 className="text-4xl max-w-3xl container">
          Discover
          <br />
          <span className="font-bold">
            the latest job opportunities
          </span>
        </h1>

        <CustomScrollbar size={365}>
          {/* <SingleOffer /> */}
          {
            jobOffers.map((e,idx)=><SingleOffer key={idx} {...e} />)
          }
        </CustomScrollbar>

        <div className="container">
          <SignupDialog>
            <button className="px-8 py-4 rounded-xl bg-primary  text-white cursor-pointer">
              Browse All Jobs
            </button>
          </SignupDialog>
        </div>

      </section>
      <section className="container my-12 space-y-6">
        <h1 className="text-4xl max-w-3xl container">
          Frequently Asked Questions
          <br />
          <span className="font-bold">
            About Job Searching
          </span>
        </h1>

        <p className="container text-[16px]">
          Looking for your next opportunity? Discover job openings from different
          employers and find positions that match your skills, experience, and career
          goals. Whether you are starting your career, looking for a new challenge,
          or seeking flexible work opportunities, use our job listings to explore
          available positions, compare opportunities, and apply online with ease.
        </p>

        <div className="container flex gap-4 flex-wrap">

          <Accordilon
            title="How can I find a job on MDC?"
            content="Start by exploring our available job listings and browse opportunities by profession, location, or keywords. Review the job requirements and description, choose an opportunity that matches your profile, and follow the application process to submit your application."
          />

          <Accordilon
            title="Can I find a job without previous experience?"
            content="Yes. Some employers offer entry-level positions that do not require extensive professional experience. Look for opportunities marked as entry-level, junior, trainee, or positions where experience is not listed as a strict requirement. Focus on highlighting your skills, motivation, education, and transferable experience."
          />

          <Accordilon
            title="How can I find jobs that match my skills?"
            content="Use relevant keywords when searching for jobs and explore opportunities by profession or field. Carefully review each job description, required skills, qualifications, and responsibilities to identify positions that match your profile and career goals."
          />

          <Accordilon
            title="How can I apply for a job?"
            content="Open the job listing you are interested in and review the requirements and application details. When you are ready, follow the application instructions provided by the employer and submit the required information or documents. Make sure your application is complete and up to date before submitting it."
          />

        </div>
      </section>
      <div className="w-full h-[19em] bg-[url('/img/img_infobanner_desktop_whyuseRCIC1.jpg')] bg-cover bg-center flex justify-center items-center max-[660px]:h-[25em] max-[440px]:h-[35em]">
        <h2 className="container text-center leading-[1.5em] text-white text-[2em] max-[1135px]:text-[1.5em]">
          Finding the right job does not have to be complicated. Discover
          opportunities that match your skills, explore trusted job listings, and
          take the next step toward your career with a simple and convenient
          application process.
        </h2>
      </div>

      <section className="w-full min-h-[32em] bg-[#f7f7f7] flex justify-center items-center mt-[0.2em] max-[750px]:h-auto">

        <div className="container h-[90%] flex justify-between p-8 max-[750px]:flex-col max-[750px]:p-4">

          <div className="w-[60%] flex justify-center mt-8 pt-16 relative max-[1025px]:w-[50%] max-[750px]:w-full max-[750px]:mt-4 max-[750px]:pt-4 max-[750px]:mb-8">

            <h1 className="text-[3em] text-primary font-(--font-heading) relative after:content-[''] after:absolute after:w-8 after:h-0.5 after:bg-[#dc3545] after:top-[1.3em] after:left-0 max-[1025px]:text-[2em] max-[475px]:text-[2em]">
              Why Apply Through MDC?
            </h1>

          </div>

          <div className="w-[70%] flex flex-col justify-center gap-4 max-[750px]:w-full">

            <p className="leading-[1.6em] tracking-[0.5px] text-gray-800 font-medium">
              Finding the right job can be time-consuming. With MDC, you can
              discover relevant job opportunities in one convenient place and
              focus on positions that match your skills and career goals.
            </p>

            <p className="leading-[1.6em] tracking-[0.5px] text-gray-800 font-medium">
              Browse job opportunities from different employers, explore
              available positions, and easily access the information you need
              before applying.
            </p>

            <p className="leading-[1.6em] tracking-[0.5px] text-gray-800 font-medium">
              Whether you are starting your career or looking for your next
              opportunity, MDC helps make your job search simpler, faster, and
              more convenient.
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}

const SingleJobName = ({ name, cover }: IJobName) => {
  return (
    <SignupDialog>
      <div
        className="block w-75.5 h-42.5 shrink-0 rounded-lg group overflow-hidden relative hover:scale-95 transition-all cursor-pointer"
        title={`${name} jobs`}
        style={{
          backgroundImage: `url(${cover})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full bg-[#0000008e] p-6 flex items-end text-2xl text-white font-bold group-hover:text-[22px] transition-all">
          {name}
        </div>
      </div>
    </SignupDialog>
  )
}

export default Page