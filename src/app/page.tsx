'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Activity, Video, BarChart, Zap, ShieldCheck, Mail, Phone, ChevronRight, Menu, X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ── Fade In Component ──
function FadeIn({ children, delay = 0, className }: { children: React.ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function NexusPremiumLanding() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  return (
    <div className="bg-[#050505] text-neutral-200 min-h-screen font-body selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-600/20 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[50%] bg-cyan-600/10 blur-[150px] rounded-full mix-blend-screen" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 transition-all">
        <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="NEXUS SPORTS" className="h-8 md:h-10 w-auto object-contain" />
          </div>
          
          <MobileMenu />
          
          <div className="hidden md:flex gap-10 items-center">
            {['About', 'Solutions', 'Why Us', 'Contact'].map((item) => (
              <a key={item} className="text-neutral-400 uppercase text-xs tracking-[0.2em] font-medium hover:text-white transition-colors duration-300 font-headline" href={`#${item.toLowerCase().replace(' ', '-')}`}>
                {item}
              </a>
            ))}
          </div>
          <a
            href="https://matchpoint.bz/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 backdrop-blur-md group"
          >
            시연해보기
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </nav>

      <main className="relative z-10 w-full">
        
        {/* ======== HERO SECTION ======== */}
        <section className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 overflow-hidden px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-emerald-500/20 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(52,211,153,0.1)]"
            >
              <Zap className="w-3.5 h-3.5" /> Next-Gen Sports Tournament Platform
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.2 }}
              className="font-headline text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1]"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                스포츠 대회의
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-500">
                모든 것을 완벽하게.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.4 }}
              className="text-neutral-400 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 font-light"
            >
              종이와 엑셀의 시대는 끝났습니다. NEXUS SPORTS는 
              <span className="text-white font-medium"> 실시간 AI 자동화</span>와 
              <span className="text-white font-medium"> 클라우드 데이터</span>를 통해 귀하의 대회를 프로 리그의 수준으로 격상시킵니다.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <a href="#contact" className="w-full sm:w-auto overflow-hidden relative group bg-emerald-500 text-black font-extrabold px-10 py-4 rounded-xl text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(52,211,153,0.3)]">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  무료 B2B 컨설팅 받기 <ChevronRight className="w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-emerald-400 to-emerald-300 transition-transform duration-500 ease-out z-0"></div>
              </a>
              <a href="https://matchpoint.bz" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-lg font-bold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                실제 서비스 둘러보기
              </a>
            </motion.div>
          </div>
        </section>

        {/* ======== METRICS MARQUEE ======== */}
        <div className="w-full border-y border-white/5 bg-white/[0.02] py-6 flex overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex gap-16 px-8 items-center">
            {[...Array(2)].fill(0).map((_, groupIdx) => (
              <React.Fragment key={groupIdx}>
                <MetricItem value="99.9%" label="시스템 가동률" />
                <MetricItem value="1.2M+" label="누적 경기 데이터" />
                <MetricItem value="10X" label="운영 리소스 절감" />
                <MetricItem value="ZERO" label="대진표 배정 오류" />
                <MetricItem value="REAL-TIME" label="전광판 즉각 동기화" />
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ======== ABOUT (Bento Grid) ======== */}
        <section className="py-32 px-6" id="about">
          <div className="max-w-screen-2xl mx-auto">
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="text-emerald-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">The Platform</h2>
                <h3 className="font-headline text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                  스포츠 운영의 패러다임 전환
                </h3>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
              {/* Box 1 */}
              <FadeIn className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-10 hover:border-emerald-500/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full justify-between">
                   <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 flex items-center justify-center border border-white/10 mb-6 drop-shadow-xl">
                      <Activity className="w-7 h-7 text-emerald-400" />
                   </div>
                   <div>
                     <h4 className="font-headline text-3xl font-bold text-white mb-3">AI Smart Bracketing</h4>
                     <p className="text-neutral-400 text-lg leading-relaxed max-w-lg">
                       복잡한 연령/급수별 배정과 코트 분배를 단 몇 초 만에 알고리즘이 완벽하게 해결합니다. 주최자의 며칠 밤샘 작업이 사라집니다.
                     </p>
                   </div>
                </div>
              </FadeIn>
              
              {/* Box 2 */}
              <FadeIn delay={0.1} className="relative group overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-10 flex flex-col justify-end">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-500/20 blur-3xl rounded-full"></div>
                <h4 className="font-headline text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 mb-2">
                  100%
                </h4>
                <p className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-3">Data Accuracy</p>
                <p className="text-neutral-400 text-sm">실수를 원천 차단하는 크로스 체킹 점수 기록 시스템.</p>
              </FadeIn>

              {/* Box 3 */}
              <FadeIn delay={0.2} className="relative group overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-10">
                <ShieldCheck className="w-10 h-10 text-neutral-500 mb-6 group-hover:text-cyan-400 transition-colors" />
                <h4 className="font-headline text-xl font-bold text-white mb-3">Bank-Grade Finance</h4>
                <p className="text-neutral-400 text-sm leading-relaxed">참가비 결제부터 상금 정산까지, 암호화된 트랜잭션으로 가장 투명하고 안전한 재무 관리를 제공합니다.</p>
              </FadeIn>

              {/* Box 4 */}
              <FadeIn delay={0.3} className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-[#090909] border border-white/10 p-0 hover:border-cyan-500/30 transition-colors flex flex-col md:flex-row items-center">
                 <div className="p-10 md:w-1/2">
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 mb-6">
                      <Video className="w-7 h-7 text-cyan-400" />
                   </div>
                   <h4 className="font-headline text-3xl font-bold text-white mb-3">Instant Highlights</h4>
                   <p className="text-neutral-400 text-lg leading-relaxed">
                     경기가 끝남과 동시에 멋진 스코어보드가 오버레이된 하이라이트 영상 클립이 생성되어 즉시 인스타그램에 퍼져나갑니다.
                   </p>
                 </div>
                 <div className="md:w-1/2 h-full w-full relative">
                    {/* Placeholder for gorgeous UI mockup */}
                    <img src="/mockup.png" alt="App interface" className="absolute top-10 md:top-20 right-[-10%] w-[120%] max-w-none rounded-tl-xl border-t border-l border-white/10 shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity" />
                 </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ======== CORE SOLUTIONS (Cards) ======== */}
        <section className="py-32 px-6 relative" id="solutions">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="max-w-screen-2xl mx-auto">
            <FadeIn>
              <div className="text-center mb-24">
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">Unrivaled Features</h2>
                <p className="text-neutral-400 text-xl max-w-2xl mx-auto font-light">NEXUS만의 강력한 무기들로 귀하의 프랜차이즈 가치를 스케일업 하세요.</p>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SolutionCard 
                icon={<BarChart size={32} />}
                title="Smart AD Scoreboard"
                desc="대회장에 설치되는 실시간 디지털 전광판에 지역 스폰서 광고를 롤링 송출하여 새로운 대회 수익 모델(BM)을 창출합니다."
                features={['로컬 타겟 광고 수주', '실시간 원격 컨트롤', '경기 점수 0.1초 동기화']}
              />
              <SolutionCard 
                icon={<Trophy size={32} />}
                title="MatchPoint SaaS"
                desc="A부터 Z까지 대회를 마우스 클릭 몇 번으로 통제하는 클라우드 기반 HQ(헤드쿼터) 운영 시스템."
                features={['코트별 상태 라이브 모니터링', '오프라인 인쇄 대응', '자동 모바일 티켓 발권']}
                featured={true}
              />
              <SolutionCard 
                icon={<Activity size={32} />}
                title="Player Analytics"
                desc="참가 선수들의 역대 전적, 랭킹 포인트, 상세 스탯을 프로 리그 수준으로 추적 및 제공합니다."
                features={['생애 주기별 포인트 시스템', '지역/클럽별 통계', '모바일 전용 선수 프로필']}
              />
            </div>
          </div>
        </section>

        {/* ======== CONTACT CTA ======== */}
        <section className="py-32 px-6 relative" id="contact">
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/10 to-transparent"></div>
          <div className="max-w-5xl mx-auto relative z-10">
            <FadeIn>
              <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="font-headline text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-6">
                      미래를 여는 파트너십
                    </h2>
                    <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                      NEXUS SPORTS 인프라 도입 상담부터 맞춤형 솔루션 구축까지, 전담 컨설턴트가 24시간 내에 가장 완벽한 해답을 제시합니다.
                    </p>
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 text-neutral-300">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                          <Phone className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-sm text-neutral-500 font-bold uppercase tracking-wider">Direct Line</p>
                          <p className="text-lg font-medium">010-0000-0000</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-neutral-300">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                          <Mail className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-sm text-neutral-500 font-bold uppercase tracking-wider">Email</p>
                          <p className="text-lg font-medium">contact@nexussports.kr</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Form */}
                  <div className="bg-[#0a0a0a] rounded-3xl p-8 border border-white/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ======== FOOTER ======== */}
        <footer className="border-t border-white/10 bg-[#020202] pt-20 pb-10 px-6">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="md:col-span-2">
                <div className="flex items-center mb-6">
                  <img src="/logo.png" alt="NEXUS SPORTS" className="h-6 md:h-8 w-auto object-contain" />
                </div>
                <p className="text-neutral-500 text-sm max-w-sm leading-relaxed mb-6">
                  기술로 스포츠의 열정에 무한한 가치를 더합니다. 데이터 정확성과 편의성의 정점을 경험하십시오.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Product</h4>
                <ul className="space-y-4 text-sm text-neutral-500">
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">MatchPoint Engine</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Smart Scoreboard</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">Live API Access</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Legal & Company</h4>
                <ul className="space-y-4 text-sm text-neutral-500">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><span className="block mt-4">서울특별시 넥서스타워 12F</span></li>
                  <li><span>사업자등록번호: 123-45-67890</span></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-600">
              <p>Copyright © 2024 NEXUS SPORTS. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">YouTube</a>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}

/* ──────── COMPONENTS ──────── */

function MetricItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-4xl font-headline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">{value}</span>
      <span className="text-sm font-bold tracking-widest uppercase text-emerald-400/80">{label}</span>
      <div className="w-2 h-2 rounded-full bg-white/20 ml-8"></div>
    </div>
  )
}

function SolutionCard({ icon, title, desc, features, featured=false }: { icon: React.ReactNode, title: string, desc: string, features: string[], featured?: boolean }) {
  return (
    <FadeIn className={cn(
      "p-10 rounded-3xl border transition-all duration-500 relative overflow-hidden group hover:-translate-y-2",
      featured ? "bg-gradient-to-b from-white/10 to-white/5 border-emerald-500/30 shadow-[0_20px_40px_rgba(52,211,153,0.1)]" : "bg-white/5 border-white/10 hover:border-white/20"
    )}>
      {featured && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>}
      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-transform group-hover:scale-110",
        featured ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-white/5 text-neutral-400 border-white/10 group-hover:text-white group-hover:border-white/30"
      )}>
        {icon}
      </div>
      <h3 className="text-2xl font-headline font-bold text-white mb-4">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed mb-8">{desc}</p>
      
      <div className="space-y-3">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-sm text-neutral-300 font-medium">{f}</span>
          </div>
        ))}
      </div>
    </FadeIn>
  )
}

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.currentTarget);
    const data = {
      organization: formData.get('organization'),
      contact: formData.get('contact'),
      inquiry: formData.get('inquiry'),
    };

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('sent');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
        <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-400" />
        </div>
        <h3 className="font-headline text-2xl font-bold text-white mb-3">전송 완료되었습니다</h3>
        <p className="text-neutral-400">담당자가 내용을 확인 후 즉시 연락드리겠습니다.<br/>관심을 가져주셔서 감사합니다!</p>
        <button onClick={() => setStatus('idle')} className="mt-8 text-sm text-emerald-400 border-b border-emerald-400/50 pb-1">새로운 문의 남기기</button>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-5 relative z-10" onSubmit={handleSubmit}>
      <h3 className="text-xl font-headline font-bold text-white mb-2">프리미엄 견적 요청</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-neutral-500 mb-1.5 pl-1">Organization</label>
          <input name="organization" className="w-full bg-black/50 border border-white/10 focus:border-emerald-500/50 focus:shadow-[0_0_15px_rgba(52,211,153,0.15)] text-white px-4 py-3.5 rounded-xl outline-none transition-all text-sm" placeholder="협회, 단체명 또는 구장 이름" type="text" required />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-neutral-500 mb-1.5 pl-1">Name & Contact</label>
          <input name="contact" className="w-full bg-black/50 border border-white/10 focus:border-emerald-500/50 focus:shadow-[0_0_15px_rgba(52,211,153,0.15)] text-white px-4 py-3.5 rounded-xl outline-none transition-all text-sm" placeholder="담당자 성함 및 전화번호" type="text" required />
        </div>
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-neutral-500 mb-1.5 pl-1">Requirements</label>
          <textarea name="inquiry" className="w-full bg-black/50 border border-white/10 focus:border-emerald-500/50 focus:shadow-[0_0_15px_rgba(52,211,153,0.15)] text-white px-4 py-3.5 rounded-xl resize-none outline-none transition-all text-sm h-28" placeholder="도입을 희망하시는 솔루션이나 궁금한 점을 적어주세요." required></textarea>
        </div>
      </div>
      
      <button 
        type="submit" 
        disabled={status === 'sending'} 
        className="w-full mt-4 bg-white text-black font-bold py-4 rounded-xl text-sm shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:bg-neutral-100 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 group"
      >
        {status === 'sending' ? (
          <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin"></div> 전송 중...</span>
        ) : (
          <span className="flex items-center gap-2">상담 예약 신청하기 <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
        )}
      </button>
      {status === 'error' && <p className="text-red-400 text-center text-xs mt-2">서버 오류가 발생했습니다. 잠시 후 시도해주세요.</p>}
    </form>
  )
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden pt-1">
      <button onClick={() => setOpen(!open)} className="text-white p-1 hover:bg-white/10 rounded-md transition-colors">
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {open && (
        <div className="absolute top-full left-0 w-full bg-[#050505]/95 backdrop-blur-2xl border-t border-white/5 py-8 px-6 flex flex-col gap-6 shadow-2xl">
          {['About', 'Solutions', 'Why Us', 'Contact'].map((item) => (
             <a key={item} className="text-white uppercase text-sm tracking-[0.2em] font-headline font-bold border-b border-white/5 pb-4" href={`#${item.toLowerCase().replace(' ', '-')}`} onClick={() => setOpen(false)}>
               {item}
             </a>
          ))}
          <a href="https://matchpoint.bz/login" className="bg-emerald-500 text-black px-6 py-4 rounded-xl font-bold text-sm text-center mt-4">
            시스템 시연해보기
          </a>
        </div>
      )}
    </div>
  );
}
