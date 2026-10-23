import LangSync from "@/components/LangSync";

export default function HindiLayout({ children }) {
  return (
    <>
      <LangSync lang="hi-IN" />
      {children}
    </>
  );
}
