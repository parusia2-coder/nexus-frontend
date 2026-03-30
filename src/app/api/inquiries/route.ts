import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { organization, contact, inquiry } = body;

    console.log('--- 🚀 [NEXUS SPORTS] 신규 도입 문의 접수 ---');
    console.log('기관명:', organization);
    console.log('연락처:', contact);
    console.log('문의사항:', inquiry);
    console.log('접수시각:', new Date().toISOString());
    console.log('-------------------------------------------');

    // TODO: 슬랙 웹훅 / 카카오 알림톡 / Supabase DB 저장 연동
    // 예시:
    // await fetch(process.env.SLACK_WEBHOOK_URL!, {
    //   method: 'POST',
    //   body: JSON.stringify({ text: `새 문의: ${organization} - ${contact}` }),
    // });

    return NextResponse.json({ success: true, message: '문의가 성공적으로 접수되었습니다.' });
  } catch (error) {
    console.error('[Inquiry API Error]', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
