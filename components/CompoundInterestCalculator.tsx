"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(10000);
  const [rate, setRate] = useState(5);
  const [time, setTime] = useState(10);
  const [result, setResult] = useState(0);

  const calculateCompoundInterest = () => {
    const amount = principal * Math.pow((1 + rate / 100), time);
    setResult(Number(amount.toFixed(2)));
  };

  return (
    <Card className="w-full max-w-md my-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">Compound Interest Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="principal">Initial Investment</Label>
            <Input
              id="principal"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(Number(e.target.value))}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rate">Annual Interest Rate (%)</Label>
            <Slider
              id="rate"
              min={0}
              max={20}
              step={0.1}
              value={[rate]}
              onValueChange={(value) => setRate(value[0])}
            />
            <div className="text-right text-sm text-muted-foreground">{rate}%</div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Investment Period (Years)</Label>
            <Slider
              id="time"
              min={1}
              max={50}
              value={[time]}
              onValueChange={(value) => setTime(value[0])}
            />
            <div className="text-right text-sm text-muted-foreground">{time} years</div>
          </div>
          <Button onClick={calculateCompoundInterest} className="w-full">
            Calculate
          </Button>
          {result > 0 && (
            <div className="mt-4 text-center space-y-2">
              <div>
                <p className="text-lg font-semibold">Final Amount</p>
                <p className="text-2xl font-bold text-primary">${result.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm font-semibold">Initial Investment</p>
                <p className="text-lg font-bold text-secondary-foreground">${principal.toLocaleString()}</p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}