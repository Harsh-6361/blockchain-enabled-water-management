"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Shield, Clock, CheckCircle, AlertCircle, Hash } from "lucide-react"

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

interface BlockchainTransaction {
  id: string
  blockNumber: number
  hash: string
  sensorId: string
  location: string
  dataHash: string
  timestamp: string
  gasUsed: number
  status: "confirmed" | "pending" | "failed"
  validator: string
}

interface BlockchainTransactionsProps {
  sensorData: SensorData[]
}

export function BlockchainTransactions({ sensorData }: BlockchainTransactionsProps) {
  const [transactions, setTransactions] = useState<BlockchainTransaction[]>([])
  const [networkStats, setNetworkStats] = useState({
    totalBlocks: 0,
    totalTransactions: 0,
    averageGas: 0,
    networkHealth: 98.5,
  })

  useEffect(() => {
    // Generate blockchain transactions based on sensor data
    const generateTransactions = () => {
      const newTransactions: BlockchainTransaction[] = sensorData.map((sensor, index) => ({
        id: `tx-${Math.random().toString(36).substr(2, 9)}`,
        blockNumber: 1000000 + index + Math.floor(Math.random() * 1000),
        hash: sensor.blockHash,
        sensorId: sensor.id,
        location: sensor.location,
        dataHash: `0x${Math.random().toString(16).substr(2, 64)}`,
        timestamp: sensor.timestamp,
        gasUsed: 21000 + Math.floor(Math.random() * 50000),
        status: sensor.verified ? "confirmed" : Math.random() > 0.8 ? "pending" : "confirmed",
        validator: `Validator-${Math.floor(Math.random() * 10) + 1}`,
      }))

      setTransactions((prev) => [...newTransactions, ...prev].slice(0, 20))

      // Update network stats
      setNetworkStats({
        totalBlocks: 1000000 + Math.floor(Math.random() * 1000),
        totalTransactions: newTransactions.length + Math.floor(Math.random() * 1000),
        averageGas: newTransactions.reduce((sum, tx) => sum + tx.gasUsed, 0) / newTransactions.length,
        networkHealth: 95 + Math.random() * 5,
      })
    }

    generateTransactions()
  }, [sensorData])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-600" />
      case "failed":
        return <AlertCircle className="w-4 h-4 text-red-600" />
      default:
        return <Clock className="w-4 h-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Network Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Blocks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{networkStats.totalBlocks.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{networkStats.totalTransactions.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Gas Used</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{Math.floor(networkStats.averageGas).toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Network Health</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{networkStats.networkHealth.toFixed(1)}%</div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Recent Blockchain Transactions
              </CardTitle>
              <CardDescription>
                Water sensor data recorded on the blockchain for transparency and immutability
              </CardDescription>
            </div>
            <Button variant="outline">
              <Hash className="w-4 h-4 mr-2" />
              View All Blocks
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(transaction.status)}
                      <div>
                        <div className="font-medium">Block #{transaction.blockNumber}</div>
                        <div className="text-sm text-muted-foreground">{transaction.location}</div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(transaction.status)}>{transaction.status}</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Transaction Hash:</div>
                      <div className="font-mono text-xs bg-gray-100 p-1 rounded truncate">{transaction.hash}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Data Hash:</div>
                      <div className="font-mono text-xs bg-gray-100 p-1 rounded truncate">{transaction.dataHash}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground">Gas: {transaction.gasUsed.toLocaleString()}</span>
                      <span className="text-muted-foreground">Validator: {transaction.validator}</span>
                    </div>
                    <span className="text-muted-foreground">{new Date(transaction.timestamp).toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  )
}
