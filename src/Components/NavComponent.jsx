import Link from "next/link";
import { usePathname } from "next/navigation";
import navbar from "@/service/navHeader";
const NavComponent = ({ isLinking, setIsLinking }) => {
  const pathname = usePathname();

  const handleToggleLinking = () => {
    setIsLinking(!isLinking);
  };

  return (
    <>
      <nav className="bg-white border-gray-200 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link href="/" className="flex items-center">
            <img
              className=" w-60 h-20 "
              src="https://www.tfe.agency/wp-content/uploads/2022/03/amazon.png"
              alt=""
            />
          </Link>

          <div
            className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {navbar.map(({ id, path, label }) => (
                <li key={id}>
                  <Link
                    onClick={handleToggleLinking}
                    href={path}
                    style={
                      pathname == path
                        ? { color: "orange" }
                        : { color: "black" }
                    }
                    aria-current="page"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavComponent;
