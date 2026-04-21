import { motion } from 'motion/react';
import { Wifi, Zap, PhoneCall, ShieldCheck, CheckCircle2, Menu, X, ArrowRight, Laptop, Users } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-sky-400" />,
      title: "Koneksi Super Ngebut",
      description: "Kecepatan stabil tanpa FUP, bikin nugas, streaming, dan main game lancar bebas hambatan."
    },
    {
      icon: <Wifi className="w-6 h-6 text-sky-400" />,
      title: "Jangkauan Luas",
      description: "Menjangkau seluruh area strategis di sekitar kampus UNUGHA, dari kost mahasiswa hingga kontrakan."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-sky-400" />,
      title: "Aman & Terpercaya",
      description: "Infrastruktur modern dan sistem keamanan yang update menjaga privasi kamu tetap aman saat berselancar."
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-sky-400" />,
      title: "Support Teknisi 24/7",
      description: "Internet ngadet pas lagi ngejar deadline? Tim teknisi kami siap bantu kapanpun dibutuhkan!"
    }
  ];

  const plans = [
    {
      name: "Paket Maba",
      speed: "10 Mbps",
      price: "100.000",
      description: "Cocok untuk mahasiswa yang kost sendiri. Pas buat nugas dan drakoran.",
      features: ["1 - 2 Device", "100% Unlimited / Tanpa FUP", "Support 24 Jam", "Gratis Peminjaman Router"],
      popular: false,
      icon: <Laptop className="w-8 h-8 text-sky-400 mb-4" />
    },
    {
      name: "Paket Skripsi",
      speed: "25 Mbps",
      price: "150.000",
      description: "Pilihan favorit! Bebas lag buat main game bareng atau zoom meeting seharian.",
      features: ["3 - 5 Device", "100% Unlimited / Tanpa FUP", "Prioritas Support", "Gratis Instalasi & Router"],
      popular: true,
      icon: <Zap className="w-8 h-8 text-white mb-4" />
    },
    {
      name: "Paket Kontrakan",
      speed: "50 Mbps",
      price: "250.000",
      description: "Kecepatan maksimal untuk 1 rumah / kontrakan besar. Bikin semua penghuni happy.",
      features: ["Up to 10 Device", "100% Unlimited / Tanpa FUP", "IP Public (Opsional)", "VIP Support Teknisi"],
      popular: false,
      icon: <Users className="w-8 h-8 text-sky-400 mb-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-50 selection:bg-sky-400 selection:text-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-2xl text-sky-400 tracking-tight">UNUGHA<span className="text-white">NET</span></span>
            </div>
            
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#beranda" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Beranda</a>
              <a href="#fitur" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Keunggulan</a>
              <a href="#paket" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Paket Internet</a>
              <a href="#kontak" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Kontak</a>
              <a href="#paket" className="bg-sky-400 hover:bg-sky-500 text-slate-950 px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:shadow-lg hover:shadow-sky-400/20">
                Daftar Sekarang
              </a>
            </div>

            <button 
              className="md:hidden p-2 text-slate-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-white/5 px-4 pt-2 pb-4 space-y-1">
            <a href="#beranda" className="block px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white rounded-md" onClick={() => setIsMenuOpen(false)}>Beranda</a>
            <a href="#fitur" className="block px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white rounded-md" onClick={() => setIsMenuOpen(false)}>Keunggulan</a>
            <a href="#paket" className="block px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white rounded-md" onClick={() => setIsMenuOpen(false)}>Paket Internet</a>
            <a href="#kontak" className="block px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white rounded-md" onClick={() => setIsMenuOpen(false)}>Kontak</a>
            <div className="pt-2">
              <a href="#paket" className="block w-full text-center bg-sky-400 text-slate-950 px-5 py-3 rounded-lg font-bold" onClick={() => setIsMenuOpen(false)}>
                Daftar Sekarang
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[400px] h-[400px] bg-sky-400/15 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-400"></span>
                </span>
                Jaringan Online 24 Jam
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent tracking-tight leading-[1.1] mb-6">
                Internet Cepat & Hemat Buat Mahasiswa UNUGHA
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
                Solusi internet stabil, tanpa batas kuota (100% FUP-free), dan harga pas di kantong anak kost area sekitar kampus Universitas Nahdlatul Ulama Al-Ghazali.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#paket" className="inline-flex items-center justify-center gap-2 bg-sky-400 hover:bg-sky-500 text-slate-950 px-8 py-4 rounded-lg text-base font-semibold transition-all group">
                  Lihat Paket Kita
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#hubungi" className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-lg text-base font-semibold transition-all">
                  Cek Area Coverage
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-sky-400/10 rounded-3xl transform rotate-3 blur-xl"></div>
              <div className="relative bg-slate-900/60 p-2 rounded-3xl shadow-2xl border border-sky-400/20">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" 
                  alt="Mahasiswa belajar bersama" 
                  className="rounded-2xl object-cover h-[500px] w-full"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-6 bg-slate-900/80 p-4 rounded-2xl shadow-2xl border border-white/5 flex items-center gap-4 backdrop-blur-md">
                  <div className="w-12 h-12 bg-sky-400/20 rounded-xl flex items-center justify-center text-sky-400 font-bold text-xl">
                    <Wifi />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium tracking-wide text-transform: uppercase">Uptime Jaringan</p>
                    <p className="text-2xl font-bold text-white">99.9%</p>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-slate-900/80 p-4 rounded-2xl shadow-2xl border border-white/5 flex items-center gap-4 backdrop-blur-md">
                  <div className="w-12 h-12 bg-sky-400/20 rounded-xl flex items-center justify-center text-sky-400 font-bold text-xl">
                    <Zap fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 font-medium tracking-wide text-transform: uppercase">Kec. Rata-rata</p>
                    <p className="text-2xl font-bold text-white">30 Mbps</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-20 bg-[#020617] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sky-400 font-semibold tracking-wide uppercase text-sm mb-3">Kenapa UNUGHA Net?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Lebih Nyaman Dari Warnet, Lebih Murah Dari Kuota HP
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/[0.02] p-8 rounded-2xl border border-white/5 hover:border-sky-400/20 transition-all group"
              >
                <div className="w-14 h-14 bg-white/5 shadow-sm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="paket" className="py-24 bg-[#020617] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 -left-64 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sky-400 font-semibold tracking-wide uppercase text-sm mb-3">Pilihan Paket</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Internet Kencang, Kantong Tenang
            </h3>
            <p className="text-lg text-slate-400">
              Pilih paket yang paling sesuai dengan kebutuhan kost/kontrakan kamu. Harga flat setiap bulan tanpa kejutan.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-8 lg:p-10 ${
                  plan.popular 
                  ? 'bg-slate-900 border border-sky-400 shadow-2xl scale-105 z-10 shadow-sky-400/20' 
                  : 'bg-slate-900/60 border border-white/10 shadow-xl z-0'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 right-8 bg-sky-400 text-slate-950 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
                    Terpopuler
                  </div>
                )}

                {plan.icon}

                <h4 className="text-2xl font-bold mb-2 text-white">{plan.name}</h4>
                <div className="mb-6 flex items-baseline text-sm">
                  <span className="text-4xl font-bold tracking-tight text-white">{plan.speed}</span>
                </div>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">Rp {plan.price}</span>
                  <span className="text-lg text-slate-400">/bln</span>
                </div>

                <p className="mb-8 text-sm leading-relaxed text-slate-400">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-sky-400" />
                      <span className="text-sm font-medium text-slate-300">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={`https://wa.me/6281234567890?text=Halo%20UNUGHA%20Net,%20saya%20tertarik%20dengan%20${plan.name}%20(${plan.speed})`}
                  target="_blank"
                  rel="noreferrer"
                  className={`block w-full py-4 px-6 rounded-lg text-center font-semibold transition-all border ${
                    plan.popular 
                    ? 'bg-sky-400 hover:bg-sky-500 text-slate-950 border-transparent shadow-lg shadow-sky-400/20' 
                    : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                  }`}
                >
                  Pilih Paket Ini
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-24 bg-[#020617] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/80 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl border border-white/5">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-sky-400/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-sky-400/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Siap Internetan Bebas Hambatan?
              </h2>
              <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                Tingkatkan rutinitas nugas dan hiburan kamu. Proses pemasangan cepat, teknisi kami siap datang ke tempat kostmu hari ini juga!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-sky-400 text-slate-950 px-8 py-4 rounded-lg text-base font-semibold transition-all hover:bg-sky-500 hover:scale-105 shadow-xl">
                  <PhoneCall className="w-5 h-5" />
                  Hubungi Admin (WA)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-[#020617] text-slate-300 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-extrabold text-xl text-sky-400 tracking-tight">UNUGHA<span className="text-white">NET</span></span>
            </div>
            <p className="text-sm text-slate-400 mb-6 max-w-sm leading-relaxed">
              Penyedia layanan internet (RT/RW Net) terpercaya yang berdedikasi melayani kawasan Kampus Universitas Nahdlatul Ulama Al-Ghazali (UNUGHA) Cilacap dan sekitarnya.
            </p>
            <div className="flex gap-4">
              {/* Dummy social icons */}
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-sky-400 hover:text-slate-950 transition-colors cursor-pointer text-slate-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-sky-400 hover:text-slate-950 transition-colors cursor-pointer text-slate-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#fitur" className="hover:text-white transition-colors">Keunggulan</a></li>
              <li><a href="#paket" className="hover:text-white transition-colors">Paket Internet</a></li>
              <li><a href="#hubungi" className="hover:text-white transition-colors">Area Coverage</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Kontak Kami</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <PhoneCall className="w-4 h-4 mt-0.5 text-sky-400" />
                <span>+62 812-3456-7890<br/>(WA Only)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-sky-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Jl. Kesugihan Raya, Kesugihan, Kabupaten Cilacap,<br/>Jawa Tengah 53274</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/5 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} UNUGHA Net. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
