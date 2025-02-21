
import { useState } from "react";
import { Calendar, Clock, Music2 } from "lucide-react";
import MainNav from "@/components/MainNav";
import StatsCard from "@/components/dashboard/StatsCard";
import UpcomingBookings from "@/components/dashboard/UpcomingBookings";
import RecentActivity from "@/components/dashboard/RecentActivity";
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

  const statsCards = [
    {
      title: "Upcoming Sessions",
      value: "3",
      subtitle: "+2 this week",
      icon: Calendar,
    },
    {
      title: "Studio Hours",
      value: "24.5",
      subtitle: "Hours booked this month",
      icon: Clock,
    },
    {
      title: "Projects",
      value: "7",
      subtitle: "Active projects",
      icon: Music2,
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
            {statsCards.map((card, index) => (
              <StatsCard
                key={card.title}
                title={card.title}
                value={card.value}
                subtitle={card.subtitle}
                icon={card.icon}
                delay={index * 0.1}
              />
            ))}
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

            <TabsContent value="upcoming">
              <UpcomingBookings bookings={upcomingBookings} />
            </TabsContent>

            <TabsContent value="activity">
              <RecentActivity activities={recentActivity} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
