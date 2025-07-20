"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Globe,
  MessageSquare,
  Users,
  Settings,
  ChevronRight,
  CheckCircle2,
  Clock,
  Sparkles,
  BarChart3,
  Zap,
} from "lucide-react";
import dynamic from "next/dynamic";

export default function Dashboard() {
  const onboardingSteps = [
    {
      id: 1,
      title: "Sync Your Website",
      description: "Connect your website for instant AI support",
      icon: Globe,
      completed: true,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Customize Your Chatbot",
      description: "Personalize your chatbot's appearance",
      icon: MessageSquare,
      completed: false,
      color: "bg-purple-500",
    },
    {
      id: 3,
      title: "Manage Your Team",
      description: "Invite team members and set permissions",
      icon: Users,
      completed: false,
      color: "bg-indigo-500",
    },
    {
      id: 4,
      title: "Configure Settings",
      description: "Fine-tune your preferences",
      icon: Settings,
      completed: false,
      color: "bg-cyan-500",
    },
  ];

  const setupTasks = [
    {
      title: "Sync Your Website For Instant AI Support",
      description: "Connect your website to enable real-time customer support",
      icon: Globe,
      completed: true,
    },
    {
      title: "Customize Your Chatbot For Your Personal Touch",
      description: "Make your chatbot reflect your brand personality",
      icon: MessageSquare,
      completed: false,
    },
    {
      title: "Manage Your Team Effortlessly",
      description: "Add team members and assign roles for better collaboration",
      icon: Users,
      completed: false,
    },
    {
      title: "Set Up Analytics Dashboard",
      description: "Track performance metrics and customer insights",
      icon: BarChart3,
      completed: false,
    },
  ];

  const quickStats = [
    {
      label: "Active Conversations",
      value: "24",
      change: "+12%",
      icon: MessageSquare,
    },
    { label: "Response Time", value: "2.3s", change: "-15%", icon: Clock },
    {
      label: "Customer Satisfaction",
      value: "4.8",
      change: "+5%",
      icon: Sparkles,
    },
    { label: "Team Members", value: "8", change: "+2", icon: Users },
  ];

  const completedSteps = onboardingSteps.filter(
    (step) => step.completed
  ).length;
  const progressPercentage = (completedSteps / onboardingSteps.length) * 100;

  const Chatbot = dynamic(() => import("@/components/Common/Chatbot/Chatbot"), {
    ssr: false,
  });

  return (
    <div className="flex h-[calc(100vh-4.5rem)] w-full overflow-hidden rounded-lg border-2 bg-muted/30">
      <Chatbot />
      <div className="flex flex-1 flex-col w-full">
        <div className="flex items-center justify-between border-b-2 h-[60px] px-4">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Dashboard</h2>
          </div>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            <CheckCircle2 className="w-3 h-3 mr-1" />
            {completedSteps} of {onboardingSteps.length} completed
          </Badge>
        </div>

        <ScrollArea className="flex-1 h-0">
          <div className="p-6 space-y-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8">
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      Welcome Back <span className="text-blue-600">Arjun</span>
                    </h1>
                    <p className="text-gray-600 text-lg">
                      Let's get started with Rhinon tech
                    </p>
                  </div>
                  {/* <div className="hidden md:block">
                    <img
                      src="/dashboard-mascot.png"
                      alt="Dashboard Mascot"
                      className="w-32 h-32 object-contain"
                    />
                  </div> */}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full -translate-y-32 translate-x-32"></div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <Card
                  key={index}
                  className="p-4 hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          {stat.label}
                        </p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <p className="text-xs text-green-600">{stat.change}</p>
                      </div>
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <stat.icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Onboarding Progress */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Getting Started</h3>
                <Badge variant="outline">
                  {completedSteps}/{onboardingSteps.length} Complete
                </Badge>
              </div>
              <Progress value={progressPercentage} className="mb-6" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {onboardingSteps.map((step) => (
                  <Card
                    key={step.id}
                    className={`relative overflow-hidden transition-all hover:shadow-md ${
                      step.completed ? "ring-2 ring-green-200" : ""
                    }`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${step.color}`}
                        >
                          {step.completed ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            step.id
                          )}
                        </div>
                        <step.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <h4 className="font-medium text-sm mb-1">{step.title}</h4>
                      <p className="text-xs text-muted-foreground">
                        {step.description}
                      </p>
                      {step.completed && (
                        <Badge
                          variant="secondary"
                          className="mt-2 bg-green-100 text-green-700 text-xs"
                        >
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          Complete
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Card>

            {/* Setup Tasks */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <h3 className="text-xl font-semibold">Get Ready to Set Up</h3>
                </div>
                <div className="space-y-3">
                  {setupTasks.map((task, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          task.completed ? "bg-green-100" : "bg-blue-100"
                        }`}
                      >
                        {task.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        ) : (
                          <task.icon className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{task.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {task.description}
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Your Command Center
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                    <h4 className="font-medium mb-2">Quick Actions</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start bg-transparent"
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        New Chat
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start bg-transparent"
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Add Team
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start bg-transparent"
                      >
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Analytics
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-start bg-transparent"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                    <h4 className="font-medium mb-2">Recent Activity</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• New conversation started with John Doe</p>
                      <p>• Team member Sarah joined</p>
                      <p>• Chatbot response time improved by 15%</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
