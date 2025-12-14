import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { RESUME_CONTEXT } from '../constants';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: "Hello! I'm Gemechis's AI Assistant. Ask me anything about his skills, experience, or education!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `
        You are an AI assistant for Gemechis Fekede. 
        Your goal is to represent him professionally and friendly to potential employers or clients.
        
        Here is his resume data:
        ${RESUME_CONTEXT}
        
        Rules:
        1. Keep answers concise (under 100 words unless asked for details).
        2. Be enthusiastic about his dual skills in Civil Engineering and Digital Creativity.
        3. If asked for contact info, provide his email and phone.
        4. If asked about something not in the resume, say you don't have that info but suggest contacting him directly.
      `;

      // Construct history for context
      // Note: For simplicity in this demo, we are just sending the last prompt with system instruction in config.
      // Ideally, we'd use ai.chats.create() for full history, but generateContent works for simple Q&A.
      
      const streamResult = await ai.models.generateContentStream({
        model: 'gemini-2.5-flash',
        contents: [
            ...messages.map(m => ({ 
                role: m.role, 
                parts: [{ text: m.text }] 
            })),
            { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: systemInstruction,
        }
      });

      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'model', text: "" }]);

      for await (const chunk of streamResult) {
         const chunkText = chunk.text;
         if (chunkText) {
           fullResponse += chunkText;
           setMessages(prev => {
             const newMsgs = [...prev];
             newMsgs[newMsgs.length - 1].text = fullResponse;
             return newMsgs;
           });
         }
      }

    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-blue-600 to-teal-600 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <span className="font-semibold">Gemechis AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                 {msg.role === 'model' && (
                   <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                     <Bot className="w-4 h-4 text-white" />
                   </div>
                 )}
                 <div className={`p-3 rounded-2xl max-w-[80%] text-sm ${
                   msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-slate-700 text-slate-100 rounded-bl-none'
                 }`}>
                   {msg.text}
                 </div>
                  {msg.role === 'user' && (
                   <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center flex-shrink-0">
                     <User className="w-4 h-4 text-white" />
                   </div>
                 )}
              </div>
            ))}
            {isLoading && (
               <div className="flex gap-3 justify-start">
                   <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                     <Bot className="w-4 h-4 text-white" />
                   </div>
                   <div className="p-3 rounded-2xl bg-slate-700 rounded-bl-none flex items-center">
                     <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
                   </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-slate-900 border-t border-slate-700">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask about my skills..."
                className="w-full bg-slate-800 text-white pl-4 pr-12 py-3 rounded-full border border-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                disabled={isLoading}
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-2 top-2 p-1.5 bg-blue-600 text-white rounded-full hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 group"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageSquare className="w-6 h-6 text-white group-hover:animate-pulse" />
        )}
      </button>
    </div>
  );
};

export default AIChat;
