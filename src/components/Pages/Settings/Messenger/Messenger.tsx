"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSidebar } from "@/context/SidebarContext";
import { Copy, Code, Settings, PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";

interface ContentItem {
  command: string;
  description: string;
  note?: string;
  additionalNote?: string;
  filename?: string;
  code: string;
}

interface StepContent {
  title: string;
  tabs: string[];
  content: {
    npm: ContentItem;
    "basic-js"?: ContentItem;
  };
}

export default function Messenger() {
  const { toggleSettingSidebar } = useSidebar();
  const [selectedMethod, setSelectedMethod] = useState("code-snippet");
  const [selectedTab, setSelectedTab] = useState("npm");

  const installationMethods = [
    { id: "code-snippet", label: "Code Snippet", icon: Code },
    { id: "react", label: "React", icon: Settings },
    { id: "angular", label: "Angular", icon: Settings },
  ];

  const getStepTwoContent = (): StepContent => {
    switch (selectedMethod) {
      case "code-snippet":
        return {
          title: "Install Rino in your Code Snippet",
          tabs: ["npm", "basic-js"],
          content: {
            npm: {
              command: "npm install rhinonchatbot-sdk",
              description:
                "To initialize Rino, copy and paste this code snippet on every page or in a common component where you want the messenger to appear.",
              note: "This must be done in your client-side code.",
              code: `import { useEffect } from 'react';
import ChatbotSDK from 'rhinonchatbot-sdk';

export default function Chatbot() {
  useEffect(() => {
    const chatbot = new ChatbotSDK('your-app-id');
    chatbot.init(1);
  }, []);

  return <div id="chatbot"></div>;
}`,
            },
            "basic-js": {
              command: "npm install rhinonchatbot-sdk",
              description:
                "To initialize Rino, copy and paste this code snippet on every page or in a common component where you want the messenger to appear.",
              note: "This must be done in your client-side code.",
              code: `// Basic JavaScript implementation
const chatbot = new ChatbotSDK('your-app-id');
chatbot.init(1);

// Add this div to your HTML
// <div id="chatbot"></div>`,
            },
          },
        };
      case "react":
        return {
          title: "Install Rino in your React application",
          tabs: ["npm"],
          content: {
            npm: {
              command: "npm install rhinonchatbot-sdk",
              description:
                "Add Intercom to your project using the following snippet:",
              note: "To initialize Intercom, copy and paste this code snippet on every page or in a common component where you want the messenger to appear.",
              additionalNote: "This must be done in your client-side code.",
              code: `import { useEffect } from 'react';
import ChatbotSDK from 'rhinonchatbot-sdk';

export default function Chatbot() {
  useEffect(() => {
    const chatbot = new ChatbotSDK('your-app-id');
    chatbot.init(1);
  }, []);

  return <div id="chatbot"></div>;
}`,
            },
          },
        };
      case "angular":
        return {
          title: "Install Rino in your Angular application",
          tabs: ["npm"],
          content: {
            npm: {
              command: "npm install rhinonchatbot-sdk",
              description:
                "Install the Rhinon Chatbot SDK using the following command:",
              note: "To initialize the chatbot, copy and paste this Angular code snippet into your root component or where you want the chatbot to appear.",
              filename: "app.component.ts",
              code: `import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<div id="chatbot"></div>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular';

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      import('rhinonchatbot-sdk').then((ChatbotSDKModule) => {
        const ChatbotSDK = ChatbotSDKModule.default;
        const chatbot = new ChatbotSDK('your-app-id');
        chatbot.init(1);
      });
    }
  }
}`,
            },
          },
        };
      default:
        return {
          title: "Install Rino in your Code Snippet",
          tabs: ["npm"],
          content: {
            npm: {
              command: "npm install rhinonchatbot-sdk",
              description: "Default installation method",
              code: "// Default code",
            },
          },
        };
    }
  };

  const stepContent = getStepTwoContent();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getCurrentContent = () => {
    return (
      stepContent.content[selectedTab as keyof typeof stepContent.content] ||
      stepContent.content.npm
    );
  };

  return (
    <div className="flex h-full w-full overflow-hidden rounded-lg border bg-background">
      <div className="flex flex-1 flex-col w-full">
        {/* Top Header */}
        <div className="flex items-center justify-between border-b h-[60px] p-4">
          <div className="flex items-center gap-4">
            <PanelLeft
              onClick={toggleSettingSidebar}
              className="h-4 w-4 cursor-pointer"
            />
            <h2 className="text-base font-bold text-foreground">Messenger</h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <ScrollArea className="flex-1 h-0 p-4">
          <div className="p-6 space-y-8 text-foreground">
            {/* Step 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold bg-primary text-primary-foreground">
                  1
                </div>
                <h2 className="text-base font-medium">
                  Choose how to install the messenger
                </h2>
              </div>

              <div className="flex gap-3 ml-9">
                {installationMethods.map((method) => {
                  const Icon = method.icon;
                  const isSelected = selectedMethod === method.id;
                  return (
                    <button
                      key={method.id}
                      onClick={() => {
                        setSelectedMethod(method.id);
                        setSelectedTab("npm");
                      }}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-colors text-sm ${
                        isSelected
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-muted"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {method.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold bg-primary text-primary-foreground">
                  2
                </div>
                <h2 className="text-base font-medium">{stepContent.title}</h2>
              </div>

              <div className="ml-9 space-y-4">
                {getCurrentContent().description && (
                  <p className="text-sm text-muted-foreground">
                    {getCurrentContent().description}
                  </p>
                )}

                {stepContent.tabs.length > 1 && (
                  <div className="flex gap-2">
                    {stepContent.tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                          selectedTab === tab
                            ? "bg-muted text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {tab === "npm" ? "NPM Package" : "Basic Javascript"}
                      </button>
                    ))}
                  </div>
                )}

                <Card className="p-0">
                  <CardContent className="px-5 py-3 flex items-center justify-between bg-muted/50">
                    <code className="text-xs font-mono text-muted-foreground">
                      {getCurrentContent().command}
                    </code>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(getCurrentContent().command)
                      }
                      className="ml-4 text-xs"
                    >
                      <Copy className="w-3 h-3 mr-1" />
                      Copy code
                    </Button>
                  </CardContent>
                </Card>

                {getCurrentContent().note && (
                  <p className="text-sm text-muted-foreground">
                    {getCurrentContent().note}
                  </p>
                )}
                {getCurrentContent().filename && (
                  <p className="text-xs font-medium text-muted-foreground">
                    {getCurrentContent().filename}
                  </p>
                )}
                {getCurrentContent().additionalNote && (
                  <p className="text-xs font-medium text-foreground">
                    {getCurrentContent().additionalNote}
                  </p>
                )}

                <div className="space-y-2">
                  <CodeBlock
                    language={
                      selectedMethod === "angular"
                        ? "typescript"
                        : selectedTab === "basic-js"
                        ? "javascript"
                        : "jsx"
                    }
                    filename={
                      getCurrentContent().filename ||
                      `${
                        selectedMethod === "angular"
                          ? "app.component.ts"
                          : selectedTab === "basic-js"
                          ? "script.js"
                          : "Chatbot.jsx"
                      }`
                    }
                    code={getCurrentContent().code}
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
