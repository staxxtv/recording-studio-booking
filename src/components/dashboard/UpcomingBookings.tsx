
import { motion } from "framer-motion";
import { User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface Booking {
  id: number;
  service: string;
  date: string;
  time: string;
  staff: string;
  status: string;
}

interface UpcomingBookingsProps {
  bookings: Booking[];
}

const UpcomingBookings = ({ bookings }: UpcomingBookingsProps) => {
  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <motion.div
          key={booking.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-black/50 backdrop-blur-lg border-primary/20">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{booking.service}</h3>
                  <p className="text-sm text-gray-400">
                    {booking.date} at {booking.time} • {booking.staff}
                  </p>
                </div>
              </div>
              <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default UpcomingBookings;
