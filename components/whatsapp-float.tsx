"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/utils";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold rounded-full shadow-2xl transition-colors group"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Expanded label on hover */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-[200px] transition-all duration-300 whitespace-nowrap pl-0 group-hover:pl-5 text-sm">
        Auditar gratis no WhatsApp
      </span>
      <span className="w-14 h-14 flex items-center justify-center flex-shrink-0">
        <MessageCircle className="w-7 h-7" />
      </span>
    </motion.a>
  );
}
