import Image from "next/image";

type Stat = {
    iconSrc: string;
    label: string;
    value: string;
};

type CanadaStatsSidebarProps = {
    stats: Stat[];
};

export default function CanadaStatsSidebar({ stats }: CanadaStatsSidebarProps) {
  return (
    <aside className="w-[260px] shrink-0 bg-gray-50 max-md:w-full max-md:pt-6">
      <div className="w-full h-2 bg-primary mb-2" />
      <div className="flex flex-col divide-y divide-gray-200">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-start gap-3 py-3 px-4">
            <Image src={stat.iconSrc} alt={stat.label} width={20} height={20} className="shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-primary">{stat.label}</p>
              <p className="text-xs text-gray-500 whitespace-pre-line">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}