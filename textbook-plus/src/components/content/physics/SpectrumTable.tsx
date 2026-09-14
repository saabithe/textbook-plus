import { TableCard } from "@/components/content/data/TableCard";

export function SpectrumTable() {
  return (
    <TableCard
      title="THE ELECTROMAGNETIC SPECTRUM AT A GLANCE"
      headers={["Wave", "Frequency trend", "Main association", "Famous use"]}
      rows={[
        { cells: ["📡 Radio", "Lowest", "Communication", "Radio / TV"] },
        { cells: ["📶 Microwave", "↑", "Resonance · radar", "Radar / oven"] },
        { cells: ["🔥 Infrared", "↑", "Heat · thermal", "Therapy / remote"] },
        { cells: ["🌈 Visible", "↑", "Vision", "Human eye"] },
        { cells: ["☀️ UV", "↑", "Chemical / biological effects", "Sterilisation"] },
        { cells: ["🦴 X-ray", "↑", "Penetration", "Imaging"] },
        { cells: ["☢️ Gamma", "Highest", "Nuclear / high energy", "Cancer / food"] },
      ]}
    />
  );
}