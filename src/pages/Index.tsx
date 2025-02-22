
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/MainNav";
import { ChevronRight, Music, Mic, Headphones } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Music className="w-6 h-6" />,
      title: "Professional Recording",
      description: "State-of-the-art equipment for crystal-clear sound",
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Expert Engineers",
      description: "Work with industry professionals",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Mix & Master",
      description: "Premium quality audio post-production",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      <MainNav />
      
      <main className="pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white">
              Your Sound, <span className="text-primary">Perfected</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional recording studio equipped with cutting-edge technology and expert engineers to bring your vision to life.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 rounded-full"
                onClick={() => window.location.href = '/booking'}
              >
                Book Now <ChevronRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-morphism p-6 rounded-xl"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
