
function JavaAppCard({ onClick }) {
  return (
    <>
      <div
        className="flex justify-center items-center absolute inset-0 bg-black/40"
        onClick={onClick}
      >
        <div
          className="w-[30%] h-[100%] bg-black/90 border border-white/70 rounded-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="grid grid-cols-2 auto-rows-auto h-auto text-xs gap-y-4 p-4">
            <img
              className="rounded-lg col-start-1 col-span-2"
              src="../src/assets/EasyShare.png"
            />
            <div className="col-start-1 col-span-1 flex flex-col">
              <p className="text-xl pb-2 font-semibold">EasyShare</p>
              <p>
                This project was created because I wanted to be able to easily
                share files (currently up to 100MB) with my friends. <br /> The
                server is hosted from a Raspberry Pi 5. Self hosting is a
                challenge but a lot of fun and was a good learning experience.{" "}
                <br /> <br /> Give it a try!
              </p>
            </div>

            <div className="col-start-2 col-span-2 flex flex-col text-center">
              <ul className="space-y-2">
                <p className="text-sm underline decoration-gray-100/90 decoration-1 font-semibold">
                  Built with:
                </p>
                <li>React/Vite</li>
                <li>Tailwindcss</li>
                <li>Node.js (Express)</li>
                <li>Linux(Debian)</li>
                <li>Raspberry Pi 5</li>
                <li>Claudflare(Tunnel)</li>
                <li>Git/Github</li>
              </ul>
            </div>
            <div className="grid auto-rows-auto col-start-1 col-span-2 space-y-2">
              <a className="underline text-lg" href="https://EasyShare.se">
                www.EasyShare.se
              </a>
              <div className="flex items-center">
                <img
                  className="h-6 w-6"
                  src="../src/assets/github-mark-white.png"
                />
                <a
                  className="underline text-lg"
                  href="https://github.com/99alexx/EasyShareReadme"
                >
                  ReadMe
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default JavaAppCard;

