"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, TrendingUp, AlertTriangle, Zap, Target, BarChart3 } from "lucide-react"

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

interface AIInsight {
  id: string
  type: "prediction" | "anomaly" | "optimization" | "alert"
  title: string
  description: string
  confidence: number
  impact: "low" | "medium" | "high"
  location: string
  timestamp: string
}

interface AIAnalyticsProps {
  sensorData: SensorData[]
}

export function AIAnalytics({ sensorData }: AIAnalyticsProps) {
  const [insights, setInsights] = useState<AIInsight[]>([])
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [modelAccuracy, setModelAccuracy] = useState(94.2)

  useEffect(() => {
    generateAIInsights()
  }, [sensorData])

  const generateAIInsights = () => {
    setIsAnalyzing(true)

    setTimeout(() => {
      const newInsights: AIInsight[] = [
        {
          id: "1",
          type: "prediction",
          title: "Water Level Decline Predicted",
          description:
            "North Reservoir water level expected to drop by 15% in next 48 hours based on consumption patterns.",
          confidence: 87,
          impact: "high",
          location: "North Reservoir",
          timestamp: new Date().toISOString(),
        },
        {
          id: "2",
          type: "anomaly",
          title: "pH Level Anomaly Detected",
          description: "Unusual pH fluctuations detected in South Well. Recommend immediate inspection.",
          confidence: 92,
          impact: "medium",
          location: "South Well",
          timestamp: new Date().toISOString(),
        },
        {
          id: "3",
          type: "optimization",
          title: "Distribution Optimization",
          description:
            "AI suggests redistributing 20% of flow from Central Treatment to East Distribution for optimal efficiency.",
          confidence: 78,
          impact: "medium",
          location: "Central Treatment",
          timestamp: new Date().toISOString(),
        },
        {
          id: "4",
          type: "alert",
          title: "Quality Threshold Alert",
          description: "Water quality in East Distribution approaching minimum threshold. Immediate action required.",
          confidence: 95,
          impact: "high",
          location: "East Distribution",
          timestamp: new Date().toISOString(),
        },
      ]

      setInsights(newInsights)
      setIsAnalyzing(false)
      setModelAccuracy(93.5 + Math.random() * 2)
    }, 2000)
  }

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "prediction":
        return <TrendingUp className="w-4 h-4 text-blue-600" />
      case "anomaly":
        return <AlertTriangle className="w-4 h-4 text-red-600" />
      case "optimization":
        return <Target className="w-4 h-4 text-green-600" />
      case "alert":
        return <Zap className="w-4 h-4 text-orange-600" />
      default:
        return <Brain className="w-4 h-4 text-purple-600" />
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const averageQuality =
    sensorData.length > 0 ? sensorData.reduce((sum, sensor) => sum + sensor.quality, 0) / sensorData.length : 0
  const averageLevel =
    sensorData.length > 0 ? sensorData.reduce((sum, sensor) => sum + sensor.waterLevel, 0) / sensorData.length : 0

  return (
    <div className="space-y-6">
      {/* AI Model Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Model Accuracy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{modelAccuracy.toFixed(1)}%</div>
            <Progress value={modelAccuracy} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Predictions Made</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground mt-1">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Anomalies Detected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">23</div>
            <p className="text-xs text-muted-foreground mt-1">Last 7 days</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Efficiency Gain</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+18.5%</div>
            <p className="text-xs text-muted-foreground mt-1">vs. manual management</p>
          </CardContent>
        </Card>
      </div>

      {/* Real-time Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Real-time Analysis
            </CardTitle>
            <CardDescription>Current system performance metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Average Water Quality</span>
                <span className="text-sm font-bold">{averageQuality.toFixed(1)}%</span>
              </div>
              <Progress value={averageQuality} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Average Water Level</span>
                <span className="text-sm font-bold">{averageLevel.toFixed(1)}%</span>
              </div>
              <Progress value={averageLevel} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">System Efficiency</span>
                <span className="text-sm font-bold">92.3%</span>
              </div>
              <Progress value={92.3} />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm">Predictive Accuracy</span>
                <span className="text-sm font-bold">{modelAccuracy.toFixed(1)}%</span>
              </div>
              <Progress value={modelAccuracy} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Processing Status</CardTitle>
            <CardDescription>Current AI model operations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Brain className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium">Predictive Model</div>
                  <div className="text-sm text-muted-foreground">Running continuous analysis</div>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">Active</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-medium">Anomaly Detection</div>
                  <div className="text-sm text-muted-foreground">Monitoring for irregularities</div>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">Active</Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-medium">Optimization Engine</div>
                  <div className="text-sm text-muted-foreground">Calculating efficiency improvements</div>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">Active</Badge>
            </div>

            <Button onClick={generateAIInsights} disabled={isAnalyzing} className="w-full">
              {isAnalyzing ? "Analyzing..." : "Run New Analysis"}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                AI-Generated Insights
              </CardTitle>
              <CardDescription>Machine learning insights and recommendations for water management</CardDescription>
            </div>
            <Button variant="outline" onClick={generateAIInsights} disabled={isAnalyzing}>
              {isAnalyzing ? "Analyzing..." : "Refresh Insights"}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight) => (
              <div key={insight.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    {getInsightIcon(insight.type)}
                    <div className="flex-1">
                      <div className="font-medium">{insight.title}</div>
                      <div className="text-sm text-muted-foreground mt-1">{insight.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getImpactColor(insight.impact)}>{insight.impact} impact</Badge>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">Location: {insight.location}</span>
                    <span className="text-muted-foreground">Confidence: {insight.confidence}%</span>
                  </div>
                  <span className="text-muted-foreground">{new Date(insight.timestamp).toLocaleString()}</span>
                </div>

                <Progress value={insight.confidence} className="h-1" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
