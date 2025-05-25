"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: string
  name: string
  address: string
  role: "admin" | "user"
  location: string
  monthlyUsage: number
  totalBills: number
  avatar: string
}

interface WalletContextType {
  isConnected: boolean
  currentUser: User | null
  userType: "public" | "admin" | "user"
  balance: number
  allUsers: User[]
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
  switchUser: (userId: string) => void
  switchToPublic: () => void
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

// Test users for demonstration
const TEST_USERS: User[] = [
  {
    id: "admin-001",
    name: "Sarah Johnson",
    address: "0x1234567890123456789012345678901234567890",
    role: "admin",
    location: "Water Authority HQ",
    monthlyUsage: 0,
    totalBills: 0,
    avatar: "👩‍💼",
  },
  {
    id: "user-001",
    name: "John Smith",
    address: "0x2345678901234567890123456789012345678901",
    role: "user",
    location: "Residential District A",
    monthlyUsage: 1250,
    totalBills: 3,
    avatar: "👨‍💻",
  },
  {
    id: "user-002",
    name: "Maria Garcia",
    address: "0x3456789012345678901234567890123456789012",
    role: "user",
    location: "Commercial Center",
    monthlyUsage: 2100,
    totalBills: 3,
    avatar: "👩‍🏫",
  },
  {
    id: "user-003",
    name: "David Chen",
    address: "0x4567890123456789012345678901234567890123",
    role: "user",
    location: "Residential District B",
    monthlyUsage: 980,
    totalBills: 3,
    avatar: "👨‍🔬",
  },
  {
    id: "user-004",
    name: "Emily Brown",
    address: "0x5678901234567890123456789012345678901234",
    role: "user",
    location: "Industrial Zone",
    monthlyUsage: 3200,
    totalBills: 3,
    avatar: "👩‍🔧",
  },
  {
    id: "user-005",
    name: "Michael Wilson",
    address: "0x6789012345678901234567890123456789012345",
    role: "user",
    location: "Residential District A",
    monthlyUsage: 1450,
    totalBills: 3,
    avatar: "👨‍🎨",
  },
  {
    id: "user-006",
    name: "Lisa Anderson",
    address: "0x7890123456789012345678901234567890123456",
    role: "user",
    location: "Commercial Center",
    monthlyUsage: 1800,
    totalBills: 3,
    avatar: "👩‍⚕️",
  },
  {
    id: "user-007",
    name: "Robert Taylor",
    address: "0x8901234567890123456789012345678901234567",
    role: "user",
    location: "Residential District B",
    monthlyUsage: 1100,
    totalBills: 3,
    avatar: "👨‍🍳",
  },
  {
    id: "user-008",
    name: "Jennifer Lee",
    address: "0x9012345678901234567890123456789012345678",
    role: "user",
    location: "Industrial Zone",
    monthlyUsage: 2800,
    totalBills: 3,
    avatar: "👩‍🎤",
  },
  {
    id: "user-009",
    name: "Thomas Martinez",
    address: "0xa123456789012345678901234567890123456789",
    role: "user",
    location: "Residential District A",
    monthlyUsage: 1350,
    totalBills: 3,
    avatar: "👨‍🏫",
  },
  {
    id: "user-010",
    name: "Amanda Davis",
    address: "0xb234567890123456789012345678901234567890",
    role: "user",
    location: "Commercial Center",
    monthlyUsage: 1950,
    totalBills: 3,
    avatar: "👩‍💼",
  },
]

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false)
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [userType, setUserType] = useState<"public" | "admin" | "user">("public")
  const [balance, setBalance] = useState(0)

  const connectWallet = async () => {
    try {
      // For demo purposes, connect as the first user
      const defaultUser = TEST_USERS[1] // John Smith
      setCurrentUser(defaultUser)
      setIsConnected(true)
      setUserType(defaultUser.role)
      setBalance(Math.random() * 10 + 1) // Random balance between 1-11 ETH

      // Store in localStorage for persistence
      localStorage.setItem("current_user", JSON.stringify(defaultUser))
      localStorage.setItem("wallet_connected", "true")
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setCurrentUser(null)
    setUserType("public")
    setBalance(0)
    localStorage.removeItem("current_user")
    localStorage.removeItem("wallet_connected")
  }

  const switchUser = (userId: string) => {
    const user = TEST_USERS.find((u) => u.id === userId)
    if (user) {
      setCurrentUser(user)
      setUserType(user.role)
      setBalance(Math.random() * 10 + 1)
      localStorage.setItem("current_user", JSON.stringify(user))
    }
  }

  const switchToPublic = () => {
    setCurrentUser(null)
    setUserType("public")
    setIsConnected(false)
    localStorage.removeItem("current_user")
  }

  // Check for existing connection on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("current_user")
    const savedConnection = localStorage.getItem("wallet_connected")

    if (savedUser && savedConnection === "true") {
      const user = JSON.parse(savedUser)
      setCurrentUser(user)
      setIsConnected(true)
      setUserType(user.role)
      setBalance(Math.random() * 10 + 1)
    }
  }, [])

  return (
    <WalletContext.Provider
      value={{
        isConnected,
        currentUser,
        userType,
        balance,
        allUsers: TEST_USERS,
        connectWallet,
        disconnectWallet,
        switchUser,
        switchToPublic,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (context === undefined) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}
