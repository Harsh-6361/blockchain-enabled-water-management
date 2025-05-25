"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Droplets, Thermometer, Activity, Shield, AlertTriangle } from "lucide-react"

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

interface WaterSensorCardProps {
  sensor: SensorData
}

export function WaterSensorCard({ sensor }: WaterSensorCardProps) {
  const getQualityStatus = (quality: number) => {
    if (quality >= 80) return { label: "Excellent", color: "bg-green-500" }
    if (quality >= 60) return { label: "Good", color: "bg-blue-500" }
    if (quality >= 40) return { label: "Fair", color: "bg-yellow-500" }
    return { label: "Poor", color: "bg-red-500" }
  }

  const qualityStatus = getQualityStatus(sensor.quality)

  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{sensor.location}</CardTitle>
            <CardDescription>Sensor ID: {sensor.id.slice(-8)}</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            {sensor.verified ? (
              <Badge variant="default" className="bg-green-100 text-green-800">
                <Shield className="w-3 h-3 mr-1" />
                Verified
              </Badge>
            ) : (
              <Badge variant="destructive">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Unverified
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Water Level */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Water Level</span>
            </div>
            <span className="text-sm font-bold">{sensor.waterLevel.toFixed(1)}%</span>
          </div>
          <Progress value={sensor.waterLevel} className="h-2" />
        </div>

        {/* Water Quality */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium">Quality</span>
            </div>
            <Badge className={`${qualityStatus.color} text-white`}>{qualityStatus.label}</Badge>
          </div>
          <Progress value={sensor.quality} className="h-2" />
        </div>

        {/* Temperature */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Thermometer className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-medium">Temperature</span>
            </div>
            <span className="text-sm font-bold">{sensor.temperature.toFixed(1)}°C</span>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-2 gap-4 pt-2 border-t">
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">{sensor.ph.toFixed(1)}</div>
            <div className="text-xs text-muted-foreground">pH Level</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-purple-600">{sensor.turbidity.toFixed(1)}</div>
            <div className="text-xs text-muted-foreground">Turbidity</div>
          </div>
        </div>

        {/* Blockchain Hash */}
        <div className="pt-2 border-t">
          <div className="text-xs text-muted-foreground">Block Hash:</div>
          <div className="text-xs font-mono bg-gray-100 p-1 rounded truncate">{sensor.blockHash}</div>
        </div>

        {/* Timestamp */}
        <div className="text-xs text-muted-foreground">
          Last updated: {new Date(sensor.timestamp).toLocaleTimeString()}
        </div>
      </CardContent>
    </Card>
  )
}
