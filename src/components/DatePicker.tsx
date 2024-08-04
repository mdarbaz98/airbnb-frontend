"use client";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
import { RangeType } from "@/types/types.frontend";
import { WrapItem } from "@chakra-ui/react";

type Props = {};

const initialDate = [
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: "selection",
  },
];

export default function DatePicker({}: Props) {
  const [selectedRange, setSelectedRange] = useState<RangeType[]>(initialDate);
  return (
    <WrapItem maxW={"lg"}>
      <DateRange
        showMonthAndYearPickers={false}
        editableDateInputs={false}
        onChange={(range) => {
          const value = range.selection as RangeType;
          setSelectedRange([value]);
        }}
        ranges={selectedRange}
      />
    </WrapItem>
  );
}
