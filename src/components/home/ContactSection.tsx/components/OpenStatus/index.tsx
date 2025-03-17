"use client";
import { useEffect, useState } from "react";
import { siteData } from "@/src/data/siteData";

const OpenStatus = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const checkIfOpen = () => {
      try {
        // Get office hours from the new data structure
        const officeHours = siteData.contact.hours.regular;

        // Get current date/time information
        const now = new Date();
        const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        // Check if it's within the workdays specified in data
        // Default to weekdays (Monday-Friday: 1-5) if we can't parse
        let isWorkday = currentDay >= 1 && currentDay <= 5;

        // Try to determine workdays from data
        const daysString = officeHours.days.toLowerCase();
        if (daysString.includes("lundi") && daysString.includes("vendredi")) {
          isWorkday = currentDay >= 1 && currentDay <= 5;
        } else if (
          daysString.includes("lundi") &&
          daysString.includes("samedi")
        ) {
          isWorkday = currentDay >= 1 && currentDay <= 6;
        }

        // Try to parse opening hours from data
        let openHour = 8;
        let openMinute = 0;
        let closeHour = 19;
        let closeMinute = 0;

        try {
          // Try to parse time format like "8:00 - 19:00"
          const timeString = officeHours.time;
          if (timeString.includes("-")) {
            const [openTime, closeTime] = timeString
              .split("-")
              .map((t) => t.trim());

            // Parse opening time
            if (openTime.includes(":")) {
              const [hours, minutes] = openTime.split(":").map(Number);
              openHour = hours;
              openMinute = minutes;
            } else {
              openHour = parseInt(openTime);
            }

            // Parse closing time
            if (closeTime.includes(":")) {
              const [hours, minutes] = closeTime.split(":").map(Number);
              closeHour = hours;
              closeMinute = minutes;
            } else {
              closeHour = parseInt(closeTime);
            }
          }
        } catch (error) {
          console.warn("Error parsing time range, using defaults:", error);
          // Keep default values (8:00 - 19:00)
        }

        // Check if within opening hours
        const currentTimeInMinutes = currentHour * 60 + currentMinute;
        const openTimeInMinutes = openHour * 60 + openMinute;
        const closeTimeInMinutes = closeHour * 60 + closeMinute;

        const isWithinHours =
          currentTimeInMinutes >= openTimeInMinutes &&
          currentTimeInMinutes < closeTimeInMinutes;

        // Only open on workdays during business hours
        setIsOpen(isWorkday && isWithinHours);
      } catch (error) {
        console.error("Error checking open status:", error);
        setIsOpen(false); // Default to closed if there's an error
      }
    };

    // Check immediately and then set up interval
    checkIfOpen();
    const intervalId = setInterval(checkIfOpen, 60000); // Check every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex items-center mt-2">
      <div
        className={`w-3 h-3 rounded-full mr-2 ${
          isOpen ? "bg-green-500" : "bg-red-500"
        }`}
        aria-hidden="true"
      ></div>
      <span
        className={`text-sm font-medium font-accent ${
          isOpen ? "text-green-400" : "text-red-400"
        }`}
      >
        {isOpen ? "Ouvert maintenant" : "Fermé"}
      </span>
    </div>
  );
};

export default OpenStatus;
