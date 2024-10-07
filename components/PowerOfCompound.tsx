import { Card, CardContent } from "@/components/ui/card"
import { LightbulbIcon, TrendingUpIcon, PiggyBankIcon } from "lucide-react"

export default function PowerOfCompound() {
  return (
    <div className="w-full max-w-4xl mt-8 space-y-6">
      <h2 className="text-4xl font-bold text-center text-primary">The Power of Compound Interest</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-secondary/50">
          <CardContent className="p-6 flex flex-col items-center space-y-4">
            <LightbulbIcon className="w-12 h-12 text-primary" />
            <h3 className="text-2xl font-semibold text-primary">Time Magic</h3>
            <p className="text-center text-lg">
              Compound interest grows your money over time. The earlier you start, the more remarkable the returns.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-secondary/50">
          <CardContent className="p-6 flex flex-col items-center space-y-4">
            <TrendingUpIcon className="w-12 h-12 text-primary" />
            <h3 className="text-2xl font-semibold text-primary">Exponential Growth</h3>
            <p className="text-center text-lg">
              Compound interest doesn't just add; it multiplies, leading to exponential growth.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-secondary/50">
          <CardContent className="p-6 flex flex-col items-center space-y-4">
            <PiggyBankIcon className="w-12 h-12 text-primary" />
            <h3 className="text-2xl font-semibold text-primary">Passive Income</h3>
            <p className="text-center text-lg">
              Let your money work for you. Compound interest generates passive income, growing your wealth while you sleep.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}