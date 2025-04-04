import Image from "next/image";

export const Header = () => {
  return (
    <header className="w-full bg-white shadow base:px-3 xl:px-0">
      <div className="max-w-7xl mx-auto py-6">
        <div className="flex items-center gap-2">
          <div className="size-14 relative">
            <Image src="/icons/world.svg" alt="icon-world" fill />
          </div>
          <div>
            <span className="font-extrabold text-2xl">
              Countries of the World
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
