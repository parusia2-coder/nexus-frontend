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

    // 슬랙(Slack) 웹훅 알림 발송
    const slackUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackUrl) {
      await fetch(slackUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🚨 *[NEXUS SPORTS 신규 도입 문의]*\n\n*🏢 협회명:* ${organization || '미입력'}\n*👤 담당자/연락처:* ${contact || '미입력'}\n*💬 요건/문의:* ${inquiry || '내용 없음'}`
        }),
      });
    } else {
      console.warn('Slack Webhook URL이 설정되지 않았습니다.');
    }

    return NextResponse.json({ success: true, message: '문의가 성공적으로 접수되었습니다.' });
  } catch (error) {
    console.error('[Inquiry API Error]', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
