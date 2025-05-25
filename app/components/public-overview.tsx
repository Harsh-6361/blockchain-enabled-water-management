"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Droplets, Shield, Activity, Users, TrendingUp, MapPin, Clock, CheckCircle } from "lucide-react"

interface PublicOverviewProps {
  sensorData: any[]
  totalWaterReserves: number
  averageQuality: number
  verifiedSensors: number
}

export function PublicOverview({
  sensorData,
  totalWaterReserves,
  averageQuality,
  verifiedSensors,
}: PublicOverviewProps) {
  const systemStats = {
    totalUsers: 2847,
    monthlyTransactions: 15420,
    waterSaved: 18.5,
    systemUptime: 99.8,
    lastUpdate: new Date().toLocaleString(),
  }

  const publicMetrics = [
    {
      location: "North Reservoir",
      capacity: "85%",
      quality: "Excellent",
      status: "operational",
    },
    {
      location: "South Well",
      capacity: "72%",
      quality: "Good",
      status: "operational",
    },
    {
      location: "Central Treatment",
      capacity: "91%",
      quality: "Excellent",
      status: "operational",
    },
    {
      location: "East Distribution",
      capacity: "68%",
      quality: "Good",
      status: "maintenance",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Project Introduction */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Droplets className="w-8 h-8 text-blue-600" />
            AquaChain: Blockchain Water Management System
          </CardTitle>
          <CardDescription className="text-base">
            A revolutionary water resource management platform that combines IoT sensors, blockchain technology, and AI
            analytics to ensure transparent, efficient, and sustainable water distribution for communities.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Real-Time Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                24/7 monitoring of water quality, levels, and distribution across all network points
              </p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Blockchain Security</h3>
              <p className="text-sm text-muted-foreground">
                Immutable data records and transparent billing through smart contracts
              </p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Activity className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-lg">AI Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Machine learning algorithms optimize distribution and predict maintenance needs
              </p>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="font-semibold mb-4">Key Benefits for the Community</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Transparent Billing</h4>
                  <p className="text-sm text-muted-foreground">
                    Fair, automated billing based on actual usage with blockchain verification
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Water Quality Assurance</h4>
                  <p className="text-sm text-muted-foreground">
                    Continuous monitoring ensures safe, clean water for all residents
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Efficient Distribution</h4>
                  <p className="text-sm text-muted-foreground">
                    AI-optimized distribution reduces waste and ensures equitable access
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <h4 className="font-medium">Community Governance</h4>
                  <p className="text-sm text-muted-foreground">
                    Blockchain-based voting allows community input on water management decisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* System Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Users className="w-4 h-4" />
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{systemStats.totalUsers.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Registered households</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Monthly Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{systemStats.monthlyTransactions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">Blockchain transactions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Water Saved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{systemStats.waterSaved}%</div>
            <p className="text-xs text-muted-foreground mt-1">Vs. traditional systems</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">System Uptime</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{systemStats.systemUptime}%</div>
            <p className="text-xs text-muted-foreground mt-1">Last 30 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Current System Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Live System Status
          </CardTitle>
          <CardDescription>Real-time status of water infrastructure across the network</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {publicMetrics.map((metric, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="font-medium">{metric.location}</span>
                  </div>
                  <Badge
                    variant={metric.status === "operational" ? "default" : "secondary"}
                    className={
                      metric.status === "operational" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    }
                  >
                    {metric.status}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Water Level</span>
                    <span className="font-medium">{metric.capacity}</span>
                  </div>
                  <Progress value={Number.parseInt(metric.capacity)} className="h-2" />
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span>Quality Status</span>
                  <Badge
                    variant="outline"
                    className={
                      metric.quality === "Excellent"
                        ? "text-green-700 border-green-300"
                        : "text-blue-700 border-blue-300"
                    }
                  >
                    {metric.quality}
                  </Badge>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              Last updated: {systemStats.lastUpdate}
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              All data is automatically verified and recorded on the blockchain for transparency and accountability.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <Card>
        <CardHeader>
          <CardTitle>How AquaChain Works</CardTitle>
          <CardDescription>Understanding the technology behind transparent water management</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-medium mb-2">IoT Sensors Collect Data</h4>
              <p className="text-sm text-muted-foreground">
                Smart sensors monitor water quality, flow rates, and system performance in real-time
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-green-600">2</span>
              </div>
              <h4 className="font-medium mb-2">AI Validates & Analyzes</h4>
              <p className="text-sm text-muted-foreground">
                Machine learning algorithms validate data accuracy and generate predictive insights
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-purple-600">3</span>
              </div>
              <h4 className="font-medium mb-2">Blockchain Records</h4>
              <p className="text-sm text-muted-foreground">
                Verified data is permanently recorded on blockchain for transparency and immutability
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl font-bold text-orange-600">4</span>
              </div>
              <h4 className="font-medium mb-2">Smart Billing</h4>
              <p className="text-sm text-muted-foreground">
                Automated billing based on actual usage with cryptocurrency payments
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
