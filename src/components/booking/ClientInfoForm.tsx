
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ClientInfo {
  name: string;
  phone: string;
  email: string;
}

interface Props {
  data: ClientInfo;
  updateData: (data: ClientInfo) => void;
}

const ClientInfoForm = ({ data, updateData }: Props) => {
  const handleChange = (field: keyof ClientInfo) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    updateData({
      ...data,
      [field]: e.target.value,
    });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        Personal Information
      </h2>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-white">Full Name</Label>
          <Input
            id="name"
            value={data.name}
            onChange={handleChange("name")}
            className="bg-white/10 border-white/20 text-white"
            placeholder="Enter your full name"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-white">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={data.phone}
            onChange={handleChange("phone")}
            className="bg-white/10 border-white/20 text-white"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-white">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={data.email}
            onChange={handleChange("email")}
            className="bg-white/10 border-white/20 text-white"
            placeholder="Enter your email address"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientInfoForm;
