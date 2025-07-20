"use client"

import { useState } from "react"
import { ArrowLeft, MoreHorizontal, X, Minimize, Send, Smile, Paperclip } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useChatbot } from "@/context/ChatbotContext"

export default function ChatbotPreview() {
  const { settings } = useChatbot()
  const [isMinimized, setIsMinimized] = useState(false)
  const [message, setMessage] = useState("")

  const themeStyles = {
    light: {
      bg: "bg-white",
      text: "text-gray-900",
      border: "border-gray-200",
      headerBg: "bg-gray-50",
    },
    dark: {
      bg: "bg-gray-900",
      text: "text-white",
      border: "border-gray-700",
      headerBg: "bg-gray-800",
    },
  }

  const currentTheme = themeStyles[settings.theme]

  if (isMinimized) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <div
          className={`${settings.widgetStyle === "bubble" ? "w-16 h-16 rounded-full" : "w-20 h-8 rounded-lg"} 
          flex items-center justify-center cursor-pointer shadow-lg border-2`}
          style={{ backgroundColor: settings.themeColor, borderColor: settings.themeColor }}
          onClick={() => setIsMinimized(false)}
        >
          {settings.widgetStyle === "bubble" ? (
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: settings.themeColor }}></div>
            </div>
          ) : (
            <div className="text-white text-xs font-medium">Chat</div>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-4 text-center">Click to expand the chat widget</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full max-w-sm mx-auto">
      <div className={`flex-1 ${currentTheme.bg} ${currentTheme.border} border rounded-lg shadow-lg overflow-hidden`}>
        {/* Header */}
        <div
          className={`${currentTheme.headerBg} ${currentTheme.border} border-b p-4 flex items-center justify-between`}
        >
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="p-1">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
                style={{ backgroundColor: settings.themeColor }}
              >
                I
              </div>
              <span className={`font-medium ${currentTheme.text}`}>Ishra</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="p-1">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="p-1" onClick={() => setIsMinimized(true)}>
              <Minimize className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="p-1">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className={`flex-1 p-4 space-y-4 ${currentTheme.bg}`} style={{ minHeight: "300px" }}>
          <div className="flex justify-end">
            <div
              className="max-w-xs p-3 rounded-lg text-white text-sm"
              style={{ backgroundColor: settings.themeColor }}
            >
              हैलो नमस्ते. मैं किसम प्रकार आपकी मदद करूं?
            </div>
          </div>

          <div className="flex justify-start">
            <div
              className={`max-w-xs p-3 rounded-lg text-sm ${currentTheme.bg === "bg-white" ? "bg-gray-100 text-gray-900" : "bg-gray-700 text-white"}`}
            >
              <Button
                variant="outline"
                size="sm"
                className="text-xs"
                style={{ borderColor: settings.themeColor, color: settings.themeColor }}
              >
                I'd like to ask something
              </Button>
            </div>
          </div>

          <div className="flex justify-end">
            <div
              className={`max-w-xs p-3 rounded-lg text-sm ${currentTheme.text} ${currentTheme.bg === "bg-white" ? "bg-gray-100" : "bg-gray-700"}`}
            >
              Go ahead
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className={`${currentTheme.border} border-t p-4`}>
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="संदेशलिखें..."
                className={`pr-20 ${currentTheme.bg} ${currentTheme.text} ${currentTheme.border}`}
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <Button variant="ghost" size="sm" className="p-1">
                  <Smile className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-1">
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-1">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="text-xs text-muted-foreground">Powered by LiveChat</div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <Button variant="link" className="text-sm" style={{ color: settings.themeColor }}>
          Test it out on the chat page
        </Button>
      </div>
    </div>
  )
}
