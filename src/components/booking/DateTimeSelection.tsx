
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";

interface Props {
  selectedDate: Date | undefined;
  selectedTime: string;
  updateDate: (date: Date | undefined) => void;
  updateTime: (time: string) => void;
}

const DateTimeSelection = ({ selectedDate, selectedTime, updateDate, updateTime }: Props) => {
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 10; hour < 24; hour++) {
      // Regular hours (10 AM - 11:59 PM)
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    // After hours
    for (let hour = 0; hour < 10; hour++) {
      slots.push(`${hour}:00`);
      slots.push(`${hour}:30`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();
  const isAfterHours = (time: string) => {
    const hour = parseInt(time.split(':')[0]);
    return hour >= 0 && hour < 10;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        Select Date & Time
      </h2>

      <div className="space-y-6">
        <div>
          <Label className="text-white mb-2 block">Select Date</Label>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={updateDate}
              className="text-white"
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </div>
        </div>

        <div>
          <Label htmlFor="time" className="text-white">Select Time</Label>
          <Select value={selectedTime} onValueChange={updateTime}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Choose a time slot" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {format(new Date().setHours(parseInt(time), parseInt(time.split(':')[1])), 'hh:mm a')}
                  {isAfterHours(time) && " (After Hours)"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {isAfterHours(selectedTime) && (
            <p className="mt-2 text-sm text-amber-400">
              Note: After-hours booking includes additional charges
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DateTimeSelection;
