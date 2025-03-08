import { motion } from "framer-motion";
import { Building, Users, Megaphone, Leaf } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface ThemeCardProps {
  title: string;
  description: string;
  icon: "bank" | "users" | "megaphone" | "leaf";
}

const iconMap = {
  bank: Building,
  users: Users,
  megaphone: Megaphone,
  leaf: Leaf
};

export default function ThemeCard({ title, description, icon }: ThemeCardProps) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-full bg-primary/10">
              <Icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}