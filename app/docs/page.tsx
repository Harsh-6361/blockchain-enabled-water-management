"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Book,
  Code,
  Database,
  Shield,
  Cpu,
  Zap,
  ArrowRight,
  CheckCircle,
  GitBranch,
  Server,
  Smartphone,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              ← Back to Dashboard
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900">AquaChain Project Documentation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete guide to building a blockchain-enabled water management system using IoT, AI, and Web3 technologies
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Book className="w-4 h-4" />
                Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">System architecture and methodology</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Code className="w-4 h-4" />
                Implementation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Step-by-step development guide</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Blockchain
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Smart contracts and Web3 integration</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Deployment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Production deployment guide</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Documentation */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="architecture">Architecture</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
            <TabsTrigger value="ai">AI & IoT</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="w-6 h-6" />
                  AquaChain Project Overview
                </CardTitle>
                <CardDescription>Complete blockchain-enabled water management system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">About This Project</h3>
                  <p className="text-muted-foreground mb-4">
                    AquaChain is a comprehensive water resource management platform that demonstrates the integration of
                    IoT sensors, blockchain technology, and AI analytics for transparent and efficient water
                    distribution. This implementation showcases how modern technologies can revolutionize traditional
                    water management systems.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features Implemented</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Multi-Role Authentication</h4>
                        <p className="text-sm text-muted-foreground">
                          Public view, user accounts, and administrator access with Web3 wallet integration
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Real-time IoT Simulation</h4>
                        <p className="text-sm text-muted-foreground">
                          Simulated sensor data for water quality, levels, temperature, and pH monitoring
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Blockchain Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          Smart contract simulation for billing, data verification, and transaction recording
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">AI Analytics Dashboard</h4>
                        <p className="text-sm text-muted-foreground">
                          Predictive analytics, anomaly detection, and optimization recommendations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Demo Users</h3>
                  <p className="text-muted-foreground mb-4">
                    The system includes 10 test users plus 1 administrator for demonstration purposes:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">👩‍💼 Administrator</h4>
                      <p className="text-sm text-muted-foreground">
                        Sarah Johnson - Full system access, can view all user data, manage distribution, and access
                        analytics
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">👥 Regular Users (10)</h4>
                      <p className="text-sm text-muted-foreground">
                        John Smith, Maria Garcia, David Chen, and 7 others - Personal billing, usage history, and
                        payment management
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="architecture" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GitBranch className="w-6 h-6" />
                  System Architecture
                </CardTitle>
                <CardDescription>Technical architecture and component interactions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Architecture Layers</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Globe className="w-6 h-6 text-blue-600" />
                        <h4 className="font-semibold">Presentation Layer</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Next.js React application with responsive design and real-time updates
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Next.js 15</Badge>
                        <Badge variant="outline">React 18</Badge>
                        <Badge variant="outline">Tailwind CSS</Badge>
                        <Badge variant="outline">shadcn/ui</Badge>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Server className="w-6 h-6 text-green-600" />
                        <h4 className="font-semibold">Application Layer</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Business logic, API routes, and real-time data processing
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Server Actions</Badge>
                        <Badge variant="outline">API Routes</Badge>
                        <Badge variant="outline">WebSocket</Badge>
                        <Badge variant="outline">MQTT</Badge>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Shield className="w-6 h-6 text-purple-600" />
                        <h4 className="font-semibold">Blockchain Layer</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        Smart contracts, Web3 integration, and decentralized storage
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Ethereum</Badge>
                        <Badge variant="outline">Solidity</Badge>
                        <Badge variant="outline">Web3.js</Badge>
                        <Badge variant="outline">IPFS</Badge>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Database className="w-6 h-6 text-orange-600" />
                        <h4 className="font-semibold">Data Layer</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        IoT sensor data, blockchain records, and AI model storage
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">PostgreSQL</Badge>
                        <Badge variant="outline">Redis</Badge>
                        <Badge variant="outline">InfluxDB</Badge>
                        <Badge variant="outline">MongoDB</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Data Flow</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">IoT Data Collection</h4>
                        <p className="text-sm text-muted-foreground">Sensors collect water quality and flow data</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 mx-auto" />
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Data Validation</h4>
                        <p className="text-sm text-muted-foreground">AI algorithms validate and process sensor data</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 mx-auto" />
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Blockchain Recording</h4>
                        <p className="text-sm text-muted-foreground">Validated data is recorded on blockchain</p>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 mx-auto" />
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Real-time Updates</h4>
                        <p className="text-sm text-muted-foreground">Dashboard displays live data and insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="implementation" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-6 h-6" />
                  Local Development Setup
                </CardTitle>
                <CardDescription>Step-by-step guide to run AquaChain locally</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Prerequisites</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Node.js 18+ installed on your system</li>
                    <li>• Git for version control</li>
                    <li>• A code editor (VS Code recommended)</li>
                    <li>• Basic knowledge of React and Next.js</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Installation Steps</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                      <h4 className="text-green-400 mb-2"># 1. Clone the Repository</h4>
                      <code className="text-sm">
                        git clone https://github.com/your-username/aquachain.git
                        <br />
                        cd aquachain
                      </code>
                    </div>

                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                      <h4 className="text-green-400 mb-2"># 2. Install Dependencies</h4>
                      <code className="text-sm">
                        npm install
                        <br /># or
                        <br />
                        yarn install
                      </code>
                    </div>

                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                      <h4 className="text-green-400 mb-2"># 3. Start Development Server</h4>
                      <code className="text-sm">
                        npm run dev
                        <br /># or
                        <br />
                        yarn dev
                      </code>
                    </div>

                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                      <h4 className="text-green-400 mb-2"># 4. Open in Browser</h4>
                      <code className="text-sm">
                        # Navigate to http://localhost:3000
                        <br /># The application will be running locally
                      </code>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Project Structure</h3>
                  <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-sm">
                    <code>
                      aquachain/
                      <br />
                      ├── app/
                      <br />│ ├── components/ # React components
                      <br />│ │ ├── wallet-connect.tsx
                      <br />│ │ ├── billing-system.tsx
                      <br />│ │ ├── water-sensor-card.tsx
                      <br />│ │ └── ...
                      <br />│ ├── providers/ # Context providers
                      <br />│ │ └── wallet-provider.tsx
                      <br />│ ├── docs/ # Documentation pages
                      <br />│ ├── globals.css # Global styles
                      <br />│ ├── layout.tsx # Root layout
                      <br />│ └── page.tsx # Main dashboard
                      <br />
                      ├── components/ui/ # shadcn/ui components
                      <br />
                      ├── lib/ # Utility functions
                      <br />
                      └── public/ # Static assets
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Testing the Application</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">1. Public View</h4>
                      <p className="text-sm text-muted-foreground">
                        Visit the homepage without connecting a wallet to see the public overview with system statistics
                        and project information.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">2. User Access</h4>
                      <p className="text-sm text-muted-foreground">
                        Click "Connect as User" or select any of the 10 test users to access personal billing and usage
                        data.
                      </p>
                    </div>
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">3. Admin Access</h4>
                      <p className="text-sm text-muted-foreground">
                        Click "Connect as Admin" to access full system controls, analytics, and all user data
                        management.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blockchain" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Blockchain Integration
                </CardTitle>
                <CardDescription>Smart contracts and Web3 implementation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Smart Contract Architecture</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">WaterDataContract.sol</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Stores and validates IoT sensor data with cryptographic proofs
                      </p>
                      <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs">
                        <code>
                          contract WaterDataContract {"{"}
                          <br />
                          &nbsp;&nbsp;struct SensorData {"{"}
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;uint256 timestamp;
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;uint256 waterLevel;
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;uint256 quality;
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;bytes32 dataHash;
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;address validator;
                          <br />
                          &nbsp;&nbsp;{"}"}
                          <br />
                          {"}"}
                        </code>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">BillingContract.sol</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Automates billing calculations and payment processing
                      </p>
                      <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs">
                        <code>
                          contract BillingContract {"{"}
                          <br />
                          &nbsp;&nbsp;mapping(address =&gt; uint256) public waterUsage;
                          <br />
                          &nbsp;&nbsp;uint256 public ratePerLiter = 0.003 ether;
                          <br />
                          <br />
                          &nbsp;&nbsp;function payBill() external payable {"{"}
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;// Payment logic
                          <br />
                          &nbsp;&nbsp;{"}"}
                          <br />
                          {"}"}
                        </code>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">GovernanceContract.sol</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Enables community voting on water management decisions
                      </p>
                      <div className="bg-gray-900 text-gray-100 p-3 rounded text-xs">
                        <code>
                          contract GovernanceContract {"{"}
                          <br />
                          &nbsp;&nbsp;struct Proposal {"{"}
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;string description;
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;uint256 votesFor;
                          <br />
                          &nbsp;&nbsp;&nbsp;&nbsp;uint256 votesAgainst;
                          <br />
                          &nbsp;&nbsp;{"}"}
                          <br />
                          {"}"}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Web3 Integration</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Wallet Connection</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• MetaMask integration</li>
                        <li>• WalletConnect support</li>
                        <li>• Multi-chain compatibility</li>
                        <li>• Session persistence</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Transaction Handling</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Gas optimization</li>
                        <li>• Transaction monitoring</li>
                        <li>• Error handling</li>
                        <li>• Receipt verification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="w-6 h-6" />
                  AI & IoT Integration
                </CardTitle>
                <CardDescription>Machine learning and IoT sensor implementation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">AI Components</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Predictive Analytics Engine</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Machine learning models for water demand forecasting and maintenance prediction
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">TensorFlow.js</Badge>
                        <Badge variant="outline">Time Series Analysis</Badge>
                        <Badge variant="outline">Regression Models</Badge>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Anomaly Detection System</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Real-time detection of unusual patterns in water quality and flow data
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Isolation Forest</Badge>
                        <Badge variant="outline">Statistical Analysis</Badge>
                        <Badge variant="outline">Real-time Processing</Badge>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Optimization Algorithms</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        AI-driven optimization for water distribution and resource allocation
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Genetic Algorithms</Badge>
                        <Badge variant="outline">Linear Programming</Badge>
                        <Badge variant="outline">Multi-objective Optimization</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">IoT Sensor Network</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Sensor Types</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Water level sensors (ultrasonic)</li>
                        <li>• pH and turbidity meters</li>
                        <li>• Flow rate sensors</li>
                        <li>• Temperature probes</li>
                        <li>• Pressure sensors</li>
                        <li>• Chemical composition analyzers</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Communication Protocols</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• MQTT for lightweight messaging</li>
                        <li>• LoRaWAN for long-range communication</li>
                        <li>• WiFi for high-bandwidth data</li>
                        <li>• Cellular for remote locations</li>
                        <li>• Zigbee for mesh networking</li>
                        <li>• Bluetooth for local configuration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Data Processing Pipeline</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Data Ingestion</h4>
                        <p className="text-sm text-muted-foreground">Collect sensor data via MQTT brokers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Data Validation</h4>
                        <p className="text-sm text-muted-foreground">Validate sensor readings and detect outliers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">AI Processing</h4>
                        <p className="text-sm text-muted-foreground">Apply ML models for insights and predictions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Blockchain Storage</h4>
                        <p className="text-sm text-muted-foreground">Store processed data on blockchain</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deployment" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Production Deployment
                </CardTitle>
                <CardDescription>Deploy your water management system to production</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Deployment Options</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Globe className="w-4 h-4" />
                        Vercel (Recommended)
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Optimal for Next.js applications with automatic scaling
                      </p>
                      <div className="space-y-2">
                        <Badge variant="outline">Zero Config</Badge>
                        <Badge variant="outline">Edge Functions</Badge>
                        <Badge variant="outline">Global CDN</Badge>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Server className="w-4 h-4" />
                        AWS/Azure
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Enterprise-grade infrastructure with full control
                      </p>
                      <div className="space-y-2">
                        <Badge variant="outline">Kubernetes</Badge>
                        <Badge variant="outline">Load Balancing</Badge>
                        <Badge variant="outline">Auto Scaling</Badge>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2 flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        Self-Hosted
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        On-premises deployment for maximum data control
                      </p>
                      <div className="space-y-2">
                        <Badge variant="outline">Docker</Badge>
                        <Badge variant="outline">PM2</Badge>
                        <Badge variant="outline">Nginx</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Production Checklist</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-medium">Security</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">HTTPS/SSL certificates</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">Environment variables secured</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">API rate limiting</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">Input validation</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium">Performance</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">Database optimization</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">Caching strategy</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">Image optimization</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">Bundle size optimization</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Monitoring & Maintenance</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Application Monitoring</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Track application performance, errors, and user behavior
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Vercel Analytics</Badge>
                        <Badge variant="outline">Sentry</Badge>
                        <Badge variant="outline">DataDog</Badge>
                        <Badge variant="outline">New Relic</Badge>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Infrastructure Monitoring</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Monitor server resources, database performance, and network health
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Prometheus</Badge>
                        <Badge variant="outline">Grafana</Badge>
                        <Badge variant="outline">CloudWatch</Badge>
                        <Badge variant="outline">Uptime Robot</Badge>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Blockchain Monitoring</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Track smart contract interactions and blockchain network health
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Etherscan API</Badge>
                        <Badge variant="outline">The Graph</Badge>
                        <Badge variant="outline">Alchemy</Badge>
                        <Badge variant="outline">Infura</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">🚀 Quick Deploy to Vercel</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Deploy your AquaChain application to Vercel with one click
                  </p>
                  <Button className="w-full">Deploy to Vercel</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center py-8 border-t">
          <p className="text-muted-foreground">
            Built with ❤️ for sustainable water management.
            <Link href="/" className="text-blue-600 hover:underline ml-1">
              Return to Dashboard
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
