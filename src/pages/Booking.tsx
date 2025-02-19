
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import MainNav from "@/components/MainNav";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ClientInfoForm from "@/components/booking/ClientInfoForm";
import ServiceSelection from "@/components/booking/ServiceSelection";
import StaffSelection from "@/components/booking/StaffSelection";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    clientInfo: {
      name: "",
      phone: "",
      email: "",
    },
    service: "",
    hours: 1,
    staff: "",
  });

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black">
      <MainNav />
      
      <main className="pt-28 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              {[1, 2, 3].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`flex-1 h-2 rounded-full mx-2 ${
                    stepNumber <= step ? "bg-primary" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-center text-white">
              Step {step} of 3
            </p>
          </div>

          <motion.div
            className="bg-black/50 backdrop-blur-lg rounded-xl p-6 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {step === 1 && (
                  <ClientInfoForm
                    data={formData.clientInfo}
                    updateData={(value) => updateFormData("clientInfo", value)}
                  />
                )}
                {step === 2 && (
                  <ServiceSelection
                    selectedService={formData.service}
                    hours={formData.hours}
                    updateService={(value) => updateFormData("service", value)}
                    updateHours={(value) => updateFormData("hours", value)}
                  />
                )}
                {step === 3 && (
                  <StaffSelection
                    selectedStaff={formData.staff}
                    updateStaff={(value) => updateFormData("staff", value)}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button
                  variant="outline"
                  onClick={prevStep}
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
              )}
              <div className="flex-1" />
              <Button
                onClick={nextStep}
                className="bg-primary text-white hover:bg-primary/90"
              >
                {step === 3 ? "Submit" : "Next"} <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Booking;
