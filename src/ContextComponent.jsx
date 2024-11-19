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
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };