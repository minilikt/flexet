interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function EmailTemplate({ name, subject, message }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h2>Hi {name}</h2>
      <p>Thanks for reaching out to <strong>FlexET</strong>.</p>
      <p>We received your message:</p>
      <blockquote>
        <strong>Subject:</strong> {subject} <br />
        <strong>Message:</strong> {message}
      </blockquote>
      <p>Our team will get back to you within 24 hours.</p>
      <p>— FlexET Team </p>
    </div>
  );
}
