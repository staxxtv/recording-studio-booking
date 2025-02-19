
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface Props {
  selectedService: string;
  hours: number;
  updateService: (service: string) => void;
  updateHours: (hours: number) => void;
}

const services = [
  {
    id: "recording",
    name: "Recording Session",
    basePrice: 60,
    discountedPrice: 50,
    description: "Professional recording session with state-of-the-art equipment",
  },
  {
    id: "mixing",
    name: "Mix & Master",
    basePrice: 50,
    description: "Must provide full session track-outs (stems) for mixing and mastering",
  },
  {
    id: "beats",
    name: "Beat Listening",
    basePrice: 150,
    description: "Listen to and select from our premium beat collection",
  },
];

const ServiceSelection = ({
  selectedService,
  hours,
  updateService,
  updateHours,
}: Props) => {
  const selectedServiceData = services.find((s) => s.id === selectedService);
  const price = selectedServiceData
    ? selectedService === "recording" && hours >= 2
      ? selectedServiceData.discountedPrice * hours
      : selectedServiceData.basePrice * (selectedService === "mixing" ? 1 : hours)
    : 0;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        Select Your Service
      </h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="service" className="text-white">Service Type</Label>
          <Select value={selectedService} onValueChange={updateService}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service.name} (${service.basePrice}/hour)
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedServiceData && (
            <p className="mt-2 text-sm text-gray-400">
              {selectedServiceData.description}
            </p>
          )}
        </div>

        {selectedService && selectedService !== "mixing" && (
          <div>
            <Label htmlFor="hours" className="text-white">Number of Hours</Label>
            <Input
              id="hours"
              type="number"
              min="1"
              max="24"
              value={hours}
              onChange={(e) => updateHours(parseInt(e.target.value) || 1)}
              className="bg-white/10 border-white/20 text-white"
            />
            {selectedService === "recording" && hours >= 2 && (
              <p className="mt-2 text-sm text-emerald-400">
                Discounted rate applied for booking 2+ hours!
              </p>
            )}
          </div>
        )}

        <div className="mt-6 p-4 bg-white/5 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-white">Total Price:</span>
            <span className="text-2xl font-bold text-primary">${price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelection;
