import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function CertificationsSection() {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  const certifications = [
    {
      title: "Networking Configuration",
      provider: "Cisco",
      type: "Networking Certification",
      date: "Apr 2025",
      link: "https://www.credly.com/badges/11d47309-9134-489b-9464-04b69c5a8208/linked_in_profile",
      icon: "fas fa-network-wired",
      color: "text-blue-600",
      bgColor: "from-blue-600/20 to-blue-700/20"
    },
    {
      title: "OCI AI Foundations Associate",
      provider: "Oracle", 
      type: "AI Certification",
      date: "Aug 2025",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7A0289A35A338C7C3AF558A406D9FC0AE28FF31C7E98279D2AEAAE3ECF676D70",
      icon: "fas fa-brain",
      color: "text-red-600",
      bgColor: "from-red-600/20 to-orange-600/20"
    },
    {
      title: "Ethical Hacker",
      provider: "Cisco",
      type: "Cybersecurity Certification", 
      date: "Aug 2025",
      link: "https://www.credly.com/badges/eeccb2c5-43ec-462d-9e97-33ad4ce54437/public_url",
      icon: "fas fa-shield-alt",
      color: "text-green-600",
      bgColor: "from-green-600/20 to-emerald-600/20"
    },
    {
      title: "Advanced Foundry",
      provider: "Cyfrin Updraft",
      type: "Advanced Foundry",
      date: "Aug 2025", 
      link: "https://profiles.cyfrin.io/u/lumawigraniel/achievements/advanced-foundry",
      icon: "fas fa-hammer",
      color: "text-purple-600",
      bgColor: "from-purple-600/20 to-indigo-600/20"
    }
  ];

  return (
    <section className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`} ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className={`text-5xl md:text-6xl font-bold mb-4 tracking-tight ${
            isDarkMode ? 'gradient-text-white' : 'text-black'
          }`}>Certifications & Training</h2>
          <div className={`w-24 h-1 mx-auto rounded-full mb-4 ${
            isDarkMode ? 'bg-gradient-to-r from-white/80 to-gray-300' : 'bg-gradient-to-r from-black/80 to-gray-600'
          }`} />
          <p className={`text-xl leading-relaxed font-light ${
            isDarkMode ? 'text-white/85' : 'text-black/85'
          }`}>
            Professional certifications and specialized training that demonstrate my commitment to continuous learning and technical excellence.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="glassmorphism-enhanced rounded-2xl overflow-hidden group transition-all-smooth hover:shadow-2xl"
              data-testid={`certification-${cert.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {/* Certificate Background Display */}
              <div 
                className="h-48 relative overflow-hidden bg-white rounded-t-2xl cursor-pointer"
                onClick={() => {
                  let imageUrl = '';
                  if (cert.type === "Networking Certification") {
                    imageUrl = '/NetworkingDevicesandBasicConfigUpdate20250815-31-a66vgx.png';
                  } else if (cert.type === "Cybersecurity Certification") {
                    imageUrl = '/EthicalHackerUpdate20250820-31-yeuzfh.png';
                  } else if (cert.type === "AI Certification") {
                    imageUrl = '/eCertificate.png';
                  } else if (cert.type === "Advanced Foundry") {
                    imageUrl = '/Advanced Foundry X5ZNEFQHFWMA 2025-7-15.png';
                  }
                  if (imageUrl) {
                    setSelectedCertificate(imageUrl);
                  }
                }}
              >
                {/* Certificate Image Background */}
                {cert.type === "Networking Certification" && (
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: `url('/NetworkingDevicesandBasicConfigUpdate20250815-31-a66vgx.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: '#ffffff'
                    }}
                  />
                )}
                {cert.type === "Cybersecurity Certification" && (
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: `url('/EthicalHackerUpdate20250820-31-yeuzfh.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: '#ffffff'
                    }}
                  />
                )}
                {cert.type === "AI Certification" && (
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: `url('/eCertificate.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: '#ffffff'
                    }}
                  />
                )}
                {cert.type === "Advanced Foundry" && (
                  <div 
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: `url('/Advanced Foundry X5ZNEFQHFWMA 2025-7-15.png')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                      backgroundColor: '#ffffff'
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 transition-all duration-300 ${
                  isDarkMode ? 'text-white group-hover:gradient-text-blue' : 'text-black'
                }`}>{cert.title}</h3>
                <p className={`font-semibold mb-2 ${
                  isDarkMode ? 'text-blue-300' : 'text-blue-600'
                }`}>{cert.provider}</p>
                <p className={`text-xs mb-4 font-medium ${
                  isDarkMode ? 'text-white/60' : 'text-black/60'
                }`}>{cert.date}</p>
                {cert.link && (
                  <motion.div 
                    className={`flex items-center transition-colors duration-300 cursor-pointer ${
                      isDarkMode ? 'text-white/80 hover:text-white' : 'text-black/80 hover:text-black'
                    }`}
                    whileHover={{ x: 5 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(cert.link, '_blank');
                    }}
                  >
                    <span className="font-medium">View Credential</span>
                    <ExternalLink size={16} className="ml-2" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <X size={20} />
            </button>
            <img
              src={selectedCertificate}
              alt="Certificate"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
