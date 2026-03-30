'use client';

import React, { useState } from 'react';

export default function NexusLandingPage() {
  return (
    <div className="selection:bg-tertiary-fixed/25 bg-surface text-on-surface min-h-screen">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-2xl shadow-black/40">
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-screen-2xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-neutral-200 font-headline">
            NEXUS SPORTS
          </div>
          {/* Mobile menu button */}
          <MobileMenu />
          <div className="hidden md:flex gap-10 items-center">
            <a className="text-neutral-400 uppercase text-xs tracking-widest hover:text-emerald-400 transition-colors duration-300 font-label" href="#about">About</a>
            <a className="text-emerald-400 font-semibold uppercase text-xs tracking-widest font-label" href="#solutions">Solutions</a>
            <a className="text-neutral-400 uppercase text-xs tracking-widest hover:text-emerald-400 transition-colors duration-300 font-label" href="#why-us">Why Us</a>
            <a className="text-neutral-400 uppercase text-xs tracking-widest hover:text-emerald-400 transition-colors duration-300 font-label" href="#contact">Contact</a>
          </div>
          <a
            href="https://matchpoint.bz/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-primary text-on-primary px-6 py-2 rounded font-bold text-sm hover:scale-95 transition-all duration-150"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img className="w-full h-full object-cover grayscale brightness-50" alt="Cinematic sports arena" src="/hero.png" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
          <img className="w-24 h-24 mx-auto mb-8 object-contain" alt="Nexus Sports logo" src="/core.png" />
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight max-w-5xl mx-auto">
            미래의 스포츠 대회를,<br />
            <span className="text-tertiary-fixed">오늘 경험하십시오.</span>
          </h1>
          <p className="font-body text-on-surface-variant text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            아마추어 스포츠의 한계를 뛰어넘는 완벽한 디지털 전환(DX),<br className="hidden sm:block" />
            넥서스스포츠가 이끄는 새로운 대회 표준입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="kinetic-gradient text-on-primary font-bold px-8 sm:px-10 py-4 rounded text-lg shadow-xl shadow-black/50 hover:scale-95 transition-all inline-block text-center">
              솔루션 도입 문의하기
            </a>
            <a
              href="https://matchpoint.bz/login"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-outline-variant hover:bg-surface-container-highest text-on-surface font-semibold px-8 sm:px-10 py-4 rounded text-lg transition-all backdrop-blur-sm inline-block text-center"
            >
              매치포인트 시연 시뮬레이터
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-tertiary-fixed-dim">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-surface" id="about">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-tertiary-fixed uppercase text-xs tracking-widest font-bold mb-4 block">Expert Identity</span>
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8 tracking-tighter">Sports Tech Precision</h2>
              <p className="text-on-surface-variant text-base md:text-lg leading-loose mb-12">
                넥서스스포츠는 단순한 관리 툴을 넘어, 경기 데이터의 정밀한 분석과 매끄러운 운영 환경을 구축하는 스포츠 테크 전문 파트너입니다. 아마추어 대회의 모든 과정을 고도화된 AI 엔진과 클라우드 네이티브 아키텍처로 혁신합니다.
              </p>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {[
                  { tag: '#무설치웹기반', sub: 'Any Device, Anywhere' },
                  { tag: '#AI스마트배정', sub: 'Optimum Scheduling' },
                  { tag: '#실시간전광판', sub: 'Instant Sync' },
                  { tag: '#디지털재무관리', sub: 'Transparent Finance' },
                ].map((item) => (
                  <div key={item.tag} className="p-4 md:p-6 bg-surface-container-low border-l-2 border-tertiary-fixed">
                    <div className="text-tertiary-fixed font-headline text-lg md:text-xl font-bold mb-2">{item.tag}</div>
                    <p className="text-xs md:text-sm text-neutral-500 font-label">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-surface-container-highest rounded-xl overflow-hidden asymmetric-mask">
                <img className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" alt="Sports data dashboard" src="/about.png" />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-tertiary-fixed p-6 md:p-8 w-36 h-36 md:w-48 md:h-48 flex items-center justify-center text-on-tertiary-fixed font-headline font-bold text-center leading-tight text-sm md:text-base">
                99.9%<br />DATA<br />ACCURACY
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Solutions */}
      <section className="py-20 md:py-32 bg-surface-container-lowest" id="solutions">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight mb-4">Core Solutions</h2>
            <div className="h-1 w-20 bg-tertiary-fixed mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: 'dashboard_customize',
                title: 'MatchPoint',
                desc: 'SaaS 기반 AI 브래킷 엔진. 복잡한 대진표 작성을 단 몇 초 만에 최적화하여 완료합니다.',
                features: ['AI 대진 자동화', '참가비 자동 정산'],
                bgIcon: 'hub',
                highlight: false,
              },
              {
                icon: 'live_tv',
                title: 'Nexus Live',
                desc: '경기 하이라이트와 클립 자동 생성. 아마추어 선수들에게 프로 레벨의 미디어 경험을 제공합니다.',
                features: ['실시간 득점 클립', '모바일 즉시 공유'],
                bgIcon: 'videocam',
                highlight: true,
              },
              {
                icon: 'ad_units',
                title: 'Smart AD Scoreboard',
                desc: '대회 수익화를 위한 스마트 전광판 시스템. 광고 송출과 실시간 스코어를 동시에 관리합니다.',
                features: ['지역 광고주 타겟팅', '스폰서십 대시보드'],
                bgIcon: 'bar_chart',
                highlight: false,
              },
            ].map((sol) => (
              <div key={sol.title} className={`bg-surface-container-low p-8 md:p-10 group hover:bg-surface-container-high transition-all duration-300 relative overflow-hidden ${sol.highlight ? 'border-t-4 border-tertiary-fixed' : ''}`}>
                <span className="material-symbols-outlined text-4xl text-tertiary-fixed mb-8 block">{sol.icon}</span>
                <h3 className="font-headline text-2xl font-bold mb-4">{sol.title}</h3>
                <p className="text-on-surface-variant mb-8 font-body">{sol.desc}</p>
                <ul className="space-y-3 mb-12">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-on-surface">
                      <span className="material-symbols-outlined text-sm text-tertiary-fixed">check_circle</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-[12rem]">{sol.bgIcon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-32 bg-surface" id="why-us">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-neutral-500 uppercase text-xs tracking-widest font-bold mb-4 block">Benchmark</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">The NEXUS Standard</h2>
          </div>
          <div className="overflow-x-auto border border-outline-variant rounded-lg">
            <table className="w-full text-left min-w-[500px]">
              <thead className="bg-surface-container-highest font-headline">
                <tr>
                  <th className="p-4 md:p-6 text-sm uppercase tracking-wider text-neutral-400">Features</th>
                  <th className="p-4 md:p-6 text-sm uppercase tracking-wider text-neutral-400">Traditional</th>
                  <th className="p-4 md:p-6 text-sm uppercase tracking-wider text-tertiary-fixed">NEXUS SPORTS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {[
                  ['Installation', 'PC Software / Local', 'Cloud-Web Based'],
                  ['Bracketing', 'Manual / Excel', 'AI Smart Bracket'],
                  ['Media', 'Fixed Cameras / Delayed', 'Real-time Highlights'],
                  ['Scalability', 'Single Device Only', 'Multi-Tournament Sync'],
                ].map(([feature, old, nexus]) => (
                  <tr key={feature} className="hover:bg-surface-container-low transition-colors">
                    <td className="p-4 md:p-6 font-semibold text-sm md:text-base">{feature}</td>
                    <td className="p-4 md:p-6 text-neutral-500 text-sm md:text-base">{old}</td>
                    <td className="p-4 md:p-6 text-on-surface text-sm md:text-base">
                      <span className="inline-flex items-center gap-2">
                        <span className="material-symbols-outlined text-tertiary-fixed text-sm">bolt</span> {nexus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ecosystem / Mockups — Responsive */}
      <section className="py-20 md:py-32 bg-surface-container-low overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              {/* Desktop: Dashboard + mobile overlay */}
              <div className="hidden md:block bg-black p-4 rounded-xl shadow-2xl border border-outline-variant transform -rotate-2 relative z-10">
                <img className="rounded-lg shadow-inner w-full" alt="Dashboard interface" src="/dashboard.png" />
              </div>
              <div className="hidden lg:block absolute -top-12 -right-4 w-64 bg-surface-container-highest p-4 rounded-xl shadow-2xl border border-tertiary-fixed/30 transform rotate-3 z-20">
                <img className="rounded-lg w-full" alt="Mobile mockup" src="/mockup.png" />
              </div>
              {/* Mobile: Only show mockup */}
              <div className="md:hidden flex justify-center w-full">
                <div className="w-64 sm:w-80 bg-surface-container-highest p-4 rounded-xl shadow-2xl border border-tertiary-fixed/30 mx-auto">
                  <img className="rounded-lg w-full" alt="Mobile mockup" src="/mockup.png" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8 leading-tight">Seamlessly Integrated<br />Ecosystem</h2>
              <p className="text-on-surface-variant text-base md:text-lg mb-10">
                대회 운영자의 관리 대시보드부터 참가 선수의 모바일 리포트까지. 모든 데이터는 실시간으로 동기화되어 하나의 거대한 스포츠 네트워크를 형성합니다.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed p-2 rounded-full material-symbols-outlined shrink-0">devices</span>
                  <div>
                    <h4 className="font-bold mb-1">Cross-Platform Sync</h4>
                    <p className="text-sm text-neutral-500">PC, 태블릿, 모바일 어디서나 동일한 운영 환경 지원</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="bg-tertiary-fixed text-on-tertiary-fixed p-2 rounded-full material-symbols-outlined shrink-0">notifications_active</span>
                  <div>
                    <h4 className="font-bold mb-1">Push Intelligence</h4>
                    <p className="text-sm text-neutral-500">경기 순서 변경 및 결과 실시간 자동 알림</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-surface bg-cover bg-center" style={{ backgroundImage: "url('/cta.png')", backgroundBlendMode: 'overlay' }} id="contact">
        <div className="max-w-4xl mx-auto px-6 md:px-8 bg-surface-container-high/90 backdrop-blur-md p-8 md:p-12 rounded-lg border border-outline-variant">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Contact &amp; Partnership</h2>
            <p className="text-neutral-500">넥서스스포츠와 함께 대회의 가치를 높이십시오.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-cover bg-center border-t border-neutral-800/30" style={{ backgroundImage: "url('/cont.png')", backgroundBlendMode: 'multiply' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12 py-12 md:py-16 max-w-screen-2xl mx-auto">
          <div>
            <div className="text-lg font-bold text-neutral-200 mb-6 font-headline">NEXUS SPORTS</div>
            <p className="text-sm text-neutral-500 font-body leading-relaxed max-w-xs">
              서울특별시 강남구 테헤란로 넥서스타워 12F<br />
              대표이사: 김철수 | 사업자등록번호: 123-45-67890
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-neutral-200 font-bold mb-2">Platform</h4>
            <a className="text-sm text-neutral-500 hover:text-neutral-100 transition-all" href="https://matchpoint.bz" target="_blank" rel="noopener noreferrer">MatchPoint SaaS</a>
            <a className="text-sm text-neutral-500 hover:text-neutral-100 transition-all" href="#">Nexus Live Stream</a>
            <a className="text-sm text-neutral-500 hover:text-neutral-100 transition-all" href="#">Tournament API</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-neutral-200 font-bold mb-2">Legal &amp; Social</h4>
            <div className="flex gap-6">
              <a className="text-neutral-500 hover:text-emerald-400 transition-all" href="#">Privacy Policy</a>
              <a className="text-neutral-500 hover:text-emerald-400 transition-all" href="#">Terms of Service</a>
            </div>
            <div className="flex gap-4 mt-4">
              <span className="material-symbols-outlined text-neutral-500 hover:text-emerald-400 cursor-pointer">share</span>
              <span className="material-symbols-outlined text-neutral-500 hover:text-emerald-400 cursor-pointer">forum</span>
              <span className="material-symbols-outlined text-neutral-500 hover:text-emerald-400 cursor-pointer">public</span>
            </div>
          </div>
        </div>
        <div className="px-6 md:px-12 py-8 border-t border-neutral-800/20 text-center md:text-left">
          <p className="text-sm text-neutral-500 font-body">© 2024 NEXUS SPORTS. Kinetic Precision Engineering.</p>
        </div>
      </footer>
    </div>
  );
}

/* ── Mobile Menu Component ── */
function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(!open)} className="text-neutral-300 p-2">
        <span className="material-symbols-outlined">{open ? 'close' : 'menu'}</span>
      </button>
      {open && (
        <div className="absolute top-full left-0 w-full bg-surface-container-high/95 backdrop-blur-xl border-t border-outline-variant py-6 px-8 flex flex-col gap-5 z-50">
          <a className="text-neutral-300 uppercase text-sm tracking-widest" href="#about" onClick={() => setOpen(false)}>About</a>
          <a className="text-emerald-400 font-semibold uppercase text-sm tracking-widest" href="#solutions" onClick={() => setOpen(false)}>Solutions</a>
          <a className="text-neutral-300 uppercase text-sm tracking-widest" href="#why-us" onClick={() => setOpen(false)}>Why Us</a>
          <a className="text-neutral-300 uppercase text-sm tracking-widest" href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="https://matchpoint.bz/login" target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-6 py-3 rounded font-bold text-sm text-center mt-2">Get Started</a>
        </div>
      )}
    </div>
  );
}

/* ── Contact Form Component ── */
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
      <div className="text-center py-16">
        <span className="material-symbols-outlined text-6xl text-tertiary-fixed mb-4 block">check_circle</span>
        <h3 className="font-headline text-2xl font-bold mb-2">문의가 접수되었습니다!</h3>
        <p className="text-neutral-500">담당자가 곧 연락드리겠습니다.</p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 font-label">Organization</label>
          <input name="organization" className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-tertiary-fixed text-on-surface p-4 rounded outline-none" placeholder="협회명 또는 기관명" type="text" required />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 font-label">Name / Contact</label>
          <input name="contact" className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-tertiary-fixed text-on-surface p-4 rounded outline-none" placeholder="담당자 성함 및 연락처" type="text" required />
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2 font-label">Inquiry Area</label>
        <textarea name="inquiry" className="w-full bg-surface-container-highest border-none focus:ring-1 focus:ring-tertiary-fixed text-on-surface p-4 rounded resize-none outline-none" placeholder="도입 희망 솔루션 및 문의사항" rows={4} required></textarea>
      </div>
      <button type="submit" disabled={status === 'sending'} className="w-full kinetic-gradient text-on-primary font-bold py-5 rounded text-lg shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50">
        <span className="material-symbols-outlined">{status === 'sending' ? 'hourglass_top' : 'download'}</span>
        {status === 'sending' ? '접수 중...' : '제안서 다운로드 및 도입 문의하기'}
      </button>
      {status === 'error' && <p className="text-red-400 text-center text-sm">문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>}
    </form>
  );
}
