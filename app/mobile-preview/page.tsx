export default function MobilePreview() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", gap: 18, padding: "32px 16px", background: "#171714", fontFamily: "Inter, Arial, sans-serif" }}>
      <div style={{ width: 390, maxWidth: "100%", height: 844, overflow: "hidden", border: "10px solid #2b2a26", borderRadius: 34, background: "#f4efe3", boxShadow: "0 22px 60px #0008" }}>
        <iframe title="Gab Real Inc mobile homepage preview" src="/" style={{ width: "100%", height: "100%", border: 0, background: "#f4efe3" }} />
      </div>
      <p style={{ maxWidth: 390, margin: 0, color: "#f4efe3", fontSize: 13, lineHeight: 1.5, textAlign: "center" }}>Interactive 390 × 844 mobile preview. Scroll inside the phone frame.</p>
    </main>
  );
}
