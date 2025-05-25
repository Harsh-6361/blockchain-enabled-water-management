"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Slider } from "@/components/ui/slider"
import { MapPin, Users, Droplets, TrendingUp, Settings, Play, Pause } from "lucide-react"

interface SensorData {
  id: string
  location: string
  waterLevel: number
  quality: number
  temperature: number
  ph: number
  turbidity: number
  timestamp: string
  blockHash: string
  verified: boolean
}

interface DistributionZone {
  id: string
  name: string
  population: number
  currentFlow: number
  maxCapacity: number
  demand: number
  priority: "high" | "medium" | "low"
  status: "optimal" | "warning" | "critical"
}

interface WaterDistributionProps {
  sensorData: SensorData[]
}

export function WaterDistribution({ sensorData }: WaterDistributionProps) {
  const [zones, setZones] = useState<DistributionZone[]>([])
  const [isAutoMode, setIsAutoMode] = useState(true)
  const [totalDistribution, setTotalDistribution] = useState(0)

  useEffect(() => {
    // Initialize distribution zones
    const initialZones: DistributionZone[] = [
      {
        id: "zone-1",
        name: "Residential District A",
        population: 15000,
        currentFlow: 450,
        maxCapacity: 600,
        demand: 520,
        priority: "high",
        status: "optimal",
      },
      {
        id: "zone-2",
        name: "Commercial Center",
        population: 8000,
        currentFlow: 280,
        maxCapacity: 400,
        demand: 320,
        priority: "medium",
        status: "warning",
      },
      {
        id: "zone-3",
        name: "Industrial Zone",
        population: 3000,
        currentFlow: 180,
        maxCapacity: 300,
        demand: 250,
        priority: "low",
        status: "critical",
      },
      {
        id: "zone-4",
        name: "Residential District B",
        population: 12000,
        currentFlow: 380,
        maxCapacity: 500,
        demand: 420,
        priority: "high",
        status: "optimal",
      },
    ]

    setZones(initialZones)
    setTotalDistribution(initialZones.reduce((sum, zone) => sum + zone.currentFlow, 0))

    // Simulate real-time updates
    const interval = setInterval(() => {
      setZones((prev) =>
        prev.map((zone) => ({
          ...zone,
          currentFlow: Math.max(0, Math.min(zone.maxCapacity, zone.currentFlow + (Math.random() - 0.5) * 20)),
          demand: Math.max(0, zone.demand + (Math.random() - 0.5) * 30),
        })),
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setTotalDistribution(zones.reduce((sum, zone) => sum + zone.currentFlow, 0))
  }, [zones])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal":
        return "bg-green-100 text-green-800"
      case "warning":
        return "bg-yellow-100 text-yellow-800"
      case "critical":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const updateZoneFlow = (zoneId: string, newFlow: number) => {
    setZones((prev) => prev.map((zone) => (zone.id === zoneId ? { ...zone, currentFlow: newFlow } : zone)))
  }

  const totalCapacity = zones.reduce((sum, zone) => sum + zone.maxCapacity, 0)
  const totalDemand = zones.reduce((sum, zone) => sum + zone.demand, 0)
  const totalPopulation = zones.reduce((sum, zone) => sum + zone.population, 0)

  return (
    <div className="space-y-6">
      {/* Distribution Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Droplets className="w-4 h-4" />
              Total Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalDistribution.toFixed(0)} L/min</div>
            <Progress value={(totalDistribution / totalCapacity) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Total Demand
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalDemand.toFixed(0)} L/min</div>
            <Progress value={(totalDemand / totalCapacity) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="w-4 h-4" />
              Population Served
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalPopulation.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">across all zones</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">System Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {((totalDistribution / totalDemand) * 100).toFixed(1)}%
            </div>
            <p className="text-xs text-muted-foreground mt-1">demand satisfaction</p>
          </CardContent>
        </Card>
      </div>

      {/* Control Panel */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Distribution Control
              </CardTitle>
              <CardDescription>Manage water flow distribution across zones</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={isAutoMode ? "default" : "outline"}
                onClick={() => setIsAutoMode(!isAutoMode)}
                className="flex items-center gap-2"
              >
                {isAutoMode ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                {isAutoMode ? "Auto Mode" : "Manual Mode"}
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {zones.map((zone) => (
              <div key={zone.id} className="border rounded-lg p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">{zone.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Population: {zone.population.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getPriorityColor(zone.priority)}>{zone.priority} priority</Badge>
                    <Badge className={getStatusColor(zone.status)}>{zone.status}</Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Current Flow: {zone.currentFlow.toFixed(0)} L/min</span>
                    <span>Demand: {zone.demand.toFixed(0)} L/min</span>
                  </div>

                  <Progress value={(zone.currentFlow / zone.maxCapacity) * 100} className="h-2" />

                  {!isAutoMode && (
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Adjust Flow Rate</label>
                      <Slider
                        value={[zone.currentFlow]}
                        onValueChange={(value) => updateZoneFlow(zone.id, value[0])}
                        max={zone.maxCapacity}
                        min={0}
                        step={10}
                        className="w-full"
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="font-bold text-blue-600">
                        {((zone.currentFlow / zone.demand) * 100).toFixed(0)}%
                      </div>
                      <div className="text-muted-foreground">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-600">{zone.maxCapacity}</div>
                      <div className="text-muted-foreground">Max Capacity</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-purple-600">
                        {((zone.currentFlow / zone.population) * 1000).toFixed(1)}
                      </div>
                      <div className="text-muted-foreground">L/person/min</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Distribution Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Distribution Efficiency</CardTitle>
            <CardDescription>Real-time efficiency metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Overall Efficiency</span>
                <span className="text-sm font-bold">{((totalDistribution / totalDemand) * 100).toFixed(1)}%</span>
              </div>
              <Progress value={(totalDistribution / totalDemand) * 100} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Capacity Utilization</span>
                <span className="text-sm font-bold">{((totalDistribution / totalCapacity) * 100).toFixed(1)}%</span>
              </div>
              <Progress value={(totalDistribution / totalCapacity) * 100} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">High Priority Zones</span>
                <span className="text-sm font-bold">
                  {zones.filter((z) => z.priority === "high").length}/{zones.length}
                </span>
              </div>
              <Progress value={(zones.filter((z) => z.priority === "high").length / zones.length) * 100} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Zone Status Summary</CardTitle>
            <CardDescription>Current status across all zones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {["optimal", "warning", "critical"].map((status) => {
              const count = zones.filter((z) => z.status === status).length
              const percentage = (count / zones.length) * 100

              return (
                <div key={status} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(status)}>{status}</Badge>
                    <span className="text-sm">{count} zones</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Progress value={percentage} className="w-20 h-2" />
                    <span className="text-sm font-bold w-12">{percentage.toFixed(0)}%</span>
                  </div>
                </div>
              )
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
