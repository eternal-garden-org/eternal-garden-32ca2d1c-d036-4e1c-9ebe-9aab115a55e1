"use client";

import { format, differenceInYears } from "date-fns";
import { ru } from "date-fns/locale";
import { MapPin } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MemorialHeroProps {
  fullName: string;
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  deathPlace: string;
  photoUrl: string;
  className?: string;
}

export function MemorialHero({
  fullName,
  birthDate,
  deathDate,
  birthPlace,
  deathPlace,
  photoUrl,
  className,
}: MemorialHeroProps) {
  const birthDay = new Date(birthDate);
  const deathDay = new Date(deathDate);

  const birthDayMonth = format(birthDay, "d MMMM", { locale: ru });
  const deathDayMonth = format(deathDay, "d MMMM", { locale: ru });
  const birthYear = format(birthDay, "yyyy");
  const deathYear = format(deathDay, "yyyy");

  const age = differenceInYears(deathDay, birthDay);

  return (
    <div
      className={cn(
        "relative w-full",
        "bg-cover bg-center bg-no-repeat",
        className
      )}
      style={{
        backgroundImage: `url(/images/background.png)`,
      }}
    >
      <div className="w-full">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[480px_1fr] gap-8 lg:gap-12 items-stretch py-12 lg:py-16">
            {/* Photo Section - Left */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px]">
                <Image
                  src={photoUrl}
                  alt={`Фото ${fullName}`}
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 400px, 480px"
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>

            {/* Text Section - Right */}
            <div className="flex flex-col justify-between text-left h-full">
              <div>
                {/* Name */}
                <Typography.H1 
                  className="text-white font-bold mb-10"
                  style={{ 
                    fontSize: "40px",
                    lineHeight: "1.2",
                    fontWeight: 700
                  }}
                >
                  {fullName}
                </Typography.H1>

                {/* Years lived badge */}
                <div className="inline-block mb-5">
                  <span 
                    className="inline-block px-4 py-1.5 rounded-full font-light"
                    style={{ 
                      backgroundColor: "#F6B95A",
                      fontSize: "16px",
                      color: "#1F1F1F"
                    }}
                  >
                    {age} лет жизни
                  </span>
                </div>

                {/* Dates */}
                <div className="flex items-baseline gap-3">
                  <span 
                    className="font-light"
                    style={{ 
                      fontSize: "20px",
                      color: "#8B8B8B"
                    }}
                  >
                    {birthDayMonth}
                  </span>
                  <span 
                    className="font-bold text-white"
                    style={{ fontSize: "20px" }}
                  >
                    {birthYear}
                  </span>
                  <span 
                    className="text-white mx-2"
                    style={{ fontSize: "20px" }}
                  >
                    –
                  </span>
                  <span 
                    className="font-bold text-white"
                    style={{ fontSize: "20px" }}
                  >
                    {deathYear}
                  </span>
                  <span 
                    className="font-light"
                    style={{ 
                      fontSize: "20px",
                      color: "#8B8B8B"
                    }}
                  >
                    {deathDayMonth}
                  </span>
                </div>
              </div>

              {/* Location blocks */}
              <div className="mt-8 lg:mt-auto space-y-4">
                {/* Birth place */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin 
                      size={14} 
                      style={{ color: "#8B8B8B" }}
                    />
                    <span 
                      style={{ 
                        fontSize: "14px",
                        color: "#8B8B8B"
                      }}
                    >
                      Место рождения
                    </span>
                  </div>
                  <Typography.P 
                    className="text-white font-bold m-0"
                    style={{ 
                      fontSize: "20px",
                      marginTop: "4px"
                    }}
                  >
                    {birthPlace}
                  </Typography.P>
                </div>

                {/* Death place */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <MapPin 
                      size={14} 
                      style={{ color: "#8B8B8B" }}
                    />
                    <span 
                      style={{ 
                        fontSize: "14px",
                        color: "#8B8B8B"
                      }}
                    >
                      Место смерти
                    </span>
                  </div>
                  <Typography.P 
                    className="text-white font-bold m-0"
                    style={{ 
                      fontSize: "20px",
                      marginTop: "4px"
                    }}
                  >
                    {deathPlace}
                  </Typography.P>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}