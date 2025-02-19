
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/MainNav";
import {
  Calendar,
  Clock,
  Music2,
  User,
  Settings,
  DollarSign,
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Dashboard = () => {
  const [userRole] = useState<"client" | "staff">("client"); // This will be replaced with auth context

  const upcomingBookings = [
    {
      id: 1,
      service: "Recording Session",
      date: "2024-03-20",
      time: "14:00",
      staff: "Playa Pizzle",
      status: "confirmed",
    },
    {
      id: 2,
      service: "Mix & Master",
      date: "2024-03-25",
      time: "16:30",
      staff: "Staxx Tv",
      status: "pending",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "Recording",
      date: "2024-03-15",
      description: "2-hour session completed",
      amount: 100,
    },
    {
      id: 2,
      type: "Mixing",
      date: "2024-03-10",
      description: "Final mix delivered",
      amount: 150,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      <MainNav />
      
      <main className="pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">
              Welcome back, {userRole === "staff" ? "Producer" : "Artist"}
            </h1>
            <p className="text-gray-300 mt-2">
              Manage your {userRole === "staff" ? "sessions" : "bookings"} and track your progress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-black/50 backdrop-blur-lg border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-white text-sm font-medium">
                    Upcoming Sessions
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">3</div>
                  <p className="text-xs text-gray-400">+2 this week</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Card className="bg-black/50 backdrop-blur-lg border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-white text-sm font-medium">
                    Studio Hours
                  </CardTitle>
                  <Clock className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">24.5</div>
                  <p className="text-xs text-gray-400">Hours booked this month</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="bg-black/50 backdrop-blur-lg border-primary/20">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-white text-sm font-medium">
                    Projects
                  </CardTitle>
                  <Music2 className="h-4 w-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">7</div>
                  <p className="text-xs text-gray-400">Active projects</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <Tabs defaultValue="upcoming" className="space-y-6">
            <TabsList className="bg-black/50 border-primary/20">
              <TabsTrigger value="upcoming" className="text-white data-[state=active]:text-primary">
                Upcoming Sessions
              </TabsTrigger>
              <TabsTrigger value="activity" className="text-white data-[state=active]:text-primary">
                Recent Activity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {upcomingBookings.map((booking) => (
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
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              {recentActivity.map((activity) => (
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
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
