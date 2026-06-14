// app/security/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Shield,
  Lock,
  Smartphone,
  Wifi,
  Key,
  Eye,
  ShoppingBag,
  FileText,
  Building2,
  Users,
  AlertTriangle,
  CreditCard,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Globe,
  Fingerprint,
  LogOut,
  RefreshCw,
  Video,
  Heart,
  MapPin,
  Bell,
  FileSearch,
  StopCircle,
  EyeOff,
  Database,
  Server
} from "lucide-react";

export default function Security() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#000D1E] via-[#000A19] to-[#000D1E] py-16 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#236193] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#236193]/10 px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4 text-[#236193]" />
            <span className="text-[#236193] font-semibold text-sm">Online Banking Security</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Protect Your <span className="text-[#236193]">Digital Life</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            While digital banking can be fast and convenient, be sure to take steps to help protect 
            your sensitive personal and financial information while online.
          </p>

          <div className="flex items-center justify-center gap-4 mt-6 text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Read Time: 4 Min</span>
            </div>
            <div className="flex items-center gap-2">
              <Share className="w-4 h-4" />
              <span className="text-sm">Share</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="online-banking" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-12">
              <TabsTrigger value="online-banking">Online Banking</TabsTrigger>
              <TabsTrigger value="social-security">Social Security</TabsTrigger>
              <TabsTrigger value="strong-passwords">Strong Passwords</TabsTrigger>
              <TabsTrigger value="online-safety">Online Safety</TabsTrigger>
              <TabsTrigger value="shopping">Shopping Online</TabsTrigger>
              <TabsTrigger value="business">Business</TabsTrigger>
            </TabsList>

            {/* Online Banking Security */}
            <TabsContent value="online-banking">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#236193]">Safer Online Banking</CardTitle>
                    <CardDescription>Essential tips to protect your accounts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Fingerprint className="w-5 h-5 text-[#236193] mt-0.5" />
                          <p className="text-slate-700">Password-protect your device and take advantage of built-in security functions such as auto-lock, fingerprint login, and remote wipe.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <LogOut className="w-5 h-5 text-[#236193] mt-0.5" />
                          <p className="text-slate-700">Always log out of mobile banking applications when you have completed your banking activities.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <RefreshCw className="w-5 h-5 text-[#236193] mt-0.5" />
                          <p className="text-slate-700">Keep your devices up-to-date by staying current on device, carrier, operating system and application updates.</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Smartphone className="w-5 h-5 text-[#236193] mt-0.5" />
                          <p className="text-slate-700">If your phone or tablet is stolen or lost, contact your financial institution immediately to deactivate your device from your mobile banking profile.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Wifi className="w-5 h-5 text-[#236193] mt-0.5" />
                          <p className="text-slate-700">Use caution when connecting to public Wi-Fi hotspots. Don't conduct mobile banking or any financial transactions over an insecure public Wi-Fi network.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-4 border-t border-slate-200">
                      <Link href="#" className="text-[#236193] font-semibold hover:underline">Read our full tip sheet about safer online banking →</Link>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#236193]">Online Banking with </CardTitle>
                    <CardDescription>Secure, SSL-encrypted system</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-slate-100 rounded-lg p-6 mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Lock className="w-6 h-6 text-[#236193]" />
                        <span className="font-semibold text-slate-900">Look for security indicators:</span>
                      </div>
                      <ul className="space-y-2 text-slate-700">
                        <li className="flex items-center gap-2">• A padlock icon in the URL bar</li>
                        <li className="flex items-center gap-2">• "https://" in the web address (the 's' stands for secure)</li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-slate-900">Additional Tips:</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#236193] mt-0.5" />
                          <p className="text-slate-700">Always use a secure network. Avoid public networks in coffee shops, hotels, libraries.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#236193] mt-0.5" />
                          <p className="text-slate-700">Don't use a public or shared computer for online banking.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#236193] mt-0.5" />
                          <p className="text-slate-700">Verify your last login date on the My Accounts page.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#236193] mt-0.5" />
                          <p className="text-slate-700">Protect your answers to security questions. Consider using fake answers.</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                      <p className="text-red-700 text-sm">
                        <strong>Remember:</strong> will never ask you for account numbers or passwords by phone, email or text. 
                        If you receive a suspicious email, please forward it to Report.com or call (800) 480-2265.
                      </p>
                    </div>

                    <div className="mt-4">
                      <p className="text-slate-600 text-sm">Only download the Mobile App from the Apple Store (iOS) or Google Play (Android).</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Protect Your Social Security Number */}
            <TabsContent value="social-security">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Protect Your Social Security Number Online</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-[#236193] mt-0.5" />
                        <p className="text-slate-700">Don't provide your Social Security number unless absolutely necessary. If a business asks for it, ask them why they need it, how it will be used, and if there is an alternative.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Eye className="w-5 h-5 text-[#236193] mt-0.5" />
                        <p className="text-slate-700">Be cautious of your surroundings when giving your Social Security number in person or over the phone.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Key className="w-5 h-5 text-[#236193] mt-0.5" />
                        <p className="text-slate-700">Don't use any part of your Social Security number as a PIN or password.</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-[#236193] mt-0.5" />
                        <p className="text-slate-700">Don't send your Social Security number over the Internet unless you know the connection is secure.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-[#236193] mt-0.5" />
                        <p className="text-slate-700">Don't put your Social Security number or driver's license number on personal checks.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-[#236193] mt-0.5" />
                        <p className="text-slate-700">Ensure you have the correct fax number before faxing any forms containing your Social Security number.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Strong Passwords */}
            <TabsContent value="strong-passwords">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Tips for Strong Passwords</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-green-600 flex items-center gap-2">✓ DO</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />Use a unique username and password for each website</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />Create strong passwords (8+ characters, mix of upper/lower case, numbers, special characters)</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />Update your passwords regularly (yearly minimum)</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-red-600 flex items-center gap-2">✗ DON'T</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />Use your Social Security Number or any part of your email address</li>
                        <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />Use personal phrases easily guessed (children's names, birth dates, addresses)</li>
                        <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />Share passwords with others</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-slate-100 rounded-lg">
                    <h3 className="font-semibold mb-2">Changing Your Username and Password:</h3>
                    <ol className="space-y-2 text-slate-700 list-decimal list-inside">
                      <li>Log into your  account</li>
                      <li>At the top of the page, click Profile</li>
                      <li>Select Change Password and follow the instructions</li>
                    </ol>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Online Safety Tips */}
            <TabsContent value="online-safety">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#236193]">Online Safety Tips for You & Your Family</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">Everyday Tips</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3"><Lock className="w-5 h-5 text-[#236193] mt-0.5" />Use appropriate levels of privacy and parental controls for devices, apps and websites</li>
                          <li className="flex items-start gap-3"><EyeOff className="w-5 h-5 text-[#236193] mt-0.5" />Opt out of location sharing and the ability for apps to post or tag on your behalf</li>
                          <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-[#236193] mt-0.5" />Don't post personal information like your birthdate, city of birth or mother's maiden name on social media</li>
                          <li className="flex items-start gap-3"><Mail className="w-5 h-5 text-[#236193] mt-0.5" />Learn to recognize and avoid email, phone and text phishing attacks</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">Keep Your Personal Data Private</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3"><Key className="w-5 h-5 text-[#236193] mt-0.5" />Use unique, complex passwords, and consider using an online password manager</li>
                          <li className="flex items-start gap-3"><Users className="w-5 h-5 text-[#236193] mt-0.5" />Control who sees your information using privacy settings</li>
                          <li className="flex items-start gap-3"><Smartphone className="w-5 h-5 text-[#236193] mt-0.5" />Require a password/passcode to access your devices</li>
                          <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#236193] mt-0.5" />You can enter any answer to a security question as long as you can remember it later</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-3">Online Safety During Tax Season</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3"><AlertTriangle className="w-5 h-5 text-[#236193] mt-0.5" />Beware of email, phone and text phishing attempts, especially during tax season</li>
                          <li className="flex items-start gap-3"><FileText className="w-5 h-5 text-[#236193] mt-0.5" />File your taxes as early as possible to prevent someone else from filing in your name</li>
                          <li className="flex items-start gap-3"><Phone className="w-5 h-5 text-[#236193] mt-0.5" />If you suspect tax fraud, contact the IRS at (800) 908-4490</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Personal Safety During Social Unrest */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#236193]">Personal Safety During Social Unrest</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Top 5 Safety Tips</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-bold text-[#236193] mb-2">1. Stay Informed and Aware</h4>
                        <p className="text-slate-600 text-sm">Understanding the context and purpose of a protest is crucial. Stay informed about the issues being addressed.</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-bold text-[#236193] mb-2">2. Be Prepared and Plan Ahead</h4>
                        <p className="text-slate-600 text-sm">Have a plan in place. Know your surroundings and establish communication protocols.</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-bold text-[#236193] mb-2">3. Embrace Respect</h4>
                        <p className="text-slate-600 text-sm">Uphold principles of respect for others. Avoid escalating tensions or engaging in confrontations.</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-bold text-[#236193] mb-2">4. Remain Alert and Calm</h4>
                        <p className="text-slate-600 text-sm">Stay vigilant and composed. Report suspicious activity to security or call 911.</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-lg md:col-span-2">
                        <h4 className="font-bold text-[#236193] mb-2">5. Have an Exit Strategy</h4>
                        <p className="text-slate-600 text-sm">Always have a plan for leaving an impacted area safely. Identify exit routes and alternative options.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Shopping Online */}
            <TabsContent value="shopping">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#236193]">Keep Your Identity Safe While Shopping Online</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-[#236193] mt-0.5" />
                      <p className="text-slate-700">Watch out for digital scams such as spoofed and bogus websites, phishing emails and texts, and fake apps. Scam artists also send out shipping notices pretending to be from shipping companies.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <ShoppingBag className="w-5 h-5 text-[#236193] mt-0.5" />
                      <p className="text-slate-700">Beware of websites and emails offering incredible deals on electronics, clothing and more. Don't click links until you've verified the retailer is legitimate.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-[#236193] mt-0.5" />
                      <p className="text-slate-700">Verify the merchant's website is secure by checking for an https:// in the web address and an icon of a padlock.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Wifi className="w-5 h-5 text-[#236193] mt-0.5" />
                      <p className="text-slate-700">Avoid using a public or unsecured Wifi network while shopping online.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Protect Your Business */}
            <TabsContent value="business">
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#236193]">Protect Your Business from Fraud</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Online Security Tips</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <Database className="w-5 h-5 text-[#236193] mt-0.5" />
                        <p className="text-slate-700">Review your account balance online daily to identify fraudulent transactions</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-[#236193] mt-0.5" />
                        <p className="text-slate-700">Create policies outlining acceptable use of corporate assets</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-[#236193] mt-0.5" />
                        <p className="text-slate-700">Ensure all employees are aware of dangers of opening unknown attachments</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Server className="w-5 h-5 text-[#236193] mt-0.5" />
                        <p className="text-slate-700">Install and regularly update anti-virus and anti-spyware software</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#236193]">Monitor Your Accounts & Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">Recognize the signs of identity theft</h3>
                        <ul className="space-y-2 text-slate-700">
                          <li className="flex items-start gap-2">• Accounts or charges you don't recognize</li>
                          <li className="flex items-start gap-2">• Errors on your credit reports</li>
                          <li className="flex items-start gap-2">• Missing bills in the mail</li>
                          <li className="flex items-start gap-2">• Unexpected credit cards or denial of credit</li>
                          <li className="flex items-start gap-2">• Contact from debt collectors about purchases you didn't make</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">Monitor your credit report</h3>
                        <p className="text-slate-700 mb-3">Review your credit report to spot unauthorized activity. Request a free credit report annually at <Link href="https://AnnualCreditReport.com" className="text-[#236193] hover:underline">AnnualCreditReport.com</Link></p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                          <div className="p-3 bg-slate-100 rounded-lg">
                            <p className="font-semibold">Experian</p>
                            <p className="text-sm">(888) 397-3742</p>
                          </div>
                          <div className="p-3 bg-slate-100 rounded-lg">
                            <p className="font-semibold">TransUnion</p>
                            <p className="text-sm">(800) 888-4213</p>
                          </div>
                          <div className="p-3 bg-slate-100 rounded-lg">
                            <p className="font-semibold">Equifax</p>
                            <p className="text-sm">(866) 349-5191</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">Stop, Look, Call</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="p-4 bg-red-50 rounded-lg">
                            <p className="font-bold text-red-700">Stop</p>
                            <p className="text-sm text-red-600">Pause before reacting to urgent or emotional messages</p>
                          </div>
                          <div className="p-4 bg-yellow-50 rounded-lg">
                            <p className="font-bold text-yellow-700">Look</p>
                            <p className="text-sm text-yellow-600">Examine messages carefully for legitimacy</p>
                          </div>
                          <div className="p-4 bg-green-50 rounded-lg">
                            <p className="font-bold text-green-700">Call</p>
                            <p className="text-sm text-green-600">Use a trusted number from your bank statement</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Online and Mobile Banking Best Practices
            </h2>
            <div className="h-1 w-20 bg-[#236193] rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-xl transition">
              <CardHeader>
                <Video className="w-10 h-10 text-[#236193] mb-2" />
                <CardTitle>Password Best Practices</CardTitle>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition">
              <CardHeader>
                <Video className="w-10 h-10 text-[#236193] mb-2" />
                <CardTitle>Working Remotely</CardTitle>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition">
              <CardHeader>
                <Video className="w-10 h-10 text-[#236193] mb-2" />
                <CardTitle>Social Engineering</CardTitle>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition">
              <CardHeader>
                <Video className="w-10 h-10 text-[#236193] mb-2" />
                <CardTitle>Mobile Device Security</CardTitle>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition">
              <CardHeader>
                <Video className="w-10 h-10 text-[#236193] mb-2" />
                <CardTitle>Online Banking Best Practices</CardTitle>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition">
              <CardHeader>
                <Video className="w-10 h-10 text-[#236193] mb-2" />
                <CardTitle>Artificial Intelligence Influence</CardTitle>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition">
              <CardHeader>
                <Video className="w-10 h-10 text-[#236193] mb-2" />
                <CardTitle>Phishing, Smishing, and Vishing</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Have More Questions?</h2>
          <p className="text-slate-600 mb-8">We're ready to help in person, online or on the phone.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-lg">
              <Phone className="w-8 h-8 text-[#236193] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-slate-600">(800) 480-2265</p>
              <p className="text-sm text-slate-500">Daily 7am - 8pm ET</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <Mail className="w-8 h-8 text-[#236193] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-slate-600">ReportFraud@.com</p>
              <p className="text-sm text-slate-500">For suspicious emails</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg">
              <Shield className="w-8 h-8 text-[#236193] mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Report Fraud</h3>
              <p className="text-slate-600">Call (800) 480-2265</p>
              <p className="text-sm text-slate-500">7am - 8pm ET daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosures */}
      <section className="py-8 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-500 text-center">
            The safety and security of your information is our top priority. If you believe you have been a victim of fraud 
            related to your account, please contact us immediately.
          </p>
        </div>
      </section>
    </div>
  );
}

// Share Icon Component
function Share(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}