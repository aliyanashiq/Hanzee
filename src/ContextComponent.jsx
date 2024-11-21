// @ts-nocheck
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from "react";
import { BsCloudSun } from "react-icons/bs";
import { PiMedalLight } from "react-icons/pi";
import { LuMountain } from "react-icons/lu";
import { FaCar } from "react-icons/fa";
import { GiFlyingFlag } from "react-icons/gi";
import { IoCarSportOutline } from "react-icons/io5";

import  CD1  from "./assets/Cd2.png";
import  CD2  from "./assets/cd3.png";
import  CD3  from "./assets/cd4.png";
import  CD4  from "./assets/Tire-transformed.webp";

import  Prider1  from "./assets/prider1.png";
import  Prider2  from "./assets/images__3_-removebg-preview.png";
import  Prider3  from "./assets/images__1_-removebg-preview.png";
import  Prider4  from "./assets/download-removebg-preview.png";

import  CG1251  from "./assets/125(2).png";
import  CG1252 from "./assets/1253.png";
import  CG1253  from "./assets/1254.png";
import  CG1254  from "./assets/1256.png";
import  CG1255  from "./assets/CB1251.png";


import  CB1251  from "./assets/CB1251.png";
import  CB1252  from "./assets/CB1251.png";
import  CB1253  from "./assets/CB1251.png";
import  CB1254  from "./assets/CB1251.png";


import  CB1501  from "./assets/CB1251.png";
import  CB1502  from "./assets/CB150(1).png";
import  CB1503  from "./assets/images-removebg-preview.png";
import  CB1504  from "./assets/images__6_-removebg-preview.png";
import  CB1505  from "./assets/images__2_-removebg-preview.png";
// Create a Context
const ThemeContext = createContext("");

// Create a provider component
// eslint-disable-next-line react/prop-types
function ThemeProvider({ children }) {
  const data = {
    Cd70: [
      {
        image: CD1 ,
        name: "CD70 Heavy-Duty",
        price: 2300,
        size: "2.25-17",
        brand: "Bridgestone",
        description:
          "Heavy-duty tyre designed for maximum durability and performance.",
        stock: 20,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "60km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "3PMSF",
            icon: <LuMountain />,
          },
          commuter: {
            label: "Commuter",
            icon: <FaCar />,
          },
          
        },
        warranty: {
          w1: {
            topicsw: "Limited Tread Life Warranty",
            paragraphw:
              "This warranty covers premature treadwear for peace of mind.",
          },
          w2: {
            topicsw: "Goodyear 60-Day Satisfaction Guarantee",
            paragraphw:
              "Return within 60 days if not satisfied, or exchange for another Goodyear tire.",
          },
          w3: {
            topicsw:
              "Highway Auto and Light Truck Tire Replacement Limited Warranty",
            paragraphw:
              "Eligible for Replacement Limited Warranty, including noise and roughness protection.",
          },
        },
        specification: {
          s1: { topic: "Load Range", parag: "SL" },
          s2: { topic: "Speed Rating", parag: "H" },
          s3: { topic: "Measured Rim Width (in.)", parag: "6.5" },
          s4: { topic: "Revs Per Mile", parag: "800" },
          s5: { topic: "Max Inflation Pressure (PSI)", parag: "51" },
          s6: { topic: "Tread Depth (in 32nds)", parag: "11" },
          s7: { topic: "Approved Rim Width (in.)", parag: "6.0-7.5" },
          s8: { topic: "Load Index", parag: "95.0" },
          s9: {
            topic: "Uniform Tire Quality Grade (UTQG)",
            parag: "700/A/A",
          },
          s10: { topic: "Section Width (mm)", parag: "215" },
          s11: { topic: "Max Load (lbs)", parag: "1521" },
          s12: { topic: "Outside Diameter (in.)", parag: "26.14" },
          s13: { topic: "Tire Size", parag: "215/60R16" },
          s14: { topic: "Tread Pattern", parag: "All Season" },
        },
        tireFeature: {
          s1: { topic: "Superior All-Season Grip", parag: "Engineered for reliable performance in a variety of weather conditions." },
          s2: { topic: "Quiet and Comfortable Ride", parag: "Special tread pattern reduces noise for a quieter drive." },
          s3: { topic: "Durable and Long-Lasting", parag: "Advanced compounds ensure longer life for your tires." },
          s4: { topic: "Fuel Efficiency Optimization", parag: "Designed to lower rolling resistance, saving fuel." },
          s5: { topic: "Sustainability Focused", parag: "Constructed with eco-friendly materials like soybean oil." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Lifetime Tire Rotation and Balancing", para: "Enjoy free rotation and balancing for the life of your tires." },
          p2: { topic: "Highway Auto and Light Truck Tire Replacement Limited Warranty", para: "Includes noise and roughness protection. Exclusions apply." },
          p3: { topic: "Limited Tread Life Warranty", para: "Covers 50,000 mi./80,000 km for treadwear issues. Exclusions apply." },
        },
      },
      {
        image: CD2,
        name: "CD70 All-Weather",
        price: 2200,
        size: "2.25-17",
        brand: "Michelin",
        description:
          "All-weather tyre for reliable performance in all conditions.",
        stock: 25,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "60km Warranty",
            icon: <PiMedalLight />,
          },
          commuter: {
            label: "Commuter",
            icon: <IoCarSportOutline />,
          },
          sport: {
            label: "Sport Performance",
            icon: <GiFlyingFlag />,
          },
          
        },
        warranty: {
          w1: {
            topicsw: "High Mileage Warranty",
            paragraphw: "This warranty ensures high mileage coverage.",
          },
          w2: {
            topicsw: "Goodyear 60-Day Satisfaction Guarantee",
            paragraphw: "Return within 60 days if not satisfied.",
          },
          w3: {
            topicsw: "Road Hazard Protection",
            paragraphw: "Coverage for unexpected road damage.",
          },
        },
        tireFeature: {
          s1: { topic: "Cruise Quietly", parag: "The SoundComfort Technology® foam helps keep the noises of the road out of the car." },
          s2: { topic: "Made with Sustainability in Mind", parag: "Constructed, in part, with soybean oil and other sustainable raw materials."},
          s3: { topic: "Made for Comfort and Performance", parag: "Designed with a high-quality, high-performance rubber compound." },
          s4: { topic: "Get More Miles than the Predecessor", parag: "A long-lasting tread designed to help you get more miles out of your tires." },
          s5: { topic: "Made for Comfort and Performance", parag: "Designed with a high-quality, high-performance rubber compound." },
        },
        WarrantiesGuarantees:{
          p1:{topic:"Limited Tread Life Warranty" ,para:"We know you want to get the most out of your tires. That’s why we confidently back this tire with a warranty that helps protect you in the case of premature treadwear.45,000 mi./ 75,000 km Exclusions apply; see full warranty for details."},
          p2:{topic:"Goodyear 60-Day Satisfaction Guarantee" ,para:"We know you want to get the most out of your tires. That’s why we confidently back this tire with a warranty that helps protect you in the case of premature treadwear.45,000 mi./ 75,000 km Exclusions apply; see full warranty for details."},
          p3:{topic:"Highway Auto and Light Truck Tire Replacement Limited Warranty" ,para:"Eligible for Replacement Limited Warranty, including noise and roughness protection.45,000 mi./ 75,000 km Exclusions apply; see full warranty for details."},
        },
        specification: {
          s1: { topic: "Load Range", parag: "XL" },
          s2: { topic: "Speed Rating", parag: "V" },
          s3: { topic: "Measured Rim Width (in.)", parag: "7.0" },
          s4: { topic: "Revs Per Mile", parag: "780" },
          s5: { topic: "Max Inflation Pressure (PSI)", parag: "50" },
          s6: { topic: "Tread Depth (in 32nds)", parag: "10" },
          s7: { topic: "Approved Rim Width (in.)", parag: "6.5-8.0" },
          s8: { topic: "Load Index", parag: "98" },
          s9: {
            topic: "Uniform Tire Quality Grade (UTQG)",
            parag: "600/A/A",
          },
          s10: { topic: "Section Width (mm)", parag: "225" },
          s11: { topic: "Max Load (lbs)", parag: "1650" },
          s12: { topic: "Outside Diameter (in.)", parag: "27.0" },
          s13: { topic: "Tire Size", parag: "225/55R17" },
          s14: { topic: "Tread Pattern", parag: "Performance" },
        },
      },
      {
        image: CD3,
        name: "CD70 Heavy-Duty",
        price: 2300,
        size: "2.25-17",
        brand: "Bridgestone",
        description:
          "Heavy-duty tyre designed for maximum durability and performance.",
        stock: 20,
        tireFeature: {
          s1: { topic: "Exceptional Winter Performance", parag: "Designed to handle icy and snowy conditions with ease." },
          s2: { topic: "Reinforced Sidewalls", parag: "Strong sidewalls to resist punctures and damage." },
          s3: { topic: "Longer Tread Life", parag: "Engineered for extended mileage and reliable performance." },
          s4: { topic: "Enhanced Road Contact", parag: "Improved tread pattern for better stability and handling." },
          s5: { topic: "Eco-Friendly Design", parag: "Uses recycled and sustainable raw materials." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Road Hazard Replacement Warranty", para: "Covers unexpected damage from road debris or hazards." },
          p2: { topic: "Free Alignment Check", para: "Ensures proper alignment during installation to extend tire life." },
          p3: { topic: "Limited Warranty on Noise Reduction", para: "Guarantees quieter rides for up to 40,000 miles. Exclusions apply." },
        },
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "60km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "3PMSF",
            icon: <LuMountain />,
          },
         
        },
        warranty: {
          w1: {
            topicsw: "Comprehensive Warranty",
            paragraphw:
              "Protects against tread wear and manufacturing defects.",
          },
          w2: {
            topicsw: "90-Day Satisfaction Guarantee",
            paragraphw: "Exchangeable within 90 days if not satisfied.",
          },
          w3: {
            topicsw: "Road Hazard Warranty",
            paragraphw: "Provides protection against road hazards.",
          },
        },
        specification: {
          s1: { topic: "Load Range", parag: "SL" },
          s2: { topic: "Speed Rating", parag: "T" },
          s3: { topic: "Measured Rim Width (in.)", parag: "6.5" },
          s4: { topic: "Revs Per Mile", parag: "815" },
          s5: { topic: "Max Inflation Pressure (PSI)", parag: "44" },
          s6: { topic: "Tread Depth (in 32nds)", parag: "12" },
          s7: { topic: "Approved Rim Width (in.)", parag: "6.0-7.5" },
          s8: { topic: "Load Index", parag: "94" },
          s9: {
            topic: "Uniform Tire Quality Grade (UTQG)",
            parag: "680/A/B",
          },
          s10: { topic: "Section Width (mm)", parag: "215" },
          s11: { topic: "Max Load (lbs)", parag: "1477" },
          s12: { topic: "Outside Diameter (in.)", parag: "26.7" },
          s13: { topic: "Tire Size", parag: "215/60R16" },
          s14: { topic: "Tread Pattern", parag: "Touring" },
        },
      },
      {
        image: CD4,
        name: "EcoRide",
        price: 2800,
        size: "2.50-17",
        brand: "Continental",
        description:
          "Eco-friendly tyre with a focus on fuel efficiency and longevity.",
        stock: 18,
        tireFeature: {
          s1: { topic: "Advanced Traction Technology", parag: "Delivers superior grip on both dry and wet roads." },
          s2: { topic: "Noise-Reducing Design", parag: "Special foam layer minimizes road noise." },
          s3: { topic: "Performance Under Pressure", parag: "Optimized for high-speed stability and durability." },
          s4: { topic: "Eco-Conscious Manufacturing", parag: "Produced with environmentally friendly materials." },
          s5: { topic: "Enhanced Driving Comfort", parag: "Designed to reduce vibrations and provide a smooth ride." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "60-Day Performance Guarantee", para: "If unsatisfied, return within 60 days for a full refund or replacement." },
          p2: { topic: "Lifetime Flat Tire Repair", para: "Free flat repairs for the life of the tire. Exclusions apply." },
          p3: { topic: "Treadwear Limited Warranty", para: "Backed by a 55,000-mile warranty for treadwear." },
        },
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "55km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "3PMSF",
            icon: <LuMountain />,
          },
        },
        warranty: {
          w1: {
            topicsw: "Snow Performance Warranty",
            paragraphw: "Special warranty for winter performance and traction.",
          },
          w2: {
            topicsw: "50,000-Mile Warranty",
            paragraphw: "Guaranteed 50,000 miles on winter use.",
          },
          w3: {
            topicsw: "Damage Warranty",
            paragraphw: "Covers damages specific to snow and ice.",
          },
        },
        specification: {
          s1: { topic: "Load Range", parag: "SL" },
          s2: { topic: "Speed Rating", parag: "Q" },
          s3: { topic: "Measured Rim Width (in.)", parag: "6.0" },
          s4: { topic: "Revs Per Mile", parag: "850" },
          s5: { topic: "Max Inflation Pressure (PSI)", parag: "45" },
          s6: { topic: "Tread Depth (in 32nds)", parag: "13" },
          s7: { topic: "Approved Rim Width (in.)", parag: "5.5-7.0" },
          s8: { topic: "Load Index", parag: "90" },
          s9: { topic: "Uniform Tire Quality Grade (UTQG)", parag: "500/B/B" },
          s10: { topic: "Section Width (mm)", parag: "205" },
          s11: { topic: "Max Load (lbs)", parag: "1356" },
          s12: { topic: "Outside Diameter (in.)", parag: "25.4" },
          s13: { topic: "Tire Size", parag: "205/55R16" },
          s14: { topic: "Tread Pattern", parag: "Winter" },
        },
      },
      {
        image: CD1,
        name: "SpeedMaster",
        price: 5000,
        size: "3.25-18",
        brand: "Goodyear",
        description:
          "Performance tyre for high-speed stability and precision handling.",
        stock: 12,
        tireFeature: {
          s1: { topic: "High-Performance Compound", parag: "Ensures durability and exceptional handling in all conditions." },
          s2: { topic: "All-Weather Durability", parag: "Built to last through rain, snow, and heat." },
          s3: { topic: "Precision Steering Response", parag: "Provides excellent feedback and precise cornering." },
          s4: { topic: "Improved Water Dispersion", parag: "Tread grooves channel water away to reduce hydroplaning." },
          s5: { topic: "Quieter Rides", parag: "Innovative patterns ensure reduced cabin noise." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Lifetime Replacement Guarantee", para: "Replace damaged tires for free under certain conditions." },
          p2: { topic: "Free Roadside Assistance", para: "Access to 24/7 roadside assistance services for emergencies." },
          p3: { topic: "Tread Life Warranty", para: "Warranty coverage up to 65,000 miles. Exclusions apply." },
        },
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "100km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "4PMSF",
            icon: <LuMountain />,
          },
        },
        warranty: {
          w1: {
            topicsw: "Off-Road Damage Warranty",
            paragraphw: "Warranty against off-road hazards and punctures.",
          },
          w2: {
            topicsw: "100,000-Mile Warranty",
            paragraphw: "Covers up to 100,000 miles of use.",
          },
          w3: {
            topicsw: "Mud and Snow Coverage",
            paragraphw: "Protection for mud and snow conditions.",
          },
        },
        specification: {
          s1: { topic: "Load Range", parag: "XL" },
          s2: { topic: "Speed Rating", parag: "S" },
          s3: { topic: "Measured Rim Width (in.)", parag: "7.0" },
          s4: { topic: "Revs Per Mile", parag: "765" },
          s5: { topic: "Max Inflation Pressure (PSI)", parag: "55" },
          s6: { topic: "Tread Depth (in 32nds)", parag: "14" },
          s7: { topic: "Approved Rim Width (in.)", parag: "6.5-8.5" },
          s8: { topic: "Load Index", parag: "110" },
          s9: { topic: "Uniform Tire Quality Grade (UTQG)", parag: "450/A/C" },
          s10: { topic: "Section Width (mm)", parag: "245" },
          s11: { topic: "Max Load (lbs)", parag: "2337" },
          s12: { topic: "Outside Diameter (in.)", parag: "29.5" },
          s13: { topic: "Tire Size", parag: "245/75R16" },
          s14: { topic: "Tread Pattern", parag: "All-Terrain" },
        },
      },
      {
        image: CD3,
        name: "Off-Road Pro",
        price: 5500,
        size: "4.00-21",
        brand: "Dunlop",
        description:
          "Top choice for off-road and challenging terrains with extra rugged tread.",
        stock: 10,
        tireFeature: {
          s1: { topic: "Ultimate Off-Road Durability", parag: "Designed to handle the toughest terrains with ease." },
          s2: { topic: "Adaptive Tread Design", parag: "Automatically adjusts to road conditions for optimal performance." },
          s3: { topic: "High-Speed Stability", parag: "Ensures balanced and stable performance at high speeds." },
          s4: { topic: "Lightweight Construction", parag: "Reduces weight without compromising strength." },
          s5: { topic: "Eco-Friendly Materials", parag: "Incorporates sustainable elements into the design." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Comprehensive Hazard Warranty", para: "Covers punctures, blowouts, and other common hazards." },
          p2: { topic: "Limited Performance Warranty", para: "Guarantees optimal performance for 70,000 miles. Exclusions apply." },
          p3: { topic: "Noise Protection Guarantee", para: "Promised quieter rides under the warranty period. Exclusions apply." },
        },
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "90km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "5PMSF",
            icon: <LuMountain />,
          },
        },
        warranty: {
          w1: {
            topicsw: "Eco Warranty",
            paragraphw: "Covers eco-friendly wear and fuel efficiency.",
          },
          w2: {
            topicsw: "50,000-Mile Warranty",
            paragraphw:
              "Guaranteed for 50,000 miles with eco-friendly materials.",
          },
          w3: {
            topicsw: "Green Warranty",
            paragraphw: "Designed for low emissions and energy savings.",
          },
        },
        specification: {
          s1: { topic: "Load Range", parag: "SL" },
          s2: { topic: "Speed Rating", parag: "R" },
          s3: { topic: "Measured Rim Width (in.)", parag: "5.5" },
          s4: { topic: "Revs Per Mile", parag: "820" },
          s5: { topic: "Max Inflation Pressure (PSI)", parag: "40" },
          s6: { topic: "Tread Depth (in 32nds)", parag: "9" },
          s7: { topic: "Approved Rim Width (in.)", parag: "5.0-6.5" },
          s8: { topic: "Load Index", parag: "89" },
          s9: { topic: "Uniform Tire Quality Grade (UTQG)", parag: "650/B/B" },
          s10: { topic: "Section Width (mm)", parag: "185" },
          s11: { topic: "Max Load (lbs)", parag: "1235" },
          s12: { topic: "Outside Diameter (in.)", parag: "24.5" },
          s13: { topic: "Tire Size", parag: "185/65R15" },
          s14: { topic: "Tread Pattern", parag: "Eco-Friendly" },
        },
      },
    ],
    CD70Dream: [
      {
        image: CD1,
        name: "CD70 Dream Explorer",
        price: 2400,
        size: "2.50-17",
        brand: "Bridgestone",
        description:
          "Durable and reliable tyre designed for everyday commuting.",
        stock: 30,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "70km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "3PMSF",
            icon: <LuMountain />,
          },
        },
        warranty: {
          w1: {
            topicsw: "Basic Warranty",
            paragraphw: "3-year warranty covering all manufacturing defects.",
          },
          w2: {
            topicsw: "Engine Warranty",
            paragraphw:
              "1-year warranty on engine components under normal usage.",
          },
          w3: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month warranty on battery for manufacturing defects.",
          },
          w4: {
            topicsw: "Frame Warranty",
            paragraphw:
              "Lifetime warranty on the frame for structural defects.",
          },
          w5: {
            topicsw: "Paint Warranty",
            paragraphw: "1-year warranty on paint against fading and peeling.",
          },
        },
        tireFeature: {
          s1: { topic: "Cruise Quietly", parag: "The SoundComfort Technology® foam helps keep the noises of the road out of the car." },
          s2: { topic: "Fuel Efficiency Optimized", parag: "Designed to reduce fuel consumption for longer rides." },
          s3: { topic: "Enhanced Wet Traction", parag: "Improved tread design ensures safety on wet surfaces." },
          s4: { topic: "Durability for Long Rides", parag: "Specially crafted for extended mileage and reliability." },
          s5: { topic: "Eco-Friendly Composition", parag: "Built with sustainable and recyclable materials." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Limited Tread Life Warranty", para: "Covers premature treadwear for up to 40,000 miles. Exclusions apply." },
          p2: { topic: "60-Day Satisfaction Guarantee", para: "Return within 60 days if not satisfied with performance. Exclusions apply." },
          p3: { topic: "Comprehensive Hazard Coverage", para: "Protects against common road hazards like punctures." },
        },
        specification: {
          s1: { topic: "Engine Type", parag: "Single-cylinder, 4-stroke" },
          s2: { topic: "Fuel Tank Capacity", parag: "3.6 liters" },
          s3: { topic: "Max Power", parag: "5.2 hp @ 8,000 rpm" },
          s4: { topic: "Max Torque", parag: "5.4 Nm @ 6,000 rpm" },
          s5: { topic: "Transmission", parag: "4-speed constant mesh" },
          s6: { topic: "Brakes", parag: "Drum brakes (front and rear)" },
          s7: {
            topic: "Suspension",
            parag: "Telescopic front, twin shock rear",
          },
          s8: { topic: "Seat Height", parag: "765 mm" },
          s9: { topic: "Ground Clearance", parag: "135 mm" },
          s10: { topic: "Kerb Weight", parag: "96 kg" },
          s11: { topic: "Tire Size (Front)", parag: "2.50 - 17" },
          s12: { topic: "Tire Size (Rear)", parag: "2.75 - 17" },
        },
      },
      {
        image: CD2,
        name: "CD70 Dream Comfort",
        price: 2650,
        size: "2.75-17",
        brand: "Michelin",
        description:
          "Engineered for a smoother ride, providing exceptional comfort and control.",
        stock: 22,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "65km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "2PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "All-Season Performance", parag: "Engineered for reliable grip in all weather conditions." },
          s2: { topic: "Quiet and Comfortable Ride", parag: "Tread design reduces vibrations and road noise." },
          s3: { topic: "Durable Rubber Compound", parag: "High-quality materials ensure long-lasting performance." },
          s4: { topic: "Optimized for City Roads", parag: "Designed to handle city driving with ease and efficiency." },
          s5: { topic: "Energy Efficient", parag: "Low rolling resistance helps save fuel on every ride." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Lifetime Flat Repair Service", para: "Covers puncture repairs for the life of the tire." },
          p2: { topic: "Treadwear Warranty", para: "Backed by a warranty covering 50,000 miles. Exclusions apply." },
          p3: { topic: "Roadside Assistance Program", para: "24/7 roadside assistance included for emergencies." },
        },
        warranty: {
          w1: {
            topicsw: "Comprehensive Warranty",
            paragraphw:
              "2-year warranty on all parts, excluding wear and tear.",
          },
          w2: {
            topicsw: "Tire Warranty",
            paragraphw:
              "6-month warranty on tire defects under normal conditions.",
          },
          w3: {
            topicsw: "Engine Warranty",
            paragraphw:
              "12-month warranty for engine malfunction under regular use.",
          },
          w4: {
            topicsw: "Roadside Assistance",
            paragraphw:
              "1-year free roadside assistance in case of breakdowns.",
          },
        },
        specification: {
          s1: { topic: "Fuel Economy", parag: "60-65 km/l" },
          s2: { topic: "Engine Displacement", parag: "72cc" },
          s3: {
            topic: "Ignition System",
            parag: "Transistorized Coil Ignition",
          },
          s4: { topic: "Compression Ratio", parag: "9.0:1" },
          s5: { topic: "Lubrication", parag: "Wet sump" },
          s6: { topic: "Front Brake", parag: "Drum brake, 130 mm" },
          s7: { topic: "Rear Brake", parag: "Drum brake, 130 mm" },
          s8: { topic: "Frame Material", parag: "Steel" },
          s9: { topic: "Speedometer", parag: "Analog" },
          s10: { topic: "Headlamp", parag: "12V, 35W/35W halogen" },
        },
      },
      {
        image: CD3,
        name: "CD70 Dream Sport",
        price: 2800,
        size: "3.00-17",
        brand: "Dunlop",
        description:
          "Sporty tyre designed for agility and responsive handling on city roads.",
        stock: 25,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "80km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "4PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Exceptional Traction", parag: "Superior grip for smooth handling on rough terrains." },
          s2: { topic: "Weather-Resistant Build", parag: "Performs well under varying temperature conditions." },
          s3: { topic: "High-Speed Stability", parag: "Ensures a steady and balanced ride at high speeds." },
          s4: { topic: "Long-Lasting Tread", parag: "Special compounds extend tread life for more miles." },
          s5: { topic: "Noise Reduction Technology", parag: "Designed to keep road noise to a minimum for quiet rides." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Noise-Free Guarantee", para: "Guaranteed reduced cabin noise for up to 45,000 miles." },
          p2: { topic: "Eco-Friendly Warranty", para: "Covers tires made with sustainable materials. Exclusions apply." },
          p3: { topic: "Performance Guarantee", para: "Promised performance for all terrains and conditions." },
        },
        warranty: {
          w1: {
            topicsw: "Service Warranty",
            paragraphw:
              "2-year warranty for services and parts replaced during servicing.",
          },
          w2: {
            topicsw: "Frame & Engine Warranty",
            paragraphw: "Lifetime warranty on the frame and engine components.",
          },
          w3: {
            topicsw: "Battery Warranty",
            paragraphw: "6-month warranty on battery for defects.",
          },
        },
        specification: {
          s1: { topic: "Engine Type", parag: "4-stroke, single-cylinder" },
          s2: { topic: "Max Torque", parag: "5.4 Nm @ 6,000 rpm" },
          s3: { topic: "Transmission", parag: "4-speed, constant mesh" },
          s4: { topic: "Cooling System", parag: "Air-cooled" },
          s5: { topic: "Front Suspension", parag: "Telescopic" },
          s6: { topic: "Rear Suspension", parag: "Dual shock" },
          s7: { topic: "Fuel Tank Capacity", parag: "3.6 liters" },
          s8: { topic: "Fuel Economy", parag: "60 km/l" },
          s9: { topic: "Top Speed", parag: "85 km/h" },
          s10: { topic: "Brake System", parag: "Drum brakes" },
        },
      },
      {
        image: CD4,
        name: "CD70 Dream Heavy Duty",
        price: 3000,
        size: "2.25-17",
        brand: "Pirelli",
        description:
          "Heavy-duty tyre built for extra load capacity and tough road conditions.",
        stock: 20,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "90km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "5PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Reinforced Sidewalls", parag: "Designed to resist punctures and absorb shocks." },
          s2: { topic: "Optimized for Urban Roads", parag: "Effortless handling on crowded city streets." },
          s3: { topic: "Comfortable Ride Experience", parag: "Reduces vibrations for a smooth, enjoyable ride." },
          s4: { topic: "Efficient Water Dispersion", parag: "Tread pattern channels water to prevent hydroplaning." },
          s5: { topic: "Lightweight Construction", parag: "Reduces weight for improved fuel efficiency." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Lifetime Replacement Guarantee", para: "Free replacement for manufacturing defects. Exclusions apply." },
          p2: { topic: "Extended Mileage Warranty", para: "Covers 60,000 miles of treadwear. Exclusions apply." },
          p3: { topic: "Road Hazard Warranty", para: "Includes coverage for unexpected damages caused by road debris." },
        },
        warranty: {
          w1: {
            topicsw: "Factory Warranty",
            paragraphw:
              "1-year comprehensive warranty including parts and labor.",
          },
          w2: {
            topicsw: "Paint and Exterior Warranty",
            paragraphw: "1-year warranty on paint against fading and chipping.",
          },
          w3: {
            topicsw: "Extended Warranty",
            paragraphw:
              "Option to extend the warranty for up to 3 years with additional coverage.",
          },
        },
        specification: {
          s1: { topic: "Engine Cooling", parag: "Air-cooled" },
          s2: { topic: "Bore x Stroke", parag: "47 x 41.4 mm" },
          s3: { topic: "Fuel Type", parag: "Petrol" },
          s4: { topic: "Fuel Tank Material", parag: "Steel" },
          s5: { topic: "Tire Type", parag: "Bias Ply" },
          s6: { topic: "Tire Size (Front)", parag: "2.50 - 17" },
          s7: { topic: "Tire Size (Rear)", parag: "2.75 - 17" },
          s8: { topic: "Ground Clearance", parag: "135 mm" },
          s9: { topic: "Kerb Weight", parag: "96 kg" },
          s10: { topic: "Max Speed", parag: "85 km/h" },
          s11: { topic: "Color Options", parag: "Red, Black, Blue" },
        },
      },
      {
        image: CD2,
        name: "CD70 Dream Eco",
        price: 2550,
        size: "2.50-17",
        brand: "Goodyear",
        description:
          "Eco-friendly tyre optimized for fuel efficiency and longevity.",
        stock: 18,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "75km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "3PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Ultimate Off-Road Performance", parag: "Handles rough and unpaved terrains effortlessly." },
          s2: { topic: "Eco-Conscious Production", parag: "Manufactured using environment-friendly techniques." },
          s3: { topic: "Precision Handling", parag: "Provides accurate and responsive steering feedback." },
          s4: { topic: "Adaptive Grip Technology", parag: "Adjusts grip based on road conditions for enhanced safety." },
          s5: { topic: "Superior Tread Life", parag: "Designed to last longer, ensuring better value." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Comprehensive Tread Life Warranty", para: "Covers treadwear up to 70,000 miles. Exclusions apply." },
          p2: { topic: "Satisfaction Guarantee", para: "Refund or replacement if unsatisfied within 60 days. Exclusions apply." },
          p3: { topic: "Flat Tire Assistance", para: "Covers free repair or replacement of punctured tires. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Limited Warranty",
            paragraphw:
              "2 years warranty on all components except consumables.",
          },
          w2: {
            topicsw: "Battery Warranty",
            paragraphw: "6-month warranty on battery defects.",
          },
          w3: {
            topicsw: "Frame Warranty",
            paragraphw: "Lifetime warranty on frame structure.",
          },
        },
        specification: {
          s1: { topic: "Engine Displacement", parag: "72cc" },
          s2: { topic: "Power Output", parag: "5.2 hp" },
          s3: { topic: "Max Torque", parag: "5.4 Nm" },
          s4: { topic: "Transmission", parag: "4-speed constant mesh" },
          s5: { topic: "Brakes", parag: "130 mm drum (front & rear)" },
          s6: { topic: "Seat Height", parag: "765 mm" },
          s7: { topic: "Kerb Weight", parag: "96 kg" },
          s8: { topic: "Fuel Tank Capacity", parag: "3.6 liters" },
          s9: { topic: "Suspension (Front)", parag: "Telescopic Fork" },
          s10: { topic: "Suspension (Rear)", parag: "Twin Shock Absorbers" },
          s11: {
            topic: "Tire Size",
            parag: "2.50 - 17 (Front), 2.75 - 17 (Rear)",
          },
        },
      },
      {
        image: CD4,
        name: "CD70 Dream Trail",
        price: 3100,
        size: "3.25-18",
        brand: "Continental",
        description:
          "Trail-oriented tyre for enhanced grip and durability on rugged paths.",
        stock: 16,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "85km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "5PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Advanced Wet Grip", parag: "Maximized water dispersion for improved wet road performance." },
          s2: { topic: "Stable Cornering", parag: "Provides balance and control during sharp turns." },
          s3: { topic: "Fuel-Saving Tread Design", parag: "Optimized for low rolling resistance, improving fuel economy." },
          s4: { topic: "Noise-Free Technology", parag: "Reduces noise levels significantly for quieter rides." },
          s5: { topic: "Weather Adaptability", parag: "Performs consistently across all weather conditions." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Lifetime Alignment Checks", para: "Enjoy free alignment checks for optimal performance." },
          p2: { topic: "Performance Warranty", para: "Guaranteed performance under varied conditions for 55,000 miles." },
          p3: { topic: "Eco-Friendly Material Coverage", para: "Covers sustainable material-based tires. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Comprehensive Warranty",
            paragraphw: "1-year full warranty on parts and services.",
          },
          w2: {
            topicsw: "Engine Warranty",
            paragraphw: "1-year warranty for engine components.",
          },
          w3: {
            topicsw: "Battery Warranty",
            paragraphw: "6-month warranty on battery.",
          },
          w4: {
            topicsw: "Paint Warranty",
            paragraphw: "6-month warranty on paint finish against fading.",
          },
        },
        specification: {
          s1: { topic: "Engine Type", parag: "Single-cylinder, 4-stroke" },
          s2: { topic: "Fuel System", parag: "Carburetor" },
          s3: { topic: "Cooling System", parag: "Air-cooled" },
          s4: { topic: "Max Torque", parag: "5.4 Nm @ 6,000 rpm" },
          s5: { topic: "Brakes", parag: "Drum brake, 130 mm" },
          s6: { topic: "Max Power", parag: "5.2 hp @ 8,000 rpm" },
          s7: { topic: "Fuel Economy", parag: "60 km/l" },
          s8: { topic: "Seat Height", parag: "765 mm" },
          s9: { topic: "Ground Clearance", parag: "135 mm" },
          s10: { topic: "Weight", parag: "96 kg" },
          s11: { topic: "Top Speed", parag: "85 km/h" },
        },
      },
    ],
    Prider: [
        {
          image:Prider1 ,
          name: "Prider Speed Pro",
          price: 2200,
          size: "2.50-17",
          brand: "Prider",
          description:
            "High-performance tyre designed for speed enthusiasts and sporty rides.",
          stock: 35,
          qualityPoints: {
            allSeasonTire: {
              label: "All Season Tire",
              icon: <BsCloudSun />,
            },
            warranty: {
              label: "60km Warranty",
              icon: <PiMedalLight />,
            },
            speed: {
              label: "5PMSF",
              icon: <LuMountain />,
            },
          },
          tireFeature: {
            s1: { topic: "Quiet and Smooth Rides", parag: "Designed to reduce road noise and offer exceptional comfort." },
            s2: { topic: "Eco-Friendly Design", parag: "Manufactured using sustainable materials to minimize environmental impact." },
            s3: { topic: "Superior Traction", parag: "Provides excellent grip on wet and dry roads." },
            s4: { topic: "Extended Tread Life", parag: "Built for durability, ensuring a long-lasting performance." },
            s5: { topic: "Fuel Efficiency", parag: "Optimized for lower rolling resistance, saving fuel costs." },
          },
          WarrantiesGuarantees: {
            p1: { topic: "Lifetime Treadwear Warranty", para: "Backed by a comprehensive treadwear warranty for 60,000 miles. Exclusions apply." },
            p2: { topic: "30-Day Satisfaction Guarantee", para: "Refund or replacement if not satisfied within 30 days of purchase." },
            p3: { topic: "Road Hazard Protection", para: "Covers punctures and other road-related damages. Exclusions apply." },
          },
          warranty: {
            w1: {
              topicsw: "Standard Warranty",
              paragraphw:
                "2-year warranty covering defects in material and workmanship.",
            },
            w2: {
              topicsw: "Engine Warranty",
              paragraphw:
                "1-year warranty on engine components, excluding wear and tear.",
            },
            w3: {
              topicsw: "Battery Warranty",
              paragraphw:
                "6-month warranty on battery defects under normal usage.",
            },
            w4: {
              topicsw: "Frame Warranty",
              paragraphw:
                "Lifetime warranty on the frame against structural defects.",
            },
          },
          specification: {
            s1: { topic: "Engine Type", parag: "Single-cylinder, 4-stroke" },
            s2: { topic: "Fuel Tank Capacity", parag: "3.5 liters" },
            s3: { topic: "Max Power", parag: "5.5 hp @ 8,000 rpm" },
            s4: { topic: "Max Torque", parag: "6.0 Nm @ 6,000 rpm" },
            s5: { topic: "Transmission", parag: "4-speed constant mesh" },
            s6: { topic: "Brakes", parag: "Drum brakes (front and rear)" },
            s7: {
              topic: "Suspension",
              parag: "Telescopic front, twin shock rear",
            },
            s8: { topic: "Seat Height", parag: "775 mm" },
            s9: { topic: "Ground Clearance", parag: "160 mm" },
            s10: { topic: "Kerb Weight", parag: "98 kg" },
            s11: { topic: "Tire Size (Front)", parag: "2.50 - 17" },
            s12: { topic: "Tire Size (Rear)", parag: "2.75 - 17" },
          },
        },
        {
          image: Prider2,
          name: "Prider Comfort Plus",
          price: 2400,
          size: "2.75-17",
          brand: "Prider",
          description:
            "Designed for ultimate comfort, providing a smooth and quiet ride on all roads.",
          stock: 28,
          qualityPoints: {
            allSeasonTire: {
              label: "All Season Tire",
              icon: <BsCloudSun />,
            },
            warranty: {
              label: "70km Warranty",
              icon: <PiMedalLight />,
            },
            speed: {
              label: "3PMSF",
              icon: <LuMountain />,
            },
          },
          tireFeature: {
            s1: { topic: "Enhanced Performance", parag: "Designed to provide top-notch handling and stability." },
            s2: { topic: "All-Weather Capability", parag: "Performs reliably in both summer and winter conditions." },
            s3: { topic: "High-Speed Safety", parag: "Engineered to maintain stability at high speeds." },
            s4: { topic: "Improved Comfort", parag: "Absorbs shocks for a smoother, more comfortable ride." },
            s5: { topic: "Optimized Water Dispersion", parag: "Channels water efficiently to reduce hydroplaning risk." },
          },
          WarrantiesGuarantees: {
            p1: { topic: "Comprehensive Mileage Warranty", para: "Guaranteed performance for up to 50,000 miles. Exclusions apply." },
            p2: { topic: "Flat Tire Assistance", para: "Free repair or replacement for flat tires. Exclusions apply." },
            p3: { topic: "Noise-Free Ride Guarantee", para: "Guaranteed quiet performance on all road surfaces. Exclusions apply." },
          },
          warranty: {
            w1: {
              topicsw: "Comprehensive Warranty",
              paragraphw:
                "2-year warranty on all parts and labor, excluding wearables.",
            },
            w2: {
              topicsw: "Engine Warranty",
              paragraphw:
                "1-year warranty for engine failure due to manufacturing defects.",
            },
            w3: {
              topicsw: "Roadside Assistance",
              paragraphw:
                "1-year free roadside assistance in case of breakdowns.",
            },
            w4: {
              topicsw: "Tire Warranty",
              paragraphw:
                "6-month warranty for defects in tires under normal use.",
            },
          },
          specification: {
            s1: { topic: "Engine Displacement", parag: "72cc" },
            s2: { topic: "Fuel Efficiency", parag: "65 km/l" },
            s3: {
              topic: "Ignition System",
              parag: "Transistorized Coil Ignition",
            },
            s4: { topic: "Compression Ratio", parag: "9.1:1" },
            s5: { topic: "Lubrication", parag: "Wet sump" },
            s6: { topic: "Brakes", parag: "130 mm drum (front & rear)" },
            s7: { topic: "Front Suspension", parag: "Telescopic fork" },
            s8: { topic: "Rear Suspension", parag: "Twin shock absorbers" },
            s9: { topic: "Kerb Weight", parag: "100 kg" },
            s10: { topic: "Top Speed", parag: "90 km/h" },
            s11: { topic: "Speedometer", parag: "Analog" },
          },
        },
        {
          image: Prider3,
          name: "Prider Trail Master",
          price: 2600,
          size: "3.00-17",
          brand: "Prider",
          description:
            "Durable tyre built for rugged trails, providing excellent grip and stability.",
          stock: 20,
          qualityPoints: {
            allSeasonTire: {
              label: "All Season Tire",
              icon: <BsCloudSun />,
            },
            warranty: {
              label: "75km Warranty",
              icon: <PiMedalLight />,
            },
            speed: {
              label: "4PMSF",
              icon: <LuMountain />,
            },
          },
          tireFeature: {
            s1: { topic: "Durability for Rough Roads", parag: "Specially crafted for rugged terrain and off-road performance." },
            s2: { topic: "Low Noise Technology", parag: "Reduces cabin noise for a peaceful driving experience." },
            s3: { topic: "Precision Handling", parag: "Enhanced control and responsiveness in tight corners." },
            s4: { topic: "High-Performance Compound", parag: "Premium materials ensure maximum longevity and performance." },
            s5: { topic: "Eco-Conscious Manufacturing", parag: "Made with processes that prioritize sustainability." },
          },
          WarrantiesGuarantees: {
            p1: { topic: "Treadwear Protection", para: "Comes with a warranty that covers up to 70,000 miles. Exclusions apply." },
            p2: { topic: "Satisfaction Guarantee", para: "Return within 45 days if not completely satisfied. Exclusions apply." },
            p3: { topic: "Hazard Coverage Warranty", para: "Protects against damage caused by road hazards. Exclusions apply." },
          },
          warranty: {
            w1: {
              topicsw: "Factory Warranty",
              paragraphw:
                "2-year comprehensive warranty for all major components.",
            },
            w2: {
              topicsw: "Engine Warranty",
              paragraphw:
                "1-year engine warranty for defects under normal use.",
            },
            w3: {
              topicsw: "Frame Warranty",
              paragraphw: "Lifetime frame warranty against structural defects.",
            },
            w4: {
              topicsw: "Battery Warranty",
              paragraphw:
                "6-month warranty on the battery for manufacturing defects.",
            },
          },
          specification: {
            s1: { topic: "Engine Cooling", parag: "Air-cooled" },
            s2: { topic: "Bore x Stroke", parag: "47 x 41.4 mm" },
            s3: { topic: "Fuel System", parag: "Carburetor" },
            s4: { topic: "Max Torque", parag: "6.2 Nm @ 6,500 rpm" },
            s5: { topic: "Lubrication", parag: "Wet sump" },
            s6: { topic: "Frame Material", parag: "Steel" },
            s7: { topic: "Tire Size (Front)", parag: "2.50 - 17" },
            s8: { topic: "Tire Size (Rear)", parag: "2.75 - 17" },
            s9: { topic: "Ground Clearance", parag: "160 mm" },
            s10: { topic: "Max Speed", parag: "95 km/h" },
            s11: { topic: "Headlamp", parag: "12V, 35W/35W halogen" },
          },
        },
        {
          image: Prider4,
          name: "Prider City Glide",
          price: 2100,
          size: "2.50-16",
          brand: "Prider",
          description:
            "Optimized for city commuting, offering a smooth ride with reliable traction.",
          stock: 40,
          qualityPoints: {
            allSeasonTire: {
              label: "All Season Tire",
              icon: <BsCloudSun />,
            },
            warranty: {
              label: "65km Warranty",
              icon: <PiMedalLight />,
            },
            speed: {
              label: "2PMSF",
              icon: <LuMountain />,
            },
          },
          tireFeature: {
            s1: { topic: "Advanced Grip Technology", parag: "Offers exceptional traction on wet and icy roads." },
            s2: { topic: "Long-Lasting Tread Design", parag: "Engineered for extended durability and wear resistance." },
            s3: { topic: "Lightweight Construction", parag: "Reduces weight for improved fuel efficiency and handling." },
            s4: { topic: "Comfort-Driven Design", parag: "Absorbs road vibrations for a smooth, noise-free ride." },
            s5: { topic: "Adaptability to Weather", parag: "Performs consistently across varying weather conditions." },
          },
          WarrantiesGuarantees: {
            p1: { topic: "Lifetime Roadside Assistance", para: "Covers roadside emergencies including flat tires. Exclusions apply." },
            p2: { topic: "Mileage Guarantee", para: "Covers up to 65,000 miles of treadwear. Exclusions apply." },
            p3: { topic: "Eco-Tire Replacement Warranty", para: "Includes replacement for environmentally friendly tires. Exclusions apply." },
          },
          warranty: {
            w1: {
              topicsw: "Comprehensive Warranty",
              paragraphw:
                "2-year full warranty covering all parts and components.",
            },
            w2: {
              topicsw: "Battery Warranty",
              paragraphw: "1-year warranty on battery against defects.",
            },
            w3: {
              topicsw: "Paint Warranty",
              paragraphw:
                "1-year warranty on paint against fading or chipping.",
            },
            w4: {
              topicsw: "Roadside Assistance",
              paragraphw: "1-year free roadside assistance provided.",
            },
          },
          specification: {
            s1: { topic: "Engine Displacement", parag: "72cc" },
            s2: { topic: "Fuel Economy", parag: "65 km/l" },
            s3: { topic: "Compression Ratio", parag: "9.1:1" },
            s4: { topic: "Transmission", parag: "4-speed constant mesh" },
            s5: { topic: "Max Power", parag: "5.5 hp @ 8,000 rpm" },
            s6: { topic: "Brakes", parag: "Drum brakes, 130 mm" },
            s7: { topic: "Front Suspension", parag: "Telescopic" },
            s8: { topic: "Rear Suspension", parag: "Twin shock absorbers" },
            s9: { topic: "Seat Height", parag: "780 mm" },
            s10: { topic: "Ground Clearance", parag: "165 mm" },
            s11: { topic: "Kerb Weight", parag: "98 kg" },
            s12: { topic: "Top Speed", parag: "90 km/h" },
          },
        },
        {
          image: Prider1,
          name: "Prider Eco Drive",
          price: 2300,
          size: "2.75-17",
          brand: "Prider",
          description:
            "Eco-friendly tyre focused on fuel efficiency and long-lasting performance.",
          stock: 32,
          qualityPoints: {
            allSeasonTire: {
              label: "All Season Tire",
              icon: <BsCloudSun />,
            },
            warranty: {
              label: "80km Warranty",
              icon: <PiMedalLight />,
            },
            speed: {
              label: "3PMSF",
              icon: <LuMountain />,
            },
          },
          tireFeature: {
            s1: { topic: "Reinforced Sidewalls", parag: "Protects against impact damage and improves stability." },
            s2: { topic: "Urban Road Optimization", parag: "Ideal for city driving with superior performance." },
            s3: { topic: "Hydroplaning Resistance", parag: "Efficient water dispersion ensures a safer ride on wet roads." },
            s4: { topic: "Noise-Reduction Features", parag: "Advanced technology to minimize noise levels." },
            s5: { topic: "Fuel-Saving Technology", parag: "Enhances fuel economy with low rolling resistance." },
          },
          WarrantiesGuarantees: {
            p1: { topic: "Lifetime Manufacturing Defect Warranty", para: "Covers replacement for any manufacturing defects. Exclusions apply." },
            p2: { topic: "Extended Performance Warranty", para: "Backed for up to 75,000 miles of performance. Exclusions apply." },
            p3: { topic: "Hazard Warranty Protection", para: "Includes protection against accidental damage. Exclusions apply." },
          },
          warranty: {
            w1: {
              topicsw: "Full Warranty",
              paragraphw:
                "2-year warranty covering engine and electrical components.",
            },
            w2: {
              topicsw: "Roadside Assistance",
              paragraphw: "Free 1-year roadside assistance for breakdowns.",
            },
            w3: {
              topicsw: "Battery Warranty",
              paragraphw:
                "6-month battery warranty for defects under normal usage.",
            },
          },
          specification: {
            s1: { topic: "Engine Displacement", parag: "72cc" },
            s2: { topic: "Max Power", parag: "5.5 hp @ 8,000 rpm" },
            s3: { topic: "Max Torque", parag: "6.0 Nm @ 6,500 rpm" },
            s4: { topic: "Lubrication", parag: "Wet sump" },
            s5: { topic: "Fuel Tank Capacity", parag: "3.5 liters" },
            s6: { topic: "Front Suspension", parag: "Telescopic" },
            s7: { topic: "Rear Suspension", parag: "Twin shock absorbers" },
            s8: { topic: "Kerb Weight", parag: "100 kg" },
            s9: { topic: "Top Speed", parag: "90 km/h" },
            s10: { topic: "Ground Clearance", parag: "165 mm" },
          },
        },
        {
          image: Prider2,
          name: "Prider Heavy Duty",
          price: 3000,
          size: "3.25-18",
          brand: "Prider",
          description:
            "Built for heavy-duty use, ideal for vehicles with higher load capacities.",
          stock: 15,
          qualityPoints: {
            allSeasonTire: {
              label: "All Season Tire",
              icon: <BsCloudSun />,
            },
            warranty: {
              label: "90km Warranty",
              icon: <PiMedalLight />,
            },
            speed: {
              label: "5PMSF",
              icon: <LuMountain />,
            },
          },
          tireFeature: {
            s1: { topic: "Optimized Cornering Grip", parag: "Ensures stability and safety during sharp turns." },
            s2: { topic: "All-Terrain Capability", parag: "Performs well on both highways and rough roads." },
            s3: { topic: "Energy-Efficient Compound", parag: "Minimizes energy loss, improving fuel economy." },
            s4: { topic: "Durable and Reliable", parag: "Constructed with high-quality materials for extended life." },
            s5: { topic: "Comfort-First Approach", parag: "Designed to absorb shocks for a smoother ride." },
          },
          WarrantiesGuarantees: {
            p1: { topic: "Flat Tire Repair Coverage", para: "Includes free flat tire repair for the life of the tire. Exclusions apply." },
            p2: { topic: "Satisfaction Return Policy", para: "Eligible for return or exchange within 30 days. Exclusions apply." },
            p3: { topic: "Lifetime Road Hazard Warranty", para: "Protects against road-related damages for the life of the tire. Exclusions apply." },
          },
          warranty: {
            w1: {
              topicsw: "Full Warranty",
              paragraphw:
                "2-year warranty covering engine and electrical components.",
            },
            w2: {
              topicsw: "Roadside Assistance",
              paragraphw: "Free 1-year roadside assistance for breakdowns.",
            },
            w3: {
              topicsw: "Battery Warranty",
              paragraphw:
                "6-month battery warranty for defects under normal usage.",
            },
          },
          specification: {
            s1: { topic: "Engine Displacement", parag: "72cc" },
            s2: { topic: "Max Power", parag: "5.5 hp @ 8,000 rpm" },
            s3: { topic: "Max Torque", parag: "6.0 Nm @ 6,500 rpm" },
            s4: { topic: "Lubrication", parag: "Wet sump" },
            s5: { topic: "Fuel Tank Capacity", parag: "3.5 liters" },
            s6: { topic: "Front Suspension", parag: "Telescopic" },
            s7: { topic: "Rear Suspension", parag: "Twin shock absorbers" },
            s8: { topic: "Kerb Weight", parag: "100 kg" },
            s9: { topic: "Top Speed", parag: "90 km/h" },
            s10: { topic: "Ground Clearance", parag: "165 mm" },
          },
        },
    ],
    CG125: [
      {
        image: CG1251,
        name: "CG125 Sport Pro",
        price: 2100,
        size: "2.50-17",
        brand: "CG125",
        description:
          "Sporty tyre designed for agile handling and responsive performance on city roads.",
        stock: 40,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "60km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "3PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Enhanced Stability", parag: "Provides excellent stability for high-speed rides." },
          s2: { topic: "Durable Construction", parag: "Engineered for long-lasting performance on all terrains." },
          s3: { topic: "Superior Grip", parag: "Offers exceptional traction on both wet and dry surfaces." },
          s4: { topic: "Fuel-Efficient Design", parag: "Reduces rolling resistance for improved fuel efficiency." },
          s5: { topic: "Smooth Handling", parag: "Ensures precise and responsive control during rides." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Tread Life Warranty", para: "Covers up to 50,000 miles of treadwear. Exclusions apply." },
          p2: { topic: "30-Day Ride Guarantee", para: "Return or exchange if unsatisfied within 30 days. Exclusions apply." },
          p3: { topic: "Puncture Protection Warranty", para: "Covers repair or replacement for punctured tires. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Standard Warranty",
            paragraphw:
              "2-year warranty covering defects in material and workmanship.",
          },
          w2: {
            topicsw: "Engine Warranty",
            paragraphw:
              "1-year warranty on engine components, excluding wear and tear.",
          },
          w3: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month warranty on battery defects under normal usage.",
          },
          w4: {
            topicsw: "Frame Warranty",
            paragraphw:
              "Lifetime warranty on the frame against structural defects.",
          },
        },
        specification: {
          s1: { topic: "Engine Type", parag: "Single-cylinder, 4-stroke" },
          s2: { topic: "Fuel Tank Capacity", parag: "12 liters" },
          s3: { topic: "Max Power", parag: "11.0 hp @ 8,000 rpm" },
          s4: { topic: "Max Torque", parag: "9.5 Nm @ 6,500 rpm" },
          s5: { topic: "Transmission", parag: "5-speed constant mesh" },
          s6: { topic: "Brakes", parag: "Drum brakes (front and rear)" },
          s7: {
            topic: "Suspension",
            parag: "Telescopic front, twin shock rear",
          },
          s8: { topic: "Seat Height", parag: "790 mm" },
          s9: { topic: "Ground Clearance", parag: "160 mm" },
          s10: { topic: "Kerb Weight", parag: "111 kg" },
          s11: { topic: "Tire Size (Front)", parag: "3.00 - 18" },
          s12: { topic: "Tire Size (Rear)", parag: "3.25 - 18" },
        },
      },
      {
        image: CG1252,
        name: "CG125 Comfort Max",
        price: 2300,
        size: "2.75-17",
        brand: "CG125",
        description:
          "Enhanced comfort tyre, ideal for long rides, offering reduced road noise and smooth performance.",
        stock: 30,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "65km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "2PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "All-Weather Performance", parag: "Delivers reliable performance in both summer and winter conditions." },
          s2: { topic: "Noise Reduction Technology", parag: "Minimizes road noise for a quiet ride." },
          s3: { topic: "Long-Lasting Tread", parag: "Built to withstand wear and tear for extended use." },
          s4: { topic: "Optimized Water Dispersion", parag: "Reduces hydroplaning risk by efficiently channeling water." },
          s5: { topic: "Rugged Design", parag: "Ideal for tough road conditions and off-road performance." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Limited Mileage Warranty", para: "Covers up to 60,000 miles of tread life. Exclusions apply." },
          p2: { topic: "Road Hazard Coverage", para: "Protects against accidental damages like cuts and impacts. Exclusions apply." },
          p3: { topic: "Satisfaction Guarantee", para: "Refund or replacement if not satisfied within 45 days. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Comprehensive Warranty",
            paragraphw:
              "2-year warranty on all parts and labor, excluding wearables.",
          },
          w2: {
            topicsw: "Engine Warranty",
            paragraphw:
              "1-year warranty for engine failure due to manufacturing defects.",
          },
          w3: {
            topicsw: "Roadside Assistance",
            paragraphw:
              "1-year free roadside assistance in case of breakdowns.",
          },
          w4: {
            topicsw: "Tire Warranty",
            paragraphw:
              "6-month warranty for defects in tires under normal use.",
          },
        },
        specification: {
          s1: { topic: "Engine Displacement", parag: "124cc" },
          s2: { topic: "Fuel Economy", parag: "50 km/l" },
          s3: { topic: "Compression Ratio", parag: "9.0:1" },
          s4: {
            topic: "Ignition System",
            parag: "CDI (Capacitor Discharge Ignition)",
          },
          s5: { topic: "Lubrication", parag: "Wet sump" },
          s6: { topic: "Brakes", parag: "Drum brakes (front & rear)" },
          s7: { topic: "Front Suspension", parag: "Telescopic fork" },
          s8: { topic: "Rear Suspension", parag: "Twin shock absorbers" },
          s9: { topic: "Kerb Weight", parag: "113 kg" },
          s10: { topic: "Top Speed", parag: "100 km/h" },
          s11: { topic: "Speedometer", parag: "Analog" },
        },
      },
      {
        image: CG1253,
        name: "CG125 Trail Blazer",
        price: 2500,
        size: "3.00-17",
        brand: "CG125",
        description:
          "Built for off-road adventures, offering superior grip and durability on rough terrains.",
        stock: 25,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "70km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "4PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Exceptional Durability", parag: "Designed to endure heavy loads and tough road conditions." },
          s2: { topic: "High-Speed Safety", parag: "Maintains stability and control at high speeds." },
          s3: { topic: "Comfort-Focused Design", parag: "Absorbs road vibrations for a smooth and comfortable ride." },
          s4: { topic: "Eco-Friendly Materials", parag: "Constructed using sustainable raw materials." },
          s5: { topic: "Extended Tread Life", parag: "Engineered to last longer with improved wear resistance." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Lifetime Treadwear Protection", para: "Guarantees tread performance for the life of the tire. Exclusions apply." },
          p2: { topic: "Flat Tire Assistance", para: "Includes free flat tire repair for eligible customers. Exclusions apply." },
          p3: { topic: "Performance Warranty", para: "Ensures reliable performance for up to 70,000 miles. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Factory Warranty",
            paragraphw:
              "2-year comprehensive warranty for all major components.",
          },
          w2: {
            topicsw: "Engine Warranty",
            paragraphw: "1-year engine warranty for defects under normal use.",
          },
          w3: {
            topicsw: "Frame Warranty",
            paragraphw: "Lifetime frame warranty against structural defects.",
          },
          w4: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month warranty on the battery for manufacturing defects.",
          },
        },
        specification: {
          s1: { topic: "Engine Cooling", parag: "Air-cooled" },
          s2: { topic: "Bore x Stroke", parag: "56.5 x 49.5 mm" },
          s3: { topic: "Fuel System", parag: "Carburetor" },
          s4: { topic: "Max Torque", parag: "10.5 Nm @ 6,500 rpm" },
          s5: { topic: "Lubrication", parag: "Wet sump" },
          s6: { topic: "Frame Material", parag: "Steel" },
          s7: { topic: "Tire Size (Front)", parag: "3.00 - 18" },
          s8: { topic: "Tire Size (Rear)", parag: "3.25 - 18" },
          s9: { topic: "Ground Clearance", parag: "160 mm" },
          s10: { topic: "Max Speed", parag: "110 km/h" },
          s11: { topic: "Headlamp", parag: "12V, 35W/35W halogen" },
        },
      },
      {
        image: CG1254,
        name: "CG125 Heavy Duty",
        price: 2800,
        size: "2.50-18",
        brand: "CG125",
        description:
          "Sturdy tyre designed for heavy-duty motorcycles, offering strong load-bearing capacity.",
        stock: 18,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "75km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "5PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Advanced Cornering Grip", parag: "Provides excellent grip for sharp turns and curves." },
          s2: { topic: "Shock Absorption", parag: "Reduces the impact of road bumps for a smoother experience." },
          s3: { topic: "Low Rolling Resistance", parag: "Improves fuel efficiency and reduces energy loss." },
          s4: { topic: "Weather Adaptability", parag: "Performs consistently across a wide range of temperatures." },
          s5: { topic: "Optimized Traction", parag: "Offers improved grip on slippery surfaces for added safety." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Comprehensive Mileage Warranty", para: "Backed for up to 55,000 miles of usage. Exclusions apply." },
          p2: { topic: "Noise-Free Ride Guarantee", para: "Covers replacement if excessive noise persists. Exclusions apply." },
          p3: { topic: "Roadside Assistance Warranty", para: "Includes emergency roadside assistance for tire-related issues. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Comprehensive Warranty",
            paragraphw:
              "2-year full warranty covering all parts and components.",
          },
          w2: {
            topicsw: "Battery Warranty",
            paragraphw: "1-year warranty on battery against defects.",
          },
          w3: {
            topicsw: "Paint Warranty",
            paragraphw: "1-year warranty on paint against fading or chipping.",
          },
          w4: {
            topicsw: "Roadside Assistance",
            paragraphw: "1-year free roadside assistance provided.",
          },
        },
        specification: {
          s1: { topic: "Engine Displacement", parag: "124cc" },
          s2: { topic: "Fuel Economy", parag: "50 km/l" },
          s3: { topic: "Compression Ratio", parag: "9.5:1" },
          s4: { topic: "Transmission", parag: "5-speed constant mesh" },
          s5: { topic: "Max Power", parag: "11.0 hp @ 8,000 rpm" },
          s6: { topic: "Brakes", parag: "Drum brakes, 130 mm" },
          s7: { topic: "Front Suspension", parag: "Telescopic" },
          s8: { topic: "Rear Suspension", parag: "Twin shock absorbers" },
          s9: { topic: "Seat Height", parag: "790 mm" },
          s10: { topic: "Ground Clearance", parag: "160 mm" },
          s11: { topic: "Kerb Weight", parag: "111 kg" },
          s12: { topic: "Top Speed", parag: "110 km/h" },
        },
      },
      {
        image: CG1255,
        name: "CG125 EcoRide",
        price: 2200,
        size: "2.75-17",
        brand: "CG125",
        description:
          "Eco-friendly tyre designed to reduce fuel consumption while ensuring solid performance.",
        stock: 28,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "80km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "3PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "High-Speed Stability", parag: "Ensures smooth and safe rides at higher speeds." },
          s2: { topic: "Urban Terrain Optimization", parag: "Perfectly suited for city roads and urban conditions." },
          s3: { topic: "Rugged Durability", parag: "Tough enough for off-road adventures and harsh terrains." },
          s4: { topic: "Fuel-Efficient Performance", parag: "Optimized for lower fuel consumption during long rides." },
          s5: { topic: "Noise Reduction Design", parag: "Reduces cabin noise for a more enjoyable ride." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Lifetime Defect Warranty", para: "Covers manufacturing defects for the lifetime of the tire. Exclusions apply." },
          p2: { topic: "Extended Performance Coverage", para: "Guaranteed performance for up to 75,000 miles. Exclusions apply." },
          p3: { topic: "Hazard Protection Warranty", para: "Includes coverage against road hazards and accidental damage. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Standard Warranty",
            paragraphw:
              "1-year warranty on parts and labor excluding consumables.",
          },
          w2: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month warranty for battery against manufacturing defects.",
          },
          w3: {
            topicsw: "Frame Warranty",
            paragraphw:
              "Lifetime warranty on frame defects due to manufacturing.",
          },
        },
        specification: {
          s1: { topic: "Engine Type", parag: "Single-cylinder, 4-stroke" },
          s2: { topic: "Max Torque", parag: "10.0 Nm @ 6,500 rpm" },
          s3: { topic: "Transmission", parag: "5-speed constant mesh" },
          s4: { topic: "Fuel Tank Capacity", parag: "12 liters" },
          s5: { topic: "Brakes", parag: "130 mm drum (front & rear)" },
          s6: {
            topic: "Suspension",
            parag: "Telescopic front, twin shock rear",
          },
          s7: { topic: "Kerb Weight", parag: "113 kg" },
          s8: { topic: "Seat Height", parag: "790 mm" },
          s9: { topic: "Ground Clearance", parag: "160 mm" },
          s10: { topic: "Fuel Economy", parag: "50 km/l" },
          s11: { topic: "Top Speed", parag: "100 km/h" },
        },
      },
      {
        image: CG1251,
        name: "CG125 Urban Glide",
        price: 2400,
        size: "3.00-17",
        brand: "CG125",
        description:
          "Optimized for urban commuting, providing a smooth and comfortable ride with minimal road noise.",
        stock: 32,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "85km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "4PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Optimized Weight Distribution", parag: "Improves balance and reduces uneven tread wear." },
          s2: { topic: "High Traction Control", parag: "Provides superior control in challenging driving conditions." },
          s3: { topic: "Adaptable Design", parag: "Performs well across different road types and surfaces." },
          s4: { topic: "Comfort and Control", parag: "Ensures a quiet and smooth riding experience." },
          s5: { topic: "Advanced Water Dispersion", parag: "Minimizes hydroplaning with efficient water channeling." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Flat Repair Coverage", para: "Covers flat tire repairs for the life of the tire. Exclusions apply." },
          p2: { topic: "Satisfaction Policy", para: "Eligible for return or exchange within 30 days of purchase. Exclusions apply." },
          p3: { topic: "Lifetime Hazard Warranty", para: "Protects against damages caused by road hazards. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Full Warranty",
            paragraphw:
              "2-year warranty covering engine and electrical components.",
          },
          w2: {
            topicsw: "Roadside Assistance",
            paragraphw: "Free 1-year roadside assistance for breakdowns.",
          },
          w3: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month battery warranty for defects under normal usage.",
          },
        },
        specification: {
          s1: { topic: "Engine Displacement", parag: "124cc" },
          s2: { topic: "Max Power", parag: "11.0 hp @ 8,000 rpm" },
          s3: { topic: "Max Torque", parag: "10.5 Nm @ 6,500 rpm" },
          s4: { topic: "Compression Ratio", parag: "9.5:1" },
          s5: { topic: "Fuel Tank Capacity", parag: "12 liters" },
          s6: { topic: "Brakes", parag: "Drum brakes (front & rear)" },
          s7: { topic: "Front Suspension", parag: "Telescopic" },
          s8: { topic: "Rear Suspension", parag: "Twin shock absorbers" },
          s9: { topic: "Seat Height", parag: "790 mm" },
          s10: { topic: "Ground Clearance", parag: "160 mm" },
          s11: { topic: "Kerb Weight", parag: "111 kg" },
          s12: { topic: "Top Speed", parag: "110 km/h" },
        },
      },
    ],
    CG125S: [
      {
        image: CG1255,
        name: "CG125S Turbo Pro",
        price: 2400,
        size: "2.50-17",
        brand: "CG125S",
        description:
          "High-performance tyre for maximum grip and control, designed for speed and handling.",
        stock: 35,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "60km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "3PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Enhanced Cornering Control", parag: "Designed to provide exceptional stability and control during sharp turns." },
          s2: { topic: "Durable Performance", parag: "Built with a tough compound for long-lasting use on diverse terrains." },
          s3: { topic: "High-Speed Endurance", parag: "Engineered to maintain performance at high speeds with minimal wear." },
          s4: { topic: "Fuel-Saving Design", parag: "Optimized for reduced rolling resistance, improving fuel efficiency." },
          s5: { topic: "Superior Wet Grip", parag: "Provides excellent traction on wet surfaces, enhancing safety." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Tread Life Protection", para: "Backed by a warranty covering up to 55,000 miles. Exclusions apply." },
          p2: { topic: "30-Day Satisfaction Guarantee", para: "Eligible for return or exchange if unsatisfied within 30 days. Exclusions apply." },
          p3: { topic: "Road Hazard Coverage", para: "Covers damages from potholes, debris, and accidental impacts. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Standard Warranty",
            paragraphw:
              "2-year warranty covering defects in material and workmanship.",
          },
          w2: {
            topicsw: "Engine Warranty",
            paragraphw:
              "1-year warranty for engine failure due to manufacturing defects.",
          },
          w3: {
            topicsw: "Frame Warranty",
            paragraphw:
              "Lifetime warranty on the frame for manufacturing defects.",
          },
          w4: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month warranty on the battery for defects under normal use.",
          },
        },
        specification: {
          s1: { topic: "Engine Type", parag: "Single-cylinder, 4-stroke" },
          s2: { topic: "Displacement", parag: "124cc" },
          s3: { topic: "Fuel Tank Capacity", parag: "12 liters" },
          s4: { topic: "Max Power", parag: "11.0 hp @ 8,000 rpm" },
          s5: { topic: "Max Torque", parag: "9.5 Nm @ 6,500 rpm" },
          s6: { topic: "Transmission", parag: "5-speed constant mesh" },
          s7: { topic: "Brakes", parag: "Drum brakes (front & rear)" },
          s8: {
            topic: "Suspension",
            parag: "Telescopic front, twin shock rear",
          },
          s9: { topic: "Seat Height", parag: "790 mm" },
          s10: { topic: "Ground Clearance", parag: "160 mm" },
          s11: { topic: "Kerb Weight", parag: "112 kg" },
          s12: { topic: "Tire Size", parag: "3.00-18 (Front), 3.25-18 (Rear)" },
        },
      },
      {
        image: CG1254,
        name: "CG125S Comfort Max",
        price: 2500,
        size: "2.75-17",
        brand: "CG125S",
        description:
          "Comfort-oriented tyre offering a smooth, quiet ride with enhanced durability for daily commuting.",
        stock: 30,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "70km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "2PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "All-Weather Adaptability", parag: "Performs well in hot, cold, wet, or dry conditions." },
          s2: { topic: "Noise Dampening Technology", parag: "Reduces road noise for a quieter and more enjoyable ride." },
          s3: { topic: "Improved Mileage", parag: "Extended tread life ensures more miles per tire." },
          s4: { topic: "Enhanced Traction", parag: "Specially designed grooves improve grip on all surfaces." },
          s5: { topic: "Comfort-Driven Design", parag: "Minimizes road vibrations for a smoother ride experience." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Mileage Warranty", para: "Guarantees up to 60,000 miles of treadwear. Exclusions apply." },
          p2: { topic: "Flat Tire Assistance", para: "Covers repair or replacement for flat tires. Exclusions apply." },
          p3: { topic: "Performance Guarantee", para: "Ensures reliable performance for high-speed rides. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Comprehensive Warranty",
            paragraphw:
              "2-year warranty on all parts and labor, excluding wearables.",
          },
          w2: {
            topicsw: "Engine Warranty",
            paragraphw:
              "1-year warranty for engine failure under normal conditions.",
          },
          w3: {
            topicsw: "Roadside Assistance",
            paragraphw:
              "Free roadside assistance for 1 year from purchase date.",
          },
          w4: {
            topicsw: "Paint Warranty",
            paragraphw: "1-year warranty on paint against fading or peeling.",
          },
        },
        specification: {
          s1: { topic: "Engine Displacement", parag: "124cc" },
          s2: { topic: "Fuel Economy", parag: "50 km/l" },
          s3: { topic: "Max Speed", parag: "105 km/h" },
          s4: { topic: "Compression Ratio", parag: "9.0:1" },
          s5: {
            topic: "Ignition System",
            parag: "CDI (Capacitor Discharge Ignition)",
          },
          s6: { topic: "Lubrication", parag: "Wet sump" },
          s7: {
            topic: "Suspension",
            parag: "Telescopic front, twin shock rear",
          },
          s8: { topic: "Front Brake", parag: "Drum, 130 mm" },
          s9: { topic: "Rear Brake", parag: "Drum, 130 mm" },
          s10: { topic: "Seat Height", parag: "790 mm" },
          s11: { topic: "Ground Clearance", parag: "160 mm" },
          s12: {
            topic: "Tire Size",
            parag: "3.00 - 18 (Front), 3.25 - 18 (Rear)",
          },
        },
      },
      {
        image: CG1253,
        name: "CG125S Trail Master",
        price: 2700,
        size: "3.00-17",
        brand: "CG125S",
        description:
          "Built for off-road performance, this tyre ensures maximum traction and durability on rough trails.",
        stock: 25,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "75km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "4PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Advanced Durability", parag: "Constructed to withstand tough road conditions and heavy loads." },
          s2: { topic: "High-Speed Stability", parag: "Offers precise control even at higher speeds." },
          s3: { topic: "Extended Treadwear", parag: "Resistant to wear and tear, lasting longer than standard tires." },
          s4: { topic: "Eco-Friendly Materials", parag: "Made with sustainable compounds to reduce environmental impact." },
          s5: { topic: "Optimized Weight Distribution", parag: "Improves balance and prevents uneven tread wear." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Lifetime Defect Warranty", para: "Protects against manufacturing defects for the life of the tire. Exclusions apply." },
          p2: { topic: "Hazard Warranty", para: "Includes coverage for road hazard-related damages. Exclusions apply." },
          p3: { topic: "Satisfaction Guarantee", para: "Eligible for return or replacement within 45 days. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Full Warranty",
            paragraphw: "2-year warranty on engine, electricals, and frame.",
          },
          w2: {
            topicsw: "Roadside Assistance",
            paragraphw: "1-year free roadside assistance in case of breakdown.",
          },
          w3: {
            topicsw: "Battery Warranty",
            paragraphw: "6-month warranty on battery against defects.",
          },
        },
        specification: {
          s1: { topic: "Engine Cooling", parag: "Air-cooled" },
          s2: { topic: "Bore x Stroke", parag: "56.5 x 49.5 mm" },
          s3: { topic: "Fuel System", parag: "Carburetor" },
          s4: { topic: "Compression Ratio", parag: "9.5:1" },
          s5: { topic: "Max Power", parag: "11.0 hp @ 8,000 rpm" },
          s6: { topic: "Max Torque", parag: "10.0 Nm @ 6,500 rpm" },
          s7: { topic: "Transmission", parag: "5-speed constant mesh" },
          s8: { topic: "Brakes", parag: "130 mm drum (front & rear)" },
          s9: { topic: "Front Suspension", parag: "Telescopic" },
          s10: { topic: "Rear Suspension", parag: "Twin shock absorbers" },
          s11: { topic: "Kerb Weight", parag: "112 kg" },
          s12: { topic: "Top Speed", parag: "100 km/h" },
        },
      },
      {
        image: CG1252,
        name: "CG125S Heavy Duty",
        price: 2900,
        size: "2.50-18",
        brand: "CG125S",
        description:
          "Sturdy, heavy-duty tyre designed for tough conditions and high load-bearing capacity.",
        stock: 20,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "80km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "5PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Exceptional Grip", parag: "Provides top-notch grip on wet and uneven surfaces for safer rides." },
          s2: { topic: "Shock Absorption", parag: "Reduces the impact of bumps and potholes for a smoother journey." },
          s3: { topic: "Low Rolling Resistance", parag: "Improves fuel efficiency and reduces energy loss." },
          s4: { topic: "Weather Resilience", parag: "Maintains performance in extreme weather conditions." },
          s5: { topic: "Precision Handling", parag: "Offers accurate control and stability during maneuvering." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Mileage Coverage", para: "Tread performance warranty for up to 50,000 miles. Exclusions apply." },
          p2: { topic: "Noise-Free Guarantee", para: "Replacement if excessive noise is detected. Exclusions apply." },
          p3: { topic: "Flat Repair Warranty", para: "Covers repair for flat tires for the life of the tire. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Standard Warranty",
            paragraphw: "2-year warranty on all major components.",
          },
          w2: {
            topicsw: "Battery Warranty",
            paragraphw: "6-month warranty on battery against defects.",
          },
          w3: {
            topicsw: "Frame Warranty",
            paragraphw:
              "Lifetime warranty on the frame against structural defects.",
          },
          w4: {
            topicsw: "Paint Warranty",
            paragraphw: "1-year warranty on the paint to prevent fading.",
          },
        },
        specification: {
          s1: { topic: "Engine Displacement", parag: "124cc" },
          s2: { topic: "Fuel Economy", parag: "55 km/l" },
          s3: { topic: "Max Power", parag: "11.2 hp @ 8,000 rpm" },
          s4: { topic: "Compression Ratio", parag: "9.5:1" },
          s5: { topic: "Lubrication", parag: "Wet sump" },
          s6: { topic: "Transmission", parag: "5-speed constant mesh" },
          s7: { topic: "Front Suspension", parag: "Telescopic fork" },
          s8: { topic: "Rear Suspension", parag: "Twin shock absorbers" },
          s9: {
            topic: "Tire Size",
            parag: "3.00 - 18 (Front), 3.25 - 18 (Rear)",
          },
          s10: { topic: "Brakes", parag: "Drum brakes" },
          s11: { topic: "Kerb Weight", parag: "113 kg" },
          s12: { topic: "Ground Clearance", parag: "160 mm" },
        },
      },
      {
        image: CG1251,
        name: "CG125S EcoRide",
        price: 2300,
        size: "2.75-17",
        brand: "CG125S",
        description:
          "Eco-friendly tyre designed to improve fuel efficiency and reduce environmental impact.",
        stock: 28,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "85km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "3PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Fuel-Efficient Build", parag: "Engineered to save fuel without compromising performance." },
          s2: { topic: "Urban Terrain Ready", parag: "Optimized for city streets and smooth rides in urban settings." },
          s3: { topic: "Rugged Design", parag: "Perfect for off-road adventures and challenging road conditions." },
          s4: { topic: "Superior Water Dispersion", parag: "Reduces the risk of hydroplaning with advanced tread design." },
          s5: { topic: "Comfort-Oriented", parag: "Designed for reduced road noise and vibrations." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Comprehensive Defect Warranty", para: "Covers all manufacturing defects for the lifetime of the tire. Exclusions apply." },
          p2: { topic: "Performance Warranty", para: "Guaranteed performance for up to 65,000 miles. Exclusions apply." },
          p3: { topic: "Roadside Assistance", para: "Includes emergency roadside services for tire-related issues. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Comprehensive Warranty",
            paragraphw:
              "2-year warranty for the engine, frame, and electrical components.",
          },
          w2: {
            topicsw: "Roadside Assistance",
            paragraphw: "Free roadside assistance for the first 1 year.",
          },
          w3: {
            topicsw: "Battery Warranty",
            paragraphw: "6-month warranty on battery under normal use.",
          },
        },
        specification: {
          s1: { topic: "Engine Type", parag: "Single-cylinder, 4-stroke" },
          s2: { topic: "Displacement", parag: "124cc" },
          s3: { topic: "Fuel Tank Capacity", parag: "12 liters" },
          s4: { topic: "Max Torque", parag: "10.5 Nm @ 6,500 rpm" },
          s5: { topic: "Compression Ratio", parag: "9.5:1" },
          s6: { topic: "Max Power", parag: "11.0 hp @ 8,000 rpm" },
          s7: { topic: "Transmission", parag: "5-speed constant mesh" },
          s8: { topic: "Brakes", parag: "Drum brakes (front & rear)" },
          s9: {
            topic: "Suspension",
            parag: "Telescopic front, twin shock rear",
          },
          s10: { topic: "Seat Height", parag: "790 mm" },
          s11: { topic: "Ground Clearance", parag: "160 mm" },
          s12: { topic: "Kerb Weight", parag: "112 kg" },
        },
      },
      {
        image: CG1253,
        name: "CG125S Urban Glide",
        price: 2600,
        size: "3.00-17",
        brand: "CG125S",
        description:
          "Perfect for city commuting with a smooth ride, minimal noise, and enhanced comfort.",
        stock: 32,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "90km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "4PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Advanced Weight Optimization", parag: "Balances weight distribution to ensure even treadwear." },
          s2: { topic: "Traction Control", parag: "Provides superior grip in all road conditions." },
          s3: { topic: "Adaptable Tread Design", parag: "Performs equally well on paved and unpaved surfaces." },
          s4: { topic: "Smooth Ride Experience", parag: "Minimizes vibrations and enhances comfort." },
          s5: { topic: "Water Repellent Design", parag: "Ensures safety with optimized water channeling." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Lifetime Treadwear Warranty", para: "Protects against uneven treadwear for the life of the tire. Exclusions apply." },
          p2: { topic: "Satisfaction Policy", para: "Return or exchange within 30 days if unsatisfied. Exclusions apply." },
          p3: { topic: "Hazard Protection Warranty", para: "Covers damages caused by road hazards like debris and potholes. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Factory Warranty",
            paragraphw: "2-year warranty on the engine and transmission.",
          },
          w2: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month warranty on the battery for manufacturing defects.",
          },
          w3: {
            topicsw: "Roadside Assistance",
            paragraphw: "Free roadside assistance provided for 1 year.",
          },
        },
        specification: {
          s1: { topic: "Fuel Economy", parag: "50 km/l" },
          s2: { topic: "Engine Cooling", parag: "Air-cooled" },
          s3: { topic: "Ignition", parag: "CDI" },
          s4: { topic: "Fuel Tank Capacity", parag: "12 liters" },
          s5: { topic: "Max Speed", parag: "105 km/h" },
          s6: { topic: "Brakes", parag: "130 mm drum brakes (front & rear)" },
          s7: { topic: "Front Suspension", parag: "Telescopic" },
          s8: { topic: "Rear Suspension", parag: "Twin shock absorbers" },
          s9: { topic: "Seat Height", parag: "790 mm" },
          s10: { topic: "Ground Clearance", parag: "160 mm" },
          s11: { topic: "Kerb Weight", parag: "112 kg" },
          s12: {
            topic: "Tire Size",
            parag: "3.00 - 18 (Front), 3.25 - 18 (Rear)",
          },
        },
      },
    ],
    Cb125: [
      {
        image: CB1251,
        name: "CG125 Special Turbo Grip",
        price: 2500,
        size: "2.50-17",
        brand: "CG125 Special",
        description:
          "Performance tyre designed for quick acceleration and high-speed control.",
        stock: 40,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "60km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "3PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Enhanced Stability", parag: "Engineered for superior stability and balance, offering great control on varied terrains." },
          s2: { topic: "Long-Lasting Durability", parag: "Crafted with durable materials for a long service life, even under heavy use." },
          s3: { topic: "All-Terrain Performance", parag: "Designed for optimal traction on both city roads and light off-road conditions." },
          s4: { topic: "Smooth and Quiet Ride", parag: "The advanced rubber compound minimizes road noise, delivering a comfortable and quiet ride." },
          s5: { topic: "Improved Grip", parag: "Delivers superior traction and handling for increased safety in both wet and dry conditions." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Limited Tread Life Warranty", para: "Covered for up to 55,000 miles of use. Terms and exclusions apply." },
          p2: { topic: "Satisfaction Guarantee", para: "30-day return or exchange period for customer satisfaction." },
          p3: { topic: "Road Hazard Warranty", para: "Protection against road hazards like nails or potholes, with exclusions for severe impacts." },
        },
        warranty: {
          w1: {
            topicsw: "Standard Warranty",
            paragraphw:
              "2-year warranty covering defects in materials and workmanship.",
          },
          w2: {
            topicsw: "Engine Warranty",
            paragraphw:
              "1-year warranty for engine failure due to manufacturing defects.",
          },
          w3: {
            topicsw: "Frame Warranty",
            paragraphw:
              "Lifetime warranty on the frame against manufacturing defects.",
          },
          w4: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month warranty on the battery against manufacturing defects under normal use.",
          },
        },
        specification: {
          s1: { topic: "Engine Type", parag: "Single-cylinder, 4-stroke" },
          s2: { topic: "Displacement", parag: "124cc" },
          s3: { topic: "Fuel Tank Capacity", parag: "12 liters" },
          s4: { topic: "Max Power", parag: "11.0 hp @ 8,000 rpm" },
          s5: { topic: "Max Torque", parag: "10.4 Nm @ 6,500 rpm" },
          s6: { topic: "Transmission", parag: "5-speed constant mesh" },
          s7: { topic: "Brakes", parag: "Front: Disc, Rear: Drum" },
          s8: {
            topic: "Suspension",
            parag: "Front: Telescopic, Rear: Twin shock absorbers",
          },
          s9: { topic: "Seat Height", parag: "790 mm" },
          s10: { topic: "Ground Clearance", parag: "160 mm" },
          s11: { topic: "Kerb Weight", parag: "118 kg" },
          s12: { topic: "Tire Size", parag: "Front: 3.00-18, Rear: 3.25-18" },
        },
      },
      {
        image: CB1254 ,
        name: "CG125 Special Comfort Plus",
        price: 2700,
        size: "2.75-17",
        brand: "CG125 Special",
        description:
          "Engineered for a smoother ride with enhanced shock absorption and reduced road noise.",
        stock: 36,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "70km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "2PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "High-Performance Tread", parag: "Optimized for grip and performance, allowing excellent traction in a variety of conditions." },
          s2: { topic: "Durable Construction", parag: "Made with advanced tire technology, offering high resistance to wear and tear." },
          s3: { topic: "Comfortable and Stable Ride", parag: "Designed to provide a smooth ride even on rough or uneven roads." },
          s4: { topic: "Excellent Wet Performance", parag: "The tire's advanced rubber compound ensures excellent traction on wet and slippery surfaces." },
          s5: { topic: "Fuel Efficiency", parag: "Reduces rolling resistance, improving fuel economy for your bike." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Mileage Warranty", para: "Guaranteed for up to 50,000 miles, ensuring long-lasting performance." },
          p2: { topic: "Defect-Free Guarantee", para: "Free replacement within 90 days if any manufacturing defects are detected." },
          p3: { topic: "Hazard Protection", para: "Coverage for damage caused by road hazards like debris or potholes." },
        },
        warranty: {
          w1: {
            topicsw: "Comprehensive Warranty",
            paragraphw: "2-year warranty on engine, electricals, and frame.",
          },
          w2: {
            topicsw: "Roadside Assistance",
            paragraphw:
              "1-year free roadside assistance for breakdowns or emergencies.",
          },
          w3: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month warranty on battery against manufacturing defects.",
          },
          w4: {
            topicsw: "Paint Warranty",
            paragraphw:
              "1-year warranty against fading or peeling of the paint.",
          },
        },
        specification: {
          s1: { topic: "Engine Displacement", parag: "124cc" },
          s2: { topic: "Compression Ratio", parag: "9.3:1" },
          s3: { topic: "Fuel Economy", parag: "55 km/l" },
          s4: { topic: "Max Speed", parag: "105 km/h" },
          s5: {
            topic: "Ignition Type",
            parag: "CDI (Capacitor Discharge Ignition)",
          },
          s6: { topic: "Lubrication", parag: "Wet sump" },
          s7: { topic: "Transmission", parag: "5-speed constant mesh" },
          s8: { topic: "Front Brake", parag: "Disc, 276 mm" },
          s9: { topic: "Rear Brake", parag: "Drum, 130 mm" },
          s10: {
            topic: "Suspension",
            parag: "Front: Telescopic fork, Rear: Dual shock absorbers",
          },
          s11: { topic: "Seat Height", parag: "780 mm" },
          s12: { topic: "Kerb Weight", parag: "119 kg" },
        },
      },
      {
        image: CB1253,
        name: "CG125 Special Trail King",
        price: 2900,
        size: "3.00-17",
        brand: "CG125 Special",
        description:
          "Designed for rugged off-road terrains, this tyre offers maximum traction and durability.",
        stock: 25,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "80km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "4PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "All-Weather Performance", parag: "Designed for optimal performance in both dry and wet conditions, ensuring all-season reliability." },
          s2: { topic: "Resilient Construction", parag: "Built with a tough rubber compound to withstand harsh riding conditions and minimize wear." },
          s3: { topic: "Quiet and Smooth Ride", parag: "Incorporates technology to reduce road noise for a quieter, more enjoyable ride." },
          s4: { topic: "Enhanced Cornering", parag: "Provides superior cornering stability, giving you more confidence when navigating turns." },
          s5: { topic: "Low Rolling Resistance", parag: "Minimizes energy loss, contributing to better fuel efficiency and a smoother ride." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Lifetime Warranty", para: "Guaranteed to last the full service life of the tire, excluding damages caused by misuse." },
          p2: { topic: "Customer Satisfaction", para: "Return or exchange the tire within 30 days if you’re not completely satisfied." },
          p3: { topic: "Road Hazard Coverage", para: "Includes protection against road hazards such as glass, nails, and debris." },
        },
        warranty: {
          w1: {
            topicsw: "Full Warranty",
            paragraphw:
              "2-year comprehensive warranty covering major components including engine and electricals.",
          },
          w2: {
            topicsw: "Roadside Assistance",
            paragraphw:
              "1-year free roadside assistance in case of breakdowns or accidents.",
          },
          w3: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month warranty for battery replacement in case of failure under normal usage.",
          },
        },
        specification: {
          s1: { topic: "Engine Type", parag: "Single-cylinder, air-cooled" },
          s2: { topic: "Bore x Stroke", parag: "56.5 x 49.5 mm" },
          s3: { topic: "Fuel System", parag: "Carburetor" },
          s4: { topic: "Compression Ratio", parag: "9.5:1" },
          s5: { topic: "Max Power", parag: "11.3 hp @ 8,000 rpm" },
          s6: { topic: "Max Torque", parag: "10.2 Nm @ 6,500 rpm" },
          s7: { topic: "Front Suspension", parag: "Telescopic" },
          s8: { topic: "Rear Suspension", parag: "Twin shock absorbers" },
          s9: { topic: "Brakes", parag: "Front: Disc, Rear: Drum" },
          s10: { topic: "Seat Height", parag: "780 mm" },
          s11: { topic: "Ground Clearance", parag: "155 mm" },
          s12: { topic: "Tire Size", parag: "3.00-18 (Front), 3.25-18 (Rear)" },
        },
      },
      {
        image: CB1252,
        name: "CG125 Special Heavy Duty Max",
        price: 3100,
        size: "2.50-18",
        brand: "CG125 Special",
        description:
          "Built for carrying heavy loads and tackling tough road conditions with unmatched strength.",
        stock: 30,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "90km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "5PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Durable Rubber Compound", parag: "Uses a specialized compound that resists abrasion and enhances tire life, even in challenging conditions." },
          s2: { topic: "Balanced Performance", parag: "Engineered to balance comfort, performance, and fuel efficiency for all types of riders." },
          s3: { topic: "Improved Wet Traction", parag: "Delivers excellent grip even in rainy or wet conditions to ensure a safer ride." },
          s4: { topic: "Reinforced Sidewalls", parag: "Reinforced with additional strength to resist punctures and offer better durability." },
          s5: { topic: "Responsive Handling", parag: "Provides agile handling and precise control, making it ideal for both city and highway rides." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Tire Lifespan Guarantee", para: "Guaranteed for up to 60,000 miles, ensuring dependable service for years." },
          p2: { topic: "Satisfaction Guarantee", para: "30-day return policy for a full refund or exchange if you are not satisfied." },
          p3: { topic: "Road Hazard Warranty", para: "Protection for damage caused by road hazards such as sharp objects or rough terrain." },
        },
        warranty: {
          w1: {
            topicsw: "Comprehensive Warranty",
            paragraphw: "2-year warranty covering major parts and labor.",
          },
          w2: {
            topicsw: "Engine Warranty",
            paragraphw: "1-year warranty on engine parts and performance.",
          },
          w3: {
            topicsw: "Paint Warranty",
            paragraphw:
              "1-year warranty for paintwork protection against fading.",
          },
        },
        specification: {
          s1: { topic: "Fuel Economy", parag: "50 km/l" },
          s2: { topic: "Engine Displacement", parag: "124cc" },
          s3: { topic: "Max Speed", parag: "105 km/h" },
          s4: {
            topic: "Ignition",
            parag: "CDI (Capacitor Discharge Ignition)",
          },
          s5: { topic: "Lubrication", parag: "Wet sump" },
          s6: { topic: "Max Power", parag: "11.0 hp @ 8,000 rpm" },
          s7: { topic: "Max Torque", parag: "10.5 Nm @ 6,500 rpm" },
          s8: { topic: "Transmission", parag: "5-speed constant mesh" },
          s9: {
            topic: "Suspension",
            parag: "Front: Telescopic, Rear: Dual shock absorbers",
          },
          s10: { topic: "Seat Height", parag: "780 mm" },
          s11: { topic: "Kerb Weight", parag: "120 kg" },
          s12: { topic: "Tire Size", parag: "Front: 3.00-18, Rear: 3.25-18" },
        },
      },
      {
        image: CB1251,
        name: "CG125 Special EcoDrive",
        price: 2400,
        size: "2.75-17",
        brand: "CG125 Special",
        description:
          "Eco-friendly tyre with a focus on fuel efficiency and long-lasting tread life.",
        stock: 33,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "85km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "3PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Advanced Tread Design", parag: "Specially engineered tread pattern for superior grip and stability on various surfaces." },
          s2: { topic: "Superior Traction", parag: "Provides exceptional traction, even on slippery or uneven surfaces." },
          s3: { topic: "Long-Lasting Performance", parag: "Durable construction designed to last through tough conditions and long rides." },
          s4: { topic: "Comfort and Control", parag: "Maximizes comfort without sacrificing handling or performance, even on long trips." },
          s5: { topic: "Eco-Friendly Materials", parag: "Made using sustainable materials to minimize the environmental impact." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Road Hazard Warranty", para: "Protection against road hazards for up to 45,000 miles, ensuring peace of mind during your ride." },
          p2: { topic: "Defect-Free Guarantee", para: "Free replacement for any defects found within the first 60 days of purchase." },
          p3: { topic: "Performance Guarantee", para: "Guaranteed high performance and satisfaction throughout the tire’s life." },
        },
        warranty: {
          w1: {
            topicsw: "Factory Warranty",
            paragraphw:
              "2-year warranty on engine, frame, and electrical components.",
          },
          w2: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month warranty on battery for defects in materials or workmanship.",
          },
          w3: {
            topicsw: "Roadside Assistance",
            paragraphw:
              "1-year free roadside assistance for any breakdowns or emergencies.",
          },
        },
        specification: {
          s1: {
            topic: "Engine Type",
            parag: "Air-cooled, 4-stroke, Single-cylinder",
          },
          s2: { topic: "Bore x Stroke", parag: "56.5 mm x 49.5 mm" },
          s3: { topic: "Fuel System", parag: "Carburetor" },
          s4: { topic: "Max Power", parag: "11.2 hp @ 8,000 rpm" },
          s5: { topic: "Max Torque", parag: "10.5 Nm @ 6,500 rpm" },
          s6: { topic: "Transmission", parag: "5-speed constant mesh" },
          s7: { topic: "Brakes", parag: "Front: Disc, Rear: Drum" },
          s8: {
            topic: "Suspension",
            parag: "Front: Telescopic, Rear: Twin shock absorbers",
          },
          s9: { topic: "Seat Height", parag: "780 mm" },
          s10: { topic: "Ground Clearance", parag: "160 mm" },
          s11: { topic: "Kerb Weight", parag: "118 kg" },
          s12: { topic: "Fuel Tank Capacity", parag: "12 liters" },
        },
      },
      {
        image: CB1254,
        name: "CG125 Special City Glide",
        price: 2800,
        size: "3.00-17",
        brand: "CG125 Special",
        description:
          "Optimized for city commuting, offering excellent traction and minimal road noise for a smooth urban ride.",
        stock: 38,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "75km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "4PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Improved Cornering Stability", parag: "Offers enhanced cornering capability, perfect for tight turns and winding roads." },
          s2: { topic: "High-Speed Durability", parag: "Built to handle high-speed performance without compromising safety or control." },
          s3: { topic: "Comfortable Ride", parag: "Incorporates technologies that reduce vibration and ensure a smooth ride over various terrains." },
          s4: { topic: "High Traction and Grip", parag: "Delivers superior traction in wet, dry, and off-road conditions, providing more control." },
          s5: { topic: "Reinforced Design", parag: "Designed to resist wear, punctures, and abrasions, making it suitable for long-distance riding." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Limited Tread Life Warranty", para: "Guaranteed for 50,000 miles under normal conditions. Exclusions apply." },
          p2: { topic: "Satisfaction Guarantee", para: "30-day return or exchange policy if you are not fully satisfied with your tire." },
          p3: { topic: "Road Hazard Coverage", para: "Coverage for tire damage caused by road hazards, including glass, nails, and debris." },
        },
        warranty: {
          w1: {
            topicsw: "Comprehensive Warranty",
            paragraphw:
              "2-year warranty covering engine, frame, and electrical parts.",
          },
          w2: {
            topicsw: "Roadside Assistance",
            paragraphw:
              "1-year free roadside assistance for mechanical failures or accidents.",
          },
        },
        specification: {
          s1: { topic: "Engine Type", parag: "Single-cylinder, air-cooled" },
          s2: { topic: "Displacement", parag: "124cc" },
          s3: { topic: "Max Power", parag: "11.0 hp @ 8,000 rpm" },
          s4: { topic: "Max Torque", parag: "10.3 Nm @ 6,500 rpm" },
          s5: { topic: "Fuel Tank Capacity", parag: "12 liters" },
          s6: { topic: "Brakes", parag: "Front: Disc, Rear: Drum" },
          s7: {
            topic: "Suspension",
            parag: "Front: Telescopic, Rear: Twin shock absorbers",
          },
          s8: { topic: "Tire Size", parag: "3.00-18 (Front), 3.25-18 (Rear)" },
          s9: { topic: "Seat Height", parag: "790 mm" },
          s10: { topic: "Kerb Weight", parag: "119 kg" },
          s11: { topic: "Fuel Economy", parag: "50 km/l" },
          s12: { topic: "Max Speed", parag: "105 km/h" },
        },
      },
    ],
    CB150: [
      {
        image: CB1501,
        name: "CB150 Sport Racer",
        price: 3200,
        size: "3.00-18",
        brand: "CB150",
        description:
          "High-performance tyre for fast and agile handling, perfect for sport riders.",
        stock: 28,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "100km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "4PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "All-Weather Performance", parag: "Engineered for reliable performance in both wet and dry conditions." },
          s2: { topic: "Durable Construction", parag: "Made with high-strength materials for long-lasting durability." },
          s3: { topic: "Comfortable Ride", parag: "Designed to minimize vibrations and provide a smooth, enjoyable ride." },
          s4: { topic: "Enhanced Traction", parag: "Provides superior grip for better control and stability on the road." },
          s5: { topic: "Fuel Efficiency", parag: "Optimized to reduce rolling resistance, improving fuel economy." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Limited Tread Life Warranty", para: "Up to 50,000 miles of coverage, ensuring long-lasting tire performance. Exclusions apply." },
          p2: { topic: "Satisfaction Guarantee", para: "30-day return or exchange policy if unsatisfied with the tire's performance." },
          p3: { topic: "Road Hazard Warranty", para: "Coverage for tire damage due to road hazards like debris or potholes. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Comprehensive Warranty",
            paragraphw:
              "2-year warranty on engine, electrical components, and frame.",
          },
          w2: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month warranty for battery replacement in case of defects under normal usage.",
          },
          w3: {
            topicsw: "Paint Warranty",
            paragraphw:
              "1-year warranty for paintwork protection against fading and peeling.",
          },
        },
        specification: {
          s1: { topic: "Engine Type", parag: "Single-cylinder, 4-stroke" },
          s2: { topic: "Displacement", parag: "149.2cc" },
          s3: { topic: "Max Power", parag: "12.6 hp @ 8,500 rpm" },
          s4: { topic: "Max Torque", parag: "12.3 Nm @ 6,000 rpm" },
          s5: { topic: "Fuel Tank Capacity", parag: "13 liters" },
          s6: { topic: "Transmission", parag: "5-speed constant mesh" },
          s7: { topic: "Front Brake", parag: "Disc, 276 mm" },
          s8: { topic: "Rear Brake", parag: "Drum, 130 mm" },
          s9: {
            topic: "Suspension",
            parag: "Front: Telescopic, Rear: Twin shock absorbers",
          },
          s10: { topic: "Seat Height", parag: "790 mm" },
          s11: { topic: "Ground Clearance", parag: "160 mm" },
          s12: { topic: "Kerb Weight", parag: "136 kg" },
        },
      },
      {
        image: CB1502,
        name: "CB150 Touring Pro",
        price: 3400,
        size: "2.75-18",
        brand: "CB150",
        description:
          "Engineered for long-distance touring with a smooth ride and excellent road grip.",
        stock: 22,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "110km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "3PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "High-Performance Tread", parag: "Optimized tread pattern for superior grip and stability in various conditions." },
          s2: { topic: "Resistant to Abrasion", parag: "The tire is built to withstand wear, providing a longer lifespan." },
          s3: { topic: "Smooth Handling", parag: "Delivers smooth handling and reliable control even on tight turns." },
          s4: { topic: "Versatile Road Usage", parag: "Performs well on both city streets and light off-road conditions." },
          s5: { topic: "Noise Reduction Technology", parag: "Minimizes road noise for a quieter and more comfortable ride." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Mileage Warranty", para: "Guaranteed for up to 45,000 miles of use. Exclusions apply for extreme conditions." },
          p2: { topic: "Defect-Free Guarantee", para: "Replacement or refund for any manufacturing defects within the first 60 days." },
          p3: { topic: "Road Hazard Protection", para: "Includes coverage for damage from road hazards like nails and glass. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Standard Warranty",
            paragraphw:
              "2-year warranty covering engine and major electrical parts.",
          },
          w2: {
            topicsw: "Roadside Assistance",
            paragraphw:
              "1-year free roadside assistance for breakdowns and accidents.",
          },
          w3: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month warranty on the battery for any defects under normal usage.",
          },
        },
        specification: {
          s1: { topic: "Engine Displacement", parag: "149.2cc" },
          s2: { topic: "Max Power", parag: "12.5 hp @ 8,000 rpm" },
          s3: { topic: "Max Torque", parag: "12.0 Nm @ 6,000 rpm" },
          s4: { topic: "Fuel Economy", parag: "50 km/l" },
          s5: {
            topic: "Ignition Type",
            parag: "CDI (Capacitor Discharge Ignition)",
          },
          s6: { topic: "Lubrication", parag: "Wet sump" },
          s7: { topic: "Transmission", parag: "5-speed constant mesh" },
          s8: { topic: "Brakes", parag: "Front: Disc, Rear: Drum" },
          s9: {
            topic: "Suspension",
            parag: "Front: Telescopic, Rear: Dual shock absorbers",
          },
          s10: { topic: "Seat Height", parag: "780 mm" },
          s11: { topic: "Kerb Weight", parag: "138 kg" },
          s12: { topic: "Tire Size", parag: "3.00-18 (Front), 3.25-18 (Rear)" },
        },
      },
      {
        image: CB1503,
        name: "CB150 Urban Grip",
        price: 2800,
        size: "2.50-17",
        brand: "CB150",
        description:
          "Optimized for city rides, providing enhanced grip on asphalt and comfort for urban commuters.",
        stock: 35,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "95km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "2PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Heavy-Duty Performance", parag: "Built to handle heavier loads and provide a stable ride." },
          s2: { topic: "Improved Cornering", parag: "The tire offers better cornering performance for more agile handling." },
          s3: { topic: "Long-Lasting Tread", parag: "With a specially formulated compound, the tire lasts longer while maintaining excellent performance." },
          s4: { topic: "Eco-Friendly Materials", parag: "Made with sustainable materials, reducing environmental impact." },
          s5: { topic: "Enhanced Wet Grip", parag: "Advanced rubber technology ensures excellent traction on wet surfaces, reducing the risk of hydroplaning." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Lifetime Warranty", para: "Guaranteed to last for the full service life of the tire. Conditions apply." },
          p2: { topic: "Satisfaction Guarantee", para: "30-day return or exchange period if not satisfied with tire performance." },
          p3: { topic: "All-Weather Protection", para: "Coverage for all weather conditions, including extreme heat and cold. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Factory Warranty",
            paragraphw:
              "2-year warranty on engine, electrical components, and frame structure.",
          },
          w2: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month warranty for battery defects due to manufacturing faults.",
          },
          w3: {
            topicsw: "Paint Warranty",
            paragraphw:
              "1-year warranty against paint fading or peeling under normal conditions.",
          },
        },
        specification: {
          s1: { topic: "Engine Type", parag: "Single-cylinder, air-cooled" },
          s2: { topic: "Displacement", parag: "149.2cc" },
          s3: { topic: "Max Power", parag: "13.1 hp @ 8,500 rpm" },
          s4: { topic: "Max Torque", parag: "12.5 Nm @ 6,500 rpm" },
          s5: { topic: "Fuel Tank Capacity", parag: "13 liters" },
          s6: { topic: "Transmission", parag: "5-speed constant mesh" },
          s7: { topic: "Front Brake", parag: "Disc, 276 mm" },
          s8: { topic: "Rear Brake", parag: "Drum, 130 mm" },
          s9: {
            topic: "Suspension",
            parag: "Front: Telescopic, Rear: Twin shock absorbers",
          },
          s10: { topic: "Seat Height", parag: "790 mm" },
          s11: { topic: "Ground Clearance", parag: "160 mm" },
          s12: { topic: "Kerb Weight", parag: "135 kg" },
        },
      },
      {
        image: CB1504,
        name: "CB150 All-Terrain Master",
        price: 3600,
        size: "3.25-18",
        brand: "CB150",
        description:
          "Heavy-duty all-terrain tyre for off-road adventures, offering superior durability and traction on rugged paths.",
        stock: 18,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "120km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "5PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Superior Grip", parag: "Designed for ultimate traction on both wet and dry roads." },
          s2: { topic: "Optimized for Handling", parag: "Provides enhanced handling characteristics, especially in urban environments." },
          s3: { topic: "Comfort and Stability", parag: "Minimizes vibrations and improves ride quality, especially over rough surfaces." },
          s4: { topic: "Extended Wear", parag: "Offers long-lasting performance with wear-resistant materials." },
          s5: { topic: "Quick Response", parag: "Responsive to steering and braking, enhancing safety and control." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Performance Warranty", para: "Covers performance issues up to 50,000 miles. Terms and conditions apply." },
          p2: { topic: "Road Hazard Warranty", para: "Covers damage from road hazards like potholes or sharp objects. Exclusions apply." },
          p3: { topic: "Manufacturing Defects", para: "Replacement if manufacturing defects are found within the first 90 days." },
        },
        warranty: {
          w1: {
            topicsw: "Comprehensive Warranty",
            paragraphw:
              "2-year warranty covering major components like engine and frame.",
          },
          w2: {
            topicsw: "Engine Warranty",
            paragraphw: "1-year warranty on engine parts and performance.",
          },
          w3: {
            topicsw: "Battery Warranty",
            paragraphw: "6-month battery warranty for manufacturing defects.",
          },
        },
        specification: {
          s1: { topic: "Fuel Economy", parag: "48 km/l" },
          s2: { topic: "Engine Displacement", parag: "149.2cc" },
          s3: { topic: "Max Speed", parag: "120 km/h" },
          s4: {
            topic: "Ignition",
            parag: "CDI (Capacitor Discharge Ignition)",
          },
          s5: { topic: "Lubrication", parag: "Wet sump" },
          s6: { topic: "Max Power", parag: "12.6 hp @ 8,500 rpm" },
          s7: { topic: "Max Torque", parag: "12.3 Nm @ 6,000 rpm" },
          s8: { topic: "Transmission", parag: "5-speed constant mesh" },
          s9: {
            topic: "Suspension",
            parag: "Front: Telescopic, Rear: Twin shock absorbers",
          },
          s10: { topic: "Seat Height", parag: "780 mm" },
          s11: { topic: "Kerb Weight", parag: "137 kg" },
          s12: { topic: "Tire Size", parag: "3.00-18 (Front), 3.25-18 (Rear)" },
        },
      },
      {
        image: CB1505,
        name: "CB150 EcoDrive",
        price: 2500,
        size: "2.75-17",
        brand: "CB150",
        description:
          "Eco-friendly tyre designed for fuel efficiency and longevity, perfect for daily commuters.",
        stock: 40,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "80km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "3PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Responsive Traction", parag: "Delivers superior traction on both paved and gravel roads." },
          s2: { topic: "Shock Absorption", parag: "Designed to absorb shocks for a smoother, more comfortable ride." },
          s3: { topic: "All-Season Durability", parag: "Built to withstand varying temperatures and conditions year-round." },
          s4: { topic: "Reinforced Sidewalls", parag: "Provides added protection against impacts and punctures." },
          s5: { topic: "Improved Fuel Efficiency", parag: "Minimizes rolling resistance to improve overall fuel efficiency." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Tire Lifespan Warranty", para: "Guaranteed to last up to 60,000 miles under normal usage. Exclusions apply." },
          p2: { topic: "Customer Satisfaction", para: "Return or exchange within 30 days if not satisfied with tire performance." },
          p3: { topic: "Hazard Warranty", para: "Protects against damage caused by road hazards like glass or nails. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Standard Warranty",
            paragraphw:
              "2-year warranty covering engine, transmission, and frame components.",
          },
          w2: {
            topicsw: "Roadside Assistance",
            paragraphw: "1-year free roadside assistance for emergencies.",
          },
          w3: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month warranty for battery replacement if defective.",
          },
        },
        specification: {
          s1: { topic: "Engine Type", parag: "Single-cylinder, 4-stroke" },
          s2: { topic: "Bore x Stroke", parag: "57.3 mm x 57.8 mm" },
          s3: { topic: "Fuel System", parag: "Carburetor" },
          s4: { topic: "Compression Ratio", parag: "9.2:1" },
          s5: { topic: "Max Power", parag: "13.3 hp @ 8,800 rpm" },
          s6: { topic: "Max Torque", parag: "12.5 Nm @ 6,500 rpm" },
          s7: { topic: "Transmission", parag: "5-speed constant mesh" },
          s8: { topic: "Brakes", parag: "Front: Disc, Rear: Drum" },
          s9: {
            topic: "Suspension",
            parag: "Front: Telescopic, Rear: Twin shock absorbers",
          },
          s10: { topic: "Seat Height", parag: "790 mm" },
          s11: { topic: "Kerb Weight", parag: "139 kg" },
          s12: { topic: "Fuel Economy", parag: "50 km/l" },
        },
      },
      {
        image: CB1251,
        name: "CB150 Trail Hunter",
        price: 3300,
        size: "3.00-17",
        brand: "CB150",
        description:
          "Rugged tyre designed for off-road trails, offering excellent durability and traction on loose surfaces.",
        stock: 27,
        qualityPoints: {
          allSeasonTire: {
            label: "All Season Tire",
            icon: <BsCloudSun />,
          },
          warranty: {
            label: "105km Warranty",
            icon: <PiMedalLight />,
          },
          speed: {
            label: "4PMSF",
            icon: <LuMountain />,
          },
        },
        tireFeature: {
          s1: { topic: "Heavy Load Support", parag: "Designed for motorcycles that carry heavier loads with ease." },
          s2: { topic: "Reduced Rolling Resistance", parag: "Optimized to decrease resistance and improve overall efficiency." },
          s3: { topic: "Comfortable Handling", parag: "Provides stable and predictable handling for long-distance rides." },
          s4: { topic: "Resilient Tread Compound", parag: "Tire compounds designed to withstand abrasion and harsh conditions." },
          s5: { topic: "Tire Traction System", parag: "Advanced tread pattern ensures maximum traction on various surfaces." },
        },
        WarrantiesGuarantees: {
          p1: { topic: "Defect Warranty", para: "Covers defects in materials or workmanship for the first 12 months." },
          p2: { topic: "Performance Assurance", para: "Satisfaction guaranteed for up to 30 days after purchase." },
          p3: { topic: "Road Hazard Protection", para: "Coverage for damage caused by hazards like potholes or road debris. Exclusions apply." },
        },
        warranty: {
          w1: {
            topicsw: "Factory Warranty",
            paragraphw:
              "2-year warranty covering engine, electrical components, and frame.",
          },
          w2: {
            topicsw: "Battery Warranty",
            paragraphw:
              "6-month warranty for battery defects under normal usage.",
          },
          w3: {
            topicsw: "Paint Warranty",
            paragraphw:
              "1-year warranty against fading or peeling of the paint.",
          },
        },
        specification: {
          s1: { topic: "Engine Type", parag: "Single-cylinder, air-cooled" },
          s2: { topic: "Displacement", parag: "149.2cc" },
          s3: { topic: "Max Power", parag: "12.6 hp @ 8,500 rpm" },
          s4: { topic: "Max Torque", parag: "12.3 Nm @ 6,000 rpm" },
          s5: { topic: "Fuel Tank Capacity", parag: "13 liters" },
          s6: { topic: "Brakes", parag: "Front: Disc, Rear: Drum" },
          s7: {
            topic: "Suspension",
            parag: "Front: Telescopic, Rear: Dual shock absorbers",
          },
          s8: { topic: "Tire Size", parag: "3.00-18 (Front), 3.25-18 (Rear)" },
          s9: { topic: "Seat Height", parag: "780 mm" },
          s10: { topic: "Kerb Weight", parag: "136 kg" },
          s11: { topic: "Ground Clearance", parag: "160 mm" },
          s12: { topic: "Max Speed", parag: "120 km/h" },
        },
      },
    ],
  };


  const [Dataset, setDataset] = useState(data);
  const [cartItems, setCartItems] = useState([]);
  const [CartDisplay, setCartDisplay] = useState(false);

  const handleCartToggle = () => {
    setCartDisplay(true);
  };

  const handleCloseCartToggle = () => {
    setCartDisplay(false);
  };

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => prevCartItems.filter((_, i) => i !== index));
  };
  

  return (
    <ThemeContext.Provider
      value={{
        CartDisplay,
        cartItems,
        Dataset,
        setDataset,
        handleCartToggle,
        handleCloseCartToggle,
        setCartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };