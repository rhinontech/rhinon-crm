"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Globe,
  Palette,
  MapPin,
  Smartphone,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useChatbot } from "@/context/ChatbotContext";

interface CollapsibleItemProps {
  title: string;
  icon: React.ReactNode;
  isNew?: boolean;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleItem({
  title,
  icon,
  isNew,
  children,
  defaultOpen = false,
}: CollapsibleItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="font-medium">{title}</span>
          {isNew && (
            <Badge variant="secondary" className="text-xs">
              NEW!
            </Badge>
          )}
        </div>
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 pt-0 border-t">{children}</div>
      </div>
    </div>
  );
}

export default function CollapsibleSection() {
  const { settings, updateSettings } = useChatbot();

  const themeColors = [
    "#000000",
    "#8b5cf6",
    "#3b82f6",
    "#06b6d4",
    "#10b981",
    "#f59e0b",
    "#f97316",
    "#ef4444",
    "#ec4899",
  ];

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          Customize your chat widget
        </h3>
        <p className="text-sm text-muted-foreground">
          Decide how the chat widget on your website will look, behave and what
          information it will offer.
        </p>
      </div>

      <CollapsibleItem
        title="Customize widget on website"
        icon={<Globe className="h-4 w-4" />}
        isNew
        defaultOpen
      >
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
            <div className="flex-shrink-0">
              <div className="w-16 h-20 bg-white border-2 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                Align widget with your brand by customizing it directly on your
                website.
              </p>
            </div>
          </div>
          <div>
            <Label htmlFor="website-url">Type website address</Label>
            <div className="flex gap-2 mt-1">
              <Input
                id="website-url"
                placeholder="rhinontech.com"
                value={settings.websiteUrl}
                onChange={(e) => updateSettings({ websiteUrl: e.target.value })}
                className="flex-1"
              />
              <Button size="sm">→</Button>
            </div>
          </div>
        </div>
      </CollapsibleItem>

      <CollapsibleItem
        title="Appearance"
        icon={<Palette className="h-4 w-4" />}
        defaultOpen
      >
        <div className="space-y-6">
          <div>
            <Label className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
              MINIMIZED WINDOW
            </Label>
            <RadioGroup
              value={settings.widgetStyle}
              onValueChange={(value: "bar" | "bubble") =>
                updateSettings({ widgetStyle: value })
              }
              className="flex gap-4 mt-3"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="w-16 h-16 border-2 rounded-lg flex items-center justify-center bg-white">
                    <div className="w-8 h-2 bg-gray-400 rounded"></div>
                  </div>
                  <RadioGroupItem
                    value="bar"
                    className="absolute -top-2 -right-2"
                  />
                </div>
                <Label className="text-xs">Bar</Label>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="w-16 h-16 border-2 rounded-lg flex items-center justify-center bg-white">
                    <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
                  </div>
                  <RadioGroupItem
                    value="bubble"
                    className="absolute -top-2 -right-2"
                  />
                </div>
                <Label className="text-xs">Bubble</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Label className="text-base font-medium">Theme and colors</Label>
            <RadioGroup
              value={settings.theme}
              onValueChange={(value: "light" | "dark") =>
                updateSettings({ theme: value })
              }
              className="flex gap-4 mt-3"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="w-16 h-16 border-2 rounded-lg flex items-center justify-center bg-white">
                    <div className="w-6 h-6 border border-gray-300 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                  <RadioGroupItem
                    value="light"
                    className="absolute -top-2 -right-2"
                  />
                </div>
                <Label className="text-xs">Light</Label>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="w-16 h-16 border-2 rounded-lg flex items-center justify-center bg-gray-800">
                    <div className="w-6 h-6 border border-gray-600 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <RadioGroupItem
                    value="dark"
                    className="absolute -top-2 -right-2"
                  />
                </div>
                <Label className="text-xs">Dark</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full border-2 border-blue-500"></div>
              <Label className="text-sm font-medium">Theme color</Label>
            </div>
            <div className="flex flex-wrap gap-2">
              {themeColors.map((color) => (
                <button
                  key={color}
                  onClick={() => updateSettings({ themeColor: color })}
                  className={`w-8 h-8 rounded-full border-2 ${
                    settings.themeColor === color
                      ? "border-gray-400"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
              <button className="w-8 h-8 rounded-full border-2 border-gray-300 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"></button>
            </div>
          </div>
        </div>
      </CollapsibleItem>

      <CollapsibleItem title="Position" icon={<MapPin className="h-4 w-4" />}>
        <div className="space-y-4">
          <Label>Widget position on page</Label>
          <RadioGroup
            value={settings.position}
            onValueChange={(value: any) => updateSettings({ position: value })}
            className="grid grid-cols-2 gap-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bottom-right" id="bottom-right" />
              <Label htmlFor="bottom-right">Bottom Right</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="bottom-left" id="bottom-left" />
              <Label htmlFor="bottom-left">Bottom Left</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="top-right" id="top-right" />
              <Label htmlFor="top-right">Top Right</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="top-left" id="top-left" />
              <Label htmlFor="top-left">Top Left</Label>
            </div>
          </RadioGroup>
        </div>
      </CollapsibleItem>

      <CollapsibleItem
        title="Mobile chat widget"
        icon={<Smartphone className="h-4 w-4" />}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="mobile-enabled">Enable mobile widget</Label>
            <Switch
              id="mobile-enabled"
              checked={settings.mobileEnabled}
              onCheckedChange={(checked) =>
                updateSettings({ mobileEnabled: checked })
              }
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Allow the chat widget to be displayed on mobile devices.
          </p>
        </div>
      </CollapsibleItem>

      <CollapsibleItem
        title="Additional tweaks"
        icon={<Settings className="h-4 w-4" />}
      >
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Advanced customization options for your chat widget.
          </p>
          <div className="space-y-2">
            <Label>Custom CSS</Label>
            <textarea
              className="w-full h-20 p-2 border rounded-md text-sm"
              placeholder="/* Add your custom CSS here */"
            />
          </div>
        </div>
      </CollapsibleItem>
    </div>
  );
}
