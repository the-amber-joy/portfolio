import SvgIconLink from "./SvgIconLink";

export default function ResumeLink() {
  return (
    <SvgIconLink
      title="Resume"
      url="https://docs.google.com/document/d/e/2PACX-1vRSbGbIX-4Dl1StiITfPGkM0IKZGYr21jSJ2ru-GDXsY7AI9QQW9VMfPQedzVVgo1SIXZBOwS5Vyzlz/pub"
    >
      <title>Resume</title>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </SvgIconLink>
  );
}
