import Beranda from "./_components/Beranda";
import Fitur from "./_components/Fitur";
import KontenKami from "./_components/KontenKami";
import MediaSosial from "./_components/MediaSosial";
import Testimoni from "./_components/Testimoni";

export default function Home() {
  return (
    <div className="bg-white">
      <Beranda />
      <Fitur />
      <Testimoni />
      <KontenKami />
      <MediaSosial />
    </div>
  );
}
