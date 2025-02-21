
import { motion } from "framer-motion";
import { DollarSign } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface Activity {
  id: number;
  type: string;
  date: string;
  description: string;
  amount: number;
}

interface RecentActivityProps {
  activities: Activity[];
}

const RecentActivity = ({ activities }: RecentActivityProps) => {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <motion.div
          key={activity.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-black/50 backdrop-blur-lg border-primary/20">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{activity.type}</h3>
                  <p className="text-sm text-gray-400">
                    {activity.date} • {activity.description}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">${activity.amount}</p>
                <p className="text-xs text-gray-400">Completed</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default RecentActivity;
