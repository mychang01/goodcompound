import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function HeroSection() {
  return (
    <Card className="w-full max-w-4xl mb-8 bg-primary/10">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl text-center text-primary">
          Grow Your Wealth with Compound Interest
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-lg md:text-xl text-muted-foreground">
          Discover the power of compound interest and watch your investments soar. Start your journey to financial freedom today with our easy-to-use calculator below.
        </p>
      </CardContent>
    </Card>
  );
}