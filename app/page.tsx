"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Droplets, Activity, Shield, TrendingUp, Book } from "lucide-react"
import { WaterSensorCard } from "./components/water-sensor-card"
import { BlockchainTransactions } from "./components/blockchain-transactions"
import { AIAnalytics } from "./components/ai-analytics"
import { WaterDistribution } from "./components/water-distribution"
import { WalletConnect } from "./components/wallet-connect"
import { BillingSystem } from "./components/billing-system"
import { useWallet } from "./providers/wallet-provider"
import Link from "next/link"
import { PublicOverview } from "./components/public-overview"

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

export default function WaterManagementDashboard() {
  const { isConnected, userType } = useWallet()
  const [sensorData, setSensorData] = useState<SensorData[]>([])
  const [isSystemConnected, setIsSystemConnected] = useState(false)
  const [totalWaterReserves, setTotalWaterReserves] = useState(0)

  // Simulate real-time sensor data
  useEffect(() => {
    const generateSensorData = (): SensorData => ({
      id: `sensor-${Math.random().toString(36).substr(2, 9)}`,
      location: ["North Reservoir", "South Well", "Central Treatment", "East Distribution"][
        Math.floor(Math.random() * 4)
      ],
      waterLevel: Math.floor(Math.random() * 100),
      quality: Math.floor(Math.random() * 100),
      temperature: 15 + Math.random() * 20,
      ph: 6.5 + Math.random() * 2,
      turbidity: Math.random() * 10,
      timestamp: new Date().toISOString(),
      blockHash: `0x${Math.random().toString(16).substr(2, 64)}`,
      verified: Math.random() > 0.1,
    })

    // Initial data
    const initialData = Array.from({ length: 4 }, generateSensorData)
    setSensorData(initialData)
    setTotalWaterReserves(initialData.reduce((sum, sensor) => sum + sensor.waterLevel, 0))
    setIsSystemConnected(true)

    // Simulate real-time updates
    const interval = setInterval(() => {
      setSensorData((prev) => {
        const newData = prev.map((sensor) => ({
          ...sensor,
          waterLevel: Math.max(0, Math.min(100, sensor.waterLevel + (Math.random() - 0.5) * 10)),
          quality: Math.max(0, Math.min(100, sensor.quality + (Math.random() - 0.5) * 5)),
          temperature: Math.max(0, Math.min(40, sensor.temperature + (Math.random() - 0.5) * 2)),
          timestamp: new Date().toISOString(),
          blockHash: `0x${Math.random().toString(16).substr(2, 64)}`,
        }))
        setTotalWaterReserves(newData.reduce((sum, sensor) => sum + sensor.waterLevel, 0))
        return newData
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const averageQuality =
    sensorData.length > 0 ? sensorData.reduce((sum, sensor) => sum + sensor.quality, 0) / sensorData.length : 0
  const verifiedSensors = sensorData.filter((sensor) => sensor.verified).length

  // Show public overview when not connected or in public mode
  if (!isConnected || userType === "public") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">AquaChain</h1>
              <p className="text-xl text-gray-600">Blockchain-enabled transparent water management</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/docs">
                <Button variant="outline">
                  <Book className="w-4 h-4 mr-2" />
                  Documentation
                </Button>
              </Link>
              <WalletConnect />
            </div>
          </div>

          {/* Public Overview */}
          <PublicOverview
            sensorData={sensorData}
            totalWaterReserves={totalWaterReserves}
            averageQuality={averageQuality}
            verifiedSensors={verifiedSensors}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">AquaChain Dashboard</h1>
            <p className="text-gray-600">
              {userType === "public" && "Public view - General system information"}
              {userType === "resident" && "Resident view - Your personal water usage and billing"}
              {userType === "admin" && "Admin view - Full system control and analytics"}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/docs">
              <Button variant="outline">
                <Book className="w-4 h-4 mr-2" />
                Documentation
              </Button>
            </Link>
            <WalletConnect />
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Water Reserves</CardTitle>
              <Droplets className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalWaterReserves.toFixed(1)}%</div>
              <Progress value={totalWaterReserves / 4} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Quality</CardTitle>
              <Activity className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{averageQuality.toFixed(1)}%</div>
              <Progress value={averageQuality} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Verified Sensors</CardTitle>
              <Shield className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {verifiedSensors}/{sensorData.length}
              </div>
              <Progress value={(verifiedSensors / sensorData.length) * 100} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Status</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Optimal</div>
              <p className="text-xs text-muted-foreground mt-2">All systems operational</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue={userType === "resident" ? "billing" : "sensors"} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="sensors">IoT Sensors</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
            <TabsTrigger value="analytics" disabled={userType === "public"}>
              AI Analytics
            </TabsTrigger>
            <TabsTrigger value="distribution" disabled={userType === "public"}>
              Distribution
            </TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="sensors" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sensorData.map((sensor) => (
                <WaterSensorCard key={sensor.id} sensor={sensor} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="blockchain">
            <BlockchainTransactions sensorData={sensorData} />
          </TabsContent>

          <TabsContent value="analytics">
            {userType === "admin" ? (
              <AIAnalytics sensorData={sensorData} />
            ) : (
              <div className="text-center p-8">
                <p className="text-muted-foreground">Analytics access restricted to administrators</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="distribution">
            {userType === "admin" ? (
              <WaterDistribution sensorData={sensorData} />
            ) : (
              <div className="text-center p-8">
                <p className="text-muted-foreground">Distribution controls restricted to administrators</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="billing">
            <BillingSystem />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
