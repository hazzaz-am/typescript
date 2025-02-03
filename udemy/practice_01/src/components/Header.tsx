import { type PropsWithChildren } from "react";

type HeaderProps = PropsWithChildren<{
	img: { src: string; alt: string };
	// menus: { id: number; title: string }[];
}>;

const Header = ({ img, children }: HeaderProps) => {
	return (
		<header>
			<img src={img.src} alt={img.alt} />
			{children}
			{/* <ul style={{
        display: "flex",
        listStyle: "none",
        padding: 0,
      }}>
        {menus.map((menu) => (
          <li key={menu.id}>{menu.title}</li>
        ))}
      </ul> */}
		</header>
	);
};
export default Header;
