async function sendCode(ident, code) {
  if (process.env.OTP_DEV === 'true') {
    console.log(`[DEV] OTP for ${ident}: ${code}`);
    return;
  }

  if (ident.includes('@')) {
    await mail.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: ident,
      subject: 'Your UNITED KERALAM verification code',
      text: `Your code is ${code}. It is valid for 10 minutes. If you did not request it, ignore this message.`
    });
    return;
  }

  await sendSms(ident, code);
}