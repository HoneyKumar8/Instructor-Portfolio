import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Send, X, RefreshCw, Bot, User, CornerDownLeft } from 'lucide-react';
import { Badge } from '../ui';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

const STARTER_QUESTIONS = [
  "Explain Binary Search simply",
  "What is Recursion in C++?",
  "Roadmap for DSA beginners",
  "Stack vs Queue differences",
  "What is Big-O Time Complexity?",
  "How to prepare for coding interviews?"
];

export const AIMentorChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Listen for open-ai-mentor custom event from anywhere in the app (e.g. Hero button)
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-ai-mentor', handleOpenChat);
    return () => window.removeEventListener('open-ai-mentor', handleOpenChat);
  }, []);

  // Initialize greeting message on first opening
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: '1',
          sender: 'ai',
          text: "Hi! I am Shyam Kumar's **AI DSA Mentor**, powered by Gemini 2.5 Flash intelligence.\n\nI'm trained on Shyam's pedagogical philosophy: *Understand before memorizing*! Ask me any programming doubt, C++ conceptual question, or seek interview guidance.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, [messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isLoading, isOpen]);

  // Intelligent offline fallback simulation engine (trained in Shyam Kumar's teaching voice)
  const getOfflineAIResponse = (query: string): string => {
    const q = query.toLowerCase();
    
    if (q.includes("binary search")) {
      return "### Understanding Binary Search\n**Why memorize when you can deduce?** Imagine looking up a name in a physical dictionary. You don't read page 1, then page 2. You open right in the **middle**!\n\n1. **Pre-condition**: The array **must** be sorted.\n2. **Logic**: Compare target with middle element (`mid = low + (high - low) / 2`). If target is smaller, search left half (`high = mid - 1`). If larger, search right half (`low = mid + 1`).\n3. **Time Complexity**: **O(log N)** — each comparison cuts our workspace in half!\n\n*Shyam's Tip:* Never write `(low + high) / 2` to avoid integer overflow in C++!";
    }
    if (q.includes("recursion")) {
      return "### Demystifying Recursion\nRecursion is simply a function calling itself to solve smaller instances of the exact same problem until reaching a simpler base case.\n\n**Two Essential Rules of Recursion:**\n1. **Base Case**: The stopping condition (like `if (n <= 1) return 1;`). Without this, you trigger a **Stack Overflow**!\n2. **Recursive Step**: Progressing towards the base case (`return n * factorial(n - 1);`).\n\n*Shyam's Pedagogical Rule:* Before coding recursion, always trace the function call stack on a sheet of paper!";
    }
    if (q.includes("roadmap") || q.includes("beginner")) {
      return "### Shyam's 8-Phase Learning Roadmap\nDon't rush straight to Hard LeetCode problems! Follow this disciplined order:\n1. **C++ & STL Foundations**: Vectors, Maps, Sets, and clean loops.\n2. **Array & String Manipulations**: Two-pointer and Sliding window patterns.\n3. **Pointers & Dynamic Memory**: Understanding Stack vs Heap memory.\n4. **Linked Lists**: Reversal and fast/slow pointer cycle detection.\n5. **Stacks & Queues**: Valid parentheses and Next Greater Element.\n6. **Trees & BST**: Traversals (Inorder, Preorder, Postorder).\n7. **Graphs**: BFS shortest path and DFS traversal.\n8. **Dynamic Programming**: Memoization to optimization.";
    }
    if (q.includes("stack") || q.includes("queue")) {
      return "### Stack vs. Queue: Real-World Analogy\n- **Stack (LIFO - Last In, First Out)**: Like a stack of dinner plates in a cafeteria. You only add or remove the plate at the very top. Operations: `push()`, `pop()`, `top()` in **O(1)**.\n- **Queue (FIFO - First In, First Out)**: Like a line of students waiting outside a classroom. The first person in line is the first one served. Operations: `push()` (rear) and `pop()` (front) in **O(1)**.";
    }
    if (q.includes("time complexity") || q.includes("big-o") || q.includes("big o")) {
      return "### Big-O Time Complexity Basics\nBig-O notations measure how our runtime scales as input size ($N$) grows towards infinity:\n- **O(1) Constant Time**: Looking up an array index `arr[5]`. Instantaneous!\n- **O(log N) Logarithmic**: Binary search or BST lookup.\n- **O(N) Linear Time**: Loop through an array once.\n- **O(N log N) Linear-Logarithmic**: Efficient sorting (Merge Sort / Quick Sort).\n- **O(N²) Quadratic**: Nested loops (Bubble Sort / Pair comparison).\n\n*Shyam's Goal:* Always strive to optimize brute-force $O(N^2)$ solutions down to $O(N)$ or $O(N \\log N)$ using Hash Maps or Two Pointers!";
    }
    if (q.includes("shyam") || q.includes("who are you") || q.includes("instructor") || q.includes("nxtwave")) {
      return "### About Instructor Surakattula Shyam Kumar\nShyam is an active **DSA Instructor in C++** and a **Software Development Faculty Trainee at NxtWave CCBP 4.0**.\n\nHe holds a specialized certification in Full Stack MERN Development and completed the intense #100DaysOfCode challenge. His primary mission is to transform programming anxiety into unshakeable engineering confidence!";
    }
    
    return "### Shyam's AI Mentor Note\nThat is an excellent computer science topic! In our interactive mentorship sessions at NxtWave, we explore this concept by first drawing diagrams on paper before diving into C++ code implementation.\n\n**To master this specific problem:**\n1. Break down the inputs and constraints.\n2. Formulate a brute-force approach first.\n3. Identify redundant repeated calculations to optimize using STL Data Structures.\n\n*Feel free to send this exact doubt to Shyam directly via the WhatsApp Chat button on the portfolio for a personalized breakdown!*";
  };

  const handleSend = async (customText?: string) => {
    const query = customText || inputText;
    if (!query.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    if (!customText) setInputText('');
    setIsLoading(true);

    try {
      // Attempt to communicate with the Express API endpoint /api/chat
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query, history: messages.slice(-4) }),
      });

      if (response.ok) {
        const data = await response.json();
        const aiMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: data.reply || getOfflineAIResponse(query),
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
        return;
      }
    } catch (err) {
      // Server offline or running as client static preview -> gracefully switch to offline mentor engine
    }

    // Fallback response with slight pedagogical delay
    setTimeout(() => {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: getOfflineAIResponse(query),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
    }, 800);
  };

  // Basic safe markdown-style formatter for clean display without heavy external parser weight
  const renderFormattedText = (text: string) => {
    const paragraphs = text.split('\n\n');
    return paragraphs.map((para, idx) => {
      // Headers
      if (para.startsWith('### ')) {
        return <h4 key={idx} className="font-bold text-slate-900 dark:text-white mt-2 mb-1 text-sm font-heading">{para.replace('### ', '')}</h4>;
      }
      // Lists
      if (para.includes('\n1. ') || para.includes('\n- ')) {
        const lines = para.split('\n');
        return (
          <div key={idx} className="space-y-1 my-1.5">
            {lines.map((line, lIdx) => {
              if (line.startsWith('### ')) {
                return <h4 key={lIdx} className="font-bold text-slate-900 dark:text-white text-sm font-heading">{line.replace('### ', '')}</h4>;
              }
              return <p key={lIdx} className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">{line}</p>;
            })}
          </div>
        );
      }
      return <p key={idx} className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 my-1.5">{para}</p>;
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      
      {/* Floating Action Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-bold text-sm shadow-2xl border-2 border-white/20 min-h-[52px] group focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
            aria-label="Open AI DSA Mentor Chat"
          >
            <div className="w-7 h-7 rounded-full bg-white text-indigo-600 flex items-center justify-center shrink-0 shadow-inner group-hover:rotate-12 transition-transform">
              <Sparkles className="w-4 h-4 fill-current" />
            </div>
            <span>Ask AI Mentor</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping ml-0.5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Expandable Chat Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-[92vw] sm:w-[420px] h-[580px] max-h-[85vh] rounded-2xl bg-white dark:bg-[#131C31] border-2 border-slate-200 dark:border-indigo-500/40 shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white flex items-center justify-between shrink-0 shadow-md">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white border border-white/30">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm font-heading flex items-center gap-1.5">
                    AI DSA Mentor <Badge variant="accent" size="sm" className="bg-emerald-500/20 text-white text-[10px] py-0 border-white/20">Gemini 2.5</Badge>
                  </h4>
                  <p className="text-[11px] text-indigo-100 flex items-center gap-1 font-body">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 inline-block" />
                    Trained on Shyam&apos;s Teaching Method
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setMessages([])}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
                  title="Clear Chat History"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors min-h-[36px] min-w-[36px] flex items-center justify-center"
                  aria-label="Close AI Mentor"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Message History Feed */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50 dark:bg-slate-900/40">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-blue-500 text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div className={`max-w-[80%] rounded-2xl p-3.5 text-sm font-body ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white rounded-tr-none shadow-md'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/80 dark:border-slate-700 shadow-sm'
                  }`}>
                    {msg.sender === 'user' ? (
                      <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
                    ) : (
                      <div>{renderFormattedText(msg.text)}</div>
                    )}
                    <span className={`text-[10px] block mt-1.5 text-right font-code ${msg.sender === 'user' ? 'text-indigo-200' : 'text-slate-400'}`}>
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-slate-700 dark:bg-slate-700 text-white flex items-center justify-center shrink-0 mt-1">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isLoading && (
                <div className="flex gap-2.5 items-center justify-start">
                  <div className="w-7 h-7 rounded-full bg-indigo-500 text-white flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  </div>
                  <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 flex items-center gap-1.5 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Starter Suggestion Chips */}
            {messages.length <= 2 && !isLoading && (
              <div className="p-3 bg-white dark:bg-slate-800/90 border-t border-slate-100 dark:border-slate-700/60 shrink-0">
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <CornerDownLeft className="w-3 h-3 text-indigo-500" /> Starter Doubts & Questions:
                </p>
                <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
                  {STARTER_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSend(q)}
                      className="text-xs px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-indigo-50 dark:hover:bg-slate-600 hover:text-indigo-600 dark:hover:text-white transition-colors border border-slate-200/80 dark:border-slate-600/80 text-left truncate max-w-[200px]"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Footer Area */}
            <div className="p-3 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask any C++ or algorithmic doubt..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 px-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[44px]"
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputText.trim()}
                  className="w-11 h-11 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 disabled:opacity-50 text-white flex items-center justify-center shrink-0 shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Send Message to AI Mentor"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
