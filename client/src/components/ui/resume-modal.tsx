import { motion, AnimatePresence } from "framer-motion";
import { X, Download } from "lucide-react";
import { useState } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

export default function ResumeModal({ isOpen, onClose, isDarkMode }: ResumeModalProps) {
  const resumeUrl = "/ENCARNACION_RANIEL_RESUME.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "ENCARNACION_RANIEL_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            data-testid="resume-modal-backdrop"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 z-50 flex items-center justify-center p-4`}
          >
            <div
              className={`relative w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden ${
                isDarkMode ? "bg-gray-900" : "bg-white"
              }`}
            >
              {/* Header */}
              <div
                className={`flex items-center justify-between p-4 sm:p-6 border-b ${
                  isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-gray-50"
                }`}
              >
                <h2 className={`text-xl sm:text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}>
                  Resume Preview
                </h2>
                <div className="flex items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                      isDarkMode
                        ? "bg-white text-black hover:bg-white/90"
                        : "bg-black text-white hover:bg-black/90"
                    }`}
                    data-testid="resume-download-btn"
                  >
                    <Download size={18} />
                    <span className="hidden sm:inline">Download</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-200"
                    }`}
                    data-testid="resume-close-btn"
                  >
                    <X size={24} className={isDarkMode ? "text-white" : "text-black"} />
                  </motion.button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="h-[calc(90vh-80px)] overflow-auto">
                <iframe
                  src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                  className="w-full h-full"
                  title="Resume Preview"
                  data-testid="resume-preview-iframe"
                />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
