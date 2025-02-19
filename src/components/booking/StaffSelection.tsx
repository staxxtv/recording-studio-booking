
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  selectedStaff: string;
  updateStaff: (staff: string) => void;
}

const staff = [
  {
    id: "playa",
    name: "Playa Pizzle",
    specialty: "Sound Engineering, Beat Production, & Ghost Writing",
  },
  {
    id: "staxx",
    name: "Staxx Tv",
    specialty: "Sound Engineering & Beat Production",
  },
  {
    id: "dee",
    name: "Dee Raw Made It",
    specialty: "Beat Production",
  },
  {
    id: "kromatic",
    name: "Kromatic",
    specialty: "Beat Production",
  },
];

const StaffSelection = ({ selectedStaff, updateStaff }: Props) => {
  const selectedStaffMember = staff.find((s) => s.id === selectedStaff);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white text-center mb-6">
        Choose Your Engineer
      </h2>

      <div className="space-y-4">
        <div>
          <Label htmlFor="staff" className="text-white">Select Staff Member (Optional)</Label>
          <Select value={selectedStaff} onValueChange={updateStaff}>
            <SelectTrigger className="bg-white/10 border-white/20 text-white">
              <SelectValue placeholder="Choose an engineer" />
            </SelectTrigger>
            <SelectContent>
              {staff.map((member) => (
                <SelectItem key={member.id} value={member.id}>
                  {member.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {selectedStaffMember && (
            <p className="mt-2 text-sm text-gray-400">
              Specialty: {selectedStaffMember.specialty}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffSelection;
