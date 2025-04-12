
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  
  // Register form state
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [accountType, setAccountType] = useState<"consumer" | "producer">("consumer");
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loginEmail || !loginPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call for login
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Success - in a real app, this would store the user session
      toast({
        title: "Welcome back!",
        description: "You have been successfully logged in.",
      });
      
      // Redirect to home page
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log in. Please check your credentials.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!registerName || !registerEmail || !registerPassword || !registerConfirmPassword) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    if (registerPassword !== registerConfirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    
    if (registerPassword.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call for registration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Success - in a real app, this would create a user account
      toast({
        title: "Registration successful!",
        description: `Your ${accountType} account has been created. Welcome to GreenCart!`,
      });
      
      // Redirect to home page
      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center">
                <Leaf className="h-8 w-8 text-greencart-green" />
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome to GreenCart</h1>
              <p className="text-muted-foreground">
                Sign in to access your account or create a new one
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <Tabs defaultValue="login">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link 
                          to="/forgot-password"
                          className="text-xs text-greencart-green hover:underline"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Input 
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-greencart-green hover:bg-greencart-green/90 text-black"
                      disabled={isLoading}
                    >
                      {isLoading ? "Logging in..." : "Sign In"}
                    </Button>
                  </form>
                </TabsContent>
                
                <TabsContent value="register">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <Input 
                        id="register-email"
                        type="email"
                        placeholder="name@example.com"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="register-password">Password</Label>
                      <Input 
                        id="register-password"
                        type="password"
                        placeholder="••••••••"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input 
                        id="confirm-password"
                        type="password"
                        placeholder="••••••••"
                        value={registerConfirmPassword}
                        onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Account Type</Label>
                      <div className="grid grid-cols-2 gap-4">
                        <div
                          className={`border ${
                            accountType === "consumer" 
                              ? "border-greencart-green bg-greencart-green/10" 
                              : "border-border"
                          } rounded-lg p-4 cursor-pointer transition-colors`}
                          onClick={() => setAccountType("consumer")}
                        >
                          <div className="font-medium">Consumer</div>
                          <div className="text-xs text-muted-foreground">
                            Shop for fresh produce
                          </div>
                        </div>
                        
                        <div
                          className={`border ${
                            accountType === "producer" 
                              ? "border-greencart-green bg-greencart-green/10" 
                              : "border-border"
                          } rounded-lg p-4 cursor-pointer transition-colors`}
                          onClick={() => setAccountType("producer")}
                        >
                          <div className="font-medium">Producer</div>
                          <div className="text-xs text-muted-foreground">
                            Sell your farm products
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      By registering, you agree to our <Link to="/terms" className="text-greencart-green hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-greencart-green hover:underline">Privacy Policy</Link>.
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-greencart-green hover:bg-greencart-green/90 text-black"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
