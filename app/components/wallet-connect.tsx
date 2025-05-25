"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Wallet, LogOut, User, Shield, Eye, Users } from "lucide-react"
import { useWallet } from "../providers/wallet-provider"

export function WalletConnect() {
  const {
    isConnected,
    currentUser,
    userType,
    balance,
    allUsers,
    connectWallet,
    disconnectWallet,
    switchUser,
    switchToPublic,
  } = useWallet()

  if (!isConnected) {
    return (
      <div className="space-y-4">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Wallet className="w-6 h-6" />
              Connect to AquaChain
            </CardTitle>
            <CardDescription>Choose your access level to the water management system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button onClick={connectWallet} className="w-full">
              <Wallet className="w-4 h-4 mr-2" />
              Connect as User
            </Button>
            <Button onClick={() => switchUser("admin-001")} variant="outline" className="w-full">
              <Shield className="w-4 h-4 mr-2" />
              Connect as Admin
            </Button>
            <div className="text-center">
              <Button variant="ghost" size="sm" onClick={switchToPublic}>
                <Eye className="w-4 h-4 mr-2" />
                Continue as Public Viewer
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Test Users Panel */}
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-sm flex items-center gap-2">
              <Users className="w-4 h-4" />
              Test Users (Demo Mode)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              {allUsers.slice(1).map((user) => (
                <Button
                  key={user.id}
                  variant="outline"
                  size="sm"
                  onClick={() => switchUser(user.id)}
                  className="text-xs"
                >
                  {user.avatar} {user.name.split(" ")[0]}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Badge variant="outline" className="bg-green-50 text-green-700">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
          Connected
        </Badge>
        {currentUser && (
          <div className="flex items-center gap-2">
            <span className="text-lg">{currentUser.avatar}</span>
            <div className="text-sm">
              <div className="font-medium">{currentUser.name}</div>
              <div className="text-muted-foreground">
                {currentUser.address.slice(0, 6)}...{currentUser.address.slice(-4)}
              </div>
            </div>
          </div>
        )}
        <span className="text-sm text-muted-foreground">{balance.toFixed(2)} ETH</span>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            {userType === "public" && <Eye className="w-4 h-4 mr-2" />}
            {userType === "user" && <User className="w-4 h-4 mr-2" />}
            {userType === "admin" && <Shield className="w-4 h-4 mr-2" />}
            {userType === "admin" ? "Administrator" : userType === "user" ? "User" : "Public"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={switchToPublic}>
            <Eye className="w-4 h-4 mr-2" />
            Public View
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <div className="px-2 py-1 text-xs font-medium text-muted-foreground">Switch User (Demo)</div>
          {allUsers.map((user) => (
            <DropdownMenuItem key={user.id} onClick={() => switchUser(user.id)}>
              <span className="mr-2">{user.avatar}</span>
              <div className="flex-1">
                <div className="text-sm">{user.name}</div>
                <div className="text-xs text-muted-foreground">{user.role}</div>
              </div>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={disconnectWallet} className="text-red-600">
            <LogOut className="w-4 h-4 mr-2" />
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
