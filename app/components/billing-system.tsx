"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Clock, CheckCircle, AlertCircle, Droplets, Receipt } from "lucide-react"
import { useWallet } from "../providers/wallet-provider"

interface WaterBill {
  id: string
  userId?: string
  userName?: string
  month: string
  usage: number
  rate: number
  amount: number
  dueDate: string
  status: "paid" | "pending" | "overdue"
  transactionHash?: string
  blockNumber?: number
}

interface PaymentTransaction {
  id: string
  billId: string
  amount: number
  timestamp: string
  hash: string
  status: "confirmed" | "pending" | "failed"
  gasUsed: number
}

export function BillingSystem() {
  const { currentUser, userType, allUsers } = useWallet()
  const [bills, setBills] = useState<WaterBill[]>([])
  const [transactions, setTransactions] = useState<PaymentTransaction[]>([])
  const [isProcessing, setIsProcessing] = useState<string | null>(null)

  // Generate bills based on user type
  useEffect(() => {
    if (userType === "admin") {
      // Admin sees all users' bills
      const allBills: WaterBill[] = allUsers
        .filter((u) => u.role === "user")
        .flatMap((user) => [
          {
            id: `bill-${user.id}-001`,
            userId: user.id,
            userName: user.name,
            month: "December 2024",
            usage: user.monthlyUsage,
            rate: 0.003,
            amount: user.monthlyUsage * 0.003,
            dueDate: "2024-12-31",
            status: Math.random() > 0.7 ? "pending" : "paid",
          },
          {
            id: `bill-${user.id}-002`,
            userId: user.id,
            userName: user.name,
            month: "November 2024",
            usage: user.monthlyUsage,
            rate: 0.003,
            amount: user.monthlyUsage * 0.003,
            dueDate: "2024-11-30",
            status: Math.random() > 0.7 ? "pending" : "paid",
          },
          {
            id: `bill-${user.id}-003`,
            userId: user.id,
            userName: user.name,
            month: "October 2024",
            usage: user.monthlyUsage,
            rate: 0.003,
            amount: user.monthlyUsage * 0.003,
            dueDate: "2024-10-31",
            status: Math.random() > 0.7 ? "pending" : "paid",
          },
        ])
      setBills(allBills)
    } else if (userType === "user" && currentUser) {
      // User sees only their bills
      const userBills: WaterBill[] = [
        {
          id: `bill-${currentUser.id}-001`,
          userId: currentUser.id,
          userName: currentUser.name,
          month: "December 2024",
          usage: currentUser.monthlyUsage,
          rate: 0.003,
          amount: currentUser.monthlyUsage * 0.003,
          dueDate: "2024-12-31",
          status: "pending",
        },
        {
          id: `bill-${currentUser.id}-002`,
          userId: currentUser.id,
          userName: currentUser.name,
          month: "November 2024",
          usage: currentUser.monthlyUsage,
          rate: 0.003,
          amount: currentUser.monthlyUsage * 0.003,
          dueDate: "2024-11-30",
          status: Math.random() > 0.7 ? "pending" : "paid",
        },
        {
          id: `bill-${currentUser.id}-003`,
          userId: currentUser.id,
          userName: currentUser.name,
          month: "October 2024",
          usage: currentUser.monthlyUsage,
          rate: 0.003,
          amount: currentUser.monthlyUsage * 0.003,
          dueDate: "2024-10-31",
          status: Math.random() > 0.7 ? "pending" : "paid",
        },
      ]
      setBills(userBills)
    }
  }, [userType, currentUser, allUsers])

  useEffect(() => {
    // Generate mock transactions
    const mockTransactions: PaymentTransaction[] = [
      {
        id: "tx-001",
        billId: "bill-002",
        amount: 3.54,
        timestamp: "2024-11-25T10:30:00Z",
        hash: "0x1234567890abcdef",
        status: "confirmed",
        gasUsed: 21000,
      },
      {
        id: "tx-002",
        billId: "bill-003",
        amount: 3.96,
        timestamp: "2024-10-28T14:15:00Z",
        hash: "0xabcdef1234567890",
        status: "confirmed",
        gasUsed: 21000,
      },
    ]

    setTransactions(mockTransactions)
  }, [])

  const payBill = async (billId: string) => {
    setIsProcessing(billId)

    // Simulate blockchain transaction
    setTimeout(() => {
      const bill = bills.find((b) => b.id === billId)
      if (bill) {
        const newTransaction: PaymentTransaction = {
          id: `tx-${Date.now()}`,
          billId,
          amount: bill.amount,
          timestamp: new Date().toISOString(),
          hash: `0x${Math.random().toString(16).substr(2, 64)}`,
          status: "confirmed",
          gasUsed: 21000 + Math.floor(Math.random() * 10000),
        }

        setTransactions((prev) => [newTransaction, ...prev])
        setBills((prev) =>
          prev.map((b) =>
            b.id === billId
              ? {
                  ...b,
                  status: "paid" as const,
                  transactionHash: newTransaction.hash,
                  blockNumber: 1000000 + Math.floor(Math.random() * 1000),
                }
              : b,
          ),
        )
      }
      setIsProcessing(null)
    }, 3000)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paid":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-600" />
      case "overdue":
        return <AlertCircle className="w-4 h-4 text-red-600" />
      default:
        return <Clock className="w-4 h-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "paid":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "overdue":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const totalUsage = bills.reduce((sum, bill) => sum + bill.usage, 0)
  const totalAmount = bills.reduce((sum, bill) => sum + bill.amount, 0)
  const paidBills = bills.filter((bill) => bill.status === "paid").length
  const pendingAmount = bills.filter((bill) => bill.status === "pending").reduce((sum, bill) => sum + bill.amount, 0)

  if (userType === "public") {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Receipt className="w-5 h-5" />
            Public Billing Information
          </CardTitle>
          <CardDescription>General billing statistics and transparency information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">0.003 ETH</div>
              <div className="text-sm text-muted-foreground">Rate per Liter</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">98.5%</div>
              <div className="text-sm text-muted-foreground">Payment Rate</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">24/7</div>
              <div className="text-sm text-muted-foreground">Transparent Billing</div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              All billing transactions are recorded on the blockchain for complete transparency. Connect your wallet to
              view your personal billing information.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Billing Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Droplets className="w-4 h-4" />
              Total Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUsage.toLocaleString()} L</div>
            <p className="text-xs text-muted-foreground mt-1">Last 3 months</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAmount.toFixed(2)} ETH</div>
            <p className="text-xs text-muted-foreground mt-1">All bills</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Payment Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {paidBills}/{bills.length}
            </div>
            <Progress value={(paidBills / bills.length) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">{pendingAmount.toFixed(2)} ETH</div>
            <p className="text-xs text-muted-foreground mt-1">Due soon</p>
          </CardContent>
        </Card>
      </div>

      {/* Bills and Transactions */}
      <Tabs defaultValue="bills" className="space-y-4">
        <TabsList>
          <TabsTrigger value="bills">Water Bills</TabsTrigger>
          <TabsTrigger value="transactions">Payment History</TabsTrigger>
        </TabsList>

        <TabsContent value="bills">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="w-5 h-5" />
                Your Water Bills
              </CardTitle>
              <CardDescription>View and pay your water usage bills using cryptocurrency</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bills.map((bill) => (
                  <div key={bill.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(bill.status)}
                        <div>
                          <div className="font-medium">{bill.month}</div>
                          <div className="text-sm text-muted-foreground">Usage: {bill.usage.toLocaleString()} L</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Badge className={getStatusColor(bill.status)}>{bill.status}</Badge>
                        <div className="text-right">
                          <div className="font-bold">{bill.amount.toFixed(2)} ETH</div>
                          <div className="text-sm text-muted-foreground">
                            Due: {new Date(bill.dueDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>

                    {bill.status === "pending" && (
                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="text-sm text-muted-foreground">Rate: {bill.rate} ETH per liter</div>
                        <Button
                          onClick={() => payBill(bill.id)}
                          disabled={isProcessing === bill.id}
                          className="flex items-center gap-2"
                        >
                          <CreditCard className="w-4 h-4" />
                          {isProcessing === bill.id ? "Processing..." : "Pay Now"}
                        </Button>
                      </div>
                    )}

                    {bill.status === "paid" && bill.transactionHash && (
                      <div className="pt-2 border-t">
                        <div className="text-xs text-muted-foreground">Transaction Hash:</div>
                        <div className="text-xs font-mono bg-gray-100 p-1 rounded truncate">{bill.transactionHash}</div>
                        <div className="text-xs text-muted-foreground mt-1">Block: #{bill.blockNumber}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Payment History</CardTitle>
              <CardDescription>All your payment transactions recorded on the blockchain</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <div>
                          <div className="font-medium">Payment Confirmed</div>
                          <div className="text-sm text-muted-foreground">Bill ID: {transaction.billId}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{transaction.amount.toFixed(2)} ETH</div>
                        <div className="text-sm text-muted-foreground">
                          {new Date(transaction.timestamp).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pt-2 border-t">
                      <div>
                        <div className="text-muted-foreground">Transaction Hash:</div>
                        <div className="font-mono text-xs bg-gray-100 p-1 rounded truncate">{transaction.hash}</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground">Gas Used:</div>
                        <div className="font-mono text-xs">{transaction.gasUsed.toLocaleString()}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
